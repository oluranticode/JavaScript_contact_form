console.log("it works")

$(document).ready(function () {
    $('#submit').click(function (event) {
        // event.preventDefault()
        console.log('clicked button')

        var name = $('#name').val();
        var email = $('#email').val();
        console.log(email);
        var subject = $('#subject').val();
        var textarea = $('#textarea').val();
        var status = $('.status');
        status.empty()

        if(name.length > 2) {
            status.append('<div> Name is valid </div>') 
        } else {
            event.preventDefault()
            status.append('<div> Name is not valid </div>') 
        }

        if(name.length > 2 && email.includes('@') && email.includes('.')) {
            status.append('<div> Email is valid </div>') 
        } else {
            event.preventDefault()
            status.append('<div> Email is not valid </div>') 
        }
    })
})

