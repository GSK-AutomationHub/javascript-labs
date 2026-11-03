let age = 30 

if(age > 18){
    console.log("Eligible to Vote");
}else{
     console.log("Not Eligible to Vote");
}

let voteEligibityStatus = age > 18 ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(voteEligibityStatus);

console.log("--------------------------------------------")

let score = 72;

if(score>90){
    console.log("Excellent");
}else if(score>80){
    console.log("Good");
}else if(score>70){
     console.log("Can do Better");
}else if(score>60){
     console.log("Need Coaching");
}else if(score>50){
     console.log("Underperforming");
}else{
    console.log("call parents");
}

let studentPerformanceStatus = (score > 90) ? "Excellent"
    : (score > 80) ? "Good"
        : (score > 70) ? "Can do Better"
            : (score > 60) ? "Need Coaching"
                : (score > 50) ? "Underperforming" : "call parents"

console.log(studentPerformanceStatus)
