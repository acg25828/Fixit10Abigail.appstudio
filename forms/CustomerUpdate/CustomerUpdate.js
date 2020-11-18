CustomerUpdate.onshow=function(){
    let query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=acg25828&pass=" + pw + "&database=acg25828&query=" + query)

    if (req.status == 200) { //transit worked.
            allCustomers = JSON.parse(req.responseText)
  
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

let newName = inptUpdate.value
    let oldName = txtUpdate.value
    
    let found = false
    for (i = 0; i <= allCustomers.length - 1; i++) {
        if (oldName == allCustomers[i]) {
            found = true
            break
        }
     }   
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
        query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
        //alert(query)
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=acg25828&pass=" + pw + "&database=acg25828&query=" + query)

        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the customer name!`)
                // reset controls to original state
                inptUpdate.value = ""
                txtUpdate.value = ""
            } else
                NSB.MsgBox(`There was a problem changing the customer name.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
    } // found is true 

btnNxt4.onclick=function(){
 ChangeForm(CustomerSelect) 
}

