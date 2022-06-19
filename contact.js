// console.log('it works')
//  function validationForm() {
//    var msg = document.forms["myForm"] ["fmsg"].value;
//    if (msg=="") {
//      alert("form must be properly filled out");
//      return false;
//    }
//  }


document.addEventListener("DOMContentLoaded", function () {
  console.log("it works");
  let form = document.getElementById("comment-form");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    console.log(form);
    form.querySelector('button').setAttribute("disabled","disabled");
    form.classList.add('loading');
    sendData(form);
  });
});

function sendData(form) {
  const xhr = new XMLHttpRequest();

  const fd = new FormData(form);

  console.log(fd);

  xhr.addEventListener("load", function (ev) {
    console.log(ev.target.responseText);
  
    let origHeight = form.getBoundingClientRect().height;
    form.style.height = origHeight + 'px';
    form.innerHTML = "<p>Thank you for your message.</p>";
    form.classList.remove("loading");
  });

  
  xhr.addEventListener("error", function (ev) {
    console.log("Oops! Something went wrong.");
    form.classList.remove("loading");
    form.querySelector('button').removeAttribute("disabled");
    
  });

 
  xhr.open(form.getAttribute("method"), form.getAttribute("action"));

 
  xhr.send(fd);
}
