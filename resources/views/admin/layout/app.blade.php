<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Trang quản trị người dùng</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.css"
            integrity="sha512-EzrsULyNzUc4xnMaqTrB4EpGvudqpetxG/WNjCpG6ZyyAGxeB6OBF9o246+mwx3l/9Cn838iLIcrxpPHTiygAA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- AdminLTE -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css"
            integrity="sha512-mxrUXSjrxl8vm5GwafxcqTrEwO1/oBNU25l20GODsysHReZo4uhVISzAKzaABH6/tTfAxZrY2FprmeAP5UZY8A=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- iCheck -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/icheck-bootstrap/3.0.1/icheck-bootstrap.min.css"
            integrity="sha512-8vq2g5nHE062j3xor4XxPeZiPjmRDh6wlufQlfC6pdQ/9urJkU07NM0tEREeymP++NczacJ/Q59ul+/K2eYvcg=="
            crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css"
            integrity="sha512-nMNlpuaDPrqlEls3IX/Q56H36qvBASwb3ipuo3MxeWbsQB1881ox0cRv7UPTgBlriqoynt35KjEwgGUeUXIPnw=="
            crossorigin="anonymous"/>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css"
            integrity="sha512-aEe/ZxePawj0+G2R+AaIxgrQuKT68I28qh+wgLrcAJOz3rxCP+TwrK5SPN+E5I+1IQjNtcfvb96HDagwrKRdBw=="
            crossorigin="anonymous"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="https://dienmaynguoiviet.vn/js/ckeditor/ckeditor.js?ver=1"></script>
        <!--    <script src=https://dienmaynguoiviet.vn/js/ckfinder/ckfinder.js></script> -->
        <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
        <style>
            #box_tuvan{
            display:none !important;
            }
            .btn-group a{
            font-size: 22px;
            }
            .btn-danger{
            font-size: 22px;
            }
            .accept-find{
            width: 12%;
            padding: 2px;
            cursor: pointer;
            }
        </style>
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <!-- Main Header -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                </ul>
                <div>
                    <form class="form-inline active-pink-3 active-pink-4 " method="get" action="https://dienmaynguoiviet.vn/admins/find-product">
                        <button><i class="fas fa-search" aria-hidden="true"></i></button>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" name="search">
                    </form>
                </div>

                <?php 

                    $user = Auth::guard('admin')->user()->name;

                ?>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown user-menu">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="https://assets.infyom.com/logo/blue_logo_150x150.png"
                            class="user-image img-circle elevation-2" alt="User Image">
                        <span class="d-none d-md-inline">admin</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <!-- User image -->
                            <li class="user-header bg-primary">
                                <img src="https://assets.infyom.com/logo/blue_logo_150x150.png"
                                    class="img-circle elevation-2"
                                    alt="User Image">
                                <p>
                                    {{ @$user }}
                                    <small>auth.app.member_since Nov. 2021</small>
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <a href="#" class="btn btn-default btn-flat">Profile</a>
                                <a href="{{ route('admin-logout') }}" class="btn btn-default btn-flat float-right">
                                auth.sign_out                        </a>
                                <form id="logout-form" action="https://dienmaynguoiviet.vn/logout" method="POST" class="d-none">
                                    <input type="hidden" name="_token" value="AHESRRqb0xWlPaXVsH9FEanXnrsLfHxHYI10slaJ">                        
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="https://dienmaynguoiviet.vn" class="brand-link" target="_blank">
                <img src="https://assets.infyom.com/logo/blue_logo_150x150.png"
                    alt="DIENMAYNGUOIVIET Logo"
                    class="brand-image img-circle elevation-3">
                <span class="brand-text font-weight-light">Admin</span>
                </a>
                <div class="sidebar">
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <!-- <li class="nav-item">
                                <a href="https://dienmaynguoiviet.vn/admins/banners"
                                   class="nav-link ">
                                    <p>Banners</p>
                                </a>
                                </li> -->
                            <style type="text/css">
                                .child-nav{
                                margin-left: 15px;
                                }
                            </style>
                            <li>
                                <a href="https://dienmaynguoiviet.vn/admins/home"
                                    class="nav-link " style="width: 68%;">
                                    <p>Trang chủ</p>
                                </a>
                            </li>
                          
                            <li class="nav-item" style="display: flex; height:44px;"  >
                                <a href="{{ route('admin-view-Listboard') }}"
                                    class="nav-link " style="width: 68%;">
                                    <p>Ứng viên</p>
                                </a>
                                <span class="btn btn-link open" style="width: 12%;">+</span>
                            </li>


                            <li class="nav-item" style="display: flex; height:44px;"  >
                                <a href="{{ route('admin-list-employer') }}"
                                    class="nav-link " style="width: 68%;">
                                    <p>Nhà tuyển dụng</p>
                                </a>
                                <span class="btn btn-link open" style="width: 12%;">+</span>
                            </li>

                            <li class="nav-item" style="display: flex; height:44px;"  >
                                <a href="{{ route('list-post') }}"
                                    class="nav-link " style="width: 68%;">
                                    <p>Bài viết</p>
                                </a>
                                <span class="btn btn-link open" style="width: 12%;">+</span>
                            </li>
                            

                            
                          
                            <style type="text/css">
                                .child-nav a{
                                width: 100%;
                                }
                            </style>
                            <script type="text/javascript">
                                $('.child-nav').hide();
                                
                                $('.child-navs').hide();
                                
                                $(".open").bind("click", function(){
                                
                                    var acction = $(".open").text();
                                
                                    if(acction =='+'){
                                        $('.child-nav').show();
                                        $('.open').text('-');
                                    }
                                    else{
                                        $('.child-nav').hide();
                                        $('.open').text('+');
                                    }
                                });
                                
                                $(".opens-fe").bind("click", function(){
                                
                                    var acction = $(this).text();
                                
                                    if(acction =='+'){
                                        
                                        $(".opens-fe").text('-');
                                        $('.child-navs').show();
                                    }
                                    else{
                                        
                                        $(this).text('+');
                                        $('.child-navs').hide();
                                    }
                                });
                                
                            </script>
                            <li class="nav-item">
                                <a href="{{  route('admin-banner')  }}"
                                    class="nav-link ">
                                    <p>Banner</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <section class="content">
                    <link rel="stylesheet" type="text/css" href="https://dienmaynguoiviet.vn/css/colorbox">
                    <style type="text/css">
                        .div-box {
                        border: 1px solid #a0a0a0;
                        }
                        #tabMenuDmPro {
                        border-bottom: 0 solid #999;
                        width: 100%;
                        }
                        .text_arrow {
                        color: #000039;
                        font-weight: 700;
                        margin-bottom: 6px;
                        margin-top: 6px;
                        }
                        #tabMenuDmPro a:hover span, #tabMenuDmPro .curent a span {
                        background-position: 100% -29px;
                        color: #000;
                        text-decoration: none;
                        }
                        #tabMenuDmPro a:hover, #tabMenuDmPro .curent a {
                        background-position: 0 -29px;
                        }
                        .div-box {
                        border: 1px solid #a0a0a0;
                        }
                        #tabMenuDmPro .bgg {
                        background: url(../images/bgg_tk.gif);
                        height: 29px;
                        width: 100%;
                        border-left: 0 solid #b1b1b1;
                        border-right: 0 solid #b1b1b1;
                        }
                        #tabMenuDmPro a span {
                        background: url(https://dienmaynguoiviet.vn/images/template/bgg_tk_right.jpg) right top no-repeat;
                        display: block;
                        color: #000;
                        text-decoration: none;
                        float: none;
                        padding: 10px 7px 4px 6px;
                        }
                        #tabMenuDmPro a {
                        float: left;
                        background: url(https://dienmaynguoiviet.vn/images/template/bgg_tk_left.jpg) left top no-repeat;
                        text-decoration: none;
                        padding: 0 0 0 8px;
                        }
                        td{
                        font-size: 12px;
                        }
                        span{
                        font-size: 12px;
                        }
                        ul, ol {
                        list-style: none;
                        }
                    </style>
                    <div class="paddings">
                        <style type="text/css">
                            .div-box table { width:100%;}


                        </style>


                         @yield('content')


                        <script type="text/javascript">
                            function home_report(w){
                            	$.get("/admin/ajax/report_home.php", {
                            	    action : w
                            	}, function(data) {
                            	    $("#home_report_"+w).html(data);
                            	} );
                            }
                            
                               function report_top_article(type, period, holder, limit, from_date, to_date){
                                   $('#'+holder).html('<img src=/includes/images/awaiting.gif> vui lòng chờ ...');
                                   $.get("/admin/ajax/report.php",{
                                       action : "report-top-article",
                                       type : type ,
                                       period : period,
                                       limit : limit,
                                       from_date : from_date,
                                       to_date : to_date
                                   },function(data){
                                       $('#'+holder).html(data);
                                   });
                               }
                            
                            $(function(){
                            	$('.thickbox').colorbox({
                            	    iframe: true,
                                       fixed : true,
                                       width:'70%',
                                       height:'80%'
                            	});
                            });
                        </script>   
                        <input type="hidden" id="current_use1" value="1">
                        <script>
                            function ajax_cate(idmau) {
                              var current_use = document.getElementById('current_use1').value;
                              document.getElementById('select_'+current_use).className = '';
                              document.getElementById('current_use1').value = idmau;
                              document.getElementById('select_'+idmau).className = 'curent';
                              document.getElementById('content_'+current_use).style.display = 'none';
                              //document.getElementById('content_'+idmau).style.display = 'block';
                              $("#content_"+idmau).fadeIn("slow");
                            
                              if(idmau == 6) {
                                 report_top_article('visit','mo', 'top_article_visit', 10);
                              }
                            }
                        </script>
                    </div>
                </section>
            </div>
            <!-- Main Footer -->
            <footer class="main-footer">
                <div class="float-right d-none d-sm-block">
                    <b>Version 3.0 Dienmaynguoiviet</b> 
                </div>
            </footer>
        </div>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
        <!-- AdminLTE App -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/adminlte.min.js"
            integrity="sha512-AJUWwfMxFuQLv1iPZOTZX0N/jTCIrLxyZjTRKQostNU71MzZTEPHjajSK20Kj1TwJELpP7gl+ShXw5brpnKwEg=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
            integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"
            integrity="sha512-GDey37RZAxFkpFeJorEUwNoIbkTwsyC736KNSYucu1WJWFK9qTdzYub8ATxktr6Dwke7nbFaioypzbDOQykoRg=="
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"
            integrity="sha512-2ImtlRlf2VVmiGZsjm9bEyhjGW4dU7B6TNwh/hx/iSByxNENtj3WVE6o/9Lj4TJeVXPi4bnOIMXFIJJAeufa0A=="
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/1.3/bootstrapSwitch.min.js"
            integrity="sha512-DAc/LqVY2liDbikmJwUS1MSE3pIH0DFprKHZKPcJC7e3TtAOzT55gEMTleegwyuIWgCfOPOM8eLbbvFaG9F/cA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            $(function () {
                bsCustomFileInput.init();
            });
            
            $("input[data-bootstrap-switch]").each(function(){
                $(this).bootstrapSwitch('state', $(this).prop('checked'));
            });
            
            
            
            
            $(".fa-edit").hover(function(){
                const parent = $(this).parent();
            
                parent.addClass('hover-edit');
            
                $(this).remove();
            
                $('.hover-edit').text('sửa');
            });
            
            $(".fa-filter").hover(function(){
                const parent = $(this).parent();
            
                parent.addClass('hover-filter');
            
                $(this).remove();
            
                $('.hover-filter').text('lọc');
            });
            
            $(".fa-image").hover(function(){
                const parent = $(this).parent();
            
                parent.addClass('hover-image');
            
                $(this).remove();
            
                $('.hover-image').text('ảnh');
            });
            
            $(".fa-gift").hover(function(){
                const parent = $(this).parent();
            
                parent.addClass('hover-gift');
            
                $(this).remove();
            
                $('.hover-gift').text('quà');
            });
            
            $(".fa-eye").hover(function(){
                const parent = $(this).parent();
            
                parent.addClass('hover-eye');
            
                $(this).remove();
            
                $('.hover-eye').text('view');
            });
            
            // $(".fa-trash-alt").hover(function(){
            //     const parent = $(this).parent();
            
            //     parent.addClass('fa-trash-alt');
            
            //     $(this).remove();
            
            //     $('.fa-trash-alt').text('xóa');
            // });
            
            
            // $(".hover-edit" ).mouseout(function() {
            //     alert('1');
            //    // $(this).text('');
            
            //    // $(this).append('<i class="far fa-edit"></i>');
            //    // $(this).removeClass('hover-edit');
            // });
            
            
        </script>
    </body>
</html>