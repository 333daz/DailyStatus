var statusID =0
var statusHistory = function (statusInstance) {
    this.statusDate = statusInstance.statusDate;
    this.projectName = statusInstance.projectName;
    this.activityType = statusInstance.activityType;
    this.timeSpent = statusInstance.timeSpent;
    this.activityDescription = statusInstance.activityDescription;
    this.postedDate = statusInstance.currentDate;
    this.postedTime = statusInstance.currentTime;
     this.domElement = "<div class=\"dayHistoryDiv\" id=\"day" + statusID++ + "\">"

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