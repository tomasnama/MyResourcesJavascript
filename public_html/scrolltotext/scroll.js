function scrollToText() {
    var search = document.getElementById("input1").value;
    var obj = $("*:contains('" + search + "'):last");
    if (obj.offset()) {
        var top = obj.offset().top;
        var divScroll = document.getElementById("divScroll");
        divScroll.scrollTop = top - 100;
    }
}


