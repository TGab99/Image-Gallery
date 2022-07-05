let images = document.getElementsByClassName("pic");
let show_image = document.getElementById("show-image");
let image_content = document.getElementById("image-content");
let close = document.getElementById("close");

for(let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        show_image.style.display = "block";
        image_content.src = this.src;
    }
}

close.onclick = function() {
    show_image.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == show_image) {
        show_image.style.display = "none";
    }
}