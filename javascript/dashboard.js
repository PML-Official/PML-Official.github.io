
document.addEventListener('DOMContentLoaded', () =>  {

// Save Button

    const textEditor = document.getElementById('editor');
    const saveAlert = document.getElementById('saveAlert');
    const save = document.getElementById('save');
    const homeText = document.getElementById('homeText');
    const codeText = document.getElementById('codeText'); 

    function showAlert() {
        saveAlert.style.display = "block";
    };

    function hideAlert() {
        saveAlert.style.display = 'none';
    };

    textEditor.addEventListener("input", showAlert);
    textEditor.addEventListener("keydown", showAlert);
    textEditor.addEventListener("paste", showAlert);

    save.addEventListener("click", hideAlert);

// Back to website Button

    const backhome = document.getElementById('backtohome');

    backhome.addEventListener('click', () => {
        let result = confirm("If you proceed without saving your PML, your progress will be lost");
        if (result) {
            window.location.href = "https://pml-official.github.io"
        } else {
            // Do nothing
        }
        
    });



// codeing button
const button = document.getElementById('code');
const overlay = document.getElementById('overlay');
const home = document.getElementById('home');

function enableHomeHover() {
    home.onmouseover = function() {
        if (overlay.style.display === 'none') {
            home.style.backgroundColor = 'rgb(64,64,64)';
            home.style.width = '230px';
            homeText.style.display = 'block';
        }
    };

    home.onmouseout = function() {
        if (overlay.style.display === 'none') {
            home.style.backgroundColor = 'rgb(16, 16, 16)';
            home.style.width = '';
            homeText.style.display = '';
        }
    };
}

function disableHomeHover() {
    home.onmouseover = null;
    home.onmouseout = null;
    home.style.width = '';
}

function enableButtonHover() {
    button.onmouseover = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            button.style.backgroundColor = 'rgb(64,64,64)';
            button.style.width = '230px';
            codeText.style.display = 'block';
        }
    };

    button.onmouseout = function() {
        if (overlay.style.display === 'flex' || overlay.style.display === '') {
            button.style.backgroundColor = 'rgb(16, 16, 16)';
            button.style.width = '';
            codeText.style.display = '';
        }
    };
}

function disableButtonHover() {
    button.onmouseover = null;
    button.onmouseout = null;
    button.style.width = '';
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

const saves = document.getElementById('save');
const saveas = document.getElementById('saveas');
const download = document.getElementById('download');
const openFile = document.getElementById('openFile');
const newFile = document.getElementById('newFile');

const saveText = document.getElementById('saveText')
const downloadText = document.getElementById('downloadText');
const openText = document.getElementById('openText');
const newText = document.getElementById('newText');
const saveAsText = document.getElementById('saveAsText');


// Save
saves.onmouseover = function() {
    saves.style.backgroundColor = 'rgb(64, 64, 64)';
    saves.style.width = '230px';
    saveText.style.display = 'block';
};

saves.onmouseout = function() {
    saves.style.backgroundColor = '';
    saves.style.width = '';
    saveText.style.display = '';
};

// Save As
saveas.onmouseover = function() {
    saveas.style.backgroundColor = 'rgb(64, 64, 64)';
    saveas.style.width = '230px';
    saveAsText.style.display = 'block';
};

saveas.onmouseout = function() {
    saveas.style.backgroundColor = '';
    saveas.style.width = '';
    saveAsText.style.display = '';
};


// Download
download.onmouseover = function() {
    download.style.backgroundColor = 'rgb(64, 64, 64)';
    download.style.width = '230px';
    downloadText.style.display = 'block';
};

download.onmouseout = function() {
    download.style.backgroundColor = '';
    download.style.width = '';
    downloadText.style.display = '';
};


//  open file
openFile.onmouseover = function() {
    openFile.style.backgroundColor = 'rgb(64, 64, 64)';
    openFile.style.width = '230px';
    openText.style.display = 'block';
};

openFile.onmouseout = function() {
    openFile.style.backgroundColor = '';
    openFile.style.width = '';
    openText.style.display = '';
};


// New File
newFile.onmouseover = function() {
    newFile.style.backgroundColor = 'rgb(64, 64, 64)';
    newFile.style.width = '230px';
    newText.style.display = 'block';
};

newFile.onmouseout = function() {
    newFile.style.backgroundColor = '';
    newFile.style.width = '';
    newText.style.display = '';
};














  








})