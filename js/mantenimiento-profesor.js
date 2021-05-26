let data = new FormData();
data.append("tipoconsulta", "A");

let headers = {
  method: "POST",
  body: data
};

fetch("https://alcyon-it.com/PQTM/pqtm_consulta_profesores.php", headers)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((res) => {
    console.log(res);
  });
