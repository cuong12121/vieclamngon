
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1"/>
        
        <meta name="theme-color" content="#1e5c8b"/>

       
        <title>{{ $meta??'Tuyển dụng và Tìm kiếm việc làm nhanh' }} </title>
        <meta name="keywords" content="Việc làm, kiếm việc, tìm việc làm, tuyển dụng, ứng viên,  mạng tuyển dụng, việc làm online, HR, nghành nghề hot, công ty hàng đầu Việt Nam, việc làm bán thời gian" />
        <meta name="description" content="" />
        <link href="javascript:void(0)" hreflang="vi-vn" rel="alternate"/>
        <link href="javascript:void(0)" hreflang="x-default" rel="alternate"/>
    
        <link rel="apple-touch-icon" href="javascript:void(0)"/>
        <link href="javascript:void(0)" rel="manifest"/>
        <link rel="shortcut icon" href="javascript:void(0)"/>
       
        <link rel="stylesheet" type="text/css" href="{{ asset('css/fancybox.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/global1.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/swiper.css') }}">    
        <link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.auto-complete.css') }}">
      
        <link rel="stylesheet" type="text/css" href="{{ asset('css/common.css') }}">
     
       
        <script type="application/ld+json">{
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
         <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/jquery.lazy.min.js"></script>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <script src="{{ asset('js//global2.js') }}"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.4/jquery.validate.min.js"></script>
        <script src='//cdnt.netcoresmartech.com/smartechclient.js'></script>
        
        
        <script src="https://accounts.google.com/gsi/client" async defer></script>

        <style type="text/css">
            
            .red{
                color: red !important;
            }
        </style>

        <style type="text/css">
    
        /*    css modal*/

        /**
         * Box model adjustments
         * `border-box`... ALL THE THINGS - http://cbrac.co/RQrDL5
         */

        *,
        *:before,
        *:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        /**
         * 1. Force a vertical scrollbar - http://cbrac.co/163MspB
         * NOTE: Use `text-rendering` with caution - http://cbrac.co/SJt8p1
         * NOTE: Avoid the webkit anti-aliasing trap - http://cbrac.co/TAdhbH
         * NOTE: IE for Windows Phone 8 ignores `-ms-text-size-adjust` if the
         *       viewport <meta> tag is used - http://cbrac.co/1cFrAvl
         */

        html {
          font-size: 100%;
          overflow-y: scroll; /* 1 */
          min-height: 100%;
        }

        /**
         * 1. Inherits percentage declared on above <html> as base `font-size`
         * 2. Unitless `line-height`, which acts as multiple of base `font-size`
         */

        body {
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1em;   /* 1 */
          line-height: 1.5; /* 2 */
          color: #444;
        }

        /* Page wrapper */
        .wrapper {
          width: 90%;
          max-width: 800px;
          margin: 4em auto;
          text-align: center;
        }

        /* Icons */
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: middle;
          fill: currentcolor;
        }

        /* Headings */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          font-weight: 700;
          font-family: inherit;
          line-height: 1.333;
          text-rendering: optimizeLegibility;
        }

        /**
         * Modals ($modals)
         */

        /* 1. Ensure this sits above everything when visible */
        .modal {
            position: absolute;
            z-index: 10000; /* 1 */
            top: 0;
            left: 0;
            visibility: hidden;
            width: 100%;
            height: 100%;
        }

        .modal.is-visible {
            visibility: visible;
        }

        .modal-overlay {
          position: fixed;
          z-index: 10;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: hsla(0, 0%, 0%, 0.5);
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 0.3s, opacity 0.3s;
        }

        .modal.is-visible .modal-overlay {
          opacity: 1;
          visibility: visible;
          transition-delay: 0s;
        }

        .modal-wrapper {
          position: absolute;
          z-index: 9999;
          top: 6em;
          left: 50%;
          width: 32em;
          margin-left: -16em;
          background-color: #fff;
          box-shadow: 0 0 1.5em hsla(0, 0%, 0%, 0.35);
        }

        .modal-transition {
          transition: all 0.3s 0.12s;
          transform: translateY(-10%);
          opacity: 0;
        }

        .modal.is-visible .modal-transition {
          transform: translateY(0);
          opacity: 1;
        }

        .modal-header,
        .modal-content {
          padding: 1em;
        }

        .modal-header {
          position: relative;
          background-color: #fff;
          box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.06);
          border-bottom: 1px solid #e8e8e8;
        }

        .modal-close {
          position: absolute;
          top: 0;
          right: 0;
          padding: 1em;
          color: #aaa;
          background: none;
          border: 0;
        }

        .modal-close:hover {
          color: #777;
        }

        .modal-heading {
          font-size: 1.125em;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .modal-content > *:first-child {
          margin-top: 0;
        }

        .modal-content > *:last-child {
          margin-bottom: 0;
        }
        .close{
            position:absolute;
            top:0;
            right: 0;
        }
        .close i{
            font-size: 30px;
        }

        /*end modal*/
        </style>
    </head>
    <body class="index-page">
        <header>
            <div class="container-fluid">
                <div class="main-wrap">
                    <div class="left-wrap">
                        <div class="button-hambuger"><span class="mdi mdi-menu"></span></div>

                        @if(\Request::route()->getName()=='login-users'||\Request::route()->getName()=='registerClientUser'||\Request::route()->getName()=='job_details'||\Request::route()->getName()=='all_job'||\Request::route()->getName()=='filters'||\Request::route()->getName()=='update-password-user')
                        <div class="logo"><a href="{{ route('home') }}  " title="Tuyển dụng & Tìm kiếm việc làm nhanh" ><img src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></a></div>

                        @else

                         <div class="logo"><a href="{{ route('show-index') }}  " title="Tuyển dụng & Tìm kiếm việc làm nhanh" ><img src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></a></div>
                        @endif

                        <div class="main-menu">
                            <ul class="menu">
                              
                            </ul>
                        </div>
                    </div>
                    <div class="right-wrap">
                       


                        @if(\Request::route()->getName()=='login-users'||\Request::route()->getName()=='registerClientUser'||\Request::route()->getName()=='job_details'||\Request::route()->getName()=='all_job'||\Request::route()->getName()=='filters')
                        <div class="main-login dropdown">
                          

                           @if (count($errors) > 0)
                               <div class="alert alert-danger">
                                   <ul>
                                       @foreach ($errors->all() as $error)
                                           <li style="color: red">{{ $error }}</li>
                                       @endforeach
                                   </ul>
                               </div>
                           @endif

                            @if(!empty(@session()->get('error')))

                                <div class="alert alert-danger">
                                   <ul>
                                      
                                        <li style="color: red">{{ @session()->get('error') }}</li>
                                      
                                   </ul>
                               </div>
                            @endif   

                           

                            @if (Auth::check()) 
                            
                                <div class="titles-login"><a href="{{ route('user-dashboard') }}">Xin chào {{ Auth::user()->name }}</a></div>

                            
                            @else

                                <div class="title-login"><a href="javascript:;" title="Đăng nhập"> Đăng nhập</a></div>

                            
                            @endif


                            <div class="dropdown-menu">
                                <div class="login-wrapper">
                                    <form name="header_login" id="header_login" method="post" action="{{ route('login-user') }}" autocomplete="off">
                                         @csrf
                                        <div class="row">
                                            <div class="form-group col-12">
                                                <input type="text" name="emails" placeholder="Email hoặc Tên đăng nhập" autocomplete='off'>
                                            </div>
                                            <div class="form-group col-8">
                                                <input type="password" name="passwords" placeholder="Mật khẩu" autocomplete='off'>
                                            </div>
                                            <div class="form-group col-4">
                                                <input type="hidden" name="index" value= "index" />  
                                                <button type="submit">Đăng nhập</button>
                                            </div>
                                            <div class="form-group form-check col-12">
                                                <input type="checkbox" name="chkSave" value="1">
                                                <label>Tự động đăng nhập</label>
                                            </div>
                                        </div>
                                        <a class="forget-password" href="javascript:void(0)">Quên mật khẩu?</a>
                                    </form>
                                    <div class="sign-in-by">
                                        <span>Đăng nhập bằng</span>
                                        <ul>
                                            <li><a href="javascript:void(0);" onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaw==');" title="Login Facebook"><i class="fa fa-facebook-official"></i></a></li>
                                            <li><a href="javascript:void(0);" onclick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');" title="Login Google"><i class="fa fa-google-plus-square"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="main-employer dropdown">
                            <a href="{{ route('register_employer') }}" title="Đăng tuyển, Tìm ứng viên">
                                <div class="dropdown-toggle">
                                    <h4>Dành cho nhà tuyển dụng</h4>
                                    <p>Đăng tuyển, Tìm ứng viên</p>
                                </div>
                            </a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="{{ route('employers_login_fe') }}" title="Đăng nhập">Đăng nhập</a></li>
                                    <li><a href="{{ route('form_recruit') }}" title="Đăng Tuyển Dụng">Đăng Tuyển Dụng</a></li>
                                   <!--  <li><a href="javascript:void(0)" title="Tìm Ứng Viên">Tìm Ứng Viên</a></li>
                                    <li><a href="javascript:void(0)" title="Sản phẩm và Dịch vụ">Sản phẩm và Dịch vụ</a></li> -->
                                </ul>
                            </div>
                        </div>

                        @else
                            
                            @if(!Auth::guard('employer_register')->check())
                            <div class="main-login dropdown">
                                @if (Auth::guard('employer_register')->check()) 
                            
                                <div class="titles-login"><a href="{{ route('user-dashboard') }}">Xin chào {{ Auth::guard('employer_register')->name }}</a></div>

                            
                                @else

                                    <div class="title-login"><a href="javascript:;" title="Đăng nhập">Đăng nhập</a></div>

                                
                                @endif

                               
                                 <div class="dropdown-menu">
                                    <div class="login-wrapper">
                                       <form method="post" action="{{ route('loginEmployer') }}" id="frm_login_header">
                                          @csrf
                                          <div class="row">
                                             <div class="form-group col-12">
                                                <input type="text" placeholder="Email/Tên đăng nhập"  autocomplete="off"  id="username_box" name="email">
                                             </div>
                                             <div class="form-group col-8">
                                                <input type="password" placeholder="Mật khẩu" id="password_box" name="password" autocomplete="off">
                                             </div>
                                             <div class="form-group col-4">
                                                <input type="hidden" name="csrf_token_login" value= "7e7e04f06310c940562b558142ad1436eee6c56ad49b67af45cb527256c5f388" />
                                                <button type="submit">Đăng nhập</button>
                                             </div>
                                          </div>
                               
                                          <a class="forget-password register" href="">Đăng ký</a>
                                       </form>
                                    </div>
                                 </div>
                            </div>
                            @endif

                            <!-- <div class="main-register"><a href="{{ route('register_employer') }}">Đăng ký</a></div> -->
                            <div class="main-noti" style="display: none"><a href="javascript:void(0);"> <span class="mdi mdi-cart"></span></a></div>


                             @if(Auth::guard('employer_register')->check())

                            <div class="main-language dropdown">
                                 <div class="dropdown-toggle">
                                    <p>Xin chào {{ Auth::guard('employer_register')->user()->name_company }}</p>
                                </div> 
                                <div class="dropdown-menu">

                                    <div class="item">
                                       <a class="dropdown-item" href="{{ route('index_employer') }}" title="Change language">Dashboard</a>
                                    </div>
                                    
                                    <div class="item">
                                       <a class="dropdown-item" href="{{ route('employers_info') }}" title="Change language">Thông tin Doanh Nghiệp</a>
                                    </div>
                                    <div class="item">
                                       <a class="dropdown-item" href="{{ route('employers-info-list') }}" title="Change language">Quản lý đăng tuyển</a>
                                    </div>

                                    

                                    <div class="item">
                                       <a class="dropdown-item" href="{{ route('employer-logout') }}" title="Change language">Logout</a>
                                    </div>

                                </div>
                            </div>

            
                            @endif

                            


                            <div class="main-candidates">
                                <a href="{{ route('registerClientUser') }}">
                                    
                                    <h4>Dành cho Ứng Viên</h4>
                                 </a>
                            </div>

                            @endif



                    </div>
                </div>
            </div>
            <div class="mobile-menu">
                <div class="mobile-wrap">
                    <div class="header-logo"><a href="javascript:void(0)" title="Tuyển dụng & Tìm kiếm việc làm nhanh"><img class="lazy-bg" data-src="" src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></a></div>
                    <div class="header-bottom">
                        <div class="header-bottom-top">
                            <div class="profile">
                                <!-- <div class="avatar"><img class="lazy-bg" data-src="./img/user_circle.png" src="../kiemviecv32/images/graphics/blank.gif" alt="user circle"></div> -->
                                <div class="username">
                                    <p>welcome to vieclamngon.vn</p>
                                </div>
                                <div class="back-menu-normal"><em class="mdi mdi-arrow-left"></em></div>
                            </div>
                            <div class="menu">
                                <ul class="menu-normal">
                                    <li class="active"><a href="javascript:void(0)" title="Tuyển dụng & Tìm kiếm việc làm nhanh"> <i class="mdi mdi-home-outline"></i>Home</a></li>
                                    <li class="dropdown-mobile">
                                        <a href="javascript:void(0);" title="Tìm Việc Làm"> <i class="mdi mdi-magnify"></i>Tìm Việc Làm</a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="javascript:void(0)" title="Việc làm mới nhất"> <i class="fa fa-thumb-tack"></i>Việc làm mới nhất</a></li>
                                                <li><a href="javascript:void(0)" title="Ngành nghề / Địa điểm"> <i class="fa fa-location-arrow"></i>Ngành nghề / Địa điểm</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="javascript:void(0)" title="CV Hay"> <i class="mdi mdi-file-document-edit-outline"></i>CV Hay</a></li>
                                    <li><a href="javascript:void(0)" title="VietnamSalary"> <i class="mdi mdi-currency-usd"></i>VietnamSalary</a></li>
                      
                                    <li><a href="javascript:void(0)" title="Cẩm Nang"> <i class="mdi mdi-lightbulb-on-outline"></i>Cẩm Nang</a></li>
                                    <li><a href="javascript:void(0)" title="Tính Lương"> <i class="mdi mdi-calculator"></i>Tính Lương</a></li>
                                </ul>
                            </div>
                            <div class="authentication-links">
                                <ul>

                                    <li><a href="javascript:void(0)" title="Đăng nhập"> <i class="mdi mdi-login-variant"></i>Đăng nhập</a></li>
                                    <li><a href="javascript:void(0)" title="Đăng ký"> <i class="mdi mdi-account-plus-outline"></i>Đăng ký</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="header-bottom-bottom">
                            <a href="{{ route('register_employer') }}" title="Dành cho nhà tuyển dụng">
                                <div class="employer-site">
                                    <h4>Dành cho nhà tuyển dụng</h4>
                                    <p>Đăng tuyển, Tìm ứng viên</p>
                                </div>
                            </a>
                            <div class="header-alert">
                                <ul>
                                    <li><a href="javascript:void(0)" title="Thông Báo Việc Làm"> <i class="mdi mdi-bell-outline"></i><span>Thông Báo Việc Làm</span></a></li>
                                    <li><a href="javascript:void(0)" title="Change language"> <i class="mdi mdi-web"></i><span>English</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop"></div>
        </header>


       @yield('content')

        <footer>
            <div class="container">
                <section class="top-footer cb-section cb-section-border-bottom">
                    <div class="row">
                        <div class="col-lg-12 logo"><img class="lazy-bg" data-src="{{ asset('images/template/logo/logo.png') }}" src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng & Tìm kiếm việc làm nhanh"></div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Dành Cho Ứng Viên</h3>
                                <ul>
                                    <li><a  href="javascript:void(0)" title="Việc làm mới nhất">Việc làm mới nhất</a></li>
                                    <li><a  href="javascript:void(0)" title="CV Hay">CV Hay</a></li>
                                    <li><a  href="javascript:void(0)" title="VietnamSalary">VietnamSalary</a></li>
             
                                    <li><a  href="javascript:void(0)" title="Cẩm Nang">Cẩm Nang</a></li>
                                    <li><a  href="javascript:void(0)" title="IT Blogs">IT Blogs</a></li>
                                    <li><a  href="javascript:void(0)" title="Ứng Dụng Di Động">Ứng Dụng Di Động</a></li>
                                    <li><a  href="javascript:void(0)" title="Sơ Đồ Trang Web">Sơ Đồ Trang Web</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Nhà Tuyển Dụng</h3>
                                <ul>
                                    <li><a  href="javascript:void(0)" title="Đăng Tuyển Dụng">Đăng Tuyển Dụng</a></li>
                                    <li><a  href="javascript:void(0)" title="Tìm Hồ Sơ">Tìm Hồ Sơ</a></li>
                                    <li><a  href="javascript:void(0)">Giải Pháp Talent Solution</a></li>
                                    <li><a  href="javascript:void(0)" title="Sản Phẩm Dịch Vụ">Sản Phẩm Dịch Vụ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Trung tâm trợ giúp</h3>
                                <ul>
                                  
                                    <li><a  href="javascript:void(0)" title="Chính Sách BV Thông Tin">Chính Sách BV Thông Tin</a></li>
                                    <li><a  href="javascript:void(0)" title="Chính sách GDPR">Chính sách GDPR</a></li>
                                    <li><a  href="javascript:void(0)" title="Quy chế sàn giao dịch">Quy chế sàn giao dịch</a></li>
                                    <li><a  href="javascript:void(0)" title="Thỏa thuận sử dụng">Thỏa thuận sử dụng</a></li>
                                    <li><a  href="javascript:void(0)" title="Quy định bảo mật">Quy định bảo mật</a></li>
                                    <li><a  href="javascript:void(0)" title="QT Giải Quyết Tranh Chấp">QT Giải Quyết Tranh Chấp</a></li>
                                    <li><a  href="javascript:void(0)" title="Trợ giúp">Trợ giúp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Website Đối Tác</h3>
                                <ul>
                                    <li><a  href="javascript:void(0)">Vieclam.Tuoitre.vn</a></li>
                                    <li><a  href="javascript:void(0)">Vieclam.Vietnamnet.vn</a></li>
                                    <li><a  href="javascript:void(0)">Vieclam.Thanhnien.vn</a></li>
                                    <li><a  href="javascript:void(0)">VieclamIT.vn</a></li>
                                    <li><a  href="javascript:void(0)">Liên Hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </section>
               
            </div>
        </footer>

        <div class="modal modal-update-password">
            <div class="modal-overlay modal-toggle"></div>
            <div class="modal-wrapper modal-transition">
                <div class="modal-header">
                    <button class="modal-close modal-toggle">
                        <svg class="icon-close icon" viewBox="0 0 32 32">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <h2 class="modal-heading">Quên mật khẩu</h2>
                </div>
                <div class="modal-body">
                    <div class="modal-content">

                        <form name="frmRegister" id="frmRegister" method="post" action="{{ route('send-mail-reset-pass') }}" autocomplete="off">
                            @csrf

                            <h3>Vui lòng nhập email của bạn và click Gửi.</h3>
                            <div class="form-group form-text">

                                <label for="">* Email</label>

                                <br>

                                <input name="emails" id="emails"  maxlength="50" type="text"   autocomplete="off" value="" required>
                                
                                <span class="error_email" style="display:none"></span>
                            </div>

                            <br>

                            <button type="submit" class="btn-gradient">Gửi</button>

                        </form>
                       
                    </div>
                </div>

                <div class="close"><a href="javascript:void(0)" onclick="closeModal()"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div>
            </div>
        </div>

        <script type="text/javascript">

            function closeModal() {
                  $('.modal-update-password').removeClass('is-visible');
            }  


            $('.forget-password').on('click', function(e) {

                e.preventDefault();
                $('.modal-update-password').toggleClass('is-visible');

            });


            
            function apply(id, job_id) {

                 $.ajax({

                    type: 'GET',
                    url: "{{ route('apply-job') }}",
                    data: {
                        job: job_id,
                        employ:id
                    
                        
                    },
                    success: function(result){

                        if(result==='chưa đăng nhập'){

                            window.location.href = "{{ route('login-users')  }}";
                        }
                        else{
                            $('.btn-gradient').text('Đã ứng tuyển');
                            alert('thanh cong');
                        }
                        
                        // console.log(result);
                        // $('tbody').append(result);
                      
                       
                    }
                });
            }

        </script>
       
        
        <script src="{{ asset('js/jskcommon.js') }}"></script>

        <script type="text/javascript">

            function unique_arr(arr) {
                let newArr = arr.reduce(function (accumulator, element) {
                    if (accumulator.indexOf(element) === -1) {
                        accumulator.push(element)
                    }
                    return accumulator
                }, [])
                return newArr
            }

            function saveJob(id){
                job =  JSON.parse(window.localStorage.getItem('job'));

                if(job==null){
                    job = [];
                }

                job.push(id);

                job = unique_arr(job);

                job = JSON.stringify(job);

                localStorage.clear();

                window.localStorage.setItem('job', job);

                $('#job_'+id).addClass('red');

            
                alert('save thành công');

            }

             job =  JSON.parse(window.localStorage.getItem('job'));

             for(i=0; i<job.length; i++){

                $('.job-item #job_'+job[i]).addClass('red');
             }

        </script>

        @stack('js')
    </body>
</html>    