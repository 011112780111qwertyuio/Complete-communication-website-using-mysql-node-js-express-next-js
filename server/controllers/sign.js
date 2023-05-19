const db = require('../connection');
const sign_singin_post = (req, res) => {
    const { email, password } = req.body;
    const q = "SELECT *FROM users_table WHERE email = ? AND password = ?";
    db.query(q, [email, password], (err, data) => {

        // fetch react hook
        if (err) {
            return res.send({ "state": "eror" });
        }
        if (data.length== 0) {
            return res.send({ "state": false })
            
        }
        if (data.length == 1)
        
        {
              return res.send({"state":true,"config":data});
        }

              
        
    })

}



module.exports = { sign_singin_post };

