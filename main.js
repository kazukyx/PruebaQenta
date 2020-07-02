function getFilteredRequest()
{
   axios.get('https://www.balldontlie.io/api/v1/players')
     .then(function (response) {
      console.log(response);
      var obj = response.data.data;

      var text ;
      for (i = 0; i < obj.length; i++) {
        text += obj[i].id + " - " + obj[i].first_name + " - " + obj[i].last_name + " - " + obj[i].position + '<br>';
      }
      document.getElementById("resultado").innerHTML = text;

     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}


function organizar(){
  axios.get('https://www.balldontlie.io/api/v1/players')
     .then(function (response) {
      console.log(response);
      var obj = response.data.data;
      obj.sort(function (a, b) {
      if (a.first_name > b.first_name) {
        return 1;
      }
      if (a.first_name < b.first_name) {
        return -1;
      }
      // a must be equal to b
      return 0;
      });

      document.getElementById("resultado").innerHTML = obj[0].id;

      var text;
      for (i = 0; i < obj.length; i++) {
        text += obj[i].id + " - " + obj[i].first_name + " - " + obj[i].last_name + " - " + obj[i].position + '<br>';
      }
      document.getElementById("resultado").innerHTML = text;

     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}



function posicion(){
  axios.get('https://www.balldontlie.io/api/v1/players')
     .then(function (response) {
      console.log(response);
      var obj = response.data.data;
      obj.sort(function (a, b) {
      if (a.position > b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      // a must be equal to b
      return 0;
      });

      document.getElementById("resultado").innerHTML = obj[0].id;

      var text;
      for (i = 0; i < obj.length; i++) {
        text += obj[i].id + " - " + obj[i].first_name + " - " + obj[i].last_name + " - " + obj[i].position + '<br>';
      }
      document.getElementById("resultado").innerHTML = text;

     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
} 