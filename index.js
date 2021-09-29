
error = "";
const formEl = document.querySelector("form");
function validateForm(e){
    e.preventDefault();
    const returnval = true;
    // perform validation and if validation fails, set value of returnval is false 
    const name = document['myForm']['name'].value;
    if(name.length<3){
        error += "*Length of name is too short";
        document.getElementById("nameerror").innerHTML = "*Length of name is too short";
        
        
    }
    if (name.length == 0){
        error += "*Length of name cannot be zero";
        document.getElementById("nameerror").innerHTML = "*Length of name cannot be zero";
    }  

    const phone = document['myForm']['phone'].value;
    if(phone.length!=10){
        error += "*Phone number should be of 10 digits!";
        document.getElementById("phoneerror").innerHTML = "*Phone number should be of 10 digits!";
        
    }
    
    if (isNaN(phone)){
        error += "*Phone number should be of 10 digits!";
        document.getElementById("phoneerror").innerHTML = "*Enter Numeric value only";
    }

    const email = document['myForm']['email'].value;
    if(email.indexOf('@')<=0){
        error += "*Invalid @ position";
        document.getElementById('emailerror').innerHTML = "*Invalid @ position";
        
    }
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
        error += "*Invalid";  
      document.getElementById('emailerror').innerHTML = "*Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition;    
      }  
    const list = document.getElementById("list").value;
    if(list=="Which cake do you want to order?"){
        error += "*Select cake";
        document.getElementById('listerror').innerHTML = "Please select Cake";
    } 

    if(error == ""){
        alert("You ordered successfully!!!!");
    }
}
formEl.addEventListener("submit", validateForm);

