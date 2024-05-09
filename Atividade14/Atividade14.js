function transformaTexto() {
    var texto = document.getElementById("texto").value;

    if (document.getElementById("maiusculas").checked) {
        texto = texto.toUpperCase();
    }else if (document.getElementById("minusculas").checked) {
        texto = texto.toLowerCase();
    }

    document.getElementById("texto").value = texto;
}

function desabilita(selectedCheckbox) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
 }