import { Injectable } from '@angular/core';
import { Http } from '@angular/http'



@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando: boolean = true;

  constructor( private http: Http ) {
    
    this.cargar_productos();

   }

   public cargar_productos(){

    this.cargando = true;

    if (this.productos.length === 0){
      this.http.get('https://portafolio-abb4a.firebaseio.com/productos_idx.json')
          .subscribe( res => {
          
            // setTimeout( ()=>{
              this.cargando = false;
              this.productos = res.json();
            // },1000)
            
          });
    }
   }


   public cargar_producto( cod: string ){

    return this.http.get(`https://portafolio-abb4a.firebaseio.com/productos/${ cod }.json`);

   }




}
