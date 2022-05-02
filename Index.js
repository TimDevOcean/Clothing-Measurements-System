// TROUSERS / SKIRTS

// User input declarations
let trWaist = document.querySelector('#tr_waist');
let trHip = document.querySelector('#tr_hip');
let trLength = document.querySelector('#tr_long_length');
// Standard size declarations 
let trWaistSS = document.querySelector('#tr-wss');
let trHipSS = document.querySelector('#tr-hss');
let trLengthSS = document.querySelector('#tr-lss');
let trSS = document.querySelector('#tr_ss');
// Size data in centimeters
var trouser = {
    waistSize: [60,64,73,82,88,97,108,118,151],
    hipSize: [72,77,89,99,105,114,121,131,151],
    lengthSize: [80,81,81.5,82.5,84,85,85.5,85.8,100]
};

var skirt = {
    waistSize: [60,64,73,82,88,97,108,118,151],
    hipSize: [72,77,89,99,105,114,121,131,151],
    lengthSize: [80,81,81.5,82.5,84,85,85.5,85.8,100]
};

// Standard size estimation function parameters declaration
let trWaistSize = trouser.waistSize;
let trHipSize = trouser.hipSize;
let trLengthSize = trouser.lengthSize;

function estStandardSize(userData, sizeArray, standardSize) {
    if (userData >= sizeArray[0] && userData < sizeArray[1]){
        standardSize.innerHTML = 'XXS';
    } else if (userData >= sizeArray[1] && userData < sizeArray[2]){
        standardSize.innerHTML = 'XS';
    } else if (userData >= sizeArray[2] && userData < sizeArray[3]){
        standardSize.innerHTML = 'S';
    } else if (userData >= sizeArray[3] && userData < sizeArray[4]){
        standardSize.innerHTML = 'M';
    } else if (userData >= sizeArray[4] && userData < sizeArray[5]){
        standardSize.innerHTML = 'L';
    } else if (userData >= sizeArray[5] && userData < sizeArray[6]){
        standardSize.innerHTML = 'XL';
    } else if (userData >= sizeArray[6] && userData < sizeArray[7]){
        standardSize.innerHTML = 'XXL';
    } else if (userData >= sizeArray[7] && userData < sizeArray[8]){
        standardSize.innerHTML = 'XXXL';
    } else {
        standardSize.innerHTML = 'undefined';
    }
    return standardSize.innerHTML;
};

function estTrouserSS() {
    trSS.value = trWaistSS.innerHTML;
} 


// Metric convertor
var measurement = document.querySelectorAll('input[type=number]');
var numOfMeasurements = document.querySelectorAll('input[type=number]').length;
var convertMetricIN = function () {
    for (var i=0; i < numOfMeasurements; i++){
       var x = measurement[i].value * 0.39;
       measurement[i].value = x;
        
    }
}

var convertMetricCM = function () {
    for (var i=0; i < numOfMeasurements; i++){
       var x = Math.floor(measurement[i].value * 2.54);
       measurement[i].value = x;
        
    }
}

let metricToggle = document.querySelector('#metric')
function toggleMetric() {
    if(metricToggle.value === 'IN'){
        convertMetricIN();
    } else if (metricToggle.value === 'CM'){
        convertMetricCM();
    }
}