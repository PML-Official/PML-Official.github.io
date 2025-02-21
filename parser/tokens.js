// The list of tokens
const TagIDs = {
    TEXT: 0,
    BREAK: 1,
    META_NAME: 2,
    META_AUTHOR: 3,
    META_CREATOR: 4,
    NEW_PAGE: 5
}

// The strings that directly correspond to the tokens
const TagStrings = [
    "",
    "break",
    "meta-name:",
    "meta-author:",
    "meta-creator:",
    "-- Page"
]

class TokenList {
    constructor() {
        this.list = []
    }
}

class Token {
    constructor(tag, content) {
        this.id = tag;
        this.content = content;
    }
}