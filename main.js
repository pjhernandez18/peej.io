function toggle() {
    var sec = document.getElementById('sec');
    var navigation = document.getElementById('navigation');
    sec.classList.toggle('active')
    navigation.classList.toggle('active')
}
var blog = document.getElementById('blog-sec');
function expandleft() {
    blog.classList.add('hover-left');
    blog.classList.remove('hover-right');
}
function expandright() {
    blog.classList.add('hover-right');
    blog.classList.remove('hover-left');
}

function resize(x) {
    blog.classList.remove('hover-left');
    blog.classList.remove('hover-right');
}

