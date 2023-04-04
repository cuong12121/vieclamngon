@extends('frontend.layout.apps')

@section('content') 

<style type="text/css">
    .icon-search {
        background-position: -150px 0;
        height: 46px !important;
        width: 17px;
    }

    .side-bar{
        text-align: center;
    }

    .btn-submit{
        border: 1px solid #dddd !important;
        height: 44px;
        width:40px;
    }
   /* .main button{
        background-color: transparent;
        border: none;
        position: absolute;
        top: 4px;
        right: 10px;
    }*/

    
</style>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"  />
<link rel="stylesheet" type="text/css" href="https://static-cdn.vieclam24h.vn/recruiter/230316114925/_next/static/css/116ba476cc1d5646.css">
<div class="row">
    @include('employer.layout.sidebar')
    <div class="col-md-10">
        <div class="box-manage-job-posting">
            <div class="heading-manage">
                <div class="left-heading">
                    <h1 class="title-manage">Tìm kiếm ứng viên phù hợp</h1>
                    <div class="button"><a class="btn-gradient" href="{{ route('form_recruit') }}">Tạo Mẫu Tuyển Dụng</a></div>
                </div>
                <!-- <div class="right-heading"><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank" class="support">Hướng dẫn</a></div> -->
            </div>
            
          
            <!-- <div class="filter-emp-user-create">
                <label>Việc làm đăng bởi</label>
                <select name="user_id" onchange="SetUserId(this.value, 'posting');">
                    &gt;
                    <option value="0">Tất cả</option>
                    <option value="chiensi26045.1652405352" selected="selected">
                        cuong
                    </option>
                </select>
            </div> -->
            <div class="main-tabslet">
                <ul class="tabslet-tab">
                    <!-- <li class="active">
                        <a href="javascript:void(0)">
                        Việc Làm Đang Đăng
                        </a>
                    </li> -->
                   <!--  <li class="">
                        <a href="https://careerbuilder.vn/vi/employers/hrcentral/waitposting/user_id/chiensi26045.1652405352">
                        Việc Làm Chờ Đăng
                        </a>
                    </li>
                    <li class="">
                        <a href="https://careerbuilder.vn/vi/employers/hrcentral/unposting/user_id/chiensi26045.1652405352">
                        Việc Làm Tạm Dừng Đăng
                        </a>
                    </li>
                    <li class="">
                        <a href="https://careerbuilder.vn/vi/employers/hrcentral/expireposting/user_id/chiensi26045.1652405352">
                        Việc Làm Hết Hạn
                        </a>
                    </li> -->
                </ul>
               
                <div class="tabslet-content active">
                    <div class="main-jobs-posting">
                        <div class="heading-jobs-posting">
                           <!--  <div class="left-heading">
                                <p class="name">Hiển thị </p>
                                <ul class="list-check">
                                    <li class="view-posting-detail active"><a href="javascript:void(0);" id="dtail">Chi tiết</a></li>
                                    <li class="view-posting-summary"><a href="javascript:void(0)">Xem tóm tắt   </a></li>
                                    <li><a href="javascript:void(0);" id="copy_multi_job">Nhân bản</a></li>
                                    <li> <a href="javascript:void(0);" id="unposting_multi_job">Tạm Dừng Đăng</a></li>
                                </ul>
                            </div> -->
                           <!--  <div class="right-heading">
                                <div class="export-file"><a href="javascript:void(0);" onclick="exportJobs();"> <em class="material-icons">get_app</em>Xuất file job</a></div>
                                <div class="to-display">
                                    <p class="name">Hiển thị </p>
                                    <div class="form-display">
                                        <select name="limit" id="limit">
                                            <option value="20" selected="">20</option>
                                            <option value="30">30</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                    <p class="name-display"></p>
                                </div>
                            </div> -->
                        </div>
                        <div class="boding-jobs-posting">
                            <div class="table table-jobs-posting">
                                <div class="main">


                                   <form class="form-inline d-flex justify-content-center mb-5 active-cyan-4" method="post" action="{{ route('employer-search-user') }}" >

                                        @csrf
                                        <input class="form-control form-control-sm mr-3 w-75" name="search" type="text" placeholder="Nhập tên vị trí hoặc chức danh" aria-label="Nhập tên vị trí hoặc chức danh" style="width: 50%; height:44px">
                                        
                                        <?php 

                                            $job = LIST_JOB;
                                        ?>
                                        <select name="jobs" style="width: 30%; height: 45px;" >
                                            <option value="0">Tất cả ngành nghề</option>
                                            @foreach($job as $key => $value)

                                            @if($key !=0)
                                            <option value="{{ $key }}">{{ $value }}</option>
                                            @endif
                                            @endforeach
                                        </select>

                                        <button type="submit" class="btn-submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                  </form>

                                    @if(!empty($data_search) && $data_search->count()>0)
                                    
                                    <div> <h2>{{  @$notification }}</h2> </div>
                                
                                    <table>
                                        <thead>
                                            <tr>
                                                
                                               
                                            </tr>
                                        </thead>
                                        <tbody>

                                            @foreach($data_search as $value)
                                            <tr style="border-bottom:  1px solid #ddd">
                                                
                                                <td style="text-align:left; width:93%">
                                                   <a href="javascript::void(0)" target="_blank">

                                                    {{ $value->surname }} {{ $value->name }}  
                                                  </a>

                                                   <br>
                                                   <i class="fa fa-id-card-o" aria-hidden="true"></i>

                                                   <span>{{ $value->workplace }}</span>

                                                   <br>
                                                   <i class="fa fa-usd" aria-hidden="true"></i>

                                                   <?php

                                                        $list = LIST_JOB;
                                                   ?>

                                                    <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                                     @if(isset($value->jobs))
                                                    <span>{{ $list[$value->jobs] }}</span>
                                                    @endif

                                                    <br>

                                                    @if(!empty($value->desired_salary))
                                                    <span>{{ @number_format( intval(json_decode($value->desired_salary)->desired_salary)) }} đ</span>
                                                    @endif

                                                    

                                                    

                                                </td>

                                                <td style="text-align:right; width:10%">
                                                    <a href="{{ route('viewCvEmployer', $value->id)  }}">Xem hồ sơ</a>
                                                </td>
                                            </tr>

                                            @endforeach
                                            
                                            
                                        </tbody>
                                    </table>
                                

                                @endif
                                  
                                </div>
                                <br>


                            </div>
                        </div>
                       
                    </div>
                </div>

                
                
                <script type="text/javascript">
                    
                    function updateActiveJob(id,active) {

                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            }
                        });

                        $.ajax({
                            type: 'POST',
                            url: "{{ route('update-active-job')  }}",
                            data: {
                                id: id,
                                active:active,   
                            },
                           
                            success: function(result){
                               
                                window.location.reload()
                            }
                        });
                        
                    }


                    let job =  JSON.parse(window.localStorage.getItem('job'));

                    console.log(job.length);

                    for(i=0; i<job.length; i++){

                        console.log(i);

                        $('.saves-icon #job_'+job[i]).addClass('red');
                    }
                </script>
            </div>
        </div>
    </div>
</div>

@endsection