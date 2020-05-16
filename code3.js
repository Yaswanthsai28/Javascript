var bills = [124 , 48 , 268];

var total_tips = new Array();
var bills_paid = [];


function tipCal(amount)
{
    var total_amt=0,t=0;
    
    if(amount < 50) t=(20/100)*amount;
    
    else if(amount >= 50 && amount<= 200) t=(15/100)*amount;
    
    else if(amount > 200) t=(10/100)*amount;
    
    total_tips.push(t);
    
    total_amt=amount+t;
    
    bills_paid.push(total_amt);
            
}

tipCal(bills[0]);
tipCal(bills[1]);
tipCal(bills[2]);


console.log(total_tips);
console.log(bills_paid);

