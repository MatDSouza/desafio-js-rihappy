let nome = "Kond";
let nivel = "5000";

if(nivel < 1000){
    console.log("O Herói de nome " + nome + " está no nível de Ferro ");
} else if (nivel >= 1001 && nivel <= 2000){
    console.log("O Herói de nome " + nome + " está no nível de Bronze ");
}  else if (nivel >= 2001 && nivel <= 5000){
    console.log("O Herói de nome " + nome + " está no nível  Prata ");    
}  else if (nivel >= 5001 && nivel <= 7000){
    console.log("O Herói de nome " + nome + " está no nível de Ouro");
}  else if (nivel >= 7001 && nivel <= 8000){
    console.log("O Herói de nome " + nome + " está no nível de Platina");
}  else if (nivel >= 8001 && nivel <= 9000){
    console.log("O Herói de nome " + nome + " está no nível de Ascedente");
}  else if (nivel >= 9001 && nivel <= 10000){
    console.log("O Herói de nome " + nome + " está no nível de Imortal");
} else {
    console.log("O Herói de nome " + nome + " está no nível de Radiante");
}