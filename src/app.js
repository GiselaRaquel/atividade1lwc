import { LightningElement } from "lwc";

export default class App extends LightningElement {
  visivel = true; //boolean

    empresa = "Mamaco Corp"; 
    cnpj = "988773670001"; 
    endereco = "Rua dos Bobos, 0"; 
    
    produto = "Folha Sulfite";
    descricao = "Bloco 100 fls"; 
    preço = 8.90; 

    promocao = "Ofertas da Semana";
    oferta1= "Lápis de cor"; 
    oferta2 = "Apontador"; 

    onClick(){
        this.visivel = !this.visivel;
    }
}
