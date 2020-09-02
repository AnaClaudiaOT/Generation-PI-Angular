import { Component, OnInit } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  constructor(private postagemService: PostagemService, private temaService: TemaService) { }

  postagem: PostagemModel = new PostagemModel();
  listaPostagens: PostagemModel[];

  tema: TemaModel = new TemaModel();
  listaTemas: TemaModel[];
  idTema: number;

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostagemModel[]) => {
      this.listaPostagens = resp;
    });
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.conteudo == null || this.postagem.tema == null || this.postagem.referencia == null) {
      alert("Preencha todoos os campos antes de publicar!")
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) => {
        this.postagem = resp
        this.postagem = new PostagemModel()
        alert('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

      findAllTemas(){
        this.temaService.getAllTemas().subscribe((resp: TemaModel[]) => {
          this.listaTemas = resp;
        })
      }

      findByIdTema(){
        this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
          this.tema = resp;
        });
      }

    }
