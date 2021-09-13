/* Developed by: Team 1: Perrault Christopher, Fried Norman, White Christopher, Banshchikov Dmitri, Decelles Anthony

/* Script Date: September 10, 2021 */

window.onscroll = function () { stickyFunction() };

function stickyFunction() {
  if (document.body.scrollTop > 100) {
    document.getElementsByClassName("container").className = "sticky";
}
}