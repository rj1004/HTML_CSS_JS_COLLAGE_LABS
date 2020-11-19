const express = require('express')
const bodyparser = require('body-parser')
const app = express()

var stockdata = [{
        'name': 'ABC',
        'code': 'A',
        'cprice': 20,
        'lprice': 20,
        'hprice': 20
    },
    {
        'name': 'DEF',
        'code': 'D',
        'cprice': 120,
        'lprice': 120,
        'hprice': 120
    },
    {
        'name': 'GHI',
        'code': 'G',
        'cprice': 1120,
        'lprice': 1120,
        'hprice': 1120
    },
    {
        'name': 'JKL',
        'code': 'J',
        'cprice': 70,
        'lprice': 70,
        'hprice': 70
    }
]

setInterval(() => {

    for (var i = 0; i < stockdata.length; i++) {
        var price = (Math.random() * 20) + 1 + stockdata[i].cprice;
        price = price.toFixed(2);
        if (price > 10) {
            price = price - 10;
        }
        if (price < stockdata[i].lprice) {
            stockdata[i].lprice = price;
        }
        if (price > stockdata[i].hprice) {
            stockdata[i].hprice = price
        }
        stockdata[i].cprice = price;
        console.log(stockdata[i].cprice)
    }


}, 500);

app.use((req, res, next) => {
    // website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
    // set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send(stockdata)

})


app.listen(12349, 'localhost')