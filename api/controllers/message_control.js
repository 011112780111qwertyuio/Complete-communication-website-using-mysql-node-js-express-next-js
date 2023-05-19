const db =require('../connection');

const post_data_message = (req,res)=>{
    const {messgae} = req.body;
    const q = 'INSERT INTO messages_table (messgae) VALUES (?)';

    db.query(q,[messgae],(err,result)=>{
        res.json(result);
    })

}


const get_showmessage_home = (req,res)=>{

const q='SELECT *FROM messages_table';
db.query(q,(err,resultt)=>{
    res.json(resultt);
})
}



module.exports = {get_showmessage_home,post_data_message};