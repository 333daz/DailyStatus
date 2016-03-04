var statusID =0
var statusHistory = function (statusInstance) {
    this.statusDate = statusInstance.statusDate;
    this.projectName = statusInstance.projectName;
    this.activityType = statusInstance.activityType;
    this.timeSpent = statusInstance.timeSpent;
    this.activityDescription = statusInstance.activityDescription;
    this.postedDate = statusInstance.currentDate;
    this.postedTime = statusInstance.currentTime;
    
    
}

statusHistory.prototype.createDayHistoryElement = function () {
    
    var dayHistoryDiv = document.createElement("div");
    dayHistoryDiv.id = "status" + statusID++;
    dayHistoryDiv.className = "dayHistoryDiv";
    document.getElementById("historyDiv").insertBefore(dayHistoryDiv, document.getElementById("historyDiv").firstElementChild);
    
    var leftDiv = document.createElement("div");
    leftDiv.className = "leftDiv";
    document.getElementById(dayHistoryDiv.id).appendChild(leftDiv);
    
    var eod = document.createElement("div");
    eod.innerText = "end-of-day";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(leftDiv.className)[0].appendChild(eod);
    
    var statusDate = document.createElement("div");
    statusDate.innerText = this.statusDate;
    statusDate.className = "statusDate";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(leftDiv.className)[0].appendChild(statusDate);
    
    var posted_on = document.createElement("div");
    posted_on.innerText = "posted on:";
    posted_on.style.marginTop = "5px";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(leftDiv.className)[0].appendChild(posted_on);
     
    var postedDate = document.createElement("div");
    postedDate.innerText = this.postedDate;
    postedDate.className = "postedDate";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(leftDiv.className)[0].appendChild(postedDate);
    
    var postedTime = document.createElement("div");
    postedTime.innerText = this.postedTime;
    postedTime.className = "postedTime";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(leftDiv.className)[0].appendChild(postedTime);
    
    var middleDiv = document.createElement("div");
    middleDiv.className = "middleDiv";
    document.getElementById(dayHistoryDiv.id).appendChild(middleDiv);
    
    var description = document.createElement("div");
    description.innerText = this.activityDescription;
    description.className = "activityDescription";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(middleDiv.className)[0].appendChild(description);
    
    var rightDiv = document.createElement("div");
    rightDiv.className = "rightDiv";
    document.getElementById(dayHistoryDiv.id).appendChild(rightDiv);
    
    var time = document.createElement("div");
    time.innerText = this.timeSpent;
    time.className = "timeSpent";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(rightDiv.className)[0].appendChild(time);
    
    var activityType = document.createElement("div");
    activityType.innerText = this.activityType;
    activityType.className = "activityType";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(rightDiv.className)[0].appendChild(activityType);
    
    var projectName = document.createElement("div");
    projectName.innerText = this.projectName;
    projectName.className = "projectName";
    document.getElementById(dayHistoryDiv.id).getElementsByClassName(rightDiv.className)[0].appendChild(projectName);
    
    var baseDiv = document.createElement("div");
    baseDiv.style.clear = "both";
    document.getElementById(dayHistoryDiv.id).appendChild(baseDiv);
}