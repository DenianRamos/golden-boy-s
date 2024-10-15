document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const idade = document.getElementById('idade').value.trim();

        const nomeRegex = /^[A-Za-zÀ-ú\s]+$/;
        if (!nomeRegex.test(nome)) {
            alert('Por favor, insira um nome válido.');
            event.preventDefault();
            return;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            event.preventDefault();
            return;
        }

        const idadeNum = parseInt(idade, 10);
        if (isNaN(idadeNum) || idadeNum < 1 || idadeNum > 120) {
            alert('Por favor, insira uma idade válida.');
            event.preventDefault();
            return;
        }

    });
});
