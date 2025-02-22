
document.addEventListener('DOMContentLoaded', () =>  {

// Save Button

    const textEditor = document.getElementById('editor');
    const saveAlert = document.getElementById('saveAlert');
    const save = document.getElementById('save');

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
        let result = confirm("If you proceed without saving, your progress will be lost");
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

    button.addEventListener('click',  () => {
        overlay.style.display = 'none';
    });

    home.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });








// Menu Code
/*
    const menu = document.getElementById('sidebar');
    const hamburg = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.getElementById('overlay');
    const dashboard = document.getElementById('dashboardTop');
*/




  








})