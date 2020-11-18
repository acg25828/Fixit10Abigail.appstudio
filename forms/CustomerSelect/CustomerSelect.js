let query = ""
let results = ""
let pw = "Egg123456789!"  
let allPetDate = []

CustomerSelect.onshow=function(){
    txtArea_contents.style.height = "100px"
}

btnGet.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=acg25828&pass=" + pw + "&database=acg25828&query=" + query)

   if (req.status == 200) { 
        
        results = JSON.parse(req.responseText)

        console.log(results)
        
    if (results.length == 0)   
        lblMssg.textContent = "There are no customers in the database."
    else {       


        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        console.log(`to get to Paul, need results[0][1]: ${results[0][1]}`)


        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtArea.value = message
     } 

  } else  
       
        lblMssg.textContent = "Error code: " + req.status
}
btnNxt.onclick=function(){
 ChangeForm(CustomerDelete) 
}