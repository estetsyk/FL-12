function getMin() {
    let length = arguments.length;
    let minValue = arguments[0];
    for (let i = 1; i < length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i]
        }
    }
    return minValue;
}