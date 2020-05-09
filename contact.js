console.log('it works')


function validateForm() {
  var msg = document.forms["myForm"]["fmsg"].value;

  if (msg == "") {
    alert("Form must be properly filled out");
    return false;
  }
}

