@if($data->count()>0)

<?php 
    $chunk_data = $data->chunk(6);
   
?>

<div class="owl-carousel owl-theme owl-nav">
    <div class="tworow_catMatchingScroll__Ysir1 tworow_catMatchingScrollTwo__BiCfs wflw9x5" style="--wflw9x5-0: 0;">

    @for($i=0; $i < count($chunk_data); $i++)  

        @foreach($chunk_data[$i] as $key => $value)
        <div class="item">
            <div class="AdItem_item___Rdm7 tworow_catMatchingScrollItem__JrTcP AdItem_itemEntitlement__OLyni i1jdhhry">
                <div class="AdItem_wrapperLink__w2rsn">
                    
                    <div class="styles_adTitle__US_h0">

                        <a class="AdItem_wrapperLinkHref__U9mX_" href="{{ route('job_details', [$value->link, $value->id]) }}">
                            <div class="commonStyle_adTitleGrid__e3PyM styles_title__XeY4x">{{ $value->title }}</div>
                        </a>
                    </div>
                    <div class="AdItem_wrapperLinkFooter__v9V5D">
                        <div class="AdThumbnail_thumbnailWrapper__IrMJY">
                            <div class="AdThumbnail_thumbnailImg__wHm_a  ">
                                <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                    <img alt="{{  $value->title }}" src="/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchotot-icons%2Fpng%2Fjobtype_v2%2F15.png&amp;w=3840&amp;q=75 3840w" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                                <div class="l195y29z"></div>
                            </div>
                        </div>
                        <div class="w1jbmbeu">
                            <div class="AdBody_caption__iFaw_">

                                <?php 

                                    $price_ar = [];

                                    if(!empty($value->salary)){

                                        $price_ar = explode('-', trim($value->salary));


                                    }

                                ?>
                                @if(!empty($price_ar) && count($price_ar)>0)
                                <div>
                                    <span class="AdBody_price__tUISH">{{ number_format(intval($price_ar[0]))  }} đ - {{ number_format(intval($price_ar[1]))  }} đ</span>
                                </div>
                                @endif
                            </div>
                            <div class="AdBody_footer__plkQC">

                               
                                    <span class="AdBody_adItemPostedTime__rX677 AdBody_location__44t75 AdBody_adItemCompany__VC2qX">
                                        <span class="AdBody_text__zZZ87">

                                            <span class="AdBody_companyIcon__HjGd8"></span>
                                            
                                        </span>

                                        <a href="{{ !empty($value->links)?Route('employ-details', $value->links):'' }}">
                                            <span >{{ $value->name }}</span>
                                        </a>
                                    </span>
                                

                                <span class="AdBody_adItemPostedTime__rX677 AdBody_location__44t75">
                                    <span class="AdBody_text__zZZ87"> <span class="AdBody_locationIcon__qGgrm"></span>Hà Nội</span>
                                </span>


                                <div class="SaveAd_saveAdWrapper__2bqj7 AdItem_saveAd__yjv8V">
                                    <button id="btn_save_ad" type="button" class="SaveAd_btnSavedAd__zXXRD">
                                        <img width="16" src="https://static.chotot.com/storage/chotot-icons/next/save-ad.svg" alt="like">
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        @endforeach

    @endfor
    </div>
</div>

@endif