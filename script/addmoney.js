// alert("Successfully Logged In");

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("Amount").value;
    const convertedamount = parseFloat(amount);
    const Money = document.getElementById("money").innerText;
    const convertedmoney = parseFloat(Money);
    const Pin = document.getElementById("pin").value;
    const convertedPin = parseInt(Pin);
    if(amount && Pin) {
        if(convertedPin==1111){
            total = convertedamount + convertedmoney;
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
