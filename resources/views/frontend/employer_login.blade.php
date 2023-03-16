
@extends('frontend.layout.appfe')
@section('content')
<main>
    <style type="text/css">
        
        .main-candidates a {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 28px 12.5px;
        }
        .main-candidates {
            background: #fcb616;
        }
        .main-candidates em {
            padding-right: 10px;
            color: #ffffff;
            font-size: 24px;
        }

        .main-candidates h4 {
            color: #ffffff;
            font-size: 14px;
            font-weight: 400;
        }
    </style>
    <style>/*employer-signup.css*/
        header.for-customers .main-candidates{background:#fcb616;}header.for-customers .main-candidates a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:28px 12.5px;}header.for-customers .main-candidates a:hover{text-decoration:none;}header.for-customers .main-candidates h4{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .main-candidates em{padding-right:10px;color:#ffffff;font-size:24px;}header.for-customers .main-cart{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;height:26px;padding:0 10px;border-right:1px solid #e8e8e8;}header.for-customers .main-cart a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}header.for-customers .main-cart a em{color:#747d8d;font-size:18px;}header.for-customers .main-menu .menu li a{color:#172642;}header.for-customers .main-menu .menu li a:before{background:#172642;}header.for-customers .main-menu .menu li.active a, header.for-customers .main-menu .menu li:hover a{color:#0097d1;}header.for-customers .main-menu .menu li.active a:before, header.for-customers .main-menu .menu li:hover a:before{background:#0097d1;}header.for-customers .main-menu .menu li:first-child a{font-size:0;}header.for-customers .main-menu .menu li:first-child a:after{color:#172642;font-family:"Material Design Icons";font-size:18px;content:"\f2dc";}header.for-customers .main-menu .menu li:first-child.active a:after, header.for-customers .main-menu .menu li:first-child:hover a:after{color:#0097d1;}header.for-customers .main-menu .menu li.dropdown a{color:#172642;font-weight:400;}header.for-customers .main-menu .menu li.dropdown a em{padding-left:5px;}header.for-customers .main-menu .menu li.dropdown.active a, header.for-customers .main-menu .menu li.dropdown:hover a{color:#0097d1;}header.for-customers .main-menu .menu li.dropdown.active a:before, header.for-customers .main-menu .menu li.dropdown:hover a:before{background:#0097d1;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu{width:-webkit-max-content;width:-moz-max-content;width:max-content;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li a{color:#172642;font-weight:700;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li:first-child a{font-size:14px;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li:first-child a::after{display:none;}@media screen and (max-width:1368px){header.for-customers .main-menu .menu li{padding:0 10px;}header.for-customers .main-menu .menu li a{font-size:14px;}}header.for-customers .main-login .login-wrapper .forget-password{display:inline-block;margin-right:10px;padding-top:10px;}header.for-customers .mobile-menu{-webkit-box-shadow:-20px 0 10px 3px rgba(0, 0, 0, 0.5);box-shadow:-20px 0 10px 3px rgba(0, 0, 0, 0.5);}header.for-customers .mobile-menu.show{-webkit-box-shadow:2px 0 10px 3px rgba(0, 0, 0, 0.5);box-shadow:2px 0 10px 3px rgba(0, 0, 0, 0.5);}header.for-customers .mobile-menu .header-bottom{background:#ffffff;}header.for-customers .mobile-menu .profile{-webkit-box-align:start;-ms-flex-align:start;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:flex-start;background:#172642;}header.for-customers .mobile-menu .profile .username{margin-top:0;padding-left:15px;text-align:left;}header.for-customers .mobile-menu .profile .username a{text-align:left;}header.for-customers .mobile-menu .profile .username p{text-align:left;}header.for-customers .mobile-menu .profile .avatar{width:80px;min-width:80px;}header.for-customers .mobile-menu .profile .authentication-links{margin-top:10px;padding:0;border:none;background:none;}header.for-customers .mobile-menu .profile .authentication-links ul{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;}header.for-customers .mobile-menu .profile .authentication-links ul li{-webkit-box-pack:start;-ms-flex-pack:start;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-start;width:100%;margin-top:0;}header.for-customers .mobile-menu .profile .authentication-links ul li a{color:#ffffff;font-size:14px;text-transform:none;}header.for-customers .mobile-menu .profile .authentication-links ul li a i{margin-right:5px;}header.for-customers .mobile-menu .profile .authentication-links ul li + li{margin-top:5px;}header.for-customers .mobile-menu .employer-site{background:#172642;}header.for-customers .mobile-menu .employer-site h4 a{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .employer-site ul li a, header.for-customers .mobile-menu .employer-site ul li p{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .employer-site ul li i{margin-right:10px;}header.for-customers .mobile-menu .employer-site ul li + li{margin-top:10px;}header.for-customers .mobile-menu .authentication-links{border-top:1px solid #cccccc;border-bottom:1px solid #cccccc;background:#ffffff;}header.for-customers .mobile-menu .authentication-links ul li a{color:#172642;}header.for-customers .mobile-menu .dropdown-mobile:before{color:#172642;}header.for-customers .mobile-menu .dropdown-mobile-2:before{color:#172642;}header.for-customers .mobile-menu .header-alert{background:#172642;}header.for-customers .mobile-menu .header-alert h4 a{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .header-alert h4 a strong{font-size:16px;}header.for-customers .mobile-menu .header-alert h4 a span{display:block;margin-top:5px;}header.for-customers .mobile-menu .header-alert ul{margin-top:10px;}header.for-customers .mobile-menu .header-alert ul li a{color:#ffffff;}header.for-customers .mobile-menu .menu{border-bottom:none;}header.for-customers .mobile-menu .menu ul li a{color:#172642;}header.for-customers .mobile-menu .menu ul li.active a{color:#182641;font-weight:700;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile.active::before{color:#182641;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul{padding-right:0;padding-left:32px;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul li a{color:#172642;font-weight:400;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul li.active a{color:#182641;font-weight:700;}header.for-customers .mobile-menu .menu ul li + li{margin-top:15px;}header.for-customers .mobile-menu .profile .avatar{background:white;}header.for-customers .mobile-menu.logged .profile{-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.for-customers .mdi-contacts:before{content:"\f6ca";}header.for-customers .mdi-room-service-outline:before{content:"\fd73";}header.for-customers .mdi-account-circle-outline:before{content:"\fb31";}header.for-customers .mdi-briefcase-account:before{content:"\fccc";}header.for-customers .mdi-apps:before{content:"\f03b";}header.for-customers .mdi-cart:before{content:"\f110";}header.for-customers .main-login.logged .dropdown-menu ul li em{padding-right:3px;}.lnr-arrow-up:before{content:"\e877";}footer.for-customers{background:#182642;}footer.for-customers h3{color:#ffffff;}footer.for-customers .top-footer address ul li{color:#ffffff;}footer.for-customers .top-footer address ul li span{color:#ffffff;}footer.for-customers .top-footer .footer-links ul li a{color:#0097d1;}footer.for-customers .top-footer .footer-social-links ul li a{color:#ffffff;}footer.for-customers .top-footer .footer-social-links ul li a:hover{color:#f79c25;}footer.for-customers .cb-section-border-bottom{border-color:rgba(255, 255, 255, 0.16);}footer.for-customers .bottom-footer .right-bottom-footer{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}footer.for-customers .bottom-footer .back-to-top{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-left:20px;overflow:hidden;border:1px solid #0097d1;border-radius:50%;cursor:pointer;}footer.for-customers .bottom-footer .back-to-top em{padding:10px;color:#0097d1;font-size:18px;}.d-flex{display:-webkit-box;display:-ms-flexbox;display:flex;}.align-center{align-items:center;}.employer-signup-new{color:#4d4d4d;}.box-info-signup .title h2{text-transform:uppercase;color:#0d3aa8;font-size:32px;margin-bottom:30px;line-height:1.25em;}.box-info-signup .step-title{justify-content:space-between;margin-bottom:40px;}.employer-signup-new.login .box-info-signup .step-title{margin-bottom:20px;}.box-info-signup .main-step-title h3{text-transform:uppercase;font-weight:normal;font-size:22px;color:#333;}.box-info-signup .main-step-title p{margin-left:90px;}.box-info-signup .step-title .text-sup a{color:#39b54a;}.employer-signup-new .row-sp{margin:0 -30px;}.employer-signup-new .row-sp > [class*="col-"]{padding:0 30px;}.employer-signup-new .box-img{margin-right:-50px;}.employer-signup-new .box-img img{width:100%;}.employer-signup-new .box-info-signup{margin-left:50px;}.employer-signup-new .main-form .form-group{margin-bottom:25px;position:relative;flex-wrap:wrap;}.employer-signup-new .main-form .form-group .noti{position:absolute;top:0;right:-30px;}.employer-signup-new .main-form .form-group .noti em{color:#333;}.employer-signup-new .noti .toolip{z-index:111;right:0;left:auto;top:25px;}.employer-signup-new .noti:hover .toolip{opacity:1;}.employer-signup-new .main-form .form-group > .note{position:absolute;top:50%;transform:translateY(-50%);right:-25px;}.employer-signup-new .main-form .form-group .form-info{-ms-flex:0 0 200px;-webkit-box-flex:0;flex:0 0 200px;max-width:200px;}.employer-signup-new .main-form .form-group .form-info span{width:100%;background:#1141b0;color:#fff;text-transform:uppercase;padding-left:15px;height:45px;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;border-radius:6px 0 0 6px;}.employer-signup-new .main-form .form-group .form-input{-ms-flex:0 0 calc(100% - 200px);-webkit-box-flex:0;flex:0 0 calc(100% - 200px);max-width:calc(100% - 200px);}.employer-signup-new .main-form .form-group .form-input.short{-ms-flex:0 0 250px;-webkit-box-flex:0;flex:0 0 250px;max-width:250px;}.employer-signup-new .main-form .form-group .box-captcha{-ms-flex:0 0 calc(100% - 450px);-webkit-box-flex:0;flex:0 0 calc(100% - 450px);max-width:calc(100% - 450px);justify-content:center;}.employer-signup-new .main-form .form-group .form-input > a, .employer-signup-new .main-form .form-group .form-input > p{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;}.employer-signup-new .main-form .form-group .form-input > a{text-decoration:underline;color:#1242b1;}.employer-signup-new .main-form .form-group .form-input .form-error{display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:5px;color:red;font-size:12px;font-style:italic;font-weight:400;}.employer-signup-new .main-form .form-group .form-input .form-error.success{color:#39b54a;}.employer-signup-new .main-form .form-group .form-input .form-control{padding:0 15px;height:45px;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;border-radius:0 6px 6px 0;width:100%;border:none;background:#e6e6e6;}.employer-signup-new .main-form .form-group .form-input select.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;}.employer-signup-new .main-form .form-group .form-input-select select{background-image:url("https://static.careerbuilder.vn/themes/employer/img/signup-new/triang-down.png")!important;background-position:95% 50%!important;background-repeat:no-repeat!important;}.employer-signup-new .main-form .form-group .form-input textarea.form-control{height:auto;padding-top:10px;}.employer-signup-new .main-form .btn-area{text-align:right;}.employer-signup-new .main-form .btn-area button{background:#39b54a;color:#fff;text-transform:uppercase;padding:8px 25px;border-radius:6px;-moz-box-shadow:2px 2px 5px #999;-webkit-box-shadow:2px 2px 5px #999;box-shadow:2px 2px 5px #999;border:1px solid #39b54a;transition:400ms;}.employer-signup-new .main-form .btn-area button:hover{background:#fff;color:#39b54a;transition:400ms;}.employer-signup-new .main-form .btn-area.list-btn{display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;margin-bottom:30px;}.employer-signup-new .main-form .btn-area .btn-prev{border-color:#808080;background:#808080;}.employer-signup-new .main-form .btn-area .btn-prev:hover{color:#808080;}.employer-signup-new .box-intro img{max-height:35px;margin-right:15px;}.employer-signup-new .box-intro-1 p strong, .employer-signup-new .box-intro-3 p strong{font-size:25px;}.employer-signup-new .box-intro-3{justify-content:flex-end}.employer-signup-new .right-note{text-align:right;}.employer-signup-new .right-note a{color:#1141b0;}@media screen and (max-width:1199px){.row-intro [class*="col-"]{margin-bottom:15px;}.employer-signup-new .box-intro-3{justify-content:flex-start;}.employer-signup-new .box-intro-3 img{margin-right:30px;position:relative;left:10px;}.employer-signup-new .box-intro-1 img{margin-right:22px;}.employer-signup-new .row-sp{margin:0 -15px;}.employer-signup-new .row-sp > [class*="col-"]{padding:0 15px;}.employer-signup-new .box-img{margin-right:0;}.employer-signup-new .box-info-signup{margin-left:0;}.employer-signup-new .main-form .form-group .noti{right:0;top:-5px;}.employer-signup-new .main-form .form-group.info-company{padding-top:20px;}}@media screen and (max-width:767px){.employer-signup-new .main-form .form-group .form-input.short{-ms-flex:0 0 calc(100% - 200px);-webkit-box-flex:0;flex:0 0 calc(100% - 200px);max-width:calc(100% - 200px);}.employer-signup-new .main-form .form-group .box-captcha{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%;justify-content:flex-start;margin-top:20px;}}@media screen and (max-width:576px){.box-info-signup .title h2{font-size:22px;margin-bottom:10px;}.box-info-signup .main-step-title h3{font-size:18px;}.box-info-signup .step-title{flex-direction:column;margin-bottom:5px;}.box-info-signup .main-step-title p{margin-left:75px;}.employer-signup-new.login .box-info-signup .step-title{flex-direction:row;margin-bottom:20px;}.employer-signup-new .main-form .form-group > .note{top:-25px;right:0;transform:none;}.employer-signup-new .main-form .form-group .form-info{-ms-flex:0 0 165px;-webkit-box-flex:0;flex:0 0 165px;max-width:165px;}.employer-signup-new .main-form .form-group .form-input, .employer-signup-new .main-form .form-group .form-input.short{-ms-flex:0 0 calc(100% - 165px);-webkit-box-flex:0;flex:0 0 calc(100% - 165px);max-width:calc(100% - 165px);}.employer-signup-new .box-intro-1 p strong, .employer-signup-new .box-intro-3 p strong{font-size:20px;}.employer-signup-new .noti .toolip{max-width:250px;}.row + .row{margin-top:0;}.employer-signup-new .box-intro img{max-height:30px;}}@media screen and (max-width:375px){.employer-signup-new .main-form .form-group{flex-wrap:wrap;}.employer-signup-new .main-form .form-group .form-info, .employer-signup-new .main-form .form-group .form-input, .employer-signup-new .main-form .form-group .form-input.short{-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%;max-width:100%;}.employer-signup-new .main-form .form-group .form-info span{height:auto;background:none;color:#1141b0;padding-left:0;margin-bottom:5px;font-size:16px;}.employer-signup-new .main-form .form-group .form-input .form-control{border-radius:8px;}.employer-signup-new .main-form .form-group > .note{top:0;}.employer-signup-new .main-form .form-group.info-company{padding-top:0;}.employer-signup-new .main-form .form-group .noti{top:0;}}.employer-signup-new.login .box-info-signup .title h2{margin-bottom:35px;}.employer-signup-new.login .user-action{text-align:right;}.employer-signup-new.login .user-action > a{display:inline-block;color:#4d4d4d;}.employer-signup-new.login .user-action > a:hover{text-decoration:underline;color:#39b54a;}.employer-signup-new.login .user-action > *{margin-bottom:20px;}.employer-signup-new.login .user-action > p > a{color:#39b54a;}@media screen and (max-width:576px){.employer-signup-new.login .box-info-signup .title h2{margin-bottom:15px;}}
    </style>
    @if(session()->has('success'))
    <div class="alert alert-success" style="text-align: center;">
        {{ session()->get('success') }}
    </div>
    @endif
    <section class="employer-signup-new step-1 cb-section">
        <div class="container">
            <div class="row row-sp">
                <div class="col-xl-5">
                    <!-- <div class="box-img"> <img src="https://images.careerbuilder.vn/content/images/Banner/pic-laptop.png" alt=""> </div> -->
                </div>
                <div class="col-xl-7">
                    <div class="box-info-signup">
                        <div class="title">
                            <h2>Đăng Nhập Tài Khoản Nhà Tuyển Dụng</h2>
                        </div>
                        <form name="frmRegister" id="frmRegister" method="post" autocomplete="off" action="{{ route('loginEmployer') }}">
                            @csrf
                            <div class="step-1" id="step-1">
                                <!--  <div class="step-title d-flex">
                                    <div class="main-step-title">
                                       <h3>Bước 1 : Thông Tin Đăng Nhập</h3>
                                       <p>Quý khách sử dụng thông tin tài khoản này để đăng nhập vào CareerBuilder.vn</p>
                                    </div>
                                    <div class="text-sup"><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank" title="Hướng dẫn" target="_blank" class="support">Hướng dẫn</a></div>
                                    </div> -->
                                <div class="main-form">
                                    <div class="form-group d-flex">
                                        <div class="form-info"> <span>Email đăng nhập</span> </div>
                                        <div class="form-input">
                                            <input type="text" name="email" id="email" value="" autocomplete="off" class="form-control">
                                            <span class="form-error error_email" id="error_email" >  </span> 
                                        </div>
                                    </div>
                                    <div class="form-group d-flex">
                                        <div class="form-info"> <span>Mật khẩu</span> </div>
                                        <div class="form-input">
                                            <input type="password" class="form-control" name="password" id="password" value="">
                                            <span class="form-error error_password">  </span> 
                                        </div>
                                    </div>
                                   
                                    <div class="btn-area">
                                        <button type="submit" class="btn-action ">Đăng Nhập</button><!-- next-tab2 -->
                                    </div>
                                </div>
                            </div>
                            <!--  <div class="step-2" id="step-2" style="display: none;">
                                <div class="step-title d-flex">
                                   <div class="main-step-title">
                                      <h3>Bước 2 : Thông Tin Công Ty</h3>
                                      <p>Thông tin doanh nghiệp của Quý Công ty trên CareerBuilder</p>
                                   </div>
                                   <div class="text-sup"><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank" target="_blank" class="support">Hướng dẫn</a></div>
                                </div>
                                <div class="main-form">
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Tên công ty</span> </div>
                                      <div class="form-input">
                                         <input type="text" name="company_name" id="company_name" value="" class="form-control" placeholder="Vui lòng nhập thông tin">
                                         <span class="form-error error_company_name">  </span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Chọn số nhân viên</span> </div>
                                      <div class="form-input short form-input-select">
                                         <select class="form-control" name="company_size">
                                            <option value="">Chọn số nhân viên</option>
                                            <option value="Ít hơn 10" >Ít hơn 10</option>
                                            <option value="10-20" >10-20</option>
                                            <option value="25-99" >25-99</option>
                                            <option value="100-499" >100-499</option>
                                            <option value="500-999" >500-999</option>
                                            <option value="1.000-4.999" >1.000-4.999</option>
                                            <option value="5.000-9.999" >5.000-9.999</option>
                                            <option value="10.000-19.999" >10.000-19.999</option>
                                            <option value="20.000-49.999" >20.000-49.999</option>
                                            <option value="Hơn 50.000" >Hơn 50.000</option>
                                         </select>
                                         <span class="form-error error_company_size"></span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Quốc gia</span> </div>
                                      <div class="form-input short form-input-select">
                                         <select class="form-control" name="country_id" id="country_id" onChange="loadLocations(this.value);">
                                            <option value="1"  selected >Việt Nam</option>
                                            <option value="22" >Bangladesh</option>
                                            <option value="14" >Campuchia</option>
                                            <option value="4" >Canada</option>
                                            <option value="25" >Công Gô</option>
                                            <option value="20" >Đài Loan</option>
                                            <option value="8" >Hàn Quốc</option>
                                            <option value="13" >Hoa Kỳ</option>
                                            <option value="24" >Hồng Kông</option>
                                            <option value="169" >Khác</option>
                                            <option value="19" >Lào</option>
                                            <option value="9" >Malaysia</option>
                                            <option value="21" >Myanmar</option>
                                            <option value="2" >Nhật Bản</option>
                                            <option value="17" >Qatar</option>
                                            <option value="23" >Quốc tế</option>
                                            <option value="10" >Singapore</option>
                                            <option value="5" >Trung Quốc</option>
                                            <option value="3" >Úc</option>
                                            <option value="16" >Ukraine</option>
                                         </select>
                                         <span class="form-error error_country_id"></span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span id="lable_location">Tỉnh / TP</span> </div>
                                      <div class="form-input short form-input-select">
                                         <select class="form-control" id="location_id">
                                         </select>
                                         <span class="form-error error_location_id"></span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Địa chỉ công ty</span> </div>
                                      <div class="form-input">
                                         <input type="text"   name="company_address" id="company_address" value="" class="form-control" placeholder="Vui lòng nhập thông tin">
                                         <span class="form-error error_company_address"></span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex info-company">
                                      <div class="form-info"> <span>Sơ lược về công ty</span> </div>
                                      <div class="form-input">
                                         <textarea class="form-control" rows="5" name="company_summary" id="company_summary"></textarea>
                                         <span class="form-error error_company_summary">  </span> 
                                      </div>
                                      <div class="noti">
                                         <em class="material-icons">error</em>
                                         <div class="toolip">
                                            <p> <strong>Gợi ý</strong></p>
                                            <p>Giới thiệu thông tin về công ty là cách tốt nhất làm nổi bật công ty của Quý khách trước các ứng viên tiềm năng. Một bản sơ lược tốt về công ty sẽ gây ấn tượng đối với ứng viên, khiến họ chọn công ty của Quý khách làm nơi phát triển nghề nghiệp lâu dài.</p>
                                            <p>Hãy giới thiệu các đặc trưng của công ty bằng cách trình bày nhiều thông tin hấp dẫn về công ty: </p>
                                            <ul>
                                               <p>Năm thành lập công ty</p>
                                               <p>Vị trí tọa lạc ( thành phố/ quận/huyện)</p>
                                               <p>Quốc tịch (công ty Việt Nam hay  chi nhánh tập đoàn nước ngoài)</p>
                                               <p>Dòng sản phẩm/các dịch vụ</p>
                                               <p>Quy mô công ty (số nhân viên, văn phòng, nhà máy)</p>
                                               <p>Hoạt động và thành tựu kinh doanh</p>
                                            </ul>
                                         </div>
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Tên người liên hệ</span> </div>
                                      <div class="form-input">
                                         <input type="text" name="contact_name" id="contact_name" value="" class="form-control" placeholder="Vui lòng nhập thông tin">
                                         <span class="form-error error_contact_name">  </span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Điện thoại</span> </div>
                                      <div class="form-input">
                                         <input type="text" name="contact_phone" id="contact_phone" value="" class="form-control" placeholder="Vui lòng nhập thông tin">
                                         <span class="form-error error_contact_phone">  </span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Mã số thuế</span> </div>
                                      <div class="form-input">
                                         <input type="text" name="taxid" id="taxid" value="" class="form-control" placeholder="Vui lòng nhập mã số thuế">
                                         <span class="form-error error_taxid">  </span> 
                                      </div>
                                   </div>
                                   <div class="form-group d-flex">
                                      <div class="form-info"> <span>Mã xác nhận</span> </div>
                                      <div class="form-input short">
                                         <input type="text" name="captcha" id="captcha" autocomplete="off" class="form-control">
                                         <span class="form-error error_captcha">  </span> 
                                      </div>
                                      <div class="box-captcha d-flex" >
                                         <div id="captchaim"><img width="150" height="50" alt="" src="https://images.careerbuilder.vn/rws/captcha/772ad988a2229a2e7a7107f06c5d2203.png" class="img_code" /><input type="hidden" name="key_captcha" id="key_captcha" value="772ad988a2229a2e7a7107f06c5d2203"></div>
                                         <div class="reCapcha" style="font-size: 24px;"><a onclick="refeshImgCaptcha('captchaim');" href="javascript:void(0);"> <em class="fa fa-repeat"></em></a></div>
                                      </div>
                                   </div>
                                   <div class="btn-area list-btn">
                                      <button type="button" class="btn-prev">Quay lại</button>
                                      <button class="btn-action" type="submit">Đăng ký</button>
                                   </div>
                                   <div class="right-note">
                                      <p> Bằng việc nhấp vào "Đăng Ký Ngay!", bạn đã đồng ý với các điều khoản ghi trong <a href="https://careerbuilder.vn/vi/jobseekers/use">Thỏa thuận dịch vụ của CareerBuilder.vn.</a></p>
                                   </div>
                                </div>
                                </div> -->
                        </form>
                    </div>
                </div>
            </div>
            <div class="row row-intro">
                <div class="col-12 col-xl-4">
                    <div class="box-intro box-intro-1 d-flex align-center">
                        <!-- <img src="https://static.careerbuilder.vn/themes/employer/img/signup-new/icon-folder.png"> -->
                        <p>Hơn <strong>50.000</strong> hồ sơ cập nhật mỗi tháng</p>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="box-intro box-intro-2 d-flex align-center">
                        <!-- <img src="https://static.careerbuilder.vn/themes/employer/img/signup-new/icon-link.png"> -->
                        <p>Website tuyển dụng toàn cầu <strong>duy nhất</strong> tại <strong>Việt Nam</strong></p>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="box-intro box-intro-3 d-flex align-center">
                        <!-- <img src="https://static.careerbuilder.vn/themes/employer/img/signup-new/icon-triangle.png"> -->
                        <p>Hơn <strong>18 triệu </strong>lượt xem mỗi tháng</p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="right-note">
                        <p>Nếu bạn đã có tài khoản. Vui lòng <a href="#">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>/*jquery.tabslet.js*/
        ;(function($,window,undefined){"use strict";$.fn.tabslet=function(options){var defaults={mouseevent:'click',activeclass:'active',attribute:'href',animation:false,autorotate:false,deeplinking:false,pauseonhover:true,delay:2000,active:1,container:false,controls:{prev:'.prev',next:'.next'}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this),_cache_li=[],_cache_div=[];var _container=options.container?$(options.container):$this;var _tabs=_container.find('> div, > .tabslet-content');_tabs.each(function(){_cache_div.push($(this).css('display'));});var elements=$this.find('.tabs-toggle > li, .tabslet-tab > li'),i=options.active-1;if(!$this.data('tabslet-init')){$this.data('tabslet-init',true);$this.opts=[];$.map(['mouseevent','activeclass','attribute','animation','autorotate','deeplinking','pauseonhover','delay','container'],function(val,i){$this.opts[val]=$this.data(val)||options[val];});$this.opts['active']=$this.opts.deeplinking?deep_link():($this.data('active')||options.active)
        _tabs.hide();if($this.opts.active){_tabs.eq($this.opts.active-1).show();elements.eq($this.opts.active-1).addClass(options.activeclass);}
        var fn=eval(function(e,tab){var _this=tab?elements.find('a['+$this.opts.attribute+'="'+tab+'"]').parent():$(this);_this.trigger('_before');elements.removeClass(options.activeclass);_this.addClass(options.activeclass);_tabs.hide();i=elements.index(_this);var currentTab=tab||_this.find('a').attr($this.opts.attribute);if($this.opts.deeplinking)location.hash=currentTab;if($this.opts.animation){_container.find(currentTab).animate({opacity:'show'},'slow',function(){_this.trigger('_after');});}else{_container.find(currentTab).show();_this.trigger('_after');}
        return false;});var init=eval("elements."+$this.opts.mouseevent+"(fn)");init;var t;var forward=function(){i=++i%elements.length;$this.opts.mouseevent=='hover'?elements.eq(i).trigger('mouseover'):elements.eq(i).click();if($this.opts.autorotate){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);$this.mouseover(function(){if($this.opts.pauseonhover)clearTimeout(t);});}}
        if($this.opts.autorotate){t=setTimeout(forward,$this.opts.delay);$this.hover(function(){if($this.opts.pauseonhover)clearTimeout(t);},function(){t=setTimeout(forward,$this.opts.delay);});if($this.opts.pauseonhover)$this.on("mouseleave",function(){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);});}
        function deep_link(){var ids=[];elements.find('a').each(function(){ids.push($(this).attr($this.opts.attribute));});var index=$.inArray(location.hash,ids)
        if(index>-1){return index+1}else{return($this.data('active')||options.active)}}
        var move=function(direction){if(direction=='forward')i=++i%elements.length;if(direction=='backward')i=--i%elements.length;elements.eq(i).click();}
        $this.find(options.controls.next).click(function(){move('forward');});$this.find(options.controls.prev).click(function(){move('backward');});$this.on('show',function(e,tab){fn(e,tab);});$this.on('next',function(){move('forward');});$this.on('prev',function(){move('backward');});$this.on('destroy',function(){$(this).removeData().find('> .tabs-toggle li').each(function(i){$(this).removeClass(options.activeclass);});_tabs.each(function(i){$(this).removeAttr('style').css('display',_cache_div[i]);});});}});};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet();});})(jQuery);
        /*employer-signup.js*/
        
        $(document).ready(function(){formTab();})
        $(document).on('scroll',function(){$(window).scroll(function(){var heightBody=$('body').height()
        var heightFooter=$('footer.for-customers').height()
        var heightWindow=$(window).height()
        var height=$(window).scrollTop();if(height>(heightBody-heightFooter-heightWindow)){$('.employer-mail').addClass('no-scroll')}else{$('.employer-mail').removeClass('no-scroll')}});});function formTab(){$(".next-tab2").on('click',function(event){event.preventDefault();flag_chk=chkRegisfncfull();if(flag_chk===true){$("#step-2").show();$("#step-1").hide();}});$(".btn-prev").on('click',function(event){event.preventDefault();$("#step-1").show();$("#step-2").hide();$("html, body").animate({scrollTop:$("#step-1").offset().top});});}
        function chkRegisfncfull(){var form=$("#frmRegister");form.validate({onkeyup:false,ignore:":not(:visible),:disabled",rules:{email:{required:true,email:true,checkEmail:true},re_email:{required:true,equalTo:"#email"},password:{required:true,rangelength:[6,40],validatePassUnicodeStrong:true},re_password:{equalTo:"#password"},company_name:{required:true},contact_name:{required:true},company_address:{required:true},company_summary:{required:true,rangelength:[50,5000],checkcontactinfo:true},contact_phone:{required:true,checkSpecialCharTelephone:true},taxid:{checktaxid:true},captcha:{required:true}},messages:{email:{checkEmail:language.emp_register_email_exist},re_email:{equalTo:language.emp_register_re_field_email},password:{validatePassUnicodeStrong:language.emp_register_password_unicode},re_password:{equalTo:language.emp_register_re_field_pass}},errorPlacement:function(error,element){var name=element.attr('name');var errorSelector='.error_'+name;var $element=$(errorSelector);$(errorSelector).html(error.html());},invalidHandler:function(form,validator){$('html,body').animate({scrollTop:$('[name="'+validator.errorList[0].element.name+'"]').offset().top-100},'slow');},success:function(element){$('.error_'+element[0].htmlFor).html('');}});return form.valid();}
    </script>
    <script type="text/javascript">
        function autoload()  {loadLocations(1, 8);}  window.onload = autoload;
    </script>
    <script type="text/javascript">
        var language_rg = {
          emp_register_email_exist:"Email này đã có người dùng. Vui lòng nhập email khác",
          emp_register_email_not_exist:"Xin chúc mừng. Quý khách có thể đăng ký tài khoản với email này",
          emp_register_empty:"Không được để trống.",
          emp_register_incorrect:"Địa chỉ email không hợp lệ.",
          emp_register_too_short:"Quá ngắn",
          emp_register_weak:"Yếu",
          emp_register_good:"Tốt",
          emp_register_password_unicode:"Mật khẩu có ít nhất 2 thông tin sau: chữ hoa, chữ thường, số, ký tự đặt biệt (.-_@~`#$%^&*?+ '' !()=)và trong khoảng từ 6 đến 40 ký tự . Lưu ý: Không sử dụng tiếng Việt có dấu",
          emp_register_re_field_email:"Vui lòng nhập thông tin email như trên",
          emp_register_re_field_pass:"Vui lòng nhập thông tin mật khẩu như trên",
          emp_register_contact_info:"Vui lòng không nhập email và số điện thoại ",
          Emp_Please_enter_the_correct_Mobile:"Vui lòng nhập đúng số di động",
          emp_register_taxid_error:"Mời nhập số từ 0 - 9 và có độ dài từ 10 - 14 kí tự",
          emp_register_strong:"Mạnh",
        };
        if(typeof language === 'undefined') var language = language_rg;
        else $.extend(language, language_rg);
        
        $(document).ready(function() {
          $("#email").blur(function(event) {checkEmailExist();});
        });
    </script>
</main>
@endsection