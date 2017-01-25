
var mysql = require("promise-mysql");
var color = require("colors");

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'ajdez',
  password : '',
  database : 'addressbook',
  connectionLimit: 10
});


function fetchInfo (){
    return connection.query("SELECT Account.id, Account.email , AddressBook.name FROM Account JOIN AddressBook ON Account.id = AddressBook.accountId ORDER BY Account.id;" );
}

fetchInfo()
.then(function(result){
    result.forEach(function(x, i, a){
        console.log("THIS ISSS : " ,a[i-1]);
        if (typeof a[i-1] === "undefined" || x.id != a[i-1].id){
            console.log("#" + x.id + ": " + x.email + "  name: " + x.name);
        }
        else{
            console.log("  name: " + x.name);
        }
    })
    
    
            /* OTHER WAY USING REDUCE INSTEAD OF FOREACH */
// then(function(result) {
//         result.reduce(function(acc, current, index) {
//             if (current.email != acc) {
//                 console.log(current.email + "\n" + "name : " + current.name),
//                     acc = current.email
//             }
//             else {
//                 console.log(',' + current.name)
//             }
//             return acc

//         }, "");
    
    connection.end();
}).catch(function(err){
    console.log("ERROR : " , err);
    connection.end();
})

