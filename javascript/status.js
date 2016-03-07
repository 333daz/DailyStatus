window.onload = function () {
    
   populateDropdowns();
}

function populateDropdowns() {
    
    populateDateDropdown();
    
    populateTimeDropdown();
    
    var jsonURLs = ["assets/json/searchType.json", "assets/json/activityType.json"];
    var dropdownIDs = ["searchTypePicker", "activityTypePicker"];
    
    for(var j = 0; j < 2; j++) {
      var parsedList = parseJSONObject(jsonURLs[j]);
      
      var dropdown = document.getElementById(dropdownIDs[j]);
      
      for(var i = 0; i < parsedList.length; i++) {
          var option = parsedList[i];
          var optionElement = document.createElement("option");
          optionElement.textContent = option;
          optionElement.value = option;
          if ((dropdown.id == "activityTypePicker") && (i == 5)) {
              optionElement.selected = true;
          }
          dropdown.appendChild(optionElement);
      }
      
      
    }
}

// parse JSON objects
function parseJSONObject(jsonURL) {
    
    var request = new XMLHttpRequest();
    var parsedObject;
    request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      
      parsedObject = JSON.parse(request.responseText);
    }
    
  };
  request.open("GET", jsonURL, false);
  request.send();
  
  return parsedObject.list;
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
        
        var historyInstance = new statusHistory();
        historyInstance.setValues();
        var historySubDiv = document.createElement('div');
        historySubDiv.innerHTML = historyInstance.domElement;
        document.getElementById("historyDiv").insertBefore(historySubDiv, document.getElementById("historyDiv").firstElementChild);
        
        resetInputFields();
        savedNotification();
    }
    
}


function savedNotification() {
    document.getElementById("notification").style.right = "10px";
    setTimeout(function() {
        document.getElementById("notification").style.right = "-500px";
    }, 5000);
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

//set input field values after save
function resetInputFields() {
    
    document.getElementById("activityDescription").value = "";
    document.getElementById("activityTypePicker").selectedIndex = 5;
    document.getElementById("projectName").value = "N/A";
    document.getElementById("minutePicker").selectedIndex = 0;
    
    if (document.getElementById("hourPicker").selectedIndex < 8) {
        document.getElementById("hourPicker").selectedIndex = 8 -document.getElementById("hourPicker").selectedIndex;
    }
    
    else {
        document.getElementById("hourPicker").selectedIndex = 8;
        if (document.getElementById("datePicker").selectedIndex < 7) {
            document.getElementById("datePicker").selectedIndex++;
        }
        
    }
}


//get time in hh: mm : ss format
function getFormatedTime(date) {
    var hh = (date.getHours() < 10? "0": "") + date.getHours();
    var mm = ((date.getMinutes()+1) < 10? "0": "") + (date.getMinutes()+1);
    var ss = ((date.getSeconds()+1) < 10? "0": "") + (date.getSeconds()+1);
    return hh + ":" + mm + ":" + ss;
}

var projectNames = parseJSONObject("assets/json/projectNames.json");

function projectNameTextChhanged() {
    document.getElementById("projectList").innerHTML = "";
    for(var i = 0; i < projectNames.length; i++) {
        if ((projectNames[i].toLowerCase()).indexOf((document.getElementById("projectName").value).toLowerCase()) == 0) {
           
           var optionElement = document.createElement("option");
          optionElement.textContent = projectNames[i];
          optionElement.innerText = projectNames[i];
          
          document.getElementById("projectList").appendChild(optionElement);
           
           
        }
    }
}