// express router
const router = require('express').Router();

// other routes
const landingPageRouter = require('./routes/landingPage.router');
const  adminPageRouter = require('./routes/adminPage.router');

// const studentRouter = require('./routes/student.router');
// const advisorRouter = require('./routes/advisor.router');
// const deanRouter = require('./routes/dean.router');

// router.get('/', (req,res) => {
//     res.render('signIn');
// })

router.use('/', landingPageRouter )
router.use('/admin',adminPageRouter)

// router.use('/student', studentRouter )
//
// router.use('/dean', deanRouter)
//
// router.use('/advisor', advisorRouter)


module.exports = router ;