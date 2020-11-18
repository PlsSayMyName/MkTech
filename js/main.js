$('.carousel').carousel({
  interval: false
})

// Script for searching elem that is broken
let docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth || el.parentElement && el.offsetWidth > el.parentElement.offsetWidth) {
      console.log(el);
    }
  }
);
