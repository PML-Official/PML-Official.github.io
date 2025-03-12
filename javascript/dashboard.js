document.addEventListener('DOMContentLoaded', () =>  {

// Back to website Button

    const backhome = document.getElementById('backtohome');

    backhome.addEventListener('click', () => {
            window.location.href = "https://pml-official.github.io"     
    });



// codeing button
const button = document.getElementById('code');
const overlay = document.getElementById('overlay');
const home = document.getElementById('home');
const codeText = document.getElementById('codeText'); 
const homeText = document.getElementById('homeText'); 
 

let homeTimeout;
let buttonTimeout;

function enableHomeHover() {
    home.onmouseover = function() {
        if (overlay.style.display === 'none') {
            clearTimeout(homeTimeout);
            home.style.backgroundColor = 'rgb(27, 27, 27)';
            homeTimeout = setTimeout(() => {
                if (overlay.style.display === 'none') {
                    homeText.style.display = 'block';
                }
            }, 1000);
        }
    };

    home.onmouseout = function() {
        if (overlay.style.display === 'none') {
            clearTimeout(homeTimeout);
            home.style.backgroundColor = 'rgb(16, 16, 16)';
            homeText.style.display = 'none';
        }
    };
}

function disableHomeHover() {
    home.onmouseover = null;
    home.onmouseout = null;
    clearTimeout(homeTimeout);
    homeText.style.display = 'none';
}

function enableButtonHover() {
    button.onmouseover = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            clearTimeout(buttonTimeout);
            button.style.backgroundColor = 'rgb(27, 27, 27)';
            buttonTimeout = setTimeout(() => {
                if (overlay.style.display === 'flex' || overlay.style.display === '') {
                    codeText.style.display = 'block';
                }
            }, 1000);
        }
    };

    button.onmouseout = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            clearTimeout(buttonTimeout);
            button.style.backgroundColor = 'rgb(16, 16, 16)';

            codeText.style.display = 'none';
        }
    };
}

function disableButtonHover() {
    button.onmouseover = null;
    button.onmouseout = null;
    clearTimeout(buttonTimeout);
    codeText.style.display = 'none';
}


button.addEventListener('click', () => {
    overlay.style.display = 'none';
    home.style.backgroundColor = 'rgb(16, 16, 16)';
    enableHomeHover();
    disableButtonHover();
    button.style.backgroundColor = 'rgb(32, 32, 32)';
});

home.addEventListener('click', () => {
    overlay.style.display = 'flex';
    home.style.backgroundColor = '';
    button.style.backgroundColor = '';
    disableHomeHover();
    enableButtonHover();
});


enableButtonHover();


/// overflow stuff

if (overflow.style.display === 'block') {
    document.getElementById("body").style.overflow = "none";
    console.log('Body overflow off');
} else {
    document.getElementById("body").style.overflow = '';
    console.log('Body overflow On');
};



// Side Menu Hovering and Tooltips


const saveas = document.getElementById('saveas');
const download = document.getElementById('download');

const downloadText = document.getElementById('downloadText');
const openText = document.getElementById('openText');
const newText = document.getElementById('newText');
const saveAsText = document.getElementById('saveAsText');


// Save As
let saveAsTimeout;
saveas.onmouseover = function() {
    clearTimeout(saveAsTimeout);
    saveAsTimeout = setTimeout(() => {
        saveAsText.style.display = 'block';
    }, 1000);
    saveas.style.backgroundColor = 'rgb(27, 27, 27)';
};
saveas.onmouseout = function() {
    clearTimeout(saveAsTimeout);
    saveas.style.backgroundColor = '';

    saveAsText.style.display = '';
};

// Download
let downloadTimeout;
download.onmouseover = function() {
    clearTimeout(downloadTimeout);
    downloadTimeout = setTimeout(() => {
        downloadText.style.display = 'block';
    }, 1000);
    download.style.backgroundColor = 'rgb(27, 27, 27)';
};
download.onmouseout = function() {
    clearTimeout(downloadTimeout);
    download.style.backgroundColor = '';
    downloadText.style.display = '';
};


// Text Editor stuff












  








});