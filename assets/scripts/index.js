
    document.addEventListener("DOMContentLoaded", function(event) {
        fetch("https://api.nasa.gov/planetary/apod")
            .then(response => response.json())
            .then(user => 
                {
                    if (user.media_type == "video")
                    {document.getElementById("video-api")
                    .src = user.url;
                    document.getElementById
                    ("date").innerText = user.date;
                    document.getElementById
                    ("title").innerText = user.title;
                    document.getElementById
                    ("explanation").innerText = user.explanation;}

                    if (user.media_type == "image") {document.getElementById("img-api")
                    .src = user.url;
                    document.getElementById
                    ("date").innerText = user.date;
                    document.getElementById
                    ("title").innerText = user.title;
                    document.getElementById
                    ("explanation").innerText = user.explanation;}
                    
                    
            })
            .catch(error => console.log(error));
        });
