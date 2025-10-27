document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const Pin = document.getElementById("pin").value;
    if (accountNumber.length === 11) {
        if (Pin==="1111"){
            window.location.href = "./main.html";
        }
        else {
            console.log("Invalid Pin");
        }
    }
    else {
        console.log("Need valid account number");
    }
})