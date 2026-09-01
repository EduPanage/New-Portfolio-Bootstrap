$(document).ready(() => {
    $('#darktheme').change(function() {
        // Verifica se o checkbox do switch está marcado
        if ($(this).is(':checked')) {
            $('body').addClass('dark-theme');
        } else {
            $('body').removeClass('dark-theme');
        }
    });
});

