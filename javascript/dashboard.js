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
    button.style.borderLeft = '3px solid red';
    home.style.borderLeft = '3px solid transparent';
});

home.addEventListener('click', () => {
    overlay.style.display = 'flex';
    home.style.backgroundColor = '';
    button.style.backgroundColor = '';
    button.style.borderLeft = '3px solid transparent';
    home.style.borderLeft = '3px solid red';
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
/*
const openText = document.getElementById('openText');
const newText = document.getElementById('newText');
*/
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


});


//   Opening Page animaions

const line1 = document.getElementById('underline1');
const line2 = document.getElementById('underline2');

const hoverleft = document.getElementById('hoverleft');
const hoverright = document.getElementById('hoverright');

hoverleft.addEventListener('mouseover', () => {
    line1.style.width = '77px';
});

hoverleft.addEventListener('mouseout', () => {
    line1.style.width = '57px';
});


hoverright.addEventListener('mouseover', () => {
    line2.style.width = '77px';
});

hoverright.addEventListener('mouseleave', () => {
    line2.style.width = '57px';
});

//  PDF/Debug toggle

function togglePrev(divId) {
    const placeholder = document.getElementById('placeholder');
    const debug = document.getElementById('debug');
    const pdfTop = document.getElementById('pdfTop');
    const errorsTop = document.getElementById('errorsTop');
    const pdfPath = document.getElementById('pdfPath');
    const toolbarButton = document.getElementById('toolbarButton');

    placeholder.style.display = 'none';
    debug.style.display = 'none';

    pdfTop.style.backgroundColor = '';
    errorsTop.style.backgroundColor = '';

    const targetDiv = document.getElementById(divId);
    targetDiv.style.display = 'block';

    pdfTop.style.transition = 'width 0.3s ease-out';
    errorsTop.style.transition = 'width 0.3s ease-out';

    if (divId === 'placeholder') {
        pdfTop.style.backgroundColor = 'rgb(32, 32, 32)';
        pdfTop.style.width = '70%';
        errorsTop.style.width = '30%';
        pdfPath.style.display = 'block';
        toolbarButton.style.display = 'block';
    } else if (divId === 'debug') {
        errorsTop.style.backgroundColor = 'rgb(32, 32, 32)';
        errorsTop.style.width = '70%';
        pdfTop.style.width = '30%';
        pdfPath.style.display = 'none';
        toolbarButton.style.display = 'none';
    }
}

window.onload = function () {
    const pdfTop = document.getElementById('pdfTop');
    pdfTop.style.backgroundColor = 'rgb(32, 32, 32)';
    pdfTop.style.transition = 'width 0.3s ease-out';
    document.getElementById('errorsTop').style.transition = 'width 0.3s ease-in-out';
};