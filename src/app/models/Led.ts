import { Color } from './Color';

export class Led {
    public id: number;
    public idRuban: number;
    public color: Color;

    constructor(id: number, idRuban: number, color: Color) {
        this.id = id;
        this.idRuban = idRuban;
        this.color = color;
    }
}