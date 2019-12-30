function countNumber(text) {
    let result = {};
    let resultNumbers = makeNumber(text);

    for (let k = 0; k <= 9; k++) {
        let resultNumberCount = 0;
        for (let i = 0; i <= text.length; i++) {

            if (parseInt(resultNumbers[i],10) === k) {
                resultNumberCount++;
            }
        }
        if (resultNumberCount > 0) {
            result[`${k}`] = resultNumberCount;
        }
    }
    return result;
}


