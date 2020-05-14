var marksMass , johnMass , marksHeight , johnHeight;

marksMass = 60;
johnMass = 50;
marksHeight = 170;
johnHeight = 168;

var mBMI = marksMass / (marksHeight * marksHeight);

var jBMI = johnMass / (johnHeight * johnHeight);

console.log(mBMI , jBMI);

console.log("Is Marks BMI is higher than John " + (mBMI > jBMI));