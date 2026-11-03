// grade calculator

function checkGrade(score){
    if (score >= 90){
        console.log("Garde A")
    }
    else if (score >= 80){
        console.log("Garde B")
    }
    else if (score >= 70){
        console.log("Garde C")
    }
    else if (score >= 60){
        console.log("Garde D")
    }
      else {
        console.log("Garde E")
    }
}

checkGrade(96)
checkGrade(82)
checkGrade(75)
checkGrade(63)
checkGrade(55)