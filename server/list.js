module.exports = function (req, res) {

    const list = {
        author: {
            name: 'Jan',
            lastname: 'Marcano'
        },
        categories: ["Electrónica, Audio y Video","Audio Portátil  y Radios", "iPod", "Reproductores"],
        items: [
            {
                id: "MLA699564594",
                title: "Apple Ipod Nano 7ma Gen 16gb Garantia Oficial - Sellado",
                price: {
                    currency: "ARS",
                    amount: 6649,
                    decimals: 0
                },
                picture: "http://mla-s1-p.mlstatic.com/883564-MLA26624219022_012018-I.jpg",
                condition: "new",
                free_shipping: true
            },
            {
                id: "MLA669350488",
                title: "Ipod Nano 16gb Rosa 7g Nuevo Original Apple Sellado Garantía",
                price: {
                    currency: "ARS",
                    amount: 7575,
                    decimals: 0
                },
                picture: "http://mla-s1-p.mlstatic.com/613953-MLA25649425371_062017-I.jpg",
                condition: "used",
                free_shipping: true
            }
        ]
    }
    res.send(list);
}