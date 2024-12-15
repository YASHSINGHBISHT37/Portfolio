function menuWrapper() {
  var menu = document.querySelector(".right-nav p");
  var flag = 0;
  var full = document.querySelector("#menu-wrapper");
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      flag = 1;
    } else {
      full.style.top = "-110%";
      flag = 0;
    }
  });
}

function topBar() {
  let prevScrollPos = window.scrollY;
  const navbar = document.getElementById("marquee");

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up: show the navbar
      navbar.style.top = "0";
    } else {
      // Scrolling down: hide the navbar
      navbar.style.top = "-8%"; // Adjust depending on the height of your navbar
    }

    prevScrollPos = currentScrollPos;
  };
}

function loader() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 3600);
}

function smoothScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  });
}

menuWrapper();
// topBar();
loader();
// smoothScroll()
