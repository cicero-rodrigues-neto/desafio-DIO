let heroi = "Cicero"
let XP = 0

switch(true){
  case XP >= 0 && XP <= 1000:
  console.log("O heroi de nome " + heroi + " está no nível Ferro")
  break

  case XP > 1001 && XP <= 2000:
  console.log("O heroi de nome " + heroi + " está no nível Bronze")
  break

  case XP > 2001 && XP <= 5000:
  console.log("O heroi de nome " + heroi + " está no nível Prata Ouro")
  break

  case XP > 5001 && XP <= 8000:
  console.log("O heroi de nome " + heroi + " está no nível Platina Diamante")
  break

  case XP > 8001 && XP <= 9000:
  console.log("O heroi de nome " + heroi + " está no nível Ascendente")
  break

  case XP > 9001 && XP <= 10000:
  console.log("O heroi de nome " + heroi + " está no nível Imortal")
  break

  case XP >= 10001:
  console.log("O heroi de nome " + heroi + " está no nível Radiante")
  break

  default:
    console.log("Jogue para subir o seu XP")
}
