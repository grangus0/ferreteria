// Simulación de una búsqueda simple
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    alert('Buscando: ' + query);
});

// Agregar interactividad al carrito
document.querySelector('.cart img').addEventListener('click', function() {
    alert('Carrito de compras vacío.');
});

