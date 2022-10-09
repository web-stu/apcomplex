$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var flatPath = $('.flats path');
    var flatListItem = $('.flat-list>li>a');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    flatPath.on('mouseover', function () {
        flatPath.removeClass('current-flat');
        currentFlat = $(this).attr("data-flat");
        $(`.flat-list .flat-item:nth-child(${currentFlat}) .flat-link`).toggleClass('flat-link-hover');
    });

    flatPath.on('mouseleave', function () {
        flatPath.removeClass('current-flat');
        flatListItem.removeClass('flat-link-hover');
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});
