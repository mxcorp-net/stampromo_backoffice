import {Component, OnInit} from '@angular/core';
import {Family} from '../../../_models/family';
import {BsModalRef} from 'ngx-bootstrap';
import {FamiliesService} from '../../../services/families.service';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {FamilyAttribute} from '../../../_models/family.attribute';
import {MessageService} from '../../../@pages/components/message/message.service';

@Component({
    selector: 'app-families-edit-modal',
    templateUrl: './families-edit-modal.component.html',
    styleUrls: ['./families-edit-modal.component.scss']
})
export class FamiliesEditModalComponent implements OnInit {
    family: Family = new Family();
    title: string;
    familyGroup: FormGroup;
    attributeTypes = [
        {value: 'Text', label: ''},
        {value: 'Number', label: ''},
        {value: 'Date', label: ''},
        {value: 'File', label: ''},
        {value: 'Image', label: '', disabled: false}
    ];
    selectedOption: any;

    constructor(
        public bsModalRef: BsModalRef,
        private familiesService: FamiliesService,
        private fb: FormBuilder,
        private _notification: MessageService
    ) {
        this.familyGroup = this.fb.group({
            familyName: ['', [Validators.required]],
            familyDescription: ['', [Validators.required]],
            familyAttributes: this.fb.array([])
        });
    }

    ngOnInit() {
        if (this.family.id > 0) {
            this.title = 'Edit Family';
            this.familyGroup.controls['familyName'].setValue(this.family.name);
            this.familyGroup.controls['familyDescription'].setValue(this.family.description);
            this.familiesService.getAttributes(this.family.id).subscribe(
                data => {
                    this.family.attributes = data;
                    for (const attribute of this.family.attributes) {
                        this.addAttribute(attribute.id, attribute.name, attribute.type);
                    }
                }
            );
        } else {
            this.title = 'New Family';
        }

    }

    getFormControl(name) {
        return this.familyGroup.controls[name];
    }


    deleteFamily(id: number): void {
        alert('Trigger Delete');
    }

    addAttribute(id: number, name: string, type: string): void {
        const builder = this.fb.group({
            familyAttribute: [name, [Validators.required]],
            familyAttributeId: [id, [Validators.required]],
            familyAttributeType: [type, [Validators.required]]
        });
        this.familyGroup.get('familyAttributes')['controls'].push(builder);
    }

    saveFamily(familyGroup: FormGroup): void {
        // const family = new Family();

        // TODO: assign data to new family
        this.family.name = this.familyGroup.controls['familyName'].value;
        this.family.description = this.familyGroup.controls['familyDescription'].value;

        this.familiesService.saveFamily(this.family).subscribe(
            dataFamily => {
                this.family.id = dataFamily.id;

                for (const attGroup of this.familyGroup.get('familyAttributes')['controls']) {
                    const attribute = new FamilyAttribute();
                    // TODO: assign data to new attribute
                    attribute.familyId = this.family.id;
                    attribute.id = attGroup.controls['familyAttributeId'].value;
                    attribute.name = attGroup.controls['familyAttribute'].value;
                    attribute.type = attGroup.controls['familyAttributeType'].value;

                    this.familiesService.saveAttribute(attribute).subscribe(
                        dataAttribute => {
                            console.log('attribute saved');
                            // this._notification.create(
                            //     'primary',
                            //     'New Attribute ' + attribute.name + ' Added',
                            //     { // TODO give style to error notification
                            //         Position: 'top',
                            //         Style: 'bar',
                            //         Duration: 10000
                            //     }
                            // );
                        }, error => {
                            this.bsModalRef.hide();
                        }
                    );
                }

                this._notification.create(
                    'primary',
                    'The Family ' + this.family.name + ' was saved successfully',
                    { // TODO give style to error notification
                        Position: 'top',
                        Style: 'bar',
                        Duration: 10000
                    }
                );
            }, error => {
                this.bsModalRef.hide();
            }, () => this.bsModalRef.hide()
        );
    }
}
