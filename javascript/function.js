// Obtener los elementos del DOM
const editButton = document.getElementById('edit-button');
const formContainer = document.getElementById('form-container');
const editForm = document.getElementById('edit-form');
const cardName = document.getElementById('card-name');
const cardPhrase = document.getElementById('card-phrase');

// Mostrar el formulario al hacer clic en "Editar Frase"
editButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

// Manejar la actualización del formulario
editForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formularios

    // Obtener el valor ingresado por el usuario
    const newName = document.getElementById('name').value;
    const newPhrase = document.getElementById('phrase').value;

    // Actualizar la tarjeta de presentación
    cardName.textContent = newName;
    cardPhrase.textContent = newPhrase;

    // Ocultar el formulario
    formContainer.style.display = 'none';

    // Limpiar los campos del formulario
    editForm.reset();
});
