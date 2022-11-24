const confirmaciones = document.querySelector('.confirmaciones')
const cargar = document.querySelector('#cargar')
const refrescar = document.querySelector('#refrescar')
const ul = document.querySelector('ul')
const nombre = document.querySelector('#nombre')
const autor = document.querySelector('#autor')
const direccion = document.querySelector('#direccion')


cargar.addEventListener('click', () => {
    
    let lengthLi = document.querySelectorAll('li').length,
        nombreVal = nombre.value,
        autorVal = autor.value,
        direccionVal = direccion.value
    
    if (nombreVal === '' || autorVal === '' || direccionVal === '') {
        alert('Complete todos los campos')
    } else {
    
        if (lengthLi <= 4) {
            new Pedido(nombreVal, autorVal, direccionVal)
        } else {
            alert('Solo puede ingresar 5 items como maximo.')
        }
        nombre.value = ''
        autor.value = ''
        direccion.value = ''
        
    }
})

class Pedido{

    constructor(titulo, autor, direccion) {

    this.cargarItems(titulo, autor, direccion);

    }

    cargarItems(titulo, autor, direccion) {

        let li = document.createElement('li')
        li.textContent =
            `✓ El libro titulado ${titulo} , del autor ${autor} será llevado a la dirección ${direccion}. Numero de pedido ${Math.floor(Math.random() * (8000 - 200) + 200)}`
        ul.appendChild(li)

    }

}

refrescar.addEventListener('click', () => {

        let lisArr = document.querySelectorAll('li')

    for (let i = 0; i < lisArr.length; i++) {

        ul.removeChild(lisArr[i])
        
    }

})