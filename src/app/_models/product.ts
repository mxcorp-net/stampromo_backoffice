import {Status} from './status';
import {Family} from './family';

export class Product {
    id: number;
    name: string;
    description: string;
    providerId: number;
    familyId: number;
    status: Status;

    imageDefault: string;
    family: Family;
}
