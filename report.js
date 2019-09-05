
var no_of_sub = 4;
var grade = new Array;
var sum = 0; var english = 0; var maths = 0; var science = 0; var social = 0;
var average = 0;
var pass = new Array(13).fill(0);
var fail = new Array(13).fill(0);
var no_of_stud = new Array(13).fill(0);

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

function evaluate()
{
    alert("Marks Entered...");
    sum=english+maths+science+social;
    average=sum/no_of_sub;
    var x = 0;
    if(average>=60)
    {
        pass[grade[x]]++;
        no_of_stud[x]++;
    }
    else
    {
        fail[grade[x]]++;
        no_of_stud[grade[x]]++;
    }
    x++;
    clear_complete();
}
var entry=document.getElementById("button2");
entry.addEventListener("click",display());
function display()
{
    var row=1;
    var avg = 0;
    for(var i=1;i<=12;i++)
    {
        if(no_of_stud[i] !=0)
        {
            avg=(pass[i]/no_of_stud[i]);
        }
        else
        {
            avg=0.0;
        }
        var table = document.getElementById("table");
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML= grade[i];
        cell2.innerHTML= no_of_stud[i];
        cell3.innerHTML= pass[i];
        celll4.innerHTML= fail[i];
        cell5.innerHTML= avg[i];
        row++;
    }
    
}
