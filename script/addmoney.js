// alert("Successfully Logged In");

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("Amount").value;
    console.log(amount);
    const Pin = document.getElementById("pin").value;
    console.log(Pin);
    const convertedPin = parseInt(pin);
    console.log(convertedPin);
    if(convertedPin==1111) {
        console.log("Okay add kora jabe");
    }
    else {
        console.log("Invalid pin number");
    }
})