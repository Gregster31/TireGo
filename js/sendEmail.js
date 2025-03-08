function sendEmail() {
    var name = document.getElementById("name2").value;
    var email = document.getElementById("email2").value;
    var message = document.getElementById("message2").value;

    var subject = encodeURIComponent("New Contact Form Message from " + name);
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    window.location.href = "mailto:mobiletirego@proton.me?subject=" + subject + "&body=" + body;
}
