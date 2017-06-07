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
    dado_uno = 0;
    dado_dos =0;
    run_dados : any;
    total_dados =0;
     

    ngOnInit() {
      this.sospechosos = [];
      this.TodosSospechosos();
      this.TodoArmas();
      this.TodoLugar();
      this.run_dados = false;

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
     
      this.state = (this.state === 'small' ? 'large' : 'small');
    }

    run_dice(){
      var self = this;
      if(this.run_dados === false){      
       this.run_dados =  setInterval(function(){          
          self.dado_dos = self.getRandomInt(1,6);   
          self.dado_uno = self.getRandomInt(1,6);
          self.animateMe();
        }, 300);     

      }else{         
        clearInterval(self.run_dados);
        this.total_dados = this.dado_dos + this.dado_uno;
        this.run_dados = false
      }
      

    }


    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
