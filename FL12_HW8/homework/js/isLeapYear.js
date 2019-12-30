function isLeapYear(arg) {

    let date = new Date(arg);
    if (isNaN(date) ) {
        return `Invalid Date`;
    }
    let d = date.getFullYear();
    if (d % 4 === 0) {
        return `${d} is a leap year`;
    } else {

        return `${d} is not a leap year`;

    }

}


