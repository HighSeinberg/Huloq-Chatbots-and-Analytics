


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzuXNWpWBoOMUr5AFUE9r470AkytPWjDQ",
    authDomain: "contact-us-page-2ad71.firebaseapp.com",
    databaseURL: "https://contact-us-page-2ad71.firebaseio.com",
    projectId: "contact-us-page-2ad71",
    storageBucket: "contact-us-page-2ad71.appspot.com",
    messagingSenderId: "446496095888",
    appId: "1:446496095888:web:f75b9618a1875b7d366215"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messageRef = firebase.database().ref('Message');

  function getIDValue(id)
  {
      return document.getElementById(id).value;
  }
  
  document.getElementById('contact_form').addEventListener('submit',submit);
  
  function submit(e)
  {
      e.preventDefault();
      console.log(123);
  
      var name = getIDValue('name');
      var email = getIDValue('email');
      var message = getIDValue('message');
  
      console.log(name);
  
      saveMessage(name,email,message);
  
      document.querySelector('#sendmessage').style.display = 'block';
  
      setTimeout(function()
          {
              document.querySelector('#sendmessage').style.display = 'none';
          },3000);
  }
  
  function saveMessage(name,email,message)
  {
      var NewMessageRef = messageRef.push();
      NewMessageRef.set({
          name: name,
          email: email,
          message: message
      });
  }