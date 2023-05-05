// Add your code here
function submitData(uName,uEmail){
    const postObject = {
        method :"POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify({
            name : uName,
            email : uEmail,
        })
    }
    return fetch("http://localhost:3000/users",postObject)
    .then((resp) => resp.json())
    .then((e) => document.body.append(e.id))
    .catch(function (error){
       document.body.append('Unauthorized Access')
    })
}


submitData("Sam","sam@sam.com")