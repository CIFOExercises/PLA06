(() => {
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


      for (const item of res) {
        document.querySelector('.table').innerHTML += `
          <tr>
              <td>${item.idteacher}</td>
              <td>${item.nombre}</td>
              <td>${item.tipo === "TC" ? "Teacher" : "Administrator"}</td>
          </tr>
          `
      }
    });
})();


