<?php
	$name = $_POST['name'];
	$dat = $_POST['data'];
	$message = $_POST['message'];
	$comm = $_POST['comm'];
	$bank = $_POST['select'];
	$type = '+';
	$data = "$name, $dat, $message, $comm, $type\n"; // create a string with the data

	if($bank == 1){
		$file = fopen('R21.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp = fopen('sumr21.txt', 'r'); //Открываем файл только для чтения 
		$count = file_get_contents('sumr21.txt'); //Берем данные из файла, там только несколько цифр
		$parsed_count = (float)$count;//Переводим строку в тип чисел с запятой 
		fclose($fp);//Закрываем файл
		$fp = fopen('sumr21.txt', 'w+');//Открываем файл с удалением всего содержимого 
		$parsed_name = (float)$name;//Так же меняем тип данных на числа с запятой
		$sum = $parsed_count + $name;//Выводим общую сумму
		$parsed_sum = (float)$sum;//Приводим так же сумму к виду чисел с запятой 
		fwrite($fp, $parsed_sum);//Записываем в файл нашу сумму 
		fclose($fp);//Закрываем файл

	}
	else if($bank == 2){
		$file = fopen('R22.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp2 = fopen('sumr22.txt', 'r');
		$count2 = file_get_contents('sumr22.txt');
		$parsed_count2 = (float)$count2;
		fclose($fp2);
		$fp2 = fopen('sumr22.txt', 'w+');
		$parsed_name = (float)$name;
		$sum2 = $parsed_count2 + $name;
		$parsed_sum2 = (float)$sum2;
		fwrite($fp2, $parsed_sum2);
		fclose($fp2);
	}
	else{
		$file = fopen('R23.txt', 'a'); // open the file for appending
		fwrite($file, $data); // write the data to the file
		fclose($file); // close the file
		$fp3 = fopen('sumr23.txt', 'r');
		$count3 = file_get_contents('sumr23.txt');
		$parsed_count3 = (float)$count3;
		fclose($fp3);
		$fp3 = fopen('sumr23.txt', 'w+');
		$parsed_name = (float)$name;
		$sum3 = $parsed_count3 + $name;
		$parsed_sum3 = (float)$sum3;
		fwrite($fp3, $parsed_sum3);
		fclose($fp3);
	}
	header('location: ' . $_SERVER['HTTP_REFERER']); // либо явно указать путь к форме
	exit();
?>