export class User {
  private _email: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  
  public constructor(email: string, password: string, firstName: string, lastName: string, phoneNumber: string) {
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phoneNumber = phoneNumber;
  }
  
  public get email(): string {
    return this._email;
  }
  
  public set email(email: string) {
    this._email = email;
  }
  
  public get password(): string {
    return this._password;
  }
  
  public set password(password: string) {
    this._password = password;
  }
  
  public get firstName(): string {
    return this._firstName;
  }
  
  public set firstName(firstName: string) {
    this._firstName = firstName;
  }
  
  public get lastName(): string {
    return this._lastName;
  }
  
  public set lastName(lastName: string) {
    this._lastName = lastName;
  }
  
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  
  public set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }
}
  