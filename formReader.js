let forms = document.getElementsByTagName("form");
for (var x = 0; x < forms.length; x++) {
  let f = forms[x];
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    new FormData(e.target);
    let data = new FormData(e.target);
    for (var key of data.keys()) {
      console.log(key, data.get(key));
    }
  });
}
