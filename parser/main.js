var doc;
var pdfWriter;
var blob;
var isRealTimeEnabled = false; 
var isToolbarHidden = false; 
var editor; 
var fileLoaded = false; 

function parse() {
    doc = new PDFDocument();
    const stream = doc.pipe(blobStream());
    pdfWriter = new PDFWriter(doc);

    stream.on("finish", function() {
        blob = stream.toBlob("application/pdf");
        updateIframe(); 
    });

    if (!editor) {
        console.error("Error: Editor element with ID 'editor' not found in the document.");
        return;
    }

    var parser = new Tokenizer(editor.innerText);
    parser.parse(editor.innerText);

    pdfWriter.writeMetadataProducer("PML (PDF Markup Language)");

    parser.tokens.forEach(tokenList => {
        tokenList.forEach(t => {
            if (t.id == TagIDs.TEXT) {
                pdfWriter.writeText(t.content);
            }
            else if (t.id == TagIDs.META_AUTHOR) {
                pdfWriter.writeMetadataAuthor(t.content);
            }
            else if (t.id == TagIDs.META_NAME) {
                pdfWriter.writeMetadataTitle(t.content);
            }
            else if (t.id == TagIDs.BREAK) {
                pdfWriter.break();
            }
            else if (t.id == TagIDs.NEW_PAGE) {
                // alert("New Page");
                // alert(t.content);
            }
        });
    });
    pdfWriter.end();
}

function updateIframe() {
    let placeholder = document.getElementById("placeholder");
    if (!placeholder) {
        console.error("Error: Placeholder element with ID 'placeholder' not found in the document.");
        return;
    }
    if (!blob) {
        console.warn("No PDF blob available to display.");
        return;
    }

    // If placeholder is a div and a file is loaded, replace it with an iframe
    if (placeholder.tagName.toLowerCase() === "div" && fileLoaded) {
        const iframe = document.createElement("iframe");
        iframe.id = "placeholder"; 
        iframe.className = "rightsidesizing"; 
        placeholder.parentNode.replaceChild(iframe, placeholder);
        placeholder = iframe; 
    }

    const url = URL.createObjectURL(blob) + (isToolbarHidden ? "#toolbar=0" : "");
    placeholder.src = url;
}

function download() {
    pdfWriter.download(blob);
}

function toggleRealTime() {
    if (!editor) {
        console.error("Error: Cannot toggle real-time updates; editor element not found.");
        return;
    }

    isRealTimeEnabled = !isRealTimeEnabled;
    const runButton = document.getElementById("runbutton");
    const buttonText = document.getElementById("runcodespan");
    const buttonPlay = document.getElementById("runbutton1");
    const buttonPause = document.getElementById("runbutton2");
    if (isRealTimeEnabled) {
        editor.addEventListener("input", parse);
        console.log("Real-time parsing enabled.");
        buttonPlay.style.display = 'none';
        buttonPause.style.display = 'block';
        buttonText.style.color = 'lightGreen';
    } else {
        editor.removeEventListener("input", parse);
        console.log("Real-time parsing disabled.");
        buttonPause.style.display = 'none';
        buttonPlay.style.display = 'block';
        buttonText.style.color = '';
    }
}

function toggleToolbar() {
    isToolbarHidden = !isToolbarHidden;
    const toolbarButton = document.getElementById("toolbarButton");
    if (isToolbarHidden) {
        toolbarButton.textContent = "Show Toolbar";
        console.log("PDF toolbar hidden.");
    } else {
        toolbarButton.textContent = "Hide Toolbar";
        console.log("PDF toolbar shown.");
    }
    updateIframe(); 
}

document.addEventListener("DOMContentLoaded", function() {
    editor = document.getElementById("editor");

    const runButton = document.getElementById("runbutton");
    if (runButton) {
        runButton.addEventListener("click", toggleRealTime);
    } else {
        console.error("Error: Run button with ID 'runbutton' not found in the document.");
    }

    const toolbarButton = document.getElementById("toolbarButton");
    if (toolbarButton) {
        toolbarButton.addEventListener("click", toggleToolbar);
        toolbarButton.textContent = "Hide Toolbar"; 
    } else {
        console.error("Error: Toolbar button with ID 'toolbarButton' not found in the document.");
    }

    const dashOpen = document.getElementById("dashOpen");
    const fileInput = document.getElementById("fileInput");
    const overlay = document.getElementById("overlay");
    const noFile = document.getElementById("noFile");
    
    if (dashOpen && fileInput && noFile) {  
        dashOpen.addEventListener("click", () => {
            fileInput.click();
        });
    
        noFile.addEventListener("click", () => {
            fileInput.click();
        });
    
        fileInput.addEventListener("change", () => {
            const file = fileInput.files[0];

            if (file) {
                const fileSizeKB = (file.size / 1024).toFixed(2);
                noFile.innerText = `${file.name}`;
                console.log("File name:", file.name);
                console.log("File size:", fileSizeKB, "KB");
                console.log("Last modified:", new Date(file.lastModified));
                noFile.style.textDecoration = 'none';
            }

            if (file && file.name.endsWith(".pml")) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    editor.innerText = event.target.result;
                    fileLoaded = true; 
                    parse(); 
                    overlay.style.display = 'none';
                };
                reader.readAsText(file);
                fileInput.value = ""; 
            } else {
                alert("Please select a .pml file.");
            }
        });
    } else {
        console.error("Error: dashOpen, fileInput, or noFile element not found in the document.");
    }
    
    if (editor && fileLoaded) {
        parse();
    } else {
        console.log("No file loaded yet; showing 'No PDF Loaded'.");
    }
});

const push = document.getElementById("push");
push.addEventListener("click", () => {
    console.log("PML Pushed");
});


