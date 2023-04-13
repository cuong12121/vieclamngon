    @extends('frontend.layout.appfe')
    @section('content')
    <main>
        <style type="text/css">
            .alert-danger{
                color: red;
                text-align: center;
            }
            .main-form .form-group.form-text label {

                text-align: left;
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
        <link href="https://careerbuilder.vn/vi/jobseekers/register" rel="canonical" />
        <link rel="stylesheet" type="text/css" href="{{ asset('css/global.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/global1.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/register.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/register1.css') }}">
         
        <section class="cb-section">
            <div class="container">
            
                @if (session('success'))

                    <script type="text/javascript">
                        
                        alert('{{ session("success") }}');
                    </script>
                    <div class="alert alert-success" role="alert">
                       
                    </div>
                @endif
                <div class="cb-title cb-title-center">
                    <h2>Tham gia ngay hôm nay</h2>
                </div>

                @foreach ($errors->all() as $error)

                    <div class="alert alert-danger" role="alert">
                        <li>{{ $error }}</li>
                    </div>
                   
                @endforeach 

                @if (session('error'))

                    <div class="alert alert-danger" role="alert">
                            {{ session('error') }}
                    </div>
                @endif
                <div class="box-shadown">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="information">
                                <div class="list-info" id="list-info">
                                    <div class="job-item">
                                        <div class="figure">
                                            <div class="image is-blue"><img class="lazy-bg" data-src="./img/job-alert/i1.png" alt=""></div>
                                            <div class="figcaption">
                                                <div class="title">
                                                    <h3>Thông báo việc làm</h3>
                                                </div>
                                                <div class="caption">
                                                    <p>Được cập nhật các cơ hội việc làm mới nhất từ nhiều công ty hàng đầu</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-item">
                                        <div class="figure">
                                            <div class="image is-green"><img class="lazy-bg" data-src="./img/job-alert/i2.png" alt=""></div>
                                            <div class="figcaption">
                                                <div class="title">
                                                    <h3>Kiếm việc dễ dàng</h3>
                                                </div>
                                                <div class="caption">
                                                    <p>Tìm được công việc bạn yêu thích phù hợp với kỹ năng và tiêu chí bạn quan tâm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-item">
                                        <div class="figure">
                                            <div class="image is-yellow"><img class="lazy-bg" data-src="./img/job-alert/i3.png" alt=""></div>
                                            <div class="figcaption">
                                                <div class="title">
                                                    <h3>Ứng tuyển nhanh chóng</h3>
                                                </div>
                                                <div class="caption">
                                                    <p>Dễ dàng ứng tuyển nhiều vị trí mà không cần mất nhiều thời gian</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="main-form">
                                <ul class="list-tabs">
                                    <li class="login-user"><a href="javascript:void(0)" title="Đăng Nhập ">Đăng Nhập </a></li>
                                  
                                </ul>
                                <!-- <div class="choose-follow">
                                    <p>Đăng nhập bằng</p>
                                    <ul class="list-follow">
                                        <li>
                                            <button class="fb" onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaz9jaGVjaz0xJm93bmVyPWtpZW12aWVjJmFwcGx5X3VybD1odHRwczovL2NhcmVlcmJ1aWxkZXIudm4vdmkvam9ic2Vla2Vycy9yZGxvZ2luc2M=');"><em class="fa fa-facebook"></em>Facebook</button>
                                        </li>
                                        <li>
                                            <button class="gg" onclick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');"><em class="fa fa-google"></em>Google</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="or-line"><span>hoặc </span></div> -->


                                <div class="login-form">
                           
                                    <div>
                                        <form name="frmRegister" id="frmRegister" method="post" action="{{ route('login-user') }}" autocomplete="off">
                                            @csrf
                                            <div class="form-group form-text">
                                                <input name="emails" id="emails"  maxlength="50" type="text"   autocomplete="off" value="">
                                                <label for="">* Email</label>
                                                <span class="error_email" style="display:none"></span>
                                            </div>
                                            <div class="form-group form-text">
                                                <input type="password" name="passwords" id="passwords" maxlength="255"   autocomplete="off" value="">
                                                <label for="">* Mật khẩu</label>
                                                <span class="error_password" style="display:none"></span>
                                            </div>

                                            <button class="btn-gradient">Đăng Nhập</button>

                                            <a href="javascript:void(0)" class="btn-gradient modal-button">Quên mật khẩu</a>

                            
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="modal">
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
        </section>

        <?php 
            $check_action = \Request::session()->pull('keys', 'default');
        ?>
        <script language="javascript" >

            function closeModal(argument) {
                  $('.modal').removeClass('is-visible');
              }  


            $('.modal-button').on('click', function(e) {

                e.preventDefault();
                $('.modal').toggleClass('is-visible');

            });




            $('.login-user a').click(function () {
                $('.login-user').addClass('active');
                $('.register-user').removeClass('active');
                 
                $('.register-form').hide();
                 $('.login-form').show();
                 
            })

            $('.register-user a').click(function () {

                $('.login-user ').removeClass('active');
                $('.login-form').hide();
                $('.register-form').show();

                $('.login-form').hide();
                $('.register-user').addClass('active');

            })    

            var language_register = {member_register_write_lastname:"Họ và tên lót", 
                    
                    js_register_email_not_exist:"Bạn có thể sử dụng địa chỉ email này.", 
                    js_register_email_not_input:"Email đăng nhập không hợp lệ.", 
                    message_common:"Thông báo", 
                    LANG_ERROR_EMAIL_IS_VALID:"Email của bạn không hợp lệ.",                   
                    member_register_write_firstname:"Tên",
                    member_guide_register_password:"Vui lòng nhập mật khẩu của bạn từ 6-15 ký tự.",                 
                    LANG_ERROR_PASSWORD_NULL:"Vui lòng nhập mật khẩu của bạn.", 
                    LANG_ERROR_PASSWORD_LENGTH:"Vui lòng nhập mật khẩu của bạn từ 6-15 ký tự.",
                    LANG_ERROR_PASSWORD_UNICODE:"Tên đăng nhập hoặc mật khẩu không trùng khớp",
                    LANG_ERROR_CONFIRM_PASSWORD:"Mật khẩu nhập không khớp. Vui lòng thử lại.",
                    LANG_ERROR_NAME_NULL:"Vui lòng nhập đầy đủ họ và tên của bạn.",
                    ERROR_FULL_FIRSTNAME_CHARACTER:"Tên không được nhập số và ký tự đặc biệt",
                    ERROR_FULL_LASTNAME_CHARACTER:"Họ và tên lót không được nhập số và ký tự đặc biệt",
                    LANG_ERROR_FIRSTNAME_NULL:"Nhập Tên của bạn",
                    LANG_ERROR_LASTNAME_NULL:"Nhập Họ và Tên Lót của bạn",
                    ERROR_FULL_NAME_CHARACTER:"Tên đầy đủ không cho phép nhập số và ký tự đặt biệt.",
                    LANG_ERROR_EMAIL_NULL:"Xin vui lòng nhập email của bạn.",
                    LANG_ERROR_EMAIL_IS_VALID:"Email của bạn không hợp lệ.",
                    LANG_ERROR_EMAIL_UNICODE:"Email không được nhập unicode",
                    member_register_write_email:"Email",
                    member_nospace:"Vui lòng không nhập khoảng trắng vào tên của bạn",          
                    LANG_ERROR_CHK_AGREE_CHECKED:"Bạn cần đồng ý với Quy định bảo mật và Thỏa thuận sử dụng của Careerbuilder.vn",  
                    member_register_write_password:"Mật khẩu"};
            if(typeof language === 'undefined')
              var language = language_register;
            else
              $.extend(language, language_register);    
        </script>
        <script>/*register.js*/
            $(document).ready(function() {
                $.validator.addMethod('fullname', function(value) {
                    var strCheck = /([^0-9\~\`\!\@\#\$\%\^\&\*\(\)\=\+\[\]\{\}\|\\\;\:\"\<\>\,\/\?]+)/g;
                    var reg = new RegExp(strCheck);
                    var strTemp = value.replace(reg, '');
                    return (strTemp == '') ? true : false;
                }, language.message_common);
                var emailold;
                $('#email').focusout(function() {
                    var emailnew = $(this).val();
                    if (emailnew == emailold)
                        return false;
                    else
                        emailold = emailnew;
                    return true;
                });
                $.validator.addMethod('emailexist', function(value) {
                    var email = $('#email').val();
                    var emailexist;
                    filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
                    // if (filter.test(email) && email != '') {
                    //     $.ajax({
                    //         type: "POST",
                    //         async: false,
                    //         url: PATH_KIEMVIEC + "jobseekers/member/emailexist",
                    //         data: {
                    //             'email': email
                    //         },
                    //         success: function(data) {
                    //             if (data == 1) {
                    //                 emailexist = false;
                    //             } else {
                    //                 emailexist = true;
                    //             }
                    //         }
                    //     });
                    //     return emailexist;
                    // } else {
                    //     return false;
                    // }
                }, language.message_common);
                $.validator.addMethod('requiredemail', function(value) {
                    var valemail = $.trim($('#email').val());
                    return (valemail != language.member_register_write_email && valemail != '') ? true : false;
                }, language.message_common);
                $.validator.addMethod('checkUnicode', function(value, element) {
                    return (!/\s/g.test(value) && !/[ạáàảãâậấầẩẫăặắằẳẫẠÁÀẢÃÂẬẤẦẨẪĂẶẮẰẲẪêẹéèẻẽếềểễệÊẸÉÈẺẼẾỀỂỄỆọộổỗốồôóòỏõơợớờởỡỌỘỔỖỐỒÔÓÒỎÕƠỢỚỜỞỠụưứừửữựúùủũỤƯỨỪỬỮỰÚÙỦŨịíìỉĩỊÍÌỈĨỵýỳỷỹỴÝỲỶỸđĐ]/.test(value));
                }, language.message_common);
                $.validator.addMethod("noSpace", function(value, element) {
                    if (value != language.member_register_write_firstname)
                        return value.indexOf(" ") < 0;
                    else
                        return true;
                }, language.message_common);
                $(function() {
                    $("#frmRegister").validate({
                        onkeyup: false,
                        rules: {
                            firstname: {
                                required: true,
                                fullname: true,
                                noSpace: true
                            },
                            lastname: {
                                required: true,
                                fullname: true
                            },
                            email: {
                                requiredemail: true,
                                email: true,
                                checkUnicode: true,
                                emailexist: true
                            },
                            password: {
                                required: true,
                                rangelength: [6, 15]
                            },
                            confirm_password: {
                                equalTo: "#password"
                            },
                            chkAgree: {
                                required: true
                            }
                        },
                        messages: {
                            lastname: {
                                required: language.LANG_ERROR_LASTNAME_NULL,
                                fullname: language.ERROR_FULL_LASTNAME_CHARACTER
                            },
                            firstname: {
                                required: language.LANG_ERROR_FIRSTNAME_NULL,
                                fullname: language.ERROR_FULL_FIRSTNAME_CHARACTER,
                                noSpace: language.member_nospace
                            },
                            email: {
                                requiredemail: language.LANG_ERROR_EMAIL_NULL,
                                email: language.LANG_ERROR_EMAIL_IS_VALID,
                                checkUnicode: language.LANG_ERROR_EMAIL_UNICODE,
                               
                            },
                            password: {
                                required: language.LANG_ERROR_PASSWORD_NULL,
                                rangelength: language.LANG_ERROR_PASSWORD_LENGTH,
                                validatePassUnicode: language.LANG_ERROR_PASSWORD_UNICODE
                            },
                            confirm_password: {
                                equalTo: language.LANG_ERROR_CONFIRM_PASSWORD,
                            },
                            chkAgree: {
                                required: language.LANG_ERROR_CHK_AGREE_CHECKED
                            }
                        },
                        errorPlacement: function(error, element) {
                            var errorSelector = '.error_' + element.attr('name');
                            $(errorSelector).html(error.html()).show();
                        },
                        invalidHandler: function(form, validator) {
                            var errors = validator.numberOfInvalids();
                            if (errors) {
                                validator.errorList[0].element.focus();
                            }
                        },
                        success: function(element) {

                            $('.error_' + element[0].htmlFor).hide();
                            element.remove();
                        }
                    });
                });
            });
        </script>
        <script language="javascript">
            $(document).ready(function(){
            });  
        </script>

        @if (session('alert'))

        <script type="text/javascript">
            alert('{{ session("alert") }}');
            
        </script>
        <?php
            Session::forget('alert');
        ?>
        
        @endif
        <div class="back-drop"></div>
    </main>
    @endsection