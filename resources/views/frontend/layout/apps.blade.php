
         <!DOCTYPE html>
      <html lang="en">
         <head>
         
<meta charset="UTF-8">
<title>Tuyển dụng việc làm</title>
<meta name="keywords" content="Kiem viec, tim viec lam, tuyen dung, viec lam, viec lam online, tim viec, mang tuyen dung, việc làm, tìm việc, kiếm việc, tuyển dụng, việc làm online" />
<meta name="description" content="CareerBuilder.vn - Hơn 1,3 triệu ứng viên để lựa chọn, nhưng vẫn làm cho việc tuyển dụng dễ dàng và tiết kiệm nhờ các tính năng quản lý và nhắc nhở thông minh." />
<link href="https://careerbuilder.vn/vi/employers/postjobs" rel="canonical" />
<meta name="robots" content="index,follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="https://careerbuilder.vn/favicon_careerbuilder_v2.ico" />
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" type="text/css" href="{{ asset('css/form1.css') }}?ver=22">
 <meta name="csrf-token" content="{{ csrf_token() }}">


<script src="{{ asset('js/form2.js') }}"></script>
<!-- <script type="text/javascript"  src="https://static.careerbuilder.vn/js/jquery.masknumber.js"></script> -->
<script language="javascript">
    var is_mobile = 0;
    var widthWindowChosen = $(window).width();
    var PATH_KIEMVIEC = "https://careerbuilder.vn/vi/";
    var CURRENT_LANGUAGE = "vi";
   var memberLogin = "yes";
</script>

<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name":"Careerbuilder Vietnam",
    "alternateName" : "careerbuilder.vn",
    "url": "https://careerbuilder.vn/",
    "sameAs" : [
        "https://www.facebook.com/CareerbuilderVietnam/",
        "https://www.linkedin.com/company/3216963/"
    ],
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://careerbuilder.vn/viec-lam/{search_term_string}-k-vi.html",
        "query-input": "required name=search_term_string"
    }
}
</script>
<!-- 
<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/moment.min.js"></script>
<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/moment-with-locales.min.js"></script>
<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/daterangepicker.css" /> -->

<script>
   var language_common = {
      common_menu_left_view_all:"Xem tất cả",
      common_menu_left_collapse:"Thu gọn",
      common_view_detail:"Chi tiết",
      emp_manageresume_search_date_invalid:"Ngày tìm kiếm không hợp lệ",
      message_common:"Thông báo",
      common_view_summary:"Xem tóm tắt",
      Ban_khong_co_quyen_thao_tac:"Bạn không có quyền thao tác trên chức năng này.",
      emp_managerresume_Please_choose_to_save_resumes:"emp_managerresume_Please_choose_to_save_resumes",
      emp_managerresume_Please_choose_status:"emp_managerresume_Please_choose_status",
      emp_managerresume_Please_choose_rating:"emp_managerresume_Please_choose_rating",
      emp_forgotpassword_Please_input_valid_string:"Quý khách vui lòng nhập mã xác nhận",
      verify_code_wrong:"Mã xác nhận chưa đúng",
      emp_manager_exist_folder_name:"Tên thư mục bị trùng",
      emp_message_save_folder_success:"Lưu thư mục thành công",
      emp_message_save_folder_unsuccess:"Lưu thư mục không thành công",
      TXT_MSG_INVALID_EMAIL:"Địa chỉ Email không hợp lệ",
      emp_comment_not_we_said:"Vui lòng nhập nội dung góp ý của bạn",
      emp_comment_please_enter_comment:"Vui lòng nhập nội dung góp ý của bạn",
      emp_comment_thanks_for_comment:"Cảm ơn bạn đã góp ý cho chúng tôi",
      emp_manager_pleasechoose_resume:"emp_manager_pleasechoose_resume",
      emp_managerresume_Pleases_select_the_sender:"Quý khách vui lòng chọn người gửi.",
      emp_message_send_success:"Gửi mail thành công",
      Emp_Choice:"Chọn",
      emp_comment_maximun_1000_charaters:"Nội dung nhập không quá 1000 ký tự.",
      emp_common_validate_keyword:"Từ khóa tìm kiếm không hợp lệ. Vui lòng nhập lại",
      emp_hrcentral_not_register_service:"Quý khách chưa đăng ký gói dịch vụ phù hợp. <br/>Vui lòng liên hệ với chúng tôi để được tư vấn sử dụng dịch vụ",
      emp_manager_confirm_delete_folder_resume:"Hồ sơ lưu trữ trong thư mục quý khách chọn sẽ bị xóa, vui lòng xác nhận",
      emp_manager_pleasechoose_folder_delete:"Quý khách vui lòng chọn thư mục cần xóa",
      emp_hrcentral_validate_keyword:"Từ khóa tìm kiếm không hợp lệ",
      emp_mat_khau:"Mật khẩu",
      popup_close_popup:"Đóng",
      popup_msg_success:"Lưu thành công",
      popup_msg_error:"popup_msg_error",
      employers_confirm_btn_agree:"Đồng ý",
      employers_confirm_btn_cancle:"Bỏ qua",
      hrcentral_select_check_job:"Vui lòng chọn vị trí cần nhân bản",
      hrcentral_select_max_job:"5",
        btn_apply:'Chọn',
        btn_cancel:'Hủy',
        validate_required:'Không bỏ trống, vui lòng nhập',
      hrcentral_select_max_job_message:"Bạn chỉ được phép chọn tối đa 5 vị trí nhân bản."
   }

   if(typeof language === 'undefined') var language = language_common;
   else $.extend(language, language_common);

   var domainstatic = "https://static.careerbuilder.vn/";
   var domain = "https://careerbuilder.vn/vi/";
   var domainroot = "https://careerbuilder.vn";
   var calendarlanguage = "";
</script>
         </head>
         <body>
            <header class="for-customers">
      
       <div class="container-fluid">
        <div class="main-wrap">
            <div class="left-wrap">
                <div class="button-hambuger"><span class="mdi mdi-menu"></span></div>
                                <div class="logo"><a href="http://vieclamngon.vn/" title="homepage-employers">
                    <img src="{{ asset('images/template/logo/logo.png') }}" alt="vieclamngon.vn" title="https://images.careerbuilder.vn/logo/logo_1482896879_1489026739.png" /></a></div>
                <div class="main-menu">
                    <ul class="menu">
                        <li class=""><a href="https://careerbuilder.vn/vi/employers" alt="Trang chủ" title="Trang chủ">Trang Chủ</a></li>
                        <li class="dropdown "><a href="https://careerbuilder.vn/vi/employers/products-and-services">Sản Phẩm và Dịch Vụ</a>
                            <div class="dropdown-menu">
                                <ul><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3">Đăng Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8">Tìm Hồ Sơ Ứng Viên</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/">Talent Solution</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9">Quảng Cáo Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14">Talent Driver</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/">Targeted Email Marketing</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/">Talent Referral</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10">Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services">Xem tất cả sản phẩm / dịch vụ</a></li></ul>
                            </div>
                        </li>
                        <li class="dropdown active "><a href="https://careerbuilder.vn/vi/employers/dashboard">HR Central</a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="https://careerbuilder.vn/vi/employers/dashboard">Dashboard</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/employers/postjobs">Đăng Tuyển Dụng</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/resume-search.html">Tìm Hồ Sơ</a></li>

                                    <li><a href="https://careerbuilder.vn/vi/employers/careerbuilder-rewards">CareerBuilder Rewards</a></li>
                                                                                                            </ul>
                            </div>
                        </li>
                        <li class=""><a href="https://careerbuilder.vn/vi/hiringsite">Cẩm Nang Tuyển Dụng</a></li>
                        <li class=""><a href="https://careerbuilder.vn/vi/employers/services/contact">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
            <div class="right-wrap">
                                <div class="main-login dropdown logged"><a href="javascript:void(0)" title="cuong"> </a>
                    <div class="dropdown-menu">
                        <ul>
                            <li> <a href="https://careerbuilder.vn/vi/employers/hrcentral/accounts"> <em class="fa fa-cog"></em>Tài khoản</a></li>
                            <li> <a href="https://careerbuilder.vn/vi/employers/logout"> <em class="fa fa-sign-out"> </em>Thoát</a></li>
                        </ul>
                    </div>
                </div>
                                <div class="main-noti" style="display: none"><a href="javascript:void(0);"> <span class="mdi mdi-cart"></span></a></div>
                <div class="main-language dropdown">
                    <div class="dropdown-toggle">
                        <p>VI<em class="mdi mdi-chevron-down"></em></p>
                    </div>
                    <div class="dropdown-menu">
                        <div class="item active">
                            <a class="dropdown-item" href="javascript:void(0);" title="Change language">VI</a>
                        </div>
                        <div class="item">
                            <a class="dropdown-item" href="https://careerbuilder.vn/en/employers/postjobs" title="Change language">EN</a>
                        </div>
                    </div>
                </div>
                <div class="main-candidates"><a href="{{ route('registerClientUser') }}"><em class="fa fa-external-link"></em>
                        <h4>Dành cho Ứng Viên</h4></a></div>
            </div>
        </div>
    </div>
    <div class="mobile-menu">
        <div class="mobile-wrap">
            <div class="header-logo"><a href="https://careerbuilder.vn/vi/employers" title="homepage-employers">
                <!-- <img src="https://images.careerbuilder.vn/logo/logo_1644552010.png" alt="https://images.careerbuilder.vn/logo/logo_1482896879_1489026739.png" title="https://images.careerbuilder.vn/logo/logo_1482896879_1489026739.png" /> -->
            </a>
            </div>
            <div class="header-bottom">
                <div class="header-bottom-top">
                                        <div class="profile">
                        <div class="avatar"><a href="https://careerbuilder.vn/vi/employers/hrcentral/accounts"><img src="./img/avata-new.png" alt=""></a></div>
                        <div class="username"><a href="https://careerbuilder.vn/vi/employers/hrcentral/accounts">cuong</a>
                            <div class="authentication-links">
                                <ul>
                                    <li> <a href="https://careerbuilder.vn/vi/employers/logout"><i class="fa fa-sign-out"></i>Thoát</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="back-menu-normal"><em class="mdi mdi-arrow-left"></em></div>
                    </div>
                                        <div class="menu">
                        <ul class="menu-normal">
                            <li class="active"><a href="https://careerbuilder.vn/vi/employers" title="homepage-employers"><i class="mdi mdi-home-outline"></i>Trang Chủ</a></li>
                            <li class="dropdown-mobile"><a href="https://careerbuilder.vn/vi/employers/products-and-services"> <i class="mdi mdi-apps"></i>Sản Phẩm và Dịch Vụ</a>
                                <div class="dropdown-menu">
                                    <ul><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3">Đăng Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8">Tìm Hồ Sơ Ứng Viên</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/">Talent Solution</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9">Quảng Cáo Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14">Talent Driver</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/">Targeted Email Marketing</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/">Talent Referral</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10">Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services">Xem tất cả sản phẩm / dịch vụ</a></li></ul>
                                </div>
                            </li>
                            <li class="dropdown-mobile"><a  href="https://careerbuilder.vn/vi/employers/dashboard"> <i class="mdi mdi-briefcase-account"></i>HR Central</a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li><a href="https://careerbuilder.vn/vi/employers/dashboard">Dashboard</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/employers/postjobs">Đăng Tuyển Dụng</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/resume-search.html">Tìm Hồ Sơ</a></li>

                                                                                                                                <li><a href="https://careerbuilder.vn/vi/employers/careerbuilder-rewards">CareerBuilder Rewards</a></li>
                                                                                                                </ul>
                                </div>
                            </li>
                            <li><a href="https://careerbuilder.vn/vi/hiringsite"> <i class="mdi mdi-lightbulb-on-outline"></i>Cẩm Nang Tuyển Dụng</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/services/contact"> <i class="mdi mdi-contacts"></i>Liên hệ</a></li>
                            <li><a href="https://careerbuilder.vn/en/employers/postjobs"> <i class="mdi mdi-web"></i><span>English</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="header-bottom-bottom">
                    <div class="header-alert">
                        <h4>
                        <a href="https://careerbuilder.vn/"> <strong> Dành Cho Ứng Viên</strong></a>
                         <br>
                         <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html"><span> Tìm Việc Làm</span></a>
                         </h4>
                    </div>
                    <div class="employer-site">
                        <ul>
                            <li> <a> <i class="mdi mdi-phone"></i><span>HCM: (84.28) 3822 6060</span></a></li>
                            <li> <a> <i class="mdi mdi-phone"></i><span>HN: (84.24) 6268 1919</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="backdrop"></div>
</header>            <main>
                   <style>/*jquery.auto-complete.css*/
.autocomplete-suggestions{text-align:left;cursor:default;border:1px solid #ccc;border-top:0;background:#fff;box-shadow:-1px 1px 3px rgba(0,0,0,.1);position:absolute;display:none;z-index:9999;max-height:254px;overflow:hidden;overflow-y:auto;box-sizing:border-box;}.autocomplete-suggestion{position:relative;padding:0 .6em;line-height:23px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.02em;color:#333;}.autocomplete-suggestion b{font-weight:normal;color:#1f8dd6;}.autocomplete-suggestion.selected{background:#f0f0f0;}

/*manage-job-posting-post-jobs.css*/
@charset "UTF-8";.is-browser-IE header .main-menu .menu li:nth-child(2).dropdown .dropdown-menu{min-width:calc( 100% + 110px );}.is-browser-IE .employer-banner{overflow:hidden;}.is-browser-IE .employer-mail{position:fixed;width:100%;}.is-browser-IE .employer-mail.no-scroll{position:relative;}@media (min-width:1025px){.is-browser-IE .employer-customer .main-button .button-prev{right:103%;}}header.for-customers .main-candidates{background:#fcb616;}header.for-customers .main-candidates a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:28px 12.5px;}header.for-customers .main-candidates a:hover{text-decoration:none;}header.for-customers .main-candidates h4{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .main-candidates em{padding-right:10px;color:#ffffff;font-size:24px;}header.for-customers .main-cart{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;height:26px;padding:0 10px;border-right:1px solid #e8e8e8;}header.for-customers .main-cart a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}header.for-customers .main-cart a em{color:#747d8d;font-size:18px;}header.for-customers .main-menu .menu li a{color:#172642;}header.for-customers .main-menu .menu li a:before{background:#172642;}header.for-customers .main-menu .menu li.active a, header.for-customers .main-menu .menu li:hover a{color:#0097d1;}header.for-customers .main-menu .menu li.active a:before, header.for-customers .main-menu .menu li:hover a:before{background:#0097d1;}header.for-customers .main-menu .menu li:first-child a{font-size:0;}header.for-customers .main-menu .menu li:first-child a:after{color:#172642;font-family:"Material Design Icons";font-size:18px;content:"\f2dc";}header.for-customers .main-menu .menu li:first-child.active a:after, header.for-customers .main-menu .menu li:first-child:hover a:after{color:#0097d1;}header.for-customers .main-menu .menu li.dropdown a{color:#172642;font-weight:400;}header.for-customers .main-menu .menu li.dropdown a em{padding-left:5px;}header.for-customers .main-menu .menu li.dropdown.active a, header.for-customers .main-menu .menu li.dropdown:hover a{color:#0097d1;}header.for-customers .main-menu .menu li.dropdown.active a:before, header.for-customers .main-menu .menu li.dropdown:hover a:before{background:#0097d1;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu{width:-webkit-max-content;width:-moz-max-content;width:max-content;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li a{color:#172642;font-weight:700;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li:first-child a{font-size:14px;}header.for-customers .main-menu .menu li.dropdown .dropdown-menu ul li:first-child a::after{display:none;}@media screen and (max-width:1368px){header.for-customers .main-menu .menu li{padding:0 10px;}header.for-customers .main-menu .menu li a{font-size:14px;}}header.for-customers .main-login .login-wrapper .forget-password{display:inline-block;margin-right:10px;padding-top:10px;}header.for-customers .mobile-menu{-webkit-box-shadow:-20px 0 10px 3px rgba(0, 0, 0, 0.5);box-shadow:-20px 0 10px 3px rgba(0, 0, 0, 0.5);}header.for-customers .mobile-menu.show{-webkit-box-shadow:2px 0 10px 3px rgba(0, 0, 0, 0.5);box-shadow:2px 0 10px 3px rgba(0, 0, 0, 0.5);}header.for-customers .mobile-menu .header-bottom{background:#ffffff;}header.for-customers .mobile-menu .profile{-webkit-box-align:start;-ms-flex-align:start;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:flex-start;background:#172642;}header.for-customers .mobile-menu .profile .username{margin-top:0;padding-left:15px;text-align:left;}header.for-customers .mobile-menu .profile .username a{text-align:left;}header.for-customers .mobile-menu .profile .username p{text-align:left;}header.for-customers .mobile-menu .profile .avatar{width:80px;min-width:80px;}header.for-customers .mobile-menu .profile .authentication-links{margin-top:10px;padding:0;border:none;background:none;}header.for-customers .mobile-menu .profile .authentication-links ul{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;}header.for-customers .mobile-menu .profile .authentication-links ul li{-webkit-box-pack:start;-ms-flex-pack:start;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-start;width:100%;margin-top:0;}header.for-customers .mobile-menu .profile .authentication-links ul li a{color:#ffffff;font-size:14px;text-transform:none;}header.for-customers .mobile-menu .profile .authentication-links ul li a i{margin-right:5px;}header.for-customers .mobile-menu .profile .authentication-links ul li + li{margin-top:5px;}header.for-customers .mobile-menu .employer-site{background:#172642;}header.for-customers .mobile-menu .employer-site h4 a{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .employer-site ul li a, header.for-customers .mobile-menu .employer-site ul li p{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .employer-site ul li i{margin-right:10px;}header.for-customers .mobile-menu .employer-site ul li + li{margin-top:10px;}header.for-customers .mobile-menu .authentication-links{border-top:1px solid #cccccc;border-bottom:1px solid #cccccc;background:#ffffff;}header.for-customers .mobile-menu .authentication-links ul li a{color:#172642;}header.for-customers .mobile-menu .dropdown-mobile:before{color:#172642;}header.for-customers .mobile-menu .dropdown-mobile-2:before{color:#172642;}header.for-customers .mobile-menu .header-alert{background:#172642;}header.for-customers .mobile-menu .header-alert h4 a{color:#ffffff;font-size:14px;font-weight:400;}header.for-customers .mobile-menu .header-alert h4 a strong{font-size:16px;}header.for-customers .mobile-menu .header-alert h4 a span{display:block;margin-top:5px;}header.for-customers .mobile-menu .header-alert ul{margin-top:10px;}header.for-customers .mobile-menu .header-alert ul li a{color:#ffffff;}header.for-customers .mobile-menu .menu{border-bottom:none;}header.for-customers .mobile-menu .menu ul li a{color:#172642;}header.for-customers .mobile-menu .menu ul li.active a{color:#182641;font-weight:700;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile.active::before{color:#182641;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul{padding-right:0;padding-left:32px;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul li a{color:#172642;font-weight:400;}header.for-customers .mobile-menu .menu ul li.dropdown-mobile ul li.active a{color:#182641;font-weight:700;}header.for-customers .mobile-menu .menu ul li + li{margin-top:15px;}header.for-customers .mobile-menu .profile .avatar{background:white;}header.for-customers .mobile-menu.logged .profile{-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.for-customers .mdi-contacts:before{content:"\f6ca";}header.for-customers .mdi-room-service-outline:before{content:"\fd73";}header.for-customers .mdi-account-circle-outline:before{content:"\fb31";}header.for-customers .mdi-briefcase-account:before{content:"\fccc";}header.for-customers .mdi-apps:before{content:"\f03b";}header.for-customers .mdi-cart:before{content:"\f110";}header.for-customers .main-login.logged .dropdown-menu ul li em{padding-right:3px;}.lnr-arrow-up:before{content:"\e877";}footer.for-customers{background:#182642;}footer.for-customers h3{color:#ffffff;}footer.for-customers .top-footer address ul li{color:#ffffff;}footer.for-customers .top-footer address ul li span{color:#ffffff;}footer.for-customers .top-footer .footer-links ul li a{color:#0097d1;}footer.for-customers .top-footer .footer-social-links ul li a{color:#ffffff;}footer.for-customers .top-footer .footer-social-links ul li a:hover{color:#f79c25;}footer.for-customers .cb-section-border-bottom{border-color:rgba(255, 255, 255, 0.16);}footer.for-customers .bottom-footer .right-bottom-footer{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}footer.for-customers .bottom-footer .back-to-top{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-left:20px;overflow:hidden;border:1px solid #0097d1;border-radius:50%;cursor:pointer;}footer.for-customers .bottom-footer .back-to-top em{padding:10px;color:#0097d1;font-size:18px;}.employer-mail{-webkit-transition:0.4s ease;-o-transition:0.4s ease;z-index:998;position:-webkit-sticky;position:sticky;bottom:0;padding:15px 0;background:-webkit-gradient(linear, left top, right top, from(#0c7dd3), to(#073477));background:-o-linear-gradient(left, #0c7dd3 0%, #073477 100%);background:linear-gradient(90deg, #0c7dd3 0%, #073477 100%);transition:0.4s ease;}.employer-mail .align-item-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.employer-mail.no-scroll{padding:50px 0;}.employer-mail.no-scroll .left-content .icon img{height:57px;}.employer-mail.no-scroll .left-content .content p{font-size:16px;}.employer-mail .left-content{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.employer-mail .left-content .icon{min-width:70px;}.employer-mail .left-content .icon img{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;height:45px;transition:0.4s ease-in-out all;}@media (max-width:576px){.employer-mail .left-content .icon{display:none;}}.employer-mail .left-content .content{padding-left:15px;}.employer-mail .left-content .content p{color:#ffffff;font-size:14px;font-weight:400;}.employer-mail .left-content .content .mb-show{display:none;}@media (min-width:1025px){.employer-mail .left-content .content p{font-size:15px;}}@media (max-width:576px){.employer-mail .left-content .content{padding-left:0;}.employer-mail .left-content .content .pc-show{display:none;}.employer-mail .left-content .content .mb-show{display:block;}}.employer-mail .form-register{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.employer-mail .form-register input{-webkit-box-flex:0;-ms-flex:0 0 65%;-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;flex:0 0 65%;max-width:65%;height:35px;padding:5px 10px;border:none;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#182642;font-size:16px;font-weight:400;transition:0.4s ease-in-out all;}.employer-mail .form-register input::-webkit-input-placeholder{color:#666666;font-size:16px;font-weight:400;}.employer-mail .form-register input::-moz-placeholder{color:#666666;font-size:16px;font-weight:400;}.employer-mail .form-register input:-ms-input-placeholder{color:#666666;font-size:16px;font-weight:400;}.employer-mail .form-register input::-ms-input-placeholder{color:#666666;font-size:16px;font-weight:400;}.employer-mail .form-register input::placeholder{color:#666666;font-size:16px;font-weight:400;}.employer-mail .form-register input:focus{outline:none;}.employer-mail .form-register button{-webkit-box-flex:0;-ms-flex:0 0 35%;-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;flex:0 0 35%;max-width:35%;height:35px;border:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background:#109ed9;color:#ffffff;font-size:16px;font-weight:700;text-align:center;text-transform:uppercase;transition:0.4s ease-in-out all;}.employer-mail .form-register button:focus{outline:none;}@media (min-width:450px){.employer-mail .form-register input{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}.employer-mail .form-register button{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}}@media (min-width:768px){.employer-mail .form-register input{height:40px;}.employer-mail .form-register button{height:40px;}}@media (min-width:1025px){.employer-mail .form-register input{padding:5px 30px;}.employer-mail .left-content .content{padding-left:40px;}.employer-mail.no-scroll .form-register input, .employer-mail.no-scroll .form-register button{height:50px;}}@media (max-width:576px){.employer-mail{padding:15px 0;}.employer-mail .row{margin-bottom:0;}.employer-mail .row > *{margin-bottom:15px;}.employer-mail .row > *:last-child{margin-bottom:0;}.employer-mail.no-scroll .left-content .icon{display:block;}.employer-mail.no-scroll .left-content .content{padding-left:15px;}.employer-mail.no-scroll .left-content .content .mb-show{display:none;}.employer-mail.no-scroll .left-content .content .pc-show{display:block;}}.feedback-employer-btn{-webkit-transform:translate(25%, -50%) rotate(270deg);-ms-transform:translate(25%, -50%) rotate(270deg);z-index:999;position:fixed;top:50%;right:0;padding:5px 10px;transform:translate(25%, -50%) rotate(270deg);border:1px solid #e5e5e5;border-top:3px solid #287ab9;background:#fff;color:#5d677a;font-size:14px;text-decoration:none;}.feedback-employer-btn:hover{color:#5d677a;text-decoration:none;}@media (max-width:576px){.feedback-employer-btn{display:none;}}.feedback-employer-modal{width:570px;}.feedback-employer-modal .logo{margin-bottom:20px;text-align:center;}.feedback-employer-modal .text{margin-bottom:20px;}.feedback-employer-modal .text p{font-size:14px;}.feedback-employer-modal .text p + p{margin-top:10px;}.feedback-employer-modal .text p strong{font-size:18px;}.feedback-employer-modal .form-group + .form-group{margin-top:15px;}.feedback-employer-modal .form-group label{display:block;margin-bottom:5px;}.feedback-employer-modal .form-group input[type=text], .feedback-employer-modal .form-group textarea{width:100%;}.feedback-employer-modal .form-group input[type=text]{height:40px;padding:0 15px;}.feedback-employer-modal .form-group textarea{height:120px;padding:5px 15px;}.feedback-employer-modal .form-group span{color:red;font-size:12px;font-style:italic;font-weight:400;}.feedback-employer-modal .form-group .note{font-size:12px;}.feedback-employer-modal .form-group.form-submit{margin-top:30px;text-align:center;}.feedback-employer-modal .form-group.form-submit input{-webkit-transition:0.3s all;-o-transition:0.3s all;width:80px;height:36px;border:0;background:#f79d25;color:#fff;font-size:14px;transition:0.3s all;}.feedback-employer-modal .form-group.form-submit input:hover{background:#e18408;}.feedback-employer-modal .fancybox-close-small{background:#f7a334;opacity:1;}.feedback-employer-modal .fancybox-close-small svg path{fill:#fff;}.employer-navbar-2-1{z-index:500;position:-webkit-sticky;position:sticky;top:80px;border-bottom:1px solid #e6e6e7;background:#ffffff;}@media (max-width:1200px){.employer-navbar-2-1{-webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);z-index:500;position:-webkit-sticky;position:sticky;top:60px;border:none;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);}}.employer-navbar-2-1 .material-icons:hover{text-decoration:none;}.employer-navbar-2-1 .category-nav{display:none;}.employer-navbar-2-1 .category-nav p{color:#182642;font-size:18px;font-weight:700;}.employer-navbar-2-1 .category-nav em{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;color:#182642;font-size:22px;}.employer-navbar-2-1 .category-nav.active em{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}@media (max-width:1200px){.employer-navbar-2-1 .category-nav{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;padding:5px 10px;background:#ffffff;}}.employer-navbar-2-1 .left-wrap .list-menu{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.employer-navbar-2-1 .left-wrap .list-menu a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:13px 0;color:#182642;font-size:15px;font-weight:500;text-decoration:none;transition:0.2s ease-in-out all;}.employer-navbar-2-1 .left-wrap .list-menu li{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:30px;}.employer-navbar-2-1 .left-wrap .list-menu li:last-child{margin-right:0;}.employer-navbar-2-1 .left-wrap .list-menu li:hover a, .employer-navbar-2-1 .left-wrap .list-menu li.active a{color:#0097d1;}.employer-navbar-2-1 .right-wrap .list-menu{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.employer-navbar-2-1 .right-wrap .list-menu li{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:30px;}.employer-navbar-2-1 .right-wrap .list-menu li:last-child{margin-right:0;}.employer-navbar-2-1 .right-wrap .list-menu li:hover a, .employer-navbar-2-1 .right-wrap .list-menu li.active a{color:#182642;}.employer-navbar-2-1 .right-wrap .list-menu a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:13px 0;color:#0097d1;font-size:15px;font-weight:500;text-decoration:none;transition:0.2s ease-in-out all;}.employer-navbar-2-1 .right-wrap .list-menu em{padding-right:5px;}.employer-navbar-2-1 .main-wrap{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;}@media (max-width:1200px){.employer-navbar-2-1 .main-wrap{display:none;padding-top:10px;padding-bottom:5px;background:#ffffff;}.employer-navbar-2-1 .main-wrap .list-menu, .employer-navbar-2-1 .main-wrap .list-menu{-ms-flex-wrap:wrap;flex-wrap:wrap;}.employer-navbar-2-1 .main-wrap .list-menu li, .employer-navbar-2-1 .main-wrap .list-menu li{-webkit-box-flex:0;-ms-flex:0 0 100%;-webkit-box-pack:start;-ms-flex-pack:start;flex:0 0 100%;justify-content:flex-start;width:100%;max-width:100%;margin:0;padding:7px 10px;}.employer-navbar-2-1 .main-wrap .list-menu li a, .employer-navbar-2-1 .main-wrap .list-menu li a{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin:0;padding:0;}}.bg-manage{background:#eff3f6;}.material-icons{text-decoration:none;}.material-icons:hover{text-decoration:none;}a{text-decoration:none;}a:hover{text-decoration:none;}.main-form-posting .form-wrap{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;margin:0 -10px;}.main-form-posting .form-wrap .form-group{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;width:100%;max-width:100%;margin-bottom:20px;padding:0 10px;}.main-form-posting .form-wrap .form-group label{display:block;margin-bottom:10px;color:#182642;font-size:14px;font-weight:500;}.main-form-posting .form-wrap .form-group input, .main-form-posting .form-wrap .form-group select, .main-form-posting .form-wrap .form-group button{width:100%;height:36px;padding:5px 20px;border:1px solid #dddddd;border-radius:5px;background:#ffffff;color:#999999;font-size:14px;font-weight:400;}.main-form-posting .form-wrap .form-group select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;background-image:url("https://static.careerbuilder.vn/themes/employer/img/sl.png");background-position:95% 50%;background-repeat:no-repeat;}.main-form-posting .form-wrap .form-group select::-ms-expand{display:none;}.main-form-posting .form-wrap .form-group.form-date{position:relative;}.main-form-posting .form-wrap .form-group.form-date .icon{z-index:11;position:absolute;top:40px;right:15px;pointer-events:none;}.main-form-posting .form-wrap .form-group.form-date .icon em{color:#666666;font-size:18px;}.main-form-posting .form-wrap .form-group.form-submit .btn-submit{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;border:none;background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);background-size:200% 100%;color:#ffffff;font-size:16px;font-weight:500;transition:0.4s ease-in-out all;}.main-form-posting .form-wrap .form-group.form-submit .btn-submit em{padding-right:5px;font-size:18px;}.main-form-posting .form-wrap .form-group.form-submit .btn-submit:hover{background-position:100% 0;}.main-form-posting .form-wrap .form-group.form-filter-advanced .btn-filter-advanced{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;color:#007db2;font-size:14px;font-weight:500;transition:0.2s ease-in-out all;}.main-form-posting .form-wrap .form-group.form-filter-advanced .btn-filter-advanced em{font-size:24px;}.main-form-posting .form-wrap .form-group.form-filter-advanced .btn-filter-advanced:hover{text-decoration:underline;}.main-form-posting .form-wrap .form-group.form-filter-advanced .btn-filter-advanced:hover em{text-decoration:none;}.main-form-posting .form-wrap .form-group.form-select-chosen select{display:none;}.main-form-posting .form-wrap .form-group.form-select-chosen label{margin-bottom:5px;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container{width:100% !important;height:40px !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices{height:100%;padding:5px;padding-left:0;border:none;border-bottom:1px solid #93bcdc;background-image:none;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice{-webkit-box-pack:center !important;-ms-flex-pack:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;align-items:center !important;justify-content:center !important;height:26px !important;border:none !important;background:#ebf8ff !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close{background:none !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close:before{color:#5d677a;font-family:"Material Design Icons";font-size:11px;content:"\f156";}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close:hover:before{color:#fc0821;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-field input{font-family:"Roboto", sans-serif !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-choices .search-field .chosen-search-input{color:#172642;font-size:16px;font-weight:700;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar{width:6px !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-track{background:#eaeaea !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-thumb{background:#7fcb42 !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-thumb:hover{background:#7fcb42 !important;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result{position:relative;padding-left:43px;color:#182642;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result::after{position:absolute;top:5px;left:20px;color:#5d677a;font:normal normal normal 24px/1 Material Design Icons;font-size:15px;content:"\f131";}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result:hover{color:#ffffff;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result:hover::after{color:#ffffff;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result.highlighted{color:#ffffff;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .active-result.highlighted::after{color:#ffffff;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected{position:relative;padding-left:43px;color:#182642;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected::after{position:absolute;top:5px;left:20px;color:#287ab9;font:normal normal normal 24px/1 Material Design Icons;font-size:15px;content:"\f132";opacity:1;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected:hover{color:#182642;cursor:pointer;}.main-form-posting .form-wrap .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected:hover::after{color:#287ab9;}@media (min-width:576px){.main-form-posting .form-wrap .form-group{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}.main-form-posting .form-wrap .form-group.form-submit{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}}@media (min-width:1024px){.main-form-posting .form-wrap .form-group{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%;}.main-form-posting .form-wrap .form-group label{font-size:12px;}.main-form-posting .form-wrap .form-group.form-submit{-webkit-box-flex:0;-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%;margin-top:30px;}}@media (min-width:1200px){.main-form-posting .form-wrap .form-group label{font-size:13px;}}@media (min-width:1440px){.main-form-posting .form-wrap .form-group label{font-size:14px;}}.box-manage-job-posting{-webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);padding:15px;border-radius:4px;background:#ffffff;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);}@media (min-width:1024px){.box-manage-job-posting{padding:20px;}}@media (min-width:1200px){.box-manage-job-posting{padding:30px;}}.box-manage-job-posting .btn-gradient{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:100%;height:36px;padding:5px 15px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);color:#ffffff;font-size:16px;font-weight:500;text-align:center;transition:0.4s ease-in-out all;}.box-manage-job-posting .btn-gradient em{padding-right:5px;font-size:18px;}.box-manage-job-posting .title-manage{padding-right:20px;color:#182642;font-size:18px;font-weight:500;}@media (min-width:1024px){.box-manage-job-posting .title-manage{padding-right:25px;font-size:20px;}}@media (min-width:1200px){.box-manage-job-posting .title-manage{font-size:24px;}}.box-manage-job-posting .dropdown{position:relative;cursor:pointer;}.box-manage-job-posting .dropdown .dropdown-list{-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;z-index:500;position:absolute;top:100%;left:50%;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:380px;padding:0;transform:translateX(-50%);border-radius:5px;opacity:0;pointer-events:none;transition:0.2s ease-in-out all;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown{-webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);background:#f8f8f8;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .head{padding:5px 20px;color:#666666;font-size:14px;font-weight:400;text-align:left;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table{width:100%;min-width:100%;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table th{text-transform:none;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table th, .box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table td{border:none;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table thead{background:#e6e6e6;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table thead tr{background:#e6e6e6;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table tbody tr{background:#f8f8f8;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body table tbody tr:nth-child(2n){background:#ffffff;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .tag-icon{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .tag-icon em{padding-right:5px;color:#cccccc;font-size:14px;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .tag-icon p{color:#007db2;font-size:14px;font-weight:500;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .tag-name{color:#666666;font-size:14px;font-weight:400;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .list-tag-suggestion{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .list-tag-suggestion li{margin-right:15px;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .list-tag-suggestion li:last-child{margin-right:0;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .list-tag-suggestion li a{color:#007db2;font-size:14px;}.box-manage-job-posting .dropdown .dropdown-list .box-dropdown .body .list-tag-suggestion li em{color:#007db2;font-size:14px;font-weight:700;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed{-webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);width:268px;max-width:268px;padding:20px;border-radius:5px;background:#ffffff;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul{padding-bottom:10px;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul + ul{padding-top:10px;border-top:2px solid #e1e1e1;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul:last-child{padding-bottom:0;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul li{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul li + li{margin-top:8px;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul li .name{padding-right:10px;color:#666666;font-size:14px;font-weight:400;}.box-manage-job-posting .dropdown .dropdown-list .box-hit-filed ul li .number{color:#007db2;font-size:14px;font-weight:400;}.box-manage-job-posting .dropdown:hover .dropdown-list{opacity:1;pointer-events:auto;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading > *{margin-bottom:20px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .hor-var{display:none;margin-right:15px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .name{margin-right:15px;color:#182642;font-size:14px;font-weight:500;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li{margin-right:10px;margin-bottom:10px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:100px;height:26px;padding:5px 15px;border:1px solid #007db2;border-radius:5px;color:#007db2;font-size:14px;font-weight:500;text-align:center;transition:0.2s ease-in-out all;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li a:hover{background:#007db2;color:#ffffff;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li.view-posting-detail{display:none;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li.view-posting-detail.active{display:block;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li.view-posting-summary{display:none;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li.view-posting-summary.active{display:block;}@media (min-width:1024px){.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check{margin-bottom:10px;}}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading > *{margin-bottom:20px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .export-file{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:20px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .export-file a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:100%;min-width:140px;height:28px;padding:5px 15px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);background-size:200% 100%;color:#ffffff;font-size:14px;font-weight:400;text-align:center;transition:0.2s ease-in-out all;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .export-file a em{padding-right:5px;font-size:16px;font-weight:700;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .export-file a:hover{background-position:100% 0;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display .name, .box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display .name-display{margin-right:10px;margin-bottom:10px;color:#182642;font-size:14px;font-weight:400;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display .form-display{margin-right:10px;margin-bottom:10px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display .form-display select{width:70px;height:28px;padding:3px 15px;border:1px solid #dddddd;border-radius:5px;background:#ffffff;color:#999999;font-size:14px;font-weight:400;}@media (min-width:1024px){.box-manage-job-posting .main-jobs-posting .heading-jobs-posting{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display{margin-bottom:10px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .right-heading .to-display > *{margin-bottom:0;}}@media (min-width:1200px){.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading{padding-left:10px;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .hor-var{display:block;}.box-manage-job-posting .main-jobs-posting .heading-jobs-posting .left-heading .list-check li a{min-width:120px;}}.box-manage-job-posting .main-jobs-posting .table{width:100%;overflow-x:auto;}.box-manage-job-posting .main-jobs-posting .table > table{width:100%;min-width:1330px;height:100%;background:#ffffff;}.box-manage-job-posting .main-jobs-posting .table > table th, .box-manage-job-posting .main-jobs-posting .table > table td{border:1px solid #e6e6e6;text-align:center;}.box-manage-job-posting .main-jobs-posting .table > table th:nth-child(2), .box-manage-job-posting .main-jobs-posting .table > table td:nth-child(2){text-align:left;}.box-manage-job-posting .main-jobs-posting .table > table thead{background:#e6e6e6;}.box-manage-job-posting .main-jobs-posting .table > table thead th{padding:12.5px 0;color:#182642;font-size:14px;font-weight:700;text-transform:uppercase;}.box-manage-job-posting .main-jobs-posting .table > table thead th em{position:relative;top:5px;padding-left:5px;font-size:18px;}.box-manage-job-posting .main-jobs-posting .table > table tbody tr{background:#ffffff;}.box-manage-job-posting .main-jobs-posting .table > table tbody tr:hover{background:#f1f9ff;}.box-manage-job-posting .main-jobs-posting .table > table tbody td{padding:12.5px 0;border-right:1px solid rgba(255, 255, 255, 0);}.box-manage-job-posting .main-jobs-posting .table > table tbody td:first-child{padding:10px;}.box-manage-job-posting .main-jobs-posting .table > table tbody td:last-child{border-right:1px solid #e6e6e6;}@media (min-width:1200px){.box-manage-job-posting .main-jobs-posting .table > table tbody td{padding:16.5px 0;}.box-manage-job-posting .main-jobs-posting .table > table tbody td:first-child{padding:15px 10px;}}.box-manage-job-posting .main-jobs-posting .table .title{position:relative;padding-right:15px;}.box-manage-job-posting .main-jobs-posting .table .title .name{color:#007db2;font-size:14px;font-weight:500;}.box-manage-job-posting .main-jobs-posting .table .title .name .code{font-weight:400;}.box-manage-job-posting .main-jobs-posting .table .title .jobs-new-tab{position:absolute;top:0;right:10px;}.box-manage-job-posting .main-jobs-posting .table .title .jobs-new-tab em{color:#182642;font-size:14px;}.box-manage-job-posting .main-jobs-posting .table .jobs-view-detail{display:none;margin-top:10px;color:#666666;font-size:12px;font-weight:400;}.box-manage-job-posting .main-jobs-posting .table .jobs-view-detail strong{color:#182642;}.box-manage-job-posting .main-jobs-posting .table time, .box-manage-job-posting .main-jobs-posting .table .view-number, .box-manage-job-posting .main-jobs-posting .table .hit-filed, .box-manage-job-posting .main-jobs-posting .table .td-state, .box-manage-job-posting .main-jobs-posting .table .user{color:#182642;font-size:14px;font-weight:400;text-align:center;}.box-manage-job-posting .main-jobs-posting .table .td-mail{color:#007db2;font-size:14px;font-weight:400;text-align:center;}.box-manage-job-posting .main-jobs-posting .table .td-mail.no-mail{color:#182642;font-size:14px;font-weight:400;text-align:center;}.box-manage-job-posting .main-jobs-posting .table .hit-filed{cursor:pointer;}.box-manage-job-posting .main-jobs-posting .table .view-number em{padding-left:3px;color:#007db2;font-size:20px;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion li{margin-right:15px;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion li:last-child{margin-right:0;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion li a{color:#007db2;font-size:14px;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion li em{color:#007db2;font-size:14px;font-weight:700;}.box-manage-job-posting .main-jobs-posting .table .list-cv-suggestion li.view{cursor:pointer;}.box-manage-job-posting .main-jobs-posting .table .list-manipulation{-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;}.box-manage-job-posting .main-jobs-posting .table .list-manipulation li{margin-right:15px;}.box-manage-job-posting .main-jobs-posting .table .list-manipulation li:last-child{margin-right:0;}.box-manage-job-posting .main-jobs-posting .table .list-manipulation li a{display:block;width:20px;}.box-manage-job-posting .main-jobs-posting .table .list-manipulation li em{color:#007db2;font-size:20px;font-weight:500;}.box-manage-job-posting .main-jobs-posting .table > table tbody tr:last-child .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-last-child(2) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-last-child(3) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-last-child(4) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-last-child(5) .dropdown .dropdown-list{top:auto;bottom:100%;}.box-manage-job-posting .main-jobs-posting .table > table tbody tr:first-child .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-child(2) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-child(3) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-child(4) .dropdown .dropdown-list, .box-manage-job-posting .main-jobs-posting .table > table tbody tr:nth-child(5) .dropdown .dropdown-list{top:100%;bottom:auto;}@media (max-width:1200px){.box-manage-job-posting .main-jobs-posting .table{overflow-x:auto;}.box-manage-job-posting .main-jobs-posting .table > table{min-width:1240px;}}.box-manage-job-posting .tabslet-content{display:none;padding:10px;border:1px solid #e0e0e0;}.box-manage-job-posting .tabslet-content.active{display:block;}@media (min-width:1024px){.box-manage-job-posting .tabslet-content{padding:20px 10px;}}.box-manage-job-posting .form-error{margin-top:10px;color:red;font-size:12px;font-style:italic;}.box-manage-job-posting .form-success{margin-top:10px;color:#86cb49;font-size:12px;font-style:italic;}.dtpicker-overlay .dtpicker-buttonCont .dtpicker-button{color:#ffffff;}.main-tabslet{position:relative;}.main-tabslet .tabslet-tab{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;max-width:100%;overflow-x:auto;overflow-y:hidden;}.main-tabslet .tabslet-tab li{width:-webkit-max-content;width:-moz-max-content;width:max-content;}.main-tabslet .tabslet-tab a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;align-items:center;justify-content:center;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:8px 25px;border:1px solid #e0e0e0;border-bottom:none;border-radius:none;border-top-right-radius:4px;border-top-left-radius:4px;background:#eeeeee;color:#007db2;font-size:15px;font-weight:500;transition:0.2s ease-in-out all;}.main-tabslet .tabslet-tab a::before{-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;z-index:11;position:absolute;bottom:-1px;left:-1px;width:calc(100% + 2px);height:1px;background:#e0e0e0;content:"";opacity:1;transition:0.2s ease-in-out all;}.main-tabslet .tabslet-tab a:hover{text-decoration:none;}.main-tabslet .tabslet-tab li{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:5px;}.main-tabslet .tabslet-tab li.active a, .main-tabslet .tabslet-tab li:hover a{background:#ffffff;color:#004970;}.main-tabslet .tabslet-tab li:hover a::before{background:#e0e0e0;}.main-tabslet .tabslet-tab li.active a::before{background:#ffffff;opacity:1;}@media (max-width:768px){.main-tabslet .tabslet-tab li a{padding:8px 15px;}}@media (max-width:576px){.main-tabslet .tabslet-tab li{margin-top:1px;}}.main-button-sticky{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:500;position:-webkit-sticky;position:sticky;bottom:120px;justify-content:space-between;pointer-events:none;}@media (min-width:1024px){.main-button-sticky{bottom:100px;}}.button-prev, .button-next{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);background-size:200% 100%;cursor:pointer;pointer-events:auto;transition:0.2s ease-in-out all;}.button-prev em, .button-next em{color:#ffffff;font-size:18px;}.button-prev:hover, .button-next:hover{background-position:100% 0;}.button-prev{left:-25px;}.button-next{right:-25px;}@media (min-width:1024px){.button-prev, .button-next{width:40px;height:40px;}.button-prev em, .button-next em{font-size:20px;}.button-prev{left:-20px;}.button-next{right:-20px;}}.main-pagination ul{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.main-pagination ul li{padding:0 2.5px;}.main-pagination ul li a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border:1px solid #cccccc;border-radius:50%;background:#cccccc;color:#ffffff;font-size:14px;font-weight:400;transition:0.4s ease-in-out all;}.main-pagination ul li a:hover{border:1px solid #0097d1;background:#0097d1;color:#ffffff;text-decoration:none;}.main-pagination ul li a.FirstPage, .main-pagination ul li a.LastPage{border-color:#f5f5f5;background:#f5f5f5;}.main-pagination ul li a.FirstPage em, .main-pagination ul li a.LastPage em{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;color:#bbbbbb;font-size:18px;transition:0.4s ease-in-out all;}.main-pagination ul li a.FirstPage:hover, .main-pagination ul li a.LastPage:hover{border:1px solid #0097d1;background:#0097d1;color:#ffffff;text-decoration:none;}.main-pagination ul li a.FirstPage:hover em, .main-pagination ul li a.LastPage:hover em{color:#ffffff;}.main-pagination ul li.active a{border:1px solid #0097d1;background:#0097d1;color:#ffffff;}@media (min-width:1200px){.main-pagination ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;}}.manage-job-posting-post-jobs .box-manage-job-posting .heading-manage .left-heading{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;}.manage-job-posting-post-jobs .box-manage-job-posting .heading-manage .left-heading > *{margin-bottom:20px;}.manage-job-posting-post-jobs .box-manage-job-posting .heading-manage .right-heading{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;margin-bottom:20px;}@media (min-width:1024px){.manage-job-posting-post-jobs .box-manage-job-posting .heading-manage{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;}}.manage-job-posting-post-jobs .ql-editor{height:120px;}.manage-job-posting-post-jobs .d-flex{display:-webkit-box;display:-ms-flexbox;display:flex;}@media (min-width:1024px){.manage-job-posting-post-jobs .form-flex{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.manage-job-posting-post-jobs .form-flex .form-group.form-radio{margin-right:20px;}.manage-job-posting-post-jobs .form-flex .form-group.form-radio:last-child{margin-right:0;}}.manage-job-posting-post-jobs .align-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.manage-job-posting-post-jobs .mt-20{margin-top:20px;}.manage-job-posting-post-jobs .mt-5{margin-top:5px;}.manage-job-posting-post-jobs .ml-5{margin-left:5px;}.manage-job-posting-post-jobs .ml-40{margin-left:10px;}@media (min-width:1024px){.manage-job-posting-post-jobs .ml-40{margin-left:40px;}}.manage-job-posting-post-jobs .flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap;}.manage-job-posting-post-jobs .title-application{padding:13px 15px;background:#f1f8fe;color:#172642;font-size:16px;font-weight:700;text-transform:uppercase;}.manage-job-posting-post-jobs .title-application span{padding-left:10px;color:#999999;font-size:14px;font-weight:400;text-transform:none;}.manage-job-posting-post-jobs .noti{position:relative;cursor:pointer;}.manage-job-posting-post-jobs .noti em{margin-right:7px;color:#007db2;}.manage-job-posting-post-jobs .noti .toolip{z-index:1;}.manage-job-posting-post-jobs .noti .toolip:before{top:-7.5px;}.manage-job-posting-post-jobs .noti .toolip:after{top:-6.5px;}.manage-job-posting-post-jobs .noti:hover .toolip{opacity:1;}.manage-job-posting-post-jobs .noti:hover .toolip:before, .manage-job-posting-post-jobs .noti:hover .toolip:after{left:10px;opacity:1;}.manage-job-posting-post-jobs .salaryOnPostJob .noti .toolip{right:-5px;left:auto}.manage-job-posting-post-jobs .salaryOnPostJob .noti .toolip:before{top:-7px;}.manage-job-posting-post-jobs .salaryOnPostJob .noti .toolip:after{top:-5px;}.manage-job-posting-post-jobs .main-application-information > * + *{margin-top:20px;}.manage-job-posting-post-jobs .main-application-information .form-wrap > *{margin-top:20px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .row{margin-bottom:0;}.manage-job-posting-post-jobs .main-application-information .form-wrap .row > *{margin-bottom:0;}.manage-job-posting-post-jobs .main-application-information .form-wrap .row + .row{margin-top:20px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .row{margin-bottom:-10px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .row > *{margin-bottom:10px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .checkbox-group{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .checkbox-group + .checkbox-group{margin-top:10px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .checkbox-group .form-group{margin-right:20px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .checkbox-group .form-group:first-child{width:150px;}.manage-job-posting-post-jobs .main-application-information .form-wrap .list-profile-requirement .checkbox-group .form-group:last-child{margin-right:0;}@media (min-width:1200px){.manage-job-posting-post-jobs .main-application-information .form-wrap{padding:0 15px;}}.manage-job-posting-post-jobs .note{margin-top:10px;}.manage-job-posting-post-jobs .note p{color:#999999;font-size:14px;font-weight:400;}.manage-job-posting-post-jobs .list-link{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.manage-job-posting-post-jobs .list-link li{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:10px;padding-right:10px;border-right:1px solid #007db2;}.manage-job-posting-post-jobs .list-link li a{color:#007db2;font-size:14px;font-weight:400;line-height:1;}.manage-job-posting-post-jobs .list-link li a:hover{text-decoration:underline;}.manage-job-posting-post-jobs .list-link li:last-child{border-right:none;}.manage-job-posting-post-jobs .btn-add-location, .manage-job-posting-post-jobs .btnlink{position:relative;color:#007db2;font-size:14px;font-weight:400;z-index:1}.manage-job-posting-post-jobs .btn-add-location em, .manage-job-posting-post-jobs .btnlink em{margin-right:10px;color:#007db2;font-size:16px;}.manage-job-posting-post-jobs .btn-add-location .toolip:before, .manage-job-posting-post-jobs .btnlink .toolip:before{top:-6.5px;}.manage-job-posting-post-jobs .btn-add-location .toolip:after, .manage-job-posting-post-jobs .btnlink .toolip:after{top:-5px;}.manage-job-posting-post-jobs .btn-add-location:hover, .manage-job-posting-post-jobs .btnlink:hover{text-decoration:underline;}.manage-job-posting-post-jobs .btn-add-location:hover .toolip, .manage-job-posting-post-jobs .btnlink:hover .toolip{opacity:1;}.manage-job-posting-post-jobs .btn-add-location:hover .toolip:before, .manage-job-posting-post-jobs .btn-add-location:hover .toolip:after, .manage-job-posting-post-jobs .btnlink:hover .toolip:before, .manage-job-posting-post-jobs .btnlink:hover .toolip:after{z-index:11;left:10px;opacity:1;}.manage-job-posting-post-jobs .btn-popup{position:relative;color:#007db2;font-size:14px;font-weight:400;}.manage-job-posting-post-jobs .btn-popup em{margin-right:10px;color:#007db2;font-size:16px;}.manage-job-posting-post-jobs .btn-popup .toolip:before{top:-6.5px;}.manage-job-posting-post-jobs .btn-popup .toolip:after{top:-5px;}.manage-job-posting-post-jobs .btn-popup:hover{text-decoration:underline;}.manage-job-posting-post-jobs .btn-popup:hover .toolip{opacity:1;}.manage-job-posting-post-jobs .btn-popup:hover .toolip:before, .manage-job-posting-post-jobs .btn-popup:hover .toolip:after{z-index:11;left:10px;opacity:1;}@media (max-width:576px){.manage-job-posting-post-jobs .toolip{width:100%;min-width:100%;}.manage-job-posting-post-jobs .toolip:before, .manage-job-posting-post-jobs .toolip:after{display:none;}}.manage-job-posting-post-jobs .btn-delete{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;margin-top:0;color:red;font-size:14px;font-weight:400;}.manage-job-posting-post-jobs .btn-delete em{margin-right:10px;color:red;font-size:16px;font-weight:600;}.manage-job-posting-post-jobs .btn-delete:hover{text-decoration:underline;}.manage-job-posting-post-jobs .btnlink{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px;}.manage-job-posting-post-jobs .btnlink .toolip{z-index:20;}.manage-job-posting-post-jobs .btnlink .toolip:before{top:-7.5px;}.manage-job-posting-post-jobs .btnlink .toolip:after{top:-6px;}.manage-job-posting-post-jobs .form-group > *{width:100%;}.manage-job-posting-post-jobs .form-group label, .manage-job-posting-post-jobs .form-group .title-label{margin-bottom:10px;color:#5d677a;font-size:16px;font-weight:400;}.manage-job-posting-post-jobs .form-group input{height:45px;border:none;border:none;border-bottom:1px solid #e5e5e5;color:#333;font-size:16px;font-weight:400;}.manage-job-posting-post-jobs .form-group select{height:45px;border:none;border:none;border-bottom:1px solid #e5e5e5;background-image:none;color:#172642;font-size:16px;font-weight:700;}.manage-job-posting-post-jobs .form-group textarea{height:90px;border:none;border:none;border-bottom:1px solid #e5e5e5;color:#999999;font-size:16px;font-weight:400;}.manage-job-posting-post-jobs .form-group .noted{display:block;margin-top:3px;color:red;font-size:12px;font-style:italic;font-weight:400;}.manage-job-posting-post-jobs .form-group.form-note-workfromhome{padding-left:30px;}.manage-job-posting-post-jobs .form-group.form-select label{margin-bottom:0;}.manage-job-posting-post-jobs .form-group.form-qs{margin-bottom:0;}.manage-job-posting-post-jobs .form-group.form-qs label{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.manage-job-posting-post-jobs .form-group.form-qs .btnlink{margin-top:0;margin-left:10px;}.manage-job-posting-post-jobs .form-group.form-checkbox{-webkit-box-align:start;-ms-flex-align:start;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:flex-start;}.manage-job-posting-post-jobs .form-group.form-checkbox input{width:20px;min-width:20px;height:auto;}.manage-job-posting-post-jobs .form-group.form-checkbox label{margin:0;margin-right:5px;margin-left:10px;color:#182642;font-size:14px;cursor:pointer;}@media (min-width:1024px){.manage-job-posting-post-jobs .form-group.form-checkbox label{font-size:16px;}}@media (min-width:1024px){.manage-job-posting-post-jobs .form-group.form-checkbox .btnlink{width:auto;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin-top:0;}}.manage-job-posting-post-jobs .form-group.form-checkbox .noti{width:auto;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin-top:0;}.manage-job-posting-post-jobs .form-group.form-radio{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.manage-job-posting-post-jobs .form-group.form-radio input{width:20px;height:auto;}.manage-job-posting-post-jobs .form-group.form-radio label{margin:0;margin-left:10px;color:#5d677a;font-size:16px;cursor:pointer;}.manage-job-posting-post-jobs .form-group.form-date{position:relative;}.manage-job-posting-post-jobs .form-group.form-date .icon{z-index:11;position:absolute;top:50px;right:0;width:auto;pointer-events:none;}.manage-job-posting-post-jobs .form-group.form-date .icon em{color:#172642;font-size:18px;}.manage-job-posting-post-jobs .form-group.form-submit{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:20px;}.manage-job-posting-post-jobs .form-group.form-submit .btn-submit-add{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:auto;min-width:160px;height:40px;padding:5px 15px;border:1px solid #5d677a;border-radius:5px;background:#5d677a;color:#ffffff;font-size:15px;font-weight:500;text-align:center;transition:0.2s ease-in-out all;}.manage-job-posting-post-jobs .form-group.form-submit .btn-submit-add:hover{background:#ffffff;color:#5d677a;}@media (max-width:576px){.manage-job-posting-post-jobs .form-group.form-submit .btn-submit-add{min-width:200px;margin-right:auto;margin-left:auto;}}@media (max-width:576px){.manage-job-posting-post-jobs .form-group.form-submit .btn-save{min-width:200px;}}@media (max-width:576px){.manage-job-posting-post-jobs .form-group.form-submit .btn-post{min-width:200px;}}.manage-job-posting-post-jobs .form-group.form-submit.form-text{-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:0;}.manage-job-posting-post-jobs .form-group.form-submit.form-text .btn-submit-add{margin-top:10px;}@media (min-width:1280px){.manage-job-posting-post-jobs .form-group.form-submit.form-text{-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.manage-job-posting-post-jobs .form-group.form-submit.form-text > * ~ .btn-submit-add{margin-top:0;margin-left:10px;}}.manage-job-posting-post-jobs .form-group.form-continue{-webkit-box-pack:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px;}.manage-job-posting-post-jobs .form-group.form-continue .btn-gradient{width:auto;min-width:200px;height:40px;padding:5px 15px;background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.manage-job-posting-post-jobs .form-group.form-continue > *{margin:10px;}.manage-job-posting-post-jobs .form-group.form-back-continue{-webkit-box-pack:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center;}.manage-job-posting-post-jobs .form-group.form-back-continue > *{width:auto;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;min-width:180px;height:40px;margin:10px 15px;padding:5px 15px;border-radius:5px;}.manage-job-posting-post-jobs .form-group.form-back-continue .btn-gradient{background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.manage-job-posting-post-jobs .form-group.form-back-continue .btn-gradient.btn-post{background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);}.manage-job-posting-post-jobs .form-group.form-select-chosen select{display:none;}.manage-job-posting-post-jobs .form-group.form-select-chosen label{margin-bottom:5px;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container{-webkit-box-shadow:none !important;width:100% !important;height:40px !important;box-shadow:none !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container:focus{-webkit-box-shadow:none !important;box-shadow:none !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices{height:100%;padding:5px;padding-left:0;border:none;border-bottom:1px solid #93bcdc;background-image:none;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices:focus{-webkit-box-shadow:none !important;box-shadow:none !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice{-webkit-box-pack:center !important;-ms-flex-pack:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;align-items:center !important;justify-content:center !important;height:26px !important;border:none !important;background:#ebf8ff !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close{background:none !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close:before{color:#5d677a;font-family:"Material Design Icons";font-size:11px;content:"\f156";}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-choice .search-choice-close:hover:before{color:#fc0821;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-field input{font-family:"Roboto", sans-serif !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-choices .search-field .chosen-search-input{color:#172642;font-size:16px;font-weight:700;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar{width:6px !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-track{background:#eaeaea !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-thumb{background:#7fcb42 !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .chosen-results::-webkit-scrollbar-thumb:hover{background:#7fcb42 !important;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result{position:relative;padding-left:43px;color:#182642;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result::after{position:absolute;top:5px;left:20px;color:#5d677a;font:normal normal normal 24px/1 Material Design Icons;font-size:15px;content:"\f131";}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result:hover{color:#ffffff;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result:hover::after{color:#ffffff;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result.highlighted{color:#ffffff;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .active-result.highlighted::after{color:#ffffff;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected{position:relative;padding-left:43px;color:#182642;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected::after{position:absolute;top:5px;left:20px;color:#287ab9;font:normal normal normal 24px/1 Material Design Icons;font-size:15px;content:"\f132";opacity:1;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected:hover{color:#182642;cursor:pointer;}.manage-job-posting-post-jobs .form-group.form-select-chosen .chosen-container .chosen-drop .result-selected:hover::after{color:#287ab9;}.manage-job-posting-post-jobs .form-salary{-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -15px;}.manage-job-posting-post-jobs .form-salary > *{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;width:100%;max-width:33.3333%;padding:0 15px;}.manage-job-posting-post-jobs .form-experience{-webkit-box-align:end;-ms-flex-align:end;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:flex-end;margin:0 -10px;}@media (min-width:1024px){.manage-job-posting-post-jobs .form-experience{-ms-flex-wrap:nowrap;flex-wrap:nowrap;}}.manage-job-posting-post-jobs .form-experience .form-group{padding:0 10px;}.manage-job-posting-post-jobs .form-experience .form-group label{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:0;padding-right:5px;color:#172642;}.manage-job-posting-post-jobs .form-experience .form-group.form-text{-webkit-box-align:end;-ms-flex-align:end;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:flex-end;}.manage-job-posting-post-jobs .form-experience .form-group.form-text input{width:75px;}.manage-job-posting-post-jobs .form-experience .form-group.form-note{color:#172642;}.manage-job-posting-post-jobs .checkbox-wrap{padding:0 15px;}.manage-job-posting-post-jobs .checkbox-wrap .row{margin-bottom:-10px;}.manage-job-posting-post-jobs .checkbox-wrap .row > *{margin-bottom:10px;}.manage-job-posting-post-jobs .checkbox-wrap .form-group.form-checkbox label{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;color:#182642;font-size:16px;font-weight:400;cursor:pointer;}.manage-job-posting-post-jobs .checkbox-wrap .form-group.form-checkbox label .material-icons{width:25px;min-width:25px;color:#5d677a;font-size:18px;}.manage-job-posting-post-jobs .checkbox-wrap .form-group.form-checkbox label .fa{width:25px;min-width:25px;color:#5d677a;font-size:16px;}.manage-job-posting-post-jobs .gender-wrap .form-group.form-radio{margin-right:20px;}@media (min-width:1024px){.manage-job-posting-post-jobs .gender-wrap .form-group.form-radio{margin-right:50px;}}@media (min-width:1440px){.manage-job-posting-post-jobs .gender-wrap .form-group.form-radio{margin-right:120px;}}.manage-job-posting-post-jobs .form-age{-ms-flex-wrap:wrap;flex-wrap:wrap;}.manage-job-posting-post-jobs .form-age .form-group{-ms-flex-align:center;display:-ms-flexbox;display:flex;align-items:center;width:30%;margin-right:30px;}.manage-job-posting-post-jobs .form-age .form-group.form-text label{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:5px;margin-bottom:0;color:#172642;}.manage-job-posting-post-jobs .form-age .form-group.form-text input{width:100%;height:40px;text-align:center}.manage-job-posting-post-jobs .preview{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.manage-job-posting-post-jobs .btn-preview{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:160px;height:40px;padding:5px 15px;border:1px solid #86cb49;border-radius:5px;background:#86cb49;color:#ffffff;font-size:15px;font-weight:500;text-align:center;transition:0.2s ease-in-out all;}.manage-job-posting-post-jobs .btn-preview:hover{background:#ffffff;color:#86cb49;}.manage-job-posting-post-jobs .list-image{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;}.manage-job-posting-post-jobs .list-image .image-item{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;align-items:center;justify-content:center;width:190px;height:120px;margin-right:10px;margin-bottom:10px;overflow:hidden;}.manage-job-posting-post-jobs .list-image .image-item img{-o-object-fit:cover;width:100%;height:100%;object-fit:cover;}.manage-job-posting-post-jobs .list-image .image-item .btn-del-img{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:11;position:absolute;top:5px;right:5px;align-items:center;justify-content:center;width:14px;height:14px;background:rgba(93, 103, 122, 0.7);color:#ffffff;font-size:14px;}.manage-job-posting-post-jobs .list-image .image-item .btn-del-img em{font-size:14px;}.manage-job-posting-post-jobs .upload-img{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;margin-top:10px;}.manage-job-posting-post-jobs .upload-img input{display:none;}.manage-job-posting-post-jobs .upload-img label{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:170px;height:30px;margin-right:10px;padding:5px 15px;border-radius:5px;background:#5d677a;color:#ffffff;font-size:14px;text-align:center;cursor:pointer;}.manage-job-posting-post-jobs .upload-img label em{margin-right:5px;font-size:18px;}.manage-job-posting-post-jobs .upload-img label.disabled{opacity:0.6;}.manage-job-posting-post-jobs .upload-img .noti{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.manage-job-posting-post-jobs .other-information-wrap p{color:#5d677a;font-size:15px;font-weight:400;}.manage-job-posting-post-jobs .other-information-wrap .form-group.form-checkbox{margin-top:10px;}.manage-job-posting-post-jobs .other-information-wrap .form-group.form-checkbox .noti{width:auto;}.manage-job-posting-post-jobs .other-information-wrap .form-group.form-checkbox label{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:15px;}.manage-job-posting-post-jobs .form-standard{display:none;margin-top:0;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:15px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex > *{width:auto;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex select{width:100%;max-width:100px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex p{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:5px;color:#5d677a;font-size:16px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex .see-sample{-webkit-box-pack:end;-ms-flex-pack:end;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-end;color:#007db2;font-size:14px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea textarea{height:150px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-radio{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-radio > *{width:100%;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-radio > * + *{margin-top:10px;}@media (min-width:1024px){.manage-job-posting-post-jobs .form-standard .form-wrap{padding-left:30px;}.manage-job-posting-post-jobs .form-standard .form-wrap .form-group.form-textarea .d-flex select{max-width:400px;}}.manage-job-posting-post-jobs .table{width:100%;overflow-x:auto;}.manage-job-posting-post-jobs .table p{margin-bottom:15px;color:#182642;}.manage-job-posting-post-jobs .table table{width:100%;min-width:1000px;}.manage-job-posting-post-jobs .table table thead{border:1px solid #e6e6e6;background:#e6e6e6;}.manage-job-posting-post-jobs .table table thead th{padding:7.5px 10px;color:#182642;font-size:16px;font-weight:500;text-align:center;text-transform:uppercase;}.manage-job-posting-post-jobs .table table thead th:first-child{text-align:left;}@media (min-width:1440px){.manage-job-posting-post-jobs .table table thead th:first-child{padding-left:50px;}}.manage-job-posting-post-jobs .table table tbody tr{border:1px solid #e6e6e6;}.manage-job-posting-post-jobs .table table tbody td{padding:12px 10px;color:#999999;font-size:14px;text-align:center;}.manage-job-posting-post-jobs .table table tbody td > *{margin-bottom:5px;color:#999999;}.manage-job-posting-post-jobs .table table tbody td p{color:#999999;}.manage-job-posting-post-jobs .table table tbody td:first-child, .manage-job-posting-post-jobs .table table tbody td:last-child{text-align:left;}.manage-job-posting-post-jobs .table table tbody td.title{color:#333333;}@media (min-width:1440px){.manage-job-posting-post-jobs .table table tbody td:first-child{padding-left:50px;}}@media (min-width:1280px){.manage-job-posting-post-jobs .table table{min-width:1050px;}}.manage-job-posting-post-jobs .table .form-group.form-radio{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.manage-job-posting-post-jobs .table .box{margin-right:10px;padding:1.25px 19px;border-radius:3px;background:#e1e1e1;}.manage-job-posting-post-jobs .notification-email{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;}.manage-job-posting-post-jobs .notification-email .form-group{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:auto;padding-right:80px;}.manage-job-posting-post-jobs .notification-email .form-group .title-label{color:#182642;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox label span{display:-webkit-box;display:-ms-flexbox;display:flex;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox label.green span{color:#02bd0e;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox label.blue span{color:#0197d2;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox label.yellow span{color:#fcb714;}.manage-job-posting-post-jobs .notification-email .form-group.form-checkbox label.red span{color:#fd0000;}.manage-job-posting-post-jobs .notification-email .form-group:first-child{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;width:100%;max-width:100%;}@media (max-width:576px){.manage-job-posting-post-jobs .main-tabslet .tabslet-tab::-webkit-scrollbar{height:4px;}.manage-job-posting-post-jobs .main-tabslet .tabslet-tab::-webkit-scrollbar-track{background:#f9f9f9;}.manage-job-posting-post-jobs .main-tabslet .tabslet-tab::-webkit-scrollbar-thumb{background:#86cb49;}}.manage-job-posting-post-jobs .other-additional-wrap{display:none;}.manage-job-posting-post-jobs .location-list-add .location-item{display:none;}.manage-job-posting-post-jobs .location-list-add .location-item + .location-item{margin-top:20px;}.manage-job-posting-post-jobs .location-list-add .location-item.active{display:block;}.manage-job-posting-post-jobs .list-tag{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;margin-top:10px;}.manage-job-posting-post-jobs .list-tag .tag-item{position:relative;margin-right:10px;margin-bottom:10px;padding:5px 15px;padding-right:20px;background:#f1f1f1;color:#182642;font-size:16px;font-weight:400;}.manage-job-posting-post-jobs .list-tag .tag-item .delete-tag{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:11;position:absolute;top:2px;right:2px;align-items:center;justify-content:center;width:14px;height:14px;background:rgba(93, 103, 122, 0.7);color:#ffffff;font-size:14px;}.manage-job-posting-post-jobs .list-tag .tag-item .delete-tag em{font-size:14px;}.jobs-posting-modal{max-width:450px;padding:0;background:#ffffff;}.jobs-posting-modal .modal-head{padding-bottom:15px;border-bottom:2px solid #efefef;}.jobs-posting-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal .modal-body{padding:15px;text-align:center;}@media (min-width:1024px){.jobs-posting-modal .modal-body{padding:30px;}}@media (min-width:1200px){.jobs-posting-modal .modal-body{padding:45px;}}.jobs-posting-modal .modal-body .name{margin-top:20px;color:#172642;font-size:16px;font-weight:900;text-transform:uppercase;}@media (min-width:1200px){.jobs-posting-modal .modal-body .name{margin-top:25px;font-size:18px;}}.jobs-posting-modal .modal-body .des{margin-top:10px;color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal .modal-body .button{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-top:15px;}.jobs-posting-modal .modal-body .button .btn-gradient{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:150px;height:40;padding:5px 15px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);color:#ffffff;font-size:16px;font-weight:500;text-align:center;transition:0.4s ease-in-out all;}.jobs-posting-modal .modal-body .button .btn-gradient em{padding-right:5px;font-size:18px;}.jobs-posting-modal .main-pagination ul{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.jobs-posting-modal .main-pagination ul li{padding:0 2.5px;}.jobs-posting-modal .main-pagination ul li a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border:1px solid #cccccc;border-radius:50%;background:#cccccc;color:#ffffff;font-size:14px;font-weight:400;transition:0.4s ease-in-out all;}.jobs-posting-modal .main-pagination ul li a:hover{border:1px solid #0097d1;background:#0097d1;color:#ffffff;text-decoration:none;}.jobs-posting-modal .main-pagination ul li a.FirstPage, .jobs-posting-modal .main-pagination ul li a.LastPage{border-color:#f5f5f5;background:#f5f5f5;}.jobs-posting-modal .main-pagination ul li a.FirstPage em, .jobs-posting-modal .main-pagination ul li a.LastPage em{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;color:#bbbbbb;font-size:18px;transition:0.4s ease-in-out all;}.jobs-posting-modal .main-pagination ul li a.FirstPage:hover, .jobs-posting-modal .main-pagination ul li a.LastPage:hover{border:1px solid #0097d1;background:#0097d1;color:#ffffff;text-decoration:none;}.jobs-posting-modal .main-pagination ul li a.FirstPage:hover em, .jobs-posting-modal .main-pagination ul li a.LastPage:hover em{color:#ffffff;}.jobs-posting-modal .main-pagination ul li.active a{border:1px solid #0097d1;background:#0097d1;color:#ffffff;}.jobs-posting-modal .form-wrap .form-group + .form-group{margin-top:25px;}.jobs-posting-modal .form-wrap .form-group label{width:100%;color:#5d677a;font-size:16px;font-weight:400;text-align:left;}.jobs-posting-modal .form-wrap .form-group input{width:100%;padding:5px 0;border:none;border-bottom:1px solid #e5e5e5;color:#999999;font-size:16px;font-weight:400;}.jobs-posting-modal .form-wrap .form-group select{width:100%;padding:5px 0;border:none;border-bottom:1px solid #e5e5e5;background-image:none;color:#172642;font-size:16px;font-weight:700;}.jobs-posting-modal .form-wrap .form-group textarea{width:100%;height:40px;padding:5px 0;padding:5px;border:none;border-bottom:1px solid #e5e5e5;color:#999999;font-size:14px;font-weight:400;}.jobs-posting-modal .form-wrap .form-group textarea::-webkit-input-placeholder{color:#999999;font-size:16px;}.jobs-posting-modal .form-wrap .form-group textarea::-moz-placeholder{color:#999999;font-size:16px;}.jobs-posting-modal .form-wrap .form-group textarea:-ms-input-placeholder{color:#999999;font-size:16px;}.jobs-posting-modal .form-wrap .form-group textarea::-ms-input-placeholder{color:#999999;font-size:16px;}.jobs-posting-modal .form-wrap .form-group textarea::placeholder{color:#999999;font-size:16px;}.jobs-posting-modal .form-wrap .form-group.form-multiple-select select{height:100%;min-height:50px;max-height:128px;margin:0;padding:5px 15px;border:1px solid #e7e7e7;color:#172642;font-size:16px;font-weight:400;}.jobs-posting-modal .form-wrap .form-group.form-checkbox .group{display:-webkit-box;display:-ms-flexbox;display:flex;}.jobs-posting-modal .form-wrap .form-group.form-checkbox .group + .group{margin-top:10px;}.jobs-posting-modal .form-wrap .form-group.form-checkbox .group input{width:15px;height:15px;}.jobs-posting-modal .form-wrap .form-group.form-checkbox .group label{padding-left:15px;color:#182642;font-size:16px;font-weight:400;cursor:pointer;}.jobs-posting-modal .form-wrap .form-group.form-radio .group{display:-webkit-box;display:-ms-flexbox;display:flex;}.jobs-posting-modal .form-wrap .form-group.form-radio .group + .group{margin-top:10px;}.jobs-posting-modal .form-wrap .form-group.form-radio .group input{width:15px;height:15px;}.jobs-posting-modal .form-wrap .form-group.form-radio .group label{padding-left:15px;color:#182642;font-size:16px;font-weight:400;cursor:pointer;}.jobs-posting-modal .form-wrap .form-group .noted{display:block;margin-top:5px;color:#182642;font-size:14px;font-weight:400;}.jobs-posting-modal .form-wrap .form-submit{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;}.jobs-posting-modal .form-wrap .form-submit > *{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;height:40px;margin:5px;padding:5px 15px;border-radius:5px;color:#ffffff;font-size:16px;font-weight:700;text-align:center;transition:0.2s ease-in-out all;}.jobs-posting-modal .form-wrap .form-submit .btn-cancel{background:#6c757d;}.jobs-posting-modal .form-wrap .form-submit .btn-prevew{background:#86cb49;}.jobs-posting-modal .form-wrap .form-submit .btn-gradient{background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.jobs-posting-modal .list-collapse{margin-top:20px;}.jobs-posting-modal .list-collapse .title{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;padding:8px 30px;padding-right:15px;background:#f1f8fe;color:#172642;font-size:16px;font-weight:700;text-transform:uppercase;cursor:pointer;}.jobs-posting-modal .list-collapse .title em{-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;font-size:30px;transition:0.2s ease-in-out all;}.jobs-posting-modal .list-collapse .title.active em{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.jobs-posting-modal .list-collapse .content{display:none;padding:30px;}.jobs-posting-modal .list-collapse .content > *{color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal .list-collapse .content * + *{margin-top:15px;}.jobs-posting-modal .list-collapse .content ul li{position:relative;padding-left:20px;}.jobs-posting-modal .list-collapse .content ul li + li{margin-top:3px;}.jobs-posting-modal .list-collapse .content ul li::before{position:absolute;top:7px;left:0;width:7px;height:7px;border-radius:50%;background:#cccccc;content:"";}.jobs-posting-modal .list-collapse li + li{margin-top:20px;}.jobs-posting-modal .main-maps{display:block;position:relative;margin-top:20px;padding-top:47.0588235294%;}.jobs-posting-modal .main-maps img{-o-object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}.jobs-posting-modal .main-maps iframe{-o-object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}@media (max-width:1440px){.jobs-posting-modal .main-maps{padding-top:40%;}}@media (max-width:1366px){.jobs-posting-modal .main-maps{padding-top:30%;}}.jobs-posting-modal .mt-20{margin-top:20px;}.jobs-posting-modal.jobs-posting-2-modal, .jobs-posting-modal.jobs-posting-12-modal{width:490px;max-width:100%;padding:30px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-2-modal .modal-body, .jobs-posting-modal.jobs-posting-12-modal .modal-body{padding:0;padding-top:20px;}.jobs-posting-modal.jobs-posting-2-modal .modal-body .form-radio, .jobs-posting-modal.jobs-posting-12-modal .modal-body .form-radio{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.jobs-posting-modal.jobs-posting-2-modal .modal-body .form-radio .group, .jobs-posting-modal.jobs-posting-12-modal .modal-body .form-radio .group{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:40px;}.jobs-posting-modal.jobs-posting-2-modal .modal-body .form-radio .group:last-child, .jobs-posting-modal.jobs-posting-12-modal .modal-body .form-radio .group:last-child{margin-right:0;}.jobs-posting-modal.jobs-posting-2-modal .modal-body .form-radio .group label, .jobs-posting-modal.jobs-posting-12-modal .modal-body .form-radio .group label{width:100%;padding-left:10px;font-size:14px;font-weight:500;}.jobs-posting-modal.jobs-posting-2-modal .modal-body .form-radio .group input, .jobs-posting-modal.jobs-posting-12-modal .modal-body .form-radio .group input{width:16px;}@media (min-width:1200px){.jobs-posting-modal.jobs-posting-2-modal, .jobs-posting-modal.jobs-posting-12-modal{padding-bottom:40px;}}.jobs-posting-modal.jobs-posting-14-modal{width:490px;max-width:100%;padding:30px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-14-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-14-modal .modal-body{padding:0;padding-top:20px;}.jobs-posting-modal.jobs-posting-14-modal .modal-body p{color:#5d677a;font-size:16px;font-weight:400;text-align:left;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-group + .form-group{margin-top:15px;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-group .noted{text-align:left;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-radio{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;margin-top:5px;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-radio .group{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:40px;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-radio .group:last-child{margin-right:0;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-radio .group label{width:100%;padding-left:10px;font-size:14px;font-weight:500;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-radio .group input{width:16px;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .note-alerts{margin-top:15px;color:#182642;font-size:12px;font-weight:400;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .note-alerts a{color:#007db2;}.jobs-posting-modal.jobs-posting-14-modal .modal-body .form-submit{margin-top:25px;}@media (min-width:1200px){.jobs-posting-modal.jobs-posting-14-modal{padding-bottom:40px;}}.jobs-posting-modal.jobs-posting-3-modal{width:450px;max-width:100%;}.jobs-posting-modal.jobs-posting-3-modal .fancybox-close-small{color:#ffffff;}.jobs-posting-modal.jobs-posting-3-modal .modal-head{padding:15px;background:#86cb49;text-align:center;}.jobs-posting-modal.jobs-posting-3-modal .modal-head img{height:70px;}.jobs-posting-modal.jobs-posting-3-modal .modal-body{padding-top:20px;border:1px solid #e0e0e0;border-top:none;text-align:center;}.jobs-posting-modal.jobs-posting-3-modal .modal-body .title{margin-bottom:10px;color:#172642;font-size:18px;font-weight:700;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-3-modal .modal-body p{color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal.jobs-posting-3-modal .modal-body .line{margin-top:25px;margin-bottom:25px;border-top:1px solid #e5e5e5;}.jobs-posting-modal.jobs-posting-3-modal .modal-body .button{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.jobs-posting-modal.jobs-posting-3-modal .modal-body .button a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:90px;height:30px;padding:5px 15px;border:1px solid #0097d1;border-radius:5px;background:#0097d1;color:#ffffff;font-size:16px;font-weight:500;text-align:center;transition:0.2s ease-in-out all;}.jobs-posting-modal.jobs-posting-3-modal .modal-body .button a:hover{background:#ffffff;color:#0097d1;}.jobs-posting-modal.jobs-posting-4-modal, .jobs-posting-modal.jobs-posting-6-modal{width:930px;max-width:100%;padding:20px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-4-modal .fancybox-close-small, .jobs-posting-modal.jobs-posting-6-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-4-modal .modal-head, .jobs-posting-modal.jobs-posting-6-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-4-modal .modal-head .title, .jobs-posting-modal.jobs-posting-6-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-4-modal .modal-body, .jobs-posting-modal.jobs-posting-6-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-4-modal .modal-body .link a, .jobs-posting-modal.jobs-posting-6-modal .modal-body .link a{color:#007db2;font-size:18px;font-weight:700;text-decoration:underline;}.jobs-posting-modal.jobs-posting-5-modal{width:930px;max-width:100%;padding:20px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-5-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-5-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-5-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-5-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .full-content > *{color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .full-content * + *{margin-top:15px;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .full-content ul li{position:relative;padding-left:20px;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .full-content ul li + li{margin-top:3px;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .full-content ul li::before{position:absolute;top:7px;left:0;width:7px;height:7px;border-radius:50%;background:#cccccc;content:"";}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table{margin-top:20px;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table{width:100%;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table tr{border:1px solid #e6e6e6;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table thead{background:#e6e6e6;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table thead th{padding:9px 15px;color:#172642;font-size:14px;font-weight:700;text-align:center;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table thead th:first-child{text-align:left;}@media (min-width:1024px){.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table thead th{padding-left:35px;}}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table tbody td{padding:7.5px 15px;color:#333333;font-size:14px;font-weight:400;text-align:center;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table tbody td:first-child{text-align:left;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table tbody td em{font-weight:normal;}@media (min-width:1024px){.jobs-posting-modal.jobs-posting-5-modal .modal-body .table table tbody td{padding-left:35px;}}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table .name{margin:0;color:#333333;font-size:14px;font-weight:400;text-transform:none;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table .title{display:-webkit-box;display:-ms-flexbox;display:flex;}.jobs-posting-modal.jobs-posting-5-modal .modal-body .table em{color:#007db2;font-size:18px;font-weight:500;}.jobs-posting-modal.jobs-posting-7-modal{width:930px;max-width:100%;padding:20px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-7-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-7-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-7-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-7-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-7-modal .modal-body .form-group{margin-top:10px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li{margin-top:30px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step .step p{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:110px;height:50px;padding:5px 15px;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);color:#007db2;font-size:16px;font-weight:700;text-align:center;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step .success{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:20px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step .success .icon{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step .success p{margin-top:5px;color:#182642;font-size:16px;font-weight:400;}@media (min-width:1024px){.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li{-webkit-box-pack:start;-ms-flex-pack:start;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-start;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .step{position:relative;width:160px;min-width:160px;margin-right:25px;padding-left:30px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .step::before{position:absolute;top:0;left:6.5px;width:2px;height:calc(100% + 30px);background:rgba(0, 125, 178, 0.4);content:"";}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .step .dot{z-index:11;position:absolute;top:15px;left:0;width:15px;height:15px;border-radius:50%;background:#007db2;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .step .dot::before{-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);z-index:0;position:absolute;top:50%;left:50%;width:calc(100% + 6px);height:calc(100% + 6px);transform:translate(-50%, -50%);border-radius:50%;background:rgba(255, 255, 255, 0.5);content:"";}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .step .dot::after{-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);z-index:1;position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%, -50%);border-radius:50%;background:#007db2;content:"";}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .form-group{margin:0;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .form-group.form-multiple-select{width:330px;min-width:330px;margin-right:30px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li .form-group.form-multiple-select select{height:auto;min-height:100px;max-height:190px;}.jobs-posting-modal.jobs-posting-7-modal .list-step-by-step li:last-child .step::before{height:100%;}}.jobs-posting-modal.jobs-posting-8-modal{width:930px;max-width:100%;padding:20px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-8-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-8-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-8-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-8-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-8-modal .modal-body .form-group{margin-top:10px;}.jobs-posting-modal.jobs-posting-8-modal .modal-body .btn-add-location{background:none;color:#109ed9;font-weight:400;}.jobs-posting-modal.jobs-posting-8-modal .modal-body .btn-add-location:hover{text-decoration:underline;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-8-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-8-modal .modal-body{padding-top:10px;padding-bottom:0;}}.jobs-posting-modal.jobs-posting-9-modal{width:490px;max-width:100%;padding:20px 40px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-9-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-9-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-9-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-9-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-9-modal .modal-body .form-group{margin-top:10px;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-9-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-9-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-9-modal{padding:20px;}}.jobs-posting-modal.jobs-posting-10-modal, .jobs-posting-modal.jobs-posting-16-modal{width:530px;max-width:100%;padding:20px 40px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-10-modal .row, .jobs-posting-modal.jobs-posting-16-modal .row{margin-bottom:0;}.jobs-posting-modal.jobs-posting-10-modal .row > *, .jobs-posting-modal.jobs-posting-16-modal .row > *{margin-bottom:15px;}.jobs-posting-modal.jobs-posting-10-modal p, .jobs-posting-modal.jobs-posting-16-modal p{color:#182642;}.jobs-posting-modal.jobs-posting-10-modal .d-flex, .jobs-posting-modal.jobs-posting-16-modal .d-flex{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;}.jobs-posting-modal.jobs-posting-10-modal .d-flex p, .jobs-posting-modal.jobs-posting-16-modal .d-flex p{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:5px;color:#5d677a;font-size:16px;}.jobs-posting-modal.jobs-posting-10-modal .d-flex select, .jobs-posting-modal.jobs-posting-16-modal .d-flex select{width:200px;}.jobs-posting-modal.jobs-posting-10-modal .d-flex a, .jobs-posting-modal.jobs-posting-16-modal .d-flex a{-webkit-box-pack:end;-ms-flex-pack:end;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:flex-end;color:#007db2;font-size:14px;}.jobs-posting-modal.jobs-posting-10-modal .d-flex a:hover, .jobs-posting-modal.jobs-posting-16-modal .d-flex a:hover{text-decoration:underline;}.jobs-posting-modal.jobs-posting-10-modal .fancybox-close-small, .jobs-posting-modal.jobs-posting-16-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-10-modal .modal-head, .jobs-posting-modal.jobs-posting-16-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-10-modal .modal-head .title, .jobs-posting-modal.jobs-posting-16-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-10-modal .modal-body, .jobs-posting-modal.jobs-posting-16-modal .modal-body{padding:20px 0;padding-bottom:0px;text-align:left;}.jobs-posting-modal.jobs-posting-10-modal .modal-body .form-group, .jobs-posting-modal.jobs-posting-16-modal .modal-body .form-group{margin-top:10px;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-10-modal, .jobs-posting-modal.jobs-posting-16-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-10-modal .modal-body, .jobs-posting-modal.jobs-posting-16-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-10-modal, .jobs-posting-modal.jobs-posting-16-modal{padding:20px;}}.jobs-posting-modal.jobs-posting-11-modal{width:530px;max-width:100%;padding:20px 40px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-11-modal .row{margin-bottom:0;}.jobs-posting-modal.jobs-posting-11-modal .row > *{margin-bottom:15px;}.jobs-posting-modal.jobs-posting-11-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-11-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-11-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-11-modal .modal-body{padding:20px 0;padding-bottom:0px;text-align:left;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group{margin-top:10px;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group textarea{height:50px;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group.form-radio{display:-webkit-box;display:-ms-flexbox;display:flex;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group.form-radio input{width:20px;height:20px;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group.form-radio .group{width:calc(100% - 20px);padding-left:20px;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group.form-radio .group input{width:100%;height:40px;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-11-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-11-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-11-modal{padding:20px;}}.jobs-posting-modal.jobs-posting-13-modal{width:930px;max-width:100%;padding:30px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-13-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-13-modal .modal-body{padding:0;padding-top:20px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:0;-ms-flex:0 0 100%;display:-webkit-box;display:-ms-flexbox;display:flex;flex:0 0 100%;align-items:center;justify-content:center;width:100%;max-width:100%;margin-right:40px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group + .group{margin-top:20px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group:last-child{margin-right:0;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group label{width:100%;color:#5d677a;font-size:14px;font-size:16px;font-weight:400;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group input{width:16px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .left{width:16px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .right{width:calc( 100% - 16px );padding-left:10px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .right input{width:100%;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .right .form-checkbox{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:flex-start;margin-top:15px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .right .form-checkbox input{width:15px;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group .right .form-checkbox label{padding-left:10px;color:#5d677a;font-size:16px;font-weight:400;}@media (min-width:768px){.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;margin:0;margin-top:0;}}@media (min-width:1024px){.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio .group{max-width:380px;}}@media (min-width:1024px){.jobs-posting-modal.jobs-posting-13-modal .modal-body .form-radio{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;}}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table{margin-top:15px;overflow-x:auto;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table p{color:#182642;font-size:16px;font-weight:400;text-align:left;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table p span{color:#007db2;font-weight:500;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table{width:100%;min-width:800px;margin-top:15px;border:1px solid #ededed;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table thead{background:#e6e6e6;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table thead th{padding:10px 15px;color:#172642;font-size:14px;font-weight:700;text-align:center;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table tbody td{padding:10px 15px;color:#333333;font-size:14px;font-weight:400;text-align:center;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table tbody tr{border-bottom:1px solid #ededed;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table tbody p{text-align:center;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .table table tbody .folder{color:#007db2;}.jobs-posting-modal.jobs-posting-13-modal .modal-body .btn-delete{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;max-width:140px;height:40px;margin-top:30px;margin-right:auto;margin-left:auto;padding:5px 15px;border-radius:5px;background:#6c757d;color:#ffffff;font-size:15px;font-weight:500;text-align:center;}@media (max-width:576px){.jobs-posting-modal.jobs-posting-13-modal{height:98vh;max-height:98vh;overflow-y:auto;}}.jobs-posting-modal.jobs-posting-15-modal{width:700px;max-width:100%;padding:20px 40px;border:1px solid #e0e0e0;}.jobs-posting-modal.jobs-posting-15-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-15-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-15-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-15-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head{padding-bottom:20px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .jobs-waiting-title, .jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .status{color:#182642;font-size:16px;font-weight:500;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .jobs-waiting-title span, .jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .status span{color:#007db2;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status{-webkit-box-pack:justify;-ms-flex-pack:justify;-ms-flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status > *{padding-right:10px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-right:10px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li p{padding-right:10px;border-right:1px solid #000;color:#172642;font-size:16px;font-weight:500;line-height:1;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li p span{font-weight:400;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li:last-child p{border:none;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .status{padding-right:0;}@media (max-width:576px){.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date{-ms-flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;flex-wrap:wrap;justify-content:flex-start;padding-right:0;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;line-height:1.5;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .head .date-and-status .date li p{border:none;line-height:1.5;}}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .body{padding:20px 0;border-top:1px solid #efefef;border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li{-webkit-box-align:start;-ms-flex-align:start;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:flex-start;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li + li{margin-top:5px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li .name{width:180px;min-width:180px;margin-top:0;padding-right:10px;color:#182642;font-size:16px;font-weight:700;text-transform:none;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li p{color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li p.blue{color:#007db2;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li p.blue a{color:#007db2;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .list-info-posting li a:hover{text-decoration:underline;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .foot{padding-top:20px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-preview .foot .noted{color:red;font-size:14px;font-style:italic;font-weight:400;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-submit{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;margin-top:20px;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-submit > *{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;height:40px;margin:5px;padding:5px 15px;border-radius:5px;color:#ffffff;font-size:16px;font-weight:700;text-align:center;transition:0.2s ease-in-out all;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-submit .btn-cancel{background:#6c757d;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-submit .btn-prevew{background:#86cb49;}.jobs-posting-modal.jobs-posting-15-modal .modal-body .form-group.form-submit .btn-gradient{background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.jobs-posting-modal.jobs-posting-16-modal .form-wrap .form-group textarea{height:150px;}.jobs-posting-modal.jobs-posting-17-modal{width:530px;max-width:100%;padding:20px 40px;}.jobs-posting-modal.jobs-posting-17-modal p{color:#182642;}.jobs-posting-modal.jobs-posting-17-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-17-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-17-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-17-modal .modal-body{padding:20px 0;padding-bottom:0px;text-align:left;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .title{padding-bottom:15px;border-bottom:1px solid #efefef;font-size:16px;font-weight:700;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .full-content{padding-top:15px;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .form-submit{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .form-submit .btn-cancel{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;height:40px;margin-top:20px;padding:5px 15px;border-radius:5px;background:#6c757d;color:#ffffff;font-size:16px;font-weight:700;text-align:center;transition:0.2s ease-in-out all;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-17-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-17-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-17-modal{padding:20px;}}.jobs-posting-modal.jobs-posting-18-modal{width:490px;max-width:100%;padding:20px 40px;}.jobs-posting-modal.jobs-posting-18-modal p{color:#182642;}.jobs-posting-modal.jobs-posting-18-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-18-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-18-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-18-modal .modal-body{padding:20px 0;padding-bottom:0px;}.jobs-posting-modal.jobs-posting-18-modal .modal-body .des{padding:0 15px;}.jobs-posting-modal.jobs-posting-18-modal .modal-body .button .btn-cancel{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;height:40px;margin:5px 10px;padding:5px 15px;border-radius:5px;background:#6c757d;color:#ffffff;font-size:16px;font-weight:700;text-align:center;transition:0.2s ease-in-out all;}.jobs-posting-modal.jobs-posting-18-modal .modal-body .button .btn-save{height:40px;margin:5px 10px;background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-18-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-18-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-18-modal{padding:20px;}}.jobs-posting-modal.jobs-posting-19-modal, .jobs-posting-modal.jobs-posting-20-modal{width:700px;max-width:100%;padding:20px 40px;}.jobs-posting-modal.jobs-posting-19-modal .fancybox-close-small, .jobs-posting-modal.jobs-posting-20-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.jobs-posting-modal.jobs-posting-19-modal .modal-head, .jobs-posting-modal.jobs-posting-20-modal .modal-head{border-bottom:1px solid #efefef;}.jobs-posting-modal.jobs-posting-19-modal .modal-head .title, .jobs-posting-modal.jobs-posting-20-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-19-modal .modal-body, .jobs-posting-modal.jobs-posting-20-modal .modal-body{padding:20px 0;text-align:left;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .content, .jobs-posting-modal.jobs-posting-20-modal .modal-body .content{color:#182642;font-size:16px;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .content ul li, .jobs-posting-modal.jobs-posting-20-modal .modal-body .content ul li{position:relative;padding-left:20px;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .content ul li::before, .jobs-posting-modal.jobs-posting-20-modal .modal-body .content ul li::before{position:absolute;top:7px;left:0;width:7px;height:7px;border-radius:50%;background:#cccccc;content:"";}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table{margin-top:20px;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table{width:100%;border:1px solid #e6e6e6;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table thead, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table thead{background:#e6e6e6;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table thead th, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table thead th{padding:10px 15px;color:#172642;font-size:14px;font-weight:700;text-align:center;text-transform:uppercase;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table tbody tr, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table tbody tr{border-bottom:1px solid #e6e6e6;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table tbody td, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table tbody td{padding:10px;color:#333333;font-size:14px;font-weight:400;text-align:center;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .table table tbody td span, .jobs-posting-modal.jobs-posting-20-modal .modal-body .table table tbody td span{color:#007db2;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .button, .jobs-posting-modal.jobs-posting-20-modal .modal-body .button{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.jobs-posting-modal.jobs-posting-19-modal .modal-body .button .btn-gradient, .jobs-posting-modal.jobs-posting-20-modal .modal-body .button .btn-gradient{background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.jobs-posting-modal.jobs-posting-19-modal .modal-body .button .btn-gradient em, .jobs-posting-modal.jobs-posting-20-modal .modal-body .button .btn-gradient em{font-size:18px;}@media (max-width:1440px){.jobs-posting-modal.jobs-posting-19-modal, .jobs-posting-modal.jobs-posting-20-modal{padding-bottom:15px;}.jobs-posting-modal.jobs-posting-19-modal .modal-body, .jobs-posting-modal.jobs-posting-20-modal .modal-body{padding-top:10px;padding-bottom:0;}}@media (max-width:576px){.jobs-posting-modal.jobs-posting-19-modal, .jobs-posting-modal.jobs-posting-20-modal{padding:20px;}}.flip-view-modal{width:1230px;max-width:100%;padding:0;background:none;}@media (min-width:1280px){.flip-view-modal .box-flip-view{display:-webkit-box;display:-ms-flexbox;display:flex;}}.flip-view-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}@media (min-width:1280px){.flip-view-modal .fancybox-close-small{right:175px;}}.flip-view-modal .flip-view-modal-left{width:100%;max-height:98vh;padding:15px;overflow-y:auto;background:#ffffff;}@media (min-width:768px){.flip-view-modal .flip-view-modal-left{padding:20px;}}@media (min-width:1024px){.flip-view-modal .flip-view-modal-left{padding:25px 30px;}}@media (min-width:1280px){.flip-view-modal .flip-view-modal-left{min-width:1055px;max-width:1055px;padding:25px 40px;}.flip-view-modal .flip-view-modal-left::-webkit-scrollbar{width:6px;}.flip-view-modal .flip-view-modal-left::-webkit-scrollbar-track{background:#f5f5f5;}.flip-view-modal .flip-view-modal-left::-webkit-scrollbar-thumb{background:#5d677a;}}.flip-view-modal .modal-head{border-bottom:2px solid #efefef;}.flip-view-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.flip-view-modal .modal-head .sub-title{color:#0097d1;font-size:14px;font-weight:700;}.flip-view-modal .flip-view-head{padding-top:20px;}.flip-view-modal .flip-view-head .name{color:#172642;font-size:16px;font-weight:700;text-transform:uppercase;}.flip-view-modal .flip-view-head .name .viewd{padding-left:15px;color:#666666;font-size:12px;font-weight:400;text-transform:none;}.flip-view-modal .flip-view-head .name .viewd em{padding-right:5px;color:#0097d1;font-size:16px;}.flip-view-modal .flip-view-head .title{color:#172642;font-size:14px;font-weight:700;}.flip-view-modal .flip-view-head .title span{color:#007db2;}.flip-view-modal .title-flip{margin-top:15px;padding:8px 20px;background:#f1f9ff;color:#172642;font-size:16px;font-weight:700;text-transform:uppercase;}.flip-view-modal .flip-view-body .info-left .image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:120px;height:160px;margin-top:20px;margin-right:auto;margin-left:auto;overflow:hidden;}.flip-view-modal .flip-view-body .info-left .image img{-o-object-fit:cover;width:100%;height:100%;object-fit:cover;}.flip-view-modal .flip-view-body .info-left .info-list{margin-top:20px;}.flip-view-modal .flip-view-body .info-left .info-list li{display:-webkit-box;display:-ms-flexbox;display:flex;}.flip-view-modal .flip-view-body .info-left .info-list li p{color:#182642;font-size:16px;}.flip-view-modal .flip-view-body .info-left .info-list li p:first-child{width:160px;min-width:160px;padding-right:10px;}.flip-view-modal .flip-view-body .info-left .info-list li .name{color:#0097d1;}@media (min-width:1024px){.flip-view-modal .flip-view-body .info-left{display:-webkit-box;display:-ms-flexbox;display:flex;}.flip-view-modal .flip-view-body .info-left .image, .flip-view-modal .flip-view-body .info-left .info-list{margin-top:25px;}.flip-view-modal .flip-view-body .info-left .image{margin-right:40px;margin-left:0;}}.flip-view-modal .flip-view-body .info-right{display:-webkit-box;display:-ms-flexbox;display:flex;padding:15px;background:#f1f9ff;}.flip-view-modal .flip-view-body .info-right .image, .flip-view-modal .flip-view-body .info-right .caption{margin-top:20px;}.flip-view-modal .flip-view-body .info-right .image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:80px;min-width:80px;}.flip-view-modal .flip-view-body .info-right .caption{width:calc( 100% - 80px );padding-left:10px;}.flip-view-modal .flip-view-body .info-right .caption .point{color:#333333;font-size:16px;font-weight:400;}.flip-view-modal .flip-view-body .info-right .caption .point span{color:#2577b8;font-size:16px;font-weight:700;}.flip-view-modal .flip-view-body .info-right .caption .btn-contact{display:inline-block;width:100%;min-height:36px;margin-top:10px;padding:5px 10px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);color:#ffffff;font-size:16px;font-weight:500;text-align:center;}.flip-view-modal .flip-view-body .info-right .caption .noted{margin-top:10px;color:#333333;font-size:14px;font-weight:400;line-height:1.3;}@media (min-width:768px){.flip-view-modal .flip-view-body .info-right{padding:20px;}.flip-view-modal .flip-view-body .info-right .caption{padding-left:20px;}.flip-view-modal .flip-view-body .info-right .caption .btn-contact{padding:5px 15px;}}@media (min-width:1024px){.flip-view-modal .flip-view-body .info-right{padding:25px;}.flip-view-modal .flip-view-body .info-right .caption{padding-left:30px;}}.flip-view-modal .job-information{margin-top:15px;padding:0 15px;}.flip-view-modal .job-information .information-list li{display:-webkit-box;display:-ms-flexbox;display:flex;}.flip-view-modal .job-information .information-list li p{color:#182642;font-size:16px;font-weight:400;}.flip-view-modal .job-information .information-list li p:first-child{width:150px;min-width:150px;padding-right:5px;}.flip-view-modal .job-information .information-list li p:last-child{width:calc(100% - 150px);}@media (min-width:768px){.flip-view-modal .job-information .information-list{-webkit-column-count:2;-moz-column-count:2;column-count:2;}.flip-view-modal .job-information .information-list li p:first-child{width:200px;min-width:200px;}.flip-view-modal .job-information .information-list li p:last-child{width:calc(100% - 200px);}}.flip-view-modal .profile-content{max-height:1000px;margin-top:15px;overflow-y:auto;border:5px solid #f5f5f5;}@media (min-width:1024px){.flip-view-modal .profile-content{max-height:1200px;margin-top:20px;border:10px solid #f5f5f5;}}@media (min-width:1280px){.flip-view-modal .profile-content{max-height:1350px;border:13px solid #f5f5f5;}.flip-view-modal .profile-content::-webkit-scrollbar{width:6px;}.flip-view-modal .profile-content::-webkit-scrollbar-track{background:#f5f5f5;}.flip-view-modal .profile-content::-webkit-scrollbar-thumb{background:#5d677a;}}.flip-view-modal .flip-view-modal-right{margin-left:1px;}.flip-view-modal .flip-view-modal-right .box-info-top{width:100%;padding:15px;background:#f1f9ff;}.flip-view-modal .flip-view-modal-right .box-info-top p{color:#333333;font-size:14px;font-weight:400;}.flip-view-modal .flip-view-modal-right .box-info-top p + p{margin-top:5px;}.flip-view-modal .flip-view-modal-right .box-info-top p strong{color:#172642;font-weight:700;}.flip-view-modal .flip-view-modal-right .box-info-top p span{display:block;}.flip-view-modal .flip-view-modal-right .box-info-top .title{color:#172642;font-size:14px;font-weight:700;text-transform:uppercase;}.flip-view-modal .flip-view-modal-right .form-wrap{margin-top:10px;}.flip-view-modal .flip-view-modal-right .form-wrap .form-group{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;margin-top:5px;}.flip-view-modal .flip-view-modal-right .form-wrap .form-group label{padding-left:10px;color:#333333;font-size:14px;font-weight:400;}.flip-view-modal .flip-view-modal-right .action-list{margin-top:10px;padding-top:10px;border-top:2px solid #ebebeb;}.flip-view-modal .flip-view-modal-right .action-list li + li{margin-top:5px;}.flip-view-modal .flip-view-modal-right .action-list li a{color:#333333;font-size:14px;font-weight:400;}.flip-view-modal .flip-view-modal-right .action-list li a:hover{color:#007db2;}.flip-view-modal .flip-view-modal-right .action-list li a em{padding-right:6px;color:#007db2;font-size:18px;font-weight:normal;}.flip-view-modal .flip-view-modal-right .action-list li .btn-hidden-resume em{color:#ff0000;}.flip-view-modal .flip-view-modal-right .box-info-bottom{width:100%;margin-top:30px;padding:15px;background:#f1f9ff;}.flip-view-modal .flip-view-modal-right .box-info-bottom .action-list{margin-top:0;padding-top:0;border:none;}.flip-view-modal .flip-view-modal-right .btn-download-resume{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:100%;height:26px;margin-top:15px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);color:#ffffff;font-size:14px;font-weight:400;text-align:center;}.flip-view-modal .flip-view-modal-right .btn-download-resume em{padding-right:5px;font-size:16px;}@media (min-width:1280px){.flip-view-modal .flip-view-modal-right{margin-top:60px;}.flip-view-modal .flip-view-modal-right .box-info-top{padding:20px 18px;}.flip-view-modal .flip-view-modal-right .box-info-bottom{padding:5px 20px;}}.search-support-modal{max-width:930px;padding:15px;border-radius:5px;}@media (min-width:1024px){.search-support-modal{padding:20px;}}@media (min-width:1280px){.search-support-modal{padding:25px 40px;}}.search-support-modal .fancybox-close-small{background:#109ed9;color:#ffffff;}.search-support-modal .modal-head .title{padding-bottom:10px;border-bottom:2px solid #efefef;color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.search-support-modal .modal-body .search-support{margin-top:20px;}.search-support-modal .modal-body .search-support > *{color:#182642;font-size:16px;font-weight:400;}.search-support-modal .modal-body .search-support * + *{margin-top:15px;}.search-support-modal .modal-body .search-support p{color:#182642;font-size:16px;font-weight:400;}.search-support-modal .modal-body .search-support p strong{color:#007db2;}.search-support-modal .modal-body .search-support ul{padding-left:18px;list-style-type:disc;}.search-support-modal .modal-body .search-support ul li{margin-top:3px;}.search-support-modal .modal-body .search-support ul li strong{color:#182642;}.search-support-modal .modal-body .search-support table{width:100%;}.search-support-modal .modal-body .search-support table thead{border-bottom:1px solid #4ca4c9;background:#ffffff;}.search-support-modal .modal-body .search-support table thead th{padding:7px 0;color:#182642;font-size:14px;font-weight:700;text-transform:uppercase;}.search-support-modal .modal-body .search-support td{padding:10px 0;vertical-align:top;}.search-support-modal .modal-body .search-support td:first-child{padding:10px 20px;}.search-support-modal .modal-body .search-support td.title{padding:0;}.search-support-modal .modal-body .search-support td.title p{padding:8px 20px;background:#f8f8f8;color:#007db2;font-size:16px;font-weight:700;}

</style>

   <!--  <script language="javascript" src="https://static.careerbuilder.vn/ckeditor445/ckeditor.js"></script>
    <script language="javascript" src="https://static.careerbuilder.vn/ckeditor445/adapters/jquery.js"></script>
    <script type="text/javascript" src="https://static.careerbuilder.vn/js/jquery.formatcurrency.js" ></script> -->
    <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.js'></script>
    <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css' rel='stylesheet' />
    <section class="employer-navbar-2-1">



    @yield('content')

</section>
<!-- <div class="last-login-user">
    <div class="container">
        <p> Đăng nhập gần đây:
            <time>07-06-2022 10:42:35</time>
        </p>
    </div>
</div> -->

<script type="text/javascript">
$( document ).ready(function() {
   checkYoutubeValid();
   eventAfterAjax();
   deletePhotoCompany();
});


var is_execute_profile = false;
function ajaxPhotoUpload()
{
   $('#filephoto').prop('disabled', true);
   var strPhoto = $("#strPhoto").val();
   if(is_execute_profile)
      return false;
   is_execute_profile = true;

   var file = $('#filephoto')[0].files;

    var formdata = false;
    if (window.FormData) {
        formdata = new FormData();
    }
    formdata.append("filephoto", file[0]);
    $('#filephoto').val('');
    $.ajax({
        url: 'https://careerbuilder.vn/vi/employers/postjobs/uploadphoto',
        type: "POST",
        data: formdata,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (data) {
         is_execute_profile = false;
         if(typeof(data.error) != 'undefined')
         {
            if(data.error != '')
            {
               show_noti(2, data.error);
            }
            else
            {
               $("#list-image").append('<div class="image-item"><img src="' + data.path + '"><a class="btn-del-img company-btn-del-img" href="javascript:void(0);" data-src="' + data.msg + '" title="Xóa ảnh\"></a></div>');
                   $('#isdisplay').prop('disabled', false);
               if(strPhoto != '')
                     strPhoto += ',';
                  strPhoto += data.msg;
                  $("#strPhoto").val(strPhoto);
            }
         }
         eventAfterAjax();
        }
    });

   return false;
}
function eventAfterAjax()
{
   $("#loading").hide();
   var num = $("#strPhoto").val().split(",").length;
   if(num >= 5){
      $('#filephoto').prop('disabled', true);
   }else{
      $('#filephoto').prop('disabled', false);
   }
}


function deletePhotoCompany()
{
    $(document).on('click', ".company-btn-del-img", function(){
        var name = $(this).data('src');
        $(this).closest('.image-item').remove();
        var strPhoto = $("#strPhoto").val();
        var strPhotoDelete = $("#strPhotoDelete").val();
        // Add in hidden delete
        if(strPhotoDelete != '')
            strPhotoDelete += ',';
        strPhotoDelete += name;
        $("#strPhotoDelete").val(strPhotoDelete);
        // Remove in hidden upload
        var posName = strPhoto.indexOf(name);
        var posTemp = strPhoto.indexOf(',');
        if(posName == 0){
            if(posTemp > 0)
                name += ',';
        }else{
            name = ','+name;
        }
        $("#strPhoto").val(strPhoto.replace(name,''));
        // Check exist image and video
        checkYoutubeValid(2);
        if($("#strPhoto").val() == '' && $("#checkYouTube").val() == 'false' ){
            $('#isdisplay').prop('checked', false);
            $('#isdisplay').prop('disabled', true);
        }
        $('#filephoto').prop('disabled', false);
    });
}

/* XÓA KHI UPDATE SAU */
function ajaxPhotoDelete(name)
{
   var strPhoto = $("#strPhoto").val();
   var strPhotoDelete = $("#strPhotoDelete").val();
   // Add in hidden delete
   if(strPhotoDelete != '')
      strPhotoDelete += ',';
   strPhotoDelete += name;
   $("#strPhotoDelete").val(strPhotoDelete);
   // Remove in hidden upload
   var posName = strPhoto.indexOf(name);
   var posTemp = strPhoto.indexOf(',');
   if(posName == 0){
      if(posTemp > 0)
         name += ',';
   }else{
      name = ','+name;
   }
   $("#strPhoto").val(strPhoto.replace(name,''));
   // Check exist image and video
   checkYoutubeValid(2);
   if($("#strPhoto").val() == '' && $("#checkYouTube").val() == 'false' ){
      $('#isdisplay').prop('checked', false);
      $('#isdisplay').prop('disabled', true);
   }
   $('#filephoto').prop('disabled', false);
}
/* XÓA KHI UPDATE SAU */


/* type 0: check message error, 1: check message error and show video, 2: check */
function checkYoutubeValid(type)
{
   var url = $('#strVideo').val();
   url = url.replace(/^\s+|\s+$/g, "");

   if(url != '')
   {
      var pos = url.indexOf('youtube.com/watch?v=');
      // Check youtube link valid before check video valid on server
      if(pos < 0){
         
         if(type != 2){
            $('#eVideo').remove();
            $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');
         }
         // Check exist image and video
         if($("#strPhoto").val() == ''){
            $('#isdisplay').prop('checked', false);
            $('#isdisplay').prop('disabled', true);
         }
   
         $('#checkYouTube').val('false');
         return false;
      }

      $.ajax({
         type: "POST",
         url: domain+'employers/postjobs/checklinkyoutube',
         dataType: 'JSON',
         data: 'link=' + url,
         success: function(rs)
         {
            if(rs == '0'){
               // Message error when input link youtube
               if(type != 2)
               {
                  $('#eVideo').remove();
                  $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');

               }
               // Check exist image and video
               if($("#strPhoto").val() == ''){
                  $('#isdisplay').prop('checked', false);
                  $('#isdisplay').prop('disabled', true);
               }
               $('#checkYouTube').val('false');

            

               return false;
            }else{
               
               if(type != 2){
                  $('#eVideo').remove();
                  $('#isdisplay').prop('disabled', false);
                  // Check button view youtube
                  if(type == 1){
                     $.fancybox.open({
                        'closeExisting': true,
                        'src': url.replace(new RegExp("watch\\?v=", "i"), 'embed/') + '?autoplay=1&rel=0',
                        'type': 'iframe'
                     });
                  }
               }
               $('#checkYouTube').val('true');
               return true;
            }
         }
      });
   }
   else
    {
      /* Don't input link youtube */
      $('#eVideo').remove();
      // check button view
      if(type == 1){
         $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');
      }
      // Check exist image and video
      if($("#strPhoto").val() == ''){
         $('#isdisplay').prop('checked', false);
         $('#isdisplay').prop('disabled', true);
      }
      $('#checkYouTube').val('false');
      return false;
   }
}



</script>
<!-- <h2 class="title-application">Thông tin khác <span><span class="txt_required mar_left10">(Không bắt buộc)</span></span></h2>
<div class="form-wrap other-information-wrap">
    <div class="row">
        <div class="col-lg-7">
            <p>Giới thiệu về môi trường làm việc, thời gian thử việc, cơ hội huấn luyện, đồng nghiệp,....</p>
            <a class="btnlink btn-show-additional" href="javascript:;">+ Bổ sung</a>
            <div class="form-wrap other-additional-wrap">
                <div class="form-group form-text mt-20">
                    <label for="">Thử việc</label>
                    <input type="text" id="JOB_PROBATIONTIME" name="JOB_PROBATIONTIME" maxlength="70" value="" placeholder="Nhập nội dung" />
                    <span class="noted">Tối đa 70 kí tự</span>
                </div>
                <div class="form-group form-text mt-20">
                    <label for="">Thời gian làm việc</label>
                    <input type="text" id="JOB_WORKTIME" name="JOB_WORKTIME" maxlength="70" value="" placeholder="Nhập nội dung" />
                    <span class="noted">Tối đa 70 kí tự</span>
                </div>
                <div class="form-group form-textarea">
                    <label for="">Cơ hội huấn luyện</label>
                    <textarea id="JOB_TRAINOPPORTUNITY" name="JOB_TRAINOPPORTUNITY" placeholder="Nhập nội dung"></textarea>
                    <span class="noted">Tối đa 300 kí tự</span>
                </div>
                <div class="form-group form-textarea">
                    <label for="">Đồng nghiệp</label>
                    <textarea id="JOB_COLLEAGUE" name="JOB_COLLEAGUE" placeholder="Nhập nội dung"></textarea>
                    <span class="noted">Tối đa 300 kí tự</span>
                </div>
                <div class="form-group form-textarea">
                    <label for="">Phúc lợi</label>
                    <textarea id="JOB_BENEFIT" name="JOB_BENEFIT" placeholder="Nhập nội dung"></textarea>
                    <span class="noted">Tối đa 300 kí tự</span>
                </div>
                <div class="form-group form-textarea">
                    <label for="">Phụ cấp khác</label>
                    <textarea name="JOB_ADDSALARY" id="JOB_ADDSALARY" placeholder="Nhập nội dung"></textarea>
                    <span class="noted">Tối đa 300 kí tự</span>
                </div>
                <div class="form-group form-textarea">
                    <label for="">Ngày nghỉ</label>
                    <textarea id="JOB_ANNUALLEAVE" name="JOB_ANNUALLEAVE" placeholder="Nhập nội dung"></textarea>
                    <span class="noted">Tối đa 300 kí tự</span>
                </div>
            </div>
            <div class="form-group form-qs mt-20">
                <label for="">
                    Tên resume tag
                    <span class="btnlink">
                        (Resume tag name là gì ? )
                        <div class="toolip">
                            -Là các cụm từ xuất hiện trong hồ sơ ứng viên phù hợp cho nhu cầu tuyển dụng của quý công ty.</br>
                            - Dựa vào resume tag name hệ thống sẽ tìm và gợi ý những hồ sơ ứng viên phù hợp với tag name mà quý công ty đã tạo. </Br>
                            - Lựa chọn các tag name phù hợp với vị trí tuyển dụng của quý công ty.</Br>
                            - Bạn được phép tạo tối đa 10 tag name cho một vị trí tuyển dụng.
                        </div>
                    </span>
                </label>
            </div>
            <div class="form-group form-text form-submit">
                <input type="text" class="auto_suggest" id="synonym" name="synonym" autocomplete="off" onkeydown="if (event.keyCode == 13) addWord();">
                <a class="btn-submit-add" href="javascript:void(0)" onclick="return addWord()" >Thêm Tag</a>
            </div>
            <div class="list-tag" id="list-tag">
            </div>
            <div class="form-group form-checkbox">
                <input  type="checkbox" value="1" name="JOB_WFH" id="JOB_WFH" class="input_margin" />
                <label for="JOB_WFH">Work from home</label>
            </div>
            <div class="form-group mt-0 form-note-workfromhome">
                Tick chọn nếu vị trí tuyển dụng này cho phép ứng viên có thể chọn chế độ làm việc tại nhà trong thời điểm hiện tại (Work from home) mà không nhất thiết phải có mặt tại văn phòng công ty. Hệ thống sẽ phân loại và đánh dấu đăng tuyển này vào danh mục tìm kiếm loại công việc là “Work from Home”.
            </div>
        </div>
    </div>
</div>
<div class="form-group form-submit form-continue">
    <button class="btn-gradient btn-submit" type="button" onclick="is_Filter_Form();">Tiếp tục</button>
    <button class="btn-gradient btn-post" type="button" onclick="is_Filter_Form3();">Lưu </button>
</div>
</div>
</div>
<div class="tabslet-content" id="tab-2">
<div class="main-application-information">
<h2 class="title-application">Thông tin liên hệ</h2>
<div class="form-wrap">
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-checkbox">
            <input type="checkbox" name="checkprofile" id="checkprofile" value="1"  />
            <label for="checkprofile">Ẩn thông tin công ty: tên công ty và giới thiệu về công ty</label>
            <a class="btnlink preview-company" href="javascript:void(0)" onclick="popupProfileAjax(); return false;">(Xem lại thông tin công ty đã tạo)</a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-checkbox">
            <input type="checkbox" class="input_margin" onclick="change_security(this);"  name="hide_contact" id="hide_contact" value="1"  />
            <label for="hide_contact">Ẩn thông tin liên hệ: tên công ty, địa chỉ, người liên hệ</label>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-text">
            <input type="text" name="JOB_CONTACT_COMPANY" id="JOB_CONTACT_COMPANY" value="congty abc" placeholder="Tên công ty *"/>
        </div>
        <div id="security_client" style="display: none;">
            <div class="form-group form-checkbox">
                <input type="radio" name="Hide_Job" id="JOB_CONTACT_SECRECY" checked="checked" value="0" />
                <label for="JOB_CONTACT_SECRECY">Bảo mật</label>
            </div>
            <div class="form-group form-checkbox">
                <input type="radio" class="input_margin" name="Hide_Job" value="1" id="JOB_CONTACT_CLIENT" />
                <label for="JOB_CONTACT_CLIENT">CareerBuilder's client</label>
            </div>
        </div>
        <input name="company_profile" id="company_profile" type="hidden" value="35A90CF3">
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-text">
            <input type="text" id="JOB_CONTACT_ADDRESS" name="JOB_CONTACT_ADDRESS" value="hanoi" placeholder="Địa chỉ *" />
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-text">
            <input type="text" name="JOB_CONTACT_NAME" id="JOB_CONTACT_NAME" value="cuong" placeholder="Người liên hệ *" />
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-text">
            <input type="text" class="width_295" name="JOB_CONTACT_EMAIL" id="JOB_CONTACT_EMAIL" maxlength="150" value="chiensi26045@gmail.com"  placeholder="Email 1 *"/>
        </div>
    </div>
    <div class="col-lg-5 d-flex align-center">
        <div class="noti">
            <em class="material-icons">info</em>
            <div class="toolip">
                <p>(Email sẽ được bảo mật)</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-text">
            <input type="text" name="JOB_CONTACT_EMAIL2" id="JOB_CONTACT_EMAIL2" maxlength="150" value="" placeholder="Email 2" />
        </div>
    </div>
    <div class="col-lg-5 d-flex align-center">
        <div class="noti">
            <em class="material-icons">info</em>
            <div class="toolip">
                <p>(Email sẽ được bảo mật)</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-select">
            <select name="receivemail">
                <option value="0">Tiếng Việt</option>
                <option value="1">Tiếng Anh</option>
                <option value="2">Không nhận email thông báo</option>
            </select>
        </div>
    </div>
    <div class="col-lg-5 d-flex align-center">
        <div class="noti">
            <em class="material-icons">info</em>
            <div class="toolip">
                <p>Nhận email thông báo khi có ứng viên nộp đơn trực tuyến.</p>
                <p>Khi nhấn chọn chức năng này, Quý công ty sẽ nhận được email thông báo từ hệ thống mỗi khi có ứng viên nộp đơn trực tuyến vào các vị trí công việc tương ứng mà Quý công ty đang đăng tuyển trên hệ thống.</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-7">
        <div class="form-group form-checkbox">
            <input type="checkbox" name="JOB_RECEIVEEMAIL_RESUME" checked="checked" value="1" id="records1" />
            <label for="records1">Nhận hồ sơ gợi ý phù hợp với vị trí tuyển dụng</label>
        </div>
        <div class="form-group form-checkbox">
            <input type="checkbox" class="input_margin" name="JOB_APPLYONLINE" id="JOB_APPLYONLINE" value="1"  />
            <label for="JOB_APPLYONLINE">Thiết lập thư trả lời tự động khi có ứng viên nộp đơn ứng tuyển</label>
            <div class="noti">
                <em class="material-icons">info</em>
                <div class="toolip">
                    <p>Hệ thống sẽ tự động gửi Thư tự động trả lời cho các ứng viên nộp hồ sơ trực tuyến. Thư này sẽ không đính kèm trong quảng cáo đăng tuyển của quý khách.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="form-standard" id="MailReply">
    <div class="row">
        <div class="col-lg-7">
            <form action="">
                <input name="job_id" type="hidden" value="35A4E900"/>
                <input name="savetype" type="hidden" value="1"/>
                <input name="emp_id" type="hidden" value="271347"/>
                <div class="form-wrap">
                    <div class="form-group form-select">
                        <label for="">Thư trả lời</label>
                        <select name="slAutoReply" id="slAutoReply" >
                            <option value="0">Chọn</option>
                        </select>
                    </div>
                    <div class="form-group form-text">
                        <label for="">Tiêu đề</label>
                        <input type="text" placeholder="Nhập tiêu đề" name="reply_title" id="reply_title" value="">
                        <span class="error"></span>
                        <span class="noted">Tối đa 70 kí tự</span>
                    </div>
                    <div class="form-group form-textarea">
                        <label>Nội dung thư</label>
                        <div class="d-flex">
                            <p>Smart Fields</p>
                            <select name="addfield" id="addfield" onchange="addSmartField('reply_content', this.value);">
                                <option value="">Chọn</option>
                                <option value="[firstname]">[firstname]</option>
                                <option value="[lastname]">[lastname]</option>
                                <option value="[job-title]">[job-title]</option>
                                <option value="[contact-name]">[contact-name]</option>
                            </select>
                            <a class="see-sample" href="javascript:void(0);" id="view_sample">Xem mẫu</a>
                        </div>
                        <textarea name="reply_content" id="reply_content"></textarea>
                        <span class="error"></span>
                        <span class="noted"> Ít nhất 30 ký tự, Nhiều nhất 3000 ký tự</span>
                    </div>
                    <div class="form-group form-radio">
                        <div class="group">
                            <input type="radio" class="input_margin" name="replyto" value="1" id="edit-email-1"  >
                            <label for="edit-email-1">Chỉ riêng vị trí tuyển dụng này</label>
                        </div>
                        <div class="group">
                            <input type="radio" class="input_margin" name="replyto" value="0" id="edit-email-2"  >
                            <label for="edit-email-2">Tất cả các tuyển dụng</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="jobs-posting-modal jobs-posting-17-modal" id="LetterAbout" style="display: none">
    <div class="modal-head">
        <p class="title">Thư trả lời tự động mẫu</p>
    </div>
    <div class="modal-body">
        <div class="preview-reply-letter">
            <div class="title">
                <p>Tiêu đề: Thanks you for applying</p>
            </div>
            <div class="full-content">
                Dear <strong>[firstname] [lastname]</strong>,</br>We have received your resume submission for the <strong>[job-title]</strong> position. We appreciate your interest and look forward to reviewing your resume.</br>
                We will contact you within seven days if your qualifications meet the requirements of the position.</br>
                Thanks you again for applying!</br></br>Best regards,</br><strong>[contact-name]</strong>
            </div>
        </div>
        <div class="form-group form-submit">
            <button class="btn-gradient" type="button" name="save" id="btn_preview_sample" onclick="createMail('35A4E900');">Trở lại</button>
            <a class="btn-cancel" href="javascript:void(0);" data-fancybox-close="">Bỏ qua</a>
        </div>
    </div>
</div> -->
                            

<script type="text/javascript">
$(document).ready(function(){
    $('#slAutoReply').change(function(){
        var reply_id = $('#slAutoReply').val();
        if(reply_id > 0){
            $.ajax({
                type: "POST",
                url: domain + 'employers/postjobs/detailreply',
                data: 'reply_id=' + reply_id,
                dataType: 'json',
                success: function(obj)
                {
                    $("#reply_title").val(obj.AUTOREPLY_TITLE);
                    $("#reply_content").val(obj.AUTOREPLY_CONTENT);
                    $("#reply0").attr("checked", true);
                    $("#reply1").attr("checked", false);
                }
            });
        }
    });
    $('#view_sample').click(function(){
        $.fancybox.close('all');
        $.fancybox.open({'src' : '#LetterAbout','type' : 'inline'});
    });
});
</script>

                            </div>
                           <!--  <div class="form-group form-submit form-continue form-back-continue">
                                <a class="btn-gradient btn-save" href="javascript:void(0);" onclick="is_Filter_Form2()">Tiếp tục</a>
                            </div> -->
                        </div>
                    </div>
                    <div class="tabslet-content" id="tab-3">
                    </div>
                </div>
                </form>
            </div>
        </div>
    </section>
    <script>/*jquery.auto-complete.js*/

function removeUnicode(strings){var strTemp=strings;strTemp=strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");strTemp=strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");strTemp=strTemp.replace(/ì|í|ị|ỉ|ĩ/g,"i");strTemp=strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");strTemp=strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");strTemp=strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");strTemp=strTemp.replace(/đ/g,"d");strTemp=strTemp.replace(/̀|́|̣|̉|̃|/gi,"");return strTemp;}
(function($){$.fn.autoComplete=function(options){var o=$.extend({},$.fn.autoComplete.defaults,options);if(typeof options=='string'){this.each(function(){var that=$(this);if(options=='destroy'){$(window).off('resize.autocomplete',that.updateSC);that.off('blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete');if(that.data('autocomplete'))
that.attr('autocomplete',that.data('autocomplete'));else
that.removeAttr('autocomplete');$(that.data('sc')).remove();that.removeData('sc').removeData('autocomplete');}});return this;}
return this.each(function(){var that=$(this);that.sc=$('<div class="autocomplete-suggestions '+o.menuClass+'"></div>');that.data('sc',that.sc).data('autocomplete',that.attr('autocomplete'));that.attr('autocomplete','off');that.cache={};that.last_val='';that.updateSC=function(resize,next){that.sc.css({top:that.offset().top+that.outerHeight(),left:that.offset().left,width:that.outerWidth()});if(!resize){that.sc.show();if(!that.sc.maxHeight)that.sc.maxHeight=parseInt(that.sc.css('max-height'));if(!that.sc.suggestionHeight)that.sc.suggestionHeight=$('.autocomplete-suggestion',that.sc).first().outerHeight();if(that.sc.suggestionHeight)
if(!next)that.sc.scrollTop(0);else{var scrTop=that.sc.scrollTop(),selTop=next.offset().top-that.sc.offset().top;if(selTop+that.sc.suggestionHeight-that.sc.maxHeight>0)
that.sc.scrollTop(selTop+that.sc.suggestionHeight+scrTop-that.sc.maxHeight);else if(selTop<0)
that.sc.scrollTop(selTop+scrTop);}}}
$(window).on('resize.autocomplete',that.updateSC);that.sc.appendTo('body');that.sc.on('mouseleave','.autocomplete-suggestion',function(){$('.autocomplete-suggestion.selected').removeClass('selected');});that.sc.on('mouseenter','.autocomplete-suggestion',function(){$('.autocomplete-suggestion.selected').removeClass('selected');$(this).addClass('selected');});that.sc.on('mousedown click','.autocomplete-suggestion',function(e){var item=$(this),v=item.data('val');if(v||item.hasClass('autocomplete-suggestion')){that.val(v);o.onSelect(e,v,item);that.sc.hide();}
return false;});that.on('blur.autocomplete',function(){try{over_sb=$('.autocomplete-suggestions:hover').length;}catch(e){over_sb=0;}
if(!over_sb){that.last_val=that.val();that.sc.hide();setTimeout(function(){that.sc.hide();},350);}else if(!that.is(':focus'))setTimeout(function(){that.focus();},20);});if(!o.minChars)that.on('focus.autocomplete',function(){that.last_val='\n';that.trigger('keyup.autocomplete');});function suggest(data){var val=that.val();that.cache[val]=data;if(data.length&&val.length>=o.minChars){var s='';for(var i=0;i<data.length;i++)s+=o.renderItem(data[i],val);that.sc.html(s);that.updateSC(0);}
else
that.sc.hide();}
that.on('keydown.autocomplete',function(e){if((e.which==40||e.which==38)&&that.sc.html()){var next,sel=$('.autocomplete-suggestion.selected',that.sc);if(!sel.length){next=(e.which==40)?$('.autocomplete-suggestion',that.sc).first():$('.autocomplete-suggestion',that.sc).last();that.val(next.addClass('selected').data('val'));}else{next=(e.which==40)?sel.next('.autocomplete-suggestion'):sel.prev('.autocomplete-suggestion');if(next.length){sel.removeClass('selected');that.val(next.addClass('selected').data('val'));}
else{sel.removeClass('selected');that.val(that.last_val);next=0;}}
that.updateSC(0,next);return false;}
else if(e.which==27)that.val(that.last_val).sc.hide();else if(e.which==13||e.which==9){var sel=$('.autocomplete-suggestion.selected',that.sc);if(sel.length&&that.sc.is(':visible')){o.onSelect(e,sel.data('val'),sel);setTimeout(function(){that.sc.hide();},20);}}});that.on('keyup.autocomplete',function(e){if(!~$.inArray(e.which,[13,27,35,36,37,38,39,40])){var val=that.val();if(val.length>=o.minChars){if(val!=that.last_val){that.last_val=val;clearTimeout(that.timer);if(o.cache){if(val in that.cache){suggest(that.cache[val]);return;}
for(var i=1;i<val.length-o.minChars;i++){var part=val.slice(0,val.length-i);if(part in that.cache&&!that.cache[part].length){suggest([]);return;}}}
that.timer=setTimeout(function(){o.source(val,suggest)},o.delay);}}else{that.last_val=val;that.sc.hide();}}});});}
$.fn.autoComplete.defaults={source:0,minChars:3,delay:150,cache:1,menuClass:'',renderItem:function(item,search){var item_convert=removeUnicode(item);var search_convert=removeUnicode(search);search=search.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');var re=new RegExp("("+search.split(' ').join('|')+")","gi");var re_convert=new RegExp("("+search_convert+")","gi");var search_match=re_convert.exec(item_convert);if(search_match&&search_convert.length){var startpos=search_match.index;var prefix=item.slice(0,startpos);var fix=item.slice(startpos,startpos+search_convert.length);var suffix=item.slice(startpos+search_convert.length);return'<div class="autocomplete-suggestion" data-val="'+item+'">'+prefix+'<b>'+fix+'</b>'+suffix+'</div>';}else{return'<div class="autocomplete-suggestion" data-val="'+item+'">'+item.replace(re,"<b>$1</b>")+'</div>';}},onSelect:function(e,term,item){}};}(jQuery));
/*jquery.tabslet.js*/
;(function($,window,undefined){"use strict";$.fn.tabslet=function(options){var defaults={mouseevent:'click',activeclass:'active',attribute:'href',animation:false,autorotate:false,deeplinking:false,pauseonhover:true,delay:2000,active:1,container:false,controls:{prev:'.prev',next:'.next'}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this),_cache_li=[],_cache_div=[];var _container=options.container?$(options.container):$this;var _tabs=_container.find('> div, > .tabslet-content');_tabs.each(function(){_cache_div.push($(this).css('display'));});var elements=$this.find('.tabs-toggle > li, .tabslet-tab > li'),i=options.active-1;if(!$this.data('tabslet-init')){$this.data('tabslet-init',true);$this.opts=[];$.map(['mouseevent','activeclass','attribute','animation','autorotate','deeplinking','pauseonhover','delay','container'],function(val,i){$this.opts[val]=$this.data(val)||options[val];});$this.opts['active']=$this.opts.deeplinking?deep_link():($this.data('active')||options.active)
_tabs.hide();if($this.opts.active){_tabs.eq($this.opts.active-1).show();elements.eq($this.opts.active-1).addClass(options.activeclass);}
var fn=eval(function(e,tab){var _this=tab?elements.find('a['+$this.opts.attribute+'="'+tab+'"]').parent():$(this);_this.trigger('_before');elements.removeClass(options.activeclass);_this.addClass(options.activeclass);_tabs.hide();i=elements.index(_this);var currentTab=tab||_this.find('a').attr($this.opts.attribute);if($this.opts.deeplinking)location.hash=currentTab;if($this.opts.animation){_container.find(currentTab).animate({opacity:'show'},'slow',function(){_this.trigger('_after');});}else{_container.find(currentTab).show();_this.trigger('_after');}
return false;});var init=eval("elements."+$this.opts.mouseevent+"(fn)");init;var t;var forward=function(){i=++i%elements.length;$this.opts.mouseevent=='hover'?elements.eq(i).trigger('mouseover'):elements.eq(i).click();if($this.opts.autorotate){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);$this.mouseover(function(){if($this.opts.pauseonhover)clearTimeout(t);});}}
if($this.opts.autorotate){t=setTimeout(forward,$this.opts.delay);$this.hover(function(){if($this.opts.pauseonhover)clearTimeout(t);},function(){t=setTimeout(forward,$this.opts.delay);});if($this.opts.pauseonhover)$this.on("mouseleave",function(){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);});}
function deep_link(){var ids=[];elements.find('a').each(function(){ids.push($(this).attr($this.opts.attribute));});var index=$.inArray(location.hash,ids)
if(index>-1){return index+1}else{return($this.data('active')||options.active)}}
var move=function(direction){if(direction=='forward')i=++i%elements.length;if(direction=='backward')i=--i%elements.length;elements.eq(i).click();}
$this.find(options.controls.next).click(function(){move('forward');});$this.find(options.controls.prev).click(function(){move('backward');});$this.on('show',function(e,tab){fn(e,tab);});$this.on('next',function(){move('forward');});$this.on('prev',function(){move('backward');});$this.on('destroy',function(){$(this).removeData().find('> .tabs-toggle li').each(function(i){$(this).removeClass(options.activeclass);});_tabs.each(function(i){$(this).removeAttr('style').css('display',_cache_div[i]);});});}});};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet();});})(jQuery);
/*checkdate.js*/

var dtCh="-";var minYear=1900;var maxYear=2150;function isInteger(s){var i;for(i=0;i<s.length;i++){var c=s.charAt(i);if(((c<"0")||(c>"9")))return false;}
return true;}
function stripCharsInBag(s,bag){var i;var returnString="";for(i=0;i<s.length;i++){var c=s.charAt(i);if(bag.indexOf(c)==-1)returnString+=c;}
return returnString;}
function daysInFebruary(year){return(((year%4==0)&&((!(year%100==0))||(year%400==0)))?29:28);}
function DaysArray(n){for(var i=1;i<=n;i++){this[i]=31
if(i==4||i==6||i==9||i==11){this[i]=30}
if(i==2){this[i]=29}}
return this}
function isDate(dtStr,sep){var dtCh='/'
if(sep=='-')dtCh=sep
var daysInMonth=DaysArray(12)
var pos1=dtStr.indexOf(dtCh)
var pos2=dtStr.indexOf(dtCh,pos1+1)
var strMonth=dtStr.substring(0,pos1)
var strDay=dtStr.substring(pos1+1,pos2)
var strYear=dtStr.substring(pos2+1)
strYr=strYear
if(strDay.charAt(0)=="0"&&strDay.length>1)strDay=strDay.substring(1)
if(strMonth.charAt(0)=="0"&&strMonth.length>1)strMonth=strMonth.substring(1)
for(var i=1;i<=3;i++){if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1)}
month=parseInt(strMonth)
day=parseInt(strDay)
year=parseInt(strYr)
if(pos1==-1||pos2==-1){return false}
if(strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]){return false}
if(dtStr.indexOf(dtCh,pos2+1)!=-1||isInteger(stripCharsInBag(dtStr,dtCh))==false){return false}
return true}
function isDateddmmyyyy(dtStr){if(dtStr==""){return true;}
var daysInMonth=DaysArray(12)
var pos1=dtStr.indexOf("/")
var pos2=dtStr.indexOf("/",pos1+1)
var strDay=dtStr.substring(0,pos1)
var strMonth=dtStr.substring(pos1+1,pos2)
var strYear=dtStr.substring(pos2+1)
strYr=strYear
if(strDay.charAt(0)=="0"&&strDay.length>1)strDay=strDay.substring(1)
if(strMonth.charAt(0)=="0"&&strMonth.length>1)strMonth=strMonth.substring(1)
for(var i=1;i<=3;i++){if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1)}
month=parseInt(strMonth)
day=parseInt(strDay)
year=parseInt(strYr)
if(pos1==-1||pos2==-1){return false}
if(strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]){return false}
if(dtStr.indexOf("/",pos2+1)!=-1||isInteger(stripCharsInBag(dtStr,"/"))==false){return false}
return true}
function validateEmailv2(email)
{if(email.length<=0)
{return true;}
var splitted=email.match("^(.+)@(.+)$");if(splitted==null)return false;if(splitted[1]!=null)
{var regexp_user=/^\"?[\w-_\.]*\"?$/;if(splitted[1].match(regexp_user)==null)return false;}
if(splitted[2]!=null)
{var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;if(splitted[2].match(regexp_domain)==null)
{var regexp_ip=/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;if(splitted[2].match(regexp_ip)==null)return false;}
return true;}
return false;}
function comparedate(sbeg,send){abeg=sbeg.split("/")
aend=send.split("/")
dbeg=abeg[0];if(abeg[0].substr(0,1)=="0")
dbeg=abeg[0].substr(1,1);dend=aend[0];if(aend[0].substr(0,1)=="0")
dend=aend[0].substr(1,1);mbeg=abeg[1];if(abeg[1].substr(0,1)=="0")
mbeg=abeg[1].substr(1,1);mend=aend[1];if(aend[1].substr(0,1)=="0"){mend=aend[1].substr(1,1);}
if(parseFloat(abeg[2])>parseFloat(aend[2]))
{return false;}
else
{if(parseFloat(abeg[2])==parseFloat(aend[2]))
{if(parseFloat(mbeg)>parseFloat(mend))
return false;else if(parseFloat(dbeg)>parseFloat(dend)&parseFloat(mbeg)>=parseFloat(mend))
return false;}}
return true;}
function nonBlankValue(stringIn){var numn=stringIn.length;for(i=0;i<stringIn.length;i++){if(stringIn.charAt(i)==" ")
numn-=1;}
return(numn);}
function trim(sString){while(sString.substring(0,1)==' '){sString=sString.substring(1,sString.length);}
while(sString.substring(sString.length-1,sString.length)==' '){sString=sString.substring(0,sString.length-1);}
return sString;}
function trim_regexp(val){return val.replace(/^\s+|\s+$/g,"");}
function checkCompanyName(name){var re=/^[a-zA-Z0-9 ]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkText2(name){var re=/^[a-zA-Z0-9 &_\-]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkTelephone(name){var re=/^[0-9]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkNumber(name){var re=/^[0-9]+$/;if(name.match(re)==null)
{return false;}
return true;}
function ShowHide(id,value){var e=document.getElementById(id);e.className=value;}
function checkInputXSS(str)
{if(str!=''){str=str.replace(/&lt;/gi,"<");str=str.replace(/&gt;/gi,">");str=str.replace(/<script\s*?.*>?<\/script>/gi,"");}
if(str!='')
str=str.replace(/<script\s*?.*>/gi,"");str=trim(str);return str;}
function checkWebsite(str){var re=/^[\w-]+([\w-]+\.)+[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;if(str.match(re))return true;else return false;}
</script>
    <div class="html_post_job_worklocation" id="html_post_job_worklocation" style="display: none">
        <div class="item_post_job_location">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group form-select">
                        <label>
                            Nơi làm việc <font style="color: red">*</font>
                        </label>
                        <select name="LOCATION_ID[]"  class="select_location">
                            <option value="">Chọn</option>
                            <optgroup label="Việt Nam" >
                            <option value="4" >Hà Nội</option>
                            <option value="8" >Hồ Chí Minh</option>
                            <option value="76" >An Giang</option>
                            <option value="64" >Bà Rịa - Vũng Tàu</option>
                            <option value="781" >Bạc Liêu</option>
                            <option value="281" >Bắc Cạn</option>
                            <option value="240" >Bắc Giang</option>
                            <option value="241" >Bắc Ninh</option>
                            <option value="75" >Bến Tre</option>
                            <option value="650" >Bình Dương</option>
                            <option value="56" >Bình Định</option>
                            <option value="651" >Bình Phước</option>
                            <option value="62" >Bình Thuận</option>
                            <option value="78" >Cà Mau</option>
                            <option value="26" >Cao Bằng</option>
                            <option value="71" >Cần Thơ</option>
                            <option value="50" >Dak Lak</option>
                            <option value="1042" >Dak Nông</option>
                            <option value="511" >Đà Nẵng</option>
                            <option value="900" >Điện Biên</option>
                            <option value="1064" >Đồng Bằng Sông Cửu Long</option>
                            <option value="61" >Đồng Nai</option>
                            <option value="67" >Đồng Tháp</option>
                            <option value="59" >Gia Lai</option>
                            <option value="19" >Hà Giang</option>
                            <option value="351" >Hà Nam</option>
                            <option value="39" >Hà Tĩnh</option>
                            <option value="320" >Hải Dương</option>
                            <option value="31" >Hải Phòng</option>
                            <option value="780" >Hậu Giang</option>
                            <option value="18" >Hòa Bình</option>
                            <option value="321" >Hưng Yên</option>
                            <option value="901" >Khác</option>
                            <option value="58" >Khánh Hòa</option>
                            <option value="77" >Kiên Giang</option>
                            <option value="60" >Kon Tum</option>
                            <option value="1071" >KV Bắc Trung Bộ</option>
                            <option value="1069" >KV Đông Nam Bộ</option>
                            <option value="1070" >KV Nam Trung Bộ</option>
                            <option value="1072" >KV Tây Nguyên</option>
                            <option value="23" >Lai Châu</option>
                            <option value="25" >Lạng Sơn</option>
                            <option value="20" >Lào Cai</option>
                            <option value="63" >Lâm Đồng</option>
                            <option value="72" >Long An</option>
                            <option value="350" >Nam Định</option>
                            <option value="38" >Nghệ An</option>
                            <option value="30" >Ninh Bình</option>
                            <option value="68" >Ninh Thuận</option>
                            <option value="210" >Phú Thọ</option>
                            <option value="57" >Phú Yên</option>
                            <option value="52" >Quảng Bình</option>
                            <option value="510" >Quảng Nam</option>
                            <option value="55" >Quảng Ngãi</option>
                            <option value="33" >Quảng Ninh</option>
                            <option value="53" >Quảng Trị</option>
                            <option value="79" >Sóc Trăng</option>
                            <option value="22" >Sơn La</option>
                            <option value="66" >Tây Ninh</option>
                            <option value="36" >Thái Bình</option>
                            <option value="280" >Thái Nguyên</option>
                            <option value="37" >Thanh Hóa</option>
                            <option value="54" >Thừa Thiên- Huế</option>
                            <option value="73" >Tiền Giang</option>
                            <option value="1065" >Toàn quốc</option>
                            <option value="74" >Trà Vinh</option>
                            <option value="27" >Tuyên Quang</option>
                            <option value="70" >Vĩnh Long</option>
                            <option value="211" >Vĩnh Phúc</option>
                            <option value="29" >Yên Bái</option>
                        </optgroup>
                            <optgroup label="Campuchia" >
                            <option value="1098" >Banteay Meanchey</option>
                            <option value="1096" >Battambang</option>
                            <option value="1092" >Kampong Chhnang</option>
                            <option value="1090" >Kampong Speu</option>
                            <option value="1085" >Kampot</option>
                            <option value="1088" >Kandal</option>
                            <option value="1094" >Kâmpóng Thum, Cambodia</option>
                            <option value="1084" >Kep</option>
                            <option value="1091" >Koh Kong</option>
                            <option value="1093" >Kratie</option>
                            <option value="1102" >Mondulkiri</option>
                            <option value="1104" >Otdar Meanchey</option>
                            <option value="1103" >Pailin</option>
                            <option value="1041" >Phnompenh</option>
                            <option value="1105" >Preah Sihanouk</option>
                            <option value="1099" >Preah Vihear</option>
                            <option value="1089" >Prey Veng</option>
                            <option value="1095" >Pursat</option>
                            <option value="1101" >Rotanak Kiri</option>
                            <option value="1097" >Siem Reap</option>
                            <option value="1083" >Sihanoukville</option>
                            <option value="1100" >Stung Treng</option>
                            <option value="1087" >Svay Rieng</option>
                            <option value="1082" >Tbong Khmum</option>
                        </optgroup>                                                                                                                                                                                                                               >
                            <option value="1018" >Seoul</option>
                        </optgroup>
                                                                                <optgroup label="Hoa Kỳ" >
                            <option value="1034" >Chicago</option>
                            <option value="1077" >Florida</option>
                            <option value="1033" >Miami</option>
                            <option value="1039" >San Diego</option>
                        </optgroup>
                                                                                <optgroup label="Hồng Kông" >
                            <option value="1079" >Hồng Kông</option>
                        </optgroup>
                                                                                <optgroup label="Khác" >
                            <option value="1318" >Khác</option>
                        </optgroup>
                                                                                <optgroup label="Lào" >
                            <option value="1106" >Attapeu</option>
                            <option value="1107" >Bokeo</option>
                            <option value="1108" >Bolikhamsai</option>
                            <option value="1109" >Champasak</option>
                            <option value="1110" >Houaphanh</option>
                            <option value="1111" >Khammouane</option>
                            <option value="1112" >Louang Namtha</option>
                            <option value="1113" >Luang Prabang</option>
                            <option value="1115" >Phongsaly</option>
                            <option value="1119" >Sekong</option>
                            <option value="1059" >Vientiane</option>
                            <option value="1120" >Xiangkhouang</option>
                        </optgroup>
                                                                                <optgroup label="Malaysia" >
                            <option value="1019" >Kuala Lumpur</option>
                            <option value="1078" >Malaysia</option>
                        </optgroup>
                                                                                <optgroup label="Myanmar" >
                            <option value="1320" >Yangon</option>
                        </optgroup>
                                                                                <optgroup label="Nhật Bản" >
                            <option value="1319" >Aichi</option>
                            <option value="1043" >Hokkaido</option>
                            <option value="1000" >Osaka</option>
                            <option value="1001" >Tokyo</option>
                            <option value="1002" >Yokohama</option>
                        </optgroup>
                                                                                <optgroup label="Qatar" >
                            <option value="1055" >Qatar</option>
                        </optgroup>
                                                                                <optgroup label="Quốc tế" >
                            <option value="1073" >Quốc tế</option>
                        </optgroup>
                                                                                <optgroup label="Singapore" >
                            <option value="1040" >Singapore</option>
                        </optgroup>
                                                                                                                                            <optgroup label="Úc" >
                            <option value="1004" >Melbourne</option>
                            <option value="1005" >Sydney</option>
                        </optgroup>
                                                                                <optgroup label="Ukraine" >
                            <option value="1053" >Kharkiv</option>
                        </optgroup>
                    </select>
                        <span class="form-error"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group form-select-chosen">
                        <label>Địa chỉ làm việc</label>
                        <select name="work_location[]" class="work_location select_worklocation" multiple data-placeholder="Địa điểm làm việc">
                            <option value="" >Chọn địa điểm làm việc</option>
                        </select>
                        <span class="form-error"></span>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-center">
                    <div class="form-group form-checkbox mt-5">
                        <input type="checkbox" id="0-1">
                        <label for="0-1">Bảo mật địa điểm làm việc</label>
                    </div>
                    <a class="btn-delete ml-40 mt-5 delete-location-more" href="javascript:void(0)">Xóa</a>
                </div>
            </div>
        </div>
    </div>
    
        <script>
            var language_append = {
                Emp_limit_check:"Tối đa 3 lựa chọn",
                Emp_limit_3_location:"Tối đa 3 nơi làm việc",
                Emp_Choice:"Chọn",
                Emp_del:"Xóa",
                Emp_postjobs_job_title_invalid:"\"Chức danh tuyển dụng\" không hợp lệ. Vui lòng nhập lại",
                postjobs_please_enter_experience:"Vui lòng nhập kinh nghiệm",
                LANG_ERROR_RESUME_SALARY_FROM_TO:"Để thu hút ứng viên hơn, mức lương bạn nhập không nên thấp hơn mức lương tối thiểu vùng.Tham khảo thêm  <a href=\"https://careerbuilder.vn/vi/talentcommunity/muc-luong-toi-thieu-vung-2017-moi-nhat.35A5145F.html\" target=\"_blank\"><b style=\"color:#ff0000\">tại đây.</B></a>",
                LANG_ERROR_RESUME_SALARY_ALERT_FROM_TO:"<p style=\"color:#F00000\">Chênh lệch giữa mức lương tối thiểu và tối đa khá lớn. Bạn hãy thử kiểm tra lại thông tin lương vừa cung cấp.</p>",
                Emp_postjobs_Job_code_is_invalid:'"Mã công việc" không hợp lệ. Vui lòng nhập lại',
                Emp_Please_select_the_job_type:"Vui lòng chọn hình thức làm việc",
                Emp_Please_select_Type_of_job:"Vui lòng chọn Loại hình làm việc",
                Emp_postjobs_Job_desciption_is_invalid:"\"Mô Tả Công Việc\" không được để trống và không được nhập email, hình ảnh và nhiều hơn 10 ký tự. Vui lòng nhập lại",
                Emp_postjobs_skill_requirement_is_invalid:"\"Kỹ năng yêu cầu\" không được để trống và không nhập email, hình ảnh và phải nhiều hơn 10 ký tự. Vui lòng nhập lại",
                Emp_postjobs_Please_choose_career_level:"Vui lòng chọn Cấp bậc",
                Emp_postjobs_Please_choose_experience:"Vui lòng chọn Kinh nghiệm",
                Emp_message:"Thông báo",
                Emp_exp_invalid:"Kinh nghiệm không hợp lệ",
                Emp_age_invalid:"Độ tuổi không hợp lệ",
                postjobs_notice_when_save_job_11:"Cập nhật không thành công hoặc job đã có order phụ trên ngành được chọn",
                Emp_postjobs_please_select_location:"Vui lòng chọn tỉnh/ thành phố",
                Emp_postjobs_Pleate_enter_expiring_date:"Vui lòng nhập thời gian",
                Emp_postjobs_Please_enter_company:"Vui lòng nhập Tên công ty",
                Emp_postjobs_Please_enter_address:"Vui lòng nhập Địa chỉ",
                Emp_postjobs_Please_select_industry:"industry",
                Emp_postjobs_Please_select_location:"location",
                Emp_postjobs_Please_enter_contact_name:"Vui lòng nhập Tên người liên lệ",
                Emp_postjobs_Please_enter_Email1:"Vui lòng nhập Email liên hệ",
                emp_postjob_Do_not_enter_special_characters:"Không được nhập ký tự đặc biệt.",
                Emp_postjobs_Job_desciption_more_character:"Vui lòng không nhập quá 10.000 ký tự",
                Emp_postjobs_skill_requirement_more_character:"Vui lòng không nhập quá 10.000 ký tự",
                Emp_selected:"# lựa chọn",
                emp_resume_tag_limit:"Tag/Kỹ năng không được quá 50 ký tự .Vui lòng nhập lại!",
                Emp_postjobs_not_phone_email_url:"Vui lòng không nhập email và số điện thoại.",
                Emp_postjobs_select_location:"Vui lòng chọn Tỉnh/Thành phố",
                Emp_postjobs_select_work_location:"Vui lòng chọn địa điểm làm việc",
                Emp_postjobs_url_incorrect:"Emp_postjobs_url_incorrect",
                postjobs_err_data_when_save_job:"Vui lòng thử lại !",
                js_resume_industry_required:"Không được để trống.",
                emp_photo_error_youtube:"Link video không dúng định dạng. Bạn vui lòng nhập lại.",

            }
            if(typeof language === 'undefined'){
                var language = language_append;
            }else{
                $.extend(language, language_append);
            }

            var msg             = '';
            var salary_form     = '';
            var salary_to       = '';
            $(document).ready(function() {
                moment.locale(CURRENT_LANGUAGE);
                $('.dates').daterangepicker({
                    "singleDatePicker": true,
                    "autoApply": true,
                    "autoUpdateInput": false,
                    "locale": {
                        "format": "DD/MM/YYYY",
                    },
                    "minDate": moment().add(0, 'days'),
                    "opens": "right"
                });
                $('.dates').on('apply.daterangepicker', function(ev, picker) {
                    $(this).val(picker.startDate.format('DD/MM/YYYY'));
                });
                CKEDITOR.env.isCompatible = true;
                $("textarea.editor").ckeditor(function(){}, {
                    toolbar: 'Basic',
                    skin: 'bootstrapck'
                });
                CKEDITOR_JOB = CKEDITOR.instances.job_desc;
                CKEDITOR_REQ = CKEDITOR.instances.job_req;
                CKEDITOR.instances.job_desc.on('blur', function() {
                    if($.trim($("#job_desc").val()).length > 10){
                        //$('#div_jobdesc').find('.form-error').remove();
                    }
                });
                CKEDITOR.instances.job_req.on('blur', function() {
                    if($.trim($("#job_req").val()).length > 10){
                        //$('#div_jobreq').find('.form-error').remove();
                    }
                });
                $('.auto_suggest').autoComplete({
                    minChars: 3,
                    source: function(term, response){
                        term = term.toLowerCase();
                        $.getJSON(domain +'employers/postjobs/searchtags', { q: term , limit: 10}, function(data){response(data);});
                    },
                    onSelect: function(e, term, item){
                        addWord();
                    }
                });


                 //check noi lam viec va dia chi lam viec
                 var locationvalue = $("select[name='LOCATION_ID[]']").val();
                 if(locationvalue =="")
                 {
                     $("select[name='work_location[]']").prop('disabled', true);
                 }
                 else
                 {
                      $("select[name='work_location[]']").prop('disabled', false);
                 }


                if(msg == 'errNotice')
                {
                    show_noti(2, language.postjobs_notice_when_save_job_11, language.message_common);
                }else if(msg == 'errData'){
                    show_noti(2, language.postjobs_err_data_when_save_job, language.message_common);
                }

                $('#job_template').click(function(){
                    $.fancybox.open({
                        'src': domain+'employers/postjobs/loadjobsample?newLayout=1',
                        'type': 'ajax'
                    });
                });
                $('#JOB_APPLYONLINE').click(function(){
                    if($(this).is(':checked')){
                        $('#reply_title').attr('disabled', false);
                        $('#reply_content').attr('disabled', false);
                        $('#MailReply').css('display', 'block');
                    }else{
                        $('#reply_title').attr('disabled', true);
                        $('#reply_content').attr('disabled', true);
                        $('#MailReply').css('display', 'none');
                    }
                });
                $("#JOB_LASTDATE").change(function(e) {
                    e.preventDefault();
                    $(".error_job_lastdate").html('');
                });

                $('.chk_lang_req').on('click', function(){
                    var parent_obj = $('#div_lang_req');
                    var total_chk = $("input.chk_lang_req:checked", parent_obj).length;
                    if(total_chk > 1){
                        $("input.chk_lang_req:checked", parent_obj).each(function(){
                            $('#lang_priority_'+$(this).val()).css('display', 'block');
                        });
                        if($(this).is(':checked')){
                            $('#lang_priority_'+$(this).val()).css('display', 'block');
                        }else{
                            $('#lang_priority_'+$(this).val()).css('display', 'none');
                        }
                    }else{
                        $("input:checkbox.chk_lang_pri", parent_obj).each(function(){
                            $(this).attr('checked', false);
                        });
                        $("input:checkbox.chk_lang_req", parent_obj).each(function(){
                            $('#lang_priority_'+$(this).val()).css('display', 'none');
                        });
                    }
                    if(!$(this).is(':checked')){
                        $('#lang_priority_'+$(this).val()).children(':checkbox').attr('checked', false);
                    }
                });
                $('input.unique').on('click', function() {
                    $('input.unique:checked').not(this).prop('checked', false);
                });
            });
            $(document).on('click', '.add-location-more', function(){
                if($("#post_job_location .item_post_job_location").length < 3){
                    var clone_html = $("#html_post_job_worklocation").html();
                    $("#post_job_location").append(clone_html).find('select.work_location').removeClass('chosen-select').addClass('chosen-select');
                    reloadChosen();
                }else{
                    show_noti(2, language.Emp_limit_3_location);
                }
            });
            $(document).on('click', '.delete-location-more', function(){
                $(this).closest('div.item_post_job_location').remove();
            });
            function is_Filter_Form()
            {
                $('#intSave').val(1);
                $("#frmEditJob").submit();
            }
            function is_Filter_Form2()
            {
                $('#intSave').val(2);
                $("#frmEditJob").submit();
            }
            function is_Filter_Form3()
            {
                $('#intSave').val(3);
                $("#frmEditJob").submit();
            }
            function saveConfigMatchingScore(job_id, ispublic)
            {
                var myform = $('#tab-postjob-matchingscore');
                var disabled = myform.find(':input:disabled').prop('disabled', false);
                $.ajax({
                    type: "POST",
                    url: domain+'employers/postjobs/savematchingscore',
                    dataType: 'JSON',
                    data: $('#tab-postjob-matchingscore :input').serialize(),
                    beforeSend:function()
                    {
                        disabled.prop('disabled',true);
                    },
                    complete:function()
                    {
                        disabled.prop('disabled', true);
                    },
                    success: function(rs)
                    {
                        window.location = 'https://qccareerbuilder.vn/vi/employers/hrcentral/viewjob/'+job_id+'/user_id/emquality/sort/desc/type/3/position/1';
                    }
                });
            }
        </script>
    
                           </main>
            <footer class="for-customers">
    <div class="container">
        <section class="top-footer cb-section cb-section-border-bottom">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="logo"><img src="./img/logo-w.png" alt=""></div>
                    <address>
                        <ul>
                            <li><span class="lnr lnr-map-marker"></span>Trụ sở chính: Tầng 6, Tòa nhà Pasteur, 139 Pasteur, Phường 6, Quận 3, TP. Hồ Chí Minh</li>
                            <li><span class="lnr lnr-map-marker"></span>Văn phòng Hà Nội: Tầng 17, Tòa nhà VIT, 519 Kim Mã, Quận Ba Đình, Hà Nội </li>
                            <li><span class="lnr lnr-phone-handset"></span>Tel: (84.28) 3822 6060</li>
                            <li><span class="lnr lnr-phone-handset"></span>Tel: (84.24) 7305 6060</li>
                            <li><span class="lnr lnr-envelope"></span>Email: contact@careerbuilder.vn</li>
                        </ul>
                    </address>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>Careerbuilder.vn</h3>
                        <ul>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/about" target="_blank">Về CareerBuilder.vn</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/leadership" target="_blank">Ban lãnh đạo</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/culture" target="_blank">Văn hóa CareerBuilder</a></li>
                            <li><a href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder.35A4E9A9.html" target="_blank">Cơ hội nghề nghiệp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/services/contact" target="_blank">Liên Hệ</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>HR CENTRAL</h3>
                        <ul>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral" rel="nofollow">Quản Lý Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral/manageresume" rel="nofollow">Quản Lý Hồ Sơ</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral/notifymail" rel="nofollow">Thông Báo Ứng Viên</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/postjobs" rel="nofollow">Đăng Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/search_resume" rel="nofollow">Tìm Hồ Sơ</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/hiringsite">Cẩm Nang Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/mobile" target="_blank">Ứng dụng di động</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>HỖ TRỢ</h3>
                        <ul>
                            <li><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank">Trợ Giúp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/use" target="_blank">Thỏa Thuận Sử Dụng</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/security" target="_blank">Quy Định Bảo Mật</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/regulations" target="_blank">Chính sách BV thông tin cá nhân</a></li>
                            <li><a href="https://images.careerbuilder.vn/regulations.pdf" rel="nofollow">Quy Chế Sàn Giao Dịch</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/process" target="_blank">Quy trình giải quyết tranh chấp</a></li>
                            <li><a href="https://advertising.careerbuilder.vn/html/customer/cbvn/GDPR.PDF" target="_blank">Chính sách GDPR</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-12">
                    <div class="footer-app-links">
                        <h3>TÌM KIẾM MỌI LÚC MỌI NƠI</h3>
                        <div class="app-links">
                            <a rel="nofollow,noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=vn.careerbuilder.android.app">
                                <img src="./img/android.png" alt="Android App">
                            </a>
                            <a rel="nofollow,noreferrer" target="_blank" href="https://apps.apple.com/vn/app/careerbuilder-vn-job-search/id882391884?l=vi">
                                <img src="./img/apple.png" alt="IOS App">
                            </a>
                        </div>
                    </div>
                    <div class="footer-social-links">
                        <h3>KẾT NỐI VỚI CAREERBUILDER.VN</h3>
                        <ul>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.facebook.com/pages/CareerBuilder-Vietnam/265321726945679?ref=tn_tnmn"> <span class="fa fa-facebook"></span></a></li>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.linkedin.com/company/careerbuilder-vietnam"> <span class="fa fa-linkedin"></span></a></li>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.youtube.com/user/CareerBuilderVietnam"> <span class="fa fa-youtube-play"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="bottom-footer">
            <div class="left-bottom-footer">
                <p>Copyright © CareerBuilder Vietnam.</p>
            </div>
            <div class="right-bottom-footer">
                <a target="_blank" rel="nofollow,noreferrer" href="https://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=22262">
                    <img src="./img/dk.png" alt="">
                </a>
                <div class="back-to-top" id="back-to-top">
                    <em class="lnr lnr-arrow-up"></em>
                </div>
            </div>
        </section>
    </div>
</footer>
<a class="feedback-btn" data-fancybox="" data-type="ajax" data-src="https://careerbuilder.vn/vi/jobseekers/index/sendfeedback?from=employer&newlayout=1" title="Feedback" href="javascript:void(0);"><span>Feedback</span></a><script>/*employer-common.js*/

function backToTop(){$("#back-to-top").on('click',function(){$("html, body").animate({scrollTop:0,},1000);});};function toggleNav(){let buttonNav=$('.employer-navbar-2-1 .category-nav')
let menuNav=$('.employer-navbar-2-1 .main-wrap')
buttonNav.on('click',function(){$(this).toggleClass('active')
menuNav.slideToggle()})}
function validateNumber(value){var strCheck=/([0-9]+)/g;var reg=new RegExp(strCheck);var strTemp=value.replace(reg,'');return(strTemp=='')?true:false;}
function allowInputNumber(inpID){$("#"+inpID).on("keypress keyup blur",function(event){$(this).val($(this).val().replace(/[^\d].+/,""));if((event.which<48||event.which>57)){event.preventDefault();}});}
function isValidEmail(emailAddress){var pattern=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return pattern.test(emailAddress);}
function loadLocations(country_id,location_id){if(country_id!=1){$("#lable_location").hide();$("#location_id").hide();}else{$.ajax({url:domainroot+'/employersnews/index/loadlocation-new',type:'POST',dataType:'json',data:'country_id='+country_id+"&location_id="+location_id,}).done(function(response){$("#location_id").html('');$("#lable_location").show();$("#location_id").show();var str_loction='';$.each(response,function(i,item){str_loction+='<option value="'+item.LOCATION_ID+'">'+item.LOCATION_NAME+'</option>'});$("#location_id").html(str_loction);});}}
function show_noti(type,content,title,more_link,icon,multi){if(type==1){var class_type='success-modal';if(typeof(content)==="undefined")content=language.popup_msg_success;}else{var class_type='error-modal';if(typeof(content)==="undefined")content=language.popup_msg_error;}
if(typeof(icon)!=="undefined"&&icon!=""){var txt_icon=icon;}else{if(type==1){var txt_icon='./img/icon-success.png';}else{var txt_icon='./img/icon-error.png';}}
if(typeof(more_link)==="undefined"){var more_link='';}
var txt_multi=0;if(typeof(multi)!=="undefined"){var txt_multi=1;}
if(txt_multi==0)
$.fancybox.close('all');var txt_button=language.popup_close_popup;if(typeof(txt_button)==="undefined")
txt_button="OK";if(typeof(title)==="undefined"){var title=language.message_common;}
var html_popup='<div class="jobs-posting-modal modal-noti-emp '+class_type+'" style="display: none"><div class="modal-head"><img src="'+txt_icon+'" alt="icon-modal"></div><div class="modal-body"><p class="title">'+title+'</p><p>'+content+'</p><div class="button"><a class="btn-gradient" href="javascript:void(0);" data-fancybox-close>'+txt_button+'</a></div></div></div>';$.fancybox.open(html_popup);}
function closeAllmodal(){$.fancybox.close('all');}
function checkSpecialCharTelephone(strInput){var re=/^([0-9\.\-\+\(\)\ ])+$/;if(strInput.search(re)==-1){return false;}else{return true;}}
function show_loading_page(){$("#page-loading").css('display','flex');}
function hide_loading_page(){$("#page-loading").css('display','none')}
function checkEmail(stringIn){var re=/^([A-Za-z0-9\_\-]+\.)*[A-Za-z0-9\_\-]+@[A-Za-z0-9\_\-]+(\.[A-Za-z0-9\_\-]+)+$/;var sEMail=stringIn;if((sEMail=="")||(sEMail.search(re)==-1)){return(false)}
return(true)};function refeshImgCaptcha(id){$.ajax({type:'POST',url:domain+'employers/imagecaptcha',success:function(data){$('#'+id).html(data)}});}
$.validator.addMethod('validatePassUnicodeStrong',function(value){var c=0;var strTemp=value.replace(/[0-9]/g,'');if(strTemp!=value){c++;value=strTemp;}
strTemp=value.replace(/[a-z]/g,'');if(strTemp!=value){c++;value=strTemp;}
strTemp=value.replace(/[A-Z]/g,'');if(strTemp!=value){c++;value=strTemp;}
strTemp=value.replace(/[\-\_\@\~\`\#\$\%\^\&\*\?\+\"\'\!\(\)\=\?\.]/g,'');if(strTemp!=value){c++;value=strTemp;}
if(c<2||value!='')return false;return true;},'');var emailIsVali=new Array();$.validator.addMethod('checkEmail',function(value){if(typeof emailIsVali[value]!='undefined')
return emailIsVali[value];$.ajax({cache:true,async:false,type:"POST",url:domain+"employers/emailexist",data:{email:value},success:function(data){if(data>0){result=false;}else{result=true;}}});emailIsVali[value]=result;return result;},'');$.validator.addMethod('checkcontactinfo',function(value){var value=$("#company_summary").val().replace(/<[^>]*>|\s/g,'').replace(/(&nbsp;)/g," ");value=$.trim(value);var re=/(@([a-zA-Z0-9]{1,8})\.[a-zA-Z]{2,})|([0-9+]{8,11})/;if(re.test(value))return false;return true;},language.emp_register_contact_info);$.validator.addMethod('checktaxid',function(value){if(value){var re=/^([0-9-]){10,14}$/;if(re.test(value))return true;else return false;}else{return true;}},language.emp_register_taxid_error);$.validator.addMethod('checkSpecialCharTelephone',function(value){return checkSpecialCharTelephone(value);},language.Emp_Please_enter_the_correct_Mobile);function checkEmailExist(){var user_email=$("#email").val();if(user_email==""){$("#error_email").html(language.emp_register_empty).show();$("#error_email_succes").html('').hide();$("#control_frm_email .checked").hide();}else if(!checkEmail(user_email)){$("#error_email").html(language.emp_register_incorrect).show();$("#error_email_succes").html('').hide();$("#control_frm_email .checked").hide();}else{$.ajax({type:"POST",url:domain+"employers/emailexist",data:{email:user_email},success:function(data){if(data>0){$("#error_email").html(language.emp_register_email_exist).removeClass('success');$("#control_frm_email .checked").hide();}else{$("#error_email").html(language.emp_register_email_not_exist).addClass('success');$("#control_frm_email .checked").show();}}});}}
function getItemsChecked(){var x=document.getElementsByName("listresumes[]");var p="";for(var i=0;i<x.length;i++){if(x[i].checked){p+=x[i].value+",";}}
return p.substring(0,p.length-1);}
function getItemsCheckedFV(name){var x=document.getElementsByName(name);var p="";for(var i=0;i<x.length;i++){if(x[i].checked){p+=x[i].value+",";}}
return p.substring(0,p.length-1);}
function unpostingJob(job_id,ispublic){$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.emp_hrcentral_unposting_this_online_job+'</div>',theme:'bootstrap',animation:'scale',columnClass:'small',type:'blue',buttons:{cancel:{text:language.employers_confirm_btn_cancle,},confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){$.ajax({type:"POST",url:domain+'employers/hrcentral/posting/unpostingjob',data:{'job_id':job_id,'ispublic':ispublic},success:function(rs){if(rs==1){$.confirm({title:false,content:'<div class="text-center">'+language.emp_hrcentral_unposting_success+'</div>',theme:'bootstrap',columnClass:'small',buttons:{ok:function(){window.location=domain+'employers/hrcentral/unposting';}}});}else if(rs==0){$.confirm({title:false,content:'<div class="text-center">'+language.emp_hrcentral_unposting_unsuccess+'</div>',theme:'bootstrap',columnClass:'small',buttons:{ok:function(){window.location=domain+'employers/hrcentral/posting';}}});}else{show_noti(2,language.emp_hrcentral_permission_unposting,language.message_common);}}});}}}});}
function postingJob(job_id,ispublic){$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.emp_hrcentral_posting_this_online_job+'</div>',theme:'bootstrap',animation:'scale',columnClass:'small',containerFluid:true,type:'blue',buttons:{cancel:{text:language.employers_confirm_btn_cancle,},confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){$.ajax({type:"POST",url:domain+'employers/hrcentral/posting/unpostingjob',data:{'job_id':job_id,'ispublic':ispublic},success:function(rs){if(rs==1){$.confirm({title:false,content:'<div class="text-center">'+language.emp_hrcentral_posting_success+'</div>',theme:'bootstrap',columnClass:'small',buttons:{ok:function(){window.location=domain+'employers/hrcentral/posting';}}});}else if(rs==0){$.confirm({title:false,content:'<div class="text-center">'+language.emp_hrcentral_posting_unsuccess+'</div>',theme:'bootstrap',columnClass:'small',buttons:{ok:function(){window.location=domain+'employers/hrcentral/unposting';}}});}else{show_noti(2,language.emp_hrcentral_permission_unposting,language.message_common);}}});}}}});}
function checkInputNormalText(strCheck){if(strCheck==""||isBlackListTag(strCheck)){return false}return true}
function isBlackListTag(strCheck){var arrList=new Array("<",">","=","[","]","{","}","^","~","$","%");for(var i=0;i<arrList.length;i++){if(strCheck.indexOf(arrList[i])>=0){return true}}return false}
function replaceAll(strSource,strIn,strOut){return strSource.replace(new RegExp(strIn,'g'),strOut);}
function validateSearch(){var keyword=$('#keyword').val().replace(/\//g,"");var fromdate=$('#date_from').val();var todate=$('#date_to').val();var datetype=$('#date_type').val();var limit=$('#limit').val();var url='';var arrF=fromdate.split('/');var arrT=todate.split('/');if(fromdate==''&&todate!=''){show_noti(2,language.emp_hrcentral_please_select_fromdate,language.message_common);return false;}else if(fromdate!=''&&todate==''){show_noti(2,language.emp_hrcentral_please_select_todate,language.message_common);return false;}else if(new Date(arrF[2],arrF[1],arrF[0]).getTime()>new Date(arrT[2],arrT[1],arrT[0]).getTime()){show_noti(2,language.emp_hrcentral_validate_date,language.message_common);return false;}else if(fromdate==''&&todate==''&&keyword==''){show_noti(2,language.emp_hrcentral_please_select_1_dk,language.message_common);return false;}
var url='employers/hrcentral/'+action+'/user_id/'+user_id+'/sort/desc/type/3';if(keyword){keyword=keyword.replace(/["'"]/g,"");if(checkInputNormalText(keyword)==false){show_noti(2,language.emp_hrcentral_validate_keyword,language.message_common);return false}}
url+='/keyword/'+keyword+'/type_s/0/limit/'+limit;if(fromdate&&todate)
url+='/datetype/'+datetype+'/fromdate/'+replaceAll(fromdate,'/',"-")+'/todate/'+replaceAll(todate,'/',"-");window.location=domain+url;return false;}
function checkOrder(job_id){$.ajax({type:"POST",url:domain+'employers/hrcentral/checkorder',dataType:'JSON',success:function(rs){if(rs==1)
window.location.href=domain+"employers/hrcentral/order/"+job_id;else if(rs==2)
show_noti(2,language.emp_hrcentral_not_permission_postjob,language.message_common);else
$.fancybox.open($(".jobs-posting-1-modal"));}});}
function requestService(job_id){$.ajax({type:"POST",url:domain+'employers/hrcentral/checksubservice?newlayout=1',dataType:'JSON',success:function(rs){if(rs==1)
window.location.href=domain+"employers/hrcentral/suborder/"+job_id;else
show_noti(2,language.emp_hrcentral_not_register_subservice,language.message_common);}});}
function showAutoReply(job_id){closeAllmodal();$.fancybox.open({'src':domain+'employers/postjobs/autoreply?job_id='+job_id+'&newlayout=1','type':'ajax'});}
function addSmartField(id,str){$("#"+id).insertAtCaret(str);}
function insertAutoReply(){if($("#frmReply").validate({rules:{reply_title:{required:true,maxlength:70},reply_content:{required:true,minlength:30,maxlength:3000}},errorPlacement:function(error,element){element.closest('div').find('span.error').html(error.html())},success:function(element){element.closest('div').find('span.error').html('');}}).form()==false)return false;$.ajax({type:"POST",url:domain+'employers/postjobs/saveautoreply',data:$('#frmReply').serialize(),dataType:'json',success:function(obj){$('#div_title').html('<strong>'+obj.AUTOREPLY_TITLE+'</strong>');$('#div_content').html(nl2br(obj.AUTOREPLY_CONTENT,false));$("#div_automatic_reply_mail").show('slow');$("#div_no_automatic_reply_mail").hide();$.fancybox.close('all');}});}
jQuery.fn.extend({insertAtCaret:function(valueToInsertAtCaret){return this.each(function(i){if(document.selection){this.focus();selection=document.selection.createRange();selection.text=valueToInsertAtCaret;this.focus();}else if(this.selectionStart||this.selectionStart=="0"){var startPosition=this.selectionStart;var endPosition=this.selectionEnd;var scrollTop=this.scrollTop;this.value=this.value.substring(0,startPosition)+valueToInsertAtCaret+this.value.substring(endPosition,this.value.length);this.focus();this.selectionStart=startPosition+valueToInsertAtCaret.length;this.selectionEnd=startPosition+valueToInsertAtCaret.length;this.scrollTop=scrollTop;}else{this.value+=valueToInsertAtCaret;this.focus();}})}});function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');}
function activeTab(tab_id){let tabDetail=$('.jobs-posting-detail .tabslet-tab-detail li');let tabContent=$('.jobs-posting-detail .tabslet-content-detail');tabDetail.removeClass('active');tabContent.removeClass('active');$('.jobs-posting-detail .tabslet-tab-detail li[data-tab-detail='+tab_id+']').addClass('active');$('.jobs-posting-detail .tabslet-content-detail[data-content-detail='+tab_id+']').addClass('active');}
function fixWidthChosen(){$(".chosen-select-max-three").each(function(){var ow_defaul=wit_defaul=it_defaul=0;var id_default='#'+$(this).attr('id')+'_chosen';var w_default=$(id_default).width()-40;$(id_default+' li.search-choice').each(function(){$(this).find("span").removeAttr("style");ow_defaul+=$(this).innerWidth();it_defaul++;});if(w_default<ow_defaul){wit_defaul=Math.round(w_default/it_defaul)-35;$(id_default+' li.search-choice span').css('width',wit_defaul+'px');}});$(".chosen-select").each(function(){var ow_defaul=wit_defaul=it_defaul=0;var id_default='#'+$(this).attr('id')+'_chosen';var w_default=$(id_default).width()-35;$(id_default+' li.search-choice').each(function(){$(this).find("span").removeAttr("style");ow_defaul+=$(this).width()+30;it_defaul++;});if(w_default<ow_defaul){wit_defaul=Math.round(w_default/it_defaul)-35;$(id_default+' li.search-choice span').css('width',wit_defaul+'px');}});if($(window).width()<1025){$('.search-choice-close').on('touchend',function(){$(this).trigger('click');});$('.search-choice-close').on('tap',function(){$(this).trigger('click');});}}
function reloadChosen(){initChosen();}
function initChosen(){if($.isFunction($.fn.chosen)){if($(window).width()>1024){$(".chosen-select-max-three").chosen({max_selected_options:3}).change(function(){fixWidthChosen();});}else{$(".chosen-select-max-three").chosen({max_selected_options:1}).change(function(){fixWidthChosen();});}
$(".chosen-select-max-one").chosen({max_selected_options:1}).change(function(){fixWidthChosen();});$(".chosen-select").chosen().change(function(){fixWidthChosen();if($(this).val().length>0)
$(this).closest('div').find('span.form-error').html('');});setTimeout(function(){fixWidthChosen();},1000);}}
function loadWorkLocation(object){$(object).prop('disabled',true);$(object).closest('div.item_post_job_location').find('select.work_location').val('').prop('disabled',true).trigger("chosen:updated");setUpSelectLocation();$.ajax({type:"POST",url:PATH_KIEMVIEC+'employers/hrcentral/accounts/getworklocation',data:'newlayout=1&location_id='+$(object).val(),success:function(html){$(object).closest('div.row').next('div.row').html(html);$(object).prop('disabled',false);if($(object).val()>0)
$(object).closest('div').find('span.form-error').html('');$("#post_job_location .item_post_job_location:first-child .add-location-more").show();$("#post_job_location .item_post_job_location:first-child .delete-location-more").hide();reloadChosen();}});}
function reLoadWorkLocation(object){$(object).prop('disabled',true);var obj_address=$(object).closest('div.item_post_job_location').find('select.work_location');obj_address.val('').prop('disabled',true).trigger("chosen:updated");setUpSelectLocation();var arr_workloc=[];$(object).closest('div.item_post_job_location').find('select.select_worklocation').children('option').each(function(){if($(this).is(':selected')&&$(this).val()!=''){arr_workloc.push($(this).val());}});var str_workloc=arr_workloc.join(",");$.ajax({type:"POST",url:PATH_KIEMVIEC+'employers/hrcentral/accounts/getworklocation',data:'newlayout=1&location_id='+$(object).val(),success:function(html){obj_address.html(html).prop('disabled',false).trigger("chosen:updated");$(object).prop('disabled',false);}});}
function addWorkLocation(){$.fancybox.open({'src':PATH_KIEMVIEC+"employers/hrcentral/accounts/inupworklocation?showpopup=1&newLayout=1",'type':'ajax'});}
function reLoadAllWorkLocation(){var sel_location=$('select[name="LOCATION_ID[]"]');sel_location.each(function(index,obj){reLoadWorkLocation(obj);});setTimeout(function(){fixWidthChosen();},600);}
function addLocation(){var obj_box_location=$(".box_location");if(obj_box_location.length>=3){alert(language.Emp_limit_3_location);return false;}
var html_box_location=obj_box_location.first().clone();$(".box_locations").append(html_box_location);setUpSelectLocation();var botton_add=$('.button_add');botton_add.each(function(index,obj){if(index==0){$(this).show();}else{$(this).hide();}});var botton_del=$('.button_del');botton_del.each(function(index,obj){if(index==0){$(this).hide();}else{$(this).show();}});$('select[name="LOCATION_ID[]"]').last().prop('selectedIndex',0).trigger('change');$('.clearall').last().find('label').hide();fixWidthChosen();}
function delLocation(obj){$(obj).parent().parent().parent().remove();setUpSelectLocation();}
function setUpSelectLocation(){var sel_location=$('select[name="LOCATION_ID[]"]');sel_location.each(function(index,obj){$(this).children('optgroup').each(function(){$(this).children('option').each(function(){if($(this).val()!=''){$(this).removeAttr('disabled');}});});});sel_location.each(function(index,obj){sel_location.each(function(index1,obj1){if(index!=index1){$('optgroup option[value="'+$(obj).val()+'"]',this).attr('disabled','disabled');}});});}
function loadDistrictProfile(location_id,sl_district_id){var str='';str+='<option value="">'+language.worklocation_select_district+'</option>';for(k in districts){if(location_id==districts[k][1]){str+='<option value="'+districts[k][0]+'">'+districts[k][2]+'</option>';}}
$('#sldistrict option').remove();$('#sldistrict').append(str);$("#sldistrict option[value='"+sl_district_id+"']").attr('selected','selected');setUpSelectLocation();}
function setUpSelectLocation(){var sel_location=$('select[name="LOCATION_ID[]"]');sel_location.each(function(index,obj){$(this).children('optgroup').each(function(){$(this).children('option').each(function(){if($(this).val()!=''){$(this).removeAttr('disabled');}});});});sel_location.each(function(index,obj){sel_location.each(function(index1,obj1){if(index!=index1){$('optgroup option[value="'+$(obj).val()+'"]',this).attr('disabled','disabled');}});});}
function change_age(t){f=document.frmEditJob;t.value=t.value.replace(/^[0\D]/g,"");if(parseInt(t.value)>0)t.value=parseInt(t.value);if(t.value>0&&t.value>=100)t.value="";}
function chckage(){var from_age=$('#JOB_FROMAGE').val();var to_age=$('#JOB_TOAGE').val();if(from_age!=""&&to_age!=""){if(parseInt(to_age)<=parseInt(from_age)){$('#JOB_TOAGE').val("");show_noti(2,language.Emp_age_invalid,language.message_common);return false;}}}
function loadExperience(v){if(v==1)
$('#JOB_EXPERIENCE').show();else
$('#JOB_EXPERIENCE').hide();$('#JOB_FROMEXPERIENCE').val('');$('#JOB_TOEXPERIENCE').val('');}
function change_number(t){f=document.frmEditJob;t.value=t.value.replace(/^[0\D]/g,"");if(parseInt(t.value)>0)t.value=parseInt(t.value);if(t.value>0&&t.value>=100)t.value="";}
function chcknumber(){var from_exp=$('#JOB_FROMEXPERIENCE').val();var to_exp=$('#JOB_TOEXPERIENCE').val();if(from_exp!=""&&to_exp!=""){if(parseInt(to_exp)<=parseInt(from_exp)){$('#JOB_TOEXPERIENCE').val("");show_noti(2,language.Emp_exp_invalid,language.message_common);return false;}}}
function removeFormatWord(input){var stringStripper=/(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;var output=input.replace(stringStripper,' ');var commentSripper=new RegExp('<!--(.*?)-->','g');var output=output.replace(commentSripper,'');var tagStripper=new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>','gi');output=output.replace(tagStripper,'');var badTags=['style','script','applet','embed','noframes','noscript'];for(var i=0;i<badTags.length;i++){tagStripper=new RegExp('<'+badTags[i]+'.*?'+badTags[i]+'(.*?)>','gi');output=output.replace(tagStripper,'');}
var badAttributes=['style','start'];for(var i=0;i<badAttributes.length;i++){var attributeStripper=new RegExp(' '+badAttributes[i]+'="(.*?)"','gi');output=output.replace(attributeStripper,'');}
return output;}
function loadTagKey(){var job_title=$.trim($('#job_title').val());if(job_title!=''){$.ajax({type:"POST",url:domain+'employers/postjobs/loadtagkey',dataType:'JSON',data:{'job_title':job_title},success:function(rs){if(rs){$.each(rs,function(key,val){if(val.arrKey){$('#list-tag').html('');var tagStripper=new RegExp('[0-9,\(|\)]','g');job_title=job_title.replace(tagStripper,'');$("#list-tag").append('<div class="tag-item"><p>'+job_title+'</p><a class="delete-tag" onclick="return removeWord(this)" href="javascript:void(0)"> </a><input type="hidden" name="synonym[]" value="'+job_title+'" /></div>');$.each(val.arrKey,function(key1,val1){$("#list-tag").append('<div class="tag-item"><p>'+val1+'</p><a class="delete-tag" onclick="return removeWord(this)" href="javascript:void(0)"> </a><input type="hidden" name="synonym[]" value="'+val1+'" /></div>');});}});}else{var tagStripper=new RegExp('[0-9,\(|\)]','g');job_title=job_title.replace(tagStripper,'');$("#list-tag").append('<div class="tag-item"><p>'+job_title+'</p><a class="delete-tag" onclick="return removeWord(this)" href="javascript:void(0)"> </a><input type="hidden" name="synonym[]" value="'+job_title+'" /></div>');}}})}}
function addWord(){var arrJobTags=[];var str=$('#synonym').val();if($.trim(str)!=''){if(str.length>50){show_noti(2,language.emp_resume_tag_limit);$('#synonym').focus();return false;}
var found=false;var lw_str;if(arrJobTags.length<1){$('#list-tag input[type="hidden"]').each(function(){lw_str=$(this).val().toLowerCase();lw_str=$.trim(lw_str);if($.inArray(lw_str,arrJobTags)<0)arrJobTags.push(lw_str);});}
lw_str=str.toLowerCase();lw_str=$.trim(lw_str);if($.inArray(lw_str,arrJobTags)<0){arrJobTags.push(lw_str);$("#list-tag").append('<div class="tag-item"><p>'+str+'</p><a class="delete-tag" onclick="return removeWord(this)" href="javascript:void(0)"> </a><input type="hidden" name="synonym[]" value="'+str+'" /></div>');}
$('#synonym').val('').focus();}
return false;}
function removeWord(obj){$(obj).parent().remove();return false;}
function pushWord(str){$('#synonym_sections').append('<span>'+str+'<input type="hidden" name="synonym[]" value="'+str+'"/> <a href="#"  onclick="return removeWord(this)">&nbsp;</a></span>');}
function limitLen(t,l){var mlength=t.getAttribute?parseInt(t.getAttribute("maxlength")):"";tmp=t.value;if(tmp.length>mlength){t.value=tmp.substr(0,mlength)}
l.value=mlength-tmp.length;}
function nonBlankValue(stringIn){var numn=stringIn.length;for(i=0;i<stringIn.length;i++){if(stringIn.charAt(i)==" ")
numn-=1;}
return(numn);}
function contain_invalid(str,invalidstr){for(i=0;i<invalidstr.length;i++)
if(str.indexOf(invalidstr.charAt(i))>=0)return false;return true;}
function checkSpecialCharEditContact(strInput){var re=/^([0-9\.\-\+\(\)\ ])+$/;if(strInput.search(re)==-1){return false;}else{return true;}}
function checkSpecialCharPostJob(strInput){var re=/^([A-Za-z0-9\&\_\-\/\\\ ])+$/;if(strInput.search(re)==-1){return false;}else{return true;}}
function checkSpecialChar(strInput){var re=/^([A-Za-z0-9\.\-\_\@\~\`\#\$\%\^\&\*\?\+\"\'\!\(\)\=\?])+$/;if(strInput.search(re)==-1){return false;}else{return true;}}
function strongPass(password){var strong=0;if(password.match(/([a-z])/))strong+=1;if(password.match(/([0-9])/))strong+=1;if(password.match(/([A-Z])/))strong+=1;if(password.match(/([.,-,_,@,~,`,#,$,%,^,&,*,?,+,",',!,(,),=,?])/))strong+=1;return strong>=2?true:false;}
function checkAlertSalary(){var salary_from_valid=$('#salary_from').val().replace(/[^0-9\s]/gi,'');var salary_to_valid=$('#salary_to').val().replace(/[^0-9\s]/gi,'');if(parseInt(salary_from_valid)>0&&parseInt(salary_to_valid)>0){if(Math.round(parseInt(salary_to_valid)/parseInt(salary_from_valid))>=7){show_noti(2,language.LANG_ERROR_RESUME_SALARY_ALERT_FROM_TO,language.message_common);return true;}}
return true;}
$(document).ready(function(){$.validator.addMethod('checkJobTitle',function(value){if(!nonBlankValue(value)||(contain_invalid(value,'@$=%^"')==false))
return false;return true;},language.Emp_postjobs_job_title_invalid);$.validator.addMethod('checkCharacterSpec',function(value){if(contain_invalid(value,'@$=%^"')==false)
return false;return true;},language.emp_postjob_Do_not_enter_special_characters);$.validator.addMethod('checkExperience',function(value){var exp_valid=$('#JOB_ISEXPERIENCE').val();if(exp_valid==1){var exp_from=$('#JOB_FROMEXPERIENCE').val();var exp_to=$('#JOB_TOEXPERIENCE').val();if(exp_from==''&&exp_to=='')return false;if(parseInt(exp_to)<parseInt(exp_from)&&parseInt(exp_to)>0)
return false;}
return true;},language.postjobs_please_enter_experience);$.validator.addMethod('checkvaliddate',function(value){strdate=$('#JOB_LASTDATE').val();if(strdate!=""){dtStr1=strdate;if(isDateddmmyyyy(dtStr1)){cur_time=new Date();cur_day=cur_time.getDate();cur_month=(cur_time.getMonth()+1);cur_year=cur_time.getYear();if(cur_year<2000)cur_year+=1900;startdate=cur_day+"/"+cur_month+"/"+cur_year
if(comparedate(startdate,dtStr1)==false){return false;}
return true;}else{return false}}
return false;},language.Emp_postjobs_Pleate_enter_expiring_date);$.validator.addMethod('checkSalary',function(value){$('#salary_from').val($('#salary_from').val().replace(/[^0-9\s]/gi,''));if($('#salary_from').val()==0)$('#salary_from').val('');$('#salary_to').val($('#salary_to').val().replace(/[^0-9\s]/gi,''));if($('#salary_to').val()==0)$('#salary_to').val('');var unit_valid=$('#job_salaryunit option:selected').val();if(unit_valid=='vnd'||unit_valid=='usd'){var salary_from_valid=$('#salary_from').val();var salary_to_valid=$('#salary_to').val();if(salary_from_valid==''&&salary_to_valid=='')return false;if(parseInt(salary_to_valid)<parseInt(salary_from_valid)&&parseInt(salary_to_valid)>0)
return false;if(isNaN(parseInt(salary_to_valid)))
salary_to_valid=0;if(isNaN(parseInt(salary_from_valid)))
salary_from_valid=0;var salary_max=parseInt(salary_to_valid)>parseInt(salary_from_valid)?salary_to_valid:salary_from_valid;var salary_min=parseInt(salary_from_valid)>0?salary_from_valid:salary_to_valid;if(unit_valid=='usd'&&parseInt(salary_max)>=100000)return false;if(unit_valid=='usd'&&parseInt(salary_min)<25)return false;if(unit_valid=='vnd'&&parseInt(salary_min)<500000)return false;if(unit_valid=='vnd'&&parseInt(salary_max)>=999000000)return false;}
return true;},language.LANG_ERROR_RESUME_SALARY_FROM_TO);$.validator.addMethod('checkSpecialCharPostJob',function(value){var re=/^([A-Za-z0-9\&\_\-\/\\\ ])+$/;if(value.search(re)==-1&&value.length>0)
return false;return true;},language.Emp_postjobs_Job_code_is_invalid);$.validator.addMethod('require-one-job-type',function(value){return $('.require-one-job-type:checked').length>0;},language.Emp_Please_select_the_job_type);var checkboxe_job=$('.require-one-job-type');var checkbox_name_job=$.map(checkboxe_job,function(e,i){return $(e).attr("name")}).join(" ");$(".require-one-job-type").on('click',function(e){if($(this).is(":checked"))
$("#last_jobtype").hide();else
$("#last_jobtype").show();});$.validator.addMethod('checkMaxInputDesEditor',function(value){CKEDITOR.instances.job_desc.updateElement();var value=$("#job_desc").val().replace(/<[^>]*>|\s/g,'').replace(/(&nbsp;)/g," ");value=removeFormatWord($.trim(value));if(value.length>10000)return false;return true;},language.Emp_postjobs_Job_desciption_more_character);$.validator.addMethod('checkMinimumInputDesEditor',function(value){CKEDITOR.instances.job_desc.updateElement();var value=$("#job_desc").val().replace(/<[^>]*>|\s/g,'').replace(/(&nbsp;)/g," ");value=$.trim(value);if(value.length<10)return false;var re=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;if(re.test(value))return false;var re=/([0-9+]{8,11})/;if(re.test(value))return false;var re=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(re.test(value))return false;return true;},language.Emp_postjobs_Job_desciption_is_invalid);$.validator.addMethod('checkMaxInputRegEditor',function(value){CKEDITOR.instances.job_req.updateElement();var value=$("#job_req").val().replace(/<[^>]*>|\s/g,'').replace(/(&nbsp;)/g," ");value=removeFormatWord($.trim(value));if(value.length>10000)return false;return true;},language.Emp_postjobs_skill_requirement_more_character);$.validator.addMethod('checkMinimumInputRegEditor',function(value){CKEDITOR.instances.job_req.updateElement();var value=$("#job_req").val().replace(/<[^>]*>|\s/g,'').replace(/(&nbsp;)/g," ");value=$.trim(value);if(value.length<10)return false;var re=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;if(re.test(value))return false;var re=/([0-9+]{8,11})/;if(re.test(value))return false;var re=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(re.test(value))return false;return true;},language.Emp_postjobs_skill_requirement_is_invalid);$.validator.addMethod("multiemail",function(value,element){if(this.optional(element))
return true;var emails=value.split(/[;]+/);valid=true;for(var i in emails){value=emails[i];valid=valid&&$.validator.methods.email.call(this,$.trim(value),element);}
return valid;},$.validator.messages.Emp_postjobs_Please_enter_Email1_valid);$.validator.addMethod('checkPhoneEmailUrlInput',function(value){value=$.trim(value);var re=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;if(re.test(value))return false;var re=/([0-9+]{8,11})/;if(re.test(value))return false;var re=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(re.test(value))return false;return true;},language.Emp_postjobs_not_phone_email_url);$.validator.addMethod('checkWorkLocation',function(value){var arr_workloc=[];$('select.select_worklocation').each(function(){var arr_workloc_child=[];$(this).children('option').each(function(){if($(this).is(':selected')&&$(this).val()!=''){arr_workloc.push($(this).val());}});});var str_workloc=arr_workloc.join(",");if(str_workloc!="")
return true;else
return false;},language.Emp_postjobs_select_work_location);$.validator.addMethod('re',function(value){var arr_loc=[];$('select.select_location').each(function(){$(this).find('optgroup option').each(function(){if($(this).is(':selected')&&$(this).val()!=''){arr_loc.push($(this).val());}});});var str_loc=arr_loc.join(",");if(str_loc!="")
return true
else
return false;},language.Emp_postjobs_select_location);$.validator.addMethod('check_industry_select',function(value){if($("#chktopcat").length&&$("#chktopcat").val()==1);return true;if($("#select_industry_db").val().length>0)
return true;return false;},language.js_resume_industry_required);$.validator.addMethod('checkValidateYoutube',function(value){var url=$('#strVideo').val();url=url.replace(/^\s+|\s+$/g,"");if(url!='')
{var pos=url.indexOf('youtube.com/watch?v=');if(pos<0){return false;}
$.ajax({type:"POST",url:domain+'employers/postjobs/checklinkyoutube',dataType:'JSON',data:'link='+url,success:function(rs)
{if(rs=='0')
return false;else
return true;}});}
return true;},language.emp_photo_error_youtube);$("#select_industry_db").chosen({max_selected_options:3}).change(function(){if($("#select_industry_db").val().length>0)
$(".error_select_industry_db_1").html('');});$("#frmEditJob").validate({groups:{checks1:checkbox_name_job},ignore:":disabled, :hidden:not(.editor,select)",onfocusout:false,rules:{'job_salaryunit':{checkSalary:true},'JOB_ISEXPERIENCE':{required:true,checkExperience:true},'job_title':{required:true,checkJobTitle:true,maxlength:150,checkPhoneEmailUrlInput:true},'job_code':{checkSpecialCharPostJob:true},'job_desc':{checkMinimumInputDesEditor:true,checkMaxInputDesEditor:true},'INDUSTRY_ID[]':{check_industry_select:true},'LOCATION_ID[]':{required:true},'job_req':{checkMinimumInputRegEditor:true,checkMaxInputRegEditor:true},'JOB_LASTDATE':{required:true},'LEVEL_ID':{required:true},'JOB_PROBATIONTIME':{checkCharacterSpec:true,maxlength:70,checkPhoneEmailUrlInput:true},'JOB_WORKTIME':{checkCharacterSpec:true,maxlength:70,checkPhoneEmailUrlInput:true},'JOB_TRAINOPPORTUNITY':{checkPhoneEmailUrlInput:true,maxlength:300},'JOB_COLLEAGUE':{checkPhoneEmailUrlInput:true,maxlength:300},'JOB_BENEFIT':{checkPhoneEmailUrlInput:true,maxlength:300},'JOB_ANNUALLEAVE':{checkPhoneEmailUrlInput:true,maxlength:300},'JOB_ADDSALARY':{checkPhoneEmailUrlInput:true,maxlength:300},'JOB_CONTACT_NAME':{required:true,maxlength:150,checkPhoneEmailUrlInput:true},'JOB_CONTACT_PHONE':{required:true},'JOB_CONTACT_COMPANY':{required:true,maxlength:450,checkPhoneEmailUrlInput:true},'JOB_CONTACT_ADDRESS':{required:true,checkPhoneEmailUrlInput:true,maxlength:600},'JOB_CONTACT_EMAIL':{required:true,multiemail:true},'JOB_CONTACT_EMAIL2':{multiemail:true},'reply_title':{required:true,maxlength:70},'reply_content':{required:true,minlength:30,maxlength:3000},'strVideo':{checkValidateYoutube:true,}},errorPlacement:function(error,element){if(element.attr("name")=="job_type1")
$("#last_jobtype").html(error.html());else if(element.attr("name")=="job_salaryunit")
$("#error_salary").html(error.html());else
element.closest('div').find('span.form-error').html(error.html());hide_loading_page();},success:function(element){element.closest('div').find('span.form-error').html('');hide_loading_page();},messages:{'job_title':{required:language.Emp_postjobs_job_title_invalid},'job_desc':{required:language.Emp_postjobs_Job_desciption_is_invalid,checkMinimumInputDesEditor:language.Emp_postjobs_Job_desciption_is_invalid,checkMaxInputDesEditor:language.Emp_postjobs_Job_desciption_more_character},'job_req':{required:language.Emp_postjobs_skill_requirement_is_invalid,checkMinimumInputRegEditor:language.Emp_postjobs_skill_requirement_is_invalid,checkMaxInputRegEditor:language.Emp_postjobs_skill_requirement_more_character},'JOB_ISEXPERIENCE':{required:language.Emp_postjobs_Please_choose_experience},'LEVEL_ID':{required:language.Emp_postjobs_Please_choose_career_level},'select_location_db':{required:language.Emp_postjobs_please_select_location},'JOB_LASTDATE':{required:language.Emp_postjobs_Pleate_enter_expiring_date},'JOB_CONTACT_COMPANY':{required:language.Emp_postjobs_Please_enter_company,maxlength:language.Emp_postjobs_Please_enter_company_maxlength,},'JOB_CONTACT_ADDRESS':{required:language.Emp_postjobs_Please_enter_address,},'JOB_CONTACT_NAME':{required:language.Emp_postjobs_Please_enter_contact_name,maxlength:language.Emp_postjobs_Please_enter_contact_name_maxlength,},'JOB_CONTACT_EMAIL':{required:language.Emp_postjobs_Please_enter_Email1,multiemail:language.Emp_postjobs_Please_enter_Email1_valid,},'JOB_CONTACT_EMAIL2':{multiemail:language.Emp_postjobs_Please_enter_Email1_valid,},'JOB_PROBATIONTIME':{checkPhoneEmailUrlInput:language.Emp_postjobs_not_phone_email_url},"LOCATION_ID[]":{required:language.Emp_postjobs_select_location}},invalidHandler:function(form,validator){var errors=validator.numberOfInvalids();if(errors){if($(validator.errorList[0].element).is(":visible")){validator.errorList[0].element.focus();}else{$('html,body').animate({scrollTop:$("#div_jobdesc").offset().top},'slow');}}}});$("#frmEditJob").submit(function(){$('#job_title').val($.trim($('#job_title').val()));$('#job_code').val($.trim($('#job_code').val()));$('#salary_from').val($('#salary_from').val().replace(/[^0-9\s]/gi,''));if($('#salary_from').val()==0)$('#salary_from').val('');$('#salary_to').val($('#salary_to').val().replace(/[^0-9\s]/gi,''));if($('#salary_to').val()==0)$('#salary_to').val('');if($("#frmEditJob").valid()){var sel_work_location=$('select[name="work_location[]"]');sel_work_location.each(function(index,obj){var arr_workloc=[];$(this).children('option').each(function(){if($(this).is(':selected')&&$(this).val()!=''){arr_workloc.push($(this).val());}});var str_workloc=arr_workloc.join(",");$("#work_location_"+index).val(str_workloc);str_workloc="";});return true;}
return false;});if($(".keyword").length>0){var link_ajax=PATH_KIEMVIEC+'jobseekers/index/getlistkeyword?typedata=json';$('.keyword').autoComplete({minChars:3,source:function(term,response){term=term.toLowerCase();$.getJSON(link_ajax,{q:term,limit:10},function(data){response(data);});}});}});function change_security(t){if($(t).is(":checked"))
$('#security_client').show();else
$('#security_client').hide();}
function chooseFromListJob(user_id){$.fancybox.open({'src':domain+'employers/postjobs/chooselistjob?newLayout=1&user_id='+user_id,'type':'ajax'});}
function popupProfileAjax(){$.fancybox.open({'src':domain+'employers/popup/profile?newLayout=1&emp_id='+$('#company_profile').val(),'type':'ajax'});}
function loadPagingAjax(user_id,page){$.ajax({type:"POST",url:domain+'employers/postjobs/chooselistjob?newLayout=1',data:{'user_id':user_id,'page':page},success:function(rs){$('#ListJob').html(rs);}})}
function loadJobTemplate(job_id){$.ajax({type:"POST",url:domain+'employers/postjobs/loadjobtemplate',dataType:'JSON',data:{'job_id':job_id},success:function(rs){$.each(rs,function(key,val){$('#job_title').val(val.JOB_TITLE);$('#job_code').val(val.JOB_CODE);$('#job_desc').val(val.JOB_CONTENT);$('#cke_job_desc').val(val.JOB_CONTENT);$('#job_req').val(val.JOB_REQUIRESKILL);$('#cke_job_req').val(val.JOB_REQUIRESKILL);if(val.intType1==1)
$('#job_type1').attr('checked',true);if(val.intType2==1)
$('#job_type2').attr('checked',true);if(val.intType3==1)
$('#job_type3').attr('checked',true);if(val.intType4==1)
$('#job_type4').attr('checked',true);if(val.intWorkType1==1)
$('#work_type1').attr('checked',true);if(val.intWorkType2==1)
$('#work_type2').attr('checked',true);if(val.intWorkType3==1)
$('#work_type3').attr('checked',true);if(val.intWorkType4==1)
$('#work_type4').attr('checked',true);$("#job_salaryunit option[value='"+val.JOB_SALARYUNIT+"']").prop('selected','selected');if($('#job_salaryunit option:selected').val()=='usd'){$("#salary_from").val(val.JOB_FROMSALARY).formatCurrency({digitGroupSymbol:'.'}).attr('disabled',false);$("#salary_to").val(val.JOB_TOSALARY).formatCurrency({digitGroupSymbol:'.'}).attr('disabled',false);}else if($('#job_salaryunit option:selected').val()=='vnd'){$("#salary_from").val(val.JOB_FROMSALARY).formatCurrency().attr('disabled',false);$("#salary_to").val(val.JOB_TOSALARY).formatCurrency().attr('disabled',false);}
$('#JOB_ADDSALARY').val(val.JOB_ADDSALARY);$('#JOB_LOCATESTATE').val(val.JOB_LOCATESTATE);$('#JOB_LASTDATE').val(val.JOB_LASTDATE);if(val.JOB_GENDER==0)
$('#rnamnu').attr('checked',true);else if(val.JOB_GENDER==1)
$('#rnam').attr('checked',true);else
$('#rnu').attr('checked',true);$('#JOB_FROMAGE').val(val.JOB_FROMAGE);$('#JOB_TOAGE').val(val.JOB_TOAGE);$("#JOB_ISEXPERIENCE option[value='"+val.JOB_ISEXPERIENCE+"']").prop('selected','selected');if(val.JOB_ISEXPERIENCE==1){$('#JOB_FROMEXPERIENCE').val(val.JOB_EXPERIENCE);$('#JOB_TOEXPERIENCE').val(val.JOB_TOEXPERIENCE);$('#JOB_EXPERIENCE').show();}else{$('#JOB_FROMEXPERIENCE').val('');$('#JOB_TOEXPERIENCE').val('');$('#JOB_EXPERIENCE').hide();}
$("#LEVEL_ID option[value='"+val.LEVEL_ID+"']").prop('selected','selected');$("#DEGREE_ID option[value='"+val.DEGREE_ID+"']").prop('selected','selected');$('#JOB_INDUSTRY_NOTE').val(val.JOB_INDUSTRY_NOTE);$('#JOB_PROBATIONTIME').val(val.JOB_PROBATIONTIME);$('#JOB_WORKTIME').val(val.JOB_WORKTIME);$('#JOB_TRAINOPPORTUNITY').val(val.JOB_TRAINOPPORTUNITY);$('#JOB_COLLEAGUE').val(val.JOB_COLLEAGUE);$('#JOB_BENEFIT').val(val.JOB_BENEFIT);$('#JOB_ANNUALLEAVE').val(val.JOB_ANNUALLEAVE);$('#JOB_CONTACT_NAME').val(val.JOB_CONTACT_NAME);$('#JOB_CONTACT_COMPANY').val(val.JOB_CONTACT_COMPANY);$('#JOB_CONTACT_ADDRESS').val(val.JOB_CONTACT_ADDRESS);$('#JOB_CONTACT_PHONE').val(val.JOB_CONTACT_PHONE);$('#JOB_CONTACT_FAX').val(val.JOB_CONTACT_FAX);$('#JOB_CONTACT_EMAIL').val(val.JOB_CONTACT_EMAIL);$('#JOB_CONTACT_EMAIL2').val(val.JOB_CONTACT_EMAIL2);if(val.Hide_Name==1){$('.Hide_Name').attr('checked',true);$('#security_client').show();if(val.Hide_Job==0)
$('#JOB_CONTACT_SECRECY').attr('checked',true);else
$('#JOB_CONTACT_CLIENT').attr('checked',true);}else{$('.Hide_Name').attr('checked',false);$('#security_client').hide();}
var strIndustry=val.JOB_INDUSTRY;var arr_industry=strIndustry.split(',');$("#select_industry_db option[value="+$.trim(arr_industry[0])+"]").prop('selected',true);if(typeof(arr_industry[1])!='undefined')
$("#select_industry_db option[value="+$.trim(arr_industry[1])+"]").prop('selected',true);if(typeof(arr_industry[2])!='undefined')
$("#select_industry_db option[value="+$.trim(arr_industry[2])+"]").prop('selected',true);$('#select_industry_db ').trigger('chosen:updated');if(val.Hide_Address==1)
$('.Hide_Address').attr('checked',true);else
$('.Hide_Address').attr('checked',false);if(val.Hide_FullName==1)
$('.Hide_FullName').attr('checked',true);else
$('.Hide_FullName').attr('checked',false);if(val.JOB_LANGUAGE_EMAIL==1)
$('#JOB_LANGUAGE_EMAIL2').attr('checked',true);else
$('#JOB_LANGUAGE_EMAIL1').attr('checked',true);if(val.JOB_RECEIVEMAIL==1)
$('#JOB_RECEIVEMAIL').attr('checked',true);if(val.JOB_APPLYONLINE==1){$('#JOB_APPLYONLINE').attr('checked',true);$('#reply_title').attr('disabled',false);$('#reply_content').attr('disabled',false);$('#MailReply').css('display','block');}});$.fancybox.close();$(".form-error").html('');$("input").removeClass('error');}})}
function saveOrder(user_id){closeAllmodal();$('#btnSave').attr('disabled','disabled');$('#btnCancel').attr('disabled','disabled');$.ajax({cache:false,type:"POST",url:domain+'employers/hrcentral/saveorder',data:$('#frmOrder').serialize(),dataType:'json',async:false,success:function(rs){if(rs==2){show_noti(2,language.Emp_hrcentral_not_exist_job,language.message_common);}else if(rs==3){show_noti(2,language.Emp_hrcentral_not_exist_job,language.message_common);}else if(rs==4){$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.emp_hrcentral_postjob_successfull+'</div>',theme:'bootstrap',animation:'scale',type:'green',buttons:{confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){window.location=domain+'employers/hrcentral/posting/user_id/'+user_id;}}}});}else if(rs==5){$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.Emp_hrcentral_save_order_unsuccessfull+'</div>',theme:'bootstrap',animation:'scale',type:'green',buttons:{confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){window.location=domain+'employers/hrcentral/waitposting/user_id/'+user_id;}}}});}else if(rs==6){show_noti(2,language.Emp_hrcentral_save_order_unsuccessfull,language.message_common);}else if(rs==7){$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.save_order_successfull_but_job_refesh_unsuccessfull+'</div>',theme:'bootstrap',animation:'scale',type:'green',buttons:{confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){window.location=domain+'employers/hrcentral/posting/user_id/'+user_id;}}}});}else{$.confirm({title:language.message_common,titleClass:'text-center',content:'<div class="text-center">'+language.emp_hrcentral_addservice_successfull+'</div>',theme:'bootstrap',animation:'scale',type:'green',buttons:{confirm:{text:language.employers_confirm_btn_agree,btnClass:'btn-blue',action:function(){window.location=domain+'employers/hrcentral/posting/user_id/'+user_id;}}}});}}});}
function daterangepicker_all(){moment.locale(CURRENT_LANGUAGE);if($('.dates_sub').length){$('.dates_sub').daterangepicker({"singleDatePicker":true,"autoApply":true,"autoUpdateInput":false,"locale":{"format":"DD/MM/YYYY",},"minDate":moment().add(0,'days'),"maxDate":moment().add(24,'days'),"opens":"center"});$('.dates_sub').on('apply.daterangepicker',function(ev,picker){$(this).val(picker.startDate.format('DD/MM/YYYY'));});}
if($('.sub_date_month_renewjob').length){$('.sub_date_month_renewjob').daterangepicker({"singleDatePicker":true,"autoApply":true,"timePicker":true,"timePicker24Hour":true,"timePickerIncrement":60,"autoUpdateInput":false,"locale":{"format":"DD/MM/YYYY","applyLabel":language.btn_apply,"cancelLabel":language.btn_cancel},"opens":"center","minDate":moment().add(1,'hours'),"maxDate":moment().add(30,'days'),"minHour":6});$('.sub_date_month_renewjob').on('showCalendar.daterangepicker',function(ev,picker){for(i=0;i<6;i++){$(".hourselect option[value="+i+"]").remove();}
for(i=22;i<24;i++){$(".hourselect option[value="+i+"]").remove();}
var nowDate=moment();var selectedDate=moment(picker.startDate);var objTimeSelect=$(this).closest('div.right').find('select.sub_slc_timer');objTimeSelect.children('option').prop('disabled',false);if(nowDate.format('DD/MM/YYYY')==selectedDate.format('DD/MM/YYYY')){objTimeSelect.children('option').each(function(){var $this=$(this);if($this.data('value')<parseInt(nowDate.format('HH'))+1)
$this.prop('disabled',true);});}
$(this).val(picker.startDate.format('DD/MM/YYYY'));$(this).closest('div.right').find('input.sub_slc_timer').val(picker.startDate.format('HH')+':00');});$('.sub_date_month_renewjob').on('apply.daterangepicker, hide.daterangepicker',function(ev,picker){$("#date_month_renewjob").val(picker.startDate.format('DD/MM/YYYY'));$("#time_renewjob").val(picker.startDate.format('HH:mm'));});}
if($('.dates').length){$('.dates').daterangepicker({"singleDatePicker":true,"autoApply":true,"autoUpdateInput":false,"timePicker24Hour":true,"locale":{"format":"DD/MM/YYYY",},"minDate":moment().add(0,'days'),"maxDate":moment().add(24,'days'),"opens":"center"});$('.dates').on('apply.daterangepicker',function(ev,picker){$(this).val(picker.startDate.format('DD/MM/YYYY'));});}
if($('.date_month_renewjob').length){$('.date_month_renewjob').daterangepicker({"singleDatePicker":true,"autoApply":true,"timePicker":true,"timePicker24Hour":true,"timePickerIncrement":60,"autoUpdateInput":false,"locale":{"format":"DD/MM/YYYY","applyLabel":language.btn_apply,"cancelLabel":language.btn_cancel,},"opens":"center","minDate":moment().add(1,'hours'),"maxDate":expirateDate,"minHour":6});$('.date_month_renewjob').on('showCalendar.daterangepicker',function(ev,picker){for(i=0;i<6;i++){$(".hourselect option[value="+i+"]").remove();}
for(i=22;i<24;i++){$(".hourselect option[value="+i+"]").remove();}
var nowDate=moment();var selectedDate=moment(picker.startDate);var objTimeSelect=$(this).closest('div.form-wrap').find('select.slc_timer');objTimeSelect.children('option').prop('disabled',false);if(nowDate.format('DD/MM/YYYY')==selectedDate.format('DD/MM/YYYY')){objTimeSelect.children('option').each(function(){var $this=$(this);if($this.data('value')<parseInt(nowDate.format('HH'))+1)
$this.prop('disabled',true);});}
$(this).val(picker.startDate.format('DD/MM/YYYY'));$(this).closest('div.form-wrap').find('select.slc_timer').val(picker.startDate.format('HH')+':00').prop('disabled',false);});$('.date_month_renewjob').on('apply.daterangepicker, hide.daterangepicker',function(ev,picker){var date=picker.startDate.format('DD/MM/YYYY')
var chk_id=$('input:radio[name=c_pack]:checked').val();var slc_date_id=$(this).attr('id');if(slc_date_id=='date_month_renewjob1_'+chk_id){$('#date_month_renewjob1_'+chk_id).val("");date1=date;date2=$("#date_month_renewjob2_"+chk_id).val();}else{$('#date_month_renewjob2_'+chk_id).val("");date1=$("#date_month_renewjob1_"+chk_id).val();date2=date;}
aday1=date1.split('/');aday2=date2.split('/');aDate1=new Date(aday1[2],aday1[1],aday1[0]);aDate2=new Date(aday2[2],aday2[1],aday2[0]);if(aDate1>aDate2){show_noti(2,language.date1_elder_date2,language.message_common);return true;}
if(slc_date_id=='date_month_renewjob1_'+chk_id){$("#date_month_renewjob1_"+chk_id).val(picker.startDate.format('DD/MM/YYYY'));$("#time_renewjob1_"+chk_id).val(picker.startDate.format('HH:mm'));}else{$("#date_month_renewjob2_"+chk_id).val(picker.startDate.format('DD/MM/YYYY'));$("#time_renewjob2_"+chk_id).val(picker.startDate.format('HH:mm'));}});}}
function validatefrmloginheader(){if($("#frm_login_header").length){$("#frm_login_header").validate({rules:{username:{required:true},password:{required:true}},errorPlacement:function(error,element){element.attr('placeholder',error.html());},messages:{username:{required:language.validate_required},password:{required:language.validate_required}},});}}
function validataSearch(lang){var experience=$('#experience').val();if(experience==1){var experience_from=$('#experience_from').val();var experience_to=$('#experience_to').val();experience_from=Number(experience_from,10);experience_to=Number(experience_to,10);if(experience_from==0&&experience_to==0){alert(language.emp_exp_empty);return false;}else if(experience_from>experience_to&&experience_to>0||experience_from<0||experience_to>=100){alert(language.emp_exp_fail);return false;}}
var salary=$('#salary').val();if(salary=='vnd'||salary=='usd'){var salary_from=$('#salary_from').val();salary_from=salary_from.replace(/[\,\.]/g,"");var salary_to=$('#salary_to').val();salary_to=salary_to.replace(/[\,\.]/g,"");salary_from=parseInt(salary_from);salary_to=parseInt(salary_to);if(salary_from==0||salary_to==0||isNaN(salary_from)||isNaN(salary_to)){alert(language.emp_salary_empty);return false}else if(salary_from>salary_to||salary_from<=0||salary_to>1000000000){alert(language.emp_salary_fail);return false}}
var to_age=$('#to_age').val();var from_age=$('#from_age').val();if(to_age!=""||from_age!=""){if((from_age<16||from_age>60)&&from_age!=""){alert(language.emp_age_fail1);return false;}else if(to_age<from_age&&to_age>0){alert(language.emp_age_fail);return false;}else if((to_age<16||to_age>60)&&to_age!=""){alert(language.emp_age_fail1);return false;}else if(!validateNumber(to_age)&&!validateNumber(from_age)){alert(language.emp_age_fail);return false;}}
var languages=$("#language").val();var languagelevel=$("#languagelevel").val();if(languages!=0&&languagelevel==0){alert(language.emp_language_level);return false;}else if(languages==0&&languagelevel!=0){alert(language.emp_search_resume_language);return false;}
if($('#keyword').val()==language.emp_search_Keywords){$('#keyword').val('');}
var keyword=$('#keyword').val().replace(/\//g,"&frasl;");if(keyword!=''){var p_mail="@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}";var m_mail=keyword.match(p_mail);var pattern_e=/gmail|gmail.com|yahoo|yahoo.com|yahoo.com.vn|mail.com/g;var matches_e=keyword.match(pattern_e);if(isValidEmail(keyword)||checkInputNormalText(keyword)==false||m_mail!=null||matches_e!=null){show_noti(2,language.emp_common_validate_keyword);return false;}
var pattern=/[0-9]+/g;var matches=keyword.match(pattern);if(matches!=null){matches=matches.toString();var arrMatches=matches.split(",");var i=0;$.each(arrMatches,function(key,val){if(val.length>5){i++;}});if(i>0){show_noti(2,language.emp_common_validate_keyword);return false;}}
var str_err=parse_boolean_string(keyword);if(str_err){show_noti(2,str_err);return false;}
var char_open=keyword.match(/\(/g);if(char_open==null)
char_open=0;else
char_open=char_open.length;var char_close=keyword.match(/\)/g);if(char_close==null)
char_close=0;else
char_close=char_close.length;if(parseInt(char_open)-parseInt(char_close)!=0){show_noti(2,language.emp_common_error_keyword_parenthesis);return false;}
if(parseInt(char_open)>2&&parseInt(char_close)>2){show_noti(2,language.emp_common_error_keyword_max_condition);return false;}
var char_n=keyword.match(/\"/g);if(char_n==null)
char_n=0;else
char_n=char_n.length;if(parseInt(char_n)%2!=0){show_noti(2,language.emp_common_error_keyword_parenthesis);return false;}
var pattern_c=/AND|OR/g;var matches=keyword.match(pattern_c);if(matches!=null){matches=matches.toString();var arrMatches=matches.split(",");if(arrMatches.length>3){show_noti(2,language.emp_common_error_keyword_boolean);return false;}}
var pattern_d=/"(.*?)"/g;var matches=keyword.match(pattern_d);if(matches!=null){matches=matches.toString();var arrMatches=matches.split(",");var err='';$.each(arrMatches,function(key,val){var res=val.replace("AND","and");res=res.replace("OR","or");keyword=keyword.replace(val,res);if($.trim(res.replace(/[\"]/g,""))==''){err=language.emp_common_error_keyword_boolean;}else if(res.indexOf('(')>=0||res.indexOf(')')>=0){err=language.emp_common_error_keyword_boolean;}});if(err){show_noti(2,err);return false;}}
var pattern_e=/\(.*?\)/g;var matches=keyword.match(pattern_e);if(matches!=null){matches=matches.toString();if(matches.indexOf('AND')==-1&&matches.indexOf('OR')==-1){show_noti(2,language.emp_common_error_keyword_boolean);return false;}else{var arrMatch=matches.split(",");var err='';$.each(arrMatch,function(key,val){var tmp=val;tmp=tmp.replace('(','');tmp=tmp.replace(')','');var arrMatches=tmp.split(/(AND|OR)/);var tt=0;var ss=0;if(arrMatches.length>1){$.each(arrMatches,function(key,val1){if($.trim(val1)=='AND'||$.trim(val1)=='OR')
tt++;if($.trim(val1)!=''&&$.trim(val1)!='AND'&&$.trim(val1)!='OR')
ss++;});if(ss-tt!=1){err=language.emp_common_error_keyword_boolean;}}else{err=language.emp_common_error_keyword_boolean;}});if(err){show_noti(2,err);return false;}}}}
var industry=getMutiCheckSelect("industry");var location=getMutiCheckSelect("location");var level=$("#level").val();var resume_date=$("#resume_date").val();var degree_id_from=$("#degree_id_from").val();var degree_id_to=$("#degree_id_to").val();var degree_id_to=$("#degree_id_to").val();var job_type=$("#job_type").val();;var gender=$("#gender").val();var time_kind=$('#frm_search input[name="resume_time_kind"]:checked').val();var keyword_match="";keyword_match=$('#frm_search input[name="keyword_match"]:checked').val();var urgentjob=$("#urgentjob").val();setCookie("detail_employer",0);var checkalert=0;if(lang=='en'){var ulr="resume-search";if(industry!=""){checkalert=1;ulr+="/category/"+industry;}
if(location!=""){checkalert=1;ulr+="/location/"+location;}
if(keyword!=""){checkalert=1;ulr+="/keyword/"+keyword;setCookie("detail_employer",1);}
if(level!=0){checkalert=1;ulr+="/level/"+level;}
if(resume_date>0&&resume_date<3650)
ulr+="/resume_date/"+resume_date;if(degree_id_from==0||degree_id_from==6){checkalert=1;ulr+="/degree_from/"+arrDegree[degree_id_from]['key'];}else if(degree_id_from>0&&degree_id_from<6){checkalert=1;ulr+="/degree_from/"+arrDegree[degree_id_from]['key']+"/degree_to/"+arrDegree[degree_id_to]['key'];}
if(experience>=1){checkalert=1;ulr+="/experience/"+experience;if(experience==1)
ulr+="/experience_from/"+experience_from+"/experience_to/"+experience_to;}
if(languages!=0){checkalert=1;ulr+="/language/"+languages+"/language_level/"+languagelevel;}
if(job_type!="0"){checkalert=1;ulr+="/job_type/"+job_type;}
if(salary!="all"){checkalert=1;ulr+="/salary/"+salary;if(salary=='vnd'||salary=='usd')
ulr+="/salary_from/"+salary_from+"/salary_to/"+salary_to;}
if(to_age!=""||from_age!=""){checkalert=1;ulr+="/from_age/"+from_age+"/to_age/"+to_age;}
if(gender>0){checkalert=1;ulr+="/gender/"+gender;}
if(urgentjob>0){checkalert=1;ulr+="/urgentjob/"+urgentjob;}}else if(lang='vi'){var ulr="tim-ung-vien";if(industry!=""){checkalert=1;ulr+="/nganh-nghe/"+industry;}
if(location!=""){checkalert=1;ulr+="/noi-lam-viec/"+location;}
if(keyword!=""){checkalert=1;ulr+="/tu-khoa/"+keyword;setCookie("detail_employer",1);}
if(level!=0){checkalert=1;ulr+="/cap-bac/"+level;}
if(resume_date>0&&resume_date<3650)
ulr+="/ngay-cap-nhat/"+resume_date;if(degree_id_from==0||degree_id_from==6){checkalert=1;ulr+="/bang-cap-tu/"+arrDegree[degree_id_from]['key'];}else if(degree_id_from>0&&degree_id_from<6){checkalert=1;ulr+="/bang-cap-tu/"+arrDegree[degree_id_from]['key']+"/bang-cap-den/"+arrDegree[degree_id_to]['key'];}
if(experience>=1){checkalert=1;ulr+="/kinh-nghiem/"+experience;if(experience==1)
ulr+="/kinh-nghiem-tu/"+experience_from+"/kinh-nghiem-den/"+experience_to;}
if(languages!=0){checkalert=1;ulr+="/ngoai-ngu/"+languages+"/trinh-do/"+languagelevel;}
if(job_type!="0"){checkalert=1;ulr+="/hinh-thuc/"+job_type;}
if(salary!="all"){checkalert=1;ulr+="/luong/"+salary;if(salary=='vnd'||salary=='usd')
ulr+="/luong-tu/"+salary_from+"/luong-den/"+salary_to;}
if(to_age!=""||from_age!=""){checkalert=1;ulr+="/tu-tuoi/"+from_age+"/den-tuoi/"+to_age;}
if(gender>0){checkalert=1;ulr+="/gioi-tinh/"+gender;}
if(urgentjob>0){checkalert=1;ulr+="/loai-ung-vien/"+urgentjob;}}
if(time_kind=="last_modify")
ulr+="/time_kind/"+time_kind;if(keyword_match=="title")
ulr+="/keyword_match/title";ulr+="?search=find";if(checkalert==0){show_noti(2,language.emp_search_resume_validate);return false;}
ulr=ulr.replace("++","%2B%2B");ulr=ulr.replace("#","%23");window.location=domain+ulr;return false;}
function getMutiCheckSelect(id){var str="";$("#"+id+" option:selected").each(function(){str+=$(this).val()+",";});return str.substr(0,str.length-1);}
function getCookie(Name){var re=new RegExp(Name+"=[^;]+","i");if(document.cookie.match(re))
return document.cookie.match(re)[0].split("=")[1]
return""}
function setCookie(name,value){document.cookie=name+"="+value+";path=/"}
function setCookieDays(name,value,expiredays){var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);var c_value=value+((expiredays==null)?"":"; expires="+exdate.toUTCString());document.cookie=name+"="+c_value+";path=/";}
function parse_boolean_string(boolean_string){boolean_string=boolean_string.replace(/[\r\n\t]/g,"");boolean_string=$.trim(boolean_string);var pattern=/(AND|OR|\(|\))/;var tokens=new Array();tokens=boolean_string.split(pattern);var i=0;$.each(tokens,function(key,val){tokens[key]=$.trim(val);if($.trim(val)==""){tokens.splice(key,1);}
if(val==undefined){tokens.splice(key,1);}});var err='';var total_w=tokens.length;if(tokens[i]==undefined)
tokens.shift();total_w=tokens.length;if(tokens[total_w-1]==undefined)
tokens.pop();total_w=tokens.length;$.each(tokens,function(key,val){i++;if(i==1&&parseInt($.inArray(val,['AND','OR']))>=0){err=language.emp_common_error_keyword_boolean;}
if(i==total_w&&parseInt($.inArray(val,['AND','OR']))>=0){err=language.emp_common_error_keyword_boolean;}
if(parseInt($.inArray(val,['(',')']))>=0&&err==''){err=nCheck(val,tokens,key);}});return err;}
function nCheck(val,tokens,key)
{var err='';if(val=='('&&key>0){var t_tmp=--key;if(tokens[t_tmp]==''||$.inArray(tokens[t_tmp],['AND','OR'])>=0||tokens[t_tmp]==undefined){}else{err=language.emp_common_error_keyword_boolean;}}else if(val==')'){var p_tmp=++key;if(tokens[p_tmp]==''||$.inArray(tokens[p_tmp],['AND','OR'])>=0||tokens[p_tmp]==undefined){}else{err=language.emp_common_error_keyword_boolean;}}
return err;}
$("#degree_id_from").change(function(){id=$(this).val();var htmlDegree="";if(id>0&&id!=6){for(var key in arrDegree){if(key>=1000)continue;if(key>=id)
htmlDegree+="<option value=\""+key+"\">"+arrDegree[key]['name']+"</option>";$("#degree_id_to").removeAttr("disabled");}}else{$("#degree_id_to").attr("disabled","disabled");}
$("#degree_id_to").html(htmlDegree);});$("#salary").change(function(){var id=$(this).val();$("#salary_from").val("");$("#salary_to").val("");if(id=="all"||id=="ltt"){$("#salary_from").attr("disabled","disabled");$("#salary_to").attr("disabled","disabled");}else{$("#salary_from").removeAttr("disabled");$("#salary_to").removeAttr("disabled");}});var page_load=0;$('#filter_viewed, #filter_saved, #filter_coworker').click(function(event){if($('#filter_viewed').is(':checked')||$('#filter_saved').is(':checked')||$('#filter_coworker').is(':checked')){page_load=0;}});$('#flip_next').click(function(){if(!$('#filter_viewed').is(':checked'))
page_load+=1;});$('#flip_prev').click(function(){if(page_load>0)
page_load-=1;});function windowFlipView(param_cond,page,view){$.fancybox.close('all');var filter_viewed=0;if($('#filter_viewed').attr("checked"))
filter_viewed=1;var filter_saved=0;if($('#filter_saved').attr("checked"))
filter_saved=1;var filter_coworker=0;if($('#filter_coworker').attr("checked"))
filter_coworker=1;if(!$('#filter_viewed').is(':checked')&&!$('#filter_saved').is(':checked')&&!$('#filter_coworker').is(':checked')&&page>0){$('#filter_viewed, #filter_saved, #filter_coworker').click(function(event){$('#page_return').val(page);});}
var page_return=$('#page_return').val();$.ajax({type:"POST",url:domain+'employers/popup/showflipview',data:{'param_cond':param_cond,'page':page,'view':view,'page_return':page_return,'filter_viewed':filter_viewed,'filter_saved':filter_saved,'filter_coworker':filter_coworker,'newLayout':1},dataType:'JSON',beforeSend:function(){show_loading_page();},complete:function(){hide_loading_page();},success:function(obj){if(obj.msg_error==''){$('#contentResumeFlip').html(obj.content);$('#actionPanel').html(obj.actionBar);$('#titleBar').html(obj.titleBar);$('#myTag').html(obj.myTag);$('#resume_title').html(obj.arrResume['RESUME_HEADLINE_VN']);$.fancybox.open({'src':'#flip-view-modal'});if(obj.offset==0||(page_load==0&&($('#filter_viewed').is(':checked')||$('#filter_saved').is(':checked')||$('#filter_coworker').is(':checked')))){$('#flip_prev').attr('onclick','javascript:void(0);');$('#flip_prev').css('display','none');}else{$('#flip_prev').attr('onclick','windowFlipView("'+obj.param_cond+'",'+(parseInt(obj.offset)-1)+', 1)');$('#flip_prev').css('display','block');}
if((parseInt(obj.offset)+1)<obj.countResumes){$('#flip_next').attr('onclick','windowFlipView("'+obj.param_cond+'",'+(parseInt(obj.offset)+1)+', 2)');$('#flip_next').css('display','block');}else{$('#flip_next').attr('onclick','javascript:void(0);');$('#flip_next').css('display','none');}
$('#filter_viewed').attr('onclick','windowFlipView("'+obj.param_cond+'", 0, 2)');$('#filter_saved').attr('onclick','windowFlipView("'+obj.param_cond+'", 0, 2)');$('#filter_coworker').attr('onclick','windowFlipView("'+obj.param_cond+'", 0, 2)');if(!$('#filter_viewed').is(':checked')&&!$('#filter_saved').is(':checked')&&!$('#filter_coworker').is(':checked')){$('#page_return').val(-1);}}else{if(obj.code==3){alert(obj.msg_error);$('#filter_viewed').attr('checked',false);$('#filter_saved').attr('checked',false);$('#filter_coworker').attr('checked',false);$('#page_return').val(-1);$('#ResumeFlip').css('display','none');}else if(obj.code==2){window.location.href=obj.msg_error;}}}})}
function windowFlipViewHR(param_cond,page,type){$.fancybox.close('all');$.ajax({type:"POST",url:domain+'employers/popup/showflipviewhr',data:{'param_cond':param_cond,'page':page,'type':type,'newLayout':1},dataType:'JSON',beforeSend:function(){show_loading_page();},complete:function(){hide_loading_page();},success:function(obj){if(obj.msg_error==''){$('#contentResumeFlip').html(obj.content);$('#actionPanel').html(obj.actionBar);$('#titleBar').html(obj.titleBar);$('#myTag').html(obj.myTag);$('#folder_title').html(obj.folderName);if(obj.boxStatus){$('#contentResume').removeClass('ListResumeFlip');$('#boxStatus').html(obj.boxStatus);}else{$('#boxStatus').html("");$('#contentResume').addClass('ListResumeFlip');}
if(obj.CurPage==1){$('#flip_prev').attr('onclick','javascript:void(0);');$('#flip_prev').css('display','none');}else{$('#flip_prev').attr('onclick','windowFlipViewHR("'+obj.param_cond+'",'+(parseInt(obj.CurPage)-1)+', '+(parseInt(obj.type))+')');$('#flip_prev').css('display','block');}
if(parseInt(obj.CurPage)<parseInt(obj.TotalPage)){$('#flip_next').attr('onclick','windowFlipViewHR("'+obj.param_cond+'",'+(parseInt(obj.CurPage)+1)+', '+(parseInt(obj.type))+')');$('#flip_next').css('display','block');}else{$('#flip_next').attr('onclick','javascript:void(0);');$('#flip_next').css('display','none');}
$.fancybox.open({'src':'#flip-view-hr'});}else{if(obj.code==3){alert(obj.msg_error);$('#ResumeFlip').css('display','none');}else if(obj.code==2){window.location.href=obj.msg_error;}}}})}
function addResumeTag(resume_id){$.fancybox.open({'src':domain+'employers/hrcentral/addtag','type':"ajax",'ajax':{'settings':{'data':{'resume_id':resume_id,'newlayout':1},'method':'POST'}},'beforeClose':function(){$('#resume_tag_input').autoComplete('destroy');},'touch':false,});return false;}
function delResumeTag(resume_id,tag){$.ajax({type:'POST',url:domain+'employers/hrcentral/addtag',data:{'resume_id':resume_id,'tag':tag,'status':'-1'}}).done(function(){location.reload();});return false;}
function saveResumeTag(){show_loading_page();$.ajax({type:'POST',url:domain+'employers/hrcentral/addtag',data:$('#frmResumeTag').serialize()}).done(function(){hide_loading_page();$.fancybox.close();location.reload();});return false;}
function addResumeTagFlipView(resume_id,param_cond,page){$.fancybox.open({'src':domain+'employers/hrcentral/addtag','type':"ajax",'ajax':{'settings':{'data':{'resume_id':resume_id,'param_cond':param_cond,'page':page,'newlayout':1},'method':'POST'}},'beforeClose':function(){$('#resume_tag_input').autoComplete('destroy');}});return false;}
function delResumeTagFlipView(resume_id,tag,param_cond,page){$.ajax({type:'POST',url:domain+'employers/hrcentral/addtag',data:{'resume_id':resume_id,'tag':tag,'status':'-1'}}).done(function(){if(param_cond)
windowFlipView(param_cond,page,4);else
location.reload();});return false;}
function saveResumeTagFlipView(param_cond,page){$.ajax({type:'POST',url:domain+'employers/hrcentral/addtag',data:$('#frmResumeTag').serialize()}).done(function(){if(param_cond){windowFlipView(param_cond,page,4);}else{location.reload();}
$.fancybox.close();});return false;}
function showFoldersSelected(str_id,name){if(str_id==''){var checkchild=document.getElementsByTagName('input');var ids="";var from=document.editFrm1;for(var i=0;i<checkchild.length;i++){if(checkchild[i].type=="checkbox"&&checkchild[i].name==name){if(checkchild[i].checked){var resume_tmp=checkchild[i].value.split('_');ids=ids+resume_tmp[0]+',';}}}
if(ids==""){show_noti(2,language.emp_manager_pleasechoose_resume);return false;}}else{ids=str_id;}
$.fancybox.open({'src':domain+'employers/hrcentral/manageresume/showfolders','type':"ajax",'ajax':{'settings':{'data':{'str_id':ids,'newlayout':1},'method':'POST'}}});}
function saveResumeFolder(){$("#frmSaveResumeFolder").validate({rules:{folder_ids:{required:true},folder_name:{required:true}},errorPlacement:function(error,element){element.closest('div').find('span.error').html(error.html())},success:function(element){element.closest('div').find('span.error').html('');},highlight:function(element){$(element).parent().removeClass("error");},unhighlight:function(element){$(element).parent().removeClass("error");},submitHandler:function(){var objBtn=$('#frmSaveResumeFolder').find('button');objBtn.prop('disabled',true);$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/savelistresumeinfolder',dataType:'JSON',data:$('#frmSaveResumeFolder').serialize(),success:function(data){if(data.msg=='errexist'){objBtn.prop('disabled',false);show_noti(2,language.emp_manager_exist_folder_name);$('#folder_name').focus();}else if(data.msg=='successfull'){objBtn.prop('disabled',false);$.fancybox.close();show_noti(1,language.emp_message_save_folder_success);}else if(data.msg=='comfirm'){objBtn.prop('disabled',false);$.fancybox.open({'src':domain+'employers/hrcentral/manageresume/comfirmsaveresume','type':"ajax",'ajax':{'settings':{'data':{'str_resume_id':data.str_resume_id,'folder_id':data.folder_id,'newlayout':1,},'method':'POST'}}});}}});}});}
function addResumeHidden(type,rsid){$.ajax({type:"POST",url:domain+'employers/hrcentral/addhidden',data:{'type':type,'resume_id':rsid},dataType:"JSON",success:function(ret){location.reload();}});return true;}
function addResumeHiddenFlipView(type,rsid,param_cond,page){$.ajax({type:"POST",url:domain+'employers/hrcentral/addhidden',data:{'type':type,'resume_id':rsid},dataType:"JSON",success:function(ret){if(param_cond)
windowFlipView(param_cond,page,4);else
location.reload();}});return true;}
function saveSearchInfo(){var search_title=$.trim(document.getElementById('savesearch_title').value);var term;if(search_title==''||search_title.length>70){show_noti(2,language.emp_alert_emp_name);return false;}else{var data=$("#frmAdvanceSearch").serialize();$.ajax({url:domainroot+'/employers/saved-search-resume',type:'POST',dataType:'json',data:data,}).done(function(res){$("#savesearchresume_info").prop('disabled',true);if(res.status==1)
show_noti(1,res.msg);else
show_noti(2,res.msg);});return false;}}
function loadResumeNoted(start,res_id,fol_id){$.ajax({type:"POST",dataType:"json",url:domain+"employers/hrcentral/manage_resumes/resumes_detail/loadresumenoted/"+fol_id+"/"+res_id+"/"+start,success:function(data){$('#list_note_resume').html(data.SCRIPT);if(data.FOUND_ROWS>=20)
$('#NotesResume').hide();else
$('#NotesResume').show();}});}
function showClassifiedResume(str_res_id,string_f_id,param_cond_hr,page,type){$.fancybox.open({src:domain+'employers/hrcentral/manageresume/classifiedresume?newlayout=1',type:'ajax',ajax:{settings:{data:{'string_resume_id':str_res_id,'string_folder_id':string_f_id,'param_cond_hr':param_cond_hr,'page':page,'type':type},type:"POST"}}});}
function showResumeForInvite(folder_id,resume_id){$.fancybox.open({src:domain+'employers/hrcentral/manageresume/resumeinvite?newlayout=1',type:'ajax',ajax:{settings:{data:{'str_folder_id':folder_id,'str_resume_id':resume_id},type:"POST"}}});}
function resetInviteLetter(){$('#frmResumeForInvite').each(function(){this.reset();});$('#f_username').attr('disabled',false);$('#f_email').attr('disabled',true);}
function showNotifyMail(folder_id,resume_id){$.fancybox.close('all');var email=$('p#email_curent').text();$.fancybox.open({src:domain+'employers/hrcentral/manageresume/resumenotify?newlayout=1',type:'ajax',ajax:{settings:{data:{'str_folder_id':folder_id,'str_resume_id':resume_id,'email':email},type:"POST"}}});}
function loadEmployerLetters(user_id){$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/loadempletters',dataType:'JSON',data:'user_id='+user_id,success:function(rs){$('#letter_id option').remove();$('#letter_id').append('<option value="0">'+language.Emp_Choice+'</option>');$.each(rs,function(key,val){$('#letter_id').append('<option value="'+val.LETTER_ID+'">'+val.LETTER_TITLE+'</option>');});}});}
function loadLettersById(letter_id){$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/loadletterinfo',dataType:'JSON',data:'letter_id='+letter_id,success:function(rs){$.each(rs,function(key,val){if(key=='LETTER_TITLE')
$('#letter_title').val(val);else if(key=='LETTER_CONTENT')
$('#letter_content').val(val);});$('#update2my').removeAttr('disabled');}});}
function loadLettersById(letter_id){$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/loadletterinfo',dataType:'JSON',data:'letter_id='+letter_id,success:function(rs){$.each(rs,function(key,val){if(key=='LETTER_TITLE')
$('#letter_title').val(val);else if(key=='LETTER_CONTENT')
$('#letter_content').val(val);});$('#update2my').removeAttr('disabled');}});}
function downloadResume(resume_id,jobseeker_id){document.location=domain+'employers/popup/downloadresume?resume_id='+resume_id;}
function checkInviteOption(v){if(v==1){$('#f_username').attr('disabled',false);$('#f_email').attr('disabled',true);}else{$('#f_username').val(-1);$('#f_username').attr('disabled',true);$('#f_email').attr('disabled',false);}}
function resetInviteLetter(){$('#frmResumeForInvite').each(function(){this.reset();});$('#f_username').attr('disabled',false);$('#f_email').attr('disabled',true);}
function createNoteForResume(){if(($('#note_content').val().length<6)||($('#note_content').val().length>500)||($('#note_content').val()==language.emp_manager_write_note)){show_noti(2,language.emp_managerresume_Please_enter_content,language.message_common);$('#note_content').select();return false;}else{$("#btn-create-note-resume").prop('disabled',true);var data=new Object();data.hexFolderID=$('#hexFolderID').val();data.intResumeId=$('#intResumeId').val();data.note_content=$('#note_content').val();$('#note_content').val('');var dataString=JSON.stringify(data);$.ajax({type:"POST",url:domain+'employers/hrcentral/manage_resumes/resumes_detail/createnoteresume',data:'data='+dataString,success:function(data){switch(data){case'1':loadResumeNoted(0,$('#hexResumeID').val(),$('#hexFolderID').val());$("#btn-create-note-resume").prop('disabled',false);break;case'2':show_noti(2,language.Ban_khong_co_quyen_thao_tac,language.message_common);break;case'3':show_noti(2,language.emp_managerresume_add_note_failure,language.message_common);break;}}});}}
function deleteResumeNoted(intNote,currentPage){$.ajax({type:"POST",url:domain+"employers/hrcentral/manage_resumes/resumes_detail/deleteresumenote/"+$('#intResumeId').val()+"/"+intNote+"/"+currentPage,success:function(data){loadResumeNoted(data,$('#hexResumeID').val(),$('#hexFolderID').val());}});}
function viewInfoResume(emp_id,resume_id){var joborder_id=$('#joborder_id').val();var token_=$('#joborder_id').closest("div#resumeLock").find('#token_view_info_resume').val();$("#btnViewInfoResume").prop('disabled',true);$("#resumeLock").addClass('checking');if(typeof(joborder_id)=="undefined"){show_noti(2,language.emp_common_manageresume_no_order_search);$("#resumeLock").removeClass('checking');$("#btnViewInfoResume").prop('disabled',false);return false;}
$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/viewinforesume',data:'emp_id='+emp_id+'&resume_id='+resume_id+'&joborder_id='+joborder_id+'&csrf_token='+token_,success:function(rs){if(rs==-1){show_noti(2,language.emp_common_manageresume_no_order_search);setTimeout(function(){var url=location.href;window.location.href=url;},2000);}else if(rs==3){$.confirm({title:language.message_common,content:language.emp_common_manageresume_resume_credit_promotion,buttons:{confirm:{text:language.emp_common_manageresume_resume_btn_confirm,btnClass:'btn-blue',action:function(){var url=location.href;window.location.href=url;}}}});}else if(rs==-2){$.confirm({title:language.message_common,content:language.emp_common_manageresume_resume_csrf_token_fail,buttons:{confirm:{text:language.emp_common_manageresume_resume_btn_confirm,btnClass:'btn-blue',action:function(){var url=location.href;window.location.href=url;}}}});}else{var url=location.href;window.location.href=url;}}});}
function viewInfoResumeFlipView(emp_id,resume_id,param_cond,page){var joborder_id=$('#joborder_id').val();var token_=$('#joborder_id').closest("div#resumeLock").find('#token_view_info_resume').val();$("#btnViewInfoResume").prop('disabled',true);$("#resumeLock").addClass('checking');if(typeof(joborder_id)=="undefined"){show_noti(2,language.emp_common_manageresume_no_order_search);$("#btnViewInfoResume").prop('disabled',false);$("#resumeLock").removeClass('checking');return false;}
$.ajax({type:"POST",url:domain+'employers/hrcentral/manageresume/viewinforesume',data:'emp_id='+emp_id+'&resume_id='+resume_id+'&joborder_id='+joborder_id+'&csrf_token='+token_,success:function(rs){if(rs==-1){show_noti(2,language.emp_common_manageresume_no_order_search);$("#btnViewInfoResume").prop('disabled',false);$("#resumeLock").removeClass('checking');}else if(rs==3){$.confirm({title:language.message_common,content:language.emp_common_manageresume_resume_credit_promotion,buttons:{confirm:{text:language.emp_common_manageresume_resume_btn_confirm,btnClass:'btn-blue',action:function(){if(param_cond)
windowFlipView(param_cond,page,3);else
location.reload();}}}});}else{if(param_cond)
windowFlipView(param_cond,page,3);else
location.reload();}}});}
function viewInfoResumeFree(emp_id,resume_id,job_id){$.ajax({sync:true,type:"POST",url:domain+'employers/hrcentral/manageresume/viewinforesume',data:{'emp_id':emp_id,'resume_id':resume_id,'job_id':job_id},success:function(rs){str=document.location.href+"&t=1";document.location.href=str;}});}
function viewInfoResumeFreeFlipView(emp_id,resume_id,job_id,param_cond,page){var token_=$('#joborder_id').closest("div#resumeLock").find('#token_view_info_resume').val();$.ajax({sync:true,type:"POST",url:domain+'employers/hrcentral/manageresume/viewinforesume',data:{'emp_id':emp_id,'resume_id':resume_id,'job_id':job_id,'csrf_token':token_},success:function(rs){if(param_cond){windowFlipView(param_cond,page);}else{str=document.location.href+"&t=1";document.location.href=str;}}});}
function viewInfoResumeFreeFlipViewHR(emp_id,resume_id,job_id,param_cond,page){var joborder_id=$('#joborder_id').val();var token_=$('#joborder_id').closest("div#resumeLock").find('#token_view_info_resume').val();if(typeof(joborder_id)=="undefined"){show_noti(2,language.emp_common_manageresume_no_order_search);return false;}
$.ajax({sync:true,type:"POST",url:domain+'employers/hrcentral/manageresume/viewinforesume',data:{'emp_id':emp_id,'resume_id':resume_id,'job_id':job_id,'joborder_id':joborder_id,'csrf_token':token_},success:function(rs){if(rs==-1){show_noti(2,language.emp_common_manageresume_no_order_search);}else if(rs==3){$.confirm({title:language.message_common,content:language.emp_common_manageresume_resume_credit_promotion,buttons:{confirm:{text:language.emp_common_manageresume_resume_btn_confirm,btnClass:'btn-blue',action:function(){if(param_cond){windowFlipViewHR(param_cond,page,1);}else{str=document.location.href+"&t=1";document.location.href=str;}}}}});}else{if(param_cond){windowFlipViewHR(param_cond,page,1);}else{str=document.location.href+"&t=1";document.location.href=str;}}}});}
function updateClassifiedResume(id,fd_id,type){$.ajax({url:domain+'employers/hrcentral/manageresume/updateclassifiedresume',type:'POST',dataType:'json',data:{'id':id,'fd_id':fd_id,'type':type},}).done(function(res){});}
function slideTabslet(){let buttonPrev=$('.main-tabslet .button-prev');let buttonNext=$('.main-tabslet .button-next');let table=$('.box-manage-job-posting .main-jobs-posting .table, .boding-resume-applied .table, .scroll-x, .table-jobs-waiting, .table-jobs-posting');buttonPrev.on('click',function(e){e.preventDefault();table.animate({scrollLeft:"-=290px"},"slow");});buttonNext.on('click',function(e){e.preventDefault();table.animate({scrollLeft:"+=290px"},"slow");});table.bind('scroll',function()
{if($(this).scrollLeft()+$(this).innerWidth()>=$(this)[0].scrollWidth)
{buttonNext.addClass('disabled');}else{buttonNext.removeClass('disabled');}
if($(this).scrollLeft()==0)
{buttonPrev.addClass('disabled');}else{buttonPrev.removeClass('disabled');}});}
function save_resume_to_ts(){$('.save_resume_to_ts').on('click',function(e){e.preventDefault();$(this).prop('disabled',true);$(this).off("click");var resume_id=$("#resume_id").val();if(typeof(resume_id)=="undefined"){show_noti(2,language.save_resume_ts_msg_view_contact);return false;}
$.ajax({type:"POST",url:domain+'employers/popup/saveresumetots',data:{'jobTS_id':$("#jobTS_id").val(),'resume_id':resume_id},beforeSend:function(){$("#save_resume_ts_msg").remove()},success:function(obj){if(obj&&obj!=0){show_noti(1,language.save_resume_ts_msg_success);let time_to_ts=obj;$("#box_save_resume_ts").prepend('<div class="doc-success">\
                            <p id="save_resume_ts_msg" class="text-success">'+language.save_resume_ts_msg+' '+time_to_ts+'</p>\
                        </div>');}else{show_noti(2,language.save_resume_ts_msg_fail);}}});});}
function searchResumeApply(){if(Date.parse($('#strFromDate').val())>Date.parse($('#strToDate').val())){show_noti(2,language.emp_manageresume_search_date_invalid);return false;}
var strLink=domain+"employers/hrcentral/manageresume/"+folder_type+'/'+hexFolderID+'/';var keyword=$('#strKeyword').val().replace(/\//g,"");if(keyword){if(checkInputNormalText(keyword)==false){show_noti(2,language.emp_hrcentral_validate_keyword);return false}
strLink+=keyword+'/';}else
strLink+='*/';strLink+=$('#intKeywordType').val()+'/';strLink+=$('#inturgentjob').val()+'/';var date_from=$('#strFromDate').val();if(date_from)
strLink+=replaceAll(date_from,'/',"-")+'/';else
strLink+='*/';var date_to=$('#strToDate').val();if(date_to)
strLink+=replaceAll(date_to,'/',"-")+'/';else
strLink+='*/';if(folder_type<=3||folder_type==6){intSortType='0';strSort='desc';}else{intSortType='1';strSort='desc';}
if($('#intSuitable').length>0)
intSuitableResume=$('#intSuitable').val();else
intSuitableResume='2';strLink+=$('#intStatus').val()+'/'+intSuitableResume+'/'+$('#intType').val()+'/'+$('#intNote').val()+'/'+intSortType+'/'+strSort+'/'+strUserId+'/1';location.href=strLink;}
function searchResumeApplySortType(){if(Date.parse($('#strFromDate').val())>Date.parse($('#strToDate').val())){show_noti(2,language.emp_manageresume_search_date_invalid);return false;}
var strLink=domain+"employers/hrcentral/manageresume/"+folder_type+'/'+hexFolderID+'/';var keyword=$('#strKeyword').val().replace(/\//g,"");if(keyword){if(checkInputNormalText(keyword)==false){show_noti(2,language.emp_hrcentral_validate_keyword);return false}
strLink+=keyword+'/';}else
strLink+='*/';strLink+=$('#intKeywordType').val()+'/';var date_from=$('#strFromDate').val();if(date_from)
strLink+=replaceAll(date_from,'/',"-")+'/';else
strLink+='*/';var date_to=$('#strToDate').val();if(date_to)
strLink+=replaceAll(date_to,'/',"-")+'/';else
strLink+='*/';var intStatus=0;var intType=0;if($('#intSortType').length>0){intSortType=$('#intSortType').val();if(intSortType==5){intStatus=$('#strSort').val();intType=6;intSortType='5';}else if(intSortType==6){intStatus=7;intType=$('#strSort').val();intSortType='6';}else{intStatus=7;intType=6;intSortType=$('#intSortType').val();}
strSort=$('#strSort').val();}else{intStatus=$('#intStatus').val();intType=$('#intType').val();intSortType='0';strSort='desc';}
if($('#intSuitable').length>0)
intSuitableResume=$('#intSuitable').val();else
intSuitableResume='2';strLink+=intStatus+'/'+intSuitableResume+'/'+intType+'/'+$('#intNote').val()+'/'+intSortType+'/'+strSort+'/'+strUserId+'/1';location.href=strLink;}
function resetFormSearchResume(){$('#strKeyword').val('');$("#intKeywordType option[value='0']").prop('selected','selected');$('#strFromDate').val('');$('#strToDate').val('');$("#intStatus option[value='7']").prop('selected','selected');$("#intType option[value='6']").prop('selected','selected');$("#intNote option[value='2']").prop('selected','selected');}
function collapseToggle(){$(document).on('click',".list-collapse-groupcb .title",function(){var objUl=$(this).closest('ul');objUl.find('.title').not(this).removeClass('active');objUl.find('.title').not(this).next('.content').slideUp();if($(this).closest('li').find('.content').css('display')=='none'){$(this).addClass('active');$(this).closest('li').find('.content').slideDown();}});}
function date_custom_lib(){moment.locale(CURRENT_LANGUAGE);$('.dates_cus_select').daterangepicker({"singleDatePicker":true,"showDropdowns":true,"autoApply":true,"autoUpdateInput":false,"locale":{"format":"DD-MM-YYYY"},"opens":"center"});$('input.dates_cus_select').on('apply.daterangepicker',function(ev,picker){$(this).val(picker.endDate.format('DD-MM-YYYY'));$(this).removeClass('error');$(".error_job_lastdate").html('');});$('.dates_cus_select_postjob').daterangepicker({"singleDatePicker":true,"showDropdowns":true,"autoApply":true,"autoUpdateInput":false,"locale":{"format":"DD/MM/YYYY"},"minDate":moment().format("DD-MM-YYYY"),"opens":"center"});$('input.dates_cus_select_postjob').on('apply.daterangepicker',function(ev,picker){$(this).val(picker.endDate.format('DD/MM/YYYY'));$(this).removeClass('error');$(".error_job_lastdate").html('');});}
function postJobShowadditional(){$('.btn-show-additional').on('click',function(){if($('.other-additional-wrap').length){$('.other-additional-wrap').toggle();}});}
$(document).ready(function(){slideTabslet();save_resume_to_ts();collapseToggle();date_custom_lib();postJobShowadditional();initChosen();backToTop();toggleNav();$('#copy_multi_job').on('click',function(e){e.preventDefault();var str_job_id=getItemsChecked();if(str_job_id==""){show_noti(2,language.hrcentral_select_check_job,language.message_common);}else{var arrJob=new Array();arrJob=str_job_id.split(',');if(arrJob.length>language.hrcentral_select_max_job){show_noti(2,language.hrcentral_select_max_job_message,language.message_common);}else{window.location.href=domain+"employers/hrcentral/posting/copyjob/"+user_id+"/"+str_job_id+"/1/1";}}});$('#unposting_multi_job').on('click',function(e){e.preventDefault(e);var str_job_id=getItemsChecked();if(str_job_id==""){show_noti(2,language.hrcentral_select_check_unposting_job,language.message_common);}else{unpostingJob(str_job_id,3);}});var optionSalaryVND={thousands:',',integer:true};var optionSalaryUSD={thousands:'.',integer:true};if($("#frmEditJob #salary_from").length){$('#salary_from').maskNumber(optionSalaryVND);}
if($("#frmEditJob #salary_to").length){$('#salary_to').maskNumber(optionSalaryVND);}
$('#job_salaryunit').change(function(){$('#salary_from').val('');$('#salary_to').val('');if($('#job_salaryunit option:selected').val()=='0'||$('#job_salaryunit option:selected').val()=='1'){$('#salary_from').attr('disabled',true);$('#salary_to').attr('disabled',true);return false;}
$('#salary_from').attr('disabled',false);$('#salary_to').attr('disabled',false);if($('#job_salaryunit option:selected').val()=='vnd'){$('#salary_from').maskNumber(optionSalaryVND);$('#salary_to').maskNumber(optionSalaryVND);}else{$('#salary_from').maskNumber(optionSalaryUSD);$('#salary_to').maskNumber(optionSalaryUSD);}});if($('#job_salaryunit option:selected').val()=='usd'||$('#job_salaryunit option:selected').val()=='vnd'){$("#salary_from").attr('disabled',false);$("#salary_to").attr('disabled',false);}else{$("#salary_from").attr('disabled',true);$("#salary_to").attr('disabled',true);}
daterangepicker_all();validatefrmloginheader();$('.go-link').on('change',function(){var link=$(this).val();if(link!='-1')
window.location.href=link;});});$(document).on('scroll',function(){$(window).scroll(function(){var heightBody=$('body').height()
var heightFooter=$('footer.for-customers').height()
var heightWindow=$(window).height()
var height=$(window).scrollTop();if(height>(heightBody-heightFooter-heightWindow)){$('.employer-mail').addClass('no-scroll')}else{$('.employer-mail').removeClass('no-scroll')}});});function saveReplyEmailSetting(){if($("#frmAddEmpLetter").validate({ignore:":disabled",rules:{reply_title:{required:true,maxlength:70},reply_content:{required:true,minlength:30,maxlength:3000}},errorPlacement:function(error,element){var name=element.attr('name');var errorSelector='.error_'+name;var $element=$(errorSelector);$(errorSelector).html(error.html());},messages:{reply_title:{required:language.emp_notifymail_Please_enter_a_letter_title},reply_content:{required:language.emp_notifymail_Please_enter_a_reply_content}},success:function(error){error.remove();},submitHandler:function(form){var data=new Object();data.id=$('#mail_id').val();data.title=$('#reply_title').val();data.content=$('#reply_content').val();data.isdefault=$('#IsDefault').val();data.job_id=$('#job_id').val();var dataString=JSON.stringify(data);$("#save_reply_mail_auto_send").prop('disabled',true);$.ajax({type:"POST",url:domain+'employers/hrcentral/autoreply/savemail',data:'data='+dataString,success:function(data){$.fancybox.close();parent.location.reload();}});},invalidHandler:function(form,validator){var errors=validator.numberOfInvalids();if(errors){switch(validator.errorList[0].element.getAttribute("name")){default:validator.errorList[0].element.focus();break;}}}}).form()==false)return false;}
function saveNotifyLetterSetting(){if($("#frmAddEmpLetter").validate({ignore:":disabled",rules:{letter_title:{required:true},letter_content:{required:true,minlength:10,maxlength:3000}},messages:{letter_title:{required:language.emp_notifymail_Please_enter_a_letter_title},letter_content:{required:language.emp_notifymail_Please_enter_a_letter_content}},errorPlacement:function(error,element){var name=element.attr('name');var errorSelector='.error_'+name;var $element=$(errorSelector);$(errorSelector).html(error.html());},success:function(error){error.remove();},submitHandler:function(form){var data={letter_id:$('#letter_id_new').val(),letter_title:$('#letter_title').val(),letter_content:$('#letter_content').val(),letter_type:$('input[name="letter_type"]:checked').val(),letter_merge:$('#letter_merge').val(),letter_type:$('input[name="letter_type"]:checked').val(),addfield:$('#addfield').val()};var dataString=encodeURIComponent(JSON.stringify(data));$("#save_notify_letter_setting_box").prop('disabled',true);$.ajax({type:"POST",url:domain+'employers/hrcentral/notifymail/saveempletter',data:'data='+dataString,success:function(data){if(data){$.confirm({title:language.message_common,content:language.emp_update_success,buttons:{OK:function(){location.reload();},}});}else{show_noti(2,language.emp_update_fail,language.message_common);}
$("#save_notify_letter_setting_box").prop('disabled',false);}});},invalidHandler:function(form,validator){var errors=validator.numberOfInvalids();if(errors){switch(validator.errorList[0].element.getAttribute("name")){default:validator.errorList[0].element.focus();break;}}}}).form()==false)return false;}
function checkStatusSession(){if(memberLogin=='yes'){$.ajax({url:domainroot+'/employersnews/ajaxlogin/checkstatussession'}).done(function(status){if(status==1)
location.href=PATH_KIEMVIEC+"employers/login";});}}
function changesort(ulr)
{var value=$("#box_sort_change").val();if(value!=0){ulr+="/sort/"+value;if(value=="kng")
ulr+="_asc";else
ulr+="_desc";}
window.location=ulr;}
</script>


<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KTKWM2');</script>
<!-- End Google Tag Manager -->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/584f5b7ff9976a1964d1c920/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

</script>
<script>$(document).ready(function() {$("img.lazy-new").lazy();});$.fancybox.defaults.hash=false;$.fancybox.defaults.backFocus=false;</script>
<div class="page-loader" id="page-loading"><div class="lds-roller">
    <div>
    </div>
    <div>
    </div>
    <div></div><div></div><div></div><div></div><div></div><div></div></div></div>


         </body>
      </html>
