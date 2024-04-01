const producto = document.getElementById('producto');
const productoImagen = document.querySelector('.producto__imagen');
const thumbs = document.querySelector('.producto__thumbs');

const propiedadColor = producto.querySelector('#propiedad-color');

const aumentarCantidad = producto.querySelector('#incrementar-cantidad');
const disminuirCantidad = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');

thumbs.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        const imagenSrc = String(e.target.src);
        const lastIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lastIndex+1);
        productoImagen.src= `./img/tennis/${nombreImagen}`;
    }
});
propiedadColor.addEventListener('click',(e)=>{
    if(e.target.tagName === 'INPUT'){
        productoImagen.src=`./img/tennis/${e.target.value}.jpg`;
    }
});

aumentarCantidad.addEventListener('click',()=>{
    inputCantidad.value = parseInt(inputCantidad.value)+1;
});
disminuirCantidad.addEventListener('click',()=>{
    if(parseInt(inputCantidad.value)>1){
        inputCantidad.value = parseInt(inputCantidad.value)-1;
    }
});