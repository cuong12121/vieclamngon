@extends('frontend.layout.appfe')
@section('content')
<main>
    
    <link rel="stylesheet" type="text/css" href="{{ asset('css/common-job-detail.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/chosen.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/search-result-list-detail.css') }}">
   
    <script>
        var searchlist = {
          multi_select:"Tất cả",
          multi_head_select:"Tối đa 3 lựa chọn",
          multi_max_select:"multi_max_select",
          multi_select_num:"Lựa chọn",
        };
        if (typeof language === 'undefined') var language = searchlist;
        else $.extend(language, searchlist);
    </script>

    <?php 
        $job= DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->orderBy('job.id', 'desc')->paginate(32);

        $count_job = DB::table('job')->select('id')->get();

    ?>

    <section class="search-result-list">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-custom-xxl-9">
                    <div class="job-found">
                        <div class="job-found-amout">
                            <h1>tìm thấy {{ $count_job->count() }} việc làm</h1>
                        </div>


                        <!-- <div class="job-found-sort">
                            <span class="sort-title dropdown">
                                Sắp xếp theo<em class="mdi mdi-chevron-down"></em>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li> <a title="Cập nhật" class="active" href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortdv-vi.html">Cập nhật</a></li>
                                        <li><a title="Mức lương"  href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortlg-vi.html">Mức lương</a></li>
                                    </ul>
                                </div>
                            </span>
                        </div> -->
                    </div>

                  



                    
                   
                    <div class="main-slide">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="jobs-side-list">

                                        

                                        @foreach($job as $jobs)
                                               
                                            <div class="job-item">
                                                <div class="figure">
                                                    <div class="image"><a target="_blank" href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" title="{{ $jobs->title }}"><img src="https://dxwd4tssreb4w.cloudfront.net/web/images/common/no-logo.png" class="swiper-lazy" data-src="https://dxwd4tssreb4w.cloudfront.net/web/images/common/no-logo.png" alt="{{ $jobs->title }} " /></a></div>
                                                    <div class="figcaption">
                                                        <div class="title">
                                                            <a target="_blank" href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" title="{{ $jobs->title  }}">{{ $jobs->title  }}</a>
                                                        </div>


                                                        <div class="caption">
                                                            <a class="company-name" href="/nha-tuyen-dung/{{ $jobs->links }}" title="{{ $jobs->links }}" target="_blank">{{ $jobs->name }} </a>
                                                            <p class="salary">{!! $jobs->salary  !!}</p>
                                                            <div class="location">
                                                                <em class="mdi mdi-map-marker"></em>
                                                                <p> Hà Nội</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    @if (Auth::check()) 
                                                    <div class="saves-icon"> <span class="top save-job" onclick="apply('{{ $jobs->id }}')">Apply</span> </div>

                                                   

                                                    <!-- <div class="saves-icon"> <span class="top save-job" onclick="saveJob('{{ $jobs->id }}')">Save</span> </div> -->
                                                    @endif
                                                </div>
                                            </div>
                                        
                                        @endforeach


                                       
                                        <script>
                                            $(document).ready(function(){
                                              if(memberLogin == 'yes'){
                                            	checkApply();
                                              }
                                            });
                                        </script>
                                    </div>
                                    <!-- <div class="pagination">
                                        <ul>
                                            <li class="active"><a href="javascript:void(0);">1</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html>2</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-3-vi.html>3</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-4-vi.html>4</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-5-vi.html>5</a></li>
                                            <li class="next-page"><a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html"> <span class="mdi mdi-chevron-right"></span></a></li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="sticker-jobs">
                      
                        <div class="content">
                            <p>Gửi tôi việc làm tương tự</p>
                        </div>
                        <div class="button"> <a href="javascript:;" onclick="return adVanceJobalert();">Đăng ký ngay</a></div>
                    </div>
                    <div class="job-bottom-banner" style="text-align:center;">
                        <script type='text/javascript'><!--// <![CDATA[
                            /* [id853] CB_JSK_SearchResult_Banner_1410x140_01 */
                            OA_show(853);
                            // ]]> -->
                        </script>
                    </div>
                </div>
                <div class="col-lg-4 col-custom-xxl-3">
                    <div class="list-banner-search-result">
                        <!-- remve class sticky-->
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id854] CB_JSK_SearchResult_Banner_390x270_01 */
                                OA_show(854);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id855] CB_JSK_SearchResult_Banner_390x270_02 */
                                OA_show(855);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id856] CB_JSK_SearchResult_Banner_390x270_03 */
                                OA_show(856);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad" style="text-align:center">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id772] CB_JSK_SearchResult_Banner_390x270_04 */
                                OA_show(772);
                                // ]]> -->
                            </script>
                        </div>
                    </div>
                </div>

            </div>
        </div>

       

    </section>

    <div class="advanced-search-modal" style="display: none">
    </div>
     <script src="{{ asset('js/footer2.js') }}">/*swiper.js*/</script>
    <script>/*swiper.js*/
        
        /*search-result-list.js*/
        
        $(document).ready(function(){$('.page-heading-tool .tool-wrapper .mobile-filter').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()})
        $('.page-heading-tool .tool-wrapper .mobile-filter-2').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()})
        $('.page-heading-tool .filters-wrapper .close-filter').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()});setInterval(function(){var text=$.trim($("#keyword").val());if(text!=""){$('.cleartext').addClass('active');}else{$('.cleartext').removeClass('active');}},100);$('.cleartext').click(function(){$('#keyword').val('');});if($(window).width()<1025){$('.page-heading-tool .search-job .form-keyword').on('click',function(){if($('.page-heading-tool').hasClass('mobile-hide')){$('.page-heading-tool .search-job .form-select-chosen').css('margin-bottom','5px')
        $('.page-heading-tool .search-job .form-select-chosen, .page-heading-tool .search-job .form-submit').slideDown()
        $('.page-heading-tool .close-input-filter').addClass('active')
        $('.page-heading-tool .tool-wrapper').addClass('mobile-show')
        setTimeout(function(){$('.page-heading-tool .search-job .form-select-chosen').css('overflow','initial');fixWidthChosen();},1000)}})
        $('.page-heading-tool .close-input-filter').on('click',function(){$(this).removeClass('active')
        $('.page-heading-tool .search-job .form-select-chosen, .page-heading-tool .search-job .form-submit').slideUp()
        $('.page-heading-tool .tool-wrapper').removeClass('mobile-show')})}
        $('.filter-item .view-more ').on('click',function(){$(this).prev().slideToggle()
        $(this).children('span').toggleClass('hidden')})
        $('.Advanced-Search-Popup').on('click',function(e){e.preventDefault()
        $.fancybox.open($('.advanced-search-modal'))})
        $(".jobs-side-list img.lazy-img").lazy();var fixWidth=fixWidth1=0;$(document).on('scroll',function(){$(window).scroll(function(event){var heightFilter=$('.page-heading-tool').height()
        var scroll=$(window).scrollTop();if(scroll<=60){$('.page-heading-tool').addClass('mobile-show-all')
        if(fixWidth==0)
        {fixWidth=1;fixWidthChosen();}}else{fixWidth=0;$('.page-heading-tool').removeClass('mobile-show-all')}
        if(scroll>=(heightFilter+60)){fixWidth1=0;$('.page-heading-tool').addClass('mobile-hide');$('.tool-wrapper').addClass('mobile-height');}else{$('.page-heading-tool').removeClass('mobile-hide');$('.tool-wrapper').removeClass('mobile-height');if(fixWidth1==0)
        {fixWidth1=1;fixWidthChosen();}}});})
        $('.multiselect2').multiselect({header:language.multi_head_select,noneSelectedText:language.multi_select,selectedText:"# "+language.multi_select_num,click:function(event,ui){var id=$(this).attr('id');count=$(this).multiselect("widget").find("input:checked").length;if(count>3){return false;}
        if(count>0)$('.'+id+'_selected').show();else $('.'+id+'_selected').hide();if(ui.checked){var parent_id='.'+id+'_selected ul';var str='<li id="'+id+'_'+ui.value+'">';str+='<span class="asmListItemLabel">'+ui.text+'</span>';str+='<a href="javascript:void(0);" onclick="removeSelected(this, \''+id+'\', \''+ui.value+'\')" class="asmListItemRemove">Delete</a>';str+='</li>';$(parent_id).append(str);}else{$('#'+id+'_'+ui.value).remove();}}});$(".ui-multiselect-menu").appendTo('.edit-multiselect');});$(function(){$(".btn-close-modal").on("click",function(){$.fancybox.close();});});
    </script>
    <div class="login-modal" style="display: none">
        <div class="modal-title">
            <p>Vui lòng đăng nhập để thực hiện chức năng này</p>
        </div>
        <div class="modal-body">
            <form method="POST" id="popup_login_form" action="https://careerbuilder.vn/vi/jobseekers/member/login" autocomplete="off">
                <div class="row">
                    <div class="form-group col-12">
                        <input type="text" id="username" name="username" placeholder="Username / Email" autocomplete="off">
                    </div>
                    <div class="form-group col-8">
                        <input type="password" name="password" id="password"  placeholder="Mật khẩu" autocomplete="off">
                    </div>
                    <div class="form-group col-4">
                        <input type="hidden" name="csrf_token" value= "e562d79a584b02f36a34bfe53506f732ca97103772b7a7c1ac041d7731b851f1" />  
                        <button type="submit">Đăng nhập</button>
                    </div>
                    <div class="form-group form-check col-12">
                        <input type="checkbox" name="chkSave" value="1" />
                        <label>Tự động đăng nhập</label>
                    </div>
                </div>
                <a class="register" href="https://careerbuilder.vn/vi/jobseekers/register" title="Đăng ký">Đăng ký </a><a class="forget-password" href="https://careerbuilder.vn/vi/jobseekers/forgotpassword" title="Quên mật khẩu?" rel="nofollow">Quên mật khẩu?</a>
            </form>
            <div class="sign-in-by">
                <span>Đăng nhập bằng:</span>
                <ul>
                    <li><a href="javascript:void(0);" onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaw==');"><i class="fa fa-facebook-official"></i></a></li>
                    <li><a href="javascript:void(0);" onclick="popupapi('linkedin','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5saW5rZWRpbg==');"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="javascript:void(0);" onclick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');"><i class="fa fa-google-plus-square"></i></a></li>
                </ul>
            </div>
        </div>
    </div>


    <script type="text/javascript"></script>
    <script>
        $(document).ready(function(){
          $("#popup_login_form").validate({
            rules: {
                username: {
                  required: true,
                },
                password: {
                  required: true,
                }
            },
            errorPlacement: function(error, element) {
        return true;
            },
            success: function (error) {
              error.remove();
            }
          });
        });
    </script>
    <script>
        function showboxJobalert() {
               var win = window.open('https://careerbuilder.vn/thong-bao-viec-lam', '_blank');
               if (win) {
                   win.focus();
               } else {
                   console.log('error open tab');
               }
               return false;
        	//$.fancybox.open($("#popup-jobalert"));
        }
    </script>
    <script>
        var language_psearchlist = {
        	job_chk_save_jobs_saved:"Việc làm đã lưu",
        	job_chk_save_jobs_save:"Lưu việc làm"
        };
        if(typeof language === 'undefined')	var language = language_psearchlist;
        else	$.extend(language, language_psearchlist);
        var list_job_id = [];
        $(document).ready(function(){
          if(memberLogin == 'yes'){
        	$('.save-job').each(function(){
        	  var id = $(this).data('id');
        	  list_job_id.push(id);
        	});
        	var check_job = $.ajax({
        	  url: ROOT_KIEMVIEC+'jobseekers/check-save-job',
        	  dataType: 'json',
        	  data: 'lst_id='+list_job_id.join()
        	});
        	var finish_chk = check_job.then(function(data){
        	  if(data.status = 1){
        		$.each(data.result, function(i, item) {
        		  if(item.status == 1){
        			$(".chk_save_"+item.id).addClass('saved');
        			$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_saved);
        			$(".chk_save_value_"+item.id).val(1);
        		  }else{
        			$(".chk_save_value_"+item.id).val(0);
        			$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_save);
        		  }
        		});
        	  }
        	});
          }
        });
    </script>
    <script type="text/javascript">
        var arrData = {"similar":0,"OWNER":"kiemviec","COUNT_SEARCH":true,"SORT":"dv","SORT_BY":"desc","SORT_TITLE":"dv"};
    </script> 
    <div class="back-drop"></div>
</main>
@endsection