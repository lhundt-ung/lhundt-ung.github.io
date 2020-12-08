
import $ from './jquery.min.js';

var href = null;
$("a").each(function()
{
  href = $(this).attr("href");
  if(href.contains("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath="))
  {
    $(this).attr("href", href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub-dev.ung.co/hub/user-redirect/git-sync?repo=https://github.com/lhundt-ung/lhundt-ung.github.io&subPath="));
  }
});
