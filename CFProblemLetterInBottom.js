// ==UserScript==
// @name     CFProblemLetterInBottom
// @include  https://codeforces.com/*/standings
// @version  1
// @grant    none
// ==/UserScript==

var standings = document.getElementsByClassName('standings')[0];
var tbody = standings.getElementsByTagName('tbody')[0];
var header = tbody.firstElementChild;
var footer = document.createElement('tr');

for (var i = 0; i < header.children.length; ++i) {
	var tr = document.createElement('td');
  
  if (i >= 4) {
    tr.innerHTML = header.children[i].innerHTML;
  }
  
  footer.appendChild(tr);
}

tbody.append(footer);
