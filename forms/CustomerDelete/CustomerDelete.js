CustomerDelete.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ecr78882&pass=" + pw + "&database=ecr78882&query=" + query)

    if (req.status == 200) { 
        allCustomers = JSON.parse(req.responseText)
        console.log(results)
    } else {
        // transit error
        lblMsg = `Error: ${req.status}`
    } 
}

btnDelete.onclick=function(){
    let customerNameDel = inptDelete.value
    
    // make sure the pet name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= allCustomers.length - 1; i++) {
        if (customerNameDel == allCustomers[i][1])
            found = true
            break // if found the item in the database jump out of loop
    }
    if (found == false) 
       lblDelete.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + customerNameDel + '"'
      alert(query)
      
      // replace my netID with yours
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=acg25828&pass=" + pw + "&database=acg25828&query=" + query)

      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                lblMssg.textContent = `You have successfully deleted the pet named ${customerNameDelete}`
            else
                lblDelete.textContent = `There was a problem deleting ${customerNameDelete} from the database.`
      else
        // transit error
        lblDelete.textContent = `Error: ${req.status}`
      } // found isi true
}
btnNxt2.onclick=function(){
 ChangeForm(CustomerAdd) 
}