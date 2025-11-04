document.getElementById('money-add').style.display="block";
document.getElementById('cash-out').style.display="none";

document.getElementById('add-btn').addEventListener("click",function(){
    document.getElementById("money-add").style.display="block";
    document.getElementById("cash-out").style.display="none";

})
document.getElementById('cash-btn').addEventListener("click",function(){
    document.getElementById("cash-out").style.display="block";
    document.getElementById("money-add").style.display="none";
})