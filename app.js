var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output-div");
var showDiv = document.querySelectorAll(".show-div");
var btnContinue = document.querySelector("#btn-continue");

btnCheck.addEventListener("click", checkBirthdateIsLucky);
btnContinue.addEventListener("click", continueBtnHandler);

function continueBtnHandler(){
    let birthdayDate = dateOfBirth.value;
    if(birthdayDate){
        showDiv[0].style.display = "block";
        showDiv[1].style.display = "block";
    }else{
        alert("Please enter Birthdate to continue!!")
    }
    
}

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = getSum(dob);
    const luckNum = luckyNumber.value;
    
    if(luckNum){
        if(sum%luckNum===0){
            output.innerText = "Your Birthdate is Lucky";
        }else{
            output.innerText = "Your Birthdate is not Lucky";
        }
    }else{
        alert("Please enter Lucky Number")
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