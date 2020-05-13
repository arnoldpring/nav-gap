$(document).ready(function(){
    $('.checkbtn').click(function(e){
        var $this = $(this),
        $target = $this.parent('.menu-bar').parent('.gap-wrap').parent('.nav-wrap').find('.navlist').find('#navlist');

        $target.toggleClass('left-0');
        $target.toggleClass('left-100');
        
        
    });
    
    $(document).mouseup(function(e) {
        var container = $(".navlist #navlist");
        var container1 = $(".subnav");
        var check = $(".checkbtn");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && !check.is(e.target) && check.has(e.target).length === 0 && container.has(e.target).length === 0 && container.hasClass('left-0')) 
        {
            container.toggleClass('left-0');
            container.toggleClass('left-100');
        }
    });

    $('li.nav').click(function(e) {
        var $this = $(this),
        $navlist =$('#navlist')
        $target = $this.find('.subnav');


        $navlist.toggleClass('left-0');
        $navlist.toggleClass('left-100');
        $target.toggleClass('left-0');
        $target.toggleClass('left-200');
        // $targetimg = $this.find('.subnav img');
        // $target.css({"visibility": "visible","opacity": 1});
        // $targetimg.css({"display": "none"});
        // console.log($(this));
    })

   
})