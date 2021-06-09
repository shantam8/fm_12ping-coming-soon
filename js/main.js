function checkEmail() {
  let inputBox = document.querySelector("#inputEmail");
  let errorMsg = document.querySelector(".errorMsg");
  let submitBtn = document.querySelector("#submitBtn");

  let email = inputBox.value;
  let regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

  if (!email == "" && email.match(regex)) {
    inputBox.classList.remove("onErrorInputBox");
    errorMsg.classList.remove("onErrorMsg");
    submitBtn.classList.remove("onErrorsubmitBtn");
    return true;
  } else {
    inputBox.classList.add("onErrorInputBox");
    errorMsg.classList.add("onErrorMsg");
    submitBtn.classList.add("onErrorsubmitBtn");
    return false;
  }
}

function submitMail() {
  checkEmail() ? console.log("submit data") : console.log("error");
}

function init() {
  document.querySelector("#submitBtn").addEventListener("click", submitMail);
}

window.onload = init();
