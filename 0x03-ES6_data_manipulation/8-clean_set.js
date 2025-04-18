const cleanSet = (set, startString) => {
    if (!startString) return "";

    let newWords = [];
    for (const word of set) {
        if (word.startsWith(startString)) {
            newWords.push(word.slice(startString.length));
        }
    }

    return newWords.join('-');
};

export default cleanSet;
