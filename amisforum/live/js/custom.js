// Set the date we're counting down to
var countDownDate = new Date("Jul 01, 2018 15:37:25").getTime();

var url = "https://account.amicorum.live/api" 

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  /*     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s "; */

    
/*   document.getElementById("hours").innerHTML = hours;
  document.getElementById("days").innerHTML = days;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  document.getElementById("hours2").innerHTML = hours;
  document.getElementById("days2").innerHTML = days;
  document.getElementById("mins2").innerHTML = minutes;
  document.getElementById("secs2").innerHTML = seconds; */


  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
 /*    document.getElementById("demo").innerHTML = "EXPIRED"; */
  }
}, 1000);

//var ProgressBar = require('./progressbar.js/dist/progressbar.js')
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var bar = new ProgressBar.Circle(progressBar, {
  color: '#d50707',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#15bdff', width: 6},
  to: { color: '#15bdff', width: 6},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar.text.style.fontFamily = 'pronova';
bar.text.style.fontSize = '3rem';
bar.text.style.color = '#15bdff';
bar.animate(0.80);   // Number from 0.0 to 1.0




var bar2 = new ProgressBar.Circle(progressBar2, {
  color: '#15bdff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#15bdff', width: 6},
  to: { color: '#15bdff', width: 6},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar2.text.style.fontFamily = 'pronova';
bar2.text.style.fontSize = '3rem';
bar2.text.style.color = '#15bdff';
bar2.animate(0.15);   // Number from 0.0 to 1.0





var bar3 = new ProgressBar.Circle(progressBar3, {
  color: '#15bdff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#15bdff', width: 6},
  to: { color: '#15bdff', width: 6},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar3.text.style.fontFamily = 'pronova';
bar3.text.style.fontSize = '3rem';
bar3.text.style.color = '#15bdff';
bar3.animate(0.02);   // Number from 0.0 to 1.0


var bar4 = new ProgressBar.Circle(progressBar4, {
  color: '#15bdff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 6,
  trailWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#15bdff', width: 6},
  to: { color: '#15bdff', width: 6},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + "%");
    }

  }
});
bar4.text.style.fontFamily = 'pronova';
bar4.text.style.fontSize = '3rem';
bar4.text.style.color = '#15bdff';
bar4.animate(0.03);   // Number from 0.0 to 1.0


var acc = document.getElementsByClassName("accordion");
       for (var i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function () {
               this.classList.toggle("active");
               var panel = this.nextElementSibling;
               if (panel.style.display === "block") {
                   panel.style.display = "none";
               } else {
                   panel.style.display = "block";
               }
           });
       }

     

   
       $(".arrow-points-wrap").click(function () {
           console.log($(this).find(".dbl-arr-rotate").attr("src"));
         
           if ($(this).find(".dbl-arr-rotate1").attr("src") == "images/FaqsIcon.png") {
               $(this).find(".dbl-arr-rotate1").attr("src", "images/D.png")
           } else {
               $(this).find(".dbl-arr-rotate1").attr("src", "images/FaqsIcon.png")
           }
       })



       toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }



var email = document.getElementById("emailUpdate");
   email.addEventListener("keydown", function (e) {
     if (e.keyCode === 13) {
      subscribe();
     }
 });

function subscribe(){
  toastr.remove();
     var email = document.getElementById("emailUpdate").value;
     console.log(email);
     var error = false;
     var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if(email == ""){
       toastr["error"]("Please enter the email!");
       error = true;
     }

     if (email != "" && !regex.test(email)) {
       toastr["error"]("Please enter valid email!");
       error = true;
       
     }

if(error){

}
else{

 $('.Sub-loader').show();

 $.ajax({
   url: url + '/user/subscribe/'+email,
   type: 'GET',
   async: true,
   success: function (data) {
     console.log(data);
     if (data.code == 200) {
       $("#emailUpdate").val("");
       toastr["success"]("Congratulations! You have successfully subscribed to our updates.");
       $(".Sub-loader").hide();
     } else {
       toastr["error"](data.message);
       $(".Sub-loader").hide();
     }

   },
   error: function (error) {

     $(".Sub-loader").hide();
   }
 });


}
}



//team js
employees = {
  "teamJson":[
  

          { 
              "id":"1",
              "name":"Laurent G",
              "designation":"Advisor",
              "description":"Short description needed.",
              `,
              "pictureURL":"images/photo.png",
              "linkedIn":"https://www.linkedin.com/in/ "
          
          },
          { 
              "id":"2",
              "name":"Amisolution",
              "designation":"Social Media and Community Manager",
              "description":"Short description needed.",
              `,
              "pictureURL":"images/photo1.jpg",
              "linkedIn":"https://www.linkedin.com/in/"
  
          }


  ]

}

function openModal(elem){



  var obj  = employees.teamJson.find(x=>x.id == elem);
  console.log(obj);

  $(".modal-image").attr("src",obj.pictureURL);
  $(".name-text").text(obj.name);
  $(".desig-text").text(obj.designation);
  $(".desc").text(obj.description);
  $(".linked").attr("href",obj.linkedIn);
  $('#shakil').modal('toggle');
}


function closeModal(){
  $('#shakil').modal('hide');
}

function whitepaper(){
  var win = window.open('english.pdf', '_blank');
if (win) {
    win.focus();
} else {
    alert('Please allow popups for this website');
}
}

var url = "https://account.amicorum.live/api";
$.ajax({
  url: url + "/user/getTokenRemain",
  type: "get",

  data: {

  },
  success: function (response) {

    console.log(response);

    var percentage = response.message;
    var elem = document.getElementById('progress-bar');
    var elem2 = document.getElementById('progress-bar2');
    console.log(percentage);
    elem.style.width = percentage + "%";
    elem2.style.width = percentage + "%";
  },
  error: function (xhr) {
    console.log(error);
    if (xhr.status == 400) {
    }
    else {
    }
  },
  async: false
});
