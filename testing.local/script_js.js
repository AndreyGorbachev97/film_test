window.onload = function(){

 	var doc = document;
	var todoList = [];
	if(localStorage.getItem('todo')!=undefined){
		todoList=JSON.parse(localStorage.getItem('todo'));
		out();
	}

	doc.getElementById('add').onclick =function(){

		var name_film=doc.getElementById('name_film').value;
		var year = doc.getElementById('year').value;
		var name_director = doc.getElementById('name_director').value;
		var duration = doc.getElementById('duration').value;
		var rating = doc.getElementById('rating').value;
		var img_url = doc.getElementById('img_url').value;


		var temp={};
		temp.name_f=name_film;
		temp.year=year;
		temp.name_d=name_director;
		temp.dur=duration;
		temp.top=rating;
		temp.img=img_url;
		var i=todoList.length;
		todoList[i] = temp;
		console.log(todoList);
		remov();
		out();
		localStorage.setItem('todo', JSON.stringify(todoList));
	}


	doc.getElementById('sear').onclick=function(){ //поиск фильма
		for(var i=0;i<todoList.length;i++){
			if(doc.getElementById('searth').value===todoList[i].name_f){
				remov();
				var standart_ico='https://www.freeiconspng.com/uploads/movie-icon-11.png';
				var out_point=doc.getElementById("box");
				var out='';
				var elem=doc.createElement("div");
				var elem_div=doc.createElement("div");
				var line_br=doc.createElement("br");
				var img_ico=doc.createElement("img");
				img_ico.id="img_ico";
				elem_div.className="el";


				out+=todoList[i].img;
				if(out===''){
					img_ico.src=standart_ico;
				}else{
					img_ico.src= out;
				}
				elem_div.appendChild(img_ico)		
				out_point.appendChild(elem_div);
				

				out='';  //добавление названия
				out +='Название: '+todoList[i].name_f;
				content = doc.createTextNode(out);
				elem.appendChild(content);
				elem_div.appendChild(elem)		
				out_point.appendChild(elem_div);
				line_br=doc.createElement("br");
				elem.appendChild(line_br);
			
				out='';//добавление года
				out +='Год выпуска: '+todoList[i].year+' год';
				content = doc.createTextNode(out);
				elem.appendChild(content);
				elem_div.appendChild(elem)		
				out_point.appendChild(elem_div);
				line_br=doc.createElement("br");
				elem.appendChild(line_br);
			    
				out='';//добавление автора
				out +='Режиссер: '+todoList[i].name_d;
				content = doc.createTextNode(out);
				elem.appendChild(content);
				elem_div.appendChild(elem)		
				out_point.appendChild(elem_div);
				line_br=doc.createElement("br");
				elem.appendChild(line_br);

				out='';//добавление времени фильма
				out +='Продолжительность: '+todoList[i].dur+' мин.';
				content = doc.createTextNode(out);
				elem.appendChild(content);
				elem_div.appendChild(elem)		
				out_point.appendChild(elem_div);
				line_br=doc.createElement("br");
				elem.appendChild(line_br);


				out='';//добавление рейтинга
				out +='Рейтинг: '+todoList[i].top+' из 10';
				content = doc.createTextNode(out);
				elem.appendChild(content);
				elem_div.appendChild(elem)		
				out_point.appendChild(elem_div);
				

				line_br=doc.createElement("br");
				elem.appendChild(line_br);


			}
		}
	}

	doc.getElementById('delete').onclick=function(){//удаление фильма

		for(var i =0; i<todoList.length;i++){
			if(doc.getElementById("name_f_del").value===todoList[i].name_f){
				todoList.splice(i, 1);
				localStorage.setItem('todo', JSON.stringify(todoList));
				remov();
				out();
			}
		}
		doc.getElementById("name_f_del").reset();									
	}


	function remov(){//чистка стрницы от фильмов
		var box=doc.getElementById("box");
		while (box.firstChild) {
			box.removeChild(box.firstChild);
		}
	}
	function out(){//вывод всех фильмов и добавление

		var standart_ico='https://www.freeiconspng.com/uploads/movie-icon-11.png';
		var out_point=doc.getElementById("box");
		for(var key in todoList){			
			var out='';
			var elem=doc.createElement("div");
			var elem_div=doc.createElement("div");
			var line_br=doc.createElement("br");
			var img_ico=doc.createElement("img");
			img_ico.id="img_ico";
			elem_div.className="el";


			out+=todoList[key].img;
			if(out===''){
				img_ico.src=standart_ico;
			}else{
				img_ico.src= out;
			}
			elem_div.appendChild(img_ico)		
			out_point.appendChild(elem_div);
			

			out='';  //добавление названия
			out +='Название: '+todoList[key].name_f;
			content = doc.createTextNode(out);
			elem.appendChild(content);
			elem_div.appendChild(elem)		
			out_point.appendChild(elem_div);
			line_br=doc.createElement("br");
			elem.appendChild(line_br);
		
			out='';//добавление года
			out +='Год выпуска: '+todoList[key].year+' год';
			content = doc.createTextNode(out);
			elem.appendChild(content);
			elem_div.appendChild(elem)		
			out_point.appendChild(elem_div);
			line_br=doc.createElement("br");
			elem.appendChild(line_br);
		    
			out='';//добавление автора
			out +='Режиссер: '+todoList[key].name_d;
			content = doc.createTextNode(out);
			elem.appendChild(content);
			elem_div.appendChild(elem)		
			out_point.appendChild(elem_div);
			line_br=doc.createElement("br");
			elem.appendChild(line_br);

			out='';//добавление времени фильма
			out +='Продолжительность: '+todoList[key].dur+' мин.';
			content = doc.createTextNode(out);
			elem.appendChild(content);
			elem_div.appendChild(elem)		
			out_point.appendChild(elem_div);
			line_br=doc.createElement("br");
			elem.appendChild(line_br);


			out='';//добавление рейтинга
			out +='Рейтинг: '+todoList[key].top+' из 10';
			content = doc.createTextNode(out);
			elem.appendChild(content);
			elem_div.appendChild(elem)		
			out_point.appendChild(elem_div);
			

			line_br=doc.createElement("br");
			elem.appendChild(line_br);

		}
	}
}