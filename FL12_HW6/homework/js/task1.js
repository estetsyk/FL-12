let a = prompt('a');
let b = prompt('b');
let c = prompt('c');
let a1 = parseInt('a', 10);
let b1 = parseInt('b', 10);
let c1 = parseInt('c', 10);
let d = b*b-4*a*c;
let x;
let x1;
let x2;

if (isNaN(a1) || isNaN(b1) || isNaN(c1)) { 
    console.log('Invalid input data'); 
}
 if (d < 0) { 
     console.log('There are no actual results');
    }
 if (d === 0) {
      x = -b / (2 * a);
       console.log(x)
     }
 if (d > 0) { 
     x1 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
     x2 = -b / (2 * a) - Math.sqrt(d) / (2 * a);
     console.log('x1='+x1, 'x2='+x2); 
    } 








