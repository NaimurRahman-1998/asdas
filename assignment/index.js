function getValue(elementId){
    const Field = document.getElementById(elementId).value;
    const value = parseFloat(Field);
    return value;
}
function calculateSumType1(value1,value2){
    const sum = 0.5 * value1 * value2;
    return sum;
}
function calculateSumType2(value1,value2){
    const sum = value1 * value2;
    return sum;
}
function calculateSumType3(value1,value2){
    const sum = 3.1416 * value1 * value2;
    return sum;
}

function showData(name,sum){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${1}</th>
    <td>${name}</td>
    <td>${sum}</td>
    <td></td>
    `
    container.appendChild(tr);
}
document.getElementById('triangle').addEventListener('click', function(){
    const name = document.getElementById('name-1').innerText;
    const base = getValue('triangle-base');
    const height = getValue('triangle-height')
    const sum = calculateSumType1(base,height)
    showData(name,sum)
})

document.getElementById('rectangle').addEventListener('click',function(){
    const name = document.getElementById('name-2').innerText;
    const width = getValue('rectangle-width');
    const i = getValue('rectangle-i');
    const sum = calculateSumType2(width,i);
    showData(name,sum)
})
document.getElementById('parallelogram').addEventListener('click',function(){
    const name = document.getElementById('name-3').innerText;
    const base = getValue('parallelogram-base');
    const height = getValue('parallelogram-height');
    const sum = calculateSumType2(base,height);
    showData(name,sum)
})
document.getElementById('rhombus').addEventListener('click', function(){
    const name = document.getElementById('name-4').innerText;
    const base = getValue('rhombus-d1');
    const height = getValue('rhombus-d2')
    const sum = calculateSumType1(base,height)
    showData(name,sum)
})
document.getElementById('pentagon').addEventListener('click', function(){
    const name = document.getElementById('name-5').innerText;
    const base = getValue('pentagon-p');
    const height = getValue('pentagon-b')
    const sum = calculateSumType1(base,height)
    showData(name,sum)
})
document.getElementById('ellipse').addEventListener('click', function(){
    const name = document.getElementById('name-6').innerText;
    const base = getValue('ellipse-a');
    const height = getValue('ellipse-b')
    const sum = calculateSumType3(base,height)
    showData(name,sum)
})

