import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
  {tipo: 'Despesa', descricao: 'compra de pão',  dataVencimento: '15/01/2020',  dataPagamento: null, valor: 4.5, pessoa: 'Padaria do José'},
  {tipo: 'Receita', descricao: 'Venda de Software',  dataVencimento: '20/01/2020',  dataPagamento: null, valor: 8000, pessoa: 'Janaina'}
  ];
}
