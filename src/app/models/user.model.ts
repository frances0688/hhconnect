export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
