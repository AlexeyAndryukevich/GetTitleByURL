var URLarr = [];
var myButton = document.getElementById('myButton');
var tableResult;

var x = document.getElementsByTagName("iframe");
setTimeout(function(){console.log(x);},5000);

myButton.onclick = function () {
    URLarr = document.getElementById('myTextArea').value.split('\n');    
    console.log(URLarr);
	var div = document.getElementById("tableResult");
	if (div.hasChildNodes()) {		
		div.removeChild(div.firstChild); 
	}
	tableResult = document.createElement("table");
		
	var head = tableResult.createTHead();
	var row = head.insertRow(0);
	row.insertCell(0).innerHTML = "URL";
	row.insertCell(1).innerHTML = "Title";
	row.insertCell(2).innerHTML = "Status code";	
	
	var body = tableResult.createTBody();
	for (var i=0; i<URLarr.length; i++) {			
		var row = body.insertRow(i);
		row.insertCell(0).innerHTML = URLarr[i];
		row.insertCell(1).innerHTML = "loading...";
		row.insertCell(2).innerHTML = "loading...";
		GetTitleByURL(i);
	}	
	div.appendChild(tableResult);	
};

var GetTitleByURL = function(num) {
	$.ajax({
        url: URLarr[num], //"http://www.i.ua/", //"/Home/FirstPage",
        dataType: "xml",
        success: function (data, textStatus, xhr) {
            var pageTitle = $(data).find('title').html();
            // таймаут просто чтоб успеть увидеть прелоадеры
			setTimeout(function(){
				tableResult.rows[num+1].cells[1].innerHTML = pageTitle;
				tableResult.rows[num+1].cells[2].innerHTML = xhr.status;
			},1000);			
        },
        error: function (xhr, textStatus, errorThrown) {
			setTimeout(function(){
				tableResult.rows[num+1].cells[1].innerHTML = textStatus+" ("+errorThrown+")";
				tableResult.rows[num+1].cells[2].innerHTML = xhr.status;
			},1000);			
        }
	});
 }
