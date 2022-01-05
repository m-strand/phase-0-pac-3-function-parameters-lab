function introduction (name) {
    const thePhrase = 'Hi, my name is ' + name + '.';
    return thePhrase;
}
function introductionWithLanguage (name, language) {
    const theLangPhrase = 'Hi, my name is ' + name + ' and I am learning to program in ' + language + '.';
    return theLangPhrase;
}
function introductionWithLanguageOptional (name, language = "JavaScript") {
    const theOpLangPhrase = 'Hi, my name is ' + name + ' and I am learning to program in ' + language + '.';
    return theOpLangPhrase; 
}