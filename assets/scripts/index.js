
    document.addEventListener("DOMContentLoaded", function(event) {
        fetch("https://api.nasa.gov/planetary/apod?r8rmE2Uz0jdt7tZBHiWfcOKczCP1j7Cxbm1fpOcc")
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
