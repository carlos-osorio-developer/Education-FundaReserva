
// Objeto con propiedades de la selección Huellas

var propHuellas = {
    primer_link_up : document.querySelectorAll('.pics-up a')[0],
    primer_link_down : document.querySelectorAll('.pics-down a')[0],
    links_huellas_up : document.querySelectorAll('.pics-up a'),
    links_huellas_down : document.querySelectorAll('.pics-down a'),
    primer_cont_up : document.getElementsByClassName('conth-up')[0].firstElementChild,
    cont_huellas_up : document.querySelectorAll('.conth-up >div'),
    cont_active_up : null,
    primer_cont_down : document.getElementsByClassName('conth-down')[0].firstElementChild,
    cont_huellas_down : document.querySelectorAll('.conth-down >div'),
    cont_active_down : null
}

// Objeto con métodos de la selección Huellas

var metHuellas = {

    inicio : function(){

        propHuellas.primer_cont_up.className='active';
        propHuellas.primer_cont_down.className='active';
        propHuellas.primer_link_up.firstElementChild.className=propHuellas.primer_link_up.firstElementChild.className+' active';
        propHuellas.primer_link_down.firstElementChild.className=propHuellas.primer_link_down.firstElementChild.className+' active';
        propHuellas.primer_link_up.parentElement.style.background="rgb(200, 200, 200, 0.8)";
        propHuellas.primer_link_down.parentElement.style.background="rgb(200, 200, 200, 0.8)";
        for(var i=0; i<propHuellas.links_huellas_up.length; i++){
            //se añade un listener para cuando se clickee el link en la imagen
            propHuellas.links_huellas_up[i].addEventListener('click', metHuellas.showHuellaUp);
        };
        for(var i=0; i<propHuellas.links_huellas_down.length; i++){
            //se añade un listener para cuando se clickee el link en la imagen
            propHuellas.links_huellas_down[i].addEventListener('click', metHuellas.showHuellaDown);
        }      

    },

    showHuellaUp : function(e){
        e.preventDefault(); //Evita que el evento en el que se hace click se realice (en este caso seguir una URL-id- local)
        console.log('Chanfleeeee');
        for(var i=0; i<propHuellas.links_huellas_up.length; i++){
            propHuellas.links_huellas_up[i].firstElementChild.className=propHuellas.links_huellas_up[i].firstElementChild.className.replace(' active','');
            propHuellas.links_huellas_up[i].parentElement.style.background="rgb(150, 150, 150, 0.5)";
            propHuellas.cont_huellas_up[i].className='';
        }
        
        this.parentElement.style.background="rgb(200, 200, 200, 0.8)";
        // 'this' se refiere a la propiedad del objeto seleccionada anteriormente (link_huellas)
        // Le pone "active" al class de la etiqueta <img> del link
        this.firstElementChild.className=this.firstElementChild.className+" active";
        // Selecciona el contenido activo mediante el atributo del 'this'
        propHuellas.cont_active_up=this.getAttribute('href');
        // Le pone "active" al class del <div> del contenido
        document.querySelector(propHuellas.cont_active_up).className=" active";
        // Le cambia la opacidad al <div> del contenido
        document.querySelector(propHuellas.cont_active_up).style.opacity="0";
        setTimeout(function(){
            document.querySelector(propHuellas.cont_active_up).style.opacity="1";
        },100);

    },

    showHuellaDown : function(e){
        e.preventDefault(); //Evita que el evento en el que se hace click se realice (en este caso seguir una URL-id- local)
        console.log('Chanfleeeee222');
        for(var i=0; i<propHuellas.links_huellas_down.length; i++){
            propHuellas.links_huellas_down[i].firstElementChild.className=propHuellas.links_huellas_down[i].firstElementChild.className.replace(' active','');
            propHuellas.links_huellas_down[i].parentElement.style.background="rgb(150, 150, 150, 0.5)";
            propHuellas.cont_huellas_down[i].className='';
        }
        this.parentElement.style.background="rgb(200, 200, 200, 0.8)";
        // 'this' se refiere a la propiedad del objeto seleccionada anteriormente (link_huellas)
        // Le pone "active" al class de la etiqueta <img> del link
        this.firstElementChild.className=this.firstElementChild.className+" active";
        // Selecciona el contenido activo mediante el atributo del 'this'
        propHuellas.cont_active_down=this.getAttribute('href');
        // Le pone "active" al class del <div> del contenido
        document.querySelector(propHuellas.cont_active_down).className=" active";
        // Le cambia la opacidad al <div> del contenido
        document.querySelector(propHuellas.cont_active_down).style.opacity="0";
        setTimeout(function(){
            document.querySelector(propHuellas.cont_active_down).style.opacity="1";
        },100);
    
    }
}

metHuellas.inicio();