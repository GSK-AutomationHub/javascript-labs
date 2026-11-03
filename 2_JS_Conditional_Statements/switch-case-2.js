

function studentGrade(grade){

    switch(grade.toUpperCase()){
        case 'A' : return "Excellent"
        break;
        case 'B' : return "Good"
        break;
        case 'C' : return "Can do Better"
        break;
        case 'D' : return "Underperforming"
        default : return "Call Parents"
    }
}

console.log(studentGrade('c'))

let score = 84

let gradeLoop = [
    {thershold:90, message:'Grade A - Excellent'},
    {thershold:80, message:'Grade B - Good'},
    {thershold:70, message:'Grade C - Can do Better'},
    {thershold:60, message:'Grade D - Need Coaching'},
    {thershold:50, message:'Grade E - Underperforming'},
    {thershold:40, message:'Grade F - call parents'}
]

let match = gradeLoop.find(rule => score>rule.thershold)
let gradeMessage = match ? match.message : 'call parents'
console.log(gradeMessage)
