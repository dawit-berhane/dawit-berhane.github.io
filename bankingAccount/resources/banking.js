'use strict';
(function(){

let btnCreate;
let acctName;
let amount;
let displayArea;
let acctList = [];

const bankAcctCreater = function(){
        let accountType;
        let depositAmnt;

    function createAcct(type, amt){
        accountType = type;
        depositAmnt = amt;
    }
    function getAccount(){
        return accountType;
    }
    function getAmt(){
        return depositAmnt;
    }
    return {createAcct: createAcct,
            getAccount: getAccount,
            getAmt: getAmt
    };

};


windows.onload = function(){
    btnCreate = document.getElementById('btnCreate');
    btnCreate.onclick = createAccount;
    
    acctName = document.getElementById('acctName');
    amount = document.getElementById('amount');
    
    displayArea = document.getElementById('textarea');
};


function createAccount(){
    let account = bankAcctCreater();
    let acct = acctName.value;
    let amt = amount.value;
    if(acct == "" || amt == ""){
        enterValid();
    }else{
        account.createAcct(acct, amt);
        acctList.push(account);
        displayAccts();
    }
    
    
}

function displayAccts(){
    let string = "";
    for(const account of acctList){
        string += "Account Name: " + account.getAccount() + " Amount: " + account.getAmt() + "\n";
        
    }
    displayArea.value = string;
    
}

function enterValid(){
    displayArea.value = "Enter Valid Name and amount of deposit"
}

})();
