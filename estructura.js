$('form').submit((e) => {
    e.preventDefault()

    const correo = $('#correo').val()
    const labor = $('#labor').val()
    const cantidad = $('#cantidad').val()
    const entrega = $('input[name"entrega"]').val()
    const comentario = $('#comentario').val()

    const formValue = {
        
        "correo": correo,
        "labor": labor,
        "cantidad": cantidad,
        "entrega": entrega,
        "comentario": comentario
    }

    console.log(formValue);
})