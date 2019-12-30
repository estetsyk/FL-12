function makeNumber(text) { 
        let result = '';
    for (i = 0; i < text.length; i++) {
        
        if (!isNaN (parseInt(text[i]))) {
            result = result + parseInt(text[i])
        }
     }
    return result;
}