var statusID =0
var statusHistory = function () {
    statusDate: "";
    projectName: "";
    activityType: "";
    timeSpent: "";
    activityDescription: "";
    postedDate: "";
    postedTime: "";
    domElement: "";
    
}

statusHistory.prototype.setValues = function () {
  this.statusDate = document.getElementById("datePicker").options[document.getElementById("datePicker").selectedIndex].text;
  
  this.projectName = document.getElementById("projectName").value;
  
  this.activityType = document.getElementById("activityTypePicker").options[document.getElementById("activityTypePicker").selectedIndex].text
  
  this.timeSpent = document.getElementById("hourPicker").options[document.getElementById("hourPicker").selectedIndex].text 
                   + ":" + 
                   document.getElementById("minutePicker").options[document.getElementById("minutePicker").selectedIndex].text;
  
  this.activityDescription = document.getElementById("activityDescription").value;
  
  var now = new Date();
  
  this.postedDate = getFormatedDate(now);
  
  this.postedTime = getFormatedTime(now);
  
  this.domElement = "<div class=\"dayHistoryDiv\" id=\"status" + statusID++ + "\">"

    				+ "<div style=\"padding: 10px;\">"

    					+ "<div class=\"leftDiv\">"

	    					+ "<div> end-of-day</div>"

	    					+ "<div class=\"statusDate\">" + this.statusDate + "</div>"

	    					+ "<div style=\"margin-top: 5px;\">posted on:</div>"
	    					+ "<div class=\"postedDate\">" + this.postedDate + "</div>"
	    					+ "<div class=\"postedTime\">" + this.postedTime + "</div>"
	    				+ "</div>"


	    				+ "<div class=\"middleDiv\">"
	    					+ "<div class=\"description\" style=\"padding-left: 20px;\">" + this.activityDescription + "</div>"
	    				+ "</div>"

	    				+ "<div class=\"rightDiv\">"
	    					+ "<div class=\"time\">" + this.timeSpent + " hour(s)</div>"
	    					+ "<div class=\"activityType\">" + this.activityType + "</div>"
	    					+ "<div class=\"projectName\" style=\"padding-top: 5px;\">" + this.projectName + "</div>"
	    				+ "</div>"

    				+ "</div>"
    				+ "<div style=\"clear: both;\"></div>"
    				
    			+ "</div>";
}