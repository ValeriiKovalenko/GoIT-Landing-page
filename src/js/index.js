(function() { 
    document.addEventListener("DOMContentLoaded", ready);
    function ready() {
        var button = document.querySelector('.first-section-header__button');
        var navigation = document.querySelector('.navigation');
        button.addEventListener('click', function(e) {
            button.classList.toggle('active');
            navigation.classList.toggle('active');
        })
        console.log('button', button);
        navigation.addEventListener('click', function() {
            button.classList.remove('active');
            navigation.classList.remove('active');
        })
    }
})();

