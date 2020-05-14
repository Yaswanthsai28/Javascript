var j1,j2,j3;

j1 = 89;
j2 = 120;
j3 = 103;

var m1,m2,m3;

m1 = 116;
m2 = 94;
m3 = 123;

var avgj = (j1+j2+j3)/3;
var avgm = (m1+m2+m3)/3;
var avgM = (97 + 134 + 105)/3;

if((avgj > avgm) && (avgj > avgM)) 
    {
        console.log('John is the Winner : ' + avgj);
    }
else if((avgM > avgj) && (avgM > avgm))
    {
        console.log('Marry is the Winner : ' + avgM);
    }
else if((avgm > avgj) && (avgm > avgM))
    {
        console.log('Mike is the Winner : ' + avgm);
    }
else{
    console.log('There is a Draw');
}