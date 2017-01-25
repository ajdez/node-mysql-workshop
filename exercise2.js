
var mysql = require("promise-mysql");
var color = require("colors");

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'ajdez',
  password : '',
  database : 'addressbook',
  connectionLimit: 10
});


// Write a program that fetches the first 5 accounts in the addressbook database  
// For each account, console.log a line with the account’s ID and email, like this: #1:email@domain.com
// Use the colors NPM module with the .bold option to achieve this effect

function first5Accounts(){
    return connection.query("SELECT id, email FROM Account LIMIT 5;");
}

first5Accounts().then(function(result){
    result.forEach(function(result){
        console.log("#" + result.id + ": "+ result.email);    
    })
    connection.end();
})
.catch(function(err){
    console.log("ERROR : ", err);
})






