<!Doctype html>
<html>

<head>
    <title> Lecteur Mp3 </title>
    <meta charset="utf-8">
    <meta name="description" content="Lecteur de musique mp3">
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="css/style.css" type="text/css"> 
    <script src="js/app.js"></script>
    <script src="js/aurora.js"></script> 
    <script src="js/require.js"></script> 
    <script src="js/mp3.js"></script> 
</head>

<body>


    
<?php
    $dir = opendir("audio");
    while($file = readdir($dir)) {
        echo "$file\n";
    }
    closedir($dir);
    ?>
	<p> Test du lecteur mp3 </p>
        <div id = "progress-bar">

        </div>

       <button onclick="getVolume()" type="button">What is the volume?</button>
        <button onclick="setHalfVolume()" type="button">Set volume to 0.0</button>
        <button onclick="setFullVolume()" type="button">Set volume to 1.0</button><br> 

</body>


</html>
