import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada: boolean = false;
  cargada_sobre_nosotros: boolean = false;
  equipo:any[] = [];
  url = "https://portafolio-abb4a.firebaseio.com/equipo.json";


  constructor(public http: Http) {

    this.carga_info();
    this.cargaSobreNosotros();

   }

   public carga_info(){
    this.http.get("assets/data/info.pagina.json")
        .subscribe ( data => {
            this.cargada = true;
            this.info = data.json();
        });
   }

   public cargaSobreNosotros(){
    this.http.get(this.url)
            .subscribe ( data => {
              console.log(data.json());
              this.cargada_sobre_nosotros = true;
              this.equipo = data.json();
            });
   }

}
