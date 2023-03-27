$( document ).ready(function() {
                       checkYoutubeValid();
                       eventAfterAjax();
                       deletePhotoCompany();
                    });
                    
                    
                    var is_execute_profile = false;
                    function ajaxPhotoUpload()
                    {
                       $('#filephoto').prop('disabled', true);
                       var strPhoto = $("#strPhoto").val();
                       if(is_execute_profile)
                          return false;
                       is_execute_profile = true;
                    
                       var file = $('#filephoto')[0].files;
                    
                        var formdata = false;
                        if (window.FormData) {
                            formdata = new FormData();
                        }
                        formdata.append("filephoto", file[0]);
                        $('#filephoto').val('');
                        $.ajax({
                            url: 'https://careerbuilder.vn/vi/employers/postjobs/uploadphoto',
                            type: "POST",
                            data: formdata,
                            processData: false,
                            contentType: false,
                            dataType: 'json',
                            success: function (data) {
                             is_execute_profile = false;
                             if(typeof(data.error) != 'undefined')
                             {
                                if(data.error != '')
                                {
                                   show_noti(2, data.error);
                                }
                                else
                                {
                                   $("#list-image").append('<div class="image-item"><img src="' + data.path + '"><a class="btn-del-img company-btn-del-img" href="javascript:void(0);" data-src="' + data.msg + '" title="Xóa ảnh\"><em class="material-icons">clear</em></a></div>');
                                       $('#isdisplay').prop('disabled', false);
                                   if(strPhoto != '')
                                         strPhoto += ',';
                                      strPhoto += data.msg;
                                      $("#strPhoto").val(strPhoto);
                                }
                             }
                             eventAfterAjax();
                            }
                        });
                    
                       return false;
                    }
                    function eventAfterAjax()
                    {
                       $("#loading").hide();
                       var num = $("#strPhoto").val().split(",").length;
                       if(num >= 5){
                          $('#filephoto').prop('disabled', true);
                       }else{
                          $('#filephoto').prop('disabled', false);
                       }
                    }
                    
                    
                    function deletePhotoCompany()
                    {
                        $(document).on('click', ".company-btn-del-img", function(){
                            var name = $(this).data('src');
                            $(this).closest('.image-item').remove();
                            var strPhoto = $("#strPhoto").val();
                            var strPhotoDelete = $("#strPhotoDelete").val();
                            // Add in hidden delete
                            if(strPhotoDelete != '')
                                strPhotoDelete += ',';
                            strPhotoDelete += name;
                            $("#strPhotoDelete").val(strPhotoDelete);
                            // Remove in hidden upload
                            var posName = strPhoto.indexOf(name);
                            var posTemp = strPhoto.indexOf(',');
                            if(posName == 0){
                                if(posTemp > 0)
                                    name += ',';
                            }else{
                                name = ','+name;
                            }
                            $("#strPhoto").val(strPhoto.replace(name,''));
                            // Check exist image and video
                            checkYoutubeValid(2);
                            if($("#strPhoto").val() == '' && $("#checkYouTube").val() == 'false' ){
                                $('#isdisplay').prop('checked', false);
                                $('#isdisplay').prop('disabled', true);
                            }
                            $('#filephoto').prop('disabled', false);
                        });
                    }
                    
                    /* XÓA KHI UPDATE SAU */
                    function ajaxPhotoDelete(name)
                    {
                       var strPhoto = $("#strPhoto").val();
                       var strPhotoDelete = $("#strPhotoDelete").val();
                       // Add in hidden delete
                       if(strPhotoDelete != '')
                          strPhotoDelete += ',';
                       strPhotoDelete += name;
                       $("#strPhotoDelete").val(strPhotoDelete);
                       // Remove in hidden upload
                       var posName = strPhoto.indexOf(name);
                       var posTemp = strPhoto.indexOf(',');
                       if(posName == 0){
                          if(posTemp > 0)
                             name += ',';
                       }else{
                          name = ','+name;
                       }
                       $("#strPhoto").val(strPhoto.replace(name,''));
                       // Check exist image and video
                       checkYoutubeValid(2);
                       if($("#strPhoto").val() == '' && $("#checkYouTube").val() == 'false' ){
                          $('#isdisplay').prop('checked', false);
                          $('#isdisplay').prop('disabled', true);
                       }
                       $('#filephoto').prop('disabled', false);
                    }
                    /* XÓA KHI UPDATE SAU */
                    
                    
                    /* type 0: check message error, 1: check message error and show video, 2: check */
                    function checkYoutubeValid(type)
                    {
                       var url = $('#strVideo').val();
                       url = url.replace(/^\s+|\s+$/g, "");
                    
                       if(url != '')
                       {
                          var pos = url.indexOf('youtube.com/watch?v=');
                          // Check youtube link valid before check video valid on server
                          if(pos < 0){
                             
                             if(type != 2){
                                $('#eVideo').remove();
                                $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');
                             }
                             // Check exist image and video
                             if($("#strPhoto").val() == ''){
                                $('#isdisplay').prop('checked', false);
                                $('#isdisplay').prop('disabled', true);
                             }
                       
                             $('#checkYouTube').val('false');
                             return false;
                          }
                    
                          $.ajax({
                             type: "POST",
                             url: domain+'employers/postjobs/checklinkyoutube',
                             dataType: 'JSON',
                             data: 'link=' + url,
                             success: function(rs)
                             {
                                if(rs == '0'){
                                   // Message error when input link youtube
                                   if(type != 2)
                                   {
                                      $('#eVideo').remove();
                                      $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');
                    
                                   }
                                   // Check exist image and video
                                   if($("#strPhoto").val() == ''){
                                      $('#isdisplay').prop('checked', false);
                                      $('#isdisplay').prop('disabled', true);
                                   }
                                   $('#checkYouTube').val('false');
                    
                                
                    
                                   return false;
                                }else{
                                   
                                   if(type != 2){
                                      $('#eVideo').remove();
                                      $('#isdisplay').prop('disabled', false);
                                      // Check button view youtube
                                      if(type == 1){
                                         $.fancybox.open({
                                            'closeExisting': true,
                                            'src': url.replace(new RegExp("watch\\?v=", "i"), 'embed/') + '?autoplay=1&rel=0',
                                            'type': 'iframe'
                                         });
                                      }
                                   }
                                   $('#checkYouTube').val('true');
                                   return true;
                                }
                             }
                          });
                       }
                       else
                        {
                          /* Don't input link youtube */
                          $('#eVideo').remove();
                          // check button view
                          if(type == 1){
                             $('#strVideo').after('<span class="form-error" id="eVideo" generated="true" style="width:480px">Link video không dúng định dạng. Bạn vui lòng nhập lại.</span>');
                          }
                          // Check exist image and video
                          if($("#strPhoto").val() == ''){
                             $('#isdisplay').prop('checked', false);
                             $('#isdisplay').prop('disabled', true);
                          }
                          $('#checkYouTube').val('false');
                          return false;
                       }
                    }
                    
 $(document).ready(function(){
    $('#slAutoReply').change(function(){
        var reply_id = $('#slAutoReply').val();
        if(reply_id > 0){
            $.ajax({
                type: "POST",
                url: domain + 'employers/postjobs/detailreply',
                data: 'reply_id=' + reply_id,
                dataType: 'json',
                success: function(obj)
                {
                    $("#reply_title").val(obj.AUTOREPLY_TITLE);
                    $("#reply_content").val(obj.AUTOREPLY_CONTENT);
                    $("#reply0").attr("checked", true);
                    $("#reply1").attr("checked", false);
                }
            });
        }
    });
    $('#view_sample').click(function(){
        $.fancybox.close('all');
        $.fancybox.open({'src' : '#LetterAbout','type' : 'inline'});
    });
});  

var language_append = {
                Emp_limit_check:"Tối đa 3 lựa chọn",
                Emp_limit_3_location:"Tối đa 3 nơi làm việc",
                Emp_Choice:"Chọn",
                Emp_del:"Xóa",
                Emp_postjobs_job_title_invalid:"\"Chức danh tuyển dụng\" không hợp lệ. Vui lòng nhập lại",
                postjobs_please_enter_experience:"Vui lòng nhập kinh nghiệm",
                LANG_ERROR_RESUME_SALARY_FROM_TO:"Để thu hút ứng viên hơn, mức lương bạn nhập không nên thấp hơn mức lương tối thiểu vùng.Tham khảo thêm  <a href=\"https://careerbuilder.vn/vi/talentcommunity/muc-luong-toi-thieu-vung-2017-moi-nhat.35A5145F.html\" target=\"_blank\"><b style=\"color:#ff0000\">tại đây.</B></a>",
                LANG_ERROR_RESUME_SALARY_ALERT_FROM_TO:"<p style=\"color:#F00000\">Chênh lệch giữa mức lương tối thiểu và tối đa khá lớn. Bạn hãy thử kiểm tra lại thông tin lương vừa cung cấp.</p>",
                Emp_postjobs_Job_code_is_invalid:'"Mã công việc" không hợp lệ. Vui lòng nhập lại',
                Emp_Please_select_the_job_type:"Vui lòng chọn hình thức làm việc",
                Emp_Please_select_Type_of_job:"Vui lòng chọn Loại hình làm việc",
                Emp_postjobs_Job_desciption_is_invalid:"\"Mô Tả Công Việc\" không được để trống và không được nhập email, hình ảnh và nhiều hơn 10 ký tự. Vui lòng nhập lại",
                Emp_postjobs_skill_requirement_is_invalid:"\"Kỹ năng yêu cầu\" không được để trống và không nhập email, hình ảnh và phải nhiều hơn 10 ký tự. Vui lòng nhập lại",
                Emp_postjobs_Please_choose_career_level:"Vui lòng chọn Cấp bậc",
                Emp_postjobs_Please_choose_experience:"Vui lòng chọn Kinh nghiệm",
                Emp_message:"Thông báo",
                Emp_exp_invalid:"Kinh nghiệm không hợp lệ",
                Emp_age_invalid:"Độ tuổi không hợp lệ",
                postjobs_notice_when_save_job_11:"Cập nhật không thành công hoặc job đã có order phụ trên ngành được chọn",
                Emp_postjobs_please_select_location:"Vui lòng chọn tỉnh/ thành phố",
                Emp_postjobs_Pleate_enter_expiring_date:"Vui lòng nhập thời gian",
                Emp_postjobs_Please_enter_company:"Vui lòng nhập Tên công ty",
                Emp_postjobs_Please_enter_address:"Vui lòng nhập Địa chỉ",
                Emp_postjobs_Please_select_industry:"industry",
                Emp_postjobs_Please_select_location:"location",
                Emp_postjobs_Please_enter_contact_name:"Vui lòng nhập Tên người liên lệ",
                Emp_postjobs_Please_enter_Email1:"Vui lòng nhập Email liên hệ",
                emp_postjob_Do_not_enter_special_characters:"Không được nhập ký tự đặc biệt.",
                Emp_postjobs_Job_desciption_more_character:"Vui lòng không nhập quá 10.000 ký tự",
                Emp_postjobs_skill_requirement_more_character:"Vui lòng không nhập quá 10.000 ký tự",
                Emp_selected:"# lựa chọn",
                emp_resume_tag_limit:"Tag/Kỹ năng không được quá 50 ký tự .Vui lòng nhập lại!",
                Emp_postjobs_not_phone_email_url:"Vui lòng không nhập email và số điện thoại.",
                Emp_postjobs_select_location:"Vui lòng chọn Tỉnh/Thành phố",
                Emp_postjobs_select_work_location:"Vui lòng chọn địa điểm làm việc",
                Emp_postjobs_url_incorrect:"Emp_postjobs_url_incorrect",
                postjobs_err_data_when_save_job:"Vui lòng thử lại !",
                js_resume_industry_required:"Không được để trống.",
                emp_photo_error_youtube:"Link video không dúng định dạng. Bạn vui lòng nhập lại.",

            }
            if(typeof language === 'undefined'){
                var language = language_append;
            }else{
                $.extend(language, language_append);
            }

            var msg             = '';
            var salary_form     = '';
            var salary_to       = '';
            $(document).ready(function() {
                moment.locale(CURRENT_LANGUAGE);
                $('.dates').daterangepicker({
                    "singleDatePicker": true,
                    "autoApply": true,
                    "autoUpdateInput": false,
                    "locale": {
                        "format": "DD/MM/YYYY",
                    },
                    "minDate": moment().add(0, 'days'),
                    "opens": "right"
                });
                $('.dates').on('apply.daterangepicker', function(ev, picker) {
                    $(this).val(picker.startDate.format('DD/MM/YYYY'));
                });
                
                $('.auto_suggest').autoComplete({
                    minChars: 3,
                    source: function(term, response){
                        term = term.toLowerCase();
                        $.getJSON(domain +'employers/postjobs/searchtags', { q: term , limit: 10}, function(data){response(data);});
                    },
                    onSelect: function(e, term, item){
                        addWord();
                    }
                });


                 //check noi lam viec va dia chi lam viec
                 var locationvalue = $("select[name='LOCATION_ID[]']").val();
                 if(locationvalue =="")
                 {
                     $("select[name='work_location[]']").prop('disabled', true);
                 }
                 else
                 {
                      $("select[name='work_location[]']").prop('disabled', false);
                 }


                if(msg == 'errNotice')
                {
                    show_noti(2, language.postjobs_notice_when_save_job_11, language.message_common);
                }else if(msg == 'errData'){
                    show_noti(2, language.postjobs_err_data_when_save_job, language.message_common);
                }

                $('#job_template').click(function(){
                    $.fancybox.open({
                        'src': domain+'employers/postjobs/loadjobsample?newLayout=1',
                        'type': 'ajax'
                    });
                });
                $('#JOB_APPLYONLINE').click(function(){
                    if($(this).is(':checked')){
                        $('#reply_title').attr('disabled', false);
                        $('#reply_content').attr('disabled', false);
                        $('#MailReply').css('display', 'block');
                    }else{
                        $('#reply_title').attr('disabled', true);
                        $('#reply_content').attr('disabled', true);
                        $('#MailReply').css('display', 'none');
                    }
                });
                $("#JOB_LASTDATE").change(function(e) {
                    e.preventDefault();
                    $(".error_job_lastdate").html('');
                });

                $('.chk_lang_req').on('click', function(){
                    var parent_obj = $('#div_lang_req');
                    var total_chk = $("input.chk_lang_req:checked", parent_obj).length;
                    if(total_chk > 1){
                        $("input.chk_lang_req:checked", parent_obj).each(function(){
                            $('#lang_priority_'+$(this).val()).css('display', 'block');
                        });
                        if($(this).is(':checked')){
                            $('#lang_priority_'+$(this).val()).css('display', 'block');
                        }else{
                            $('#lang_priority_'+$(this).val()).css('display', 'none');
                        }
                    }else{
                        $("input:checkbox.chk_lang_pri", parent_obj).each(function(){
                            $(this).attr('checked', false);
                        });
                        $("input:checkbox.chk_lang_req", parent_obj).each(function(){
                            $('#lang_priority_'+$(this).val()).css('display', 'none');
                        });
                    }
                    if(!$(this).is(':checked')){
                        $('#lang_priority_'+$(this).val()).children(':checkbox').attr('checked', false);
                    }
                });
                $('input.unique').on('click', function() {
                    $('input.unique:checked').not(this).prop('checked', false);
                });
            });
            $(document).on('click', '.add-location-more', function(){
                if($("#post_job_location .item_post_job_location").length < 3){
                    var clone_html = $("#html_post_job_worklocation").html();
                    $("#post_job_location").append(clone_html).find('select.work_location').removeClass('chosen-select').addClass('chosen-select');
                    reloadChosen();
                }else{
                    show_noti(2, language.Emp_limit_3_location);
                }
            });
            $(document).on('click', '.delete-location-more', function(){
                $(this).closest('div.item_post_job_location').remove();
            });
            function is_Filter_Form()
            {
                $('#intSave').val(1);
                $("#frmEditJob").submit();
            }
            function is_Filter_Form2()
            {
                $('#intSave').val(2);
                $("#frmEditJob").submit();
            }
            function is_Filter_Form3()
            {
                $('#intSave').val(3);
                $("#frmEditJob").submit();
            }
            function saveConfigMatchingScore(job_id, ispublic)
            {
                var myform = $('#tab-postjob-matchingscore');
                var disabled = myform.find(':input:disabled').prop('disabled', false);
                $.ajax({
                    type: "POST",
                    url: domain+'employers/postjobs/savematchingscore',
                    dataType: 'JSON',
                    data: $('#tab-postjob-matchingscore :input').serialize(),
                    beforeSend:function()
                    {
                        disabled.prop('disabled',true);
                    },
                    complete:function()
                    {
                        disabled.prop('disabled', true);
                    },
                    success: function(rs)
                    {
                        window.location = 'https://qccareerbuilder.vn/vi/employers/hrcentral/viewjob/'+job_id+'/user_id/emquality/sort/desc/type/3/position/1';
                    }
                });
            } 


function removeUnicode(strings){var strTemp=strings;strTemp=strTemp.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");strTemp=strTemp.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");strTemp=strTemp.replace(/ì|í|ị|ỉ|ĩ/g,"i");strTemp=strTemp.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");strTemp=strTemp.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");strTemp=strTemp.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");strTemp=strTemp.replace(/đ/g,"d");strTemp=strTemp.replace(/̀|́|̣|̉|̃|/gi,"");return strTemp;}
(function($){$.fn.autoComplete=function(options){var o=$.extend({},$.fn.autoComplete.defaults,options);if(typeof options=='string'){this.each(function(){var that=$(this);if(options=='destroy'){$(window).off('resize.autocomplete',that.updateSC);that.off('blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete');if(that.data('autocomplete'))
that.attr('autocomplete',that.data('autocomplete'));else
that.removeAttr('autocomplete');$(that.data('sc')).remove();that.removeData('sc').removeData('autocomplete');}});return this;}
return this.each(function(){var that=$(this);that.sc=$('<div class="autocomplete-suggestions '+o.menuClass+'"></div>');that.data('sc',that.sc).data('autocomplete',that.attr('autocomplete'));that.attr('autocomplete','off');that.cache={};that.last_val='';that.updateSC=function(resize,next){that.sc.css({top:that.offset().top+that.outerHeight(),left:that.offset().left,width:that.outerWidth()});if(!resize){that.sc.show();if(!that.sc.maxHeight)that.sc.maxHeight=parseInt(that.sc.css('max-height'));if(!that.sc.suggestionHeight)that.sc.suggestionHeight=$('.autocomplete-suggestion',that.sc).first().outerHeight();if(that.sc.suggestionHeight)
if(!next)that.sc.scrollTop(0);else{var scrTop=that.sc.scrollTop(),selTop=next.offset().top-that.sc.offset().top;if(selTop+that.sc.suggestionHeight-that.sc.maxHeight>0)
that.sc.scrollTop(selTop+that.sc.suggestionHeight+scrTop-that.sc.maxHeight);else if(selTop<0)
that.sc.scrollTop(selTop+scrTop);}}}
$(window).on('resize.autocomplete',that.updateSC);that.sc.appendTo('body');that.sc.on('mouseleave','.autocomplete-suggestion',function(){$('.autocomplete-suggestion.selected').removeClass('selected');});that.sc.on('mouseenter','.autocomplete-suggestion',function(){$('.autocomplete-suggestion.selected').removeClass('selected');$(this).addClass('selected');});that.sc.on('mousedown click','.autocomplete-suggestion',function(e){var item=$(this),v=item.data('val');if(v||item.hasClass('autocomplete-suggestion')){that.val(v);o.onSelect(e,v,item);that.sc.hide();}
return false;});that.on('blur.autocomplete',function(){try{over_sb=$('.autocomplete-suggestions:hover').length;}catch(e){over_sb=0;}
if(!over_sb){that.last_val=that.val();that.sc.hide();setTimeout(function(){that.sc.hide();},350);}else if(!that.is(':focus'))setTimeout(function(){that.focus();},20);});if(!o.minChars)that.on('focus.autocomplete',function(){that.last_val='\n';that.trigger('keyup.autocomplete');});function suggest(data){var val=that.val();that.cache[val]=data;if(data.length&&val.length>=o.minChars){var s='';for(var i=0;i<data.length;i++)s+=o.renderItem(data[i],val);that.sc.html(s);that.updateSC(0);}
else
that.sc.hide();}
that.on('keydown.autocomplete',function(e){if((e.which==40||e.which==38)&&that.sc.html()){var next,sel=$('.autocomplete-suggestion.selected',that.sc);if(!sel.length){next=(e.which==40)?$('.autocomplete-suggestion',that.sc).first():$('.autocomplete-suggestion',that.sc).last();that.val(next.addClass('selected').data('val'));}else{next=(e.which==40)?sel.next('.autocomplete-suggestion'):sel.prev('.autocomplete-suggestion');if(next.length){sel.removeClass('selected');that.val(next.addClass('selected').data('val'));}
else{sel.removeClass('selected');that.val(that.last_val);next=0;}}
that.updateSC(0,next);return false;}
else if(e.which==27)that.val(that.last_val).sc.hide();else if(e.which==13||e.which==9){var sel=$('.autocomplete-suggestion.selected',that.sc);if(sel.length&&that.sc.is(':visible')){o.onSelect(e,sel.data('val'),sel);setTimeout(function(){that.sc.hide();},20);}}});that.on('keyup.autocomplete',function(e){if(!~$.inArray(e.which,[13,27,35,36,37,38,39,40])){var val=that.val();if(val.length>=o.minChars){if(val!=that.last_val){that.last_val=val;clearTimeout(that.timer);if(o.cache){if(val in that.cache){suggest(that.cache[val]);return;}
for(var i=1;i<val.length-o.minChars;i++){var part=val.slice(0,val.length-i);if(part in that.cache&&!that.cache[part].length){suggest([]);return;}}}
that.timer=setTimeout(function(){o.source(val,suggest)},o.delay);}}else{that.last_val=val;that.sc.hide();}}});});}
$.fn.autoComplete.defaults={source:0,minChars:3,delay:150,cache:1,menuClass:'',renderItem:function(item,search){var item_convert=removeUnicode(item);var search_convert=removeUnicode(search);search=search.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');var re=new RegExp("("+search.split(' ').join('|')+")","gi");var re_convert=new RegExp("("+search_convert+")","gi");var search_match=re_convert.exec(item_convert);if(search_match&&search_convert.length){var startpos=search_match.index;var prefix=item.slice(0,startpos);var fix=item.slice(startpos,startpos+search_convert.length);var suffix=item.slice(startpos+search_convert.length);return'<div class="autocomplete-suggestion" data-val="'+item+'">'+prefix+'<b>'+fix+'</b>'+suffix+'</div>';}else{return'<div class="autocomplete-suggestion" data-val="'+item+'">'+item.replace(re,"<b>$1</b>")+'</div>';}},onSelect:function(e,term,item){}};}(jQuery));
/*jquery.tabslet.js*/
;(function($,window,undefined){"use strict";$.fn.tabslet=function(options){var defaults={mouseevent:'click',activeclass:'active',attribute:'href',animation:false,autorotate:false,deeplinking:false,pauseonhover:true,delay:2000,active:1,container:false,controls:{prev:'.prev',next:'.next'}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this),_cache_li=[],_cache_div=[];var _container=options.container?$(options.container):$this;var _tabs=_container.find('> div, > .tabslet-content');_tabs.each(function(){_cache_div.push($(this).css('display'));});var elements=$this.find('.tabs-toggle > li, .tabslet-tab > li'),i=options.active-1;if(!$this.data('tabslet-init')){$this.data('tabslet-init',true);$this.opts=[];$.map(['mouseevent','activeclass','attribute','animation','autorotate','deeplinking','pauseonhover','delay','container'],function(val,i){$this.opts[val]=$this.data(val)||options[val];});$this.opts['active']=$this.opts.deeplinking?deep_link():($this.data('active')||options.active)
_tabs.hide();if($this.opts.active){_tabs.eq($this.opts.active-1).show();elements.eq($this.opts.active-1).addClass(options.activeclass);}
var fn=eval(function(e,tab){var _this=tab?elements.find('a['+$this.opts.attribute+'="'+tab+'"]').parent():$(this);_this.trigger('_before');elements.removeClass(options.activeclass);_this.addClass(options.activeclass);_tabs.hide();i=elements.index(_this);var currentTab=tab||_this.find('a').attr($this.opts.attribute);if($this.opts.deeplinking)location.hash=currentTab;if($this.opts.animation){_container.find(currentTab).animate({opacity:'show'},'slow',function(){_this.trigger('_after');});}else{_container.find(currentTab).show();_this.trigger('_after');}
return false;});var init=eval("elements."+$this.opts.mouseevent+"(fn)");init;var t;var forward=function(){i=++i%elements.length;$this.opts.mouseevent=='hover'?elements.eq(i).trigger('mouseover'):elements.eq(i).click();if($this.opts.autorotate){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);$this.mouseover(function(){if($this.opts.pauseonhover)clearTimeout(t);});}}
if($this.opts.autorotate){t=setTimeout(forward,$this.opts.delay);$this.hover(function(){if($this.opts.pauseonhover)clearTimeout(t);},function(){t=setTimeout(forward,$this.opts.delay);});if($this.opts.pauseonhover)$this.on("mouseleave",function(){clearTimeout(t);t=setTimeout(forward,$this.opts.delay);});}
function deep_link(){var ids=[];elements.find('a').each(function(){ids.push($(this).attr($this.opts.attribute));});var index=$.inArray(location.hash,ids)
if(index>-1){return index+1}else{return($this.data('active')||options.active)}}
var move=function(direction){if(direction=='forward')i=++i%elements.length;if(direction=='backward')i=--i%elements.length;elements.eq(i).click();}
$this.find(options.controls.next).click(function(){move('forward');});$this.find(options.controls.prev).click(function(){move('backward');});$this.on('show',function(e,tab){fn(e,tab);});$this.on('next',function(){move('forward');});$this.on('prev',function(){move('backward');});$this.on('destroy',function(){$(this).removeData().find('> .tabs-toggle li').each(function(i){$(this).removeClass(options.activeclass);});_tabs.each(function(i){$(this).removeAttr('style').css('display',_cache_div[i]);});});}});};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet();});})(jQuery);
/*checkdate.js*/

var dtCh="-";var minYear=1900;var maxYear=2150;function isInteger(s){var i;for(i=0;i<s.length;i++){var c=s.charAt(i);if(((c<"0")||(c>"9")))return false;}
return true;}
function stripCharsInBag(s,bag){var i;var returnString="";for(i=0;i<s.length;i++){var c=s.charAt(i);if(bag.indexOf(c)==-1)returnString+=c;}
return returnString;}
function daysInFebruary(year){return(((year%4==0)&&((!(year%100==0))||(year%400==0)))?29:28);}
function DaysArray(n){for(var i=1;i<=n;i++){this[i]=31
if(i==4||i==6||i==9||i==11){this[i]=30}
if(i==2){this[i]=29}}
return this}
function isDate(dtStr,sep){var dtCh='/'
if(sep=='-')dtCh=sep
var daysInMonth=DaysArray(12)
var pos1=dtStr.indexOf(dtCh)
var pos2=dtStr.indexOf(dtCh,pos1+1)
var strMonth=dtStr.substring(0,pos1)
var strDay=dtStr.substring(pos1+1,pos2)
var strYear=dtStr.substring(pos2+1)
strYr=strYear
if(strDay.charAt(0)=="0"&&strDay.length>1)strDay=strDay.substring(1)
if(strMonth.charAt(0)=="0"&&strMonth.length>1)strMonth=strMonth.substring(1)
for(var i=1;i<=3;i++){if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1)}
month=parseInt(strMonth)
day=parseInt(strDay)
year=parseInt(strYr)
if(pos1==-1||pos2==-1){return false}
if(strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]){return false}
if(dtStr.indexOf(dtCh,pos2+1)!=-1||isInteger(stripCharsInBag(dtStr,dtCh))==false){return false}
return true}
function isDateddmmyyyy(dtStr){if(dtStr==""){return true;}
var daysInMonth=DaysArray(12)
var pos1=dtStr.indexOf("/")
var pos2=dtStr.indexOf("/",pos1+1)
var strDay=dtStr.substring(0,pos1)
var strMonth=dtStr.substring(pos1+1,pos2)
var strYear=dtStr.substring(pos2+1)
strYr=strYear
if(strDay.charAt(0)=="0"&&strDay.length>1)strDay=strDay.substring(1)
if(strMonth.charAt(0)=="0"&&strMonth.length>1)strMonth=strMonth.substring(1)
for(var i=1;i<=3;i++){if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1)}
month=parseInt(strMonth)
day=parseInt(strDay)
year=parseInt(strYr)
if(pos1==-1||pos2==-1){return false}
if(strDay.length<1||day<1||day>31||(month==2&&day>daysInFebruary(year))||day>daysInMonth[month]){return false}
if(dtStr.indexOf("/",pos2+1)!=-1||isInteger(stripCharsInBag(dtStr,"/"))==false){return false}
return true}
function validateEmailv2(email)
{if(email.length<=0)
{return true;}
var splitted=email.match("^(.+)@(.+)$");if(splitted==null)return false;if(splitted[1]!=null)
{var regexp_user=/^\"?[\w-_\.]*\"?$/;if(splitted[1].match(regexp_user)==null)return false;}
if(splitted[2]!=null)
{var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;if(splitted[2].match(regexp_domain)==null)
{var regexp_ip=/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;if(splitted[2].match(regexp_ip)==null)return false;}
return true;}
return false;}
function comparedate(sbeg,send){abeg=sbeg.split("/")
aend=send.split("/")
dbeg=abeg[0];if(abeg[0].substr(0,1)=="0")
dbeg=abeg[0].substr(1,1);dend=aend[0];if(aend[0].substr(0,1)=="0")
dend=aend[0].substr(1,1);mbeg=abeg[1];if(abeg[1].substr(0,1)=="0")
mbeg=abeg[1].substr(1,1);mend=aend[1];if(aend[1].substr(0,1)=="0"){mend=aend[1].substr(1,1);}
if(parseFloat(abeg[2])>parseFloat(aend[2]))
{return false;}
else
{if(parseFloat(abeg[2])==parseFloat(aend[2]))
{if(parseFloat(mbeg)>parseFloat(mend))
return false;else if(parseFloat(dbeg)>parseFloat(dend)&parseFloat(mbeg)>=parseFloat(mend))
return false;}}
return true;}
function nonBlankValue(stringIn){var numn=stringIn.length;for(i=0;i<stringIn.length;i++){if(stringIn.charAt(i)==" ")
numn-=1;}
return(numn);}
function trim(sString){while(sString.substring(0,1)==' '){sString=sString.substring(1,sString.length);}
while(sString.substring(sString.length-1,sString.length)==' '){sString=sString.substring(0,sString.length-1);}
return sString;}
function trim_regexp(val){return val.replace(/^\s+|\s+$/g,"");}
function checkCompanyName(name){var re=/^[a-zA-Z0-9 ]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkText2(name){var re=/^[a-zA-Z0-9 &_\-]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkTelephone(name){var re=/^[0-9]+$/;if(name.match(re)==null)
{return false;}
return true;}
function checkNumber(name){var re=/^[0-9]+$/;if(name.match(re)==null)
{return false;}
return true;}
function ShowHide(id,value){var e=document.getElementById(id);e.className=value;}
function checkInputXSS(str)
{if(str!=''){str=str.replace(/&lt;/gi,"<");str=str.replace(/&gt;/gi,">");str=str.replace(/<script\s*?.*>?<\/script>/gi,"");}
if(str!='')
str=str.replace(/<script\s*?.*>/gi,"");str=trim(str);return str;}
function checkWebsite(str){var re=/^[\w-]+([\w-]+\.)+[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;if(str.match(re))return true;else return false;}