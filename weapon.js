var div = document.getElementById('Refinement');
var display = 0;
function showhide() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}

