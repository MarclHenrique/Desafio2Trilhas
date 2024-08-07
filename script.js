document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('formularioInscricao').addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário
        event.preventDefault();

        // Exibe a mensagem de sucesso
        alert("Cadastrado com Sucesso");

        // Limpa os campos do formulário
        this.reset();
    });
});
