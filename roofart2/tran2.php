<?php
	$name = $_POST['name'];
	$dat = $_POST['data'];
	$message = $_POST['message'];
	$comm = $_POST['comm'];
	$bank = $_POST['select'];
	$bankk = $_POST['selectt'];
	$type = '~';
	$data = "$name, $dat, $message, $comm, $type\n"; // create a string with the data

	if($bank == 1 and $bankk == 22){
		$file = fopen('R21.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp = fopen('sumr21.txt', 'r');
		$count = file_get_contents('sumr21.txt');
		$parsed_count = (float)$count;
		fclose($fp);
		$fp = fopen('sumr21.txt', 'w+');
		$sum = $parsed_count - $name;//Отнимаем от первого счёта сумму для перевода
		$parsed_sum = (float)$sum;
		fwrite($fp, $parsed_sum);
		fclose($fp);
		$file = fopen('R22.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp = fopen('sumr22.txt', 'r');
		$count = file_get_contents('sumr22.txt');
		$parsed_count = (float)$count;
		fclose($fp);
		$fp = fopen('sumr22.txt', 'w+');
		$sum = $parsed_count + $name;//Добавляем сумму перевода
		$parsed_sum = (float)$sum;
		fwrite($fp, $parsed_sum);
		fclose($fp); 

	}
	else if($bank == 2){
		$file = fopen('R22.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
	}
	else {
		$file = fopen('R23.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
	}
	header('location: ' . $_SERVER['HTTP_REFERER']); // либо явно указать путь к форме
	exit();
?>