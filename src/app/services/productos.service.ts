import { Injectable } from '@angular/core';
import { Http } from '@angular/http'



@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando: boolean = true;
  productos_filtrado:any[] = [];

  constructor( private http: Http ) {
    
    this.cargar_productos();

   }


    public buscar_producto(termino:string){


     if( this.productos.length === 0 ){
      this.cargar_productos().then( ()=> {
        //terminó la carga!!! 
        this.filtrar_producto(termino);
      });
     }else{
      this.filtrar_producto(termino);
    }
   }

    private filtrar_producto(termino:string){

       this.productos_filtrado = [];
       termino = termino.toLowerCase();

       this.productos.forEach( prod =>{

        if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0 ){
          this.productos_filtrado.push(prod);
        }

        //console.log( prod );
       });

   }

   public cargar_productos(){

    this.cargando = true;

    let promesa = new Promise( ( resolve,reject )=> {
        this.http.get('https://portafolio-abb4a.firebaseio.com/productos_idx.json')
            .subscribe( res => {
            
              // setTimeout( ()=>{
                this.cargando = false;
                this.productos = res.json();
                resolve();
              // },1000)
              
            });

    });
    return promesa;
   }


   public cargar_producto( cod: string ){

    return this.http.get(`https://portafolio-abb4a.firebaseio.com/productos/${ cod }.json`);

   }




}
