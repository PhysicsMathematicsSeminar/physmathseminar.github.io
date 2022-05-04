function deadline_application(duration_application, application_end, year, month, date){
    let today = new Date();
    let today_year = today.getFullYear();
    let today_month = today.getMonth()+1;
    let today_day = today.getDate();
    if(today_year > year || today_month > month){
    	document.getElementById(duration_application).style.display = "none";
    	document.getElementById(application_end).style.display = "block";
    }
    else if(today_month == month && today_day > date){
       	document.getElementById(duration_application).style.display = "none";
        document.getElementById(application_end).style.display = "block";
    }
    else{
        document.getElementById(duration_application).style.display = "block";
        document.getElementById(application_end).style.display = "none";
    }

    return;
}