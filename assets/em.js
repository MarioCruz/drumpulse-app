// Rebuilds the contact link in the browser so the address is not in the page source for scrapers.
document.querySelectorAll('a.em').forEach(function (a) {
  var addr = a.getAttribute('data-u') + '@' + a.getAttribute('data-d');
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});
