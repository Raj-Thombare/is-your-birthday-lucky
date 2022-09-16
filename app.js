var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output-div");
var showDiv = document.querySelectorAll(".show-div");
var btnContinue = document.querySelector("#btn-continue");
var btnCross = document.querySelector("#btn-cross");
var privacyAlert = document.querySelector("#privacy-div");

btnCheck.addEventListener("click", checkBirthdateIsLucky);
btnContinue.addEventListener("click", continueBtnHandler);
btnCross.addEventListener("click", crossBtnHandler);

function crossBtnHandler(){
    privacyAlert.style.display = "none";
}

function continueBtnHandler(){
    let birthdayDate = dateOfBirth.value;
    if(birthdayDate){
        showDiv[0].style.display = "block";
        showDiv[1].style.display = "block";
    }else{
        output.innerText = "Please enter Birthdate to continue!!";
    }
    
}

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = getSum(dob);
    const luckNum = luckyNumber.value;
    
    if(luckNum > 0){
        if(sum%luckNum===0){
            output.innerText = "Yay!, Your Birthdate is Lucky!🥳";
        }else{
            output.innerText = "Oops!, Your Birthdate is not Lucky!😭";
        }
    }else{
        output.innerText = "Please enter Lucky Number";
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
