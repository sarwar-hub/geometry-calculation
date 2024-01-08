function createRandomColor() {
    let r = Math.floor( Math.random() * 256 );
    let g = Math.floor( Math.random() * 256 );
    let b = Math.floor( Math.random() * 256 );

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
}

// get cards
let boxes = document.getElementsByClassName('card');
for ( box of boxes ) {
    box.addEventListener('mouseenter', function(){
        let color = createRandomColor();
        this.style.backgroundColor = color;
    })
}

