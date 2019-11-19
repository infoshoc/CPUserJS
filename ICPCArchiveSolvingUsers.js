var maincontent =  document.getElementsByClassName('maincontent')[0]; 
var componentheading = maincontent.getElementsByClassName('componentheading')[0];

if ('Browse Problems' == componentheading.innerHTML)
{
  var table =  maincontent.getElementsByTagName('table')[0]; 
  var tbody = table.getElementsByTagName('tbody')[0]; 
  var trs = tbody.getElementsByTagName('tr');

  for (var i = 0; i < trs.length; ++i)
  {
    var tds = trs[i].getElementsByTagName('td');

    if ('sectiontableheader' == trs[i].className)
    {
      tds[4].innerHTML = 'Total Users (Solving Users)/ Solving %';
    }
    else
    {
      var totalUsers = Number(tds[5].innerHTML);
      var divs = tds[6].getElementsByTagName('div');
      var solvingPercentDiv = divs[2]
      var solvingPercentString = solvingPercentDiv.innerHTML;
      var solvingPercent = solvingPercentString.substring(0, solvingPercentString.length-1);
      var solvingUsers = Math.round(totalUsers * solvingPercent / 100);                                       
      tds[5].innerHTML += '(' + String(solvingUsers) + ')';
    }
  }
}

