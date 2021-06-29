function imageset(imagedata) {
    document.querySelector('#image').src = imagedata.src;
    document.querySelector('#popup').classList.add('display');

}

function next() {
    let a = document.images;
    let imagepath = document.querySelector('#image');
    for (let index = 1; index < a.length; index++) {
        if (imagepath.src == a[index].src) {
            if (index <= a.length) {
                imagepath.src = a[++index].src;

            }
        }
    }
}

function previous() {
    let a = document.images;
    let imagepath = document.querySelector('#image');
    for (let index = 1; index < a.length; index++) {
        if (imagepath.src == a[index].src) {
            if (index >= 1) {
                imagepath.src = a[--index].src;
                break;

            }
        }
    }
}

function close() {
    document.querySelector('#popup').classList.remove('display');
}