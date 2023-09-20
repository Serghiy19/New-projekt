module.exports = (req, res) =>{
  if(req.session.userId) {
    console.log(`In if: ${req.session.userId}`)
    return res.render('create')
  }
  console.log(`Show us: ${req.session.userId}`)
  res.redirect('/auth/login')
}
