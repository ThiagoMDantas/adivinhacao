let randomNumber = Math.round(Math.random()*10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btn1 = document.querySelector("#btnTry");
const btn2 = document.querySelector("#btnReset");
let tentativa = 1;

function handleClick(event){
  event.preventDefault()

  const valor = document.querySelector("#valor");

  console.log(randomNumber)
  if(Number(valor.value) == randomNumber){
    toggleScreen();
    document.querySelector("h2").innerText = `Acertou em ${tentativa} tentativas.`
    
  }
  valor.value = "";
  tentativa++;

}

function handleResetClick(){
  toggleScreen();
  tentativa = 1;
  randomNumber = Math.round(Math.random()*10);
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");

}

function pressKey(e){
  if(e.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick()
  }
}

btn1.addEventListener('click',handleClick)
btn2.addEventListener('click',handleResetClick)
document.addEventListener('keydown', pressKey)