function generateRandomArray() {
    let arr = [{key: 'Udhaya MLS'}, {key: 'Muthu Servant'}, {key: 'Sakthi DRI'}, {key: 'Keerthi MTS'}, {key: 'Parama'}];
    for(let i=0; i<arr.length; i++) {
        arr[i].value = Math.floor(Math.random() * 100);
    }
    return arr;
}

let dta = generateRandomArray();

let bar = d3.select('body').selectAll('div').data(dta).enter().append('div').attr('class', 'bar');

bar.attr('style', function(dta) {return `width:${dta.value * 10}px`;}).text(dta => dta.key);