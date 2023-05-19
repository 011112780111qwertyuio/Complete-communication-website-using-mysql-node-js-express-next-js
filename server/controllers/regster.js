const db = require('../connection');
const regster_singup_get = (req, res) => {

    const q = "SELECT *FROM users_table";
    db.query(q, (err, result) => {
        res.send(result);
    })
};

const regster_regster_singup_post = (req, res) => {

    //{email,password,lastname,firstname,phone,jop,imageprofile}
    const q = 'SELECT *FROM users_table WHERE email =?';
    db.query(q, [req.body.email], (err, data) => {
        if (data.length > 0) {
            return res.json("email saved data base");
        }
        else {
            return res.json("new email");
        }

    })
}


const checked_passwordandemail_regster = (req, res) => {
const passq = 'INSERT INTO users_table (email,password,lastname,firstname,phone,jop,urlimage) VALUES (?,?,?,?,?,?,?)';
db.query(passq, [req.body.email, req.body.password, req.body.lastname, req.body.firstname, req.body.phone, req.body.jop, req.body.urlimage], (err, data) => {
    if (err) {
        return res.json("eror password");
    }
    return res.json("yespas")
})


}



module.exports = { regster_regster_singup_post, regster_singup_get, checked_passwordandemail_regster };






