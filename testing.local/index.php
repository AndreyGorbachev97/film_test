<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Film</title>
	<script src="script_js.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>	
	<header>
		<div id="logo">
			<a href="/">
				<img src="img/film.png">
			</a>
		</div>
		<div id="about">
			<a href="#name_film">Добавить фильм</a>
			<a href="#name_f_del">Удалить фильм</a>
			<button id="sear">искать</button>
			<input type="text" placeholder="поиск" id="searth">

		</div>
	</header>
	
	<hr>
	<aside>
		<div id="box">
		
		</div><br>
	</aside>
	<div id="del">
		<input type="text" id="name_f_del" placeholder="Название фильма...">
		<button id="delete">Удалить</button>
	</div>
	<hr>
	<div id="in">
		<a href="">Форма для добавления фильмов</a>
		<input type="text" id="name_film" placeholder="Введите название фильма..."><br>		
		<input type="text" id="year" placeholder="Введите год выпуска..."><br>		
		<input type="text" id="name_director" placeholder="Введите имя режиссера..."><br>		
		<input type="text" id="duration" placeholder="Введите продолжительность фильма..."><br>
		<input type="text" id="rating" placeholder="Введите рейтинг фильма..."><br>
		<input type="text" id="img_url" placeholder="Введите URL изображения для иконки фильма, либо оставте поле пустым...">
		<button id="add">Добавить</button>
	</div>	
	<footer>
		<div id="rights">
			<a href="">Все права защищены &copy; <?=date ('Y')?></a>
		</div>
	</footer>
</body>
</html>