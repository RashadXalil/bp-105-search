const wrapper = document.getElementById("wrapper");
const input = document.getElementById("inp");
let id = 1;
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    let innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      innerHTML += ` <tr>
          <th scope="row">${id}</th>
          <td>${data[i].name.common}</td>
          <td>${data[i].capital}</td>
        </tr>`;
      id++;
    }
    wrapper.innerHTML = innerHTML;
  });
input.addEventListener("change", function (e) {
  fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      let innerHTML = "";
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        innerHTML += ` <tr>
            <th scope="row">${id}</th>
            <td>${data[i].name.common}</td>
            <td>${data[i].capital}</td>
          </tr>`;
        id++;
      }
      wrapper.innerHTML = ``;
      wrapper.innerHTML = innerHTML;
    });
});
