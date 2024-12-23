export class SalesPerson {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _salesVolume: number;

    constructor(firstName: string, lastName: string, email: string, salesVolume: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._salesVolume = salesVolume;
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

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get salesVolume(): number {
        return this._salesVolume;
    }

    public set salesVolume(salesVolume: number) {
        this._salesVolume = salesVolume;
    }
}