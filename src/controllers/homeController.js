const connection = require("../config/database")

const getLoginPage = async (req,res) => {
   
    connection.query(
        `select * from UserAccount`,
        function(err,results,fields){
          console.log(">>Results:" ,JSON.stringify(results));
          console.log(fields)
          return res.render("loginPage.ejs",{listAccount:results})
        }
      )
}

module.exports = {
    getLoginPage
}