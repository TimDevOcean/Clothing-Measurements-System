// TROUSERS / SKIRTS

// Input declarations
let trWaist = document.querySelector('#tr_waist');
let trHip = document.querySelector('#tr_hip');
let trLength = document.querySelector('#tr_long_length');
// Standard size declarations 
let trWaistSS = document.querySelector('#tr-wss');
let trHipSS = document.querySelector('#tr-hss');
let trLengthSS = document.querySelector('#tr-lss');
let trSS = document.querySelector('#tr_ss');

// Estimate Functions
// Estimate waist standard size
function estTrouserWaist() {
    if (trWaist.value == 60 || trWaist.value < 64){
        trWaistSS.innerHTML = 'XXS';
    } else if (trWaist.value == 64 || trWaist.value < 73){
        trWaistSS.innerHTML = 'XS';
    } else if (trWaist.value == 73 || trWaist.value < 82){
        trWaistSS.innerHTML = 'S';
    } else if (trWaist.value == 82 || trWaist.value < 88){
        trWaistSS.innerHTML = 'M';
    } else if (trWaist.value == 88 || trWaist.value < 97){
        trWaistSS.innerHTML = 'L';
    } else if (trWaist.value == 97 || trWaist.value < 108){
        trWaistSS.innerHTML = 'XL';
    } else if (trWaist.value == 108 || trWaist.value < 118){
        trWaistSS.innerHTML = 'XXL';
    } else if (trWaist.value == 118 || trWaist.value < 200){
        trWaistSS.innerHTML = '3XL';
    } else {
        trWaistSS.innerHTML = 'undefined';
    }
    return trWaistSS.innerHTML;
}

// Estimate hip standard size
function estTrouserHip() {
    if (trHip.value == 72 || trHip.value < 77){
        trHipSS.innerHTML = 'XXS';
    } else if (trHip.value == 77 || trHip.value < 89){
        trHipSS.innerHTML = 'XS';
    } else if (trHip.value == 89 || trHip.value < 99){
        trHipSS.innerHTML = 'S';
    } else if (trHip.value == 99 || trHip.value < 105){
        trHipSS.innerHTML = 'M';
    } else if (trHip.value == 105 || trHip.value < 114){
        trHipSS.innerHTML = 'L';
    } else if (trHip.value == 114 || trHip.value < 121){
        trHipSS.innerHTML = 'XL';
    } else if (trHip.value == 121 || trHip.value < 131){
        trHipSS.innerHTML = 'XXL';
    } else if (trHip.value == 131 || trHip.value < 200){
        trHipSS.innerHTML = '3XL';
    } else {
        trHipSS.innerHTML = 'undefined';
    }
    return trHipSS.innerHTML;
}

// Estimate length standard size
function estTrouserLength() {
    if (trLength.value == 80 || trLength.value < 83){
        trLengthSS.innerHTML = 'S';
    } else if (trLength.value == 83 || trLength.value < 84){
        trLengthSS.innerHTML = 'M';
    } else if (trLength.value == 84 || trLength.value < 85){
        trLengthSS.innerHTML = 'L';
    } else if (trLength.value == 85 || trLength.value < 86){
        trLengthSS.innerHTML = 'XL';
    } else if (trLength.value == 86 || trLength.value < 120){
        trLengthSS.innerHTML = 'XXL';
    } else {
        trLengthSS.innerHTML = 'undefined';
    }
    return trLengthSS.innerHTML;
}

// Estimate overall trouser standard size
function estTrouserSS() {
    trSS.value = trWaistSS.innerHTML;
}
