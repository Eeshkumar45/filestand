const {
    createPool
} = require('mysql');

const pool = createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "filestand",
});

function insert(){
    console.log("ok");
}
pool.query('desc creds',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})