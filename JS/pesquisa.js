document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('#search-box').addEventListener('input', function() {
        const query = this.value.toLowerCase(); 
        const recipes = document.querySelectorAll('.recipe'); 
        
        recipes.forEach(function(recipe) {
            const title = recipe.getAttribute('data-title').toLowerCase(); 
            if (title.includes(query)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none'; 
            }
        });
    });
});

