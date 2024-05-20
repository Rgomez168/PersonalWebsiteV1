




const buttonAbout = document.querySelector('.button-About');
const mainDiv = document.querySelector('.right-div');
buttonAbout.addEventListener('click', doSomething);


function doSomething() {
    mainDiv.innerHTML = '<p>New HTML content!</p>';
}

