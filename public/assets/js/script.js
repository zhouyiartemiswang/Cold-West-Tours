// On page load
$(document).ready(function () {
    // Get sidenav element with class sidenav
    var elem = document.querySelector(".sidenav");

    // Create new sidenav instance 
    var instance = new M.Sidenav(elem); 

    // Initiate sidenav
    $(".sidenav").sidenav();

    // If clicked on hamburger icon, open sidenav
    $("#menu-icon").on("click", function () {
        instance.open();
    });
    
    // If clicked on places other than sidenav, close sidenav
    $(".container").on("click", function () {
        instance.close();
    });

    $('.collapsible').collapsible({
        constrain_width: false
    });

    // $('.carousel').slick({
    //     variableWidth: true
    // });

    $('.carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


    // $("#star-icon-filled").on("click", function () {
    //     $.ajax({
    //         type: "PUT",
    //         url: "/activity",
    //         success: function (result) {
    //             console.log(result);
    //         }
    //     })
    //     // $("#star-icon-filled").html(`<i id="star-icon-empty" class="material-icons">star_border</i>`);
    //     // $("#star-icon-filled").html("star_border");

    // });
    
});
function activityFav(icon, id, username, resort, userId){
    if(icon.textContent === "star"){
        const userObj = {
            username : username,
            fav_activity : null,
            fav_resort : resort
        }
        $.ajax({
            method : "PUT",
            url : `/user/${userId}`,
            data : userObj
        }).then(function (apiResponse) {
            console.log(apiResponse[0]);
            console.log(`removing : ${id}`);
            icon.textContent = "star_border";
        });
    }
    else{
        const userObj = {
            username : username,
            fav_activity : id,
            fav_resort : resort
        }
        $.ajax({
            method : "PUT",
            url : `/user/${userId}`,
            data : userObj
        }).then(function (apiResponse) {
            console.log("hi");
            console.log(apiResponse[0]);
            console.log(`adding : ${id}`);
            icon.textContent = "star";
        });
    }
}

function resortFav(icon, id, username, activity, userId){
    if(icon.textContent === "star"){
        const userObj = {
            username : username,
            fav_activity : activity,
            fav_resort : null
        }
        $.ajax({
            method : "PUT",
            url : `/user/${userId}`,
            data : userObj
        }).then(function (apiResponse) {
            console.log(apiResponse[0]);
            console.log(`removing : ${id}`);
            icon.textContent = "star_border";
        });
    }
    else{
        const userObj = {
            username : username,
            fav_activity : activity,
            fav_resort : id
        }
        $.ajax({
            method : "PUT",
            url : `/user/${userId}`,
            data : userObj
        }).then(function (apiResponse) {
            console.log("hi");
            console.log(apiResponse[0]);
            console.log(`adding : ${id}`);
            icon.textContent = "star";
        });
    }
}

function delActivity(username, resort, userId){
    const userObj = {
        username : username,
        fav_activity : null,
        fav_resort : resort
    }
    $.ajax({
        method : "PUT",
        url : `/user/${userId}`,
        data : userObj
    }).then(function (apiResponse) {
        window.location.reload();
    });
}

function delResort(username, activity, userId){
    const userObj = {
        username : username,
        fav_activity : activity,
        fav_resort : null
    }
    $.ajax({
        method : "PUT",
        url : `/user/${userId}`,
        data : userObj
    }).then(function (apiResponse) {
        window.location.reload();
    });
}

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, {});
//   });


$('.dropdown-trigger').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    constrainWidth: false, //changed width of dropdown due to content size 
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });