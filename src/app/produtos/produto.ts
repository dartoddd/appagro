export class Produto{
  nome: string;
  descricao: string;
  formato: number = 1;
  comprimento: number;
  altura: number;
  largura: number;
  diametro: number;
  peso: number;

  autoCompletar(){
    if(!this.diametro) this.diametro = 0;
    if(!this.largura) this.largura = 0;
    if(!this.comprimento) this.comprimento = 0;
    if(!this.altura) this.altura = 0;    
  }

  limpaValores(){
    this.diametro = 0;
    this.largura = 0;
    this.comprimento = 0;
    this.altura = 0;    
  }
}