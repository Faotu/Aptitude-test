const mongoose = require("mongooe")

exp = require('express');
path = require('path');
parser = require('body-parser');
db = require('mongoose');
app = exp();

// Express & Mongoose params
app.listen(3000);
app.use(exp.static('public'));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


mongoose.connect("mongodb://localhost:27017/userDB", {
    userURLParser: true
});

const userSchema = {
    email: String,
    password: String,
    name: String
}

const User = new mongoose.model('user', userSchema);


app.POST("registration", function(req, res) {
    const newUser = new User ({
        email: req.body.username,
        password: req.body.password,
        name: req.body.name
    });

    newUser.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.render('test');
        }
    });
});


app.POST("login", function (req, res) {
    const username = req.body.username;
    const password = req.body.username;

    User.findOne({email: username}, 
        function(err, foundUser){
            if(err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === password ){
                        res.render("test");
                    }
                }
            }
        })
})

// Load page
app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname + 'home.html'));
})
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});


app.get("/registration", function(req, res) {
    res.render("registration");
});


