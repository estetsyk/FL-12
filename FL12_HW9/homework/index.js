function convert() { 
    let length = arguments.length;
    let arr = [];
    for (let i = 0; i < length; i++) { 
        if (typeof arguments[i] === 'string') {
            let number = parseInt(arguments[i]);
            arr.push(number);
        } else if (typeof arguments[i] === 'number') {
            let str = `${arguments[i]}`;
            arr.push(str);
        } else { 
            arr.push(arguments[i]);
        }
    }
    return arr;
}


function executeforEach(arr, fn) {
    let length = arr.length;    
    for (let i = 0; i < length; i++) {
        fn(arr[i]);
    }   
}

function mapArray(arr, callback) { 
    let newArr = [];
    executeforEach(arr, function (el) {
        if (typeof el === 'string') {
            let number = parseInt(el);
            let result = callback(number);
            newArr.push(result);          
        } else {
            let result = callback(el);
            newArr.push(result);           
        }
    });
    return newArr;
}

function filterArray(arr, funct) { 
    let newArr = [];
    executeforEach(arr, function(el) {
        let res = funct(el);
        if (res/*===true*/) {
            
        newArr.push(el)
    }
    
    })
       return newArr;
}

function flipOver(text) { 
    //debugger;
    let newText = '';
    let length = text.length
    for (let i = 0; i < length; i++) { 
        newText = text[i]+newText;
    }
    return newText;
}

function makeListFromRange(arr) { 
    let newArr = [];
    let first = arr[0];
    let second = arr[1];
    while (first <= second) {
       
        newArr.push(first)
        first++;
    }            
    return newArr;           
    }


function substitute(arr) {
    let newArr = mapArray(arr, function (el) {
        if (el >= 30) {
            return el;
        } else {
            return '*'
        }
    })
    return newArr;
}

function getArrayOfKeys(arr, key) { 
    let newArr = [];
    executeforEach(arr, function (el) { 
        
        newArr.push(el[key]) 
    })
    return newArr;
}

function formatDate(date) {
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDT = date.getDate();
    let newHH = date.getHours();
    let newMin = date.getMinutes();
    let hh = `${newHH}`;
    let mm = `${newMin}`;
    if (newHH < 10) {
    
        hh = `0` + hh;
    }
    if (newMin < 10) {

        mm = `0` + mm;
    }
    let newDate =
        `${newYear}/${newMonth}/${newDT} ${hh}:${mm}`;

    return newDate;
}

function getPastDay(date, days) { 
    //var date = new Date();
    //let days = 20;
    let ticksDate = date.getTime()
    let ticksDays = days * 24 * 60 * 60*1000;
    let ticksRes = ticksDate - ticksDays;
    let resultDate = new Date(ticksRes);
    let result = resultDate.getDate();
    return result;
    
}