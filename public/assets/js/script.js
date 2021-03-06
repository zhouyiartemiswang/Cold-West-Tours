// On page load
$(document).ready(function () {
    // Get sidenav element with class sidenav
    const elem = document.querySelector(".sidenav");

    // Create new sidenav instance 
    const instance = new M.Sidenav(elem);

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

    $(".about-background").on("click", function () {
        instance.close();
    });

    $('.carousel').slick({
        nextArrow: '.next',
        prevArrow: '.prev',
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Drop down 
    $('.collapsible').collapsible({
        constrain_width: false
    });

    $('.dropdown-trigger').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        constrainWidth: false, //changed width of dropdown due to content size 
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        coverTrigger: false,
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

});

//////////////////// functions to modify user favorites ////////////////////////////////
// change a user's favorite activity based on star press
function activityFav(icon, id, username, resort, userId) {
    if (icon.textContent === "star") {
        const userObj = {
            username: username,
            fav_activity: null,
            fav_resort: resort
        }
        $.ajax({
            method: "PUT",
            url: `/user/${userId}`,
            data: userObj
        }).then(function (apiResponse) {
            if(apiResponse[0] === 1){
                icon.textContent = "star_border";
            }
        });
    }
    else {
        const userObj = {
            username: username,
            fav_activity: id,
            fav_resort: resort
        }
        $.ajax({
            method: "PUT",
            url: `/user/${userId}`,
            data: userObj
        }).then(function (apiResponse) {
            if(apiResponse[0] === 1){
                icon.textContent = "star";
            }
        });
    }
}

// change a user's favorite resort based on star press
function resortFav(icon, id, username, activity, userId) {
    if (icon.textContent === "star") {
        const userObj = {
            username: username,
            fav_activity: activity,
            fav_resort: null
        }
        $.ajax({
            method: "PUT",
            url: `/user/${userId}`,
            data: userObj
        }).then(function (apiResponse) {
            if(apiResponse[0] === 1){
                icon.textContent = "star_border";
            }
        });
    }
    else {
        const userObj = {
            username: username,
            fav_activity: activity,
            fav_resort: id
        }
        $.ajax({
            method: "PUT",
            url: `/user/${userId}`,
            data: userObj
        }).then(function (apiResponse) {
            if(apiResponse[0] === 1){
                icon.textContent = "star";
            }
        });
    }
}

// remove user's favorite activity based on delete press
function delActivity(username, resort, userId) {
    const userObj = {
        username: username,
        fav_activity: null,
        fav_resort: resort
    }
    $.ajax({
        method: "PUT",
        url: `/user/${userId}`,
        data: userObj
    }).then(function (apiResponse) {
        if(apiResponse[0] === 1){
            window.location.reload();
        }
    });
}

// remove user's favorite resort based on delete press
function delResort(username, activity, userId) {
    const userObj = {
        username: username,
        fav_activity: activity,
        fav_resort: null
    }
    $.ajax({
        method: "PUT",
        url: `/user/${userId}`,
        data: userObj
    }).then(function (apiResponse) {
        if(apiResponse[0] === 1){
            window.location.reload();
        }
    });
}