
var jobj = {
  
    bills : [124 , 48 , 268 , 180 , 42],
    
    tips : [],
    
    billamts : [],
    
    tipCal : function()
    {
        for(var i=0;i < this.bills.length ; i++)
            {
                var t=0,tot_amt=0;
                
                if(this.bills[i] < 50) t=(0.2)*this.bills[i];
                
                else if(this.bills[i] >= 50 && this.bills[i] <=200) t=(0.15)*this.bills[i];
                
                else if(this.bills[i] > 200) t=(0.1)*this.bills[i];
                
                this.tips.push(t);
                
                tot_amt=this.bills[i]+t;
                
                this.billamts.push(tot_amt);
            }
    }
    
};

jobj.tipCal();

console.log(jobj);



var mobj = {
  
    bills : [77 , 375 , 110 , 45],
    
    tips : [],
    
    billamts : [],
    
    tipCal : function()
    {
        for(var i=0;i < this.bills.length ; i++)
            {
                var t=0,tot_amt=0;
                
                if(this.bills[i] < 100) t=(0.2)*this.bills[i];
                
                else if(this.bills[i] >= 100 && this.bills[i] <=300) t=(0.1)*this.bills[i];
                
                else if(this.bills[i] > 300) t=(0.25)*this.bills[i];
                
                this.tips.push(t);
                
                tot_amt=this.bills[i]+t;
                
                this.billamts.push(tot_amt);
            }
    }
    
};

mobj.tipCal();

console.log(mobj);

function calAvg(tips)
{
    var sum=0;
    
    for(var i=0;i<tips.length;i++) sum+=tips[i];
    
    return (sum/tips.length);
}


var avgJohnTips = calAvg(jobj.tips);
var avgMarkTips = calAvg(mobj.tips);

if(avgJohnTips > avgMarkTips) console.log('John family paid highest tips on average : ' + avgJohnTips);

else if(avgJohnTips < avgMarkTips) console.log('Mark family paid highest tips on average : ' + avgMarkTips);

else console.log('They paid the same tips on average');
                   
                   
