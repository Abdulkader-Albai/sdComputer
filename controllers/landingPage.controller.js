const path = require('path');


const Messages = require('models/messages.model')

const RequestIp = require('@supercharge/request-ip')
var bodyParser = require('body-parser');
// exports.renderMainPage = (req, res) => {
//     // res.sendFile(path.join(__dirname,'../', 'views', 'landingPage', 'homePage2.html'));
//     res.render('landingPage/home',
//     {
//         layout : 'main'   })
// }
exports.renderMainPage = (req, res) => {

    res.sendFile(path.join(__dirname,'../', 'views', 'landingPage', 'clientHomePage.html'));
}

exports.renderPostContactUsFrom = (req, res) => {
    if(!req.body){
       return res.sendStatus(400);
    }
    var form = {
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    };
    Messages.


    console.log(form);



    // var username = req.body;
    // var htmlData = 'Hello:' + username + req.ip ;
    // res.send(htmlData);
    // console.log(htmlData);
    //
    //
    // console.log(req.ip);
    // console.log(res.ip);
    // console.log(res.body);
    // res.sendFile(path.join(__dirname,'../', 'views', 'landingPage', 'clientHomePage.html'));

    res.sendFile(path.join(__dirname,'../', 'views', 'landingPage', 'clientHomePage.html'));

    // next();
}

