export class Adopted {
    public get petName(): string {
        return this._petName;
    }
    public set petName(value: string) {
        this._petName = value;
    }
    public get pet(): number {
        return this._pet;
    }
    public set pet(value: number) {
        this._pet = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(
        private _name: string,
        private _pet: number,
        private _petName: string
    ) {}
}