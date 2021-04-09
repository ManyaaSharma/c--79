name_of_student_array = [];
function submit()
{
    var Name_1= document.getElementById("name_of_student_1").value;
    var Name_2= document.getElementById("name_of_student_2").value;
    var Name_3= document.getElementById("name_of_student_3").value;
    var Name_4= document.getElementById("name_of_student_4").value;
    var Name_5= document.getElementById("name_of_student_5").value;

    name_of_student_array.push(Name_1);
    name_of_student_array.push(Name_2);
    name_of_student_array.push(Name_3);
    name_of_student_array.push(Name_4);
    name_of_student_array.push(Name_5);

    console.log (name_of_student_array);

    document.getElementById("display_names").innerHTML=name_of_student_array;
    document.getElementById("submit_button").style.display="none"; 
    document.getElementById("sort_button").style.display="inline_block";
}
function sorting()
{
    name_of_student_array.sort();
    document.getElementById("display_names").innerHTML=name_of_student_array;
    console.log (name_of_student_array);
}