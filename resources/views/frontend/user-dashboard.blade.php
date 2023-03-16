
@extends('frontend.layout.app')

@section('content') 

<style type="text/css">
    .success{
        color: green !important;
    }
</style>

<?php 

    $listDefineJob = LIST_JOB;

    $address = ADDRESS;

    $checkTitle = App\Models\application::where('users_id', 6)->first();

   
    if(!empty($checkTitle)){

        if(!empty(json_decode($checkTitle->title)) &&!empty(json_decode($checkTitle->experience))&&!empty(json_decode($checkTitle->objective)) && !empty(json_decode($checkTitle->info)) && !empty(json_decode($checkTitle->education))&&!empty(json_decode($checkTitle->experience_details))){
            $checksucess = true;
        }
        else{
            $checksucess = false;
        }

    }

    
?>

<div class="content-inner">
    <div class="find-jobs-form">
        <div class="container-fluid">
            <div class="main-form">
                <div class="close-input-filter"><em class="lnr lnr-cross"></em></div>
                <form>
                    <div class="advanced-search">
                        <div class="form-group form-keyword">
                            <input type="search" class="keyword" name="keyword" id="keyword" placeholder="Chức danh, Kỹ năng, Tên công ty">
                            <div class="cleartext"><em class="mdi mdi-close-circle"></em></div>
                        </div>
                        <div class="form-group form-select-chosen">
                            <select id="industry" name="industry" class="chosen-select chosen-select-max-three" data-placeholder="Tất cả ngành nghề" multiple>
                                <option value="">Chọn ngành nghề</option>
                                @foreach($listDefineJob as $key => $value)
                                    <option class="css-1n7v3ny-option" value="{{ $key }}">{{ $value }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group form-select-chosen">
                            <select id="location" name="location" class="chosen-select chosen-select-max-three" data-placeholder="Tất cả địa điểm" multiple>
                                <option value="">Chọn địa điểm</option>
                                @foreach($address as $key => $value)
                                    <option value="{{ $key }}">{{ $value }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group find-jobs">
                            <button class="btn-gradient" onClick="return validDatasearchJobsByKeyword('vi');">
                                <p>TÌM VIỆC NGAY</p>
                                <span class="mdi mdi-magnify"></span> 
                            </button>
                        </div>
                        <div class="form-group animation">
                            <button class="btn-gradient" onClick="return validDatasearchJobsByKeyword('vi');">
                                <p>TÌM VIỆC NGAY</p>
                                <span class="mdi mdi-magnify"></span> 
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="dash-board-wrap">
            <div class="row mergebox">
                <div class="col-lg-12">
                    <div class="widget widget-2">
                        <div class="widget-head">
                            <div class="cb-title-h3">
                                <h3>Profile</h3>
                            </div>
                        </div>
                        <div class="widget-body">
                            <div class="row">
                                <div class="col-lg-4 col-xl-3">
                                    <div class="img-info">
                                        <div class="figure">
                                            <div class="image img-result hide">
                                                <input style="display: none;" onchange="return ajaxFileUpload();" type="file" class="file" id="fileAvatar" name="fileAvatar">
                                                <img id="img_mem_avatar" src="./img/dash-board/1.png" alt="Dao Cuong">
                                            </div>
                                            <div class="edit-image dropdown">
                                                <em class="mdi mdi-image-edit"></em>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li class="upload-pro"><a href="javascript:void(0);" onclick="choose_file();"> <em class="material-icons">add_photo_alternate</em><span>Tải hình ảnh</span></a></li>
                                                        <li class="view-pro"><a href="javascript:void(0);" onclick="removeAvarta();"> <em class="material-icons">highlight_off</em><span>Xóa hình ảnh</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mobile-show">
                                            <div class="cb-name">
                                                <h2>{{ Auth::user()->name }}</h2>
                                            </div>
                                            <div class="information">
                                                <div class="assistant" id="titleresume_16167824">Chưa cập nhật</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="col-lg-8 col-xl-9">
                                    <div class="cb-name">


                                        <h2>{{ Auth::user()->name }}</h2>
                                    </div>
                                    <div class="information">

                                        @if($checksucess===true)
                                        <div class="assistant">Đã cập nhật</div>

                                        @else

                                        <div class="assistant">Chưa cập nhật</div>

                                        @endif
                                        <ul class="desired">
                                            @if(!empty(json_decode($checkTitle->experience)))
                                            <li>
                                                <em class="material-icons">star</em>
                                                Kinh nghiệm:
                                                <p>{{ (json_decode($checkTitle->experience))->yearOfExperience.' năm'??'Chưa có kinh nghiệm' }}</p>
                                            </li>
                                            @endif
                                           <!--  <li>
                                                <em class="material-icons">person</em>
                                                <p>Cấp bậc mong muốn: <span>Chưa cập nhật</span></p>
                                            </li> -->
                                            <!-- <li>
                                                <em class="material-icons">attach_money</em>
                                                <p>Mức lương mong muốn: <span>Chưa cập nhật</span></p>
                                            </li> -->

                                             @if($checksucess===true)
                                            <li style="position: relative;">
                                                <em class="mdi mdi-calendar"></em>
                                                <p id="date_16167824">
                                                    Ngày cập nhật: {{ $checkTitle->updated_at->format('d/m/Y') }}
                                                    <a title="Cập nhật hồ sơ" href="javascript:void(0);" class="ac_refesh" rel="16167824">
                                                    <span class="material-icons refeshdate ">loop</span>
                                                    </a>
                                                </p>
                                            </li>
                                            @endif
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">

                                    
                                    @if($checksucess===true)

                                    <div class="progress-bar-status incomplete">
                                        <div class="profile-strength">
                                            <p>Mức độ hoàn thành: <span class="success">Đã Hoàn Tất</span></p>
                                        </div>
                                    </div>
                                    @else
                                       
                                    <div class="progress-bar-status incomplete">
                                        <div class="profile-strength">
                                            <p>Mức độ hoàn thành: <span>Chưa Hoàn Tất</span></p>
                                        </div>
                                        <div class="noti">
                                            <em class="mdi mdi-alert-circle-outline"></em>
                                            <p>Chưa hoàn thành. Bạn vui lòng cập nhật và hoàn thành hồ sơ</p>
                                        </div>
                                        <div class="progress-bar">
                                            <div class="progress">
                                                <progress class="progress-main" max="7" value="0"></progress>
                                            </div>
                                            <div class="progress-row">
                                                <div class="line active"></div>
                                                <div class="line "></div>
                                                <div class="line "></div>
                                                <div class="line "></div>
                                                <div class="line "></div>
                                                <div class="line "></div>
                                                <div class="line "><span class="success"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                </div>
                                
                                <div class="col-lg-12 function-bottom">
                                    <div class="button-list">
                                        @if($checksucess===true)
                                        <div class="item">
                                            <a id="btn_view_cbprofile" href="javascript:void(0);">
                                            <span class="mdi mdi-eye"></span>
                                            Xem hồ sơ
                                            </a>
                                        </div>
                                        <div class="item">
                                            <a href="javascript:void(0);" onclick="downloadCvProfile(16167824)">
                                            <span class="mdi mdi-download"></span>
                                            Tải hồ sơ
                                            </a>
                                        </div>
                                        @else

                                         <div class="item">
                                            <a title="Cập nhật hồ sơ" href="javascript:void(0);" class="ac_refesh" rel="16167824" >
                                            <span class="mdi mdi-rotate-3d-variant"></span>
                                            Cập nhật hồ sơ
                                            </a>
                                        </div>

                                        @endif
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row">
                
                <div class="col-sm-6 col-lg-3">
                    <div class="widget-1 b3">
                        <div class="widget-head">
                            <p>0</p>
                            <p>Việc làm đã lưu</p>
                        </div>
                        <div class="widget-body">
                            <div class="item">
                                <div class="nonum"><a href="javascript:void(0)">Xem thêm</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="widget-1 b4">
                        <div class="widget-head">
                            <p>0</p>
                            <p>Việc làm đã nộp</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="widget widget-4 attached-resume">
                        <div class="widget-head">
                            <div class="cb-title-h3">
                                <h3>Hồ sơ đính kèm</h3>
                            </div>

                            @if(empty(Auth::user()->cv))

                            <form method="POST" action="{{ route('upload-cv-file') }}" enctype="multipart/form-data">

                                @csrf
                                <div>
                                    
                                    <input type="file" id="file" name="file" accept="image/png, pdf/jpeg">

                                </div>
                                
                                <div>
                                    <button type="submit">uploads</button>
                                </div>
                                
                            </form>

                            @else
                            <span>Đã tồn tại file cv </span>

                            @endif
                            
                            <p>Ngoài hồ sơ, bạn có thể tạo hồ sơ đính kèm để ứng tuyển và  tìm kiếm bởi nhà tuyển dụng</p>
                        </div>
                       
                    </div>
                </div>
               
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="widget widget-6">
                        <div class="widget-head">
                            <div class="cb-title-h3">
                                <h3>Việc Làm Phù Hợp Với Bạn</h3>
                            </div>
                        </div>
                        <div class="apply-job-area">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="list-job jobs-list-ajax" id="jobs-list">
                                        <div class="item">
                                            <div class="ckb-item">
                                                <label class="container-ckb">
                                                <input type="checkbox" checked="checked" name="jobchk[]" value="35B95BD6">
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="job-item" id="job-item-35B95BD6">
                                                <div class="figure">
                                                    <div class="image"><a href="https://careerbuilder.vn/vi/nha-tuyen-dung/tcl-vietnam-corporation-limited.35A67A64.html" target="_blank" title="TCL (Vietnam) Corporation Limited"><img  class="lazy-bg" data-src="https://images.careerbuilder.vn/employer_folders/lot6/102756/79x79/174459logomoi.jpg" src="../kiemviecv32/images/graphics/blank.gif" alt="TCL (Vietnam) Corporation Limited"></a></div>
                                                    <div class="figcaption">
                                                        <div class="title"><a class="job_link" data-id="35B95BD6" href="https://careerbuilder.vn/vi/tim-viec-lam/thuc-tap-sinh-bo-phan-trade-marketing-gtm-trainee.35B95BD6.html" title="Thực tập sinh bộ phận Trade marketing- GTM Trainee" target="_blank">Thực tập sinh bộ phận Trade marketing- GTM Trainee</a></div>
                                                        <div class="caption">
                                                            <a class="company-name" target="_blank" href="https://careerbuilder.vn/vi/nha-tuyen-dung/tcl-vietnam-corporation-limited.35A67A64.html" title="TCL (Vietnam) Corporation Limited">TCL (Vietnam) Corporation Limited</a>
                                                            <p class="salary"><em class="fa fa-usd"></em> Cạnh Tranh</p>
                                                            <div class="location">
                                                                <ul>
                                                                    <li>Hà Nội</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <script>
                                            var check_all = "Chọn tất cả"
                                            var uncheck_all = "Bỏ chọn tất cả"
                                            $(document).ready(function(){
                                                var n = $( "input[name='jobchk[]']:checked" ).length;
                                                $( "#countjob" ).text("(" + n + ")");  
                                                $('#check-uncheck').text(uncheck_all);
                                                $( "input[name='jobchk[]']" ).click(function(){
                                                var n = $( "input[name='jobchk[]']:checked" ).length;
                                                $( "#countjob" ).text("(" + n + ")");
                                                if (n < 1){
                                                    $('.btn-apply-all').hide();
                                                    $('#check-uncheck').text(check_all);
                                                } else {
                                                    $('.btn-apply-all').show();
                                                    $('#check-uncheck').text(uncheck_all);
                                                }
                                                });
                                            
                                                $("#check-uncheck").click(function() {
                                                let n = $( "input[name='jobchk[]']:checked" ).length;
                                                if (n < 1){
                                                    $("input[type=checkbox]").prop("checked", true);
                                                    let n = $( "input[name='jobchk[]']:checked" ).length;
                                                    $( "#countjob" ).text("(" + n + ")");
                                                    $('.btn-apply-all').show();
                                                    $('#check-uncheck').text(uncheck_all);
                                                } else {
                                                    $("input[type=checkbox]").prop("checked", false);
                                                    let n = $( "input[name='jobchk[]']:checked" ).length;
                                                    $( "#countjob" ).text("(" + n + ")");
                                                    $('.btn-apply-all').hide();
                                                    $('#check-uncheck').text(check_all);
                                                }
                                              });
                                            });
                                        </script>
                                    </div>
                                    <div class="action">
                                        <div class="check-area">
                                            <a href="javascript:void(0)" id="check-uncheck"></a>
                                        </div>
                                    </div>
                                    <script>
                                        $(document).on("click", ".load-more", function(e){
                                          e.preventDefault();
                                          var link = $(this).find("a").attr("href");
                                          var load_job_search = $.ajax({
                                              url: link+'&ajax=2',
                                              dataType: 'json',
                                            }).done(function(data){
                                              $("#jobs-list").append(data.html);
                                              lazy_loadimg_list();
                                              if (data.paging_next !== null){
                                                $('.load-more > a').attr("href", data.paging_next);
                                              } else {
                                                $('.load-more').remove();
                                              }
                                            });
                                          $(".btn-apply-all").show();
                                        
                                          $("#check-uncheck").click(function() {
                                              let n = $( "input[name='jobchk[]']:checked" ).length;
                                              if (n < 1){
                                                  $("input[type=checkbox]").prop("checked", true);
                                                  let n = $( "input[name='jobchk[]']:checked" ).length;
                                                  $( "#countjob" ).text("(" + n + ")");
                                                  $('.btn-apply-all').show();
                                                  $('#check-uncheck').text(uncheck_all);
                                              } else {
                                                  $("input[type=checkbox]").prop("checked", false);
                                                  let n = $( "input[name='jobchk[]']:checked" ).length;
                                                  $( "#countjob" ).text("(" + n + ")");
                                                  $('.btn-apply-all').hide();
                                                  $('#check-uncheck').text(check_all);
                                              }
                                          });
                                        });
                                        
                                    </script>
                                </div>
                                <div class="col-lg-8" id="job-detail-template">
                                    <div class="detail-loading">
                                        <div class="job-desc">
                                            <div class="job-item">
                                                <div class="figure">
                                                    <div class="image"><a href="#"><img src="" alt=""></a></div>
                                                    <div class="figcaption">
                                                        <div class="title">
                                                            <a href="#">
                                                                <p class="text-line text-line-sm"></p>
                                                            </a>
                                                        </div>
                                                        <div class="caption">
                                                            <p class="company-name text-line text-line-sm"></p>
                                                            <p class="salary text-line text-line-sm"></p>
                                                            <div class="location">
                                                                <ul>
                                                                    <li>
                                                                        <p class="text-line text-line-sm"></p>
                                                                    </li>
                                                                    <li>
                                                                        <p class="text-line text-line-sm"></p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-detail">
                                                <div class="row-detail">
                                                    <h3>
                                                        js_job_information_job
                                                    </h3>
                                                    <div class="row row-custom">
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    Đăng trong vòng
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    Phương thức làm việc
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    job_jobs_detail_job_level
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    job_jobs_detail_job_title
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    job_jobs_experience
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="box-info">
                                                                <h4>
                                                                    job_jobs_detail_job_lastdate
                                                                </h4>
                                                                <p class="text-line text-line-sm"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row-detail">
                                                    <h3>
                                                        job_jobs_detail_Welfare
                                                    </h3>
                                                    <ul class="welfare-list">
                                                        <li>
                                                            <p class="text-line text-line-sm"></p>
                                                        </li>
                                                        <li>
                                                            <p class="text-line text-line-sm"></p>
                                                        </li>
                                                        <li>
                                                            <p class="text-line text-line-sm"></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="row-detail">
                                                    <h3>job_jobs_detail_work_desc</h3>
                                                    <div class="text-desc">
                                                        <p class="text-line text-line-sm"></p>
                                                        <p class="text-line text-line-sm"></p>
                                                        <p class="text-line text-line-sm"></p>
                                                    </div>
                                                </div>
                                                <div class="row-detail">
                                                    <h3>job_jobs_detail_job_skill</h3>
                                                    <div class="text-desc">
                                                        <p class="text-line text-line-sm"></p>
                                                        <p class="text-line text-line-sm"></p>
                                                        <p class="text-line text-line-sm"></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <style>
                                            @-webkit-keyframes placeHolderShimmer {
                                            0% {
                                            background-position: -468px 0;
                                            }
                                            100% {
                                            background-position: 468px 0;
                                            }
                                            }
                                            @keyframes placeHolderShimmer {
                                            0% {
                                            background-position: -468px 0;
                                            }
                                            100% {
                                            background-position: 468px 0;
                                            }
                                            }
                                            .animated-background, .text-line {
                                            -webkit-animation-duration: 1.25s;
                                            animation-duration: 1.25s;
                                            -webkit-animation-fill-mode: forwards;
                                            animation-fill-mode: forwards;
                                            -webkit-animation-iteration-count: infinite;
                                            animation-iteration-count: infinite;
                                            -webkit-animation-name: placeHolderShimmer;
                                            animation-name: placeHolderShimmer;
                                            -webkit-animation-timing-function: linear;
                                            animation-timing-function: linear;
                                            background: #dddddd;
                                            background: -webkit-gradient(linear, right top, left top, from(#f1f1f1), color-stop(#dddddd), to(#f1f1f1));;
                                            background:  linear-gradient(to left, #f1f1f1, #dddddd, #f1f1f1);;
                                            background-size: 1000px 400px;
                                            height: 96px;
                                            position: relative;
                                            }
                                            .animated-background{
                                            width: 100%;
                                            height: 360px;
                                            }
                                            .text-line {
                                            height: 14px;
                                            width: 150px;
                                            margin: 1px 0;
                                            display: block;
                                            }
                                            .text-line-lg{
                                            height: 30px;
                                            }
                                            .text-line-sm{
                                            height: 20px
                                            }
                                            .text-line-xs{
                                            height: 15px;
                                            }
                                        </style>
                                    </div>
                                    <div class="detail-content"></div>
                                    <div class="follow-area">
                                        <a href="javascript:void(0)" class="left-follow">Xem thêm</a>
                                        <div class="right-follow">
                                            <a href="javascript:void(0)" class="btn-apply-all btn-gradient-1">
                                            Ứng tuyển các vị trí đã chọn&nbsp;<span id="countjob"></span>
                                            </a>
                                            <a href="javascript:void(0)" class="btn-apply-now btn-gradient">
                                            Ứng tuyển ngay
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .detail-loading{display: none;}
        </style>
        <script>
            var language_psearchlist = {
                job_chk_save_jobs_saved:"Việc làm đã lưu",
                job_chk_save_jobs_save:"Lưu việc làm"
            };
            if(typeof language === 'undefined')	var language = language_psearchlist;
            else	$.extend(language, language_psearchlist);
            var list_job_id = [];
            var quick_view = 0;
            var url_job = "";
            $(window).on('load', function() {
                $(".list-job").find(".job-item").eq(0).find('a.job_link').click();
              });
              $(document).on('click', '.jobs-list-ajax .job-item a.job_link', function(e) {
                e.preventDefault();
                var link = $(this).attr('href');
                var id_job = $(this).data('id');
                url_job = PATH_KIEMVIEC + "jobseekers/jobs/apply?job_id="+$(this).data('id');
                $('.btn-apply-now').click(function(){
                  window.open(url_job, '_blank');
                });
                if ($.isFunction(window.ga))
                  ga('send', 'pageview', link.replace(DOMAIN_KV, ""));
            
                $(".detail-loading").show();
                $(".detail-content").hide();
                //$('html,body').animate({
                //  scrollTop: 0
                //}, 200);
                $(".jobs-list-ajax .job-item").removeClass('active');
                $(this).parent().parent().parent().parent().addClass('active');
                var loadJob = $.ajax({
                  url: link + '?ajax=2',
                  dataType: 'json',
                });
                var loadCompany = loadJob.then(function(data) {
                  if (data.status == 1) {
                    $("#job-detail-template .detail-content").html(data.html_detail);
                    $(".detail-loading").hide();
                    $(".detail-content").show();
                    if (quick_view != 0)
                      window.history.pushState({href: link}, '', link);
                      //quick_view++;
                  } else {
                    if (quick_view != 0) {
                      if ($('#job-item-' + id_job).next('div.job-item').length == 1)
                        $('#job-item-' + id_job).next('div.job-item').find('a.job_link').click();
                      else if ($('#job-item-' + id_job).prev('div.job-item').length == 1)
                        $('#job-item-' + id_job).prev('div.job-item').find('a.job_link').click();
                      show_noti(2, language.job_detail_dont_public);
                    } else {
                      if ($('#job-item-' + id_job).next('div.job-item').length == 1)
                        $('#job-item-' + id_job).next('div.job-item').find('a.job_link').click();
                    }
                    $('#job-item-' + id_job).remove();
                  }
                });
              });
        </script>
    </div>
</div>

@endsection
