// Smooth transition for the sections

const anchors = [].slice.call(document.querySelectorAll('a.nav-link')),
      animationTime = 900,
      framesCount = 60;

anchors.forEach(function(item) {
  // remove default statement
  item.addEventListener('click', function(e) {
    e.preventDefault();

    // coordinate to Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;


    let scroller = setInterval(function() {
      // scroll per tact
      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // time of interval
    }, animationTime / framesCount);
  });
});
