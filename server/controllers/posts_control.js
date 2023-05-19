const db = require('../connection');
const posts_posts_get =(req,res)=>{
    const q = 'SELECT *FROM users_table JOIN posts_table ON users_table.usersid = posts_table.user_ID WHERE posts_table.datatime >= CURRENT_TIMESTAMP -INTERVAL 3 MONTH ORDER BY posts_table.postid ASC LIMIT 100';
    db.query(q,(err,result)=>{
        res.send(result)
    })
}

module.exports = posts_posts_get;