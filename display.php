<?php
$imie = $_POST['imie'] ?? '';
$nazwisko = $_POST['nazwisko'] ?? '';
$panstwo = $_POST['panstwo'] ?? '';
$miasto = $_POST['miasto'] ?? '';
$ulica = $_POST['ulica'] ?? '';
$dom = $_POST['dom'] ?? '';
$mieszkanie = $_POST['mieszkanie'] ?? 'Nie podano';
$telefon = $_POST['telefon'] ?? '';
$data = $_POST['data'] ?? '';
$prawojazdy = $_POST['prawojazdy'] ?? '';
$plec = $_POST['plec'] ?? '';
$haslo = $_POST['haslo'] ?? '';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Wyświetlone Dane</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <div class="tytuly">
        <h1>Podsumowanie Danych</h1>
    </div>
    <button  class="link" onclick="window.location.href='index.html'">Spis stron</button>
    
    <div  class="dane" >
        <h2>Twoje Wprowadzone Dane:</h2>
        <p>Imię: <?php echo htmlspecialchars($imie); ?></p>
        <p>Nazwisko: <?php echo htmlspecialchars($nazwisko); ?></p>
        <p>Państwo: <?php echo htmlspecialchars($panstwo); ?></p>
        <p>Miasto: <?php echo htmlspecialchars($miasto); ?></p>
        <p>Ulica: <?php echo htmlspecialchars($ulica); ?></p>
        <p>Dom (numer): <?php echo htmlspecialchars($dom); ?></p>
        <p>Mieszkanie: <?php echo htmlspecialchars($mieszkanie); ?></p>
        <p>Telefon: <?php echo htmlspecialchars($telefon); ?></p>
        <p>Data urodzenia: <?php echo htmlspecialchars($data); ?></p>
        <p>Prawo jazdy: <?php echo htmlspecialchars($prawojazdy); ?></p>
        <p>Płeć: <?php echo htmlspecialchars($plec); ?></p>
        <p>Hasło: <?php echo htmlspecialchars($haslo); ?></p>

        
    </div>

    
    <a href="loginphp.txt">Zobacz kod login.php jako TXT</a><br>


    <a href="displayphp.txt">Zobacz kod display.php jako TXT</a>
    </div>
</body>
</html>
