const express = require('express')
var app = express()
var counter = -1;
var data = [{
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '0/0',
        'to1': '0.0',
        'tr2': '0/0',
        'to2': '0.0',
        'heading': 'Toss Time',
        'b1': '-',
        'b2': '-',
        'b1r': '-',
        'b1o': '-',
        'b1f': '-',
        'b1s': '-',
        'b2r': '-',
        'b2o': '-',
        'b2f': '-',
        'b2s': '-',
        'bowlern': '-',
        'bowlerr': '-',
        'bowlerm': '-',
        'bowlero': '-',
        'bowlerw': '-'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '0/0',
        'to1': '0.0',
        'tr2': '0/0',
        'to2': '0.0',
        'heading': 'IND won the toss',
        'b1': '-',
        'b2': '-',
        'b1r': '-',
        'b1o': '-',
        'b1f': '-',
        'b1s': '-',
        'b2r': '-',
        'b2o': '-',
        'b2f': '-',
        'b2s': '-',
        'bowlern': '-',
        'bowlerr': '-',
        'bowlerm': '-',
        'bowlero': '-',
        'bowlerw': '-'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '0/0',
        'to1': '0.0',
        'tr2': '0/0',
        'to2': '0.0',
        'heading': 'IND elected to bat',
        'b1': '-',
        'b2': '-',
        'b1r': '-',
        'b1o': '-',
        'b1f': '-',
        'b1s': '-',
        'b2r': '-',
        'b2o': '-',
        'b2f': '-',
        'b2s': '-',
        'bowlern': '-',
        'bowlerr': '-',
        'bowlerm': '-',
        'bowlero': '-',
        'bowlerw': '-'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '0/0',
        'to1': '0.0',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'field setup',
        'b1': 'KL Rahul',
        'b2': 'Rohit Sharma',
        'b1r': '-',
        'b1o': '-',
        'b1f': '-',
        'b1s': '-',
        'b2r': '-',
        'b2o': '-',
        'b2f': '-',
        'b2s': '-',
        'bowlern': 'Maxwell',
        'bowlerr': '-',
        'bowlerm': '-',
        'bowlero': '-',
        'bowlerw': '-'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '6/0',
        'to1': '0.1',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'SIX',
        'b1': 'KL Rahul*',
        'b2': 'Rohit Sharma',
        'b1r': '6',
        'b1o': '1',
        'b1f': '0',
        'b1s': '1',
        'b2r': '0',
        'b2o': '0',
        'b2f': '0',
        'b2s': '0',
        'bowlern': 'Maxwell',
        'bowlerr': '6',
        'bowlerm': '0',
        'bowlero': '0.1',
        'bowlerw': '0'
    },

    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '7/0',
        'to1': '0.2',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'ONE run',
        'b1': 'KL Rahul',
        'b2': 'Rohit Sharma*',
        'b1r': '7',
        'b1o': '2',
        'b1f': '0',
        'b1s': '1',
        'b2r': '0',
        'b2o': '0',
        'b2f': '0',
        'b2s': '0',
        'bowlern': 'Maxwell',
        'bowlerr': '7',
        'bowlerm': '0',
        'bowlero': '0.2',
        'bowlerw': '0'
    },

    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '11/0',
        'to1': '0.3',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'FOUR',
        'b1': 'KL Rahul',
        'b2': 'Rohit Sharma*',
        'b1r': '7',
        'b1o': '2',
        'b1f': '0',
        'b1s': '1',
        'b2r': '4',
        'b2o': '1',
        'b2f': '1',
        'b2s': '0',
        'bowlern': 'Maxwell',
        'bowlerr': '11',
        'bowlerm': '0',
        'bowlero': '0.3',
        'bowlerw': '0'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '17/0',
        'to1': '0.4',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'SIX',
        'b1': 'KL Rahul',
        'b2': 'Rohit Sharma*',
        'b1r': '7',
        'b1o': '2',
        'b1f': '0',
        'b1s': '1',
        'b2r': '10',
        'b2o': '2',
        'b2f': '1',
        'b2s': '1',
        'bowlern': 'Maxwell',
        'bowlerr': '17',
        'bowlerm': '0',
        'bowlero': '0.4',
        'bowlerw': '0'
    },

    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '20/0',
        'to1': '0.5',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'Three runs',
        'b1': 'KL Rahul*',
        'b2': 'Rohit Sharma',
        'b1r': '7',
        'b1o': '2',
        'b1f': '0',
        'b1s': '1',
        'b2r': '13',
        'b2o': '3',
        'b2f': '1',
        'b2s': '1',
        'bowlern': 'Maxwell',
        'bowlerr': '20',
        'bowlerm': '0',
        'bowlero': '0.5',
        'bowlerw': '0'
    },
    {
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '26/0',
        'to1': '1.0',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'SIX',
        'b1': 'KL Rahul*',
        'b2': 'Rohit Sharma',
        'b1r': '13',
        'b1o': '2',
        'b1f': '0',
        'b1s': '2',
        'b2r': '13',
        'b2o': '4',
        'b2f': '1',
        'b2s': '1',
        'bowlern': 'Maxwell',
        'bowlerr': '26',
        'bowlerm': '0',
        'bowlero': '1.0',
        'bowlerw': '0'
    },
{
        'team1': 'IND',
        'team2': 'AUS',
        'tr1': '26/0',
        'to1': '1.0',
        'tr2': 'yet to bat',
        'to2': '',
        'heading': 'Innings Break',
        'b1': 'KL Rahul*',
        'b2': 'Rohit Sharma',
        'b1r': '13',
        'b1o': '2',
        'b1f': '0',
        'b1s': '2',
        'b2r': '13',
        'b2o': '4',
        'b2f': '1',
        'b2s': '1',
        'bowlern': 'Maxwell',
        'bowlerr': '26',
        'bowlerm': '0',
        'bowlero': '1.0',
        'bowlerw': '0'
    }

]

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

setInterval(function() {
    counter = counter + 1;

    if (counter == data.length) {
        //counter=0
	counter=data.length-1;
	clearInterval();
    }
    console.log(counter)
    console.log(data[counter])
}, 10000);
app.get('/', (req, res) => {
    res.send(data[counter])

})
app.listen(22349, 'localhost', () => {
    console.log('server started')
})