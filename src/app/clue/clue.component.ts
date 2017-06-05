import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

interface Sospechoso {
    nombre?: string;
    color?: string;
    img?: string;
}


 function crearSospechoso(config : Sospechoso ): { nombre : string; color: string , img: string}{
   let nuevoSospechoso = { nombre :'', color:'',img :'' };
   if(config.nombre){
     nuevoSospechoso.nombre = config.nombre;   }
   if(config.color){
     nuevoSospechoso.color = config.color;
     nuevoSospechoso.img ='sospechosos/'+config.color+'.png';
   }
   return nuevoSospechoso;
 }


@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
        transition('small <=> large', animate('300ms ease-in', style({
          transform: 'translateY(40px)'
        }))),


        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),

  ]
})




export class ClueComponent implements OnInit {
state: string = 'small';
  constructor() { }
  sospechosos : any;
  arma = [];
  lugar=[];
  ngOnInit() {
  	this.sospechosos = [];
    this.TodosSospechosos();
    this.TodoArmas();
    this.TodoLugar();
  		
  }


  TodosSospechosos(){
  	this.sospechosos.push( crearSospechoso({ nombre : 'Escarlata', color:'rojo'} ));
  	this.sospechosos.push( crearSospechoso({ nombre : 'Colonel Mustard ', color:'amarrillo'} ));
  	this.sospechosos.push( crearSospechoso({ nombre : 'Mrs. White', color:'blanco'} ));	
  	this.sospechosos.push( crearSospechoso({ nombre : 'Reverend Gree', color:'verde'} ));
  	this.sospechosos.push( crearSospechoso({ nombre : 'Mrs. Peacock', color:'Azul'} ));	
    this.sospechosos.push( crearSospechoso({ nombre : 'Professor Plum', color:'morado'} ));
  
  }
 TodoArmas (){
 	this.arma.push(['soga']);
 	this.arma.push(['daga']);
 	this.arma.push(['llaveinglesa']);
 	this.arma.push(['calendabro']);
 	this.arma.push(['pistola']);
 	this.arma.push(['tubo']);
}


 TodoLugar (){
 	this.lugar.push(['cocina']);
 	this.lugar.push(['comedor']);
 	this.lugar.push(['estudio']);
 	this.lugar.push(['garage']);
 	this.lugar.push(['patio']);
 	this.lugar.push(['sala']);
 	this.lugar.push(['bano']); 
    this.lugar.push(['habitacion']);


}

  animateMe() {
 console.log( this.state );
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
