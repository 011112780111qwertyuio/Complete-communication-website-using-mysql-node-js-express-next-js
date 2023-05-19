const db = require('../connection');
const users_profile_post = (req,res)=>{
const {usersid} = req.body;
const q = "SELECT *FROM users_table WHERE usersid =?";
db.query(q,[usersid],(err,result)=>{
    res.send(result)
})

}
module.exports = users_profile_post;
