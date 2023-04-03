

@if(!empty($job))
@foreach($job as $jobs)



<tr>
    <td class="job">
        <div class="name">
            <div class="figure">
                <div class="image">
                    <a href="javascript:void(0)"><img src="{{ asset($jobs->logo) }}" alt="{{ $jobs->name }}" title="{{ $jobs->title }}"> {{ $jobs->title }} </a></div>


                <div class="figcaption">
                    <h3><a href="javascript:void(0)">{{ $jobs->title }}</a></h3>
                    <p class="company-name"><a href="javascript:void(0)" title="{{ $jobs->name }}">{{ $jobs->name }}</a></p>
                    <p class="location">Hà Nội</p>
                </div>
            </div>
        </div>
    </td>


    <td class="location">
        <p>Hà Nội</p>
    </td>
    <!-- <td class="action">
        <ul class="list-action">
            <li class="apply-now-btn"><a class="btn-gradient" href="javascript:void(0)" onclick="apply('{{ $jobs->id }}')">Ứng Tuyển</a></li>
            <li class="delete"><a href="javascript:void(0);" onclick="checkDeleteJobSaved({{ $jobs->id }});"> <em class="material-icons">highlight_off</em><span>Xóa</span></a></li>
        </ul>
    </td> -->
</tr>
@endforeach
@endif