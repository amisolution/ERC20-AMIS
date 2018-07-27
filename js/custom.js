// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2017 15:37:25").getTime();

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
              "name":"Muhammad Shakil",
              "designation":"Advisor",
              "description":`With a Master's Degree in Information & Telecommunication Technology, he brings over 10 years of experience in advising on new companies.  He is the CEO & CO-Founder of JatBit, Co-Founder of Bandz Network and currently a Doctorate candidate at KAIST.
              He has been formidable advisor for 5 successful ICOâ€™s in the past 2 years, including FarmaTrust, Dellbit and OpenChain.  He is the Editor at IEEE (the worldâ€™s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity).   Previously, he worked as Deputy Project Director Cyber Incident Response Team at Government of Pakistan and IT Consultant of International Taekwondo Foundation.  He has successfully completed 8 certifications in Security and has had 3 publications.
              `,
              "pictureURL":"images/shakil.png",
              "linkedIn":"https://www.linkedin.com/in/muhammad-shakil/ "
          
          },
          { 
              "id":"2",
              "name":"Adrian Arora ",
              "designation":"Founder & Investor",
              "description":`Adrian is the founder of AMICORUM.LIVE.  He has been an ICO Strategist and Advisor of 2 successful ICOâ€™s in 2017.  He is a serial entrepreneur and venture crypto investor for the past 2 years.   He brings over 11 years of growth experience working for a top technology SaaS Company in US. 
              A visionary and aspirer to develop world class peer-peer ecosystem for people around the world.
              `,
              "pictureURL":"images/adrian.jpg",
              "linkedIn":"https://www.linkedin.com/in/adrianarora "
          
          },
          { 
              "id":"3",
              "name":"Sam Kalra",
              "designation":"CO-Founder and Head of Investor Relations",
              "description":`Sam is a business Professional with over 8 years of experience in functional domains, primarily in Client/Account Management, Technology Solutions and Operations.
              With overall exposure of 6 years working in 3 different countries, she is a capable leader who is result oriented.  She has been an active investor in Crypto Currencies for the past 3 years.
              `,
              "pictureURL":"images/sam.jpg",
              "linkedIn":"https://www.linkedin.com/in/sam-arora/ "
          
          },
          { 
              "id":"4",
              "name":"Kanwar Arora",
              "designation":"Head of Financial Analysis ",
              "description":`Kanwar joined AMICORUM.LIVE as the Head of Financial Analysis.  A Lead Analyst by occupation, he is a performance driven operations controller with experience in financial management.  He will provide strategic and financial planning advice and lead the corporate forecasting process.  He has been a proven analytical professional with project management and project execution at the top level.  `,
              "pictureURL":"images/kanwar.JPG",
              "linkedIn":"https://www.linkedin.com/in/kanwar-arora-0b82a966/ "
          
          },
          { 
              "id":"5",
              "name":"Sang Hyeon",
              "designation":"Community Manager â€“ Korea",
              "description":`Sang Hyeon is one of the famous blockchain evangelists in Korea. Not only did he invest in various cryptocurrencies, he is also an influential blogger to introduce various cryptocurrencies.  He was president of the National Youth Economics and Management Association and hosted a national youth enterprise planning camp. He is currently attending Kookmin University.`,
              "pictureURL":"images/sang.jpg",
              "linkedIn":"https://www.linkedin.com/in/sang-hyeon-eom-76626a157/ "
          
          },
          { 
              "id":"6",
              "name":"Damira Baigozha",
              "designation":"Marketing & ICO SMM â€“ SE - ASIA",
              "description":`Damira is our ICO SMM â€“ Marketing and Business Development Associate.  She brings 3 years of combined experience in ICO Marketing, wealth generation for ICOâ€™s and outreach.  `,
              "pictureURL":"images/damira.JPG",
              "linkedIn":"https://www.linkedin.com/in/damira-baigozha-9ab166143/ "
          
          },
          { 
              "id":"7",
              "name":"Ali Zain ",
              "designation":"Blockchain Development",
              "description":`Ali Zain is the CEO of Ideofuzion with expertise in ICO website development, smart contract generation and platforms on blockchain technology.  He has been responsible for successfully helping his clients launch 5 different ICO projects in the past years and worked on 15 different website development projects.  He has also worked with iScrybe as a front end developer for the product Convo for about 1.5 years. `,
              "pictureURL":"images/az.jpg",
              "linkedIn":"https://www.linkedin.com/in/ali-zain-a31a0932/ "
          
          },
          { 
              "id":"8",
              "name":"Simon Cocking ",
              "designation":"Advisor",
              "description":`Simon Cocking is Senior Editor at Irish Tech News - now getting 470,000 unique monthly views, Editor in Chief at CryptoCoinNews, and freelances for Sunday Business Post, Irish Times, Southern Star, IBM, G+D, and others. He is a top ranked member of the â€˜People of Blockchainâ€™ (currently ranked at #1 / 18,000).  He is also a business mentor and advisor working with 80+ successful ICOs to date. He also has been named in the Global Twitter Influencer lists in the last 12 months. He is an accomplished public speaker at events including TEDx, Web Summit, Dublin Tech Summit, and overseas in Dubai, Singapore, Moscow, Tel Aviv, Madrid, Tbilisi, Riga, Porto, Dublin and Helsinki in the last 12 months.He has been based in Ireland for over 22 years and has cofounded or founded seven successful companies. `,
              "pictureURL":"images/Simon.png",
              "linkedIn":"https://www.linkedin.com/in/simon-cocking-20540135/"
          
          },
          { 
            "id":"9",
            "name":"Amar Preet Singh",
            "designation":"Advisor",
            "description":`Amar is one of the leading advocates and contributing member of Global Blockchain community, Senior Advisor of Global Blockchain Foundation, ICOBench rated top 'Expert' and is Advisory Board Member of many Blockchain projects around the world.
            A Technology/Digital enthusiast and a seasoned professional with years of experience in operations, consulting and innovation of the Tech industry, Amarâ€™s background includes working with Tier 1 firms such as Microsoft (APOC Operation Manager), the World Bank (Senior Infrastructure Consultant and Economic Advisor), Airbus etc., and advising startups and speaking at various technology forums. His educational background includes B.E. (Computer Science) and three Masters degrees from three Universities around the globe (including MBA from National University of Singapore).
            Amar has joined AMICORUM.LIVE  as an Advisor to increase footprint in the SE Asia region and helping with investor relations.
            `,
            "pictureURL":"images/amar.png",
            "linkedIn":"https://www.linkedin.com/in/amarpreetsingh2/"
        
        },
        { 
          "id":"10",
          "name":"Doyeop Kim",
          "designation":"Advisor",
          "description":`As a former official of the United Nations, Do brings extensive experiences working in conflict and post-conflict settings. Having been appointed to various leadership roles, most recently served as Tactical Commanding Officer, he has proven track record to strategies and lead various operations. Joining AMICORUM.LIVE, Do will help building investor relations in South Korea.`,
          "pictureURL":"images/do.png",
          "linkedIn":"https://www.linkedin.com/in/doyeop-kim-2726b4154/"
      
      },
      { 
        "id":"11",
        "name":"Andrea Rogers",
        "designation":"Marketing Manager, ICO Success Lead",
        "description":`A Passionate marketer with over 3 years of experience in Marketing and Social Media. Managing SMM and Social Media for AMICORUM.LIVE.`,
        "pictureURL":"images/andrea.png",
        "linkedIn":"https://www.linkedin.com/in/andrea-rogers-079412163/"
    
    },
    { 
      "id":"12",
      "name":"Zhanel Bekmukhanbetova",
      "designation":"Social Media and Community Manager",
      "description":`Zhanel is our Social Media and Community Manager. She brings 2 years of experience in community management, engagement, and business development in Korea and Russia.`,
      "pictureURL":"images/zhanel.jpg",
      "linkedIn":"https://www.linkedin.com/in/zhanel/"
  
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
