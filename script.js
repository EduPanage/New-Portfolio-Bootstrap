$(document).ready(() => {
    $('#darktheme').change(function() {
        // Verifica se o checkbox do switch está marcado
        if ($(this).is(':checked')) {
            $('body').addClass('dark-mode');
        } else {
            $('body').removeClass('dark-mode');
        }
    });
});