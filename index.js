// ---------- functions ----------------
let count = 0;
function getValue(elementId) {
    const Field = document.getElementById(elementId).value;
    const value = parseFloat(Field);
    return value;
}
function calculateSumType1(value1, value2) {
    const sum = 0.5 * value1 * value2;
    return sum;
}
function calculateSumType2(value1, value2) {
    const sum = value1 * value2;
    return sum;
}
function calculateSumType3(value1, value2) {
    const sum = 3.1416 * value1 * value2;
    return sum;
}

function showData(name, sum) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${count}</th>
    <td>${name}</td>
    <td>${sum}<p class="inline"> cm<sup>2</sup></p></td>
    <td><button class="btn bg-sky-500 border-none hover:bg-sky-600 text-white rounded-lg">convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
}
function showDataError(name) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${count}</th>
    <td>${name}</td>
    <td><h1>Invalid Input</h1></td>
    <td><button class="btn bg-sky-500 border-none hover:bg-sky-600 text-white rounded-lg">convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
}
function showDataErrorType2(name) {
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${count}</th>
    <td>${name}</td>
    <td><h1>Negative Input</h1></td>
    <td><button class="btn bg-sky-500 border-none hover:bg-sky-600 text-white rounded-lg">convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
}
function color(element){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById(element).style.backgroundColor = col;
}
// -------------------event listeners-----------------


document.getElementById('card').addEventListener('mouseenter', function () {
    color('card')
});
document.getElementById('card2').addEventListener('mouseenter', function () {
    color('card2')
});
document.getElementById('card3').addEventListener('mouseenter', function () {
    color('card3')
});
document.getElementById('card4').addEventListener('mouseenter', function () {
    color('card4')
});
document.getElementById('card5').addEventListener('mouseenter', function () {
    color('card5')
});
document.getElementById('card6').addEventListener('mouseenter', function () {
    color('card6')
});

document.getElementById('triangle').addEventListener('click', function () {
    const name = document.getElementById('name-1').innerText;
    const base = getValue('triangle-base');
    const height = getValue('triangle-height')
    if (isNaN(base) || isNaN(height)) {
        alert("Please insert A Number");
    } else if (base < 0 || height < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType1(base, height)
        showData(name, sum)
    }

})

document.getElementById('rectangle').addEventListener('click', function () {
    const name = document.getElementById('name-2').innerText;
    const width = getValue('rectangle-width');
    const i = getValue('rectangle-i');
    if (isNaN(width) || isNaN(i)) {
        alert("Please insert A Number");
    } else if (width < 0 || i < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType1(width, i)
        showData(name, sum)
    }
})

document.getElementById('parallelogram').addEventListener('click', function () {
    const name = document.getElementById('name-3').innerText;
    const base = getValue('parallelogram-base');
    const height = getValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert("Please insert A Number");
    } else if (base < 0 || height < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType2(base, height)
        showData(name, sum)
    }

})
document.getElementById('rhombus').addEventListener('click', function () {
    const name = document.getElementById('name-4').innerText;
    const base = getValue('rhombus-d1');
    const height = getValue('rhombus-d2')
    if (isNaN(base) || isNaN(height)) {
        alert("Please insert A Number");
    } else if (base < 0 || height < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType1(base, height)
        showData(name, sum)
    }

})

document.getElementById('pentagon').addEventListener('click', function () {
    const name = document.getElementById('name-5').innerText;
    const base = getValue('pentagon-p');
    const height = getValue('pentagon-b')
    if (isNaN(base) || isNaN(height)) {
        alert("Please insert A Number");
    } else if (base < 0 || height < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType1(base, height)
        showData(name, sum)
    }

})
document.getElementById('ellipse').addEventListener('click', function () {
    const name = document.getElementById('name-6').innerText;
    const base = getValue('ellipse-a');
    const height = getValue('ellipse-b')
    if (isNaN(base) || isNaN(height)) {
        alert("Please insert A Number");
    } else if (base < 0 || height < 0) {
        alert("Please insert a Positive number");
    } else {
        count++;
        const sum = calculateSumType3(base, height)
        showData(name, sum)
    }

})
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "./blog.html"
})