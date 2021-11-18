// app.js

const date = document.getElementById("update_date");
const newCase = document.getElementById("new_case");
const totalCase = document.getElementById("total_case");
const newDeath = document.getElementById("new_death");
const totalDeath = document.getElementById("total_death");
const newRecovered = document.getElementById("new_recovered");
const totalRecovered = document.getElementById("total_recovered");

const getData = () => {
    axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all").then(res => {
        console.log(res.data);
        date.innerHTML = res.data[0].update_date;
        newCase.innerHTML = res.data[0].new_case + " ราย";
        totalCase.innerHTML = res.data[0].total_case + " ราย";
        newDeath.innerHTML = res.data[0].new_death + " ราย";
        totalDeath.innerHTML = res.data[0].total_death + " ราย";
        newRecovered.innerHTML = res.data[0].new_recovered + " ราย";
        totalRecovered.innerHTML = res.data[0].total_recovered + " ราย";
    }).catch(error => {
        console.error(error);
    });
}