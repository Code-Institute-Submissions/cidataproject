$(function () {
    $(document).on('click', 'nav a', function (event) {
        console.log('clickedlink')
    $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-60
    }, 500);
        if (window.innerWidth < 572) {
            console.log('bing')
        $('.navbar-toggle').trigger('click');
    }
});
});