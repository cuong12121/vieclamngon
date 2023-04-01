
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
