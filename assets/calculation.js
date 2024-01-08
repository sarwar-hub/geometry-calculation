// Calculation

// Triangle calculation
document.getElementById('triangle-button').addEventListener('click', function(){
    // get input values
    const b = getInputValue('triangle-b');
    const h = getInputValue('triangle-h');

    // Validation
    if (isNaN(b) || isNaN(h) || b < 0 || h < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = 0.5*b*h;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Triangle', aFixed);
    

})



// Rectangle calculation
document.getElementById('rectangle-button').addEventListener('click', function(){
    // get input values
    const w = getInputValue('rectangle-w');
    const l = getInputValue('rectangle-l');

    // Validation
    if (isNaN(w) || isNaN(l) || w < 0 || l < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = w*l;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Rectangle', aFixed);

})


// Parallelogram calculation
document.getElementById('perallelogram-button').addEventListener('click', function(){
    // get input values
    const b = getInputValue('perallelogram-b');
    const h = getInputValue('perallelogram-h');

    // Validation
    if (isNaN(b) || isNaN(h) || b < 0 || h < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = b*h;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Parallelogram', aFixed);

})



// Rhombus calculation
document.getElementById('rhombus-button').addEventListener('click', function(){
    // get input values
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    // Validation
    if (isNaN(d1) || isNaN(d2) || d1 < 0 || d2 < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = 0.5*d1*d2;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Rhombus', aFixed);

})





// Pentagon calculation
document.getElementById('pentagon-button').addEventListener('click', function(){
    // get input values
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');

    // Validation
    if (isNaN(p) || isNaN(b) || p < 0 || b < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = 0.5*p*b;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Pentagon', aFixed);

})



// Ellipse calculation
document.getElementById('ellipse-button').addEventListener('click', function(){
    // get input values
    const A = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    // Validation
    if (isNaN(A) || isNaN(b) || A < 0 || b < 0) {
        alert('Please provide positive value');
        return;
    }

    // Calculation
    const a = 3.1415*A*b;
    const aFixed = a.toFixed(2);

    // Show the result
    createElement('Ellipse', aFixed);

})