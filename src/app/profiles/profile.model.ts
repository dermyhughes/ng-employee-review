// class model for profile details
export class Profile {
  public firstName: string;
  public lastName: string;
  public review: string;

  // Constructor so data can be passed directly to profile-list array
  constructor(firstName: string, lastName: string, desc: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.review = desc;
  }
}
