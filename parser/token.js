const TagIDs = {
    TEXT: 0,
    BREAK: 1,
    META_NAME: 2,
    META_AUTHOR: 3,
    NEW_PAGE: 4
}

const TagStrings = [
    "",
    "break:",
    "meta-name:",
    "meta-author:",
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