<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Trắc Nghiệm</title>


    <link rel="stylesheet" href="./Assets/style.css">
    <link rel="stylesheet" href="./Assets/footer.css">
    <link rel="icon" type="image/x-icon" href="./Assets/Images/tickicon.png">
    <link rel="stylesheet" href="./Assets/comment.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
    <link rel="stylesheet" href="./Assets/responsive.css">
</head>

<body>
    <!-- begin: main -->
    <div id="main">
        <!-- begin: menu -->
        <div>
            <div class="nav-menu menu" id="nav-menu">
                <!-- begin: header -->
                <div id="header">
                    <a href="./introduce.html"><img class="imglogo logo" src="./Assets/Images/logo.png" alt="logo-book"></a>
                    <a href=""><img class="img-hidden" src="" alt="logo-book"></a>
                    <ul id="nav">
                        <li><a href="./index.html">TRANG CHỦ</a></li>
                        <li><a href="./contact.html">ĐĂNG KÍ</a></li>
                    </ul>
                </div>
                <!-- end: header -->
                <div class="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-x  nav-close" id="nav-close" aria-hidden="true"></i>
            </div>
            <!-- end: menu -->
        </div>
        <!-- begin: slider -->
        <div id="slider">
            <div class="black-layer js-search-close">
                <swiper-container class="mySwiper" pagination="true" pagination-dynamic-bullets="true">
                    <swiper-slide>
                        <div class="content">
                            <h1>WEBSITE 
                                <br>
                                TRẮC NGHIỆM
                            </h1>
                            <h3>TEST YOUR SKILL</h3>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="content">
                            <h1>
                                <br>
                            </h1>
                            <h3></h3>
                            <button class="learn-btn">
                                <h4></h4>
                            </button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="content">
                            <button class="learn-btn">
                            </button>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
        <!-- end: slider -->

        <div id="WWD">
            <h2>GIỚI THIỆU</h2>
            <img src="./Assets/Images/separator.png" alt="">

            <div class="content-WWD">
                <div class="wwd-list">
                    <img src="./Assets/Images/service.png" alt="">
                    <h3>TỔNG QUÁT</h3>
                    <p>Giúp bạn đánh giá khả năng của bản thân<br>Biết được điểm ngay sau khi làm bài</p>
                </div>
                <div class="wwd-list">
                    <img src="./Assets/Images/service2.png" alt="">
                    <h3>THỜI GIAN</h3>
                    <p>Tiết kiệm thời gian và công sức<br>Đề có sẵn và luôn đợi bạn kiếm tìm</p>
                </div>
                <div class="wwd-list">
                    <img src="./Assets/Images/service3.png" alt="">
                    <h3>ĐA DẠNG</h3>
                    <p>Đa dạng mẫu mã đề thi và môn học<br>Thư viện đề thi được cập nhật mỗi ngày</p>
                </div>
            </div>
        </div>
        <hr>
        <!-- end: What we do  -->

    <div class="container comment__container">
        <!-- begin: comment -->
    <div class="comment">
        <br>
        <div class="slides">
            <!-- begin button radio -->
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">
            <!-- end button radio -->

            <!-- begin img slide -->
            <div class="comment__slide first">
                <img src="./Assets/image test/user.png" alt="">
                <h2 class="title-comment">Hồ Thế Bảo</h2>
                <p>trang web rất hữu ích và dễ sử dụng</p>
            </div>
            <div class="comment__slide">
                <img src="./Assets/image test/user.png" alt="">
                <h2 class="title-comment">Lê Thị thu Hương</h2>
                <p>Tiết kiệm được thời gian, sao không thử</p>
            </div>
            <div class="comment__slide">
                <img src="./Assets/image test/user.png" alt="">
                <h2 class="title-comment">Nguyễn Thị Ngọc Vy</h2>
                <p>Tìm kiếm đề thi? Không thành vấn đề</p>
            </div>
            <div class="comment__slide">
                <img src="./Assets/image test/user.png" alt="">
                <h2 class="title-comment">Hứa Chí Bằng</h2>
                <p>Siuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
            </div>
            <!-- end img slide -->
        </div>
        <!-- begin manual navigation -->
        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
    </div>
    </div>
    <!-- begin footer -->
    <div id="footer">
        <div class="container1">
            <div class="row1">
                <div class="footer-col">
                    <h4>Liên hệ</h4>
                    <ul>
                        <li><a href="#"><i class="fa-regular fa-envelope"></i> baolathe0108@gmail.com</a></li>
                        <li><a href="#"><i class="fa-solid fa-phone"></i> 0782087247</a></li>
                        <li><a href="#"><i class="fa-sharp fa-solid fa-location-dot"></i> 61 Đoàn Nguyễn Tuấn</a>
                        </li>

                    </ul>
                </div>
                <div class="footer-col">
                    <h4>OUR TEAM</h4>
                    <ul>
                        <li><a href="">Nguyễn Thị Ngọc Vy</a></li>
                        <li><a href="">Lê Thị Thu Hương</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100070373126042">Hồ Thế Bảo</a></li>
                        <li><a href="">Hứa Chí Bằng</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>TEAM</h4>
                    <ul>
                        <li><a href="">TEST</a></li>
                        <li><a href="">YOUR</a></li>
                        <li><a href="">SKILL</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="add hidden-menu">
        <div class="container">
            <i class="fa-solid fa-xmark exit-nav-menu"></i>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul id="nav-mobile">
                        <li class="nav-mobile-item"><a href="./index.html">TRANG CHỦ</a></li>
                        <li class="nav-mobile-item"><a href="./contact.html">ĐĂNG KÍ</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <!-- end : footer -->
    <!--end: main  -->
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
<script src="https://use.fontawesome.com/1744f3f671.js"></script>
<script src="./Assets/js/profo.js"></script>
<script src="./Assets/js/header.js"></script>
<script src="./Assets/js/layout.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./Assets/js/comment.js"></script>

</html>