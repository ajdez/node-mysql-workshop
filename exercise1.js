//Exercise 1
var mysql = require("promise-mysql");

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'ajdez',
  password : '',
  database : 'addressbook',
  connectionLimit: 10
});

function showDatabases(){
    return connection.query("SHOW DATABASES;")
    .then(function(result){
        return result;
        
    })
}

showDatabases().then(function(result){
    console.log(result)
    connection.end();
})
.catch(function(err){
    console.log("ERROR : " , err);
});
