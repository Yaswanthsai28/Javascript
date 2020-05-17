var jobj={
  
    fullName : 'john',
    mass : 50 ,
    height : 170 ,
    
    calBMI : function()
    {
        this.Bmi = this.mass / (this.height * this.height);
    }
    
};

var mobj={
    
    fullName : 'mark',
    mass : 60 ,
    height : 160 ,
    
    calBMI : function()
    {
        this.Bmi = this.mass / (this.height * this.height);
    }
    
}

jobj.calBMI();
mobj.calBMI();

console.log(jobj.Bmi , mobj.Bmi);

if(jobj.Bmi > mobj.Bmi) console.log(jobj.fullName + ' has high BMI ');

else if(jobj.Bmi < mobj.Bmi) console.log(mobj.fullName + ' has high BMI ');

else console.log('They have same BMI\'s');
