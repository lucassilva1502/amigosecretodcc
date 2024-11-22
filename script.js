// Lista inicial de nomes disponíveis
const nomes = ["LUCAS", "CAMILA", "JACKSON", "ITALO", "EDU", "FELIPE", "JOSE", "ALEX", "FERNANDA", "DIEGO", "GLAUBER"];
// Lista de nomes já sorteados
const sorteados = [];

function sorteio() {
    const userName = document.getElementById("userName").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");
    const okButton = document.getElementById("okButton");

    // Verifica se o nome está na lista de participantes
    if (!nomes.includes(userName)) {
        resultDiv.textContent = "Nome inválido ou não está na lista de participantes!";
        resultDiv.style.color = "red";
        return;
    }

    // Verifica se todos os nomes já foram sorteados
    if (sorteados.length === nomes.length) {
        resultDiv.textContent = "Todos os nomes já foram sorteados!";
        resultDiv.style.color = "blue";
        return;
    }

    // Filtra nomes disponíveis, excluindo o usuário e os já sorteados
    const nomesDisponiveis = nomes.filter(nome => nome !== userName && !sorteados.includes(nome));

    // Verifica se ainda há nomes disponíveis para o sorteio
    if (nomesDisponiveis.length === 0) {
        resultDiv.textContent = "Não há mais opções disponíveis para você sortear!";
        resultDiv.style.color = "red";
        return;
    }

    // Sorteia um nome disponível
    const sorteado = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
    sorteados.push(sorteado); // Adiciona o nome à lista de sorteados

    // Exibe o nome sorteado
    resultDiv.textContent = `Você sorteou: ${sorteado}`;
    resultDiv.style.color = "green";

    // Exibe o botão Ok
    okButton.style.display = "inline-block";
}

function limparResultado() {
    const resultDiv = document.getElementById("result");
    const okButton = document.getElementById("okButton");

    // Limpa o resultado e oculta o botão Ok
    resultDiv.textContent = "";
    okButton.style.display = "none";

    // Limpa o campo de entrada de nome
    document.getElementById("userName").value = "";
}
