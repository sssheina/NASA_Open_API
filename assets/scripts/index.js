// document.addEventListener("DOMContentLoaded", function (event) {

//   fetch("https://api.nasa.gov/planetary/apod?api_key=nZnbOGViqyQffzHxGJnhqJwPghyZqb7AfEMb6lKM")

//     .then(response => response.json())
//     .then()
      

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
                  ("explanation").innerText = user.explanation;
                  
          })
          .catch(error => console.log(error));
      });
// btnData.addEventListener("click", getData);

// document.addEventListener("DOMContentLoaded", function(event) {
//   fetch("https://api.nasa.gov/planetary/apod?api_key=<nZnbOGViqyQffzHxGJnhqJwPghyZqb7AfEMb6lKM>")
//       .then(response => response.json())
//       .then(user => 
//           {
//               document.getElementById("avatar")
//               .src = user.avatar_url;
//               document.getElementById
//               ("userName").innerText = user.name;
//       })
//       .catch(error => console.log(error));
//   });

// import requests url = "https://api.nasa.gov/planetary/apod?api_key=<nZnbOGViqyQffzHxGJnhqJwPghyZqb7AfEMb6lKM>"
// response = requests.get(url)
// print(response.json())