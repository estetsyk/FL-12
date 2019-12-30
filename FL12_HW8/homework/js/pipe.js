
function pipe() {
    let length = arguments.length;
    let a = arguments[0];
    let result = a;
    for (let i = 1; i < length; i++) {
        let arg = arguments[i];
        result = arg(result);
    }
    return result;
}
