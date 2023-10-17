<?php
	$name = $_POST['name'];
	$dat = $_POST['data'];
	$message = $_POST['message'];
	$comm = $_POST['comm'];
	$bank = $_POST['select'];
	$type = '-';
	$data = "$name, $dat, $message, $comm, $type\n"; // create a string with the data

	if($bank == 1){
		$file = fopen('R21.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp = fopen('sumr21.txt', 'r');
		$count = file_get_contents('sumr21.txt');
		$parsed_count = (float)$count;
		fclose($fp);
		$fp = fopen('sumr21.txt', 'w+');
		$parsed_name = (float)$name;
		$sum = $parsed_count - $name;
		$parsed_sum = (float)$sum;
		fwrite($fp, $parsed_sum);
		fclose($fp); 
	}
	else if($bank == 2){
		$file = fopen('R22.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp1 = fopen('sumr22.txt', 'r');
		$count1 = file_get_contents('sumr22.txt');
		$parsed_count1 = (float)$count1;
		fclose($fp1);
		$fp1 = fopen('sumr22.txt', 'w+');
		$sum1 = $parsed_count1 - $name;
		$parsed_sum1 = (float)$sum1;
		fwrite($fp1, $parsed_sum1);
		fclose($fp1);
	}
	else {
		$file = fopen('R23.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp2 = fopen('sumr23.txt', 'r');
		$count2 = file_get_contents('sumr23.txt');
		$parsed_count2 = (float)$count2;
		fclose($fp2);
		$fp2 = fopen('sumr23.txt', 'w+');
		$sum2 = $parsed_count2 - $name;
		$parsed_sum2 = (float)$sum2;
		fwrite($fp2, $parsed_sum2);
		fclose($fp2);
	}
	header('location: ' . $_SERVER['HTTP_REFERER']); // либо явно указать путь к форме
	exit();
?>