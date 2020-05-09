console.log('it works')

function validateForm() {
  var name = document.forms["myForm"]["fname"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  var email = document.forms["myForm"]["femail"].value;

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
}

function validateForm() {
  var email = document.forms["myForm"]["fmsg"].value;

  if (email == "") {
    alert("Message must be filled out");
    return false;
  }
}

