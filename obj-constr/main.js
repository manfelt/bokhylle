let myLibrary = [];
var txt = " ";


//constructor
function Bok(tittel, forfatter, sider, lest) {
    this.tittel = tittel
    this.forfatter = forfatter
    this.sider = sider
    this.lest = lest
    this.info = function() {
        const ord = 'Ja'
        console.log(tittel, 'av', forfatter,',', sider, 'sider,', `jeg har ${lest.includes(ord) ? 'lest' : 'ikke lest'}` , 'boken')
    }
}

const bok1 = new Bok('Hobbiten', 'J.R.Tolkien', 282, 'Nei')
const bok2 = new Bok('Prosessen', 'Kafka', 127, 'Ja')
const bok21312 = new Bok('Anna Karenina', 'Lev Tolstoi', 876, 'Nei')
//const bok3 = new Bok()

//lagrer objekt i matrisen
function addBookToLibrary(greie) {
  myLibrary.push(greie);
}

//gjør dette mer effektivt
addBookToLibrary(bok1);
addBookToLibrary(bok2);
addBookToLibrary(bok21312);

//funksjonen overfører innholdet i myLibrary til DOM. "p3" er Id til element i HTML dok.
var utMedSeg = (document.getElementById("p3").innerHTML = myLibrary.map(function(item) {
  const ord = 'Ja'
  let IDnr = myLibrary.indexOf(item);
  console.log(myLibrary.indexOf(item.tittel));
  let lestKnapp = `<input type="button" value="${item.lest}" id="${IDnr}" onclick="leseFunksjon(this.id);"></input>`;
  return (`<div class="card" id="${IDnr}">` + '<img src="img/BOK.png" alt="">' + '<p>' + item.tittel + ' av ' + item.forfatter +', ' + item.sider + ' sider, ' + `jeg har ${item.lest.includes(ord) ? ' lest' : ' ikke lest'}` + ' boken.' + '</p>' + `<input type="button" value="slett" id="${IDnr}" onclick="slettFunksjon(this.id);">` + '</input>' + lestKnapp + '</div>');
}));

//funksonen mottar input fra HTML-skjema. Går gjennom constructoren og lagres til slutt i myLibrary. 
function showElements(oForm) {
  tittel = forfatter = sider = lest = " ";
  lest = "Nei";
  for (i = 0; i < oForm.length; i++)
     if(i === 0) {
       tittel = oForm.elements[i].value 
     }
     else if(i === 1) {
       forfatter = oForm.elements[i].value
     }
     else if(i === 2) {
      sider = oForm.elements[i].value
    }
    else if(i === 3) {
      lest = oForm.elements[i].value
    }
  const bok3 = new Bok(tittel, forfatter, sider, lest)
  addBookToLibrary(bok3)
  //det nye objektet skal vises i DOMen, kan muligens kortes ned.
  (document.getElementById("p3").innerHTML = myLibrary.map(function(item) {
    const ord = 'Ja'
    console.log(myLibrary.indexOf(item));
    let IDnr = myLibrary.indexOf(item);
    console.log(myLibrary.indexOf(item.tittel));
    let lestKnapp = `<input type="button" value="${item.lest}" id="${IDnr}" onclick="leseFunksjon(this.id);"></input>`;
    return (`<div class="card" id="${IDnr}">` + '<img src="img/BOK.png" alt="">'  + '<p>' + item.tittel + ' av ' + item.forfatter +', ' + item.sider + ' sider, ' + `jeg har ${item.lest.includes(ord) ? ' lest' : ' ikke lest'}` + ' boken.' + '</p>' + `<input type="button" value="slett" id="${IDnr}" onclick="slettFunksjon(this.id);">` + '</input>' + lestKnapp + '</div>');
  }));
}

//funksjonen henter id fra html element, og sletter det indekserte objektet fra myLibrary, oppdaterer DOM. 
function slettFunksjon(el) {
  console.log(this.document.activeElement.getAttribute("id"));
  myLibrary.splice(el, 1)
  console.log(el);
  (document.getElementById("p3").innerHTML = myLibrary.map(function(item) {
    const ord = 'Ja'
    let IDnr = myLibrary.indexOf(item);
    console.log(myLibrary.indexOf(item.tittel));
    let lestKnapp = `<input type="button" value="${item.lest}" id="${IDnr}" onclick="leseFunksjon(this.id);"></input>`;
    return (`<div class="card" id="${IDnr}">` + '<img src="img/BOK.png" alt="">'  + '<p>' + item.tittel + ' av ' + item.forfatter +', ' + item.sider + ' sider, ' + `jeg har ${item.lest.includes(ord) ? ' lest' : ' ikke lest'}` + ' boken.' + '</p>' + `<input type="button" value="slett" id="${IDnr}" onclick="slettFunksjon(this.id);">` + '</input>' + lestKnapp + '</div>');
  }));
}

function leseFunksjon(lese) {
  if (myLibrary[lese].lest === 'Nei') {
    myLibrary[lese].lest = 'Ja'
    console.log(myLibrary[lese].lest)
  }
  else { myLibrary[lese].lest = 'Nei'
  console.log(myLibrary[lese].lest)
  }
  (document.getElementById("p3").innerHTML = myLibrary.map(function(item) {
    const ord = 'Ja'
    let IDnr = myLibrary.indexOf(item);
    console.log(myLibrary.indexOf(item.tittel));
    let lestKnapp = `<input type="button" value="${item.lest}" id="${IDnr}" onclick="leseFunksjon(this.id);"></input>`;
    return (`<div class="card" id="${IDnr}">` + '<img src="img/BOK.png" alt="">'  + '<p>' + item.tittel + ' av ' + item.forfatter +', ' + item.sider + ' sider, ' + `jeg har ${item.lest.includes(ord) ? ' lest' : ' ikke lest'}` + ' boken.' + '</p>' + `<input type="button" value="slett" id="${IDnr}" onclick="slettFunksjon(this.id);">` + '</input>' + lestKnapp + '</div>');
  }));
}


//Ideelt å evt lagre denne funksjonen, slik at man kan ta den opp igjen, for ryddigere script.
// var utMedSeg = (document.getElementById("p3").innerHTML = myLibrary.map(function(item) {
//  const ord = 'Ja'
//  console.log(myLibrary.indexOf(item.tittel));
//  let IDnr = myLibrary.indexOf(item);
//  return (`<div class="card" id="${IDnr}">` + '<p>' + item.tittel + ' av ' + item.forfatter +', ' + item.sider + ' sider, ' + `jeg har ${item.lest.includes(ord) ? ' lest' : ' ikke lest'}` + ' boken.' + '</p>' + `<input type="button" value="slett" id="${IDnr}" onclick="slettFunksjon(this);">` + 'slett</input>' + lestKnapp + '</div>');
//}));
