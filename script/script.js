import bootstrap from "bootstrap";

import $ from "jquery";

import Popper from "popper.js";

var modal = document.getElementById("jq-modal");

var span = document.getElementsByClassName("jq-close")[0];

$("#openModal").click(function () {
    modal.style.display = "block";
});

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

$("#openModal").click(function () {
    $("#jq-modal").css("display", "block");
});

$(document).ready(function Slider() {
    let currentSlide = 0;
    let slides = $('.png-slide');
    let slidesCount = slides.length;

    buttonsDisabler(currentSlide, slidesCount - 1);

    $('#prevSlidesButton')
        .bind('click', function () {
            currentSlide--;
            $('.slides').css("transform", `translateX(-${currentSlide * (100 / slidesCount)}%)`)
            buttonsDisabler(currentSlide, slidesCount - 1);
        })
    $('#nextSlidesButton')
        .bind('click', function () {
            currentSlide++;
            $('.slides').css("transform", `translateX(-${currentSlide * (100 / slidesCount)}%)`)
            buttonsDisabler(currentSlide, slidesCount - 1);
        })
})

function buttonsDisabler(currentSlide, lastSlideIndex) {
    let controlIDs = ["#prevSlidesButton", "#nextSlidesButton"]
    if (currentSlide === 0 || currentSlide === lastSlideIndex) {
        $(controlIDs[Number(currentSlide === lastSlideIndex)])
            .prop("disabled", true)
            .css('background-color', "rgba(0, 0, 0, 0.2)")
    } else {
        $("#prevSlidesButton, #nextSlidesButton")
            .prop("disabled", false)
            .css('background-color', "rgba(0, 0, 0, 0.5)")
    }
}

$('#ex-modal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$('.carousel').on('slide.bs.carousel', function (e) {
    let $prev = $(this).find('.carousel-control-prev');
    let $next = $(this).find('.carousel-control-next');
    $prev.css('display', e.to === 0 ? 'none' : 'flex');
    $next.css('display', e.to === $(this).find('.carousel-item').length - 1 ? 'none' : 'flex');
})
