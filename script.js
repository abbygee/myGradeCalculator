function calculateCurrentGrade(){

}


function addRow() {
    var catName = document.getElementById('catName').value;

    var labelRow = document.createElement('tr');
    var valueRow = document.createElement('tr');
    /* value columns */
    var col1= document.createElement('td');
    var col2 = document.createElement('td');
    /* label columns */
    var col3 = document.createElement('td');
    var col4 = document.createElement('td');

    if(catName.length >= 1){
        col3.innerHTML = catName + " points";
        col4.innerHTML = catName + " weight";

        col1.innerHTML = "<input type=\"text\" class=\"points\" placeholder=\"90,80,70\">";
        col2.innerHTML = "<input type=\"text\" class=\"weight\" placeholder=\"30\">";

        labelRow.appendChild(col3);
        labelRow.appendChild(col4);

        valueRow.appendChild(col1);
        valueRow.appendChild(col2);

        document.getElementById('container').appendChild(labelRow);
        document.getElementById('container').appendChild(valueRow);
    }else{
        alert("Please enter a category name");
    }
}