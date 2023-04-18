
$(document).ready(function () {
    $('.menu-icon-container').click(function () {
        $('.side-navbar-container').css("display", "block")
    })
    $('.close-button-container').click(function () {
        $('.side-navbar-container').hide(1000)
    })
})
$(document).ready(function () {
    $('#userbtn').click(function () {

        $('#namelbl').hide();
        $('#username').hide();
        $('#userbtn').hide();
        $('#Question').show();
        $('#questionbtn').show()
    })
})
$(document).ready(function () {
    $('#questionbtn').click(function () {
        $('#questionlbl').hide();
        $('#Question').hide()
        $('#questionbtn').hide()
    })
})

window.addEventListener('scroll', function () {
    if (this.window.innerWidth <= 600) {
        this.document.getElementById("png-txt").classList.add("png-txt");

    }
    else if (this.window.innerHeight + this.window.pageYOffset >= 1200) {
        this.document.getElementById("png-txt").classList.add("png-txt");
    }
    else {

        this.document.getElementById("png-txt").classList.remove("png-txt");
    }
})
window.addEventListener('scroll', function () {
    if (this.window.innerWidth <= 600) {
        this.document.getElementById("thinking").classList.add("thinking");

    }
    else if (this.window.innerHeight + this.window.pageYOffset >= 1200) {
        this.document.getElementById("thinking").classList.add("thinking");
    }
    else {

        this.document.getElementById("thinking").classList.remove("thinking");
    }
})