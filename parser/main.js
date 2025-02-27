var doc = new PDFDocument();
var pdfWriter = new PDFWriter(doc);
var blob;
var isRealTimeEnabled = false;
var editor = document.getElementById('editor');


function parse() {
    doc = new PDFDocument();
    const stream = doc.pipe(blobStream());

    pdfWriter = new PDFWriter(doc);

    stream.on("finish", function() {
        blob = stream.toBlob("application/pdf");

        const url = stream.toBlobURL("application/pdf");
        const iframe = document.getElementById("placeholder");
        // Checking for Errors
        if (!iframe) {
            console.error("Error: iframe with id 'placholder' not found")
            return;
        }
        iframe.src = url;
    });

    // Checking for Errors

    if (!editor) {
        console.error("Error: Editor element with ID 'editor' not found")
        return;
    }

    var parser = new Tokenizer(document.getElementById("editor").innerText);
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

function download() {
    pdfWriter.download(blob);
}

function toggleRealTime() {
    if (!editor) {
        console.error("Error: Cannot toggle real time updates; editor element not found.")
        return;
    }

    isRealTimeEnabled = !isRealTimeEnabled;
    const runButton = document.getElementById('runbutton');
    const runText = document.getElementById('runcodespan');
    const start = document.getElementById('runbutton1');
    const stop = document.getElementById('runbutton2');
    if (isRealTimeEnabled) {
        editor.addEventListener("input", parse);
        console.log("Real-time parsing enabled.");
        runText.style.color = 'lightgreen';
        start.style.display = 'none';
        stop.style.display = 'block';
    } else {
        editor.removeEventListener("input", parse);
        console.log("Real-time parsing disabled.");
        runText.style.color = '';
        start.style.display = 'block';
        stop.style.display = 'none';
    }
}

const runButton = document.getElementById("runbutton");
if (runButton) {
    runButton.addEventListener("click", toggleRealTime);
} else {
    console.error("Error: Run button with ID 'runbutton' not found in document.")
}





parse();


// document.getElementById("editor").addEventListener('input', () => {
//     parse();
// });