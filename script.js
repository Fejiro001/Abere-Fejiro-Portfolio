var menu = document.getElementById("menu");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var twitter = document.getElementById("twitter");
var resume = document.getElementById("resume");
var logo = document.getElementById("logo");
var nav = document.getElementById("nav_column")
var about_section = document.getElementById("about_section");


function toggleFunction() {
  menu.classList.toggle("change")
  // nav.style.display = "block"
  // nav.classList.add("nav_column")
  // nav.classList.remove("logo")
}

function gitHub() {
  gitHub.onclick = window.open("https://github.com/Fejiro001")
}

function linkedIn() {
  linkedin.onclick = window.open("https://www.linkedin.com/in/fejiro-abere-487b08161/")
}

function twitTer() {
  twitTer.onclick = window.open("https://twitter.com/aberefejiro")
}

function reSume() {
  resume.onclick = window.open("https://drive.google.com/file/d/16ua7cmVPR2ziV_b3nAHqhC6yRlNkN_5c/view?usp=sharing")
}