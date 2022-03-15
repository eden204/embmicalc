const { response } = require('express')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const port = 3000;


app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', function(request, response) {
    response.render('contact_us');
});


// app.post('/processed-contacts', urlEncodedParser, function(request, response) {
//     response.end('Thank you' + request.body.Name + ' ' + request.body.Height + ' ' + request.body.Weight);
// });

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// });
// app.get('/contacts', function(req, res) {
//     res.sendFile(__dirname + "/" + "/contact_us.handlebars");
// });


// //this is used to post the data on the specific route
app.post('/bmicalculator',urlEncodedParser, function(req, res) {


    var heigh = parseFloat(req.body.Height);
    var weigh = parseFloat(req.body.Weight);
    var bmi = weigh / (heigh * heigh);

  

    




    // CONDITION FOR BMI
    if (bmi < 19) {
        res.end(" hey! " + 
            " Your BMI is around: " + bmi +
            " You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.end("hey! " +
            " Your BMI is around: " + bmi +
            " You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.end("hey! " +
            " Your BMI is around: " + bmi +
            " You are Overweight!");
    } else {
        res.end("hey! " +
            " Your BMI is around: " + bmi +
            " You are Obese!");
    }
});



app.listen(port);
console.log('server is listening on port 3000')