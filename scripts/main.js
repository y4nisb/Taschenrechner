let taschenrechner = () => {
  let eingabe = "";

  const elBody = document.getElementsByTagName("body");
  const rechner = document.createElement("div");
  rechner.setAttribute("class", "Rahmen");
  elBody[0].appendChild(rechner);
  const display = document.createElement("p");
  display.setAttribute("class", "display");
  rechner.appendChild(display);
  for (let e = 0; e < 10; e++) {
    let elButton = document.createElement("button");
    elButton.innerHTML = 9 - e;
    rechner.appendChild(elButton);
    elButton.addEventListener("click", () => {
      eingabe += elButton.innerHTML;
      console.log(eingabe);
    });
  }
  const elPlus = document.createElement("button");
  elPlus.innerHTML = "+";
  elPlus.addEventListener("click", () => {
    eingabe += elPlus.innerHTML;
    console.log(eingabe);
  });
  rechner.appendChild(elPlus);
  const elMinus = document.createElement("button");

  elMinus.innerHTML = "-";
  rechner.appendChild(elMinus);
  const elDurch = document.createElement("button");
  elDurch.innerHTML = "/";
  rechner.appendChild(elDurch);
  elDurch.addEventListener("click", () => {
    eingabe += elDurch.innerHTML;
  });
  const elMal = document.createElement("button");
  elMal.innerHTML = "*";
  rechner.appendChild(elMal);
  elMal.addEventListener("click", () => {
    eingabe += elMal.innerHTML;
  });
  const eDelete = document.createElement("button");
  eDelete.innerHTML = "del";
  eDelete.addEventListener("click", () => {
    eingabe = "";
    display.innerHTML = "";
  });
  rechner.appendChild(eDelete);
  const elBerechnen = document.createElement("button");
  elBerechnen.innerHTML = "=";
  rechner.appendChild(elBerechnen);
  elBerechnen.addEventListener("click", () => {
    let ergebnis = eval(eingabe);
    console.log(ergebnis);
    display.innerHTML = ergebnis;
    eingabe = "";
  });
};

taschenrechner();
