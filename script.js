let NameInput = document.getElementById("NameInput");
let confirmButton = document.getElementById("confirmButton");
let CardNumber = document.getElementById("CardNumber");
let WrongFormat = document.getElementById("WrongFormat");
let DateInput1 = document.getElementById("DateInput1");
let DateInput2 = document.getElementById("DateInput2");
let blank = document.getElementById("blank");
let input4 = document.getElementById("input4");
let blank2 = document.getElementById("blank2");
let CVC = document.getElementById("CVC");
let cardNumbers = document.getElementById("cardNumbers");
let NameinputTextcontent = document.getElementById("NameinputTextcontent");
let DateTextcontent = document.getElementById("DateTextcontent");
let DateTextcontent2 = document.getElementById("DateTextcontent2");
let none = document.getElementById("none");
let completeConteiner = document.getElementById("completeConteiner");
confirmButton.addEventListener("click", function () {
  NameInput.value = NameInput.value.replace(/[^a-zA-Z\s]/g, "");
  if (NameInput.value === "") {
    NameInput.style.border = "1px solid rgba(255, 80, 80, 1)";
  } else {
    NameInput.style.border = "";
    NameinputTextcontent.textContent = NameInput.value;
    none.style.display = "none";
    completeConteiner.style.display = "block";
  }
  if (CardNumber.value.length !== 16) {
    CardNumber.style.border = "1px solid rgba(255, 80, 80, 1)";
    WrongFormat.style.display = "block";
  } else {
    CardNumber.style.border = "";
    WrongFormat.style.display = "";
    cardNumbers.textContent = CardNumber.value;
    none.style.display = "none";
    completeConteiner.style.display = "block";
  }
  if (DateInput1.value.length !== 2) {
    DateInput1.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank.style.display = "block";
  } else {
    DateInput1.style.border = "";
    blank.style.display = "";
    DateTextcontent.textContent = DateInput1.value;
    none.style.display = "none";
    completeConteiner.style.display = "block";
  }

  if (DateInput2.value.length !== 2) {
    DateInput2.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank.style.display = "block";
  } else {
    DateInput2.style.border = "";
    blank.style.display = "";
    DateTextcontent2.textContent = DateInput2.value;
    none.style.display = "none";
    completeConteiner.style.display = "block";
  }

  if (input4.value.length !== 3) {
    input4.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank2.style.display = "block";
  } else {
    input4.style.border = "";
    blank2.style.display = "";
    CVC.textContent = input4.value;
    none.style.display = "none";
    completeConteiner.style.display = "block";
  }
});
