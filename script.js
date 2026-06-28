let respostas = {};

function responder(pergunta, resposta, botao) {
    respostas[pergunta] = resposta;

    let botoes = botao.parentElement.querySelectorAll("button");
    botoes.forEach(b => b.classList.remove("selecionado"));

    botao.classList.add("selecionado");
}

function mostrarResultado() {
    let pontos = 0;

    if (respostas.q1 === "linux-kernel") pontos++;
    if (respostas.q2 === "darwin") pontos++;
    if (respostas.q3 === "windows-nt") pontos++;
    if (respostas.q4 === "android") pontos++;
    if (respostas.q5 === "linus") pontos++;

    document.getElementById("resultadoQuiz").innerHTML =
        `🧠 Você acertou <b>${pontos}/5</b>`;
}

/* PROGRESS BAR + BOTÃO TOPO + SIDEBAR ATIVA */
let topButton = document.getElementById("topButton");

window.onscroll = function () {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";

    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

/* voltar ao topo */
function voltarTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* sidebar ativa */
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight) {

            links.forEach(link => link.classList.remove("active"));

            let id = section.getAttribute("id");
            document.querySelector(`.sidebar a[href="#${id}"]`)
                ?.classList.add("active");
        }
    });
});
