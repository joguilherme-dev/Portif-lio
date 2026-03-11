// =====================================================
// ANIMAÇÃO DAS SEÇÕES (Scroll Reveal)
// =====================================================

const sections = document.querySelectorAll("section");

function mostrarSections() {

  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }

  });

}

window.addEventListener("scroll", mostrarSections);
mostrarSections();


// =====================================================
// EFEITO DIGITANDO (Hero)
// =====================================================

const textos = [
  "Desenvolvedor Front-End",
  "Criador de Interfaces Web",
  "JavaScript • React • CSS • HTML"
];

let textoIndex = 0;
let letraIndex = 0;
let apagando = false;

const elemento = document.getElementById("digitando");

function efeitoDigitando(){

  if(!elemento) return;

  const textoAtual = textos[textoIndex];

  if(!apagando){

    elemento.textContent = textoAtual.substring(0, letraIndex++);

    if(letraIndex > textoAtual.length){
      apagando = true;
      setTimeout(efeitoDigitando,1500);
      return;
    }

  }else{

    elemento.textContent = textoAtual.substring(0, letraIndex--);

    if(letraIndex === 0){
      apagando = false;
      textoIndex++;

      if(textoIndex === textos.length){
        textoIndex = 0;
      }
    }

  }

  setTimeout(efeitoDigitando, apagando ? 50 : 100);

}

efeitoDigitando();


// =====================================================
// PARTICLES BACKGROUND
// =====================================================

window.addEventListener("DOMContentLoaded", () => {

  if(typeof tsParticles !== "undefined"){

    tsParticles.load("particles-js", {

      particles: {

        number: { value: 80 },

        color: { value: "#06b6d4" },

        links: {
          enable: true,
          color: "#06b6d4",
          distance: 150
        },

        move: {
          enable: true,
          speed: 1
        },

        size: {
          value: 3
        }

      },

      background: {
        color: "transparent"
      }

    });

  }

});


// =====================================================
// CURSOR PERSONALIZADO
// =====================================================

const cursor = document.querySelector(".cursor");

if(cursor){

  document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

  });

}


// =====================================================
// MATRIX HACKER EFFECT
// =====================================================

const canvas = document.getElementById("matrix");

if(canvas){

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@";
  const matrix = letters.split("");

  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];

  for(let x = 0; x < columns; x++){
    drops[x] = 1;
  }

  function drawMatrix(){

    ctx.fillStyle = "rgba(15,23,42,0.1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#06b6d4";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){

      const text = matrix[Math.floor(Math.random()*matrix.length)];

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
        drops[i] = 0;
      }

      drops[i]++;

    }

  }

  setInterval(drawMatrix, 35);

}


// =====================================================
// EFEITO 3D NOS PROJETOS
// =====================================================

if(typeof VanillaTilt !== "undefined"){

  VanillaTilt.init(document.querySelectorAll(".card-projeto"), {

    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,

  });

}


// =====================================================
// MENU MOBILE
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

}


// =====================================================
// TERMINAL INTERATIVO (ESTILO LINUX)
// =====================================================

const input = document.getElementById("terminal-command");
const output = document.getElementById("terminal-output");
const sugestoes = document.querySelectorAll(".terminal-sugestoes span");

function executarComando(cmd){

  let resposta = "";

  switch(cmd){

    case "help":
      resposta = `
Comandos disponíveis:

projects  → ver meus projetos
skills    → tecnologias que utilizo
about     → sobre mim
contact   → como falar comigo
`;
    break;

    case "projects":
      resposta = "Abrindo seção de projetos...";
      document.getElementById("projetos")?.scrollIntoView({behavior:"smooth"});
    break;

    case "skills":
      resposta = "HTML • CSS • JavaScript • React • Git";
    break;

    case "about":
      resposta = "Sou estudante de ADS focado em desenvolvimento Front-End.";
    break;

    case "contact":
      resposta = "Email: guilhermejoaolau@gmail.com";
    break;

    default:
      resposta = "Comando não reconhecido. Digite 'help'.";
  }

  output.innerHTML += `<p><span class="prompt">joao@dev:~$</span> ${cmd}</p>`;
  output.innerHTML += `<p>${resposta}</p>`;

  output.scrollTop = output.scrollHeight;

}

// TERMINAL INICIANDO COMO LINUX

if(output){

  output.innerHTML = `
<p>joao@dev:~$ help</p>
<p>
projects  → ver meus projetos<br>
skills    → tecnologias que utilizo<br>
about     → sobre mim<br>
contact   → como falar comigo
</p>
`;

}

// INPUT TERMINAL

if(input){

  input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

      const cmd = input.value.toLowerCase().trim();

      if(cmd !== ""){
        executarComando(cmd);
      }

      input.value = "";

    }

  });

}

// SUGESTÕES CLICÁVEIS

sugestoes.forEach(botao => {

  botao.addEventListener("click", () => {

    const cmd = botao.dataset.cmd;
    executarComando(cmd);

  });

});

// ================= BOOT SCREEN =================

window.addEventListener("load", () => {

setTimeout(()=>{

const boot = document.getElementById("boot-screen");

if(boot){
boot.style.opacity = "0";

setTimeout(()=>{
boot.style.display = "none";
},800);

}

},4500);

});