<!--Start New Layout CB -->
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1"/>
        <base href="https://static.careerbuilder.vn/themes/careerbuilder/"/>
        <meta name="theme-color" content="#1e5c8b"/>
        <title>Tuyển dụng và tìm kiếm việc làm nhanh</title>
        <meta name="keywords" content="Việc làm, kiếm việc, tìm việc làm, tuyển dụng, ứng viên,  mạng tuyển dụng, việc làm online, HR, nghành nghề hot, công ty hàng đầu Việt Nam, việc làm bán thời gian" />
        <meta name="description" content="CareerBuilder.vn - Mạng việc làm và tuyển dụng lớn nhất Việt Nam. Cho phép tìm kiếm việc làm nhanh và hiệu quả với hơn 10.000 việc làm mới và hấp dẫn mỗi tuần từ các công ty hàng đầu" />
        <link href="https://careerbuilder.vn/vi/jobseekers/dashboard" hreflang="vi-vn" rel="alternate"/>
        <link href="https://careerbuilder.vn/en/jobseekers/dashboard" hreflang="x-default" rel="alternate"/>
        <meta property="og:url" content="https://careerbuilder.vn/vi/jobseekers/dashboard"/>
        <meta property="og:title" content="Tuyển dụng và tìm kiếm việc làm nhanh | CareerBuilder.vn"/>
        <meta property="og:description" content="CareerBuilder.vn - Mạng việc làm và tuyển dụng lớn nhất Việt Nam. Cho phép tìm kiếm việc làm nhanh và hiệu quả với hơn 10.000 việc làm mới và hấp dẫn mỗi tuần từ các công ty hàng đầu"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1e5c8b"/>
        <meta name="apple-mobile-web-app-title" content="CareerBuilder"/>
        <link rel="apple-touch-icon" href="https://careerbuilder.vn/favicon_careerbuilder_v2.ico?t=1"/>
        <link rel="apple-touch-icon" sizes="57x57" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_57x57.png?t=1"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_76x76.png?t=1"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_120x120.png?t=1"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_152x152.png?t=1"/>
        <link rel="apple-touch-icon" sizes="167x167" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_167x167.png?t=1"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/cb_180x180.png?t=1"/>
        <link href="https://careerbuilder.vn/manifest.json" rel="manifest"/>

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta property="og:image" content="https://static.careerbuilder.vn/themes/careerbuilder/img/CareerBuilder-social.png"/>
        <link data-page-subject="true" href="https://static.careerbuilder.vn/themes/careerbuilder/img/CareerBuilder-social.png" rel="image_src"/>
        <meta property="fb:app_id" content="143458889176984"/>
     
        
        <link rel="stylesheet" type="text/css" href="{{ asset('css/userClient.css') }}">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxy/1.6.1/scripts/jquery.ajaxy.min.js"></script> -->
        @stack('style')

        <style type="text/css">
            
            .display{
                display: block !important;
            }
           
        </style>
       

        <script src="{{ asset('js/global.js') }}"></script>

        
       
        <script>/*global.js*/
           
        </script>
        <script src='//cdnt.netcoresmartech.com/smartechclient.js'></script>
        <script src='https://ads.careerbuilder.vn/www/delivery/spcjs.php?id=23'></script>
        <script>
            $.fancybox.defaults.hash=false;
            $.fancybox.defaults.backFocus=false;
            if (!$.isFunction(window.smartech)) {
            	function smartech(action,data){console.log('smartech:'+action);}
            }
            if ($.isFunction(window.smartech)) {
            	smartech('create', 'ADGMOT35CHFLVDHBJNIG50K96BT3VC7KA7MBJ665I14C320R3PRG');
            	smartech('register', '87d64a04bc7036938e094b9327ac7fd1');
            	smartech('identify', 'chiensi26045@gmail.com');
            	smartech('dispatch', 1,{});
            }
            if (!$.isFunction(window.OA_show)) {
            	function OA_show(id){console.log('ads:'+id)}
            	var OA_output = Array();
            }
            var language_common = {title_popup:"Thông báo",popup_msg_success:"Lưu thành công",message_common:"Vui lòng thao tác đầy đủ để hoàn thành",popup_msg_error:"Vui lòng kiểm tra lại",popup_close_popup:"Đóng",job_message_save_job_succ_new:"job_message_save_job_succ_new",job_view_detail_saved_exists:"job_view_detail_saved_exists",job_message_error:"Lỗi trong quá trình thực thi",job_view_detail_saved_exists:"job_view_detail_saved_exists",popup_login_error:"Vui lòng nhập thông tin",job_message_delete_job_succ:"Xóa thành công",okButton:"Đồng ý",cancelButton:"Hủy"
            };
            if(typeof language === 'undefined')	var language = language_common;	else $.extend(language, language_common);
        </script>
    </head>
    <body class="">
        <script>
            smartech('contact', '', {
            	"pk^EMAIL": 'chiensi26045@gmail.com',
            	"FIRST_NAME": 'Cuong',
            	"LAST_NAME": 'Dao',
            	"REG_DATE": '2022-05-13',
            });
        </script>
        <header>
            <div class="container-fluid">
                <div class="main-wrap">
                    <div class="left-wrap">
                        <div class="button-hambuger"><span class="mdi mdi-menu"></span></div>
                        <div class="logo"><a href="{{ route('home') }}" title="Tuyển dụng & Tìm kiếm việc làm nhanh" ><img src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></a></div>
                        <div class="main-menu">
                            <ul class="menu">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" title="Tìm Việc Làm">Tìm Việc Làm</a>
                                    <div class="dropdown-menu">
                                        <ul>
                                            <li> <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html" title="Việc làm mới nhất">Việc làm mới nhất</a></li>
                                            <li> <a href="https://careerbuilder.vn/tim-viec-lam.html" title="Ngành nghề / Địa điểm">Ngành nghề / Địa điểm</a></li>
                                            <li>
                                                <a href="https://careerbuilder.vn/viec-lam/viec-lam-phu-hop-voi-ban-m1-vi.html" title="Việc làm phù hợp" >
                                                Việc làm phù hợp
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li> <a href="javascript:void(0)" target="_blank" title="CV Hay">CV Hay</a></li>
                                <li> <a href="javascript:void(0)" target="_blank" title="VietnamSalary">VietnamSalary</a></li>
                                <li> <a href="javascript:void(0)" target="_blank" title="CareerMap">CareerMap</a></li>
                                <li> <a href="javascript:void(0)" title="Cẩm Nang">Cẩm Nang</a></li>
                                <li> <a href="javascript:void(0)" title="Tính Lương">Tính Lương</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right-wrap">
                        <div class="main-noti dropdown">
                            <a href="javascript:void(0)" title="Thông Báo Việc Làm"> <span class="mdi mdi-bell"></span></a>
                            <div class="dropdown-menu">
                                <div class="noti">
                                    <p>
                                    <p>Chào mừng bạn đến CareerBuilder.vn</p>
                                    <p>Đăng nhập ngay để xem việc làm phù hợp với bạn, nhà tuyển dụng đã xem hồ sơ của bạn và cập nhật nhiều hơn nữa ...<br><br></p>
                                    </p>
                                    <a class="email" href="https://careerbuilder.vn/thong-bao-viec-lam" title="Tạo Ngay">Tạo Ngay</a> 
                                </div>
                            </div>
                        </div>
                        <div class="main-login logged dropdown">
                            <a href="https://careerbuilder.vn/vi/jobseekers/dashboard" rel="nofollow"> <span class="mdi mdi-account-circle"></span>Chào <span class="name">{{ Auth::user()->name }}</span></a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li> <a href="{{ route('user-dashboard') }}" rel="nofollow">Quản Lý Hồ Sơ</a></li>
                                    <li> <a href="{{ route('my-profile') }}" rel="nofollow">Hồ sơ </a></li>
                                    
                                   <!--  <li> <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobsaved" rel="nofollow">Việc làm đã lưu</a></li>
                                    <li> <a href="https://careerbuilder.vn/vi/jobseekers/jobalert" rel="nofollow">Thông Báo Việc Làm</a></li>
                                    <li> <a href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp" rel="nofollow">Nhà tuyển dụng xem hồ sơ của tôi</a></li> -->
                                   
                                    <li> <a href="javascript:void(0)" rel="nofollow">Cài đặt</a></li>
                                    <li> <a href="{{ route('logoutUser') }}" rel="nofollow">Thoát</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="main-language dropdown">
                            <div class="dropdown-toggle">
                                <p>VI<em class="mdi mdi-chevron-down"></em></p>
                            </div>
                            <div class="dropdown-menu">
                                <div class="item active"><a class="dropdown-item" href="javascript:;" title="Change language">VI</a></div>
                                <div class="item"><a class="dropdown-item" href="https://careerbuilder.vn/en/jobseekers/dashboard" title="Change language">EN</a></div>
                            </div>
                        </div>
                        <div class="main-employer dropdown">
                            <a href="https://careerbuilder.vn/vi/employers" title="Đăng tuyển, Tìm ứng viên">
                                <div class="dropdown-toggle">
                                    <h4>Dành cho nhà tuyển dụng<em class="mdi mdi-chevron-down"></em></h4>
                                    <p>Đăng tuyển, Tìm ứng viên</p>
                                </div>
                            </a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="https://careerbuilder.vn/vi/employers/login" title="Đăng nhập">Đăng nhập</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/employers/postjobs" title="Đăng Tuyển Dụng">Đăng Tuyển Dụng</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/resume-search.html" title="Tìm Ứng Viên">Tìm Ứng Viên</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/employers/products-and-services" title="Sản phẩm và Dịch vụ">Sản phẩm và Dịch vụ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu logged">
                <div class="mobile-wrap">
                    <div class="header-logo"><a href="https://careerbuilder.vn/vi/" title="Tuyển dụng & Tìm kiếm việc làm nhanh"><img class="lazy-bg" data-src="./img/logo.png" src="../kiemviecv32/images/graphics/blank.gif" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></a></div>
                    <div class="header-bottom">
                        <div class="header-bottom-top">
                            <div class="profile">
                                <div class="avatar"><a href="https://careerbuilder.vn/vi/jobseekers/dashboard"><img class="lazy-bg" data-src="./img/user_circle.png" src="../kiemviecv32/images/graphics/blank.gif" alt="avatar"></a></div>
                                <div class="username">
                                    <p><a href="https://careerbuilder.vn/vi/jobseekers/dashboard">Cuong</a></p>
                                </div>
                                <div class="back-menu-normal"><em class="mdi mdi-arrow-left"></em></div>
                            </div>
                            <div class="menu">
                                <ul class="menu-normal">
                                    <li class="active"><a href="https://careerbuilder.vn/vi/" title="Tuyển dụng & Tìm kiếm việc làm nhanh"> <i class="mdi mdi-home-outline"></i>Home</a></li>
                                    <li class="dropdown-mobile">
                                        <a href="javascript:void(0);" title="Tìm Việc Làm"> <i class="mdi mdi-magnify"></i>Tìm Việc Làm</a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html" title="Việc làm mới nhất"> <i class="fa fa-thumb-tack"></i>Việc làm mới nhất</a></li>
                                                <li><a href="https://careerbuilder.vn/tim-viec-lam.html" title="Ngành nghề / Địa điểm"> <i class="fa fa-location-arrow"></i>Ngành nghề / Địa điểm</a></li>
                                                <li>
                                                    <a href="https://careerbuilder.vn/viec-lam/viec-lam-phu-hop-voi-ban-m1-vi.html"  title="Việc làm phù hợp" >
                                                    <i class="fa fa-thumb-tack"></i>Việc làm phù hợp
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="https://careerbuilder.vn/cv-hay/" title="CV Hay"> <i class="mdi mdi-file-document-edit-outline"></i>CV Hay</a></li>
                                    <li><a href="https://vietnamsalary.careerbuilder.vn/" title="VietnamSalary"> <i class="mdi mdi-currency-usd"></i>VietnamSalary</a></li>
                                    <li><a href="https://careerbuilder.vn/careermap" title="CareerMap"> <i class="mdi mdi-chart-line-variant"></i>CareerMap</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/talentcommunity" title="Cẩm Nang"> <i class="mdi mdi-lightbulb-on-outline"></i>Cẩm Nang</a></li>
                                    <li><a href="https://careerbuilder.vn/tinh-luong-gross-net" title="Tính Lương"> <i class="mdi mdi-calculator"></i>Tính Lương</a></li>
                                </ul>
                                <div class="menu-logged">
                                    <p>My CareerBuilder Center</p>
                                    <ul>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/dashboard" rel="nofollow"> <i class="fa fa-columns"></i>Quản Lý Hồ Sơ</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile" rel="nofollow"> <i class="mdi mdi-file-document-edit-outline"></i>Hồ sơ CareerBuilder</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobsaved" rel="nofollow"> <i class="mdi mdi-chart-line-variant"></i>Việc làm đã lưu</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied" rel="nofollow"> <i class="fa fa-history"></i>Việc làm đã nộp</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/jobalert" rel="nofollow"> <i class="mdi mdi-lightbulb-on-outline"></i>Thông Báo Việc Làm</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp" rel="nofollow"> <i class="fa fa-building"></i>Nhà tuyển dụng xem hồ sơ của tôi</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/jobseekers/member/myaccount"> <i class="mdi mdi-settings-outline"></i>Cài đặt</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="header-bottom-bottom">
                            <div class="authentication-links">
                                <ul>
                                    <li class="My-CareerBuilder"><a href="javascript:void(0);"> <i class="mdi mdi-login-variant"></i>My CareerBuilder Center</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/jobseekers/logout" rel="nofollow"> <i class="fa fa-sign-out"></i>Thoát</a></li>
                                    <li><a href="https://careerbuilder.vn/vi/employers" title="Dành cho nhà tuyển dụng"> <i class="fa fa-building"></i>Dành cho nhà tuyển dụng</a></li>
                                </ul>
                            </div>
                            <div class="header-alert">
                                <ul>
                                    <li><a href="https://careerbuilder.vn/thong-bao-viec-lam" title="Thông Báo Việc Làm"> <i class="mdi mdi-bell-outline"></i><span>Thông Báo Việc Làm</span></a></li>
                                    <li><a href="https://careerbuilder.vn/en/jobseekers/dashboard" title="Change language"> <i class="mdi mdi-web"></i><span>English</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop"></div>
        </header>
        <main>
            <link rel="stylesheet" type="text/css" href="{{ asset('css/swiper.css') }}">
            <link rel="stylesheet" type="text/css" href="{{ asset('css/walkthrough.css') }}">
            
            <div class="page-content d-flex align-items-stretch">
                <div class="default-sidebar sticky">
                    @include('frontend.layout.sidebar.sidebar1')
                </div>

                 @yield('content')

            </div>
            <div class="create-new-resume" style="display: none">
                <div class="modal-title">
                    <h3>Tạo hồ sơ mới </h3>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <p>Ngoài hồ sơ CareerBuilder, bạn có thể tạo hồ sơ đính kèm để ứng tuyển và  tìm kiếm bởi nhà tuyển dụng</p>
                    </div>
                    <div class="created">
                        <div class="attach">
                            <a title="Hồ sơ đính kèm" href="https://careerbuilder.vn/vi/jobseekers/myresume/myattach">
                                <div class="figure">
                                    <div class="image"><img src="./img/dash-board/2.png" alt=""></div>
                                    <div class="figcaption">
                                        <h4>Hồ sơ đính kèm</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="cv-hay">
                            <a title="Hồ sơ chuyên nghiệp - CVHay" href="https://careerbuilder.vn/cv-hay/tao-cv">
                                <div class="figure">
                                    <div class="image"><img src="./img/dash-board/3.png" alt=""></div>
                                    <div class="figcaption">
                                        <h4>Hồ sơ chuyên nghiệp - CVHay</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal tips-modal-1" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>cbprofile_modal_tips_title_1</h3>
                        <p>cbprofile_modal_tips_des_1</p>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    cbprofile_modal_tips_content_1
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal tips-modal-2" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>cbprofile_modal_tips_title_2</h3>
                        <p>cbprofile_modal_tips_des_2</p>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    cbprofile_modal_tips_content_2
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                var lang_resume = {
                		js_default_resume:"Chọn mặc định",
                		js_none_default_resume:"Không chọn mặc định",
                		js_resume_active_searchable1:"Bạn có thực sự muốn chọn Hồ sơ ",
                		js_resume_active_searchable2:"làm Hồ sơ mặc định cho Nhà tuyển dụng tìm kiếm hay không?",
                		js_default_resume_inactive:"Không chọn mặc định",
                		js_none_default_resume_inactive:"Bỏ qua",
                		js_resume_inactive_searchable1:"Bạn có thực sự muốn bỏ trạng thái Mặc định (cho phép Nhà tuyển dụng tìm kiếm) của hồ sơ ",
                		js_resume_inactive_searchable2:"không?",
                		js_resume_active_jobalert:"Nhận thông báo việc làm",
                		js_resume_inactive_jobalert:"Từ chối nhận thông báo việc làm",
                		job_message_success:"Nhận thông báo việc làm theo tiêu chí tìm kiếm của bạn.",
                		job_message_nosuccess:"Không nhận thông báo việc làm",
                		job_savesearch_max_3_active:"Bạn chỉ được nhận tối đa 3 thông báo việc làm",
                		job_my_createresume_max:"Hiện nay bạn đã có 03 hồ sơ & bạn không thể tạo thêm hồ sơ được nữa.",
                		js_resume_complete_to_duplicate:"js_resume_complete_to_duplicate",
                		js_resume_action_refresh_resume:"Hồ sơ của bạn sẽ thay đổi ngày cập nhật mới nhất. Bạn có muốn cập nhật hồ sơ ?",
                		js_resume_refresh_resume_success:"Hồ sơ của bạn đã được cập nhật thành công !",
                		js_resume_refresh_resume_fail:"js_resume_refresh_resume_fail",
                		js_resume_active_searchable_unsuccess:"Hồ sơ của bạn chưa được kiểm duyệt nên chưa thể bật chế độ tìm kiếm.</br> Vui lòng kiểm tra email hướng dẫn từ CareerBuilder và cập nhật hồ sơ theo hướng dẫn.",
                		js_resume_delete_success:"Xóa hồ sơ thành công",
                		job_alert_by_week:"Nhận mỗi tuần",
                		js_resume_delete:"Xóa hồ sơ",
                		js_none_resume_delete:"Không xóa hồ sơ",
                		job_message_delete_resume:"Bạn có muốn <strong>xóa hồ sơ</strong> có tên",
                		job_message_delete_resume_note:"<br /><strong>Lưu ý</strong>: Sau khi xóa hồ sơ thì bạn sẽ không lấy lại được tất cả những thông tin của bạn nằm trong hồ sơ mà bạn đã xóa.",
                		js_resume_searchable_success:"Bật chế độ tìm kiếm hồ sơ thành công",
                		js_resume_unsearchable_success:"Tắt chế độ tìm kiếm hồ sơ thành công",
                		js_resume_can_not_searchable:"Hiện tại bạn không thể bật chế độ tìm kiếm hồ sơ, vui lòng cập nhật hồ sơ",
                    js_default_resume_urgentjob:"Chọn mặc định",
                    js_none_default_resume_urgentjob:"Bỏ qua",
                    js_resume_urgentjob_success:"Chọn thành công!",
                    js_resume_urgentjob_unsuccess:"Rất tiếc, hồ sơ của bạn không được duyệt!",
                    js_resume_urgentjob_searchable1:"Bạn muốn hồ sơ",
                    js_resume_urgentjob_searchable2:"chọn làm hồ sơ tìm việc Khẩn cấp ? Nhà tuyển dụng có thể dễ dàng tìm ra hồ sơ của bạn. Chế độ sẽ được bật trong 30 ngày tới. Bạn có thể chủ động tắt chế độ Khẩn cấp sau khi tìm được việc làm phù hợp",
                    job_message_delete:"Bạn có muốn xóa không?	",
                    job_message_error:"Lỗi trong quá trình thực thi",
                    job_message:"Thông báo",
                    job_message_add_success:"Bạn đã thêm thành công",
                    job_message_add_success:"Bạn đã thêm thành công",
                    job_blacklist_choose_emp:"Vui lòng chọn công ty bạn muốn thêm vào danh sách hạn chế tìm kiếm",
                    job_blacklist_choose_domain:"Domain email không hợp lệ"
                };
                if(typeof language === 'undefined')
                	var language = lang_resume;
                else
                	$.extend(language, lang_resume);
                var member_email = 'chiensi26045@gmail.com';
                var welcome = 'wel6120757';
                var msg = '';
            </script>
            <script src="{{ asset('js/global.js') }}"> </script>
            <script>/*walkthrough.js*/
                $(document).ready(function(){var shwel=getCookie(welcome);if(shwel!=1){if($(window).width()>1200){$('#welcome-to').show();$('.welcome-opacity').css('opacity',1);}else{$('#welcome-to').hide();}
                $('.walkthrough-action-back-welcome, .welcome-to .btn-close').on('click',function(){$('#welcome-to, .welcome-opacity').hide();setCookie(welcome,1,1800);});$('.walkthrough-custom-skin .walkthrough-action-back').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('header').removeAttr('style');setCookie(welcome,1,1800);});$('.welcome-to .walkthrough-button-next').on('click',function(){$('#welcome-to, .welcome-opacity').hide();$('html,body').animate({scrollTop:(0)},200,'easeInOutExpo');$('#walkthrough-step1').delay(400).fadeIn();});$('#walkthrough-step1 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('header').css('z-index',2);$('#walkthrough-step2').fadeIn();});$('#walkthrough-step2 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('header').removeAttr('style');$('#walkthrough-step3').fadeIn();});$('#walkthrough-step3 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('#walkthrough-step4').fadeIn();});$('#walkthrough-step4 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('#walkthrough-step5').fadeIn();});$('#walkthrough-step5 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('#walkthrough-step6').fadeIn();});$('#walkthrough-step6 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('html,body').animate({scrollTop:(850)},800,'easeInOutExpo');$('#walkthrough-step7').delay(400).fadeIn();});$('#walkthrough-step7 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('#walkthrough-step8').fadeIn();});$('#walkthrough-step8 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('#walkthrough-step9').fadeIn();});$('#walkthrough-step9 .walkthrough-button-next').on('click',function(){$(this).parents('.walkthrough-custom-outer-div').fadeOut();$('html,body').animate({scrollTop:(0)},800,'easeInOutExpo');setCookie(welcome,1,1800);});}});
            </script>
            <div class="back-drop"></div>
        </main>
        <footer>
            <div class="container">
                <section class="top-footer cb-section cb-section-border-bottom">
                    <div class="row">
                        <div class="col-lg-12 logo"><img class="lazy-bg" data-src="./img/logo.png" src="../kiemviecv32/images/graphics/blank.gif" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-links">
                                <h3>Dành Cho Ứng Viên</h3>
                                <ul>
                                    <li><a target="_blank" href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html" title="Việc làm mới nhất">Việc làm mới nhất</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/cv-hay/" title="CV Hay">CV Hay</a></li>
                                    <li><a target="_blank" href="https://vietnamsalary.careerbuilder.vn/" title="VietnamSalary">VietnamSalary</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/careermap" title="CareerMap">CareerMap</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/talentcommunity" title="Cẩm Nang">Cẩm Nang</a></li>
                                    <li><a target="_blank" href="https://vieclamit.careerbuilder.vn/advices" title="IT Blogs">IT Blogs</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/mobile" title="Ứng Dụng Di Động">Ứng Dụng Di Động</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/sitemap" title="Sơ Đồ Trang Web">Sơ Đồ Trang Web</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-links">
                                <h3>Nhà Tuyển Dụng</h3>
                                <ul>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/postjobs" title="Đăng Tuyển Dụng">Đăng Tuyển Dụng</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/resume-search.html" title="Tìm Hồ Sơ">Tìm Hồ Sơ</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/talentnetwork">Giải Pháp Talent Solution</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/products-and-services" title="Sản Phẩm Dịch Vụ">Sản Phẩm Dịch Vụ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-links">
                                <h3>Trung tâm trợ giúp</h3>
                                <ul>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/about" title="Về CareerBuilder.vn">Về CareerBuilder.vn</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/regulations" title="Chính Sách BV Thông Tin">Chính Sách BV Thông Tin</a></li>
                                    <li><a target="_blank" href="https://advertising.careerbuilder.vn/html/customer/cbvn/GDPR.PDF" title="Chính sách GDPR">Chính sách GDPR</a></li>
                                    <li><a target="_blank" href="https://images.careerbuilder.vn/regulations.pdf" title="Quy chế sàn giao dịch">Quy chế sàn giao dịch</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/use" title="Thỏa thuận sử dụng">Thỏa thuận sử dụng</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/security" title="Quy định bảo mật">Quy định bảo mật</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/process" title="QT Giải Quyết Tranh Chấp">QT Giải Quyết Tranh Chấp</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/faq" title="Trợ giúp">Trợ giúp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <div class="footer-links">
                                <h3>Website Đối Tác</h3>
                                <ul>
                                    <li><a target="_blank" href="https://vieclam.tuoitre.vn/">Vieclam.Tuoitre.vn</a></li>
                                    <li><a target="_blank" href="https://vieclam.vietnamnet.vn/">Vieclam.Vietnamnet.vn</a></li>
                                    <li><a target="_blank" href="https://vieclam.thanhnien.vn/">Vieclam.Thanhnien.vn</a></li>
                                    <li><a target="_blank" href="https://vieclamit.careerbuilder.vn/">VieclamIT.vn</a></li>
                                    <li><a target="_blank" href="https://careerbuilder.vn/vi/jobseekers/contact">Liên Hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="footer-app-links">
                                <h3>Tìm Kiếm Mọi Lúc Mọi Nơi</h3>
                                <div class="app-links"> <a href="https://itunes.apple.com/vn/app/careerbuilder.vn-job-search/id882391884?l=vi&mt=8" target="_blank" rel="nofollow,noreferrer" title="careerbuilder.vn-job-search"> <img class="lazy-bg" data-src="./img/apple.png" src="../kiemviecv32/images/graphics/blank.gif" alt="app"> </a> <a href="https://play.google.com/store/apps/details?id=vn.careerbuilder.android.app" target="_blank" rel="nofollow,noreferrer" title="careerbuilder.vn-job-search"> <img class="lazy-bg" data-src="./img/android.png" src="../kiemviecv32/images/graphics/blank.gif" alt="app"> </a> </div>
                            </div>
                            <div class="footer-social-links">
                                <h3>Kết nối với CareerBuilder.vn</h3>
                                <ul>
                                    <li><a rel="nofollow,noreferrer" title="Facebook" target="_blank" href="https://www.facebook.com/pages/CareerBuilder-Vietnam/265321726945679?ref=tn_tnmn"> <span class="fa fa-facebook"></span></a></li>
                                    <li><a rel="nofollow,noreferrer" title="Linkedin" target="_blank" href="https://www.linkedin.com/company/careerbuilder-vietnam"> <span class="fa fa-linkedin"></span></a></li>
                                    <li><a rel="nofollow,noreferrer" title="Youtube" target="_blank" href="https://www.youtube.com/user/CareerBuilderVietnam"> <span class="fa fa-youtube-play"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bottom-footer">
                    <div class="left-bottom-footer">
                        <p>Trụ sở chính: Tầng 6, Tòa nhà Pasteur, 139 Pasteur, Phường 6, Quận 3, TP. Hồ Chí Minh  - Tel: (84.28) 3822 6060 </p>
                        <p>Văn phòng Hà Nội: Tầng 17, Tòa nhà VIT, 519 Kim Mã, Quận Ba Đình, Hà Nội - Tel: (84.24) 7305 6060 </p>
                        <p>Email: contact@careerbuilder.vn</p>
                        <p>Copyright © CareerBuilder Vietnam.</p>
                    </div>
                    <div class="right-bottom-footer"><a target="_blank"  rel="nofollow,noreferrer" href="http://online.gov.vn/Home/WebDetails/22254?AspxAutoDetectCookieSupport=1"><img class="lazy-bg" data-src="./img/dk.png" src="../kiemviecv32/images/graphics/blank.gif" alt="bct"></a></div>
                </section>
            </div>
        </footer>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTKWM2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script type="text/javascript">
            <!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KTKWM2');
            
        </script>

        <link rel="stylesheet" type="text/css" href="{{ asset('css/common.css') }}">
     

        <script src="{{ asset('js/jskcommon.js') }}">/*jskcommon.js*/</script>
        <a class="feedback-btn" data-fancybox data-type="ajax" data-src="https://careerbuilder.vn/vi/jobseekers/index/sendfeedback?from=jobseeker&newlayout=1" title="Feedback" href="javascript:void(0);"><span>Feedback</span></a>
    </body>
</html>
<!--End New Layout CB -->