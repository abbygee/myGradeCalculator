var count = 0;

function calculateGradeNeeded(){
    var cur = calculateCurrentGrade();
    var desire = document.getElementById('wanted').value;
    var weight = document.getElementById('finalweight').value;
    parseInt(desire);
    parseInt(weight);
    weight = weight/100;

    var needed = (desire - cur * (1 - weight)) / weight;

    document.getElementById('needed').innerHTML = needed.toFixed(1);
}

function calculateCurrentGrade(){
    /* This calculates the first row which is required for the site */
    var cat1 = document.getElementById('ipoints').value;
    var cat1num = convertArrayStringToNumber(cat1);
    var cat1avg = averageArray(cat1num);
    var cat1weight = parseInt(document.getElementById('iweight').value);
    var cat1final = cat1avg * (cat1weight / 100 );

    /* This should calculate the rows that the user adds to the site */
    var constant = 0;
    //var totalWeight = 0;

    if(count !== 0){
        for(var i = 0; i < count; i++){
            var cat = document.getElementById(i + "points").value;
            var catnum = convertArrayStringToNumber(cat);
            var catavg = averageArray(catnum);
            var catweight = parseInt(document.getElementById(i + "weight").value);
            constant += (catavg * (catweight / 100));
            //totalWeight += catweight;
        }
    }
    constant += cat1final;
   // totalWeight += cat1weight;
// fix this so it recognizes that ALL input fields are filled in
    //if(totalWeight === 100 && cat1.length > 1 && cat1weight > 0 && ){
        document.getElementById('grade').innerHTML = constant.toFixed(1) + "%";
        return constant;
    //}else{
        //alert("Please make sure your total weight equals to 100 and both points and weight are filled in.");
    //}
}

function averageArray(array){
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

            labelRow.setAttribute('class','w3-bungee');

            valueRow.appendChild(col1);
            valueRow.appendChild(col2);

            document.getElementById('table1').appendChild(labelRow);
            document.getElementById('table1').appendChild(valueRow);
            count++;
        }else{
            alert("Please enter a category name");
        }


    }else{
        alert("Too many categories, refresh to restart");
    }
}