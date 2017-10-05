export class User {
    id: string;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    availability: {
      mondayDay: boolean,
      tuesdayDay: boolean,
      wednesdayDay: boolean,
      thursdayDay: boolean,
      fridayDay: boolean,
      saturdayDay: boolean,
      sundayDay: boolean,
      mondayNight: boolean,
      tuesdayNight: boolean,
      wednesdayNight: boolean,
      thursdayNight: boolean,
      fridayNight: boolean,
      saturdayNight: boolean,
      sundayNight: boolean
    };

    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
