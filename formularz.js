const imie = document.getElementById("imie");
const nazwisko = document.getElementById("nazwisko");
const panstwo = document.getElementById("panstwo");
const miasto = document.getElementById("miasto");
const ulica = document.getElementById("ulica");
const dom = document.getElementById("dom");
const mieszkanie = document.getElementById("mieszkanie");
const telefon = document.getElementById("telefon");
const data = document.getElementById("data");
const prawojazdy = document.getElementById("prawojazdy");
const plec = document.getElementById("plec");
const haslo = document.getElementById("haslo");
const pola = [imie, nazwisko, panstwo, miasto, ulica, dom, mieszkanie, telefon, data, prawojazdy, plec, haslo];

function czysckolor() {
    for (let i = 0; i < pola.length; i++) {
        pola[i].style.backgroundColor = "";
    }
}

function waliduj() {

	const dzisiaj = new Date();
	const dataurodzenia = new Date(data.value);

    czysckolor();

    let valid = true;

	for (let i =0; i < pola.length; i++)
	{
		if (pola[i] != data && pola[i] != prawojazdy && pola[i] != plec)
		{
			if(!pola[i].checkValidity())
			{
				pola[i].style.backgroundColor = "lightcoral";
        		valid = false;
			}

		}
	}
    
    if (!data.checkValidity() || dataurodzenia > dzisiaj) {
        data.style.backgroundColor = "lightcoral";
        valid = false;
    }

    if (!prawojazdy.checkValidity() || prawojazdy.selectedIndex === 0) {
        prawojazdy.style.backgroundColor = "lightcoral";
        valid = false;
    }

    if (!plec.checkValidity() || plec.selectedIndex === 0) {
        plec.style.backgroundColor = "lightcoral";
        valid = false;
    }

    if (valid) {
        alert("Formularz wypełniony poprawnie.");
        resetujformularz();
    } else {
        alert("Błędny formularz. Proszę poprawić zaznaczone pola.");
    }
}

function resetujformularz() {
    imie.value = "";
    nazwisko.value = "";
    panstwo.value = "";
    miasto.value = "";
    ulica.value = "";
    dom.value = "";
    mieszkanie.value = "";
    telefon.value = "";
    data.value = "";
    prawojazdy.selectedIndex = 0;
    plec.selectedIndex = 0;
    haslo.value = "";

    czysckolor();
}

document.getElementById("zatwierdz").addEventListener("click", waliduj);
document.getElementById("reset").addEventListener("click", resetujformularz);