// Humberger
$(function() {
    $(".nav-links__toggle").on('click', function(){
        if($(".nav-links__item").hasClass("active")) {
            $(".nav-links__item").removeClass("active");
        } else {   
            $(".nav-links__item").addClass(" active");
        }

    });
});

// Gallery
$(function() {
    var selectedClass = "";
    $(".gallery-btn-toggle").click(function(){
        selectedClass = $(this).attr("id");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

// Modal
$(function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        setTimeout(function () {
            modal.style.display = "block";
        }, 3000);
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    setTimeout(function () {
        modal.style.display = "none";
    }, 15000);
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});