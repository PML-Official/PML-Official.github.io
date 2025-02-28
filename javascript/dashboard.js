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
            home.style.backgroundColor = 'rgb(64, 64, 64)';
            homeTimeout = setTimeout(() => {
                if (overlay.style.display === 'none') {
                    home.style.width = '230px';
                    homeText.style.display = 'block';
                }
            }, 1000);
        }
    };

    home.onmouseout = function() {
        if (overlay.style.display === 'none') {
            clearTimeout(homeTimeout);
            home.style.backgroundColor = 'rgb(16, 16, 16)';
            home.style.width = '';
            homeText.style.display = 'none';
        }
    };
}

function disableHomeHover() {
    home.onmouseover = null;
    home.onmouseout = null;
    clearTimeout(homeTimeout);
    home.style.width = '';
    homeText.style.display = 'none';
}

function enableButtonHover() {
    button.onmouseover = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            clearTimeout(buttonTimeout);
            button.style.backgroundColor = 'rgb(64, 64, 64)';
            buttonTimeout = setTimeout(() => {
                if (overlay.style.display === 'flex' || overlay.style.display === '') {
                    button.style.width = '230px';
                    codeText.style.display = 'block';
                }
            }, 1000);
        }
    };

    button.onmouseout = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            clearTimeout(buttonTimeout);
            button.style.backgroundColor = 'rgb(16, 16, 16)';
            button.style.width = '';
            codeText.style.display = 'none';
        }
    };
}

function disableButtonHover() {
    button.onmouseover = null;
    button.onmouseout = null;
    clearTimeout(buttonTimeout);
    button.style.width = '';
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



// Side Menu Hovering


const saveas = document.getElementById('saveas');
const download = document.getElementById('download');
const openFile = document.getElementById('openFile');
const newFile = document.getElementById('newFile');

const downloadText = document.getElementById('downloadText');
const openText = document.getElementById('openText');
const newText = document.getElementById('newText');
const saveAsText = document.getElementById('saveAsText');

const dashOpen = document.getElementById('dashOpen');
const dashCreate = document.getElementById('dashCreate');

// Save As
let saveAsTimeout;
saveas.onmouseover = function() {
    clearTimeout(saveAsTimeout);
    saveAsTimeout = setTimeout(() => {
        saveas.style.width = '230px';
        saveAsText.style.display = 'block';
    }, 1000);
    saveas.style.backgroundColor = 'rgb(64, 64, 64)';
};
saveas.onmouseout = function() {
    clearTimeout(saveAsTimeout);
    saveas.style.backgroundColor = '';
    saveas.style.width = '';
    saveAsText.style.display = '';
};

// Download
let downloadTimeout;
download.onmouseover = function() {
    clearTimeout(downloadTimeout);
    downloadTimeout = setTimeout(() => {
        download.style.width = '230px';
        downloadText.style.display = 'block';
    }, 1000);
    download.style.backgroundColor = 'rgb(64, 64, 64)';
};
download.onmouseout = function() {
    clearTimeout(downloadTimeout);
    download.style.backgroundColor = '';
    download.style.width = '';
    downloadText.style.display = '';
};

// Open File
let openFileTimeout;
openFile.onmouseover = function() {
    clearTimeout(openFileTimeout);
    openFileTimeout = setTimeout(() => {
        openFile.style.width = '230px';
        openText.style.display = 'block';
    }, 1000);
    dashOpen.style.color = 'white';
    openFile.style.backgroundColor = 'rgb(64, 64, 64)';
};
openFile.onmouseout = function() {
    clearTimeout(openFileTimeout);
    openFile.style.backgroundColor = '';
    openFile.style.width = '';
    openText.style.display = '';
    dashOpen.style.color = '';
};

// New File
let newFileTimeout;
newFile.onmouseover = function() {
    clearTimeout(newFileTimeout);
    newFileTimeout = setTimeout(() => {
        newFile.style.width = '230px';
        newText.style.display = 'block';
    }, 1000);
    dashCreate.style.color = 'white';
    newFile.style.backgroundColor = 'rgb(64, 64, 64)';
};
newFile.onmouseout = function() {
    clearTimeout(newFileTimeout);
    newFile.style.backgroundColor = '';
    newFile.style.width = '';
    newText.style.display = '';
    dashCreate.style.color = '';
};

// Dashboard Open Existing

dashOpen.onmouseover = function() {
    openFile.style.backgroundColor = 'rgb(64, 64, 64)';
}

dashOpen.onmouseout = function() {
    openFile.style.backgroundColor = '';
}


// Dashboard Create New

dashCreate.onmouseover = function() {
    newFile.style.backgroundColor = 'rgb(64, 64, 64)';
}

dashCreate.onmouseout = function() {
    newFile.style.backgroundColor = '';
}












  








});