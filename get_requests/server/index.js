const fetch = require('node-fetch');
var express = require('express')
var app = express()

var jsforce = require('jsforce');
var conn = new jsforce.Connection({});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.get('/login', function(request, response) {

    const grant_type = 'password';
    const clientId = '3MVG9CEn_O3jvv0yjcMBTyJDfzkRhw5J1tUs5B7hgWnVS0rI0F2f8Oh9rus75sav2.B.sj_vTm7GCmc_j74J5';
    const clientSecret = 'FF8C884E5DA0B3D09A5C8FE56ED335DC7F0C2F04A4918241BEBCA3C9DE0BD688';
    const clientToken =  'sh5knDnSsPOiXafcApU8Qj3o';
    const username = 'roo_bsb@brave-raccoon-121719.com';
    const password = 'Saram121990';

    conn.login(username, password+clientToken, function(err, userInfo) {
        if (err) { return console.error(err); }
        console.log(conn.accessToken);
        console.log(conn.instanceUrl);
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
    });
})

app.get('/battery', function(request, response) {
    response.send('Bateria')
    console.log('Enviando dado de erro de Bateria');    

    const params = {
        "Name" : "Monitoramento da Bateria",
        "Voltagem_de_bateria__c" : 12.00,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    conn.sobject("Monitoramento__c").create(params, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
    });
})

app.get('/pression', function(request, response) {
    response.send('Pressão do óleo do motor')
    console.log('Enviando dado de Pressão do óleo do motor');    

    const params = {
        "Name" : "Monitoramento da Bateria",
        "Press_o_do_leo_do_motor__c" : 44.12,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

app.get('/eletric', function(request, response) {
    const problem = 'Problemas Elétricos'; 
    response.send(problem)
    console.log('Enviando dado de ' + problem);    

    const params = {
        "Name" : "Monitoramento de " + problem,
        "Problemas_El_tricos__c" : true,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

app.get('/gas', function(request, response) {
    const problem = 'Indicador de reserva de combustível'; 
    response.send(problem)
    console.log('Enviando dado de ' + problem);    

    const params = {
        "Name" : "Monitoramento de " + problem,
        "Indica_o_de_reserva_de_combust_vel__c" : true,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

app.get('/emission', function(request, response) {
    const problem = 'Taxa de emissão de gases'; 
    response.send(problem)
    console.log('Enviando dado de ' + problem);    

    const params = {
        "Name" : "Monitoramento de " + problem,
        "Taxa_de_emiss_o_de_gases__c" : 34.67,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

app.get('/motor', function(request, response) {
    const problem = 'Temperatura do motor'; 
    response.send(problem)
    console.log('Enviando dado de ' + problem);    

    const params = {
        "Name" : "Monitoramento de " + problem,
        "Temperatura_do_motor__c" : 68.32,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

app.get('/pneu', function(request, response) {
    const problem = 'Pressão dos pneus'; 
    response.send(problem)
    console.log('Enviando dado de ' + problem);    

    const params = {
        "Name" : "Monitoramento de " + problem,
        "press_o_dos_pneus__c" : 30.00,
        "Opportunity__c" : "0063s00000DQtexAAD",
        "Account__c" : "0013s00000v56x8AAA"
    }
    insertItem(params);
})

function insertItem(params) {
    conn.sobject("Monitoramento__c").create(params, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
    });
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

