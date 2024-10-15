document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const email = params.get('email');
    const idade = params.get('idade');

    const dadosDiv = document.getElementById('dados');

    if (nome && email && idade) {
        dadosDiv.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Idade:</strong> ${idade}</p>
        `;
    } else {
        dadosDiv.innerHTML = `<p>Dados não recebidos corretamente.</p>`;
    }
});
