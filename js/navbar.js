let values_section = document.getElementById("values");
let work_section = document.getElementById("work");
let about_section = document.getElementById("about");
let values_height = window.pageYOffset + values_section.getBoundingClientRect().top - 500
let work_height = window.pageYOffset + work_section.getBoundingClientRect().top - 300
let about_height = window.pageYOffset + about_section.getBoundingClientRect().top - 300

function navbar_home(){
    $("#values-btn").css('opacity','100%')
    $("#work-btn").css('opacity','100%')
    $("#about-btn").css('opacity','100%')
    $("#values-btn").css('font-weight','normal')
    $("#work-btn").css('font-weight','normal')
    $("#about-btn").css('font-weight','normal')
}

function navbar_values(){
    $("#values-btn").css('opacity','100%')
    $("#work-btn").css('opacity','20%')
    $("#about-btn").css('opacity','20%')
    $("#values-btn").css('font-weight','bold')
    $("#work-btn").css('font-weight','normal')
    $("#about-btn").css('font-weight','normal')

}

function navbar_work(){
    $("#values-btn").css('opacity','20%')
    $("#work-btn").css('opacity','100%')
    $("#about-btn").css('opacity','20%')
    $("#values-btn").css('font-weight','normal')
    $("#work-btn").css('font-weight','bold')
    $("#about-btn").css('font-weight','normal')
}

function navbar_about(){
    $("#values-btn").css('opacity','20%')
    $("#work-btn").css('opacity','20%')
    $("#about-btn").css('opacity','100%')
    $("#values-btn").css('font-weight','normal')
    $("#work-btn").css('font-weight','normal')
    $("#about-btn").css('font-weight','bold')
}

$(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() > values_height && $(this).scrollTop() < work_height) {
            navbar_values();
        } else if ($(this).scrollTop() > work_height && $(this).scrollTop() < about_height) {
            navbar_work();
        } else if ($(this).scrollTop() > about_height) {
            navbar_about();
        } else {
           navbar_home();
        }
    });
});