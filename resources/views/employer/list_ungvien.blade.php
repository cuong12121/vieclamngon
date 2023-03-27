@extends('frontend.layout.apps')

@section('content') 

<style type="text/css">
    .icon-search {
        background-position: -150px 0;
        height: 17px;
        width: 17px;
    }
   /* .main button{
        background-color: transparent;
        border: none;
        position: absolute;
        top: 4px;
        right: 10px;
    }*/

    
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"  />


<div class="container">
    <div class="box-manage-job-posting">
        <div class="heading-manage">
            <div class="left-heading">
                <h1 class="title-manage">Tìm kiếm ứng viên phù hợp</h1>
                <div class="button"><a class="btn-gradient" href="{{ route('form_recruit') }}">Tạo Mẫu Tuyển Dụng</a></div>
            </div>
            <!-- <div class="right-heading"><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank" class="support">Hướng dẫn</a></div> -->
        </div>
        
        <script type="text/javascript">
            var action  = 'posting';
            var user_id = 'chiensi26045.1652405352';
            
            $(document).ready(function() {
                $("#limit").on('change', function(event) {
                    event.preventDefault();
                    var limit       = $('#limit').val();
                    var url = 'employers/hrcentral/'+action+'/user_id/'+user_id+'/sort/desc/type/3/limit/'+limit;
                    window.location = domain + url;
                    return false;
                });
            });
            function setTypeSort(act, sort, type)
            {
                window.location = domain+"employers/hrcentral/"+act+"/user_id/chiensi26045.1652405352/sort/"+sort+"/type/"+type;
            }
        </script>
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
            <script>
                function exportJobs()
                {
                    var i=0;
                    var strParam = '';
                            strParam += "strUser_id=chiensi26045.1652405352&";
                            strParam += "intEmp_parent=271347&";
                            strParam += "strSort=desc&";
                            strParam += "intType=3&";
                            strParam += "keyword=&";
                            strParam += "type_s=0&";
                            strParam += "datetype=&";
                            strParam += "fromdate=&";
                            strParam += "todate=&";
                            strParam += "intPage=1&";
                            strParam += "intLimit=20&";
                            strParam +='straction=posting';
                    window.location = domain + "employers/hrcentral/exportjobs?"+strParam;
                }
                function exportResumes(job_id)
                {
                    window.location = domain + "employers/hrcentral/exportresume?j="+job_id;
                }
                $(document).ready(function() {
                
                });
            </script>
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
                                    <input class="form-control form-control-sm mr-3 w-75" name="search" type="text" placeholder="Nhập tên vị trí hoặc chức danh" aria-label="Nhập tên vị trí hoặc chức danh" style="width: 50%;">
                                    
                                    <?php 

                                        $job = LIST_JOB;
                                    ?>
                                    <select name="jobs" style="width: 30%; height: 27px;" >
                                        <option value="0">Tất cả ngành nghề</option>
                                        @foreach($job as $key => $value)
                                        <option value="{{ $key }}">{{ $value }}</option>
                                        @endforeach
                                    </select>

                                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                              </form>
                              
                            </div>
                            <br>

                            @if(!empty($data_search) && $data_search->count()>0)

                            <table>
                                <thead>
                                    <tr>
                                        
                                       
                                    </tr>
                                </thead>
                                <tbody>

                                    @foreach($data_search as $value)
                                    <tr>
                                        
                                        <td style="text-align:left">
                                           <a href="javascript::void(0)" target="_blank">

                                            {{ $value->surname }} {{ $value->name }}  
                                          </a>

                                           <br>

                                           <span>{{ $value->workplace }}</span>

                                           <br>

                                            @if(!empty($value->desired_salary))
                                            <span>{{ @json_decode($value->desired_salary)->desired_salary }} đ</span>
                                            @endif

                                        </td>

                                        <td style="text-align:right">
                                            <a href="{{ route('viewCvEmployer', $value->id)  }}">xem hồ sơ</a>
                                        </td>
                                    </tr>

                                    @endforeach
                                    
                                    
                                </tbody>
                            </table>

                            @endif
                        </div>
                    </div>
                   
                </div>
            </div>

            
            <script type="text/javascript">
                var language_append = {
                        emp_hrcentral_unposting_this_online_job:"Quý khách muốn tạm ngừng đăng quảng cáo tuyển dụng này?<br/>Lưu ý: Thời gian tạm ngừng vẫn được tính vào thời hạn 30 ngày đăng tuyển của quảng cáo tuyển dụng. Trong thời gian tạm ngừng, các dịch vụ cộng thêm sẽ bị gián đoạn cho đến khi quảng cáo tuyển dụng được kích hoạt lại. ",
                        emp_hrcentral_unposting_success:"Tạm dừng đăng thành công",
                        emp_hrcentral_unposting_unsuccess:"Tạm dừng đăng không thành công",
                        emp_hrcentral_please_select_fromdate:"Vui lòng chọn ngày từ",
                        emp_hrcentral_please_select_todate:"Vui lòng chọn ngày đến",
                        emp_hrcentral_validate_date:"Ngày không hợp lệ",
                        emp_hrcentral_please_select_1_dk:"Vui lòng chọn 1 điều kiện tìm kiếm",
                        hrcentral_select_check_unposting_job:"Vui lòng chọn ít nhất 1 vị trí tuyển dụng để tạm dừng đăng",
                        emp_hrcentral_permission_unposting:"Tài khoản của bạn chưa được cấp quyền tạm dừng đăng tuyển dụng."
                }
                if(typeof language === 'undefined'){
                    var language = language_append;
                }else{
                    $.extend(language, language_append);
                }
                var current_tag_show = null;
                $(document).ready(function(){
                });
            </script>

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
            </script>
        </div>
    </div>
</div>
@endsection