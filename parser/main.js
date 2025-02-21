var doc = new PDFDocument();
var pdfWriter = new PDFWriter(doc);
var blob;

function parse() {
    doc = new PDFDocument();
    const stream = doc.pipe(blobStream());

    pdfWriter = new PDFWriter(doc);

    stream.on("finish", function() {
        blob = stream.toBlob("application/pdf");

        const url = stream.toBlobURL("application/pdf");
        const iframe = document.getElementById("placeholder");
        iframe.src = url;
    });

    var parser = new Tokenizer(document.getElementById("editor").innerText);
    parser.parse(document.getElementById("editor").innerText);

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


parse();


// document.getElementById("editor").addEventListener('input', () => {
//     parse();
// });