let User = require('../models/user.model');

module.exports.post = (req, res) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'person': 'person in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

module.exports.get = (req, res) => {
    User.find(function(err, users){
        if(err){
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
}