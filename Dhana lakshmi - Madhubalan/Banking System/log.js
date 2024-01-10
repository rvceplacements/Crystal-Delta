function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  localStorage.setItem("name", username);
  // Basic form validation
  if (username === '' || username === null) {
      document.getElementById('error').innerText = 'Please fill in all fields.';
      return;
  } else if(password === '' || password <= 4){
      document.getElementById('error1').innerText = 'Password must be 6 Characters';
  }
  else{
    window.location.href="index1.html";
  }
  
  // Simulate form submission to Flask backend
  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
  })
  .then(response => response.json())
  .then(data => {
      if (data.message === 'Login successful') {
          // Redirect or display success message as needed
          alert('Login successful');
      } else {
          // Display error message
          document.getElementById('error').innerText = 'Login failed. Please try again.';
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.addEventListener('DOMContentLoaded', function() {
    const popupButton = document.getElementById('button');
    const popupButton1 = document.getElementById('button1');
    const popupButton2 = document.getElementById('button2');
    const popupBackground = document.getElementById('popupBackground');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
  
    function showPopup() {
      popupBackground.style.display = 'block';
      popup.style.display = 'block';
    }
  
    function closePopupBox() {
      popupBackground.style.display = 'none';
      popup.style.display = 'none';
    }
  
    popupButton.addEventListener('click', showPopup);
    popupButton1.addEventListener('click', showPopup);
    popupButton2.addEventListener('click', showPopup);
    closePopup.addEventListener('click', closePopupBox);
  });
 
  document.addEventListener("DOMContentLoaded",function(){

    var gname=document.getElementById('use');
  
    var sname=localStorage.getItem("name")
    gname.innerHTML=sname;
    });
    document.addEventListener("DOMContentLoaded", function(){
      var gnames = document.getElementsByClassName('ACname');
      var sname = localStorage.getItem("name");
  
      // gnames is a collection, so we need to iterate through it
      for (var i = 0; i < gnames.length; i++) {
          gnames[i].innerHTML = sname;
      }
  });
function resetForm() {
  document.getElementById("Account").selectedIndex = 0;
  document.getElementById("BeneficiaryAccount").selectedIndex = 0;
  document.getElementById("rupees").value = "";
  document.getElementById("textarea").value = "";
}
//   document.getElementById("reset").addEventListener("click", function() {
//     document.getElementById("Account").selectedIndex = 0;
//     document.getElementById("BeneficiaryAccount").selectedIndex = 0;
//     document.getElementById("rupees").value = "";
//     document.getElementById("textarea").value = "";
// });
document.getElementById('send').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Show SweetAlert message when the button is clicked
  Swal.fire({
      icon: 'success',
      title: 'Transaction Successful',
      showConfirmButton: false,
      timer: 1500 // Automatically close after 1.5 seconds
  });
});