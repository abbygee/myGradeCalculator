var count = 0;

function calculateCurrentGrade(){
    /* This calculates the first row which is required for the site */
    var cat1 = document.getElementById('ipoints').value;
    var cat1num = convertArrayStringToNumber(cat1);
    var cat1avg = averageArray(cat1num);
    var cat1weight = document.getElementById('iweight').value;
    var cat1final = cat1avg * (cat1weight / 100 );

    /* This should calculate the rows that the user adds to the site */
    var constant = 0;
    if(count !== 0){
       for(var i = 0; i < count; i++){
           var cat = document.getElementById(i + "points").value;
           var catnum = convertArrayStringToNumber(cat);
           var catavg = averageArray(catnum);
           var catweight = document.getElementById(i + "weight").value;
           var catfinal = catavg * (catweight / 100);
           constant += catfinal;
        }
    }
    constant += cat1final;

    document.getElementById('grade').innerHTML = constant.toString().slice(0,4) + "%";
}

function averageArray(array){
    //var string = document.getElementById('ipoints').value;
    //var array = convertArrayStringToNumber(string);
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        avg += array[i];
    }

    avg = avg / (array.length);
    return avg;
}


function convertArrayStringToNumber(string){
    var grades = string.split(",");

    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
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
        /* text inputs */
        var i1 = document.createElement('input');
        var i2 = document.createElement('input');

        if(catName.length >= 1){
            col3.innerHTML = catName + " Points";
            col4.innerHTML = "Weight";

            i1.id = count + "points";
            i2.id = count + "weight";

            col1.appendChild(i1);
            col2.appendChild(i2);

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