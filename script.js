var original = window.console
window.console = {
    error: function(){
        location.reload();
    }
}