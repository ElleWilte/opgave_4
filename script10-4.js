<!DOCTYPE HTML>
<html lang="nl">
<head>
	<title>Creaties Marten Toonder</title>
	<meta charset="utf-8">
	<style>
		body {
			font-family: Helvetica, Arial, sans-serif;
		}

		/* groto foto */
		#container {
			height:435px;

		}
		#container img{
			display: block;
			width: 300px; /* omwille hoogte/breedte verhouding geen 400px */
			height: 400px; /* omwille hoogte/breedte verhouding geen 300px */
			border: 4px solid #aaa;
		}

		/* thumbnail strip */
		#strip{
			background-color:#ccc;
			margin-top:10px;
			padding: 5px;
		}

		#strip img{
			width:75px; /* omwille hoogte/breedte verhouding geen 100px */
			height:100px; /* omwille hoogte/breedte verhouding geen 75px */
			margin: 0 5px;
			cursor: pointer;
			border: 1px solid #222;
		}
	</style>
	<!-- jQuery insluiten -->
	<script src="http://code.jquery.com/jquery-3.7.1.min.js"></script>
	<script src="script10-4.js"></script>
</head>

<body>
	<h2>Creaties Marten Toonder</h2>
	<div id="container">
		<img src="afbeeldingen/Ollie_Bommel.jpg" alt="Ollie Bommel"/>
		<p id="tekst"></p> <!--tekst title-->
	</div>
	<br><br>
	<div id="strip">
		<img src="afbeeldingen/Ollie_Bommel.jpg" alt="Ollie Bommel" title="Ollie Bommel" />
		<img src="afbeeldingen/Tom_Poes.jpg" alt="Tom Poes" title="Tom Poes"/>
		<img src="afbeeldingen/Joost.jpg" alt="Joost" title="Joost"/>
		<img src="afbeeldingen/Markies_de_Canteclaer.jpg" alt="Markies de Canteclaer" title="Markies de Canteclaer"/>
		<img src="afbeeldingen/Commissaris_Bulle_Bas.jpg" alt="Commissaris Bulle Bas" title="Commissaris Bulle Bas"/>
		<img src="afbeeldingen/Kapitein_Walrus.jpg" alt="Kapitein Walrus" title="Kapitein Walrus"/>
	</div>
</body>
</html>
