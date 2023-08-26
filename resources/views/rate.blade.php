@extends('frontend.layout1')

@section('content')

@push('style')

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    
    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/17d70828/_next/static/css/a8c2e8a7c8d588d4.css">

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/17d70828/_next/static/css/f44495da3bea9809.css">

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_SHOP_FRONT/852027d6/_next/static/css/78133e826f0f3082.css">

    <link rel="stylesheet" type="text/css" href="https://static.chotot.com/storage/CT_WEB_UNI_SHOP_FRONT/852027d6/_next/static/css/18126cceff93753c.css">



    <style type="text/css">
        
        #exampleModal .modal-content{
            background-color: unset !important;
        }

        .ct_rm__s1u41y70{
            cursor: pointer;
        }

        .t1aixrug{
            display: none;
        }

        .ratingDetailInfoWrapper{
            min-height: 500px;
        }

        .show-rate{
            display: none;
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
                class="col-md-12 BasicInfo s1n3jvkx">
                <div class="AvatarWrapper">
                    <div size="80" class="mocked-styled-93 a1o3nv49" style="--a1o3nv49-0: 80px;"><img alt="Cuong Dao" src="https://cdn.chotot.com/uac2/25761366" /></div>
                </div>

               
                <div class="InfoWrapper">
                    <span class="name"></span>
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

                    @if(!empty($show_rate) && $show_rate->count()>0)
                    <div class="total">
                        
                        {{ $show_rate->count() }} Đánh giá
                    </div>


                    <div class="suggestion-label"></div>

                    @endif
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
                class="mocked-styled-123 s1n3jvkx">

                <div class="mocked-styled-25">
                    <div role="tablist" class="mocked-styled-26 t1ssja1g" style="--t1ssja1g-0:hidden">
                        <button class="t1dz3fd0 fullWidth show_active  active" style="--display:inline-grid" role="tab" aria-selected="true" aria-disabled="false" tabindex="0">
                            <span class="mocked-styled-23 tl5g64g" style="--tl5g64g-0:#222222">NGƯỜI BÁN (1)</span><span color="primary" class="mocked-styled-27 tagu49w" style="--tagu49w-0:#FF8800"></span>
                        </button>
                        <button class="t1dz3fd0 fullWidth show_active" style="--display:inline-grid" role="tab" aria-selected="false" aria-disabled="false" tabindex="-1"><span class="mocked-styled-23 tl5g64g" style="--tl5g64g-0:#222222">DANH SÁCH ĐÁNH GIÁ</span></button>
                    </div>
                </div>

                @if(!empty($show_rate) && $show_rate->count()>0)
                <div class="mocked-styled-137 c1luditf">
                    <a class="mocked-styled-43 lwemh88">Đã đánh giá <span>({{ $show_rate->count() }})</span></a>
                </div>

                @endif


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
                    <div>
                        <div class="reviewItem col-md-12">
                            <div size="32" class="mocked-styled-0 a1o3nv49" style="--a1o3nv49-0: 32px;">
                                <img alt="avatar" src="https://cdn.chotot.com/mufjxx21kV6m4p4JPXupUxICS9v-ws-LBsh7tp8iodE/preset:shopava/plain/e5232671b39277565f79909d5cd3d5a1-2777646557960381488.jpg" />
                            </div>
                            <div class="mocked-styled-11 r155h44m">
                                <div class="mocked-styled-12 fvrd6wu">
                                    <div class="mocked-styled-4 wlnjemq">
                                        <span> {{ $job->title  }} </span>
                                        
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
                                            <div class="mocked-styled-9 tsh16f7" style="--tsh16f7-0: 16px; --tsh16f7-1: 24px; --tsh16f7-2: 4px;">{{ $job->title }}</div>
                                            <!-- <div class="mocked-styled-10 p1mygqoc" style="--p1mygqoc-0: 14px; --p1mygqoc-1: 18px;">7.299.000 đ</div> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="mocked-styled-12 fvrd6wu">
                                    
                                    <div class="mocked-styled-15 b1omm4kf"><button class="bh5myrx primary r-normal large w-bold i-left b1ozkzx9">Đánh giá</button></div>
                                </div>
                            </div>
                            <div class="mocked-styled-24 b1fhlzlu">
                                <button class="bh5myrx primary r-normal large w-bold i-left b1ozkzx9" data-toggle="modal" data-target="#exampleModal">Đánh giá</button>
                            </div>

                        </div>


                        <div class="show-rate">   

                            <ul class="flex flex-col divide-y border-t">

                                @if(!empty($show_rate) && $show_rate->count()>0 )

                                @foreach($show_rate as $value)

                                <li class="flex gap-2 p-3 [&amp;>span]:invisible [&amp;>span]:absolute [&amp;>span]:mt-[-140px] [&amp;>span]:block [&amp;>span]:pt-[140px]">
                                    <div class="c10h79xq"><img alt="" class="w-full" src=""></div><span id="1803919"></span><a class="flex-1" href="#1803919"><b>{{ $value->name??'' }}</b>
                                        <p>
                                            <div class="[&amp;_a]:text-[#2275D3]">{{ $value->content??'' }}</div>
                                        </p>
                                        <div></div>
                                        <div class="flex items-center">
                                            <div class="sjvt0sz flex items-center gap-2" role="presentation">
                                                <ul class="flex items-center">

                                                    @for($i=0; $i<$value->star; $i++)
                                                    <li class="liStar24"><span class="s5z3j8f"></span></li>
                                                    @endfor
                                                </ul>
                                            </div>


                                            <?php 
                                                Carbon\Carbon::setLocale('vi');
                                                $carbonated_date = Carbon\Carbon::parse($value->created_at);
                                               //  Assuming today was 2016-07-27 12:45:32
                                               $diff_date = $carbonated_date->diffForHumans($now);
                                            ?>

                
                                            <div class="text-[14px] text-[#9b9b9b]"> |   {{    $carbonated_date->diffForHumans($now) }} </div>
                                        </div>

                                        <div class="my-2 flex h-[52px] overflow-hidden rounded bg-[#f8f8f8]"><img alt="" height="56" src="https://static.chotot.com/storage/default_images/c2c_ad_image.jpg" width="56">
                                            <div class="ml-[8px] flex flex-col justify-center">
                                                <p>{{ $job->title??'' }}</p>
                                            </div>
                                        </div>
                                        <div></div>
                                    </a>
                                </li>

                                @endforeach

                                @endif



                            </ul>
                        </div>


                    </div>
                </div>
                <div class="row loadMoreBtn hidden"><button class="bh5myrx primary r-normal medium w-bold i-left">Xem thêm</button></div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
    <div class="modal fade" id="exampleModal" >
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
                                <h5 class="mocked-styled-25 ct_rm__hrqfeyi">Trải nghiệm của bạn với công việc {{ $job->title }} ?</h5>
                                <div class="mocked-styled-30 ct_rm__sp4kyg1">
                                    <div class="star_click">

                                        @for($i=0; $i<5; $i++)
                                        <img width="30px" src="https://static.chotot.com/storage/marketplace/common/star.svg" class="mocked-styled-0 ct_rm__s1u41y70" / id="star_{{ $i }}" data-id="{{ $i }}">
                                    
                                        @endfor
                                    </div>
                                </div>
                                <div class="mocked-styled-27 ct_rm__tqdpe8h">
                                    <div class="mocked-styled-21 ct_rm__c1tjontv" style="--c1tjontv-0: 100%;">
                                        <div class="mocked-styled-22 ct_rm__t1qbuy10" style="--t1qbuy10-0: 136px;">
                                            <div class="focus-capture"></div>
                                            <textarea class="mocked-styled-23 ct_rm__s8ujrvk" inputmode="text" placeholder="Chia sẻ thêm về trải nghiệm mua bán của bạn..." maxlength="500" name="content" id="content_rate"></textarea>
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

    <script type="text/javascript" src="https://unpkg.com/sweetalert2@7.18.0/dist/sweetalert2.all.js"></script>



    <!-- jQuery library -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script> -->


    
    <script type="text/javascript">

        star_selected = 0;
        
        $('.ct_rm__s1u41y70').click(function (e) {
                
            id = $(this).attr('data-id');

            for (var i = 0; i <5; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star.svg')
            }

            for (var i = 0; i <= id; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star-active.svg')
            }

            
            star_selected = id;
           
        });

        $(".ct_rm__s1u41y70").mouseenter(function(){
            
            id = $(this).attr('data-id');

            for (var i = 0; i <5; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star.svg')
            }

            for (var i = 0; i <= id; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star-active.svg')
            }

            star_selected = id;


        })

        $('.star_click').mouseleave(function(){

            for (var i = 0; i <star_selected; i++) {
                
                $('#star_'+i).attr('src', 'https://static.chotot.com/storage/marketplace/common/star-active.svg');
            }
           
        });


        $('.ct_rm__b1s3do0n').click(function () {



            
        
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                type: 'POST',
                url: "{{ route('add-rate') }}",
                data: {

                    _token: '{!! csrf_token() !!}',
                    content: $('#content_rate').val(),
                    star_selected: star_selected,
                    id_employer:  {{ $job->id }}
                    
                },
               
                success: function(result){

                    $('#exampleModal').modal('hide');

                    swal({ title: 'cảm ơn bạn đã gửi đánh giá', type: 'success' })

                   
                 
                }
            })     

            
        }) 

        $('.show_active').click(function () {

            $('.show_active').removeClass('active');

            $('.show_active').find('.tagu49w').remove();

            $(this).addClass('active');

            $(this).append('<span color="primary" class="mocked-styled-27 tagu49w" style="--tagu49w-0:#FF8800"></span>');

            if($('.show-rate').is(":visible")){

                $('.show-rate').hide();

                $('.reviewItem').show();

            }
            else{
                $('.show-rate').show();

                $('.reviewItem').hide();
            }


            
        })   

        
    </script>

     
    
@endpush    

@endsection