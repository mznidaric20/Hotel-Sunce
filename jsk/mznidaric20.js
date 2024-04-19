window.addEventListener("load", function () {
  /*var glavne = document.getElementsByClassName('cssgrid-tablica');
  let a = 0;
  var ispis = document.getElementById('ispis')
  while(a<20){
      ispis.innerHTML = glavne[a].outerText;
  a++;
  }
  glavne.addEventListener("mouseover", function () {  

  });
  console.log(ispis);*/

  var provjeraslanje = document.getElementById('provjeraslanje');
  var provjeraslanja2 = document.getElementById('provjeraslanja2');

  provjeraslanje.addEventListener("click", function (event) {
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var osobe = document.getElementById('osobe').value;
    var nocenja = document.getElementById('nocenja').value;
    var sobe = document.getElementById('soba').value;
    var datum = document.getElementById('dolazak').value;
    var danasnjidatum = new Date();
    var osobeRegEx = (/^(1[0-9]|20|[1-9])$/)
    var imeRegEx = (/^[a-zA-Z]+$/);
    console.log(datum);
    console.log(danasnjidatum);

    if ((!imeRegEx.test(ime)) || (!imeRegEx.test(prezime)) || (!osobeRegEx.test(osobe)) || (!osobeRegEx.test(nocenja)) || (!osobeRegEx.test(sobe)) || (datum <= danasnjidatum)) {
      event.preventDefault();
      console.log("Obrazac nije poslan.");
      alert("Ispunite cijeli obrazac");
      if (imeRegEx.test(ime)) {
        console.log("Ime je valjano.");
      } else {
        alert("Ime nije valjano.");
      }
      if (imeRegEx.test(prezime)) {
        console.log("Prezime je valjano.");
      } else {
        alert("Prezime nije valjano.");
      }
      if (osobeRegEx.test(osobe)) {
        console.log("Broj Osoba je valjan");
      } else {
        alert("Broj osoba nije valjano.");
      }
      if (osobeRegEx.test(nocenja)) {
        console.log("Broj Nocenja je valjan");
      } else {
        alert("Broj Nocenaj nije valjano.");
      }
      if (osobeRegEx.test(sobe)) {
        console.log("Broj Soba je valjan");
      } else {
        alert("Broj Soba nije valjano.");
      }
    }
  });

  provjeraslanja2.addEventListener("click", function (event) {
    var predmet = document.getElementById('predmet').value;
    var textarea = document.getElementById('textarea').value;

    var textareaRegEx = (/^.{10,1000}$/);
    var predmetRegEx = (/^[a-zA-Z]+$/);
    var zabranjeniRegEx = (/[!?#<>]/);

    if ((!predmetRegEx.test(predmet)) || (!textareaRegEx.test(textarea)) || (zabranjeniRegEx.test(textarea))) {
      event.preventDefault();
      console.log("Obrazac nije poslan.");
      alert("Obrazac nije poslan!");
      if (predmetRegEx.test(predmet)) {
        console.log("Broj Nocenja je valjan");
      } else {
        alert("Predmet nije valjan");
      }
    }
    if (textareaRegEx.test(textarea)) {
      console.log("Broj Nocenja je valjan");
    } else {
      alert("Kod textarea treba unijeti izmedju 10 i 10000 znakova.");
    }
    if (!zabranjeniRegEx.test(textarea)) {
      console.log("Broj Nocenja je valjan");
    } else {
      alert("Zabranjeni su znakovi !,?, #, <, >");
    }
  });

});