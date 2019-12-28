var express = require("express");
var bodyParser = require('body-parser')
var app = express();  
var Recaptcha = require('express-recaptcha');
var Mailgun = require('mailgun-js')
var recaptcha = new Recaptcha('6LfmmDQUAAAAAJzFYLj-n0hI_LKgaSZ8NMvfELsJ', '6LfmmDQUAAAAAAmLKQQQuKMm7bGKZdzrVaBuHck5');

var port = process.env.PORT || 3000;

// Allow processing of POST URL encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Mailgun
var api_key = process.env.LINKLATER_API_KEY;
var domain = "linklatervoicekorea.com";
var mailgun = new Mailgun({apiKey: api_key, domain: domain});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "public/stylesheets/main.css"));
app.use(express.static(__dirname)); 

app.get("/contact", recaptcha.middleware.render, function(req, res){
  res.render("contact", { captcha:res.recaptcha });
});
 
app.post('/contact', function(req, res){
    var data = {
      from: req.body.name + ' <' + req.body.email + '>',
      to: 'haerryat@yahoo.com',
      subject: 'LinkLater Contact from ' + req.body.name,
      text: req.body.msg
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    }); 
    res.redirect("/");
});

app.get("/", function(req, res){
    res.render("home");
});

app.get("/", function(req, res){
    res.render("home");
});


app.get("/about", function(req, res){

res.render("about");

 });
 
 app.get("/news", function(req, res){
    res.render("news");
    });

app.get("/see1", function(req, res){
    res.render("see1");
});

app.get("/see2", function(req, res){
    res.render("see2");
});

app.get("/see3", function(req, res){
    res.render("see3");
});

app.get("/see4", function(req, res){
    res.render("see4");
});

app.get("/see5", function(req, res){
    res.render("see5");
});

app.get("/see6", function(req, res){
    res.render("see6");
});

app.get("/workshops", function(req, res){
    res.render("workshops");
    });


    app.get("/books", function(req, res){
    res.render("books");
    });    


app.get("/contact", function(req, res){
    res.render("contact");
    });
    
//$(document).on('click', '[data-toggle="lightbox"]', function(event){
    //event.preventDefault();
    //$(this).ekkoLightbox();
    
//});

app.listen(port, function(){
    console.log("Linklater server has started");
});
