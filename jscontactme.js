document.getElementById ('submitButton').onclick = function () {
    const name = document.getElementById ('nameBox').value;
    console.log (name);
    const email =document.getElementById ('emailBox').value;
    console.log (email);
    const message = document.getElementById ('textAreaBox').value;
    console.log (message);
document.getElementById ('thankYouMessage').innerText = 'Thanks for your message, ' + name + '!';
console.log(name);
};
