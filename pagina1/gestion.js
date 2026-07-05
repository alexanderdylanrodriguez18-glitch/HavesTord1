// Configuración principal de tu tienda
const numeroWhatsApp = "04129954842"; // Reemplaza con tu número (ej: 525512345678)
const nombreTienda = "HavesTord"; // Reemplaza con el nombre de tu tienda

// Lista de productos: ¡Aquí es donde agregas, editas o borras tus productos!
const productos = [
    {
        id: 1,
        titulo: "audifonos de cable",
        descripcion: " Disponible Pocas Unidades: buen sonido para el uso diario sin necesidad de conexión practicos y no hacen que te duelan los oidos a un excelente precio.",
        precio: "$3.99",
        imagen: "imagenes/audifonos-de-cable.jpg"
    },
    {
        id: 2,
        titulo: "Swacht Ultra Combo",
        descripcion: " Disponible: Estilo moderno, deportivo y vibrante. Este kit incluye el potente Smartwatch Ultra junto a su cable de carga rápida y una colección seleccionada de 7 correas de silicona de alta resistencia en tonos clave (negro, verde, azul, gris y rosado) con ajuste cómodo y duradero.",
        precio: "$19.99",
        imagen: "imagenes/swacht-ultra-combo.jpg"
    },
    {
        id: 3,
        titulo: "Swacht Reloj Inteligente",
        descripcion: " Disponible: El reloj inteligente que combina un diseño deportivo robusto con alta tecnología. Cuenta con una pantalla táctil HD ultra amplia y brillante, corona giratoria funcional y vinculación directa para recibir tus notificaciones (WhatsApp, llamadas y redes sociales). Además, incluye una base de carga magnética inalámbrica súper cómoda.",
        precio: "$11.99",
        imagen: "imagenes/swacht.png"
    },
    {
        id: 4,
        titulo: "Mouse de Cable Marca hp",
        descripcion: " Disponible: Rendimiento constante y sin retrasos. Este mouse HP con sensor óptico de 1200 DPI está diseñado para ofrecer movimientos rápidos y fluidos en pantalla. Su conexión directa por cable USB te garantiza un uso permanente sin preocuparte por pilas o cargas.",
        precio: "$4.99",
        imagen: "imagenes/mouse-de-cable.jpg"
    },
    {
        id: 5,
        titulo: "Mouse Inálambrico",
        descripcion: " Disponible: Despídete de los cables en tu escritorio. Este mouse inalámbrico HP funciona con tecnología de 2.4 GHz y un nano receptor USB de emparejamiento automático (Plug & Play). Su diseño compacto y ergonómico es perfecto para llevarlo en el bolso de la laptop a la universidad o el trabajo.",
        precio: "$5.99",
        imagen: "imagenes/mouse-inalambrico.jpg"
    },
    {
        id: 6,
        titulo: "Teclado Redragon K108A",
        descripcion: " Disponible 1 Unidad: Construido para durar. Este teclado de distribución completa destaca por su robusta placa superior metálica, teclas suspendidas de gran respuesta táctil y una espectacular iluminación LED Rainbow multicolor. Además, incluye una ranura superior integrada para colocar tu teléfono celular.",
        precio: "$29.99",
        imagen: "imagenes/teclado-redragon.jpg"
    }
    
    
];

// ----------------------------------------------------------------------
// Función para renderizar (mostrar) los productos en la página web
// No necesitas modificar nada de aquí hacia abajo
// ----------------------------------------------------------------------
function renderizarProductos() {
    const contenedor = document.getElementById("products-container");
    
    // Actualizar nombre de la tienda en el HTML
    document.getElementById("store-name").innerHTML = nombreTienda + `<span>STORE</span>`;
    document.getElementById("store-footer-name").innerText = nombreTienda;
    
    // Actualizar el botón flotante general
    const mensajeGeneral = encodeURIComponent("Hola, tengo una duda sobre sus productos");
    document.getElementById("floating-btn").href = `https://wa.me/${numeroWhatsApp}?text=${mensajeGeneral}`;

    // Limpiar el contenedor
    contenedor.innerHTML = "";

    // Generar las tarjetas para cada producto
    productos.forEach(producto => {
        // Verificar si el producto está disponible (por defecto es true si no se escribe nada)
        const estaDisponible = producto.disponible !== false;
        
        let enlaceWhatsApp = "#";
        let claseBoton = "btn-whatsapp disabled";
        let textoBoton = "Agotado";
        let iconoBoton = ""; 
        let badgeHTML = `<span class="badge badge-agotado">Agotado</span>`;
        let claseImagen = "img-agotado";

        if (estaDisponible) {
            const mensajeWhatsApp = encodeURIComponent(`Hola, me interesa comprar: ${producto.titulo} por ${producto.precio}`);
            enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
            claseBoton = "btn-whatsapp";
            textoBoton = "Pedir";
            badgeHTML = ""; // No hay etiqueta si está disponible
            claseImagen = "";
            iconoBoton = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>`;
        }

        const article = document.createElement("article");
        article.className = "product-card";
        
        article.innerHTML = `
            <div class="card-image">
                ${badgeHTML}
                <img src="${producto.imagen}" alt="${producto.titulo}" class="${claseImagen}">
            </div>
            <div class="card-content">
                <h3 class="product-title">${producto.titulo}</h3>
                <p class="product-desc" onclick="this.classList.toggle('expanded')" title="Haz clic para ver más">${producto.descripcion}</p>
                <div class="price-action">
                    <span class="price">${producto.precio}</span>
                    <a href="${enlaceWhatsApp}" ${estaDisponible ? 'target="_blank"' : 'onclick="return false;"'} class="${claseBoton}">
                        ${iconoBoton}
                        ${textoBoton}
                    </a>
                </div>
            </div>
        `;
        contenedor.appendChild(article);
    });
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", renderizarProductos);
