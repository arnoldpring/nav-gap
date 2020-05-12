$(document).ready(function(){
    $('.checkbtn').click(function(e){
        var $this = $(this),
        $target = $this.parent('.menu-bar').parent('.gap-wrap').parent('.nav-wrap').find('.navlist').find('#navlist');

        $target.toggleClass('left-0');
        $target.toggleClass('left-100');
        
        
    });
    
    $(document).mouseup(function(e) {
        var container = $(".navlist #navlist");
        var container1 = $(".checkbtn");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && !container1.is(e.target) && container1.has(e.target).length === 0 && container.has(e.target).length === 0 && container.hasClass('left-0')) 
        {
            container.toggleClass('left-0');
            container.toggleClass('left-100');
        }
    });

    $('li.nav').click(function(e) {
        var $this = $(this),
        $target = $this.find('.subnav');
        $target.toggleClass('left-0');
        $target.toggleClass('left-200');
        // $targetimg = $this.find('.subnav img');
        // $target.css({"visibility": "visible","opacity": 1});
        // $targetimg.css({"display": "none"});
        // console.log($(this));
    })

   
})