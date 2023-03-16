$(document).ready(function(){$("#choose-date").DateTimePicker();$("#start-date").DateTimePicker();openPopup();chosenSelect();disableSelect();tabPostingDetail();previewVideo();showFormAddLocation();resetForm();})
function previewVideo(){let input=$('.url-video');let btnPreview=$('.btn-preview');btnPreview.on('click',function(){let dataUrl=input.val();console.log(dataUrl);$(this).attr('href',dataUrl)})}
function openPopup(){let buttonClose=$(".btn-close-modal");$('.btn-created-user').on('click',function(){$.fancybox.open($(".jobs-posting-26-modal"));});$('.btn-edit-user').on('click',function(){$.fancybox.open($(".jobs-posting-27-modal"));});$('.btn-authorization').on('click',function(){$.fancybox.open($(".jobs-posting-28-modal"));});$('.btn-preview-account-user').on('click',function(){$.fancybox.open($(".jobs-posting-29-modal"));});$('.btn-preview-job').on('click',function(){$.fancybox.open($(".jobs-posting-30-modal"));});$('.btn-change-password').on('click',function(){$.fancybox.open($(".jobs-posting-31-modal"));});$('.btn-view-maps').on('click',function(){$.fancybox.open($(".jobs-posting-32-modal"));});buttonClose.on("click",function(){$.fancybox.close();});}
function chosenSelect(){$(".chosen-select").chosen()
$(".chosen-select-max-one").chosen({max_selected_options:1})
$(".chosen-select-max-three").chosen({max_selected_options:3})
$(".chosen-select-max-five").chosen({max_selected_options:5})}
function disableSelect(){$('.form-work-experience select').on('change',function(){if($(this).val()=="0"){$('.form-work-experience input').attr('readonly','readonly').attr('disabled','')}else{$('.form-work-experience input').removeAttr('readonly').removeAttr('disabled')}})
$('.form-desired-salary select').on('change',function(){if($(this).val()=="0"){$('.form-desired-salary input').attr('readonly','readonly').attr('disabled','')}else{$('.form-desired-salary input').removeAttr('readonly').removeAttr('disabled')}})}
function tabPostingDetail(){let tabDetail=$('.jobs-posting-detail .tabslet-tab-detail li')
let tabContent=$('.jobs-posting-detail .tabslet-content-detail')
tabDetail.on('click',function(){let dataTab=$(this).data('tab-detail')
$(this).parents('.tabslet-content').find('.tabslet-tab-detail li').removeClass('active')
$(this).addClass('active')
$(this).parents('.tabslet-content').find('.tabslet-content-detail').removeClass('active')
$(this).parents('.tabslet-content').find('.jobs-posting-detail .tabslet-content-detail[data-content-detail='+dataTab+']').addClass('active')})}
function showFormAddLocation(){let btn=$('.btn-add-location');let formEl=$('.main-application-information.main-add-location');btn.on('click',function(){$(this).parents('.main-application-information').hide();formEl.addClass('active');})}
function resetForm(){let btn=$('button[type="reset"]')
btn.on('click',function(){$('input').attr('value','')})}
$(document).on('scroll',function(){$(window).scroll(function(){var heightBody=$('body').height()
var heightFooter=$('footer.for-customers').height()
var heightWindow=$(window).height()
var height=$(window).scrollTop();if(height>(heightBody-heightFooter-heightWindow)){$('.employer-mail').addClass('no-scroll')}else{$('.employer-mail').removeClass('no-scroll')}});});
/*edit_employer_info.js*/

var is_execute_profile=false;function deleteimage(v)
{$('#'+v).val('');$('#'+v+'_path').html('');$('#'+v+'_h').val('');}
jQuery.validator.addMethod("noSpace",function(value,element){return value==''||value.trim().length!=0;},"No space please and don't leave it empty");$.validator.addMethod('checkphonenumber',function(value,element){var regexPattern=new RegExp(/^([0-9\.\-\+\(\)\ ])+$/);var checkphone=regexPattern.test(value);if(value=='')
{return true;}
else
{if(checkphone){return true;}
return false;}},language.emp_forget_pwd);$.validator.addMethod('checkValidateYoutube',function(value){var url=$('#strVideo').val();url=url.replace(/^\s+|\s+$/g,"");if(url!='')
{var pos=url.indexOf('youtube.com/watch?v=');if(pos<0){return false;}
$.ajax({type:"POST",url:domain+'employers/postjobs/checklinkyoutube',dataType:'JSON',data:'link='+url,success:function(rs)
{if(rs=='0')
return false;else
return true;}});}
return true;},language.emp_photo_error_youtube);function updateInfoCompany()
{if($("#editCompany").validate({onkeyup:false,rules:{EMP_NAME:{required:true,minlength:3},EMP_DESC:{required:true,},EMP_WEBSITE:{url:true,noSpace:true},EMP_TAXID:{checktaxid:true},strVideo:{checkValidateYoutube:true}},messages:{EMP_NAME:{required:language.emp_forget_pwd,minlength:language.input_full_name},EMP_DESC:{required:language.emp_forget_pwd,},EMP_WEBSITE:{url:language.enter_website,},strVideo:{checkValidateYoutube:language.emp_link_video,}},errorPlacement:function(error,element){var name=element.attr('name');var errorSelector='.error_'+name;var $element=$(errorSelector);$(errorSelector).html(error.html());},success:function(error){error.remove();},submitHandler:function(form){$("#update_info_company_form").prop('disabled',true);form.submit();},invalidHandler:function(form,validator){var errors=validator.numberOfInvalids();if(errors){switch(validator.errorList[0].element.getAttribute("name")){default:validator.errorList[0].element.focus();break;}}}}).form()==false)return false;}