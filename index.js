function sendEmail() {

    Email.send({
        Host : "smtp.gmail.com",
        Username : "Rajatsoni.rs66@gmail.com",
        Password : "Model@1997",
        To : 'Rajatsoni.rs66@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name : " +  document.getElementById("name").value
        + "<br/> Email : " + document.getElementById("email").value
        + "<br/> Phone : " + document.getElementById("phone").value
        + "<br/> message : " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}
