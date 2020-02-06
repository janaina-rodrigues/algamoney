import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'Despesa', descricao: 'Compra de pão',  dataVencimento: new Date(2020, 1, 15) ,
     dataPagamento:  new Date(2020, 1, 10), valor: 4.5, pessoa: 'Padaria do José'},
    {tipo: 'Receita', descricao: 'Venda de Software',  dataVencimento: new Date(2020, 1, 20),
     dataPagamento:  new Date(2020, 1, 18), valor: 8000, pessoa: 'Janaina'},
    {tipo: 'Despesa', descricao: 'Compra de Smarphone',  dataVencimento: new Date(2020, 1, 28),
     dataPagamento:  new Date(2020, 1, 20), valor: 2500, pessoa: 'Maria'},
    {tipo: 'Receita', descricao: 'Venda de Carro',  dataVencimento: new Date(2020, 2, 28),
     dataPagamento:  new Date(2020, 2, 20), valor: 28000, pessoa: 'José'}
    ];

}
