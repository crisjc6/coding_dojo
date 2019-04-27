
import { SalaService } from 'src/app/services/sala.service';
import { Component, OnInit } from "@angular/core";
import { SalaInterface } from 'src/app/interfaces/sala.interface';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-sala",
  templateUrl: "./sala.component.html",
  styleUrls: ["./sala.component.css"]
})
export class SalaFormComponent implements OnInit {
  sala: SalaInterface = {
    nombre:'',
    fechaInicio:'',
    fechaTermina:'',
    miembros:'',
    admin:'',


  };
  edit: boolean = false;

  constructor(
    private _salaService: SalaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.params();
  }
  params(){
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this._salaService.obtenerUno(params.id).subscribe((sala:SalaInterface)=>{
        this.sala = sala
        console.log('respuesta de la base')
      },(error)=>{
        console.log('fallo la carga de datos')
      }

      );
    }

  }

  submitSala() {
    this._salaService.crear(this.sala).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/"]);
      },
      err => console.log(err)
    );
  }

  updateSala() {
   // delete this.product.createdAt;
    this._salaService.editar(this.sala._id, this.sala).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/sala"]);
      },
      err => console.log(err)
    );
  }
}
