const express = require('express')
var app = express()




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
    var dt = new Date()
    var data = {
        'date': dt.getDate(),
        'month': dt.getMonth(),
        'year': dt.getFullYear(),
        'hour': dt.getHours(),
        'min': dt.getMinutes(),
        'sec': dt.getSeconds()
    }
    console.log(data)

    res.send(data)
})

app.listen(32349, '0.0.0.0', () => {
    console.log('server started at 32349 port')
})