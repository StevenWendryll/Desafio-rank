let resultado = subtracao(25, 20);

    function subtracao(vitorias, derrotas) {
        return vitorias - derrotas; //resultado da função que foi declarada
  }
        let rank = ""  
  if (resultado < 10){
    rank = "Ferro"
}
 else if (resultado <= 20 ){
    rank = "Bronze"
 }
 else if (resultado <= 50){
    rank = "Prata"
 }
 else if (resultado <= 80){
    rank = "Ouro"
 }
 else if (resultado <= 90){
    rank = "Diamente"
 }
 else if (resultado <= 100){
    rank = "Lendário"
 }
 else {
    (resultado > 100)
    rank = "Imortal"
 }

  

    console.log(`O Herói tem de saldo de ${resultado} partidas e está no nível de ${rank} `);
  

