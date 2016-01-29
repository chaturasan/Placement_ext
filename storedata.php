<?php
	$username = $_GET["rollno"];
	$password = $_GET["pass"];
	$path = "var/www/placement_ext";
	$url = "http://placement.iitm.ac.in/students/login.php";
	$postinfo = "rollno=".$username."&pass=".$password."&submit=Login";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch,CURLOPT_POST,true);
	curl_setopt($ch,CURLOPT_POSTFIELDS,$postinfo);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($ch,CURLOPT_URL,"http://placement.iitm.ac.in/students/comp_list_all.php");
	$returndata = curl_exec ($ch);
	echo $returndata;
?>