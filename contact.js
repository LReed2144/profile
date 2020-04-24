console.log('it works')
$(document).ready(function() {
  $(`.button`).click(function(event) {
    event.preventDefault()
    console.log('Clicked')
    const text = $('.text').val()
    const email = $('.email').val()
    const msg = $('.msg').val()
    const statusElm = $('.status')
    statusElm.empty()

    if (text.length > 1) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Please add a name</div>')
    };

    if (email.length > 1 && email.includes('@') && email.includes(`.`)) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    };

    if (msg.length >1) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Please add a message</div>')
    };
  })
})
