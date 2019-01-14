$((function () {
    new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
            if(direction === "down"){
                $('nav').addClass('sticky');
            }
            else{
                $('nav').removeClass('sticky');
            }
        },
        offset: 60
    })
}));