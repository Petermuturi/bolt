 Parse.initialize("iEt3ery7NfF8g8zNi4qag6SQuBF5IywH1kDRMyQf", "oD2EviF5jhAcaB8PJzOx2TjY0RWYFHfRXkmdc7Ky");
$("#logout").hide();
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
           $("#logout").show();
        $("#in").hide();
        $("#up").hide();
     	},
     	error:function(user, error){
           alert("Something went wrong. You weren't signed up\n"+error.message);
     	}
     });  

 });


  $("#login").submit(function(event){
  	event.preventDefault();
  	var name = $("#login-username").val();
  	var password = $("#login-password").val();

  	Parse.User.logIn(name, password, {

  		success:function(){
        alert("Welcome Back "+ name);
        $("#logout").show();
        $("#in").hide();
        $("#up").hide();
  	},
      error:function(){
        alert("Incorrect username or password");
      }
  });

  });
  

  $("#logout").click(function(event){
  	$("#up").show();
  	$("#in").show();
  	$("#logout").hide();
  	   Parse.User.logOut();
  });


var commentFrozen = Parse.Object.extend("commentFrozen");
  $("#commentFreeze").submit(function(event){
  	   event.preventDefault();
  	   var likefr = $("#likef").val();
  	   var dislikefr = $("#dislikef").val();
  	   var commentfr = $("#textareaf").val();

  	   var newFrozen = new commentFrozen();
  	   newFrozen.set("likefreeze", likefr);
  	   newFrozen.set("dislikefreeze", dislikefr);
  	   newFrozen.set("commentFreeze", commentfr);

  	   newFrozen.save({
  	   	success:function(){
         
  	   },
        error:function(error){
           alert("Something went wrong, your comment wasn't successfully\n"+error.message);
        }
  	});
  });


  function getFrz(){
  	var frzd = new Parse.Query(commentFrozen);
  	  frzd.find({
  	  	success:function(freeze){
  	  		var showfr ="";
          for(var x in freeze){
          	var commentFreeze = freeze[x].get("commentFreeze");
          	showfr += "<div>";
          	showfr += "<p>"+commentFreeze+"</p>";
          	showfr += "</div>"; 

          }
          $("#frzcom").html(showfr);
  	  },
       error:function(error){
       	alert("Couldn't load comments\n"+error.message);
       }
  	});
  }
  getFrz();