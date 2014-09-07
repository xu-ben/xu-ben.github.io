function getMyDate(tmpDate) {
	var date1,date2; 
	date1=tmpDate.getMonth()+1+"";  
	if(date1.length<2)            
		date1="0"+date1;          
	date2 =tmpDate.getDate()+"";    
	if(date2.length<2)           
		date2="0"+date2;         
	return date1+"-"+date2;   
}
function addCookie(objName,objValue,objHours) { 
	var str = objName + "=" + escape(objValue);
	if(objHours > 0){                               
		var date = new Date();
		var ms = objHours*3600*1000;
		date.setTime(date.getTime() + ms);
		str += "; path=/; expires=" + date.toGMTString();
	}
	document.cookie = str;
}
function hascookie() {
	var strCookie=document.cookie;
	var arrCookie=strCookie.split(";");
	for(var i=0;i<arrCookie.length;i++) {
		var arr=arrCookie[i].split("=");
		if("zhujiwuuserdomain"==arr[0].trim()) {
			return true;
		}
	}
	return false;
}
if(!hascookie()) {
	var cook_val=getMyDate(new Date());
	addCookie("zhujiwuuserdomain", cook_val, 4);
	window.location.reload();
}

