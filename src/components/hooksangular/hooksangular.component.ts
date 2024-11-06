import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit {
    public mensaje: string;
    constructor() {
        console.log("Soye el constructor de hooks angular");
        this.mensaje = "Soy Hooks en Angular"
    }

    cambiarMensaje(): void {
        this.mensaje = "Cambiando en un CLICK!!"
    } 
    ngOnInit(): void {
        console.log("NgOnInit");
    }

    ngDoCheck(): void {
        console.log("ejecutando DoCheck")
    }
}