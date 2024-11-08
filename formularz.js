
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

function czysckolor()
{
	const pola = [imie, nazwisko, panstwo, miasto, ulica, dom, mieszkanie, telefon, data, prawojazdy, plec, haslo];
	for (let i = 0; i < pola.length; i++) 
	{
		pola[i].style.backgroundColor = ""; 
	}
}

function waliduj() 
{
	const dzisiaj = new Date();
	const dataurodzenia = new Date(data.value);		
	
	let valid = true;

	const litery = /[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;

	czysckolor();

	if (!imie.value || litery.test(imie.value)|| /\s/.test(imie.value)) {
		imie.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!nazwisko.value || litery.test(nazwisko.value)|| /\s/.test(nazwisko.value)) {
		nazwisko.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!panstwo.value || litery.test(panstwo.value)) {
		panstwo.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!miasto.value || litery.test(miasto.value)) {
		miasto.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!ulica.value || litery.test(ulica.value)) {
		ulica.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!dom.value || /\D/.test(dom.value)) {
		dom.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!mieszkanie.value) {
		mieszkanie.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!telefon.value || /\D/.test(telefon.value) || telefon.value.length != 9) {
		telefon.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (!data.value || dataurodzenia > dzisiaj) {
		data.style.backgroundColor = "lightcoral";
		valid = false;
	}

	//if (prawojazdy.selectedIndex === -1) {
	//	prawojazdy.style.backgroundColor = "lightcoral";
	//	valid = false;
	//}

	//if (plec.selectedIndex === -1) {
	//	plec.style.backgroundColor = "lightcoral";
	//	valid = false;
	//}

	if (!haslo.value|| /\s/.test(haslo.value)) {
		haslo.style.backgroundColor = "lightcoral";
		valid = false;
	}

	if (valid) {
		alert("Formularz wypełniony poprawnie.");
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

document.getElementById("zatwierdz").addEventListener("click",waliduj);
document.getElementById("reset").addEventListener("click",resetujformularz);