/*if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-latest.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

//edit
window.onload = 
    function(){ 
        var href = null;
        $("a").each(function()
        {
          href = $(this).attr("href");
          if(href.contains("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath="))
          {
            $(this).attr("href", href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub-dev.ung.co/hub/user-redirect/git-sync?repo=https://github.com/lhundt-ung/lhundt-ung.github.io&subPath="));
          }
        }); };
    

//edit
window.onload = function() {
    $(function(){ alert("jQuery + DOM loaded."); });
}*/

var anchors = document.querySelectorAll('a[href*="mybinder.org"]');
Array.prototype.forEach.call(anchors, function (element, index) {
    var newhref = (element.href).replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub-dev.ung.co/hub/user-redirect/git-sync?repo=https://github.com/lhundt-ung/lhundt-ung.github.io&subPath=");
    element.href = newhref;
});

