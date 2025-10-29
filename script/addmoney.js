alert("Successfully Logged In");

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const piin = document.getElementById("pin").value;
    if(piin===1111) {
        console.log("Okay add kora jabe")
    }
    else {
        console.log("Invalid pin number");
    }
})