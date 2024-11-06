import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
    public sports:Array<string>;
    public numeros:Array<number>;
    constructor(){
        this.sports = ["Fútbol","Baloncesto","Hockey","Pádel"];
        this.numeros = [1,2,3,4,5,6,7,8,9,10]
    }
}