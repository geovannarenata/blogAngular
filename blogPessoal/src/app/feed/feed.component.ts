import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
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

  //Var relacionadas às Postagens
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //Var relacionadas aos temas
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
    ) 
    { }

  ngOnInit()               /* Pra estatizar a pg no começo quando abri-la */
  {                        /* 1) apagar o : void */ 
      window.scroll(0,0)   /* e acrescentar esse código */
      this.findAllPostagens()
      this.findAllTemas()    
    }

  //Métodos de Postagens
  findAllPostagens()
  {
      this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {this.listaPostagens = resp})
  }

  publicar()
  {
    this.tema.id = this.idTema
    this.postagem.tema  = this.tema

    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null)
    {
        alert('É necessário preencher todos os campos.')
    }
    else 
    {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {this.postagem = resp
      this.postagem = new Postagem()
      alert ('Postagem realizada com sucesso!')
      this.findAllPostagens()
    })

    }
  }

  //Métodos dos Temas
  findAllTemas()
  {
      this.temaService.getAllTemas().subscribe((resp: Tema[]) => { this.listaTemas = resp})
  }

  findByIdTema()
  {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {this.tema = resp})
  }

}
