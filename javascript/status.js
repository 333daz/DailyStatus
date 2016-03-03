window.onload = function () {
    
   loadDropDownData();
}



function loadDropDownData() {
    
    populateDateDropdown();
    
    populateTimeDropdown();
    
    var jsonURLs = ["assets/json/searchType.json", "assets/json/activityType.json"];
    var dropdownIDs = ["searchTypePicker", "activityTypePicker"];
    
    for(var i = 0; i < 2; i++) {
       parseJSONObject(dropdownIDs[i], jsonURLs[i]);
    }
}

// parse JSON objects
function parseJSONObject(dropdownID, jsonURL) {
    var list;
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      
      var parsedObject = JSON.parse(request.responseText);
      var dropdown = document.getElementById(dropdownID);
      
      
      populateDropdown(dropdown, parsedObject);
    }
    
  };
  request.open("GET", jsonURL, true);
  request.send();
  
  return list;
}

//populate the dropdown using parsed object

function populateDropdown(dropdown, parsedObject) {
    
    for(var i = 0; i < parsedObject.list.length; i++) {
          var option = parsedObject.list[i];
          var optionElement = document.createElement("option");
          optionElement.textContent = option;
          optionElement.value = option;
          if ((dropdown.id == "activityTypePicker") && (i == 5)) {
              optionElement.selected = true;
          }
          dropdown.appendChild(optionElement);
      }
}

function populateDateDropdown() {
    
    var date = new Date;
    date.setDate(date.getDate() - 7);
    for(var i = 0; i < 8; i++) {
        var optionElement = document.createElement("option");
        optionElement.textContent = getFormatedDate(date);
        optionElement.value = 8-(i+1) + "";
        if ((i+1) == 8) {
            optionElement.selected = true;
        }
        document.getElementById("datePicker").appendChild(optionElement);
        date.setDate(date.getDate() + 1);
    }
    
}
// get date in dd/mm/yyyy format
function getFormatedDate(date) {
        var dd = (date.getDate() < 10? "0": "") + date.getDate();
        var mm = ((date.getMonth()+1) < 10? "0": "") + (date.getMonth()+1);
        var yyyy = date.getFullYear();
        return dd + "/" + mm + "/" + yyyy;
        
}

function populateTimeDropdown() {
    
    for(var i = 0; i <= 24; i++) {
        var hhOptionElement = document.createElement("option");
        var hh = (i < 10? "0": "") + i;
        hhOptionElement.textContent = hh;
        hhOptionElement.value = hh;
        if (i == 8) {
            hhOptionElement.selected = true;
        }
        document.getElementById("hourPicker").appendChild(hhOptionElement);
    }
    
    for(var j = 0; j <= 45; j = j+15 ) {
        var mmOptionElement = document.createElement("option");
        var mm = (j < 10? "0": "") + j;
        mmOptionElement.textContent = mm;
        mmOptionElement.value = mm;
        document.getElementById("minutePicker").appendChild(mmOptionElement);
      }
}

//Save button Action
function saveButtonPressed() {
    
    if (nullCheckFields() == false) {
        var statusInstance = new statusObject();
        statusInstance.setValues();
        var historyInstance = new statusHistory(statusInstance);
        var historySubDiv = document.createElement('div');
        historySubDiv.innerHTML = historyInstance.domElement;
        document.getElementById("historyDiv").insertBefore(historySubDiv, document.getElementById("historyDiv").firstElementChild);
        document.getElementById("activityDescription").value = "";
        saveNotification();
    }
    
}


function saveNotification() {
    document.getElementById("notification").style.right = "10px";
    setTimeout(function() {
        document.getElementById("notification").style.right = "-500px";
    }, 5000);
}

// object
var statusObject = function () {
    statusDate: "";
    projectName: "";
    activityType: "";
    timeSpent: "";
    activityDescription: "";
    currentDate: "";
    currentTime: "";
} 

statusObject.prototype.setValues = function () {
  this.statusDate = document.getElementById("datePicker").options[document.getElementById("datePicker").selectedIndex].text;
  
  this.projectName = document.getElementById("projectName").value;
  
  this.activityType = document.getElementById("activityTypePicker").options[document.getElementById("activityTypePicker").selectedIndex].text
  
  this.timeSpent = document.getElementById("hourPicker").options[document.getElementById("hourPicker").selectedIndex].text 
  + ":" + 
  document.getElementById("minutePicker").options[document.getElementById("minutePicker").selectedIndex].text;
  
  this.activityDescription = document.getElementById("activityDescription").value;
  
  var now = new Date();
  
  this.currentDate = getFormatedDate(now);
  
  this.currentTime = getFormatedTime(now);
}

// null ckeck textFields
function nullCheckFields() {
    if (document.getElementById("activityDescription").value == "") {
        document.getElementById("activityDescription").style.borderColor = "red";
        document.getElementById("errorLabel").style.visibility = "visible";
        return true;
    }
    
    else {
        document.getElementById("activityDescription").style.borderColor = "#929292";
        document.getElementById("errorLabel").style.visibility = "hidden";
        return false;
    }
}

function getFormatedTime(date) {
    var hh = (date.getHours() < 10? "0": "") + date.getHours();
    var mm = ((date.getMinutes()+1) < 10? "0": "") + (date.getMinutes()+1);
    var ss = ((date.getSeconds()+1) < 10? "0": "") + (date.getSeconds()+1);
    return hh + ":" + mm + ":" + ss;
}