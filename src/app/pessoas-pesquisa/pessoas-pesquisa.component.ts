import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [{nome: 'Janaína', cidade: 'Belo Horizonte', estado: 'MG', status: true},
              {nome: 'Alessamdra', cidade: 'Santa Luzia', estado: 'MG', status: true},
              {nome: 'João', cidade: 'São Paulo', estado: 'SP', status: false},
              {nome: 'Maria', cidade: 'Rio de Janeiro', estado: 'RJ', status: false},
              {nome: 'Antônio', cidade: 'Espirito Santo', estado: 'ES', status: false},
  ];
}
