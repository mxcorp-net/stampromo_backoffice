import {Status} from './status';

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    status: Status;
    token?: string;
}
