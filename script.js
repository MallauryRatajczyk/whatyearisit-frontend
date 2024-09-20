fetch('http://localhost:3000/year')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("year").textContent = data.year;
    })