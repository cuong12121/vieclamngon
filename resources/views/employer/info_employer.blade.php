@extends('frontend.layout.appfe')
@section('content') 

<style>


/*jquery.fancybox.css*/
body.compensate-for-scrollbar{overflow:hidden;}.fancybox-active{height:auto;}.fancybox-is-hidden{left:-9999px;margin:0;position:absolute !important;top:-9999px;visibility:hidden;}.fancybox-container{-webkit-backface-visibility:hidden;height:100%;left:0;outline:none;position:fixed;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:manipulation;touch-action:manipulation;transform:translateZ(0);width:100%;z-index:99992;}.fancybox-container *{box-sizing:border-box;}.fancybox-outer, .fancybox-inner, .fancybox-bg, .fancybox-stage{bottom:0;left:0;position:absolute;right:0;top:0;}.fancybox-outer{-webkit-overflow-scrolling:touch;overflow-y:auto;}.fancybox-bg{background:rgb(30, 30, 30);opacity:0;transition-duration:inherit;transition-property:opacity;transition-timing-function:cubic-bezier(.47, 0, .74, .71);}.fancybox-is-open .fancybox-bg{opacity:.9;transition-timing-function:cubic-bezier(.22, .61, .36, 1);}.fancybox-infobar, .fancybox-toolbar, .fancybox-caption, .fancybox-navigation .fancybox-button{direction:ltr;opacity:0;position:absolute;transition:opacity .25s ease, visibility 0s ease .25s;visibility:hidden;z-index:99997;}.fancybox-show-infobar .fancybox-infobar, .fancybox-show-toolbar .fancybox-toolbar, .fancybox-show-caption .fancybox-caption, .fancybox-show-nav .fancybox-navigation .fancybox-button{opacity:1;transition:opacity .25s ease 0s, visibility 0s ease 0s;visibility:visible;}.fancybox-infobar{color:#ccc;font-size:13px;-webkit-font-smoothing:subpixel-antialiased;height:44px;left:0;line-height:44px;min-width:44px;mix-blend-mode:difference;padding:0 10px;pointer-events:none;top:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.fancybox-toolbar{right:0;top:0;}.fancybox-stage{direction:ltr;overflow:visible;transform:translateZ(0);z-index:99994;}.fancybox-is-open .fancybox-stage{overflow:hidden;}.fancybox-slide{-webkit-backface-visibility:hidden;display:none;height:100%;left:0;outline:none;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:absolute;text-align:center;top:0;transition-property:transform, opacity;white-space:normal;width:100%;z-index:99994;}.fancybox-slide::before{content:'';display:inline-block;font-size:0;height:100%;vertical-align:middle;width:0;}.fancybox-is-sliding .fancybox-slide, .fancybox-slide--previous, .fancybox-slide--current, .fancybox-slide--next{display:block;}.fancybox-slide--image{overflow:hidden;padding:44px 0;}.fancybox-slide--image::before{display:none;}.fancybox-slide--html{padding:6px;}.fancybox-content{background:#fff;display:inline-block;margin:0;max-width:100%;overflow:auto;-webkit-overflow-scrolling:touch;padding:44px;position:relative;text-align:left;vertical-align:middle;}.fancybox-slide--image .fancybox-content{animation-timing-function:cubic-bezier(.5, 0, .14, 1);-webkit-backface-visibility:hidden;background:transparent;background-repeat:no-repeat;background-size:100% 100%;left:0;max-width:none;overflow:visible;padding:0;position:absolute;top:0;-ms-transform-origin:top left;transform-origin:top left;transition-property:transform, opacity;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:99995;}.fancybox-can-zoomOut .fancybox-content{cursor:zoom-out;}.fancybox-can-zoomIn .fancybox-content{cursor:zoom-in;}.fancybox-can-swipe .fancybox-content, .fancybox-can-pan .fancybox-content{cursor:-webkit-grab;cursor:grab;}.fancybox-is-grabbing .fancybox-content{cursor:-webkit-grabbing;cursor:grabbing;}.fancybox-container [data-selectable='true']{cursor:text;}.fancybox-image, .fancybox-spaceball{background:transparent;border:0;height:100%;left:0;margin:0;max-height:none;max-width:none;padding:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;}.fancybox-spaceball{z-index:1;}.fancybox-slide--video .fancybox-content, .fancybox-slide--map .fancybox-content, .fancybox-slide--pdf .fancybox-content, .fancybox-slide--iframe .fancybox-content{height:100%;overflow:visible;padding:0;width:100%;}.fancybox-slide--video .fancybox-content{background:#000;}.fancybox-slide--map .fancybox-content{background:#e5e3df;}.fancybox-slide--iframe .fancybox-content{background:#fff;}.fancybox-video, .fancybox-iframe{background:transparent;border:0;display:block;height:100%;margin:0;overflow:hidden;padding:0;width:100%;}.fancybox-iframe{left:0;position:absolute;top:0;}.fancybox-error{background:#fff;cursor:default;max-width:400px;padding:40px;width:100%;}.fancybox-error p{color:#444;font-size:16px;line-height:20px;margin:0;padding:0;}.fancybox-button{background:rgba(30, 30, 30, .6);border:0;border-radius:0;box-shadow:none;cursor:pointer;display:inline-block;height:44px;margin:0;padding:10px;position:relative;transition:color .2s;vertical-align:top;visibility:inherit;width:44px;}.fancybox-button, .fancybox-button:visited, .fancybox-button:link{color:#ccc;}.fancybox-button:hover{color:#fff;}.fancybox-button:focus{outline:none;}.fancybox-button.fancybox-focus{outline:1px dotted;}.fancybox-button[disabled], .fancybox-button[disabled]:hover{color:#888;cursor:default;outline:none;}.fancybox-button div{height:100%;}.fancybox-button svg{display:block;height:100%;overflow:visible;position:relative;width:100%;}.fancybox-button svg path{fill:currentColor;stroke-width:0;}.fancybox-button--play svg:nth-child(2), .fancybox-button--fsenter svg:nth-child(2){display:none;}.fancybox-button--pause svg:nth-child(1), .fancybox-button--fsexit svg:nth-child(1){display:none;}.fancybox-progress{background:#ff5268;height:2px;left:0;position:absolute;right:0;top:0;-ms-transform:scaleX(0);transform:scaleX(0);-ms-transform-origin:0;transform-origin:0;transition-property:transform;transition-timing-function:linear;z-index:99998;}.fancybox-close-small{background:transparent;border:0;border-radius:0;color:#ccc;cursor:pointer;opacity:.8;padding:8px;position:absolute;right:-12px;top:-44px;z-index:401;}.fancybox-close-small:hover{color:#fff;opacity:1;}.fancybox-slide--html .fancybox-close-small{color:currentColor;padding:10px;right:0;top:0;}.fancybox-slide--image.fancybox-is-scaling .fancybox-content{overflow:hidden;}.fancybox-is-scaling .fancybox-close-small, .fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small{display:none;}.fancybox-navigation .fancybox-button{background-clip:content-box;height:100px;opacity:0;position:absolute;top:calc(50% - 50px);width:70px;}.fancybox-navigation .fancybox-button div{padding:7px;}.fancybox-navigation .fancybox-button--arrow_left{left:0;left:env(safe-area-inset-left);padding:31px 26px 31px 6px;}.fancybox-navigation .fancybox-button--arrow_right{padding:31px 6px 31px 26px;right:0;right:env(safe-area-inset-right);}.fancybox-caption{background:linear-gradient(to top, rgba(0, 0, 0, .85) 0%, rgba(0, 0, 0, .3) 50%, rgba(0, 0, 0, .15) 65%, rgba(0, 0, 0, .075) 75.5%, rgba(0, 0, 0, .037) 82.85%, rgba(0, 0, 0, .019) 88%, rgba(0, 0, 0, 0) 100%);bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;line-height:1.5;padding:75px 44px 25px 44px;pointer-events:none;right:0;text-align:center;z-index:99996;}@supports (padding:max(0px)){.fancybox-caption{padding:75px max(44px, env(safe-area-inset-right)) max(25px, env(safe-area-inset-bottom)) max(44px, env(safe-area-inset-left));}}.fancybox-caption--separate{margin-top:-50px;}.fancybox-caption__body{max-height:50vh;overflow:auto;pointer-events:all;}.fancybox-caption a, .fancybox-caption a:link, .fancybox-caption a:visited{color:#ccc;text-decoration:none;}.fancybox-caption a:hover{color:#fff;text-decoration:underline;}.fancybox-loading{animation:fancybox-rotate 1s linear infinite;background:transparent;border:4px solid #888;border-bottom-color:#fff;border-radius:50%;height:50px;left:50%;margin:-25px 0 0 -25px;opacity:.7;padding:0;position:absolute;top:50%;width:50px;z-index:99999;}@keyframes fancybox-rotate{100%{transform:rotate(360deg);}}.fancybox-animated{transition-timing-function:cubic-bezier(0, 0, .25, 1);}.fancybox-fx-slide.fancybox-slide--previous{opacity:0;transform:translate3d(-100%, 0, 0);}.fancybox-fx-slide.fancybox-slide--next{opacity:0;transform:translate3d(100%, 0, 0);}.fancybox-fx-slide.fancybox-slide--current{opacity:1;transform:translate3d(0, 0, 0);}.fancybox-fx-fade.fancybox-slide--previous, .fancybox-fx-fade.fancybox-slide--next{opacity:0;transition-timing-function:cubic-bezier(.19, 1, .22, 1);}.fancybox-fx-fade.fancybox-slide--current{opacity:1;}.fancybox-fx-zoom-in-out.fancybox-slide--previous{opacity:0;transform:scale3d(1.5, 1.5, 1.5);}.fancybox-fx-zoom-in-out.fancybox-slide--next{opacity:0;transform:scale3d(.5, .5, .5);}.fancybox-fx-zoom-in-out.fancybox-slide--current{opacity:1;transform:scale3d(1, 1, 1);}.fancybox-fx-rotate.fancybox-slide--previous{opacity:0;-ms-transform:rotate(-360deg);transform:rotate(-360deg);}.fancybox-fx-rotate.fancybox-slide--next{opacity:0;-ms-transform:rotate(360deg);transform:rotate(360deg);}.fancybox-fx-rotate.fancybox-slide--current{opacity:1;-ms-transform:rotate(0deg);transform:rotate(0deg);}.fancybox-fx-circular.fancybox-slide--previous{opacity:0;transform:scale3d(0, 0, 0) translate3d(-100%, 0, 0);}.fancybox-fx-circular.fancybox-slide--next{opacity:0;transform:scale3d(0, 0, 0) translate3d(100%, 0, 0);}.fancybox-fx-circular.fancybox-slide--current{opacity:1;transform:scale3d(1, 1, 1) translate3d(0, 0, 0);}.fancybox-fx-tube.fancybox-slide--previous{transform:translate3d(-100%, 0, 0) scale(.1) skew(-10deg);}.fancybox-fx-tube.fancybox-slide--next{transform:translate3d(100%, 0, 0) scale(.1) skew(10deg);}.fancybox-fx-tube.fancybox-slide--current{transform:translate3d(0, 0, 0) scale(1);}@media all and (max-height:576px){.fancybox-slide{padding-left:6px;padding-right:6px;}.fancybox-slide--image{padding:6px 0;}.fancybox-close-small{right:-6px;}.fancybox-slide--image .fancybox-close-small{background:#4e4e4e;color:#f2f4f6;height:36px;opacity:1;padding:6px;right:0;top:0;width:36px;}.fancybox-caption{padding-left:12px;padding-right:12px;}@supports (padding:max(0px)){.fancybox-caption{padding-left:max(12px, env(safe-area-inset-left));padding-right:max(12px, env(safe-area-inset-right));}}}.fancybox-share{background:#f4f4f4;border-radius:3px;max-width:90%;padding:30px;text-align:center;}.fancybox-share h1{color:#222;font-size:35px;font-weight:700;margin:0 0 20px 0;}.fancybox-share p{margin:0;padding:0;}.fancybox-share__button{border:0;border-radius:3px;display:inline-block;font-size:14px;font-weight:700;line-height:40px;margin:0 5px 10px 5px;min-width:130px;padding:0 15px;text-decoration:none;transition:all .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;}.fancybox-share__button:visited, .fancybox-share__button:link{color:#fff;}.fancybox-share__button:hover{text-decoration:none;}.fancybox-share__button--fb{background:#3b5998;}.fancybox-share__button--fb:hover{background:#344e86;}.fancybox-share__button--pt{background:#bd081d;}.fancybox-share__button--pt:hover{background:#aa0719;}.fancybox-share__button--tw{background:#1da1f2;}.fancybox-share__button--tw:hover{background:#0d95e8;}.fancybox-share__button svg{height:25px;margin-right:7px;position:relative;top:-1px;vertical-align:middle;width:25px;}.fancybox-share__button svg path{fill:#fff;}.fancybox-share__input{background:transparent;border:0;border-bottom:1px solid #d7d7d7;border-radius:0;color:#5d5b5b;font-size:14px;margin:10px 0 0 0;outline:none;padding:10px 15px;width:100%;}.fancybox-thumbs{background:#ddd;bottom:0;display:none;margin:0;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;padding:2px 2px 4px 2px;position:absolute;right:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);top:0;width:212px;z-index:99995;}.fancybox-thumbs-x{overflow-x:auto;overflow-y:hidden;}.fancybox-show-thumbs .fancybox-thumbs{display:block;}.fancybox-show-thumbs .fancybox-inner{right:212px;}.fancybox-thumbs__list{font-size:0;height:100%;list-style:none;margin:0;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;position:relative;white-space:nowrap;width:100%;}.fancybox-thumbs-x .fancybox-thumbs__list{overflow:hidden;}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar{width:7px;}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track{background:#fff;border-radius:10px;box-shadow:inset 0 0 6px rgba(0, 0, 0, .3);}.fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:10px;}.fancybox-thumbs__list a{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:rgba(0, 0, 0, .1);background-position:center center;background-repeat:no-repeat;background-size:cover;cursor:pointer;float:left;height:75px;margin:2px;max-height:calc(100% - 8px);max-width:calc(50% - 4px);outline:none;overflow:hidden;padding:0;position:relative;-webkit-tap-highlight-color:transparent;width:100px;}.fancybox-thumbs__list a::before{border:6px solid #ff5268;bottom:0;content:'';left:0;opacity:0;position:absolute;right:0;top:0;transition:all .2s cubic-bezier(.25, .46, .45, .94);z-index:99991;}.fancybox-thumbs__list a:focus::before{opacity:.5;}.fancybox-thumbs__list a.fancybox-thumbs-active::before{opacity:1;}@media all and (max-width:576px){.fancybox-thumbs{width:110px;}.fancybox-show-thumbs .fancybox-inner{right:110px;}.fancybox-thumbs__list a{max-width:calc(100% - 10px);}}

/*jquery.auto-complete.css*/
.autocomplete-suggestions{text-align:left;cursor:default;border:1px solid #ccc;border-top:0;background:#fff;box-shadow:-1px 1px 3px rgba(0,0,0,.1);position:absolute;display:none;z-index:9999;max-height:254px;overflow:hidden;overflow-y:auto;box-sizing:border-box;}.autocomplete-suggestion{position:relative;padding:0 .6em;line-height:23px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.02em;color:#333;}.autocomplete-suggestion b{font-weight:normal;color:#1f8dd6;}.autocomplete-suggestion.selected{background:#f0f0f0;}

/*DateTimePicker.min.css*/
.dtpicker-overlay{z-index:2000;display:none;min-width:300px;background:rgba(0,0,0,.2);font-size:12px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dtpicker-mobile{position:fixed;top:0;left:0;width:100%;height:100%}.dtpicker-overlay *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-ms-box-sizing:border-box;-webkit-tap-highlight-color:transparent}.dtpicker-bg{width:100%;height:100%;font-family:Arial}.dtpicker-cont{border:1px solid #ecf0f1}.dtpicker-mobile .dtpicker-cont{position:relative;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:none}.dtpicker-content{margin:0 auto;padding:1em 0;max-width:500px;background:#fff}.dtpicker-mobile .dtpicker-content{width:97%}.dtpicker-subcontent{position:relative}.dtpicker-header{margin:.2em 1em}.dtpicker-header .dtpicker-title{color:#2980b9;text-align:center;font-size:1.1em}.dtpicker-header .dtpicker-close{position:absolute;top:-.7em;right:.3em;padding:.5em .5em 1em 1em;color:#ff3b30;font-size:1.5em;cursor:pointer}.dtpicker-header .dtpicker-close:hover{color:#ff3b30}.dtpicker-header .dtpicker-value{padding:.8em .2em .2em .2em;color:#ff3b30;text-align:center;font-size:1.4em}.dtpicker-components{overflow:hidden;margin:1em 1em;font-size:1.3em}.dtpicker-components *{margin:0;padding:0}.dtpicker-components .dtpicker-compOutline{display:inline-block;float:left}.dtpicker-comp2{width:50%}.dtpicker-comp3{width:33.3%}.dtpicker-comp4{width:25%}.dtpicker-comp5{width:20%}.dtpicker-comp6{width:16.66%}.dtpicker-comp7{width:14.285%}.dtpicker-components .dtpicker-comp{margin:2%;text-align:center}.dtpicker-components .dtpicker-comp>*{display:block;height:30px;color:#2980b9;text-align:center;line-height:30px}.dtpicker-components .dtpicker-comp>:hover{color:#2980b9}.dtpicker-components .dtpicker-compButtonEnable{opacity:1}.dtpicker-components .dtpicker-compButtonDisable{opacity:.5}.dtpicker-components .dtpicker-compButton{background:#fff;font-size:140%;cursor:pointer}.dtpicker-components .dtpicker-compValue{margin:.4em 0;width:100%;border:none;background:#fff;font-size:100%;-webkit-appearance:none;-moz-appearance:none}.dtpicker-overlay .dtpicker-compValue:focus{outline:0;background:#f2fcff}.dtpicker-buttonCont{overflow:hidden;margin:.2em 1em}.dtpicker-buttonCont .dtpicker-button{display:block;padding:.6em 0;width:47%;background:#ff3b30;color:#fff;text-align:center;font-size:1.3em;cursor:pointer}.dtpicker-buttonCont .dtpicker-button:hover{color:#fff}.dtpicker-singleButton .dtpicker-button{margin:.2em auto}.dtpicker-twoButtons .dtpicker-buttonSet{float:left}.dtpicker-twoButtons .dtpicker-buttonClear{float:right}



/*employer-common.css*/
.text-center{text-align:center;}input.error, input.error:focus{border-color:red !important}#frm_login_header .form-group .error{margin-top:0;}.mt-10{margin-top:10px;}.mb-10{margin-bottom:10px;}.button-prev, .button-next{background-image:none!important;background-color:rgba(45,123,183,0.9);color:white !important;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.button-prev.disabled, .button-next.disabled{background-color:#9e9e9e}.button-prev em, .button-next em{color:white !important;}.employer-navbar-2-1 .left-wrap .list-menu li{margin-right:20px!important}.jobs-posting-modal{max-width:450px;padding:0;background:#ffffff;}.jobs-posting-modal .modal-head{padding-bottom:15px;border-bottom:2px solid #efefef;}.jobs-posting-modal .modal-head .title{color:#172642;font-size:18px;font-weight:900;text-transform:uppercase;}.jobs-posting-modal .modal-body{padding:15px;text-align:center;}@media (min-width:1024px){.jobs-posting-modal .modal-body{padding:30px;}}@media (min-width:1200px){.jobs-posting-modal .modal-body{padding:45px;}}.jobs-posting-modal .modal-body .name{margin-top:20px;color:#172642;font-size:16px;font-weight:900;text-transform:uppercase;}@media (min-width:1200px){.jobs-posting-modal .modal-body .name{margin-top:25px;font-size:18px;}}.jobs-posting-modal .modal-body .des{margin-top:10px;color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal .modal-body .button{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-top:15px;}.jobs-posting-modal .modal-body .button .btn-gradient{-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:150px;height:40;padding:5px 15px;border-radius:4px;background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49));background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49);background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49);color:#ffffff;font-size:16px;font-weight:500;text-align:center;transition:0.4s ease-in-out all;}.jobs-posting-modal .modal-body .button .btn-gradient em{padding-right:5px;font-size:18px;}.jobs-posting-modal .modal-body .button .btn-gradient:hover{text-decoration:none;}.jobs-posting-modal.modal-noti-emp{width:450px;max-width:100%;}.jobs-posting-modal.modal-noti-emp .fancybox-close-small{color:#ffffff;}.jobs-posting-modal.modal-noti-emp .modal-head{padding:15px;background:#86cb49;text-align:center;}.jobs-posting-modal.modal-noti-emp .modal-head img{height:70px;}.jobs-posting-modal.modal-noti-emp .modal-body{padding-top:20px;border:1px solid #e0e0e0;border-top:none;text-align:center;}.jobs-posting-modal.modal-noti-emp .modal-body .title{margin-bottom:10px;color:#172642;font-size:18px;font-weight:700;text-transform:uppercase;}.jobs-posting-modal.modal-noti-emp .modal-body p{color:#182642;font-size:16px;font-weight:400;}.jobs-posting-modal.modal-noti-emp.success-modal .modal-head{background:#86cb49}.jobs-posting-modal.modal-noti-emp.error-modal .modal-head{background:#ff0000}.jconfirm.jconfirm-bootstrap .jconfirm-box .jconfirm-buttons{text-align:center;}.justify-content-md-center{justify-content:center;}.form-group span.error{display:block;text-align:left;margin-top:10px;color:red;font-size:12px;font-style:italic;width:100%;}.manage-job-posting-active-jobs .jobs-posting-detail-bottom .list-info-posting li{margin-bottom:0;}.chosen-container-multi .chosen-choices li.search-choice span, .chosen-container-multi .chosen-select-max-three li.search-choice span, .chosen-container-multi .chosen-select-max-one li.search-choice span{text-overflow:ellipsis;display:inline-block;overflow:hidden;white-space:nowrap;}#post_job_location .item_post_job_location{margin-bottom:20px;}.manage-job-posting-post-jobs .form-group.form-checkbox{align-items:center !important;}.manage-job-posting-post-jobs .form-group.form-checkbox input[type=checkbox].error{margin-top:0 !important;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .form-submit .btn-gradient{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-transition:0.2s ease-in-out all;-o-transition:0.2s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;min-width:140px;height:40px;margin-top:20px;padding:5px 15px;border-radius:5px;background:#6c757d;color:#ffffff;font-size:16px;font-weight:700;text-align:center;transition:0.2s ease-in-out all;margin-right:10px;}.jobs-posting-modal.jobs-posting-17-modal .modal-body .form-submit .btn-gradient{background-image:-webkit-gradient(linear, left top, right top, from(#2d7bb7), color-stop(#1e9bd3), to(#2d7bb7));background-image:-o-linear-gradient(left, #2d7bb7, #1e9bd3, #2d7bb7);background-image:linear-gradient(to right, #2d7bb7, #1e9bd3, #2d7bb7);}.noti{position:relative;cursor:pointer;}.noti em{margin-right:7px;color:#007db2;}.noti .toolip{z-index:100;}.noti .toolip:before{top:-7.5px;}.noti .toolip:after{top:-6.5px;}.noti:hover .toolip{opacity:1;}.noti:hover .toolip:before, .noti:hover .toolip:after{left:10px;opacity:1;}.btn-gradient.btn-post{background-image:-webkit-gradient(linear, left top, right top, from(#86cb49), color-stop(#169b74), to(#86cb49)) !important;background-image:-o-linear-gradient(left, #86cb49, #169b74, #86cb49) !important;background-image:linear-gradient(to right, #86cb49, #169b74, #86cb49) !important;}.lds-roller{display:inline-block;position:relative;width:80px;height:80px;}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:40px 40px;}.lds-roller div:after{content:" ";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#fff;margin:-4px 0 0 -4px;}.lds-roller div:nth-child(1){animation-delay:-0.036s;}.lds-roller div:nth-child(1):after{top:63px;left:63px;}.lds-roller div:nth-child(2){animation-delay:-0.072s;}.lds-roller div:nth-child(2):after{top:68px;left:56px;}.lds-roller div:nth-child(3){animation-delay:-0.108s;}.lds-roller div:nth-child(3):after{top:71px;left:48px;}.lds-roller div:nth-child(4){animation-delay:-0.144s;}.lds-roller div:nth-child(4):after{top:72px;left:40px;}.lds-roller div:nth-child(5){animation-delay:-0.18s;}.lds-roller div:nth-child(5):after{top:71px;left:32px;}.lds-roller div:nth-child(6){animation-delay:-0.216s;}.lds-roller div:nth-child(6):after{top:68px;left:24px;}.lds-roller div:nth-child(7){animation-delay:-0.252s;}.lds-roller div:nth-child(7):after{top:63px;left:17px;}.lds-roller div:nth-child(8){animation-delay:-0.288s;}.lds-roller div:nth-child(8):after{top:56px;left:12px;}@keyframes lds-roller{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}.page-loader{display:block;width:100vw;height:100vh;position:fixed;top:0;left:0;background:rgba(0, 0, 0, 0.8);z-index:9999999;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex-flow:wrap;justify-content:center;align-content:center;display:none;}.page-loader.loaded{display:none;}.box-flip-view .profile-iframe{margin-top:15px;}.box-flip-view .profile-iframe iframe{width:100%;height:700px;}.main-button-sticky{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:500;position:-webkit-sticky;position:sticky;bottom:120px;justify-content:space-between;pointer-events:none;}@media (min-width:1024px){.main-button-sticky{bottom:100px;}}.main-button-sticky{opacity:0;display:none !important;}@media (max-width:1200px){.main-button-sticky{opacity:1;display:flex !important;}.box-manage-job-posting .main-jobs-posting .table > table, .box-candidates-resume-applied .table > table, .box-manage-job-posting .main-jobs-posting .table > table, .manage-job-posting-post-jobs .table-task-reports > table{min-width:1325px}}#show_alert_email_invite{display:block;text-align:left;margin-top:10px;color:red;font-size:12px;font-style:italic;}.jobs-posting-modal.jobs-posting-11-modal .modal-body .form-group.form-radio{flex-flow:row wrap;}.cb-text-center{text-align:center !important;}.noborderbg{border:1px solid #e5e5e5 !important;border-bottom:none !important;background:none!important;}.last-login-user{background-color:#eff3f6;font-size:12px;padding-top:5px;text-align:right}.popup-add-note-flipview{padding:0 !important;max-width:700px;width:90%;}.popup-add-note-flipview #frmResumeForNote #btn-create-note-resume{margin:20px;}.txt-left{text-align:left !important;}.txt-right{text-align:right !important;}.txt-center{text-align:center !important;}.pl-20{padding-left:20px !important;}.pr-20{padding-right:20px !important;}.pb-20{padding-bottom:20px !important;}.pt-20{padding-top:20px !important;}.skybanner{text-align:center;}#NotifyOffPostjob .content_postjob{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:30px 0}#NotifyOffPostjob .content_postjob ul{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;padding-right:30px}#NotifyOffPostjob .content_postjob ul li{padding:0 0 15px 20px;position:relative}#NotifyOffPostjob .content_postjob ul li:before{position:absolute;top:0;left:0;content:"\f054";color:#09a0db;font-family:FontAwesome}#NotifyOffPostjob .content_postjob .image{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}#frmEditJob{position:relative;}#mask-desable-postjob{position:absolute;top:0;left:0;width:100%;height:100%;z-index:11;}#resumeLock{position:relative;}#resumeLock .loading{background:rgba(0, 0, 0, 0.5);width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;display:none;}#resumeLock.checking .loading{display:flex;}.lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px;}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0, 1, 1, 0);}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 0.6s infinite;}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 0.6s infinite;}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 0.6s infinite;}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 0.6s infinite;}@keyframes lds-ellipsis1{0%{transform:scale(0);}100%{transform:scale(1);}}@keyframes lds-ellipsis3{0%{transform:scale(1);}100%{transform:scale(0);}}@keyframes lds-ellipsis2{0%{transform:translate(0, 0);}100%{transform:translate(24px, 0);}}@media (max-width:667px){.noti{display:none!important}}#save_resume_ts_msg{color:#86cb49;text-align:left;line-height:20px;display:flex;justify-content:left;flex-flow:row nowrap;}

</style>

<script type="text/javascript" src="{{ asset('js/employ/global1.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employ/jquery.cookie.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employ/swiper.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employ/DateTimePicker.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employ/lazy.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/jquery-confirm.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/jquery.validate_vi.js') }}"></script>

<script type="text/javascript"  src="https://static.careerbuilder.vn/js/jquery.masknumber.js"></script>
<script language="javascript">
    var is_mobile = 0;
    var widthWindowChosen = $(window).width();
    var PATH_KIEMVIEC = "https://careerbuilder.vn/vi/";
    var CURRENT_LANGUAGE = "vi";
	var memberLogin = "yes";
</script>

<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name":"Careerbuilder Vietnam",
    "alternateName" : "careerbuilder.vn",
    "url": "https://careerbuilder.vn/",
    "sameAs" : [
        "https://www.facebook.com/CareerbuilderVietnam/",
        "https://www.linkedin.com/company/3216963/"
    ],
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://careerbuilder.vn/viec-lam/{search_term_string}-k-vi.html",
        "query-input": "required name=search_term_string"
    }
}
</script>

<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/moment.min.js"></script>
<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/moment-with-locales.min.js"></script>
<script type="text/javascript" src="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://static.careerbuilder.vn/themes/employer/gallery/daterangepicker/daterangepicker.css" />

<script>
	var language_common = {
		common_menu_left_view_all:"Xem tất cả",
		common_menu_left_collapse:"Thu gọn",
		common_view_detail:"Chi tiết",
		emp_manageresume_search_date_invalid:"Ngày tìm kiếm không hợp lệ",
		message_common:"Thông báo",
		common_view_summary:"Xem tóm tắt",
		Ban_khong_co_quyen_thao_tac:"Bạn không có quyền thao tác trên chức năng này.",
		emp_managerresume_Please_choose_to_save_resumes:"emp_managerresume_Please_choose_to_save_resumes",
		emp_managerresume_Please_choose_status:"emp_managerresume_Please_choose_status",
		emp_managerresume_Please_choose_rating:"emp_managerresume_Please_choose_rating",
		emp_forgotpassword_Please_input_valid_string:"Quý khách vui lòng nhập mã xác nhận",
		verify_code_wrong:"Mã xác nhận chưa đúng",
		emp_manager_exist_folder_name:"Tên thư mục bị trùng",
		emp_message_save_folder_success:"Lưu thư mục thành công",
		emp_message_save_folder_unsuccess:"Lưu thư mục không thành công",
		TXT_MSG_INVALID_EMAIL:"Địa chỉ Email không hợp lệ",
		emp_comment_not_we_said:"Vui lòng nhập nội dung góp ý của bạn",
		emp_comment_please_enter_comment:"Vui lòng nhập nội dung góp ý của bạn",
		emp_comment_thanks_for_comment:"Cảm ơn bạn đã góp ý cho chúng tôi",
		emp_manager_pleasechoose_resume:"emp_manager_pleasechoose_resume",
		emp_managerresume_Pleases_select_the_sender:"Quý khách vui lòng chọn người gửi.",
		emp_message_send_success:"Gửi mail thành công",
		Emp_Choice:"Chọn",
		emp_comment_maximun_1000_charaters:"Nội dung nhập không quá 1000 ký tự.",
		emp_common_validate_keyword:"Từ khóa tìm kiếm không hợp lệ. Vui lòng nhập lại",
		emp_hrcentral_not_register_service:"emp_hrcentral_not_register_service",
		emp_manager_confirm_delete_folder_resume:"Hồ sơ lưu trữ trong thư mục quý khách chọn sẽ bị xóa, vui lòng xác nhận",
		emp_manager_pleasechoose_folder_delete:"Quý khách vui lòng chọn thư mục cần xóa",
		emp_hrcentral_validate_keyword:"Từ khóa tìm kiếm không hợp lệ",
		emp_mat_khau:"Mật khẩu",
		popup_close_popup:"Đóng",
		popup_msg_success:"Lưu thành công",
		popup_msg_error:"popup_msg_error",
		employers_confirm_btn_agree:"Đồng ý",
		employers_confirm_btn_cancle:"Bỏ qua",
		hrcentral_select_check_job:"Vui lòng chọn vị trí cần nhân bản",
		hrcentral_select_max_job:"5",
        btn_apply:'btn_apply',
        btn_cancel:'Hủy',
        validate_required:'Không bỏ trống, vui lòng nhập',
		hrcentral_select_max_job_message:"Bạn chỉ được phép chọn tối đa 5 vị trí nhân bản."
	}

	if(typeof language === 'undefined') var language = language_common;
	else $.extend(language, language_common);

	var domainstatic = "https://static.careerbuilder.vn/";
	var domain = "https://careerbuilder.vn/vi/";
	var domainroot = "https://careerbuilder.vn";
	var calendarlanguage = "vi";
</script>
	</head>
		<body>
		<header class="for-customers">
		
	    <div class="container-fluid">
        <div class="main-wrap">
            <div class="left-wrap">
                <div class="button-hambuger">
                	<span class="mdi mdi-menu"></span>
                </div>
                <div class="logo"><a href="{{ route('home') }}" title="homepage-employers">

                    <img src="{{ asset('images/template/logo/logo.png') }}" alt="Chúc Mừng Năm Mới!" title="Chúc Mừng Năm Mới!" /></a>
                </div>
               
            </div>
            <div class="right-wrap">
                <div class="main-login dropdown logged">
                	<a href="javascript:voi(0)" title="cuong"> 
                    	Hi, <span class="name">cuong</span>
                    </a>
                    <div class="dropdown-menu">
                        <ul>
                            <li> <a href="{{ route('employers_info') }}">Tài khoản</a></li>
                            <li> <a href="{{ route('employer-logout') }}"> Thoát</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main-noti" style="display: none"><a href="javascript:void(0);"> <span class="mdi mdi-cart"></span></a></div>
                
                <div class="main-candidates"><a href="https://careerbuilder.vn/vi/"><em class="fa fa-external-link"></em>
                    <h4>Dành cho Ứng Viên</h4></a>
                </div>
            </div>
        </div>
    </div>

    <!-- menu mobile -->
    <div class="mobile-menu">
        <div class="mobile-wrap">
            <div class="header-logo"><a href="#" title="homepage-employers"><img src="https://images.careerbuilder.vn/logo/logo_1644552010.png" alt="Chúc Mừng Năm Mới!" title="Chúc Mừng Năm Mới!" /></a></div>
            <div class="header-bottom">
                <div class="header-bottom-top">
                                        <div class="profile">
                        <div class="avatar"><a href="https://careerbuilder.vn/vi/employers/hrcentral/accounts"><img src="./img/avata-new.png" alt=""></a></div>
                        <div class="username"><a href="https://careerbuilder.vn/vi/employers/hrcentral/accounts">cuong</a>
                            <div class="authentication-links">
                                <ul>
                                    <li> <a href="https://careerbuilder.vn/vi/employers/logout"><i class="fa fa-sign-out"></i>Thoát</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="back-menu-normal"><em class="mdi mdi-arrow-left"></em></div>
                    </div>
                                        <div class="menu">
                        <ul class="menu-normal">
                            <li class="active"><a href="https://careerbuilder.vn/vi/employers" title="homepage-employers"><i class="mdi mdi-home-outline"></i>Trang Chủ</a></li>
                            <li class="dropdown-mobile"><a href="https://careerbuilder.vn/vi/employers/products-and-services"> <i class="mdi mdi-apps"></i>Sản Phẩm và Dịch Vụ</a>
                                <div class="dropdown-menu">
                                    <ul><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung/3">Đăng Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/tim-ho-so-ung-vien/8">Tìm Hồ Sơ Ứng Viên</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-solution/">Talent Solution</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/quang-cao-tuyen-dung/9">Quảng Cáo Tuyển Dụng</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-driver/14">Talent Driver</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/targeted-email-marketing/">Targeted Email Marketing</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/talent-referral/">Talent Referral</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services/dang-tuyen-dung-va-tim-ho-so-quoc-te/10">Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế</a></li><li><a href="https://careerbuilder.vn/vi/employers/products-and-services">Xem tất cả sản phẩm / dịch vụ</a></li></ul>
                                </div>
                            </li>
                            <li class="dropdown-mobile"><a  href="https://careerbuilder.vn/vi/employers/dashboard"> <i class="mdi mdi-briefcase-account"></i>HR Central</a>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li><a href="https://careerbuilder.vn/vi/employers/dashboard">Dashboard</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/employers/postjobs">Đăng Tuyển Dụng</a></li>
                                        <li><a href="https://careerbuilder.vn/vi/tim-ung-vien.html">Tìm Hồ Sơ</a></li>

                                        <li><a href="https://careerbuilder.vn/vi/employers/careerbuilder-rewards">CareerBuilder Rewards</a></li>
                                                                                                                </ul>
                                </div>
                            </li>
                            <li><a href="https://careerbuilder.vn/vi/hiringsite"> <i class="mdi mdi-lightbulb-on-outline"></i>Cẩm Nang Tuyển Dụng</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/services/contact"> <i class="mdi mdi-contacts"></i>Liên hệ</a></li>
                            <li><a href="https://careerbuilder.vn/en/employers/hrcentral/accounts/edit_employer"> <i class="mdi mdi-web"></i><span>English</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="header-bottom-bottom">
                    <div class="header-alert">
                        <h4>
                        <a href="https://careerbuilder.vn/"> <strong> Dành Cho Ứng Viên</strong></a>
                         <br>
                         <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html"><span> Tìm Việc Làm</span></a>
                         </h4>
                    </div>
                    <div class="employer-site">
                        <ul>
                            <li> <a> <i class="mdi mdi-phone"></i><span>HCM: (84.28) 3822 6060</span></a></li>
                            <li> <a> <i class="mdi mdi-phone"></i><span>HN: (84.24) 6268 1919</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- endmenu mobile -->

    <div class="backdrop"></div>
</header>				
<main>




<link rel="stylesheet" type="text/css" href="{{ asset('css/employ/account-tool-company-profile.css') }}">	

<script language="javascript" src="https://static.careerbuilder.vn/ckeditor445/ckeditor.js"></script>
<script language="javascript" src="https://static.careerbuilder.vn/ckeditor445/adapters/jquery.js"></script>
   	<section class="employer-navbar-2-1">
	    <div class="container">
	        <div class="category-nav">
	            <p>Danh Mục</p>
	            <em class="mdi mdi-chevron-down"></em> 
	        </div>
	        <div class="main-wrap">
	            <div class="left-wrap">
	                <ul class="list-menu">
	                    <li > <a href="{{ route('index_employer') }}" title="Dashboard">Dashboard</a> </li>
	                    <li > <a href="{{ route('employers-info-list') }}" title="Quản Lý Đăng Tuyển">Quản Lý Đăng Tuyển</a> </li>
	                 
	                    <li class="active">
	                        <a href="javascript:void(0)" title=" Tài Khoản"> Tài Khoản</a>
	                    </li>
	                    
	                </ul>
	            </div>
	           
	        </div>
	    </div>
	</section>

<section class="manage-job-posting-post-jobs cb-section bg-manage">
    <div class="container">
        <div class="box-manage-job-posting">
            <div class="heading-manage">
                <div class="left-heading">
                    <h1 class="title-manage"> Thông Tin Tài Khoản</h1>
                </div>
                
            </div>
            <div class="main-tabslet" data-toggle="tabslet">
                <ul class="tabslet-tab">

                	<li class="active  tabslet-title" data-id ="tab-1"><a href="javascript:void(0)" alt="Quản lý user" ><span>Quản lý user</span></a></li>
                    <li class="tabslet-title"  data-id ="tab-2"><a href="javascript:void(0)" alt="Thông tin công ty"><span>Thông tin công ty</span></a></li>
                   
                    <li class="tabslet-title" data-id ="tab-3"><a href="javascript:void(0)" alt="Đổi mật khẩu"><span>Đổi mật khẩu</span></a></li>
                     <li class="tabslet-title"><a href="{{ route('employers-info-list') }}" alt="Thông tin liên hệ"><span>Quản lý tuyển dụng</span></a></li>

                </ul>

                <div class="tabslet-content active" id="tab-1">
                    <div class="main-application-information">
                        <h2 class="title-application no-bg no-pad">Danh sách user</h2>
                      
                    </div>
                    <div class="main-jobs-posting">
                        <div class="jobs-posting-detail">
                            <div class="jobs-posting-detail-bottom">
                                
                                <div class="boding-jobs-posting">
                                    <div class="table table-account-user">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th width="10%">Ngày</th>
                                                    <th width="30%">Email Đăng nhập</th>
                                                    <th width="20%">Họ và tên</th>
                                                    <th width="12%">Trạng thái</th>
                                                    <th width="10%">Loại user</th>
                                                    <th width="10%">Tác vụ</th>
                                                    <th width="8%">Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <time>11/03/2023</time>
                                                    </td>
                                                    <td>
                                                        <a class="btn-edit-user" href="javascript:;">{{ @$infoEmployer->email }}</a>
                                                    </td>
                                                    <td>
                                                        <p >{{ @$infoEmployer->name_company }}</p>
                                                    </td>
                                                    <td>
                                                        <p>Kích hoạt</p>
                                                    </td>
                                                    <td>
                                                        <p>Chính</p>
                                                    </td>
                                                    <td> <a href="javascript:void(0)" alt="Xem tác vụ">Xem tác vụ</a></td>
                                                    <td>
                                                        <ul class="list-manipulation">
                                                            <li>
                                                                <a href="javascript:void(0);" class="fl_left"></a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="main-pagination">
                                        <div class="main-pagination">
                                            <ul class="pagination"></ul>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tabslet-content" id="tab-2">
                    <form method="post" name="editCompany" id="editCompany" action="{{ route('updateEmployer') }}" enctype="multipart/form-data" >
                        @csrf
                        <div class="main-application-information">
                            <h2 class="title-application no-bg no-pad">
                                CHỈNH SỬA THÔNG TIN CÔNG TY
                            </h2>
                            <h2 class="title-application">THÔNG TIN CÔNG TY</h2>
                            <div class="form-wrap">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="text" name="EMP_NAME" id="EMP_NAME" value="{{ @$data_employ->name }}"
                                                maxlength="150" onkeyup="this.setAttribute('value', this.value);">
                                            <label>Tên công ty   <font style="color: red">*</font></label>
                                            <span class="error error_EMP_NAME"> </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="noti mt-20">
                                            
                                            <div class="toolip">
                                                <p>Vui lòng nhập tối thiểu 3 ký tự!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-select">
                                            <label>Tổng số nhân viên</label>
                                            <select name="EMP_TOTALSTAFF">
                                            <?php 
                                                $staff = ['chọn số nhân viên', 'Ít hơn 10', 'Ít hơn 10', '10-20', '25-99', '100-499', '500-999', '1.000-4.999', '5.000-9.999', '10.000-19.999', '20.000-49.999', 'Nhiều hơn 50.000']
                                                ?>
                                            @foreach($staff as $key=> $value)
                                            <?php 
                                                $totalstaff = !empty($data_employ->totalstaff)??'';
                                                
                                                ?>
                                            <option value="{{ $key }}" {{ $totalstaff=$key?'selected':'' }}>{{ $value }}</option>
                                            @endforeach
                                            </select>
                                            <span class="error error_EMP_TOTALSTAFF"> </span>
                                        </div>
                                    </div>
                                    <?php 
                                        $data_Company = ['chọn', '100% vốn nước ngoài', 'Cá nhân', 'Công ty đa quốc gia', 'Cổ phần', 'Liên doanh', 'Nhà nước', 'trách nhiệm hữu hạn']
                                        ?>
                                    <div class="col-lg-6">
                                        <div class="form-group form-select">
                                            <label>Loại hình hoạt động</label>
                                            <select name="Company_type" class="width_160">
                                            @foreach($data_Company as $key=> $value)
                                            <?php 
                                                $company_type = !empty($data_employ->company_type)??'';
                                                
                                                ?>
                                            <option value="{{ $key }}" {{ $company_type==$key?'selected':'' }}>{{ $value }}</option>
                                            @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="text" name="EMP_WEBSITE" id="EMP_WEBSITE" value="{{ @$data_employ->website }}"
                                                onkeyup="this.setAttribute('value', this.value);" maxlength="100">
                                            <label>Website công ty</label>
                                            <span class="error error_EMP_WEBSITE"> </span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="text" name="EMP_TAXID" id="EMP_TAXID" value="{{ @$data_employ->taxid }}"
                                                onkeyup="this.setAttribute('value', this.value);" maxlength="100">
                                            <label>Mã Số  Thuế</label>
                                            <span class="error error_EMP_TAXID"> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-wrap logo-wrap">
                                <div class="main-image">
                                    <div class="form-group">
                                        <p class="title-label">Logo</p>
                                    </div>
                                    <div class="list-image">
                                        <div class="image-item" id="logo_path">
                                        	@if(!empty($data_employ->logo))
                                        	<img src="{{ asset( $data_employ->logo ) }}" width="95" height="50">
                                        	@endif
                                        </div>
                                    </div>
                                    <div class="upload-img">
                                        <input type="file" id="logo" name="logo" value="">
                                        <input type="hidden" name="logo_h" id="logo_h" value="" />
                                        <input type="hidden" name="logo_old" id="logo_old" value="" />
                                        <input type="hidden" name="logo_new" id="logo_new" value="" />
                                        <label for="logo">Tải ảnh từ máy tính</label>
                                        <div class="noti">
                                           
                                            <div class="toolip">
                                                <p>Định dạng: gif, jpg, png, kích thước đẹp nhất 240x160px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-wrap banner-wrap">
                                <div class="main-image">
                                    <!--  <div class="form-group">
                                        <p class="title-label">Cover/ Banner
                                            <a class="btn-view-banner-location" href="https://static.careerbuilder.vn/themes/kiemviecv32/employersnews/images/graphics/cover-tip.jpg" class="line_bot fancybox"><img src="https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/icon_help.png" align="absmiddle" title="Click để xem vị trí của Cover / Banner">Click để xem vị trí của Cover / Banner </a>
                                        </p>
                                        </div> -->
                                    <!--  <div class="list-image" >
                                        <div class="image-item" id="image1_path">
                                        </div>
                                        </div>
                                        <div class="upload-img">
                                        <input type="file"  name="image1" id="image1" value=""/>
                                        <label for="image1"><em class="material-icons">folder_open</em>Tải ảnh từ máy tính</label>
                                        <input type="hidden" class="li_dmk_width252" name="image1_h" id="image1_h"  value=""/>
                                        <input type="hidden" class="li_dmk_width252" name="image1_old" id="image1_old"  value=""/>
                                        <input type="hidden" class="li_dmk_width252" name="image1_new" id="image1_new"  value=""/>
                                        <div class="noti">
                                            <em class="material-icons">info </em>
                                            <div class="toolip">
                                                <p>Định dạng: *.gif, *.jpg, *.png. Kích thước đẹp nhất 1380x290px</p>
                                            </div>
                                        </div>
                                        </div> -->
                                </div>
                            </div>
                            <div class="form-wrap">
                                <div class="form-group form-editor" id="div_jobdesc">
                                    <label>Giới thiệu về công ty   <font style="color: red">*</font></label>
                                    <textarea cols="80" rows="5" name="EMP_DESC" id="EMP_DESC"
                                        class="editor">{!!  @$data_employ->desc   !!}</textarea>
                                    <div class="note">
                                        <p>Vui lòng không nhập email,số điện thoại và số lượng kí tự   phải lớn hơn 10
                                        </p>
                                    </div>
                                    <span class="error error_EMP_DESC"> </span>
                                    <div class="note">
                                        <p> </p>
                                    </div>
                                </div>
                                <div class="form-group form-editor" id="div_jobreq">
                                    <label>Địa chỉ công ty</label>
                                    <textarea cols="80" rows="5" id="EMP_MESSAGE" name="address_employ"
                                        class="editor">{!!  @$data_employ->address   !!}</textarea>
                                    <span class="error error_EMP_MESSAGE"> </span>
                                    <div class="note">
                                        <p> </p>
                                    </div>
                                </div>
                                <!-- <div class="main-image">
                                    <div class="list-image">
                                        <div class="image-item" id="image2_path" >
                                        </div>
                                    </div>
                                    <div class="upload-img">
                                        <input type="file" name="image2" id="image2" value="" />
                                        <label for="image2"><em class="material-icons">folder_open</em>Tải ảnh từ máy tính</label>
                                        <input type="hidden" class="li_dmk_width252" name="image2_h" id="image2_h"  value=""/>
                                        <input type="hidden" class="li_dmk_width252" name="image2_old" id="image2_old"  value=""/>
                                        <input type="hidden" class="li_dmk_width252" name="image2_new" id="image2_new"  value=""/>
                                        <div class="noti">
                                            <em class="material-icons">info </em>
                                            <div class="toolip">
                                                <p>Định dạng: *.gif, *.jpg, *.png. Kích thước <1mb</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div> -->
                            </div>
                            <input type="hidden" id="strPhoto" name="strPhoto" value="3728_tu-lanh-samsung-rt19m300bgs-sv5_1655256984.jpg" />
                            <input type="hidden" id="strPhotoDelete" name="strPhotoDelete" value="" />
                            <input type="hidden" id="checkYouTube" name="checkYouTube" />
                            
                            <div class="form-group form-submit form-continue">
                                <a class="btn-cancel btn-preview-account-user" href="javascript:;" onclick="window.open('https://careerbuilder.vn/vi/nha-tuyen-dung/congty-abc.35A90CF3.html', '_blank'); return false;  ">
                                Xem lại</a>
                                <button class="btn-gradient btn-submit" type="submit" id="update_info_company_form"
                                    onclick="updateInfoCompany()">Cập nhật</button>
                            </div>
                        </div>
                    </form>
                </div>


                <?php 

                	$email_employer = Auth::guard('employer_register')->user()->email;

                ?>

                <div class="tabslet-content" id="tab-3">
                    <form name="editPassFrm" id="editPassFrm"  method="post" action="{{ route('update-pass-employer') }}">
                    	@csrf
                        <div class="main-application-information main-form-change-password">
                            <h2 class="title-application no-bg no-pad">Đổi mật khẩu</h2>
                            <div class="form-wrap">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="text" value="{{ @$email_employer }}" onkeyup="this.setAttribute('value', this.value);" disabled="disabled">
                                            <label>Email/Tên đăng nhập </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="password" value="" name="oldpass" id="oldpass" onkeyup="this.setAttribute('value', this.value);" required>
                                            <label>Mật khẩu cũ <font style="color: red">*</font></label>
                                            <span class="error error_oldpass" id="oldpass_error">  </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="password" value="" name="newpass" id="newpass" onkeyup="this.setAttribute('value', this.value);" required>
                                            <label>Mật khẩu mới <font style="color: red">*</font></label>
                                            <span class="error" id="resultPass"></span>
                                            <span class="error error_newpass" id="newpass_error">  </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group form-text form-input-label">
                                            <input type="password" value="" name="renewpass" id="renewpass" maxlength="40" onkeyup="this.setAttribute('value', this.value);" required>
                                            <label>Xác nhận mật khẩu mới <font style="color: red">*</font></label>
                                            <span class="error error_renewpass" id="renewpass_error">  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-submit form-continue">
                                <button class="btn-cancel btn-reset" type="reset" onclick="resetformchangpass();">Hủy</button>
                                <button class="btn-gradient btn-submit" type="submit" id="account_change_password_btn">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    </div>

</section>


@if (\Session::has('message_password'))

	<script type="text/javascript">
		
		alert('{!! \Session::get("message_password") !!}')
	</script>
   
@endif



    <script type="text/javascript">
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
					$("#list-image").append('<div class="image-item"><img src="' + data.path + '"><a class="btn-del-img company-btn-del-img" href="javascript:void(0);" data-src="' + data.msg + '" title="Xóa ảnh\"></a></div>');
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



</script>


    <script type="text/javascript">
        var language_edit_employer = {
            enter_website:"Vui lòng nhập đúng định dạng, ví dụ: http://phodibo.com/, https://phodibo.com/",
            enter_amount:"Dữ liệu không hợp lệ!",
            emp_link_video: "emp_link_video",
			emp_register_taxid_error:"Mời nhập số từ 0 - 9 và có độ dài từ 10 - 14 kí tự",
        };
        if(typeof language === 'undefined')
        var language = language_edit_employer;
        else
        $.extend(language, language_edit_employer);

        CKEDITOR.env.isCompatible = true;
        $("textarea.editor").ckeditor(function(){}, {
            toolbar: 'Basic',
            skin: 'bootstrapck'
        });
        CKEDITOR_JOB = CKEDITOR.instances.job_desc;
        CKEDITOR_REQ = CKEDITOR.instances.job_req;
    $('#logo').on('change',function(){
        $("#logo_path").html('<img src="' + window.URL.createObjectURL(this.files[0]) + '" width="95" height="50" /><a class="btn-del-img" href="javascript:void(0);"  onclick="deleteimage(\'logo\'); return false;"><em class="material-icons">clear</em></a>');
    });
    $('#image1').on('change',function(){
        $("#image1_path").html('<img src="' + window.URL.createObjectURL(this.files[0]) + '" width="95" height="50" /><a class="btn-del-img" href="javascript:void(0);"  onclick="deleteimage(\'image1\'); return false;"><em class="material-icons">clear</em></a>');
    });
    $('#image2').on('change',function(){
        $("#image2_path").html('<img src="' + window.URL.createObjectURL(this.files[0]) + '" width="95" height="50" /><a class="btn-del-img" href="javascript:void(0);"  onclick="deleteimage(\'image2\'); return false;"><em class="material-icons">clear</em></a>');
    });
    $("input[name=EMP_WEBSITE]").keyup(function() {
        $(this).val($(this).val().replace(/\s/g, ""));
    });
        </script>

<script>
/*account-tool-company-profile.js*/



</script>

									</main>
<footer class="for-customers">
    <div class="container">
        <section class="top-footer cb-section cb-section-border-bottom">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="logo"><img src="./img/logo-w.png" alt=""></div>
                    <address>
                        <ul>
                            <li><span class="lnr lnr-map-marker"></span>Trụ sở chính: Tầng 6, Tòa nhà Pasteur, 139 Pasteur, Phường 6, Quận 3, TP. Hồ Chí Minh</li>
                            <li><span class="lnr lnr-map-marker"></span>Văn phòng Hà Nội: Tầng 17, Tòa nhà VIT, 519 Kim Mã, Quận Ba Đình, Hà Nội </li>
                            <li><span class="lnr lnr-phone-handset"></span>Tel: (84.28) 3822 6060</li>
                            <li><span class="lnr lnr-phone-handset"></span>Tel: (84.24) 7305 6060</li>
                            <li><span class="lnr lnr-envelope"></span>Email: contact@careerbuilder.vn</li>
                        </ul>
                    </address>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>Careerbuilder.vn</h3>
                        <ul>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/about" target="_blank">Về CareerBuilder.vn</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/leadership" target="_blank">Ban lãnh đạo</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/culture" target="_blank">Văn hóa CareerBuilder</a></li>
                            <li><a href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder.35A4E9A9.html" target="_blank">Cơ hội nghề nghiệp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/services/contact" target="_blank">Liên Hệ</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>HR CENTRAL</h3>
                        <ul>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral" rel="nofollow">Quản Lý Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral/manageresume" rel="nofollow">Quản Lý Hồ Sơ</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/hrcentral/notifymail" rel="nofollow">Thông Báo Ứng Viên</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/postjobs" rel="nofollow">Đăng Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/employers/search_resume" rel="nofollow">Tìm Hồ Sơ</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/vi/hiringsite">Cẩm Nang Tuyển Dụng</a></li>
                            <li><a target="_blank" href="https://careerbuilder.vn/mobile" target="_blank">Ứng dụng di động</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-links">
                        <h3>HỖ TRỢ</h3>
                        <ul>
                            <li><a href="https://careerbuilder.vn/vi/employers/faq" target="_blank">Trợ Giúp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/employers/use" target="_blank">Thỏa Thuận Sử Dụng</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/security" target="_blank">Quy Định Bảo Mật</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/regulations" target="_blank">Chính sách BV thông tin cá nhân</a></li>
                            <li><a href="https://images.careerbuilder.vn/regulations.pdf" rel="nofollow">Quy Chế Sàn Giao Dịch</a></li>
                            <li><a href="https://careerbuilder.vn/vi/jobseekers/process" target="_blank">Quy trình giải quyết tranh chấp</a></li>
                            <li><a href="https://advertising.careerbuilder.vn/html/customer/cbvn/GDPR.PDF" target="_blank">Chính sách GDPR</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-12">
                    <div class="footer-app-links">
                        <h3>TÌM KIẾM MỌI LÚC MỌI NƠI</h3>
                        <div class="app-links">
                            <a rel="nofollow,noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=vn.careerbuilder.android.app">
                                <img src="./img/android.png" alt="Android App">
                            </a>
                            <a rel="nofollow,noreferrer" target="_blank" href="https://apps.apple.com/vn/app/careerbuilder-vn-job-search/id882391884?l=vi">
                                <img src="./img/apple.png" alt="IOS App">
                            </a>
                        </div>
                    </div>
                    <div class="footer-social-links">
                        <h3>KẾT NỐI VỚI CAREERBUILDER.VN</h3>
                        <ul>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.facebook.com/pages/CareerBuilder-Vietnam/265321726945679?ref=tn_tnmn"> <span class="fa fa-facebook"></span></a></li>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.linkedin.com/company/careerbuilder-vietnam"> <span class="fa fa-linkedin"></span></a></li>
                            <li><a rel="nofollow,noreferrer" target="_blank" href="https://www.youtube.com/user/CareerBuilderVietnam"> <span class="fa fa-youtube-play"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="bottom-footer">
            <div class="left-bottom-footer">
                <p>Copyright © CareerBuilder Vietnam.</p>
            </div>
            <div class="right-bottom-footer">
                <a target="_blank" rel="nofollow,noreferrer" href="https://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=22262">
                    <img src="./img/dk.png" alt="">
                </a>
                <div class="back-to-top" id="back-to-top">
                    <em class="lnr lnr-arrow-up"></em>
                </div>
            </div>
        </section>
    </div>
</footer>
<a class="feedback-btn" data-fancybox="" data-type="ajax" data-src="https://careerbuilder.vn/vi/jobseekers/index/sendfeedback?from=employer&newlayout=1" title="Feedback" href="javascript:void(0);"><span>Feedback</span></a><script>/*employer-common.js*/


</script>
<script>$(document).ready(function() {$("img.lazy-new").lazy();});$.fancybox.defaults.hash=false;$.fancybox.defaults.backFocus=false;</script>


    
    <script type="text/javascript">
        
        $('.tabslet-tab li').click(function() {

            $('.tabslet-tab li').removeClass('active');

            $(this).addClass('active');

            let data_id = $(this).attr('data-id');

            $('.tabslet-content').removeClass('active');

            $('#'+data_id).addClass('active')
          
        })

    </script>
    

@endsection



			