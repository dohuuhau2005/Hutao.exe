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
function toggleContent(elementId) {
    const element = document.getElementById(elementId);

    if (element) { // Check if element exists
        if (element.style.display === 'none') {
            element.style.display = 'block'; // Show if hidden
        } else {
            element.style.display = 'none'; // Hide if visible
        }
    } else {
        console.error(`Element with ID "${elementId}" not found.`); // Informative error message
    }
}
