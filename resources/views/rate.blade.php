@extends('frontend.layout1')

@section('content')

@push('style')

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/17d70828/_next/static/css/a8c2e8a7c8d588d4.css">

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/17d70828/_next/static/css/f44495da3bea9809.css">

    <style type="text/css">
        
        #exampleModal .modal-content{
            background-color: unset !important;
        }
        
    </style>

@endpush
<div class="aw__catkylo">
                    
    <div class="container contactInfo ratingDetail">
        <div class="row PaperInfoWrapper">
            <div class="breadcrumWrapper">
                <ol class="mocked-styled-0 s7nqb7" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a class="b1240fmt hyperlink h-link r-normal small w-normal t-link" href="https://www.chotot.com" target="">Chợ Tốt</a>
                        <svg data-type="monochrome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" class="separator">
                            <g fill="currentColor">
                                <path
                                    d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"
                                ></path>
                            </g>
                        </svg>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                        <a class="b1240fmt hyperlink h-link r-normal small w-normal t-link" href="https://www.chotot.com/user/5589f67709bd61562ce65450a0967452" target="">Trang cá nhân của Cuong Dao</a>
                        <svg data-type="monochrome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" class="separator">
                            <g fill="currentColor">
                                <path
                                    d="M8.05951 4.68353C8.37193 4.37111 8.87846 4.37111 9.19088 4.68353L15.9409 11.4335C16.2533 11.746 16.2533 12.2525 15.9409 12.5649L9.19088 19.3149C8.87846 19.6273 8.37193 19.6273 8.05951 19.3149C7.74709 19.0025 7.74709 18.496 8.05951 18.1835L14.2438 11.9992L8.05951 5.8149C7.74709 5.50248 7.74709 4.99595 8.05951 4.68353Z"
                                ></path>
                            </g>
                        </svg>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><span itemprop="name">Đánh giá từ tôi</span><meta itemprop="position" content="3" /></li>
                </ol>
            </div>
            <div
                style="
                    --s1n3jvkx-0: #222222;
                    --s1n3jvkx-1: initial;
                    --s1n3jvkx-2: #ffffff;
                    --s1n3jvkx-3: 0px 0px;
                    --s1n3jvkx-4: initial;
                    --s1n3jvkx-5: initial;
                    --s1n3jvkx-6: initial;
                    --s1n3jvkx-7: 0px;
                    --s1n3jvkx-8: currentColor;
                    --s1n3jvkx-9: none;
                    --s1n3jvkx-10: 0;
                    --s1n3jvkx-11: none;
                    --s1n3jvkx-12: initial;
                    --s1n3jvkx-13: initial;
                    --s1n3jvkx-14: 0px 0px;
                    --s1n3jvkx-15: initial;
                    --s1n3jvkx-16: initial;
                    --s1n3jvkx-17: initial;
                    --s1n3jvkx-18: 0px;
                    --s1n3jvkx-19: 0;
                    --s1n3jvkx-20: none;
                    --s1n3jvkx-21: 0px 0px;
                    --s1n3jvkx-22: initial;
                    --s1n3jvkx-23: initial;
                    --s1n3jvkx-24: initial;
                    --s1n3jvkx-25: 0px;
                    --s1n3jvkx-26: 0;
                    --s1n3jvkx-27: none;
                    --s1n3jvkx-28: 0px 0px;
                    --s1n3jvkx-29: initial;
                    --s1n3jvkx-30: initial;
                    --s1n3jvkx-31: initial;
                    --s1n3jvkx-32: 0px;
                    --s1n3jvkx-33: 0;
                    --s1n3jvkx-34: none;
                    --s1n3jvkx-35: 0px 0px;
                    --s1n3jvkx-36: initial;
                    --s1n3jvkx-37: initial;
                    --s1n3jvkx-38: initial;
                    --s1n3jvkx-39: 0px;
                    --s1n3jvkx-40: 0;
                    --s1n3jvkx-41: none;
                "
                class="col-md-12 BasicInfo s1n3jvkx"
            >
                <div class="AvatarWrapper">
                    <div size="80" class="mocked-styled-93 a1o3nv49" style="--a1o3nv49-0: 80px;"><img alt="Cuong Dao" src="https://cdn.chotot.com/uac2/25761366" /></div>
                </div>
                <div class="InfoWrapper">
                    <span class="name">Cuong Dao</span>
                    <div class="rating">
                        <span>0</span>
                        <div class="ratingStar">
                            <img alt="rating-star" width="24px" loading="lazy" src="https://static.chotot.com/storage/marketplace/common/pf_rating_disable_icon.svg" class="mocked-styled-14 ct_rlm__s1uhtalk" />
                            <img alt="rating-star" width="24px" loading="lazy" src="https://static.chotot.com/storage/marketplace/common/pf_rating_disable_icon.svg" class="mocked-styled-14 ct_rlm__s1uhtalk" />
                            <img alt="rating-star" width="24px" loading="lazy" src="https://static.chotot.com/storage/marketplace/common/pf_rating_disable_icon.svg" class="mocked-styled-14 ct_rlm__s1uhtalk" />
                            <img alt="rating-star" width="24px" loading="lazy" src="https://static.chotot.com/storage/marketplace/common/pf_rating_disable_icon.svg" class="mocked-styled-14 ct_rlm__s1uhtalk" />
                            <img alt="rating-star" width="24px" loading="lazy" src="https://static.chotot.com/storage/marketplace/common/pf_rating_disable_icon.svg" class="mocked-styled-14 ct_rlm__s1uhtalk" />
                        </div>
                    </div>
                    <div class="total">
                        0<!-- -->
                        đánh giá
                    </div>
                    <div class="suggestion-label"></div>
                </div>
            </div>
            <div
                style="
                    --s1n3jvkx-0: #222222;
                    --s1n3jvkx-1: initial;
                    --s1n3jvkx-2: #ffffff;
                    --s1n3jvkx-3: 0px 0px;
                    --s1n3jvkx-4: 100%;
                    --s1n3jvkx-5: initial;
                    --s1n3jvkx-6: initial;
                    --s1n3jvkx-7: 0px;
                    --s1n3jvkx-8: currentColor;
                    --s1n3jvkx-9: none;
                    --s1n3jvkx-10: 0;
                    --s1n3jvkx-11: none;
                    --s1n3jvkx-12: initial;
                    --s1n3jvkx-13: initial;
                    --s1n3jvkx-14: 0px 0px;
                    --s1n3jvkx-15: 100%;
                    --s1n3jvkx-16: initial;
                    --s1n3jvkx-17: initial;
                    --s1n3jvkx-18: 0px;
                    --s1n3jvkx-19: 0;
                    --s1n3jvkx-20: none;
                    --s1n3jvkx-21: 0px 0px;
                    --s1n3jvkx-22: 100%;
                    --s1n3jvkx-23: initial;
                    --s1n3jvkx-24: initial;
                    --s1n3jvkx-25: 0px;
                    --s1n3jvkx-26: 0;
                    --s1n3jvkx-27: none;
                    --s1n3jvkx-28: 0px 0px;
                    --s1n3jvkx-29: 100%;
                    --s1n3jvkx-30: initial;
                    --s1n3jvkx-31: initial;
                    --s1n3jvkx-32: 0px;
                    --s1n3jvkx-33: 0;
                    --s1n3jvkx-34: none;
                    --s1n3jvkx-35: 0px 0px;
                    --s1n3jvkx-36: 100%;
                    --s1n3jvkx-37: initial;
                    --s1n3jvkx-38: initial;
                    --s1n3jvkx-39: 0px;
                    --s1n3jvkx-40: 0;
                    --s1n3jvkx-41: none;
                "
                class="mocked-styled-123 s1n3jvkx"
            >
                <div class="mocked-styled-137 c1luditf">
                    <span class="mocked-styled-42 tvzoz4x">Chờ đánh giá <span>(1)</span></span><a class="mocked-styled-43 lwemh88">Đã đánh giá <span>(0)</span></a>
                </div>
                <div class="mocked-styled-25 t1aixrug">
                    <div role="tablist" class="mocked-styled-26 t1ssja1g" style="--t1ssja1g-0: hidden;">
                        <button class="t1dz3fd0 fullWidth active" style="--display: inline-grid;" role="tab" aria-selected="true" aria-disabled="false" tabindex="0">
                            <span class="mocked-styled-23 tl5g64g" style="--tl5g64g-0: #222222;">NGƯỜI BÁN (1)</span><span color="primary" class="mocked-styled-27 tagu49w" style="--tagu49w-0: #ff8800;"></span>
                        </button>
                        <button class="t1dz3fd0 fullWidth" style="--display: inline-grid;" role="tab" aria-selected="false" aria-disabled="false" tabindex="-1">
                            <span class="mocked-styled-23 tl5g64g" style="--tl5g64g-0: #222222;">NGƯỜI MUA (0)</span>
                        </button>
                    </div>
                </div>
                <div class="ratingDetailInfoWrapper">
                    <div class="row">
                        <div class="reviewItem col-md-12">
                            <div size="32" class="mocked-styled-0 a1o3nv49" style="--a1o3nv49-0: 32px;">
                                <img alt="avatar" src="https://cdn.chotot.com/mufjxx21kV6m4p4JPXupUxICS9v-ws-LBsh7tp8iodE/preset:shopava/plain/e5232671b39277565f79909d5cd3d5a1-2777646557960381488.jpg" />
                            </div>
                            <div class="mocked-styled-11 r155h44m">
                                <div class="mocked-styled-12 fvrd6wu">
                                    <div class="mocked-styled-4 wlnjemq">
                                        <span>shop mobile di động biên hoà( hoàng lê mobile)- BÁN TRẢ GÓP</span>
                                        <i>
                                            <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M15.2923 1.29271L16.9037 5.64605C16.9169 5.68188 16.9238 5.7202 16.9238 5.75893V5.98079C16.9238 6.71599 16.6332 7.36239 16.1689 7.79338C15.8605 8.05158 15.5647 8.19561 15.306 8.27211C15.3069 8.27948 15.3074 8.28693 15.3077 8.29447H15.308V8.29947L15.3082 8.30517L15.308 8.3108V13.535C15.308 15.0204 14.8196 15.6 13.4543 15.6H11.2825H6.57156H4.78074C3.36016 15.6 2.73653 14.97 2.73653 13.535V8.33972C2.73521 8.32831 2.73436 8.3169 2.73436 8.30517C2.73436 8.29835 2.73465 8.29161 2.73515 8.28493L2.70613 8.27725V8.27286C2.55874 8.23256 2.41674 8.17637 2.28175 8.10652C2.16062 8.04173 2.05143 7.96981 1.95263 7.89864C1.38064 7.46501 1 6.76035 1 5.98079V5.7581C1 5.71531 1.00832 5.67311 1.02441 5.63405L2.82533 1.28146C2.871 1.17106 2.9728 1.09998 3.08523 1.09998H15.0281C15.1445 1.09998 15.2491 1.17636 15.2923 1.29271ZM3.30793 8.34094V13.535C3.30793 14.6427 3.68412 15.0227 4.78074 15.0227H6.2859V11.6805C6.2859 10.6603 7.28224 9.94947 8.17653 9.94947H9.868C10.8213 9.94947 11.5681 10.7097 11.5681 11.6805V15.0227H13.4543C14.5046 15.0227 14.7365 14.702 14.7365 13.535V8.35207L14.7361 8.34927C14.6823 8.34769 14.6339 8.34358 14.5915 8.33824C14.5785 8.33617 14.5655 8.33418 14.5522 8.33278L14.5489 8.33243L14.5489 8.33243C14.5057 8.32783 14.4625 8.32323 14.4201 8.31565C14.3684 8.30671 14.3184 8.2943 14.2679 8.28139L14.2561 8.27838C14.2178 8.26865 14.1795 8.25895 14.142 8.24679C14.0924 8.23066 14.0446 8.21096 13.9968 8.19118L13.9654 8.17826L13.9654 8.17826C13.9362 8.16634 13.907 8.15444 13.8788 8.14062C13.8345 8.11905 13.7917 8.09405 13.7492 8.06918L13.7491 8.06917L13.7407 8.06424C13.7296 8.05768 13.7183 8.05128 13.7071 8.04488L13.7071 8.04486L13.707 8.04483L13.707 8.0448L13.7069 8.04478C13.682 8.03054 13.657 8.01628 13.6329 8.00027C13.5934 7.97391 13.5561 7.94471 13.5186 7.91531L13.5024 7.9027C13.4927 7.89513 13.4828 7.88771 13.473 7.88029L13.4729 7.88024L13.4729 7.88023L13.4729 7.88023L13.4729 7.88022C13.4504 7.86332 13.428 7.84644 13.4067 7.82789C13.37 7.79598 13.3356 7.761 13.3013 7.72603L13.2835 7.70798C13.2744 7.69876 13.2651 7.68974 13.2558 7.68072C13.2377 7.66316 13.2196 7.6456 13.2026 7.62663C13.1641 7.58368 13.1293 7.53753 13.0944 7.4913L13.0944 7.49129L13.0825 7.47552C13.0744 7.46465 13.0659 7.45414 13.0575 7.44364C13.0457 7.4291 13.034 7.41457 13.0232 7.39905C12.9679 7.31903 12.9166 7.23528 12.871 7.14789C12.4936 7.86463 11.7802 8.34908 10.9641 8.34908C10.1444 8.34908 9.42823 7.86314 9.05037 7.14466C8.67219 7.86314 7.95489 8.34908 7.13424 8.34908C6.30698 8.34908 5.58467 7.85602 5.20842 7.12894C5.16044 7.21757 5.107 7.30272 5.04894 7.38424L5.04725 7.38664C4.9898 7.46732 4.92727 7.54395 4.86074 7.61628L4.8585 7.61875L4.85697 7.6205C4.79097 7.692 4.72067 7.75904 4.64689 7.8216L4.64004 7.82772C4.56689 7.88921 4.48996 7.9459 4.4101 7.99787L4.40739 7.99982L4.40409 8.00218L4.39986 8.00498C4.32155 8.0553 4.24015 8.10032 4.15622 8.14029C3.8408 8.26809 3.5595 8.32821 3.30793 8.34094ZM6.85731 15.0227H10.9967V11.6805C10.9967 11.0228 10.5116 10.5267 9.868 10.5267H8.17653C7.55367 10.5267 6.85731 11.0201 6.85731 11.6805V15.0227Z"
                                                    fill="#FE9900"
                                                ></path>
                                                <rect opacity="0.01" x="1" y="1" width="16" height="16" stroke="white" stroke-width="0.1"></rect>
                                            </svg>
                                        </i>
                                    </div>
                                    <div class="mocked-styled-1 wlulsq5">
                                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M15.04 11.706a1.386 1.386 0 0 1-.3.428 1.42 1.42 0 0 1-.433.28 1.332 1.332 0 0 1-.518.103c-.16 0-.3-.02-.42-.058a2.03 2.03 0 0 1-.338-.14 1.701 1.701 0 0 1-.164-.088l-.127-.081a.402.402 0 0 1-.14-.134.288.288 0 0 1-.038-.145c0-.054.02-.115.062-.182l.02-.033a.311.311 0 0 1 .44-.108l.298.195a.876.876 0 0 0 .19.096.637.637 0 0 0 .217.032c.09 0 .176-.017.258-.054a.706.706 0 0 0 .214-.146.684.684 0 0 0 .193-.478.652.652 0 0 0-.206-.48.635.635 0 0 0-.11-.087 5.463 5.463 0 0 0-.24-.137l-.503-.272a7.952 7.952 0 0 1-.28-.16 1.27 1.27 0 0 1-.475-.543 1.27 1.27 0 0 1-.118-.54 1.31 1.31 0 0 1 .4-.943c.121-.118.262-.21.424-.279a1.416 1.416 0 0 1 .925-.045c.121.04.235.086.338.141.073.035.128.064.163.087.035.021.078.049.129.082.068.044.115.09.139.134a.305.305 0 0 1 .036.144.37.37 0 0 1-.06.182l-.02.033c-.068.104-.156.156-.264.156a.337.337 0 0 1-.179-.047 1.796 1.796 0 0 1-.11-.074 3.131 3.131 0 0 0-.187-.12.688.688 0 0 0-.408-.13.555.555 0 0 0-.24.053.695.695 0 0 0-.337.35.621.621 0 0 0-.051.252c0 .09.02.173.058.248a.856.856 0 0 0 .15.208c.02.019.048.039.084.063.035.025.111.068.23.133l.46.251.305.176a1.348 1.348 0 0 1 .646 1.144c0 .19-.038.368-.113.533Zm-3.372.42c0 .086-.03.157-.09.216a.296.296 0 0 1-.218.087h-.106a.281.281 0 0 1-.213-.087.297.297 0 0 1-.084-.217V9.8c0-.13.002-.221.006-.273a1.63 1.63 0 0 0 .007-.124c0-.069-.022-.103-.062-.103-.036 0-.068.04-.095.12-.028.08-.077.19-.148.334l-.218.433a.517.517 0 0 1-.146.184.334.334 0 0 1-.215.074H9.91a.33.33 0 0 1-.213-.074.532.532 0 0 1-.145-.184l-.218-.433a2.565 2.565 0 0 1-.148-.335c-.028-.079-.06-.119-.097-.119-.04 0-.06.034-.06.103a4.071 4.071 0 0 1 .013.397v2.326a.3.3 0 0 1-.083.217.281.281 0 0 1-.213.087h-.11a.291.291 0 0 1-.217-.087.293.293 0 0 1-.087-.217v-4.08c0-.086.029-.157.087-.216a.292.292 0 0 1 .217-.088h.096c.081 0 .156.02.223.058a.482.482 0 0 1 .177.2l.669 1.334c.05.09.086.17.109.24.022.071.052.106.09.106.034 0 .063-.035.087-.106.023-.07.059-.15.108-.24l.672-1.334a.46.46 0 0 1 .175-.2.453.453 0 0 1 .225-.058h.092c.087 0 .16.03.218.088.06.059.09.13.09.216v4.08Zm-4.301-.42a1.386 1.386 0 0 1-.3.428 1.42 1.42 0 0 1-.434.28 1.332 1.332 0 0 1-.517.103c-.16 0-.3-.02-.42-.058a2.033 2.033 0 0 1-.338-.14 1.695 1.695 0 0 1-.164-.088l-.127-.081a.402.402 0 0 1-.14-.134.289.289 0 0 1-.04-.145c0-.054.022-.115.064-.182l.02-.033a.311.311 0 0 1 .44-.108l.297.195a.875.875 0 0 0 .191.096.637.637 0 0 0 .217.032c.09 0 .176-.017.258-.054a.705.705 0 0 0 .214-.146.684.684 0 0 0 .193-.478.652.652 0 0 0-.206-.48.633.633 0 0 0-.11-.087 5.39 5.39 0 0 0-.24-.137l-.503-.272a7.971 7.971 0 0 1-.28-.16 1.27 1.27 0 0 1-.475-.543 1.27 1.27 0 0 1-.119-.54 1.31 1.31 0 0 1 .4-.943c.122-.118.263-.21.425-.279a1.416 1.416 0 0 1 .925-.045c.121.04.235.086.338.141.073.035.127.064.162.087l.13.082c.068.044.115.09.139.134a.305.305 0 0 1 .036.144.37.37 0 0 1-.06.182l-.02.033c-.068.104-.156.156-.265.156a.337.337 0 0 1-.178-.047 1.79 1.79 0 0 1-.11-.074 3.135 3.135 0 0 0-.187-.12.688.688 0 0 0-.407-.13.556.556 0 0 0-.24.053.694.694 0 0 0-.338.35.621.621 0 0 0-.051.252c0 .09.019.173.058.248a.858.858 0 0 0 .15.208.74.74 0 0 0 .083.063c.035.025.112.068.231.133l.46.251.304.176a1.349 1.349 0 0 1 .646 1.144c0 .19-.037.368-.112.533ZM19.167 10A9.167 9.167 0 1 0 10 19.167h9.166l-3.426-2.023A9.145 9.145 0 0 0 19.167 10Z"
                                                fill="#777"
                                            ></path>
                                        </svg>
                                        <span class="mocked-styled-2 db3mp1y">22 giờ trước</span>
                                    </div>
                                </div>
                                <div class="mocked-styled-13 rra2zo6">
                                    <div class="mocked-styled-5 f1tb4gc5" style="--f1tb4gc5-0: 56px;">
                                        <div class="mocked-styled-6 i1cw3fkw" style="--i1cw3fkw-0: 56px;">
                                            <img
                                                src="https://cdn.chotot.com/9t3IziQ8nf1RCaOgs4R03p5AFA2zXIfT8bDewqmysM0/preset:listing/plain/97500e8e3b02535a56cdd058c1775284-2834785662995086405.jpg"
                                                alt="Ad Image"
                                                class="mocked-styled-7 pxsw5rw"
                                                style="--pxsw5rw-0: 56px;"
                                            />
                                        </div>
                                        <div class="mocked-styled-8 i5sfmaw">
                                            <div class="mocked-styled-9 tsh16f7" style="--tsh16f7-0: 16px; --tsh16f7-1: 24px; --tsh16f7-2: 4px;">IPHONE 12 Mini 128G quốc tế 2sim(1esim) chip A14”</div>
                                            <div class="mocked-styled-10 p1mygqoc" style="--p1mygqoc-0: 14px; --p1mygqoc-1: 18px;">7.299.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mocked-styled-12 fvrd6wu">
                                    <div class="mocked-styled-14 r12s69ub">Đánh giá ngay và nhận 100 điểm tốt!</div>
                                    <div class="mocked-styled-15 b1omm4kf"><button class="bh5myrx primary r-normal large w-bold i-left b1ozkzx9">Đánh giá</button></div>
                                </div>
                            </div>
                            <div class="mocked-styled-24 b1fhlzlu">
                                <button class="bh5myrx primary r-normal large w-bold i-left b1ozkzx9" data-toggle="modal" data-target="#exampleModal">Đánh giá</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row loadMoreBtn hidden"><button class="bh5myrx primary r-normal medium w-bold i-left">Xem thêm</button></div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="mocked-styled-13 ct_rm__s1fx432j">
                    <div class="mocked-styled-14 ct_rm__s1vf2qn2">
                        <div class="mocked-styled-20 ct_rm__h1w2hx8j">
                            <button type="button" class="mocked-styled-16 ct_rm__c3b018v"  data-dismiss="modal">
                                <svg data-type="monochrome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none">
                                    <g fill="currentColor">
                                        <path
                                            d="M6.25483 6.33003C6.5282 6.05666 6.97141 6.05666 7.24478 6.33003L11.9998 11.0851L16.7548 6.33003C17.0282 6.05666 17.4714 6.05666 17.7448 6.33003C18.0181 6.60339 18.0181 7.04661 17.7448 7.31997L12.9898 12.075L17.7448 16.83C18.0181 17.1034 18.0181 17.5466 17.7448 17.82C17.4714 18.0933 17.0282 18.0933 16.7548 17.82L11.9998 13.0649L7.24478 17.82C6.97141 18.0933 6.5282 18.0933 6.25483 17.82C5.98146 17.5466 5.98146 17.1034 6.25483 16.83L11.0099 12.075L6.25483 7.31997C5.98146 7.04661 5.98146 6.60339 6.25483 6.33003Z"
                                        ></path>
                                    </g>
                                </svg>
                            </button>
                            <div></div>
                        </div>
                    </div>
                    <div class="mocked-styled-18 ct_rm__c17rms07">
                        <div class="shadow shadow-top" style="opacity: 0; transition: opacity 0.3s ease 0s;"></div>
                        <div class="shadow shadow-bottom" style="opacity: 0; transition: opacity 0.3s ease 0s;"></div>
                        <div class="mocked-styled-19 ct_rm__c8i9lxi">
                            <div>
                                <div class="info no-button ct_rm__spyq0b">
                                    <svg data-type="monochrome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" class="ct_rm__t1bumepb info">
                                        <g fill="currentColor">
                                            <path
                                                d="M2.2998 11.7C2.2998 6.55043 6.47524 2.375 11.6248 2.375C16.7744 2.375 20.9498 6.55043 20.9498 11.7C20.9498 16.8496 16.7744 21.025 11.6248 21.025C6.47524 21.025 2.2998 16.8496 2.2998 11.7ZM11.6248 3.775C7.24844 3.775 3.6998 7.32363 3.6998 11.7C3.6998 16.0764 7.24844 19.625 11.6248 19.625C16.0012 19.625 19.5498 16.0764 19.5498 11.7C19.5498 7.32363 16.0012 3.775 11.6248 3.775Z"
                                            ></path>
                                            <path
                                                d="M9.6123 10.3875C9.6123 10.0009 9.92571 9.6875 10.3123 9.6875H11.8123C12.1989 9.6875 12.5123 10.0009 12.5123 10.3875V15.825C12.5123 16.2116 12.1989 16.525 11.8123 16.525C11.4257 16.525 11.1123 16.2116 11.1123 15.825V11.0875H10.3123C9.92571 11.0875 9.6123 10.7741 9.6123 10.3875Z"
                                            ></path>
                                            <path
                                                d="M9.0498 16.0125C9.0498 15.6259 9.36321 15.3125 9.7498 15.3125H13.8748C14.2614 15.3125 14.5748 15.6259 14.5748 16.0125C14.5748 16.3991 14.2614 16.7125 13.8748 16.7125H9.7498C9.36321 16.7125 9.0498 16.3991 9.0498 16.0125Z"
                                            ></path>
                                            <path
                                                d="M11.625 6.16797C11.384 6.16797 11.1483 6.23945 10.9479 6.37337C10.7475 6.50728 10.5913 6.69763 10.499 6.92032C10.4068 7.14302 10.3826 7.38807 10.4297 7.62448C10.4767 7.8609 10.5928 8.07806 10.7632 8.24851C10.9337 8.41895 11.1508 8.53503 11.3872 8.58205C11.6236 8.62908 11.8687 8.60494 12.0914 8.5127C12.3141 8.42045 12.5044 8.26424 12.6384 8.06382C12.7723 7.8634 12.8438 7.62776 12.8438 7.38672C12.8438 7.06349 12.7153 6.75349 12.4868 6.52493C12.2582 6.29637 11.9482 6.16797 11.625 6.16797V6.16797Z"
                                            ></path>
                                        </g>
                                    </svg>
                                   <!--  <div class="mocked-styled-2 ct_rm__c1m5bnbq">
                                        Đánh giá để xây dựng cộng đồng mua bán chất lượng hơn và nhận 100&nbsp;<a target="_blank" href="https://trogiup.chotot.com/nguoi-ban/diem-tot-la-gi"><b>điểm tốt.</b></a>
                                    </div> -->
                                </div>
                                <h5 class="mocked-styled-25 ct_rm__hrqfeyi">Trải nghiệm của bạn với shop mobile di động biên hoà( hoàng lê mobile)- BÁN TRẢ GÓP như thế nào?</h5>
                                <div class="mocked-styled-30 ct_rm__sp4kyg1">
                                    <div>

                                        @for($i=0; $i<5; $i++)
                                        <img width="30px" src="https://static.chotot.com/storage/marketplace/common/star.svg" class="mocked-styled-0 ct_rm__s1u41y70" / id="star_{{ $i }}" data-id="{{ $i }}">
                                    
                                        @endfor
                                    </div>
                                </div>
                                <div class="mocked-styled-27 ct_rm__tqdpe8h">
                                    <div class="mocked-styled-21 ct_rm__c1tjontv" style="--c1tjontv-0: 100%;">
                                        <div class="mocked-styled-22 ct_rm__t1qbuy10" style="--t1qbuy10-0: 136px;">
                                            <div class="focus-capture"></div>
                                            <textarea class="mocked-styled-23 ct_rm__s8ujrvk" inputmode="text" placeholder="Chia sẻ thêm về trải nghiệm mua bán của bạn..." maxlength="500"></textarea>
                                        </div>
                                        <p class="mocked-styled-24 ct_rm__pudrbhq">Tối thiểu 10 từ</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="mocked-styled-15 ct_rm__s1i4pq9c" style="--s1i4pq9c-0: center;">
                        <button class="ct_rm__b1s3do0n primary r-normal medium w-normal i-left ct_rm__brmsxnb">ĐÁNH GIÁ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


@push('js')
    
    <script type="text/javascript">

        $('.ct_rm__s1u41y70').click(function (e) {
                
            id = $(this).attr('data-id');

            for (var i = 0; i <5; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star.svg')
            }

            for (var i = 0; i <= id; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star-active.svg')
            }

           
        })
        
    </script>

     
    
@endpush    

@endsection