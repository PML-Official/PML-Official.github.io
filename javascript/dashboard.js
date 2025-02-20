document.addEventListener('DOMContentLoaded', () => {
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



  








})