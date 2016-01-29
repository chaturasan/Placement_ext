	$(document).ready(function(){	
	$('#submit').click(function(){
		var rollno = $('#rollno').val();
		var pass = $('#pass').val();
		if(rollno != '' && pass !=''){
			var xhr = new XMLHttpRequest();
			xhr.open("GET","http://localhost/placement_ext/storedata.php?rollno="+rollno+"&pass="+pass+"&submit=Login")
			xhr.send();
			xhr.onreadystatechange = function(){
				if(xhr.readyStatus == 4 && xhr.status == 200){
					document.getElementById('settings').innerHTML = xhr.responseText;
				}
			}
		}
	});
});
	


