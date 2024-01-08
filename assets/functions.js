// Funcations


// Get input field value
function getInputValue(fieldId) {
    const field = document.getElementById(fieldId);
    const stringValue = field.value;
    field.value = '';
    const value = parseFloat(stringValue).toFixed(2);
    return value;
}



// Create element to orderd list
function createElement(shape, result) {
    let container = document.getElementById('result-container');
    let li = document.createElement('li');
    container.appendChild(li);
    li.classList.add('bg-red-700/50', 'p-1', 'rounded', 'mb-2');
    li.innerHTML = shape + ` ` + result + `cm<sup>2</sup>` + `<button class="text-white bg-red-700 px-3 ml-3 rounded hover:bg-red-800">in m<sup>2</sup></button>`;
}
