module.exports = function (req, res) {
    const id = req.params.id;
    console.log('Detalle de id ', id);

    const detail = {
        author: {
            name: "Jan",
            lastname: "Marcano"
        },
        item: {
            id: "MLA669350488",
            title: "Ipod Nano 16gb Rosa 7g Nuevo Original Apple Sellado Garantía",
            price: {
                currency: "ARS",
                amount: 7575,
                decimals: 0
            },
            picture: "http://mla-s1-p.mlstatic.com/613953-MLA25649425371_062017-I.jpg",
            condition: "used",
            free_shipping: true,
            sold_quantity: 0,
            description: "REPRESENTACION OFICIAL APPLE\nProducto con garantia valida en Argentina.\n\n- Garantia Oficial Apple.\n- Soporte Oficial Apple.\n- Caja Original y Sellada de fabrica.\n- Conexion directa Argentina.\n\n¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n-No te dejes engañar por productos sin garantia ni soporte oficial en Argentina, si no cuentan con conexion directa en Argentina y/o se encuentran sin caja o con la misma abierta, automaticamente no cuentan con Garantia Oficial-\n¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\nCARACTERISTICAS TECNICAS:\n\nAlmacenamiento: 16Gb\nPantalla Multitactil: 2.5 pulgadas.\nReproduccion de musica: Hasta 30Hs.\nReproduccion de video: Hasta 3.5Hs.\nBluetooth: 4.0\nRadio: FM\nItunes\nCompatibilidad con Fitness Walk + Run\nCompatibilidad integrada con Nike+\n- Dimensiones: \nAlto: 76.5 mm\nAncho: 39.6 mm\nProfundidad: 5.4 mm\nPeso: 31 gramos\n\n-En caja original:\nEarPods de Apple\nCable de Lightning a USB\n¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\nRealice todas las preguntas que crea necesarias, recuerde que ofertar es un compromiso de compra."
        }
    }
    res.send(detail);
}