// A dedicated class that contains functions to write text, images, links, etc. to a pdf.

// (just a placeholder for now)
class PDFWriter {
    constructor(doc) {
        this.doc = doc;
        this.textBuffer = "";
    }

    writeMetadataTitle(title) {
        this.doc.info.Title = title;
    }

    writeMetadataAuthor(author) {
        this.doc.info.Author = author;
    }

    writeMetadataCreator(creator) {
        this.doc.info.Creator = creator;
    }

    writeMetadataProducer(producer) {
        this.doc.info.Producer = producer;
    }

    writeText(text) {
        this.textBuffer += text;
    }

    break() {
        this.doc.text(this.textBuffer);
        this.textBuffer = "";
    }

    writeImage(imgLink) {

    }

    download(blob) {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        if (!blob) return;
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'test.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
    }

    end() {
        if (this.textBuffer != "") {
            this.doc.text(this.textBuffer);
            this.textBuffer = "";
        }
        doc.end();
    }
}