var i = 3;

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

//populate the dropdown

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
    
    var today = new Date;
    today.setDate(today.getDate() - 7);
    for(var i = 0; i < 8; i++) {
        var optionElement = document.createElement("option");
        var dd = (today.getDate() < 10? "0": "") + today.getDate();
        var mm = ((today.getMonth()+1) < 10? "0": "") + (today.getMonth()+1);
        var yyyy = today.getFullYear();
        optionElement.textContent = dd + "/" + mm + "/" + yyyy;
        optionElement.value = 8-(i+1) + "";
        if ((i+1) == 8) {
            optionElement.selected = true;
        }
        document.getElementById("datePicker").appendChild(optionElement);
        today.setDate(today.getDate() + 1);
    }
    
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


function saveButtonPressed() {
    
    var div = document.getElementById('day1'),
    clone = div.cloneNode(true);
    clone.id = "day" + i++;
    clone.style.display = "block";
// document.getElementById("historyDiv").appendChild(clone);
// document.getElementById("historyDiv").firstElementChild = document.getElementById(clone.id);
document.getElementById("historyDiv").insertBefore(clone, document.getElementById("historyDiv").firstElementChild);

document.getElementById(clone.id).getElementsByClassName("time")[0].innerText = "3:00 hour(s)";
document.getElementById(clone.id).getElementsByClassName("statusDate")[0].innerText = document.getElementById("datePicker").options[datePicker.selectedIndex].text;




}