btnSubmit2.onclick=function(){
    let name = inptName.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zip = inptZip.value
    let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zip + "')"
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=acg25828&pass=" + pw + "&database=acg25828&query=" + query)
 
    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblAdd.textContent = "You have successfully added the customer!"
        else
            lblAdd.textContent = "There was a problem with adding the customer to the database."
    } else 
        // transit error
        lblAdd.textContent = "Error: " + req.status
}
 
btnNxt3.onclick=function(){
 ChangeForm(CustomerUpdate) 
}

