document.getElementById('submitButton').onclick = function () {
    const name = document.getElementById('nameBox').value;

    const email = document.getElementById('emailBox').value;

    const message = document.getElementById('textAreaBox').value;

    document.getElementById('thankYouMessage').innerText = 'Thanks, ' + name + '!';

    let summary = name + ' is sending the message ' + message + '. Their email is ' + email;
    console.log(summary);

};
