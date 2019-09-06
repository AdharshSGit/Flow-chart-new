var stuID = 0;
var div=0;
var grade = new Array();
var sum = 0;
var english = 0; 
var maths = 0; 
var science = 0; 
var social = 0;
var average = 0;
var x = 0;
var pass = new Array(13).fill(0);
var fail = new Array(13).fill(0);
var no_of_stud = new Array(13).fill(0);
var totalpass = 0;
var totalfail = 0;
var totalstudents = 0;
var totalpasspercent = 0;
var passpercent =new Array(13).fill(0);

function Add_element_in_array()
{
    stuID = parseInt(document.getElementById("ID").value,10);
    grade[x] = parseInt(document.getElementById("grade").value,10);
    div = parseInt(document.getElementsByName("div").value,10);
    english = parseInt(document.getElementById("english").value,10);
    maths = parseInt(document.getElementById("maths").value,10);
    science = parseInt(document.getElementById("science").value,10);
    social = parseInt(document.getElementById("social").value,10);
   
   if(isNaN(stuID)){
       alert("Enter the Student ID ");
   }
   else if(stuID<0){
    alert("enter valid Student ID");
   }
   else if(isNaN(grade[x])){
       alert("Select the Grade");
   }
   else if(isNaN(english)||isNaN(maths)||isNaN(science)||isNaN(social))
   {
       alert("Enter every records..");
   }
    else if((english>100)||(maths>100)||(science>100)||(social>100))
    {
        alert("Marks limit should not exceed 100...");
        clear_marks();
    }
    else if((english<0)||(maths<0)||(science<0)||(social<0))
    {
        alert("Please Enter the valid mark...");
        clear_marks();
    }
    else
    {
        evaluate();
    }
    x++;
}
 

function evaluate()
{
    alert("Marks Entered..!");
    sum = english+maths+science+social;
    average = sum / 4;
    
    if (average >= 60) {
        pass[grade[x]]++;
        no_of_stud[grade[x]]++;
        totalpass++;
        totalstudents++;
        

    }
    else {
        fail[grade[x]]++;
        no_of_stud[grade[x]]++;
        totalfail++;
        totalstudents++;
    }
    passpercent[grade[x]] = ((pass[grade[x]] / no_of_stud[grade[x]]) * 100).toFixed(2);
    totalpasspercent = ((totalpass / totalstudents) * 100).toFixed(2);
    
    clear_complete();
}
function display()
{
    var myTable = "<h1>Academic Final Report <hr></h1>";
    myTable += "<table ><tr><td style='width: 100px; text-align: center; font-weight: bolder;'>Grades<hr></td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder;'>No of students<hr></td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder;'>Pass_Students<hr></td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder;'>Fail_Students<hr></td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder;'>Average<hr></td></tr>";




    for (var i = 1; i <= 12; i++) {

        myTable += "<tr><td style='width: 100px; text-align:center;'>" + i + "</td>";
        myTable += "<td style='width: 100px; text-align: center;'>" + no_of_stud[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: center;'>" + pass[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: center;'>" + fail[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: center;'>" + passpercent[i] + "</td></tr>";

    }
    
    
    myTable += "<tr><td style='width: 100px; text-align:center;font-weight: bolder;'>" + "ALL" + "</td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder'>" + totalstudents + "</td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder'>" + totalpass + "</td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder'>" + totalfail + "</td>";
    myTable += "<td style='width: 100px; text-align: center;font-weight: bolder'>" + totalpasspercent + "</td></tr>";
    myTable += "</table>";

    document.getElementById("Result").innerHTML = myTable; 
}

function clear_complete()
{
    document.getElementById("ID").value="";
    document.getElementById("grade").value="";
    document.getElementsByName("div").value="";
    document.getElementById("english").value="";
    document.getElementById("maths").value="";
    document.getElementById("science").value="";
    document.getElementById("social").value="";
}
function clear_marks()
{
    document.getElementById("english").value="";
    document.getElementById("maths").value="";
    document.getElementById("science").value="";
    document.getElementById("social").value="";    
}



