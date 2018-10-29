var count = 0;

function calculateGradeNeeded(){
    var curGrade = calculateCurrentGrade();


}
function calculateCurrentGrade(){
    var sum = 0;
    var grades = convertArrayStringToNumber(string);
    for(var i = 0; i < grades.length; i++){
        sum += grades[i];
    }

    sum = sum / (grades.length);
    return sum;
}


function convertArrayStringToNumber(string){
    //var sGrades = document.getElementsByClassName('points').value;
    var grades = string.split(",");

    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
}


function addRow() {
    if(count <= 4){
        var catName = document.getElementById('catName').value;

        var labelRow = document.createElement('tr');
        var valueRow = document.createElement('tr');
        /* value columns */
        var col1= document.createElement('td');
        var col2 = document.createElement('td');
        /* headings */
        var col3 = document.createElement('th');
        var col4 = document.createElement('th');

        if(catName.length >= 1){
            col3.innerHTML = catName + " Points";
            col4.innerHTML = "Weight";

            col1.innerHTML = "<input type=\"text\" class=\"points\">";
            col2.innerHTML = "<input type=\"text\" class=\"weight\">";

            labelRow.appendChild(col3);
            labelRow.appendChild(col4);

            valueRow.appendChild(col1);
            valueRow.appendChild(col2);

            document.getElementById('container').appendChild(labelRow);
            document.getElementById('container').appendChild(valueRow);
            count++;
        }else{
            alert("Please enter a category name");
        }
    }else{
        alert("Too many categories, refresh to restart");
    }
}