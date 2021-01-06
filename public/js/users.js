var users = [
    {name: "admin", email: "admin@gmail.com", password: "Asd12345"}
];

function checklogin(){

        var id = document.getElementById('email');
        var pass = document.getElementById('pwd');
        console.log(id.value + " " + pass.value);
        for(i=0; i<users.length; i++)
        {
            if(id.value == users[i].email && pass.value == users[i].password){
                $("#form1").attr("action","/dashboard");
                return;
            }
        }
        alert("Invalid Username and Password");

}

function checksignup(myprint){
    var id = document.getElementById('email');
    for (i = 0; i < users.length; i++)
    {
        if(users[i].email == id.value){
            alert("Email id already in use!");
            return;
        }
    }
    
    var name = document.getElementById('uname');
    var dob = document.getElementById('dob');
    var country = document.getElementById('country');
    var pass = document.getElementById('pwd1');
    window.users.push({name: name.value, dob: dob.value, email: id.value, country: country.value, phone: phone.value, password: pass.value});
    alert("Sign Up Successful!");
    $("#form1").attr("action","/login");
    myprint();
}

function myprint() {
    $("#form1").attr("action","/login");
    for(i=0; i < users.length; i++){
        console.log(users[i].name);
    }
}

