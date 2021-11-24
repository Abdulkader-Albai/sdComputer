

exports.renderDashBoard = (req,res)=>{
    res.render('adminPages/dashboard', {
        layout: 'main'
    })
}

exports.renderMessages = (req,res)=>{
    res.render('adminPages/messages', {
        layout: 'main'
    })
}
