// Placeholder text: this will get replaced with the text editor
const text = `
[meta-name: This is a title]
[meta-author: Stashey13 and lukewhite32]

[-- Page 1]
This is some text to see if this works. 
This is some really cool text.
[break:]
This is some more text to see if breaking is working.
`


// Tokenizer: converts the given text into a list of tokens

class Tokenizer {
    constructor() {
        this.tokens = [];
    }

    tokenizeLine(line) {
        let ret = [];
        let inBrackets = false;
        let currentToken;
        let char;

        for (var x = 0; x < line.length; x ++) {
            char = line[x];

            if (char == "[") {
                inBrackets = true;
            } 
            else if (char == "]" && inBrackets) {
                inBrackets = false;
                if (currentToken != null) {
                    ret.push(currentToken);
                    currentToken = null;
                }
            }
            else if (inBrackets) {
                if (currentToken != null) {
                    currentToken.content += char;
                }
                else {
                    for (var y = 1; y < TagStrings.length; y ++) {
                        if (line.slice(x, TagStrings[y].length+1) == TagStrings[y]) {
                            currentToken = new Token(y, "")
                            x += TagStrings[y].length;
                        }
                    }
                }
            }
            else {
                ret.push(new Token(TagIDs.TEXT, char));
            }
        }

        return ret;
    }

    // Tokenizes the given text
    parse(text) {
        let lines = text.split('\n');

        lines.forEach(line => {
            this.tokens.push(this.tokenizeLine(line));
        });
    }

    // For testing purposes
    debug() {
        this.tokens.forEach(tokenList => {
            tokenList.forEach(t => {
                if (t.id == TagIDs.TEXT) {
                    alert("Text");
                    alert(t.content);
                }
                else if (t.id == TagIDs.META_AUTHOR) {
                    alert("Meta author");
                    alert(t.content);
                }
                else if (t.id == TagIDs.META_NAME) {
                    alert("Meta Name");
                    alert(t.content);
                }
                else if (t.id == TagIDs.BREAK) {
                    alert("Break");
                    alert(t.content);
                }
                else if (t.id == TagIDs.NEW_PAGE) {
                    alert("New Page");
                    alert(t.content);
                }
            });
        });
    }
}

var parser = new Parser();
parser.parse(text);