 Parse.initialize("iEt3ery7NfF8g8zNi4qag6SQuBF5IywH1kDRMyQf", "oD2EviF5jhAcaB8PJzOx2TjY0RWYFHfRXkmdc7Ky");


 $("#signup").submit(function(event){
     event.preventDefault();

     var name = $("#signup-username").val();
     var email = $("#signup-email").val();
     var pass = $("#signup-password").val();
     var terms = $("#accept-terms").val();

     var user = new Parse.User();
     user.set("username", name);
     user.set("email", email);
     user.set("password", pass);
     user.set("terms", terms);

     user.signUp(null, {
     	success:function(user){
           alert("You were successfully Signed up "+ name);
     	},
     	error:function(user, error){
           alert("Something went wrong. You weren't signed up\n"+error.message);
     	}
     });  

 });


  $("#login").submit(function(event){
  	event.preventDefault();
  	var name = $("#login-username").val();
  	var password = $("#login-username").val();

  	Parse.User.logIn(name, password, {

  		success:function(){
        alert("Welcome Back "+ name);
  	},
      error:function(){
        alert("Incorrect username or password");
      }
  });

  });
  

  $("#logout").click(function(event){
  	   Parse.User.logOut();
  });

