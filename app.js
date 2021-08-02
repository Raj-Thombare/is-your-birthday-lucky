var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output-div");

btnCheck.addEventListener("click", checkBirthdateIsLucky);

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = getSum(dob);
    const luckNum = luckyNumber.value;
    
    if(sum%luckNum===0){
        output.innerText = "Your Birthday is Lucky";
    }else{
        output.innerText = "Your Birthday is not Lucky";
    }
}

function getSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum
}