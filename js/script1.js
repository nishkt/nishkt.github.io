// The following "show" function allows the different div elements to show and hide according to the buttons pressed by the user. for example, if the user presses "Home", the content for "Home" will show in the "article" element tag
function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}