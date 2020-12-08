// Put your custom javascript here
function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}

include('http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function() {
    $(document).ready(function() {
        alert('the DOM is ready');
    });
});

var href = null;
$("a").each(function()
{
  href = $(this).attr("href");
  if(href.contains("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath="))
  {
    $(this).attr("href", href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub-dev.ung.co/hub/user-redirect/git-sync?repo=https://github.com/lhundt-ung/lhundt-ung.github.io&subPath="));
  }
});
