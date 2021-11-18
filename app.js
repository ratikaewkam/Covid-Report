// app.js

const getData = () => {
    axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all").then(res => {
        console.log(res.data);
    }).catch(error => {
        console.error(error);
    });
}