document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Formulario enviado con éxito.");
    // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servidor.
});
