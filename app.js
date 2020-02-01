let i = document.getElementById("txt");
let j = document.getElementById("json");
let g = document.getElementById("api");

i.addEventListener("click", getText);
j.addEventListener("click", getJson);
g.addEventListener("click", getapi);
function getText() {
  fetch("data.txt")
    .then(function(res) {
      console.log(res);
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("txtdata").innerHTML = `<b>${data}</b>`;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getJson() {
  fetch("jsondata.json")
    .then(function(res) {
      console.log(res);
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      out = "";
      data.forEach(jsn => {
        out += `<li>${jsn.id}</li>
            <li>${jsn.name}</li>`;
      });
      document.getElementById("jsond").innerHTML = `<b>${out}</b>`;
    });
}

function getapi(e) {
  fetch("https://api.github.com/users")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      out = "";
      data.forEach(jsn => {
        out += `<li>${jsn.login}</li>
            <li>${jsn.id}</li>`;
      });
      document.getElementById("apii").innerHTML = `<b>${out}</b>`;
    });
}
