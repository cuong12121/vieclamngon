
@extends('frontend.layout.app')

@section('content') 

<style type="text/css">
    .success{
        color: green !important;
    }

    .close-modal{
        position: absolute;
        top:0;
        right: 0;
    }
    .close-modal i{
        font-size: 30px;
    }

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

/*end modal*/
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
    <!-- <div class="find-jobs-form">
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
    </div> -->
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

                                            @if(!empty(Auth::user()->logo)) 
                                            
                                            <div class="image img-result hide">
                                               
                                                <img id="img_mem_avatar" src="{{ asset(Auth::user()->logo) }}">
                                            </div>

                                            @else

                                            <div class="image img-result hide">
                                               
                                                <img id="img_mem_avatar" src="./img/dash-board/1.png">
                                            </div>

                                            @endif
                                            
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

                                    
                                    <!-- @if($checksucess===true)

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
                                    @endif -->
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
                                            <a title="Cập nhật hồ sơ" href="{{ route('my-profile') }}" class="ac_refesh" rel="16167824" >
                                            <span class="mdi mdi-rotate-3d-variant"></span>
                                            Cập nhật hồ sơ
                                            </a>
                                        </div>

                                        @endif
                                    </div>
                                    
                                </div>

                                 <div class="item">


                                    <a title="Cập nhật hồ sơ" href="javascript:void(0)" class="ac_refesh modal-button" >
                                   
                                    Thay ảnh đại diện
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <?php 

                $save_job_count = session('saveJob');

                $apply_job = App\Models\apply_job::where('user_id', Auth::user()->id)->get();
            ?>
            <div class="row">
                
                <div class="col-sm-6 col-lg-3">
                    <div class="widget-1 b3">
                        <div class="widget-head">
                            <p>{{  $save_job_count??0 }}</p>
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

                            
                            <p>{{  $apply_job->count()??0 }}</p>
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
                                    
                                    <input type="file" id="file" name="file" accept="pdf">

                                </div>
                                
                                <div>
                                    <button type="submit">uploads</button>
                                </div>
                                
                            </form>

                            @else

                            <div class="item-cvcht">
                                <div class="col-sm-3">

                                    <a href="{{ asset(Auth::user()->cv) }}" download><img src="img/dash-board/i2.png" alt=""></a>
                                    
                                </div>
                            </div>
                            <span><a target="_blank" href="{{ asset(Auth::user()->cv) }}">Xem cv</a> </span>
                            
                            <!-- <span><a href="{{ asset(Auth::user()->cv) }}" download >tải cv</a> </span> -->

                            @endif
                            
                            
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

                            <?php 

                                $data_job_id = App\Models\application::where('users_id', Auth::user()->id)->first();

                                $job_id = json_decode($data_job_id->experience)->job_id??'';
                                
                            ?>

                            <div class="list-job jobs-list-ajax" id="jobs-list">
                                <div class="item">
                                    <div class="ckb-item">
                                        <label class="container-ckb">
                                            <input type="checkbox" checked="checked" name="jobchk[]" value="35BBDA28">
                                        
                                        </label>
                                    </div>


                                    @if(!empty($job_id))

                                    <?php 
                                        $data_job = DB::table('job')->join('employ_info', 'job.employer_id', '=', 'employ_info.employ_id')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link','job.salaryunit', 'job.salary', 'job.address_job')->where('job.career', $job_id)->orderBy('id', 'desc')->take(10)->get();
                                       
                                    ?>
                                    @if(!empty($data_job))
                                    @foreach($data_job as $value)

                                    <div class="job-item active">
                                        <div class="figure">

                                            <div class="image"><a href="{{ route('job_details', [$value->link, $value->id]) }}" target="_blank" title=" {{  $value->title }}"><img class="lazy-bg" src="https://images.careerbuilder.vn/employer_folders/lot8/84588/79x79/104616hpt_13041_2011_08_26.gif" alt="{{  $value->title }}" style=""></a></div>
                                            <div class="figcaption">
                                                <div class="title"><a class="job_link" data-id="35BBDA28" href="{{ route('job_details', [$value->link, $value->id]) }}" title="{{  $value->title }}" target="_blank">{{  $value->title }}</a></div>
                                                <div class="caption">
                                                    <a class="company-name" target="_blank" href="{{ Route('employ-details', $value->links) }}" title="{{ $value->name }}">{{ $value->name }}</a>
                                                    <?php 

                                                        $salary =  explode('-', $value->salary);  

                                                    ?>

                                                    <p class="salary"><em class="fa fa-usd"></em>{{ @number_format(intval($salary[0]))   }} - {{ @number_format(intval($salary[1]))   }} {{ $value->salaryunit===0?'Đ':'usd' }}</p>
                                                    <!-- <div class="location">
                                                        <ul>
                                                            <li>Hà Nội |  Hồ Chí Minh</li>
                                                        </ul>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    @endforeach
                                    @endif
                                    @endif


                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



        <div class="modal modal-change-logo">
            <div class="modal-overlay modal-toggle"></div>
            <div class="modal-wrapper modal-transition">
                <div class="modal-header">
                    <button class="modal-close modal-toggle">
                        <svg class="icon-close icon" viewBox="0 0 32 32">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </button>
                    <h2 class="modal-heading">Update Logo</h2>
                </div>
                <div class="modal-body">
                    <div class="modal-content">

                        <form method="POST" action="{{ route('upload-avatar') }}" enctype="multipart/form-data">

                            @csrf
                            <div>
                                
                                <input type="file" id="file" name="upFile" accept="jpg, png">

                            </div>

                            <br>
                            
                            <div>
                                 <button type="submit">Update</button>
                            </div>
                            
                        </form>
                       
                       
                    </div>

                    <div class="close-modal"><a href="javascript:void(0)" onclick="closeModal()"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div>
                </div>
            </div>
        </div>

        <style>
            .detail-loading{display: none;}
        </style>
        <script>

            $('.modal-button').on('click', function(e) {

                e.preventDefault();
                $('.modal-change-logo').toggleClass('is-visible');

            });

            function closeModal() {
                  $('.modal-change-logo').removeClass('is-visible');
            }  

           


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
