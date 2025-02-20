document.querySelector(".navbar-left").classList.add("visibility");
document.querySelectorAll("a")[1].style.color = "black";

document.querySelector(".menuBar").addEventListener("click", function () {
  document.querySelector(".navbar-left").classList.toggle("visibility");
});
var scrolls = document.querySelectorAll("a");

window.addEventListener("scroll", () => {
  var level = Math.floor(window.scrollY);

  for (var i = 0; i < document.querySelectorAll("a").length; i++) {
    //All anchor tag or a tags
    document.querySelectorAll("a")[i].style.color = "#71bbb2";

    if (level >= 0 && level < 500) {
      //home
      document.querySelectorAll("a")[1].style.color = "black";
      document.querySelectorAll("a")[5].style.color = "black";
    } else if (level > 500 && level < 1000) {
      //feature
      document.querySelectorAll("a")[2].style.color = "black";
      document.querySelectorAll("a")[6].style.color = "black";
    } else if (level > 1000 && level < 1500) {
      //about
      document.querySelectorAll("a")[3].style.color = "black";
      document.querySelectorAll("a")[7].style.color = "black";
    } else if (level > 1500) {
      //contact
      document.querySelectorAll("a")[4].style.color = "black";
      document.querySelectorAll("a")[8].style.color = "black";
    } else {
      document.querySelectorAll("a")[i].style.color = "#71bbb2";
    }
  }
});
