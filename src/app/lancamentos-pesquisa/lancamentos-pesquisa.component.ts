import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'Despesa', descricao: 'Compra de pão',  dataVencimento: '15/01/2020',
     dataPagamento: '10/01/2020', valor: 4.5, pessoa: 'Padaria do José'},
    {tipo: 'Receita', descricao: 'Venda de Software',  dataVencimento: '20/01/2020',
     dataPagamento: '18/01/2020', valor: 8000, pessoa: 'Janaina'},
    {tipo: 'Despesa', descricao: 'Compra de Smarphone',  dataVencimento: '28/01/2020',
     dataPagamento: '20/01/2020', valor: 2500, pessoa: 'Maria'},
    {tipo: 'Receita', descricao: 'Venda de Carro',  dataVencimento: '28/02/2020',
     dataPagamento: '20/02/2020', valor: 28000, pessoa: 'José'}
    ];

}
