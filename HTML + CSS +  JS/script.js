const open_photo = document.getElementById('skill-block-photo');
const open_illustrator = document.getElementById('skill-block-illustrator');
const open_git = document.getElementById('skill-block-git');
const open_after = document.getElementById('skill-block-after');
const open_sketch = document.getElementById('skill-block-sketch');
const open_css3 = document.getElementById('skill-block-css3');
const open_pagespeed = document.getElementById('skill-block-pagespeed');
const open_seo = document.getElementById('skill-block-seo');
const close = document.getElementById('close');
const modal_cotainer = document.getElementById('modal-container');
const modal_icon = document.getElementById('modal-icon');
const modal_title = document.getElementById('modal-title');

open_photo.addEventListener('click', () => {
    modal_title.innerHTML = "Photoshop";
    modal_icon.classList.add('photo');
    modal_cotainer.classList.add('show');
});
open_illustrator.addEventListener('click', () => {
    modal_title.innerHTML = "Illustrator";
    modal_icon.classList.add('illus');
    modal_cotainer.classList.add('show');
});
open_git.addEventListener('click', () => {
    modal_title.innerHTML = "Git";
    modal_icon.classList.add('git');
    modal_cotainer.classList.add('show');
});
open_after.addEventListener('click', () => {
    modal_title.innerHTML = "After Effects";
    modal_icon.classList.add('after');
    modal_cotainer.classList.add('show');
});
open_sketch.addEventListener('click', () => {
    modal_title.innerHTML = "Sketch";
    modal_icon.classList.add('sketch');
    modal_cotainer.classList.add('show');
});
open_css3.addEventListener('click', () => {
    modal_title.innerHTML = "CSS3 ANIMATION";
    modal_icon.classList.add('css3');
    modal_cotainer.classList.add('show');
});
open_pagespeed.addEventListener('click', () => {
    modal_title.innerHTML = "Pagespeed insights";
    modal_icon.classList.add('pagespeed');
    modal_cotainer.classList.add('show');
});
open_seo.addEventListener('click', () => {
    modal_title.innerHTML = "Seo";
    modal_icon.classList.add('seo');
    modal_cotainer.classList.add('show');
});

close.addEventListener('click', () => {
    modal_icon.classList.remove('photo');
    modal_icon.classList.remove('illus');
    modal_icon.classList.remove('git');
    modal_icon.classList.remove('after');
    modal_icon.classList.remove('sketch');
    modal_icon.classList.remove('css3');
    modal_icon.classList.remove('pagespeed');
    modal_icon.classList.remove('seo');
    modal_cotainer.classList.remove('show');
});




