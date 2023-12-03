// Get the submit button to listen for when a user clicks it.  
const submitButtonElement = document.getElementById('submitButton');

// When the user clicks the Send Message button, I want to receive an email.
submitButtonElement.onclick = function () {
    
    // Get name element so I can get the name of the user contacting me.
    const nameElement = document.getElementById('nameBox');

    // The value of nameElement is the name entered by the user.
    const name = nameElement.value;

    // Get the email element so I can have the user's email address for making a reply.
    const emailElement = document.getElementById('emailBox');

    // The value of the emailBox which is the user's email address.
    const email = emailElement.value;

    // Get the messageElement to receive the user's message.
    const messageElement = document.getElementById('textAreaBox');
    
    // The value of the messageElement which is the text the user has entered in the message box.
    const message = messageElement.value;

    // Get the thankYouMessageElement in order to display a thank you message to the user.
    const thankYouMessageElement = document.getElementById('thankYouMessage');

    // Set the text of the element to the thank you message.
    thankYouMessageElement.innerText = 'Thanks, ' + name + '!';

    // Write a summary to the console of what the contact form is doing.
    const summary = name + ' is sending the message ' + message + '. Their email is ' + email;
    console.log(summary);

    // Clear the inputs so the user can reuse the Contact Me form
    nameElement.value = '';
    emailElement.value = '';
    messageElement.value = ''; 

};
