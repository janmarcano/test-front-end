const request = require('request');

module.exports = function (req, res) {
    const id = req.params.id;
    request('https://api.mercadolibre.com/items/'+id, function(error, response, body) {
        if (!error) {
            const data = JSON.parse(body);
            if (!data.error) {
                const amount = Math.floor(data.price);
                const decimals = +(data.price%1).toFixed(2).substring(2);
                const picture = data.pictures.length ? data.pictures[0].secure_url : '';

                var detail = {
                    author: {
                        name: 'Jan',
                        lastname: 'Marcano'
                    },
                    item: {
                        id: data.id,
                        title: data.title,
                        price: {
                            currency: 'ars',
                            amount: amount,
                            decimals: decimals
                        },
                        picture: picture,
                        condition: data.condition,
                        free_shipping: data.shipping ? data.shipping.free_shipping : false,
                        sold_quantity: data.sold_quantity,

                    }
                }
                request('https://api.mercadolibre.com/items/'+id+'/description', function(error, response, body) {
                    if (!error) {
                        const data = JSON.parse(body);
                        detail.description = data.plain_text;
                        res.send(detail);
                    }
                });
            } else {
                res.send(data)
            }
        }
    });
}