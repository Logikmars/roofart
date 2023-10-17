$('document').ready(function(){
	loadGoods();
	loadAll();
	loadFirst();
	loadSecond();
	loadThird();
});

function loadGoods(){
	//загружаю транзакции на страницу
	$.getJSON("data.json", function(data){
		console.log(data);
		var out = '';
		for (var key in data){ //Перебор асоциативных масивов или объектов
			out+='<div class="transaction-card">'; //Вывод даты транзакции
			out+='<h3>'+data[key].date+'</h3>'; //Вывод даты транзакции
			out+='<p>'+data[key].amount+'</p>';//Вывод суммы транзакции
			out+='<p>'+data[key].agent+'</p>';//Вывод суммы транзакции
			out+='<p>'+data[key].comm+'</p>';//Вывод суммы транзакции
			out+='<p>'+data[key].bank+'</p>';//Вывод с какми счётом производились операции
			out+='<p>'+data[key].type+'</p>';//Вывод суммы транзакции
			out+='</div>';//Вывод суммы транзакции
		}
		$('#goods').html(out);
	})
}

function loadAll(){
	$.getJSON("all.json", function(amount){
		console.log(amount);
		var suma = '';
		for (var i in amount){
			suma+='<div class="total_amount">';
			suma+='<h1>'+'&#8372; '+amount[i]['money']+'</h1>';
			suma+='</div>';
		}
		$('#wallet').html(suma);
	})
}

function loadFirst(){
	$.getJSON("sum1.json", function(first){
		console.log(first);
		var suma1 = '';
		for(var k in first){
			suma1+='<div class="one">';
			suma1+='<h1>'+'&#8372; '+first[k]['all_money']+'</h1>';
			suma1+='</div>';
		}
		$('#ceparately_one').html(suma1);
	})
}

function loadSecond(){
	$.getJSON("sum2.json", function(second){
		console.log(second);
		var suma2 = '';
		for(var l in second){
			suma2+='<div class="second">';
			suma2+='<h1>'+'&#8372; '+second[l]['all_money']+'</h1>';
			suma2+='</div>';
		}
		$('#ceparately_two').html(suma2);
	})
}

function loadThird(){
	$.getJSON("sum3.json", function(third){
		console.log(third);
		var suma3 = '';
		for(var j in third){
			suma3+='<div class="third">';
			suma3+='<h1>'+'&#8372; '+third[j]['all_money']+'</h1>';
			suma3+='</div>';
		}
		$('#ceparately_three').html(suma3);
	})
}


//круговая диаграмма
