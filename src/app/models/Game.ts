import { Player } from "./Player";

export class Game {
    public id;
    public name;
    public players: Player[];
    public max;

    constructor(id: number, name: string, players: Player[], max: number) {
        this.id = id;
        this.name = name;
        this.players = players;
        this.max = max;
    }
}