const randomNumber = Math.round(Math.random()*10)
let tentativa = 0;

function handleClick(event){
  event.preventDefault()
  tentativa++;
  const valor = document.querySelector("#valor").value;

  console.log(randomNumber)

  if(Number(valor) == randomNumber){
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(".screen2").innerText = `Acertou em ${tentativa} tentativas.`
  }


}