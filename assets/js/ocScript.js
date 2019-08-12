$(document).ready(function () {
  $("body").removeClass("d-none");
  if ($("button.navbar-toggler").is(":visible")) {
    $("nav.navbar-oc").removeClass("sticky-top");
    $("nav.navbar-oc").addClass("fixed-bottom");
    appendNavMenu(true);
    $("#bottomSmallView").css(
      "marginLeft",
      $("#bottomSection").css("marginLeft")
    );
  }
});

$(window).resize(function () {
  if ($("button.navbar-toggler").is(":visible")) {
    $("nav.navbar-oc").removeClass("sticky-top");
    $("nav.navbar-oc").addClass("fixed-bottom");
    appendNavMenu(true);
    $("#bottomSmallView").css(
      "marginLeft",
      $("#bottomSection").css("marginLeft")
    );
  } else {
    $("nav.navbar-oc").removeClass("fixed-bottom");
    $("nav.navbar-oc").addClass("sticky-top");
    appendNavMenu(false);
  }
});

function appendNavMenu(flag) {
  switch (document.getElementsByClassName('git')[0].id) {
    case '1':
      baseurl = '';
      break;
    default:
      baseurl = document.getElementsByClassName('git')[0].id;
  }

  var imgElement = '<img src="' + baseurl + '/assets/img/GitHubIcon.svg" width="24.8px" alt="">';
  if (flag) {
    $("a.nav-link-oc.git").html(imgElement + " OpenCaesar on GitHub");
  } else {
    $("a.nav-link-oc.git").html(imgElement);
  }
}
