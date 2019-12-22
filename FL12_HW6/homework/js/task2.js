let a = prompt('a');
let b = prompt('b');
let c = prompt('c');


if (a === '' || b === '' || c === '') {
    console.log('input values should be ONLY numbers');
} else {
    let x = parseInt(a, 10) + parseInt(b, 10);
    let y = parseInt(b, 10) + parseInt(c, 10);
    let z = parseInt(a, 10) + parseInt(c, 10);
    //debugger;
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        console.log('input values should be ONLY numbers');
    } else {

        if (a === 0 || b === 0 || c === 0) {
            console.log('A triangle must have 3 sides with a positive definite length');
        } else {
            if (x <= parseInt(c, 10) || y <= parseInt(a, 10) || z <= parseInt(b, 10)) {
                console.log('Triangle doesn’t exist');
            } else {
                if (parseInt(a, 10) === parseInt(b, 10) === parseInt(c, 10)) {
                    console.log('Equilateral triangle');
                } else {
                    if (parseInt(a, 10) !== parseInt(b, 10) &&
                        parseInt(a, 10) !== parseInt(c, 10) &&
                        parseInt(b, 10) !== parseInt(c, 10)) {
                        console.log('Scalene triangle');
                    } else {
                        console.log('Isosceles triangle')
                    }
                }
            }
        }
    }
}