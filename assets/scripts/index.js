
    document.addEventListener("DOMContentLoaded", function(event) {
        fetch("https://api.nasa.gov/planetary/apod?api_key=nZnbOGViqyQffzHxGJnhqJwPghyZqb7AfEMb6lKM")
            .then(response => response.json())
            .then(user => 
                {
                    document.getElementById("img-api")
                    .src = user.url;
                    document.getElementById
                    ("date").innerText = user.date;
                    document.getElementById
                    ("title").innerText = user.title;
                    document.getElementById
                    ("explanation").innerText = user.explanation;
            })
            .catch(error => console.log(error));
        });
