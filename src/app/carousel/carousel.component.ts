import { Component, OnInit } from '@angular/core';
import { MaquetaOleService } from '../Servicios/maqueta-ole.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  miMaquetaOle:any;
constructor(private datosMaqueta:MaquetaOleService){}
ngOnInit(): void {
  this.datosMaqueta.ObtenerDatos().subscribe(data =>{
    console.log(data);
    this.miMaquetaOle=data; 
  });
}
}