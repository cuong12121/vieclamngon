@foreach($job as $jobs)
    <div class="col-lg-6 ">
        <div class="job-item">
            <div class="figure">
                <div class="image"><a target="_blank" href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" title="{{ $jobs->title }}"><img src="{{ asset('picture/'.basename(str_replace('..','',$jobs->logo))) }}" class="swiper-lazy" data-src="{{ asset('picture/'.basename(str_replace('..','',$jobs->logo))) }}" alt="{{ $jobs->title }} " /></a></div>
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
                <div class="top-icon"> <span class="top apply-job" onclick="apply('{{ $jobs->id }}')">Apply</span> </div>

               

                <div class="saves-icon"> <span class="top save-job" onclick="saveJob('{{ $jobs->id }}')">Save</span> </div>
                @endif
            </div>
        </div>
    </div>
@endforeach