var stuID = new Array;
var no_of_sub = 4;
var grade = new Array;
var div = new Array;
var english = new Array;
var maths = new Array;
var science = new Array;
var social = new Array;
var sum = new Array;
var average = new Array;
var pass = ["0","0","0","0","0","0","0","0","0","0","0","0","0"];
var fail = ["0","0","0","0","0","0","0","0","0","0","0","0","0"];
var no_of_stud = ["0","0","0","0","0","0","0","0","0","0","0","0","0"];
var avg = 0;
var x = 0;

function Add_element_in_array()
{
    
    stuID[x] = parseInt(document.getElementById("ID").value,10);
    grade[x] = parseInt(document.getElementById("grade").value,10);
    div[x] = parseInt(document.getElementsByName("div").value,10);
    english[x] = parseInt(document.getElementById("english").value,10);
    maths[x] = parseInt(document.getElementById("maths").value,10);
    science[x] = parseInt(document.getElementById("science").value,10);
    social[x] = parseInt(document.getElementById("social").value,10);
    
    validate();
}
function validate()
{
    
    if((stuID[x]=="")||(grade[x]=="")||(div[x]==""))
    {
        alert("Enter every Credentials..");
    }
    else if((english[x]>100)||(maths[x]>100)||(science[x]>100)||(social[x]>100))
    {
        alert("Marks limit should not exceed 100...");
        clear_marks();
    }
    else if((english[x]<0)||(maths[x]<0)||(science[x]<0)||(social[x]<0))
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
    sum[x]=english[x]+maths[x]+science[x]+social[x];
    alert("Test" + sum[x]);
    average[x]=sum[x]/no_of_sub;
    if(average[x]>=60)
    {
        pass[x]++;
        no_of_stud[x]++;
    }
    else
    {
        fail[grade[x]]++;
        no_of_stud[grade[x]]++;
    }
    x++;
    alert(x);
    clear_complete();
}
function display()
{
    alert("result will be displayed...");
    
    var h = "Grade  No.of.Students  PassStudents  FailStudents  Average";
    var r,l;
    var b="&nbsp";
    for(var i=1;i<25;i++)
    {
      l+=b;  
    }
    for(var i=1;i<=12;i++)
    {
        if(no_of_stud[i] !=0)
        {
          avg = ((pass[i]/no_of_stud[i])*100);
          r += b + grade[i] + l + no_of_stud[i] + l + pass[i] + l + fail[i] + l + avg.toFixed(2) + "<br/>";

        }
        else
        {
            r+= b + grade[i] + l + no_of_stud[i] + l + pass[i] + l + fail[i] + l + "0.0" + "<br/>"; 
        }
       
    }
    document.getElementById("Result").innerHTML=h+r;
 
}
