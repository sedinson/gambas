var LinkServer = null;

$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
$(function() {
    // LinkServer = new Linker("http://54.84.73.92/rapidapps");
    LinkServer = new Linker("http://localhost/rapidapps");
    LinkServer.setExtension(".json?");
    
    $(window).bind("load resize", function() {
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
        }
    });
});
