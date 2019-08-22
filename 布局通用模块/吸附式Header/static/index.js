(function() {
  let fixedNavbar = document.getElementById("fixed");
  let staticNavbar = document.getElementById("static");
  //staticNavbar自身的高度加上staticNavbar距离浏览器的高度
  let y = staticNavbar.offsetHeight + staticNavbar.offsetTop;

  let positionY = 0;

  let timer = window.setInterval(function() {
    positionY += 1;
    if (positionY <= staticNavbar.offsetTop) {
      window.scroll(0, positionY);
    } else {
      clearInterval(timer);
    }
  });

  function show() {
    fixedNavbar.style.top = "0px";
  }

  function hide() {
    fixedNavbar.style.top = "-65px";
  }

  window.addEventListener("scroll", function() {
    if (window.scrollY > y) {
      show();
    } else {
      hide();
    }
  });
})();
