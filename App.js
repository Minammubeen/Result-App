var table = document.getElementById("studentData")
var rollnumberInput = document.getElementById("inp");
var showRollNumber = document.getElementById("showRollNumber");
var showName = document.getElementById("showName");
var showFatherName = document.getElementById("showFatherName");
var showResult = document.getElementById("showResult");
var student = [ 
    {
        rollno: 1,
        name: "Ali",
        fathername: "Suleman",
        Result: "Pass",
    },
    {
        rollno: 2,
        name: "Aman",
        fathername: "Farhan",
        Result: "Fail",
    },
    {
        rollno: 3,
        name: "Taha",
        fathername: "Munawwar",
        Result: "Pass",
    },
    {
        rollno: 4,
        name: "Shaiz",
        fathername: "Ali",
        Result: "Fail",
    },
    {
        rollno: 5,
        name: "Hadi",
        fathername: "Yaqoob",
        Result: "Pass",
    },
    {
        rollno: 6,
        name: "Naafay",
        fathername: "Hammad",
        Result: "Pass",
    },
    
    {
        rollno: 7,
        name: "Mahad",
        fathername: "Muslim",
        Result: "Pass",
    },
    {
        rollno: 8,
        name: "Moiz",
        fathername: "Hussain",
        Result: "Fail",
    },
    {
        rollno: 9,
        name: "Umer",
        fathername: "Ahmed",
        Result: "Pass",
    },
    {
        rollno: 10,
        name: "Rafay",
        fathername: "Fareed",
        Result: "Fail",
    },
];
console.log(rollnumberInput.value)
for (var i = 0; i < student.length; i++) {
    table.innerHTML +=
        "<tr><td>" + student[i].rollno +
        "</td><td>" + student[i].name +
        "</td><td>" + student[i].fathername +
        "</td><td>" + student[i].Result +
        "</td></tr>"
}

function searchResult() {
    var userRollNumber = rollnumberInput.value;
    for (var i = 0; i < student.length; i++) {
        if (userRollNumber == student[i].rollno) {
            var obj = student[i];
            console.log(student[i])
            showRollNumber.innerHTML = obj.rollno
            showName.innerHTML = obj.name
            showFatherName .innerHTML = obj.fathername
            showResult.innerHTML = obj.Result
        }
    }

}