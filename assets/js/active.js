// đóng mở menu
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        console.log('123');
        menu.classList.toggle("active");
    });

    // create hiệu ứng đóng mở văn bản
    var listText = document.querySelectorAll('.open-text');

    console.log(listText);
    listText.forEach(function(button) {

        button.addEventListener('click', function() {
            var div = this.parentNode.nextElementSibling;
            if (div.style.display === 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    })




    // chuyển slider
    const sliderImages = document.querySelectorAll('.ct3-left .slider-image');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        // Ẩn tất cả các ảnh
        sliderImages.forEach(image => {
            image.style.display = 'none';
        });

        // Hiển thị slide hiện tại
        sliderImages[slideIndex].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    }

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', previousSlide);
    rightArrow.addEventListener('click', nextSlide);

    // Bắt đầu hiển thị slide đầu tiên
    showSlide(currentSlide);


})

// hiệu ứng mượt mà 
// var menuLinks = document.querySelectorAll('#nav-menu a');

// menuLinks.forEach(function(link) {
//     link.addEventListener('click', function(e) {
//         e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
//         var targetId = this.getAttribute('href'); // Lấy giá trị của thuộc tính href
//         var targetElement = document.querySelector(targetId); // Tìm phần tử đích
//         if (targetElement) {
//             // Cuộn đến phần tử đích với hiệu ứng trượt
//             window.scrollTo({
//                 top: targetElement.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });