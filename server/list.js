const request = require('request');

module.exports = function (req, res) {
    request('https://api.mercadolibre.com/sites/MLA/search?q=apple%20ipod', function(error, response, body) {
        if (!error && body.results) {
            var categories = [];
            if (body.filters[0] && body.filters[0].values[0]) {
                categories = body.filters[0].values[0].path_from_root.map((category) => {return category.name});
            }
            var items = body.results.slice(0,4);
            items = items.map((item) => {
                var amount = Math.floor(item.price);
                var decimals = +(item.price%1).toFixed(2).substring(2);
                return {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: amount,
                        decimals: decimals
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping
                }
            });

            const list = {
                author: {
                    name: 'Jan',
                    lastname: 'Marcano'
                },
                categories: categories,
                items: items
            }
            res.send(list);
        }
    });
}