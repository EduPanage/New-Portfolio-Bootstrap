$(document).ready(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    $("body").addClass("dark-theme");
    $("#darktheme").prop("checked", true);

  } else {
    $("body").removeClass("dark-theme");
    $("#darktheme").prop("checked", false);
  }

  $("#darktheme").change(function () {
    if ($(this).is(":checked")) {
      $("body").addClass("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      $("body").removeClass("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
