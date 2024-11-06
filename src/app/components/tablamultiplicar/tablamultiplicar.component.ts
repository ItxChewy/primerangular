import { Component,ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {

  @ViewChild("cajanumero") cajaNumeroRef: ElementRef;
  public operacion: Array<string>;
  public resultado: Array<number>;
  // public tabla: Array<{operaciones:Array<string>,resultados:Array<number>}>

  constructor(){
    this.cajaNumeroRef = new ElementRef(0)
    // this.tabla = [{
    //   operaciones:[],
    //   resultados:[]
    // }]
    this.operacion = []
    this.resultado = []
  }
  
  cargarTabla(): void{
    this.operacion = []
    this.resultado = []
    // this.tabla = []
    let numero = parseInt(this.cajaNumeroRef.nativeElement.value);
    for(let i = 1 ;i<=10;i++){
      this.operacion.push(numero + "*" + i );
      this.resultado.push(numero*i)
      // this.tabla[i].operaciones.push(numero + "*" + i )
      // this.tabla[i].resultados.push(numero * i )
    }

  }
}
