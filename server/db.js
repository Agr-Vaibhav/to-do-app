const {Pool}=require('pg')
require('dotenv').config()

const pool=new Pool({
    user:"postgres",
    password:"abcd",
    host:"localhost",
    port:5432,
    database:'todoapp'
});
module.exports=pool