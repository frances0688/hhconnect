export class User {
    id: string;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
