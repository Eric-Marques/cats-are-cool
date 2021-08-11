
// just a quick hello from the window.alert
alert('Hello Welcome to the "Cats are cool" website')
let name = prompt('what is your name?')
alert(`Enjoy your stay ${name}`);





// button go back to top --
document.getElementById('btnScrollTop').addEventListener('click', function(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

