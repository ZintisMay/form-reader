window.onload = function () {
  let forms = document.getElementsByTagName("form");
  for (var x = 0; x < forms.length; x++) {
    let f = forms[x];
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("You submitted your form. Check your inspector console.");
      console.log("Form Data Submitted:");
      new FormData(e.target);
      let data = new FormData(e.target);
      for (var key of data.keys()) {
        if (data.get(key) !== "") {
          console.log(
            "NAME:",
            key,
            "VALUE:",
            data.get(key),
            typeof data.get(key)
          );
        } else {
          console.log(key, "is empty");
        }
      }
    });
  }
};
