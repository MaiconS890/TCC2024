document.addEventListener('DOMContentLoaded', function() {
    // Agora, o código é executado após o DOM estar completamente carregado
    document.querySelector('#search-box').addEventListener('input', function() {
        const query = this.value.toLowerCase(); // Obtém o valor da pesquisa
        const recipes = document.querySelectorAll('.recipe'); // Seleciona todos os elementos de receita
        
        recipes.forEach(function(recipe) {
            const title = recipe.getAttribute('data-title').toLowerCase(); // Pega o título da receita
            if (title.includes(query)) {
                recipe.style.display = 'block'; // Exibe se o título combinar
            } else {
                recipe.style.display = 'none'; // Oculta se não combinar
            }
        });
    });
});

