// alert('JAVASCRIPT is basement')
// crud-create,read,update,delete

// const { Button } = require("bootstrap");


// global variable
var row = null;

function formsubmit() {
    var dataEntered = retrieveData();
    // console.log(dataEntered);
    var readdata = readingDatafromlocalstorage(dataEntered);
    // console.log( readdata);
   
    // there is a conflict between insert and update to overcome this issue by using if statement
    // insert(readdata);
    // update();

    if(dataEntered == false){
        var error=msg.innerHTML=`<h3 style="color:red;font-size:22px;">invalid data !</h3>`;

    }
    else{
        if (row == null) {
            insert(readdata);
            msg.innerHTML =`<h3 style="color:green;font-size:22px;">Data inserted</h3>`;
            // msg htmlid used for a div tag
        }
        else {
            update();
            msg.innerHTML = `<h3 style="color:purple;font-size:22px;">Data updated</h3>`;
        }
    }
   

document.getElementById('form').reset();

    
}

// CREATE
// retrieving data from form
function retrieveData() {
    var name = document.getElementById('name').value;
    var job = document.getElementById('job').value;
    var exp = document.getElementById('exp').value;
    // value can assign new value to an input field for dynamic populating form fields or resetting

    // return is used to return only one value to over this we need to array
    var arr = [name, job, exp];
    
    // important**
  if( arr.includes('')){
    return false;
  }
  else{
    return arr;
  }
    
}


// READ DATA
// data in localstorage
function readingDatafromlocalstorage(dataEntered) {
    // storing data in local storage
    var n = localStorage.setItem("Name", dataEntered[0]);
    var j = localStorage.setItem("Job", dataEntered[1]);
    var e = localStorage.setItem("Experience", dataEntered[2]);
    //   getting values from local to table
    var n1 = localStorage.getItem("Name", n);
    var j1 = localStorage.getItem("Job", j);
    var e1 = localStorage.getItem("Experience", e);


    var arr = [n1, j1, e1];
    return arr;
}

// INSERT

function insert(readdata) {

    // console.log(readdata);

    var table = document.getElementById('myTable');
    // if (table) {
    //   var newRow = table.insertRow();

    //   for (var i = 0; i < readdata.length; i++) {

    //     var cell = newRow.insertCell();
    //     cell.textContent = readdata[i];
    //   }
    // } else {
    //   console.log('Table element not found');
    // }

    var row = table.insertRow();
    row.insertCell(0).innerHTML = readdata[0];
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell2.innerHTML = readdata[1];
    cell3.innerHTML = readdata[2];
    // row.insertCell(3).innerHTML='javascript';
    row.insertCell(3).innerHTML = ` <button  onclick=edit(this)>Edit </button>
    <button  onclick=remove(this)>Delete</button> `;
    // delete is keyword which can't be used to remove 
    // this is used to get value 




}

// EDIT

// doubt 1 at para important......
function edit(thispara) {
 
    // row is a global variable .
    row = thispara.parentElement.parentElement;
    // parentElement first td then reusing parent element again goes to tr ..table
    //   console.log(row);

    document.getElementById("name").value = row.cells[0].innerHTML;
    // cells its by defualt act as array stores cell values


    document.getElementById("job").value = row.cells[1].innerHTML;

    document.getElementById("exp").value = row.cells[2].innerHTML;

   

}

// Update

function update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    row = null;
    // making row null at the end by assiging null
}

// DELETE
function remove(removepara){
  var ansrequest = confirm('r u sure want to delete record !')
  if(ansrequest ==true){
    row=removepara.parentElement.parentElement;
    document.getElementById('myTable').deleteRow(row.rowIndex);
  } 
  
 
    // document.getElementById('myTable').remove(); it removes entire table



}




// IMPLEMENTING JSON DATA (ARRAYOBJECT)]
let identity = '';
// localStorage.clear();
function submitsecond(){
  document.getElementById('message').innerHTML=" ";
let namestand = document.getElementById('namesecond').value;
if(namestand == ''){
  document.getElementById('message').innerHTML='please enter your name';




}
else{
  if(identity==''){
let arr=JSON.parse(localStorage.getItem('crud'))
if(arr==null){
  let dataa=[namestand];
localStorage.setItem('crud',JSON.stringify(dataa));

}
else{
arr.push(namestand);
localStorage.setItem('crud',JSON.stringify(arr));

}
  }
  else{

  }
  
}
// document.getElementById('namesecond').value='';
document.getElementById('formsecondjson').reset();
}
function selectdata(){

}
function deletedata(){

}
function loaddata(){

}
function editdata(){

}