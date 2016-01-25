	$(document).ready(function(){	
	$('#submit').click(function(){
		console.log('3');
		var rollno = $('#rollno').val();
		console.log(rollno);
		var pass = $('#pass').val();
		if(rollno != '' && pass !=''){
		var params = "rollno="+rollno+"&pass="+pass;
		var url = "http://placement.iitm.ac.in/students/login.php"
		var url1 = "http://placement.iitm.ac.in/students/comp_list.php"
		var xhr = new XMLHttpRequest();
		var http = new XMLHttpRequest();
	
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				console.log("1");
				http.open("GET",url1,true);
				http.send(null);
				http.onreadystatechange = function(){
					if(http.readyState == 4 && http.status == 200){
						document.getElementById('settings').innerHTML = http.responseText;
						console.log("2");
					}
				};

				
			}
		};
		xhr.open("POST",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	});
});
	


