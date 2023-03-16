jQuery.fn.indexOf=function(e){for(var i=0;i<this.length;i++){if(this[i]==e){return i}}
            return-1};$.fn.ForceNumericOnly=function(){$(this).keydown(function(e){var key=e.charCode||e.keyCode||0;return(key==8||key==9||key==46||(key>=37&&key<=40)||(key>=48&&key<=57)||(key>=96&&key<=105)||key==231);})}
            if(($.alerts)){$.alerts.dialogClass="custom-jalert";}
            function popupapi(network,url){var height=430,width=600,left=($(window).width()/2)-(width/2),top=($(window).height()/2)-(height/2),path;if(network=='google'){path=ROOT_KIEMVIEC+'index/getrequestgoogle?network='+network+'&method=opener&redirect_url='+url;}else{path=PATH_KIEMVIEC+'service/index/getrequestsocial?network='+network+'&method=opener&redirect_url='+url;}
            popup=window.open(path,network,'height='+height+',width='+width+',top='+top+',left='+left+',resizable=1');}
            function popupApiApply(network,url,link_apply){setCookie('link_apply',link_apply,1,'hour');popupapi(network,url);}
            function popuplogin(){return $.fancybox.open($(".login-modal"));}
            function getCookie(Name){var re=new RegExp(Name+"=[^;]+","i");if(document.cookie.match(re)){return document.cookie.match(re)[0].split("=")[1];}
            return"";}
            function setCookie(name,value,expiredays,Units){if(typeof(Units)==="undefined")Units='day';var exdate=new Date();if(Units=='day')
            exdate.setDate(exdate.getDate()+expiredays);else if(Units=='hour')
            exdate.setTime(exdate.getTime()+expiredays*3600000);var c_value=value+((expiredays==null)?"":"; expires="+exdate.toUTCString());document.cookie=name+"="+c_value+";path=/;SameSite=Strict";}
            function logMissApplyJob(job_id,status){$.ajax({url:PATH_KIEMVIEC+'jobseekers/ajax/logmissapply',async:false,type:'POST',data:{job_id:job_id,status:status},}).done(function(data){console.log("Write log status: "+data);});}
            function parserValueSearch(stringValue){var string=stringValue+"";var arrValue=new Array();arrValue=string.split(',');for(i=0;i<arrValue.length;i++){var value=arrValue[i];arrValue[i]=value.split("_");}
            return arrValue;}
            function strip_tags_input(str,allowed){allowed=(((allowed||'')+'').toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('')
            var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
            var commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
            return str.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:''})}
            function validDatasearchJobs(lang){var keyword=strip_tags_input($('#keyword').val().replace(/[%?\/]/g,''));var keyword=keyword.replace(/\s/g,"-");var keyword=keyword.replace(/#/g,"");var industry=$("#industry").val();var location=$("#location").val();if($(document).width()<1000&&$("#industry_mb").length==1&&$("#location_mb").length==1){var industry=$("#industry_mb").val();var location=$("#location_mb").val();}
            var salary=$("#salary").val();if(typeof salary==="undefined")
            salary="";var level=$("#level").val();if(typeof level==="undefined")
            level="";var days=$("#days").val();if(typeof days==="undefined")
            days="";var emp_id=$("#emp_id").val();if(typeof emp_id==="undefined")
            emp_id="";var emp_name=$("#emp_name").val();if(typeof emp_name==="undefined")
            emp_name="";var homework=($("#work-home-fli").is(':checked'))?1:0;var recommend=$("#recommend").val();if(typeof recommend==="undefined")
            recommend=0;var benefit=$("#benefit").val();if(typeof benefit==="undefined")
            benefit='';var job_type=$("#job_type").val();if(typeof job_type==="undefined")
            job_type='';var ulr=mapKeywords.job+"/";if(keyword!=""){if(location!=null&&location!=""){arrLocation=parserValueSearch(location);ulr+=keyword+"-"+mapKeywords.tai+"-"+arrLocation[0][0]+"-k";}else{ulr+=keyword+"-k";}
            if(industry!=null&&industry!=""){arrIndustry=parserValueSearch(industry);ulr+="c"+arrIndustry[0][1];for(i=1;i<arrIndustry.length;i++){ulr+=","+arrIndustry[i][1];}}
            if(location!=null&&location!=""){arrLocation=parserValueSearch(location);ulr+="l"+arrLocation[0][1];for(i=1;i<arrLocation.length;i++){ulr+=","+arrLocation[i][1];}}
            if(salary!=""&&salary!=null){ulr+="s"+salary;}
            if(level!=""&&level!=null){arrLevel=parserValueSearch(level);ulr+="e"+arrLevel[0][1];}
            if(emp_id!=""){ulr+="p"+emp_id;}
            if(days!=""){ulr+="d"+days;}
            if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(industry!=null&&industry!=""){arrIndustry=parserValueSearch(industry);if(location!=""&&location!=null){arrLocation=parserValueSearch(location);ulr+=arrIndustry[0][0]+"-"+mapKeywords.tai+"-"+arrLocation[0][0]+"-c"+arrIndustry[0][1];for(i=1;i<arrIndustry.length;i++){ulr+=","+arrIndustry[i][1];}
            ulr+="l"+arrLocation[0][1];for(i=1;i<arrLocation.length;i++){ulr+=","+arrLocation[i][1];}}else{strId="c";for(i=0;i<arrIndustry.length;i++){ulr+=arrIndustry[i][0]+"-";strId+=arrIndustry[i][1]+",";}
            strId=strId.substr(0,strId.length-1);ulr+=strId;}
            if(salary!=""&&salary!=null){ulr+="s"+salary;}
            if(level!=""&&level!=null){arrLevel=parserValueSearch(level);ulr+="e"+arrLevel[0][1];}
            if(emp_id!=""){ulr+="p"+emp_id;}
            if(days!=""){ulr+="d"+days;}
            if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(location!=null&&location!=""){arrLocation=parserValueSearch(location);strId="l";for(i=0;i<arrLocation.length;i++){ulr+=arrLocation[i][0]+"-";strId+=arrLocation[i][1]+",";}
            strId=strId.substr(0,strId.length-1);ulr+=strId;if(salary!=""&&salary!=null){ulr+="s"+salary;}
            if(level!=""&&level!=null){arrLevel=parserValueSearch(level);ulr+="e"+arrLevel[0][1];}
            if(emp_id!=""){ulr+="p"+emp_id;}
            if(days!=""){ulr+="d"+days;}
            if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(salary!=""){ulr+=mapKeywords.salary+"-"+salary+"trvnd-s"+salary;if(level!=""&&level!=null){arrLevel=parserValueSearch(level);ulr+="e"+arrLevel[0][1];}
            if(days!=""){ulr+="d"+days;}
            if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(level!=""){arrLevel=parserValueSearch(level);strId="e";ulr+=arrLevel[0][0]+"-";strId+=arrLevel[0][1]+",";strId=strId.substr(0,strId.length-1);ulr+=strId;if(days!=""){ulr+="d"+days;}
            if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(days!=""){ulr+=mapKeywords.ngay_cap_nhat+"-d"+days;if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+="t"+arrJobType[0][1];}
            if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(job_type!=""){arrJobType=parserValueSearch(job_type);ulr+=arrJobType[0][0]+"-t"+arrJobType[0][1];if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+="b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}}else if(benefit!=""){arrBenefit=parserValueSearch(benefit);ulr+=arrBenefit[0][0]+"-b"+arrBenefit[0][1];for(i=1;i<arrBenefit.length;i++){ulr+=","+arrBenefit[i][1];}}else if(emp_id!=""&&emp_name!=""){ulr+=emp_name+"-p"+emp_id;}else if(recommend==1){ulr+=mapKeywords.recommend+"-m1";}else{ulr+=mapKeywords.all_jobs;}
            if(typeof arrLocation==='undefined')arrLocation=[];if(typeof arrIndustry==='undefined')arrIndustry=[];if(typeof salary==='undefined')salary='';if(typeof arrLevel==='undefined')arrLevel=[];tracking_btn_search_click(keyword,arrLocation,arrIndustry,salary,arrLevel,3);return ulr;}
            function clearFilter(){if($("#salary").length)
            $("#salary").val('');if($("#level").length)
            $("#level").val('');if($("#days").length)
            $("#days").val('');if($("#job_type").length)
            $("#job_type").val('');if($("#benefit").length){$("#benefit option:selected").each(function(){$(this).prop("selected",false);});$('.multiselect2').multiselect("refresh");}}
            function validDatasearchJobsByKeyword(lang){if($("#recommend").length)
            $("#recommend").val(0);clearFilter();var ulr=validDatasearchJobs(lang);ulr+="-"+lang+".html";window.location=ROOT_KIEMVIEC+ulr;return false;}
            function validataSearchHomePage(lang){if($("#recommend").length)
            $("#recommend").val(0);var ulr=validDatasearchJobs(lang);ulr+="-"+lang+".html";window.location=ROOT_KIEMVIEC+ulr;return false;}
            function validataSearchJobEmp(){var ulr=validDatasearchJobs(CURRENT_LANGUAGE);ulr+="-"+CURRENT_LANGUAGE+".html";window.location=ROOT_KIEMVIEC+ulr;return false;}
            function checkEmail(stringIn){var re=/^([A-Za-z0-9\_\-]+\.)*[A-Za-z0-9\_\-]+@[A-Za-z0-9\_\-]+(\.[A-Za-z0-9\_\-]+)+$/;var sEMail=stringIn;if((sEMail=="")||(sEMail.search(re)==-1)){return(false)}
            return(true)};function func_strip_tags_input(e,allowed){var str=e.val();if(typeof str!='undefined'){allowed=(((allowed||'')+'').toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('')
            var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
            var commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
            str=str.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:''});e.val(str);}}
            function tracking_btn_search_click(keyword,arrLocation,arrIndustry,salary,arrLevel,group){var smartech_job_location_id='',smartech_job_location='',smartech_category_name_id='',smartech_category_name='',smartech_search_keyword='',smartech_job_level_id='',smartech_job_level='';var smartech_from_salary=0,smartech_to_salary=0,smartech_unit_salary='VND',smartech_expected_salary=0;if(group==1){var id_industry='#industry';var id_location='#location';var id_level='';var id_salary='';}else if(group==2){var id_industry='#industry';var id_location='#location';var id_level='';var id_salary='';}else if(group==3){var id_industry='#industry';var id_location='#location';var id_level='#level';var id_salary='#salary';}
            if(typeof arrLocation!=='undefined'&&arrLocation.length>0){var arr_location_new_id=[];var arr_location_new_text=[];$.each(arrLocation,function(k,v){arr_location_new_id.push(v[1]);});$(id_location+" option:selected").each(function(){arr_location_new_text.push($(this).html());});smartech_job_location_id=arr_location_new_id.join(',');smartech_job_location=arr_location_new_text.join(',');}
            if(typeof arrIndustry!=='undefined'&&arrIndustry.length>0){var arr_industry_new_id=[];var arr_industry_new_text=[];$.each(arrIndustry,function(k,v){arr_industry_new_id.push(v[1]);});$(id_industry+" option:selected").each(function(){arr_industry_new_text.push($(this).html());});smartech_category_name_id=arr_industry_new_id.join(',');smartech_category_name=arr_industry_new_text.join(',');}
            if(typeof keyword!=='undefined'){smartech_search_keyword=keyword.replace(/-/g," ");}
            if(typeof arrLevel!=='undefined'&&arrLevel.length>0&&arrLevel!=''){var arr_level_new_id=[];var arr_level_new_text=[];$.each(arrLevel,function(k,v){arr_level_new_id.push(v[1]);});$(id_level+" option:selected").each(function(){arr_level_new_text.push($(this).html());});smartech_job_level_id=arr_level_new_id.join(',');smartech_job_level=arr_level_new_text.join(',');}
            if(typeof salary!=='undefined'&&salary!=-1&&salary!=''){var str_salary=$(id_salary+" option:selected").html();var arr_salary_text=str_salary.split(" ").filter(Boolean);arr_salary_text_end=arr_salary_text.pop();smartech_expected_salary=arr_salary_text.join(" ");smartech_from_salary=arr_salary_text[1].replace(/\.|\,/g,"");smartech_to_salary=0;smartech_unit_salary='VND'}
            if($.isFunction(window.smartech)){smartech('dispatch','bt_search_job',{"job_location_id":smartech_job_location_id,"job_location":smartech_job_location,"category_name_id":smartech_category_name_id,"category_name":smartech_category_name,"search_keyword":smartech_search_keyword,"expected_salary":smartech_expected_salary,"from__salary":parseFloat(smartech_from_salary),"to__salary":parseFloat(smartech_to_salary),"unit_salary":smartech_unit_salary,"job_level_id":smartech_job_level_id,"job_level":smartech_job_level,"member":memberLogin});}}
            function searchJobView(val){setCookie('search_job_view',val,365);var url=$("#url_page_search").val();window.location.href=url;}
            function mapIndustryFUrl(e){if($(e).is(':checked')){strIndustryFID=$('#strIndustryFID').val();if(strIndustryFID!=''){arrIndustryID=strIndustryFID.split(',');indexElement=$.inArray($(e).val(),arrIndustryID);if(indexElement>=0)
            arrIndustryID.splice(indexElement,1);else
            arrIndustryID.push($(e).val());if(arrIndustryID.length>1)
            $('#strIndustryFID').val(arrIndustryID.join(","));else if(arrIndustryID.length==1)
            $('#strIndustryFID').val(arrIndustryID[0]);else
            $('#strIndustryFID').val('');}else{$('#strIndustryFID').val($(e).val());}}else{strIndustryFID=$('#strIndustryFID').val();arrIndustryID=strIndustryFID.split(',');indexElement=$.inArray($(e).val(),arrIndustryID);arrIndustryID.splice(indexElement,1);if(arrIndustryID.length>1)
            $('#strIndustryFID').val(arrIndustryID.join(","));else if(arrIndustryID.length==1)
            $('#strIndustryFID').val(arrIndustryID[0]);else
            $('#strIndustryFID').val('');}}
            function mapLevelFUrl(e){if($(e).is(':checked')){strLevelFID=$('#strLevelFID').val();if(strLevelFID!=''){arrLevelFID=strLevelFID.split(',');indexElement=$.inArray($(e).val(),arrLevelFID);if(indexElement>=0)
            arrLevelFID.splice(indexElement,1);else
            arrLevelFID.push($(e).val());if(arrLevelFID.length>1)
            $('#strLevelFID').val(arrLevelFID.join(","));else if(arrLevelFID.length==1)
            $('#strLevelFID').val(arrLevelFID[0]);else
            $('#strLevelFID').val('');}else{$('#strLevelFID').val($(e).val());}}else{strLevelFID=$('#strLevelFID').val();arrLevelFID=strLevelFID.split(',');indexElement=$.inArray($(e).val(),arrLevelFID);arrLevelFID.splice(indexElement,1);if(arrLevelFID.length>1)
            $('#strLevelFID').val(arrLevelFID.join(","));else if(arrLevelFID.length==1)
            $('#strLevelFID').val(arrLevelFID[0]);else
            $('#strLevelFID').val('');}}
            function mapLocationFUrl(e){if($(e).is(':checked')){strLocationFID=$('#strLocationFID').val();if(strLocationFID!=''){arrLocationFID=strLocationFID.split(',');indexElement=$.inArray($(e).val(),arrLocationFID);if(indexElement>=0)
            arrLocationFID.splice(indexElement,1);else
            arrLocationFID.push($(e).val());if(arrLocationFID.length>1)
            $('#strLocationFID').val(arrLocationFID.join(","));else if(arrLocationFID.length==1)
            $('#strLocationFID').val(arrLocationFID[0]);else
            $('#strLocationFID').val('');}else{$('#strLocationFID').val($(e).val());}}else{strLocationFID=$('#strLocationFID').val();arrLocationFID=strLocationFID.split(',');indexElement=$.inArray($(e).val(),arrLocationFID);arrLocationFID.splice(indexElement,1);if(arrLocationFID.length>1)
            $('#strLocationFID').val(arrLocationFID.join(","));else if(arrLocationFID.length==1)
            $('#strLocationFID').val(arrLocationFID[0]);else
            $('#strLocationFID').val('');}}
            function validFilterdataSearch(lang,type,e){var ulr=validDatasearchJobs(lang);if(type=='location')
            mapLocationFUrl(e);var locationF=$("#strLocationFID").val();if(type=='industry')
            mapIndustryFUrl(e);var industryF=$("#strIndustryFID").val();var salaryF=$('#strSalaryFID').val();if(type=='salary')
            salaryF=$(e).val();if(type=='level')
            mapLevelFUrl(e);var levelF=$("#strLevelFID").val();var dateF=$('#strDateFID').val();if(type=='date')
            dateF=$(e).val();var homeworkF=$('#work-home-fli').val();if(type=='homework'){if($("#work-home-fli").is(':checked'))
            homeworkF=1;}
            if(locationF){ulr+="-f"+"l"+locationF;if(industryF)
            ulr+="c"+industryF;if(salaryF>0)
            ulr+="s"+salaryF;if(levelF>0)
            ulr+="e"+levelF;if(dateF>0)
            ulr+="d"+dateF;if(homeworkF==1)
            ulr+="h"+homeworkF;}else if(industryF){ulr+="-f"+"c"+industryF;if(salaryF>0)
            ulr+="s"+salaryF;if(levelF>0)
            ulr+="e"+levelF;if(dateF>0)
            ulr+="d"+dateF;if(homeworkF==1)
            ulr+="h"+homeworkF;}else if(salaryF>0){ulr+="-f"+"s"+salaryF;if(levelF>0)
            ulr+="e"+levelF;if(dateF>0)
            ulr+="d"+dateF;if(homeworkF==1)
            ulr+="h"+homeworkF;}else if(levelF>0){ulr+="-f"+"e"+levelF;if(dateF>0)
            ulr+="d"+dateF;if(homeworkF==1)
            ulr+="h"+homeworkF;}else if(dateF>0){ulr+="-f"+"d"+dateF;if(homeworkF==1)
            ulr+="h"+homeworkF;}else if(homeworkF==1){ulr+="-f"+"h"+homeworkF;}
            ulr+="-"+lang+".html";window.location=ROOT_KIEMVIEC+ulr;return false;}
            function lazy_loadimg_list(){if($(".jobs-side-list").length){$("img.lazy-img").lazy({appendScroll:$(".jobs-side-list")});}else{$("img.lazy-img").lazy();}}
            function fixWidthChosen(){$(".chosen-select-max-three").each(function(){var ow_defaul=wit_defaul=it_defaul=0;var id_default='#'+$(this).attr('id')+'_chosen';var w_default=$(id_default).width()-35;$(id_default+' li.search-choice').each(function(){$(this).find("span").removeAttr("style");ow_defaul+=$(this).width()+30;it_defaul++;});if(w_default<ow_defaul){wit_defaul=Math.round(w_default/it_defaul)-35;$(id_default+' li.search-choice span').css('width',wit_defaul+'px');}});if($(window).width()<1025){$('.search-choice-close').on('touchend',function(){$(this).trigger('click');})
            $('.search-choice-close').on('tap',function(){$(this).trigger('click');})}}
            $(document).on("click",".btn-close-modal",function(){$.fancybox.close();});function show_noti(type,content,more_link,icon,multi){if(type==1){var class_type='success-modal';if(typeof(content)==="undefined")content=language.popup_msg_success;}else{var class_type='remove-modal';if(typeof(content)==="undefined")content=language.popup_msg_error;}
            if(typeof(icon)!=="undefined"&&icon!=""){var txt_icon=icon;}else{if(type==1){var txt_icon='./img/icon-success.png';}else{var txt_icon='./img/icon-error.png';}}
            if(typeof(more_link)==="undefined"){var more_link='';}
            var txt_multi=0;if(typeof(multi)!=="undefined"){var txt_multi=1;}
            if(txt_multi==0)
            $.fancybox.close('all');var html_popup='<div class="'+class_type+'"><div class="modal-title"><p>'+language.title_popup+'</p></div><div class="modal-body"><div class="icon"><img src="'+txt_icon+'" alt=""></div><p>'+content+'</p>'+more_link+'<a class="btn-close-modal" href="javascript:;">'+language.popup_close_popup+'</a></div></div>';$.fancybox.open(html_popup);}
            function savejob(job_id){if($(".chk_save_"+job_id).hasClass('saved')){var type=1;}else{var type=0;}
            $.ajax({type:"POST",url:PATH_KIEMVIEC+'jobseekers/ajax/savedelete',data:'job_id='+job_id+'&type='+type,dataType:'json'}).done(function(data){if(data.status==1){show_noti(1,language.job_message_save_job_succ);$(".chk_save_"+data.id).find('.text').html(language.job_chk_save_jobs_saved);$(".chk_save_"+data.id).find('.toolip p').html(language.job_chk_save_jobs_saved);$(".chk_save_"+data.id).addClass('saved');if($.isFunction(window.callSmartech_SaveUnSave_Jobs))
            callSmartech_SaveUnSave_Jobs(job_id);}else if(data.status==2){show_noti(2,language.job_message_delete_job_succ);$(".chk_save_"+data.id).find('.text').html(language.job_chk_save_jobs_save);$(".chk_save_"+data.id).find('.toolip p').html(language.job_chk_save_jobs_save);$(".chk_save_"+data.id).removeClass('saved');if($.isFunction(window.callSmartech_SaveUnSave_Jobs))
            callSmartech_SaveUnSave_Jobs(job_id);}else{show_noti(2,language.job_message_error);}});}
            $("#header_login").validate({onkeyup:false,onfocusout:false,rules:{username:{required:true},password:{required:true},},errorPlacement:function(error,element){return;},invalidHandler:function(form,validator){if(validator.numberOfInvalids()){show_noti(2,language.popup_login_error);}},submitHandler:function(form){$("header .main-login .title-login").trigger("click");form.submit();},});function searchResultTabs(){$(".search-result-list-detail .tabs, .search-result .tabs").tabslet({attribute:'data-href',});}
            function companyPhotoSlide(){return new Swiper('.company-photo .swiper-container',{slidesPerView:4,spaceBetween:6,lazy:true,breakpoints:{1200:{slidesPerView:2}},navigation:{prevEl:'.company-photo .swiper-prev',nextEl:'.company-photo .swiper-next'}})}
            function follow_act(){$('#follow_act').click(function(){if(member_id<0){return popuplogin();}else{var type=$('#follow_act').attr('rel');var isTS=$('#isTS').val();var emp_webts=$('#emp_websitets').val();$.ajax({type:"POST",url:PATH_KIEMVIEC+'jobseekers/mykiemviec/follow',data:'emp_id='+emp_id+'&jsk_id='+jsk_id+'&type='+type+'&isTS='+isTS+'&emp_webts='+emp_webts,dataType:'json',success:function(obj){if(obj.total>49){$('#totalFollowers').css('display','block');$('#countFollowers').html(obj.total).formatCurrency({digitGroupSymbol:','});}
            if(type==1){$("#follow_act").attr('rel',0);var more_link='<a class="view-saved-job" href="'+language.followed_link+'">'+language.followed_link_txt+'</a>'
            show_noti(1,language.follow_success,more_link);$(".btn-follow").addClass("followed");if($.isFunction(window.smartech)){smartech('dispatch','bt_follow_company',{"employer_id":empIdDec});}}else{$("#follow_act").attr('rel',1);$(".btn-follow").removeClass("followed");show_noti(2,language.follow_delete_success);}}});}});}
            $(document).ready(function(){$.validator.addMethod('isemail',function(value,element){var valemail=$.trim(value);return checkEmail(valemail);},language.message_common);if(is_mobile==1){$("a[target=\"_blank\"]").removeAttr("target");}
            $(window).resize(function(){if($(".chosen-select-max-three").length>0){fixWidthChosen();}
            if(window.matchMedia("(max-width: 767px)").matches){document.cookie="search_job_view=list; path=/";}});if(window.matchMedia("(max-width: 767px)").matches){document.cookie="search_job_view=list; path=/";}
            $('#follow_act').click(function(){if(member_id<0){return popuplogin();}else{var type=$('#follow_act').attr('rel');var isTS=$('#isTS').val();var emp_webts=$('#emp_websitets').val();$.ajax({type:"POST",url:PATH_KIEMVIEC+'jobseekers/mykiemviec/follow',data:'emp_id='+emp_id+'&jsk_id='+jsk_id+'&type='+type+'&isTS='+isTS+'&emp_webts='+emp_webts,dataType:'json',success:function(obj){if(obj.total>49){$('#totalFollowers').css('display','block');$('#countFollowers').html(obj.total).formatCurrency({digitGroupSymbol:','});}
            if(type==1){$("#follow_act").attr('rel',0);var more_link='';show_noti(1,language.follow_success,more_link);$(".btn-follow").addClass("followed");if($.isFunction(window.smartech)){smartech('dispatch','bt_follow_company',{"employer_id":empIdDec});}}else{$("#follow_act").attr('rel',1);$(".btn-follow").removeClass("followed");show_noti(2,language.follow_delete_success);}}});}});loadAllChoosen();if($(".keyword").length>0){$('.keyword').blur();$('.keyword').keyup(function(){if(is_mobile==1&&$("div.row div.form-keyword").length>0)
            $("html, body").animate({scrollTop:$("div.row div.form-keyword").offset().top-60},600);$(".advanced-search-btn a").click();});$('.keyword').focus(function(){if(is_mobile==1&&$("div.row div.form-keyword").length>0)
            $("html, body").animate({scrollTop:$("div.row div.form-keyword").offset().top-60},600);$(".advanced-search-btn a").click();});var link_ajax=PATH_KIEMVIEC+'jobseekers/index/getlistkeyword?typedata=json';$('.keyword').autoComplete({minChars:3,source:function(term,response){term=term.toLowerCase();$.getJSON(link_ajax,{q:term,limit:10},function(data){response(data);});}});}
            if($(".keyword_careermap").length>0){var link_ajax=PATH_KIEMVIEC+"salary/index/getlistkeyword";$('.keyword_careermap').autoComplete({minChars:0,source:function(term,response){term=term.toLowerCase();$.getJSON(link_ajax,{q:term,limit:10},function(data){response(data);});}});}
            if(typeof arrData==="undefined")
            arrData=new Array();if(arrData.KEYWORD){$(".keyword").val(arrData.KEYWORD.replace(/[-]/g,' '));}
            if(arrData.strIndustry){var industry=arrData.strIndustry;var arrIndustry=industry.split(",");$.each(arrIndustry,function(index,value){$("#industry option[value="+value+"]").attr("selected","selected");$("#industry_mb option[value="+value+"]").attr("selected","selected");});$("#industry").trigger("chosen:updated");$("#industry_mb").trigger("chosen:updated");}
            if(arrData.strLocation){var location=arrData.strLocation;var arrLocation=location.split(",");$.each(arrLocation,function(index,value){$("#location option[value="+value+"]").attr("selected","selected");$("#location_mb option[value="+value+"]").attr("selected","selected");});$("#location").trigger("chosen:updated");$("#location_mb").trigger("chosen:updated");}
            if(arrData.SALARY_FROM){$("#salary option[value="+parseInt(arrData.SALARY_FROM/1000000)+"]").attr("selected","selected");$("#salary").trigger("chosen:updated");}
            if(arrData.LEVEL){$("#level option[value="+arrData.strLevel+"]").attr("selected","selected");$("#level").trigger("chosen:updated");}
            setTimeout(function(){fixWidthChosen();},1000);if(memberLogin=="no"){setTimeout(function(){$("#header_login input[name=username]","#header_login input[name=password]").val("");},1000);}});$(".lazy-bg, img.lazy-img").lazy();function triggerMobileSearch(){if(typeof arrData==="undefined")
            arrData=new Array();if(arrData.KEYWORD){$(".keyword").val(arrData.KEYWORD.replace(/[-]/g,' '));}
            if(arrData.strIndustry){var industry=arrData.strIndustry;var arrIndustry=industry.split(",");$.each(arrIndustry,function(index,value){$("#industry option[value="+value+"]").attr("selected","selected");$("#industry_mb option[value="+value+"]").attr("selected","selected");});$("#industry").trigger("chosen:updated");$("#industry_mb").trigger("chosen:updated");}
            if(arrData.strLocation){var location=arrData.strLocation;var arrLocation=location.split(",");$.each(arrLocation,function(index,value){$("#location option[value="+value+"]").attr("selected","selected");$("#location_mb option[value="+value+"]").attr("selected","selected");});$("#location").trigger("chosen:updated");$("#location_mb").trigger("chosen:updated");}
            if(arrData.SALARY_FROM){$("#salary option[value="+parseInt(arrData.SALARY_FROM/1000000)+"]").attr("selected","selected");$("#salary").trigger("chosen:updated");}
            if(arrData.LEVEL){$("#level option[value="+arrData.strLevel+"]").attr("selected","selected");$("#level").trigger("chosen:updated");}}
            function jobdetailPhotoSlide(){return new Swiper('.photo-jobdetail .swiper-container',{slidesPerView:4,spaceBetween:6,lazy:true,breakpoints:{1200:{slidesPerView:2}},navigation:{prevEl:'.photo-jobdetail .swiper-prev',nextEl:'.photo-jobdetail .swiper-next'}})}
            function loadBannerOA(){loadBannerPage=1;if($(".adsBannerOA").length){$(".adsBannerOA").each(function(){var id=$(this).data("id");if(typeof(OA_output[id])!=="undefined"){$(this).html(OA_output[id]);}});}}
            function adVanceJobalert(){var urlRedirect=ROOT_KIEMVIEC+mapKeywords.jobalert+"?";var keyword=strip_tags_input($('#keyword').val().replace(/\//g,""));var keyword=keyword.replace(/#/g,"");var industry=$("#industry").val();var location=$("#location").val();var salary=$("#salary").val();var level=$("#level").val();var days=$("#days").val();if(keyword!=""){urlRedirect+='&keyword='+keyword;}
            if(industry!=""){arrIndustry=parserValueSearch(industry);urlRedirect+="&industry="+arrIndustry[0][1];for(i=1;i<arrIndustry.length;i++){urlRedirect+=","+arrIndustry[i][1];}}
            if(location!=""){arrLocation=parserValueSearch(location);urlRedirect+="&location="+arrLocation[0][1];for(i=1;i<arrLocation.length;i++){urlRedirect+=","+arrLocation[i][1];}}
            if(salary!=""){urlRedirect+="&salary="+salary*1000000;}
            window.location.href=urlRedirect;return false;}
            function strip_tags(str){t=str.replace(/<(\/)?(html|head|title|body|h1|h2|h3|h4|h5|h6|hr|pre|em|code|a|dl|dd|table|tr|th|td|span|div|img|label|u)([^>]*)>/gi,"");t=t.replace(/<(\/)?(iframe|frameset|form|input|select|option|textarea|blackquote|address|object|script)([^>]*)>/gi,"");return t;}
            function emailExistsInContent(str){str=removeHTMLTags(str);str=str.replace(/\s+|-|\./g,'');var patt=/([a-z0-9_\.\-])+\@\w+[\.\w+]+\b/gi;var result=str.match(patt);if(result==null)return false;else return true;}
            function phoneExistsInContent(str){str=removeHTMLTags(str);str=str.replace(/\s|\./g,'');var str2="[0-9]{8,12}";var re=new RegExp(str2);var m=re.exec(str);if(m==null)return false;else return true;}
            function removeHTMLTags(strInputCode){strInputCode=strInputCode.replace(/&(lt|gt);/g,function(strMatch,p1){return(p1=="lt")?"<":">";});var strTagStrippedText=strInputCode.replace(/<\/?[^>]+(>|$)/g,"");return strTagStrippedText;}
            function reload_js(src){$('script[src="'+DOMAIN_STATIC+src+'"]').remove();$('<script>').attr('src',DOMAIN_STATIC+src).appendTo('head');}
            function checkApply(){var apply_job_id=[];$('.chk_apply').each(function(){apply_job_id.push($(this).data('id'));});if(apply_job_id.length>0){var check_apply=$.ajax({url:ROOT_KIEMVIEC+'jobseekers/check-apply-job',dataType:'json',data:'lst_id='+apply_job_id.join()});var finish_apply=check_apply.then(function(data){$.each(data,function(i,item){if(item.status==1){$(".apply_"+item.id).removeAttr("data-id style").removeClass("chk_apply apply_"+item.id);}else{$(".apply_"+item.id).remove();}});});}}
            function checkSaveJob(){$('.save-job').each(function(){list_job_id.push($(this).data('id'));});var check_job=$.ajax({url:ROOT_KIEMVIEC+'jobseekers/check-save-job',dataType:'json',data:'lst_id='+list_job_id.join()});var finish_chk=check_job.then(function(data){if(data.status=1){$.each(data.result,function(i,item){if(item.status==1){$(".chk_save_"+item.id).addClass('saved');$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_saved);$(".chk_save_value_"+item.id).val(1);}else{$(".chk_save_value_"+item.id).val(0);$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_save);}});}});}
            function copyToClipboard(text){navigator.clipboard.writeText(text);$("#tooltip-copy").css('display','block');setTimeout(function(){$("#tooltip-copy").hide();},1000);}
            function loadAllChoosen(){if($(".chosen-select-max-three").length>0){$(".chosen-select-max-three").each(function(){$(this).chosen({max_selected_options:3}).change(function(e,params){if(params.selected==""){$(this).find('option[value=""]').prop('selected',false);$(this).trigger("chosen:updated");}
            var id='#'+$(this).attr('id')+'_chosen';ow=it=0;var w=$(id).innerWidth()-35;var k=0;var e=0;if($(this).val()!=null)
            e=parseInt($(this).val().length);else
            e=0;$(id+' li.search-choice').each(function(){$(this).find('span').css('width','100%');if(k<e){ow+=$(this).width()+30;it++;}
            k++;});if(w<ow){$(id+' ul').addClass('shortags');wit=Math.round(w/it)-35;$(id+' li.search-choice span').css('width',wit+'px');}else{$(id+' ul').removeClass('shortags');$(id+' li.search-choice span').css('width','calc()');}
            if($(window).width()<1025){$(document).trigger('click')
            $('.search-choice-close').on('touchend',function(){$(this).trigger('click');})
            $('.search-choice-close').on('tap',function(){$(this).trigger('click');})}});});}
            if($(".chosen-select-max-five").length>0){$(".chosen-select-max-five").chosen({max_selected_options:3}).change(function(e,params){if($(this).is(":visible")){if(params.selected==""){$(this).find('option[value=""]').prop('selected',false);$(this).trigger("chosen:updated");}
            var id='#'+$(this).attr('id')+'_chosen';ow=it=0;var w=$(id).width()-35;var k=0;var e=0;if($(this).val()!=null)
            e=parseInt($(this).val().length);else
            e=0;$(id+' li.search-choice').each(function(){$(this).find('span').css('width','100%');if(k<e){ow+=$(this).width()+30;it++;}
            k++;});if(w<ow){$(id+' ul').addClass('shortags');wit=Math.round(w/it)-35;$(id+' li.search-choice span').css('width',wit+'px');}else{$(id+' ul').removeClass('shortags');$(id+' li.search-choice span').css('width','calc()');}
            if($(window).width()<1025){$(document).trigger('click')
            $('.search-choice-close').on('touchend',function(){$(this).trigger('click');})
            $('.search-choice-close').on('tap',function(){$(this).trigger('click');})}}});}
            if($(".chosen-select-max-one").length>0){$(".chosen-select-max-one").chosen({max_selected_options:1}).change(function(e,params){if($(this).is(":visible")){if(params.selected==""){$(this).find('option[value=""]').prop('selected',false);$(this).trigger("chosen:updated");}
            if($(window).width()<1025){$(document).trigger('click')
            $('.search-choice-close').on('touchend',function(){$(this).trigger('click');})
            $('.search-choice-close').on('tap',function(){$(this).trigger('click');})}}});}}
            if(memberLogin=='no'){window.onload=function(){if(typeof google!=='undefined'){google.accounts.id.initialize({client_id:client_id,callback:function(credentialResponse){var response=credentialResponse;$.ajax({type:'POST',url:PATH_KIEMVIEC+'jobseekers/logingoogleonetap',data:{'jwt':response.credential}}).done(function(status){if(status==1){location.reload();}else{show_noti(2,language.popup_login_error);}});}});google.accounts.id.prompt((notification)=>{if(notification.isNotDisplayed()||notification.isSkippedMoment()){console.log(notification.getNotDisplayedReason());}});}};}
            function CountViewJobDetail(job_id){if(job_id!=''){$.ajax({type:"POST",url:PATH_KIEMVIEC+'jobseekers/ajax/counter',dataType:'JSON',data:{'job_id':job_id}})}}
            /*matching-resume-job.js*/
            
            var matchingJob=[];function checkmatchingAll(lsJobIdMatching){if(memberLogin=='yes'){let json_data={'lsJob':lsJobIdMatching,'lang':CURRENT_LANGUAGE};$.ajax({type:'POST',url:ROOT_KIEMVIEC+'check-matching',data:json_data,dataType:'json',async:true}).done(function(res){if(res.status==1){for(const item in res.data){let obj_matching=".matching-scores-"+item;let key_array=item;let res_item=res.data[item];if(res_item.status==1){$(obj_matching).html(res_item.text);matchingJob[key_array]=res_item.data;}else{$(obj_matching).hide();}}}});}}
            function lazyloadmatching(){let lsJobIdMatching=[];$('.matching-scores').each(function(){lsJobIdMatching.push($(this).attr('dataid'));});checkmatchingAll(lsJobIdMatching);}
            var html_modal_tips=`<div class="desc-feature-modal"style="display: none"><div class="modal-title"><h3>${language.modal_matching_job_header_tips}</h3></div><div class="modal-body">${language.modal_matching_job_body_tips}</div></div>`;$(document).on('click','.btn-check-fit',function(){var jobID=$(this).attr('dataid');let key_array=jobID;var datamatchingJob=matchingJob[key_array];if(typeof(datamatchingJob)!=='undefined'){showPopupMatching(datamatchingJob);}});function showPopupMatching(datamatchingJob){var html_modal=`<div class="fit-modal"><div class="modal-title"><h3>${language.modal_matching_job_header_title}</h3></div><div class="modal-body"><div class="sub-title"><h5><span>${language.modal_matching_job_body_title}</span>&nbsp;<a href="javascript:void(0);"class="link-modal">${language.modal_matching_job_body_title_tips}</a></h5></div><div class="box-percent"><div id="bluecircle"data-percent="${datamatchingJob.scores}"class="big"></div></div><div class="row row-data-1"><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_skill}</strong><div class="box-progress"><div class="progress-bar progress-bar-1"><span style="width: ${datamatchingJob.skillScores}%"></span></div><span>${datamatchingJob.skillScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_experience}</strong><div class="box-progress"><div class="progress-bar progress-bar-2"><span style="width: ${datamatchingJob.experienceScores}%"></span></div><span>${datamatchingJob.experienceScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_salary}</strong><div class="box-progress"><div class="progress-bar progress-bar-3"><span style="width: ${datamatchingJob.salaryScores}%"></span></div><span>${datamatchingJob.salaryScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_degree}</strong><div class="box-progress"><div class="progress-bar progress-bar-4"><span style="width: ${datamatchingJob.degreeScores}%"></span></div><span>${datamatchingJob.degreeScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_industry}</strong><div class="box-progress"><div class="progress-bar progress-bar-1"><span style="width: ${datamatchingJob.industryScores}%"></span></div><span>${datamatchingJob.industryScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_location}</strong><div class="box-progress"><div class="progress-bar progress-bar-1"><span style="width: ${datamatchingJob.locationScores}%"></span></div><span>${datamatchingJob.locationScores}%</span></div></div></div></div><div class="col-md-3"><div class="col-progress"><div class="inner"><strong>${language.modal_matching_job_title}</strong><div class="box-progress"><div class="progress-bar progress-bar-1"><span style="width: ${datamatchingJob.titleScores}%"></span></div><span>${datamatchingJob.titleScores}%</span></div></div></div></div></div><p class="text-notes">${language.modal_matching_job_note}</p></div></div>`;$.fancybox.open(html_modal);$("[id$='circle']").percircle();$('.fit-modal .link-modal').on('click',function(e){e.preventDefault();$.fancybox.open(html_modal_tips);});}
            $(window).on('load',function(){lazyloadmatching();});