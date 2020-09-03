import { Component, OnInit } from '@angular/core';
import { TemaModel } from '../model/TemaModel';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: TemaModel = new TemaModel()

  constructor(
    private temaSevice: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    let id: number = this.route.snapshot.params["id"];
    this.findByIdTema(id);
  }


  findByIdTema(id: number) {
    this.temaSevice.getByIdTema(id).subscribe((resp: TemaModel) => {
      this.tema = resp;
    })
  }

  salvar() {
    this.temaSevice.putTema(this.tema).subscribe((resp: TemaModel) => {
      this.tema = resp
      this.router.navigate(['/cadastro-tema'])
      alert('Tema atualizado com sucesso!!')
    })
  }
}