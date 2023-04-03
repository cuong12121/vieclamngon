@extends('frontend.layout.apps')

@section('content') 

<style type="text/css">
/*    modal css*/
    .modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, .4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,.close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }

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

/*    end css modal*/
  
    
</style>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"  />
<link rel="stylesheet" type="text/css" href="https://static-cdn.vieclam24h.vn/recruiter/230316114925/_next/static/css/116ba476cc1d5646.css">

 <div class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Danh sách ứng viên đã xem công việc</p>
        <div class="table table-jobs-posting view-cv-on">
            <table style="width: 200%;">
                <thead>
                    <tr>
                        
                        <th width="40%">ứng viên </th>
                        <th width="40%" onclick="setTypeSort('posting', 'asc', 3)">CV ứng viên 
                        </th>

                        <th width="40%" onclick="setTypeSort('posting', 'asc', 3)">Cv tải lên 
                        </th>
                       
                    </tr>
                </thead>
                <tbody>

                    
                </tbody>
            </table>
        </div>
    </div>
</div>


<div class="row">
   @include('employer.layout.sidebar')
    <div class="col-md-10">
        <div class="box-manage-job-posting">
            <div class="heading-manage">
                <div class="left-heading">
                    <h1 class="title-manage">Quản Lý Tin</h1>
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
                                <table>
                                    <thead>
                                        <tr>
                                            
                                            <th width="12%">Chức danh</th>
                                            <th width="12%" onclick="setTypeSort('posting', 'asc', 3)">Ngày đăng
                                            </th>

                                            <th width="12%" onclick="setTypeSort('posting', 'asc', 3)">Ngày sửa
                                            </th>

                                            <th width="10%" onclick="setTypeSort('posting', 'asc', 4)">Hết hạn</th>
                                            <th width="10%" onclick="setTypeSort('posting', 'asc', 0)">Lượt Xem</th>
                                            <th width="10%" onclick="setTypeSort('posting', 'asc', 1)">Lượt Nộp</th>
                                           <!--  <th width="10%">CV Gợi Ý</th> -->
                                            <th width="15%">Nổi bật</th>
                                            <th width="10%">Sửa</th>
                                            <th width="10%">Xóa</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if(!empty($job))
                                        @foreach($job as $jobs)
                                        <tr>
                                           
                                            <td >
                                                <a href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" target="_blank">{{ $jobs->title}}</a>
                                            </td>
                                            <td >
                                                {{ ($jobs->created_at)->format('d/m/Y, H:i:s')}}
                                            </td>
                                            <td>
                                                {{ ($jobs->updated_at)->format('d/m/Y, H:i:s')}}
                                            </td>
                                            <td >
                                                 {{ $jobs->deadline}}
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" onclick="showViewerProduct({{ $jobs->id }})">{{ Cache::get('count_'.$jobs->id)??0  }}</a>

                                            </td>
                                             <td>
                                                <?php 

                                                    $apply = DB::table('apply_jobs')->select('id')->where('job_id', $jobs->id)->get();
                                                ?>

                                                {{  !empty($apply)?count($apply):0  }}
                                            </td>

                                            <td class="cb-text-center">

                                                <a href="javascript:void(0)" onclick="updateActiveJob({{  $jobs->id }},  {{ $jobs->active==0?1:0  }})">{{ $jobs->active==0?'Tắt':'Bật'  }}</a>
                                            </td>
                                            <td> <a href="{{ route('form_show_update', $jobs->id) }}">Sửa</a> </td>
                                            <td> <a href="{{ route('remove-job', $jobs->id) }}">Xóa</a> </td>
                                            
                                           
                                        </tr>
                                        @endforeach
                                        @else
                                        <td colspan="9" class="cb-text-center">

                                            <p><strong> Không có vị trí nào trong thư mục này.</strong></p>
                                        </td>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       
                    </div>
                </div>




                @if(\Session::has('notification-remove'))

                <script type="text/javascript">
                    
                    alert('Xóa thành công');

                </script>

                <?php

                Session::forget('notification-remove');

                ?>

                @endif


                
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

</div>


<script type="text/javascript">


    $(document).ready(function () {
        var modal = $('.modal');
      var btn = $('.btn');
      var span = $('.close');

     
      span.click(function () {


            modal.hide();
      });

      $(window).on('click', function (e) {
            if ($(e.target).is('.modal')) {
              modal.hide();
            }
            });
        });
    
    function showViewerProduct(id) {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: 'POST',
            url: "{{ route('show-viewer-job')  }}",
            data: {
                id: id,
               
            },
           
            success: function(result){

                $('.view-cv-on tbody').append(result);

                var modal = $('.modal');
        
                modal.show();
               
            }
        });


        
    }
</script>


@endsection