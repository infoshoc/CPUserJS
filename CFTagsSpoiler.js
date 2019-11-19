// ==UserScript==
// @name     CFTagsSpoiler
// @include  https://codeforces.com/contest/*/problem/*
// @version  1
// @grant    none
// ==/UserScript==

function hide(element) {
  element.style.display = 'none';
}
function show(element) {
  element.style.display = 'block';
}
function slideToggle(element) {
  if (element.style.display == 'none') {
    show(element);
  } else {
    hide(element);
  }
}


var headerDiv = document.evaluate("//div[contains(text(), 'Problem tags') or contains(text(), 'Теги задачи')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var tagsDiv = headerDiv.nextElementSibling;
hide(tagsDiv);
headerDiv.style.cursor = 'pointer';
headerDiv.addEventListener("click", function(){slideToggle(tagsDiv)});
