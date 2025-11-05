// alert("Successfully Logged In");

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("cashout-Amount").value;
    const convertedamount = parseFloat(amount);
    const Money = document.getElementById("money").innerText;
    const convertedmoney = parseFloat(Money);
    const Pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(Pin);
    if(amount && Pin) {
        if(convertedPin==1111){
            total = convertedmoney - convertedamount;
            document.getElementById("money").innerText=total;
        }
        else{
            alert("Enter valid pin");
        }
    }
    else {
        alert("Enter amount");
    }
})
