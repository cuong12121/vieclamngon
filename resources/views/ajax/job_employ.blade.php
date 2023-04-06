<table>             
    <tr>
        <th>Tên công việc </th>
        <th>Ngày tạo</th>
     
    </tr>
    @if(!empty($job))
    @foreach($job as $datas)
    <tr>
        <td><a href="">{{  $datas->title }}</a></td>
        <td>{{ \Carbon\Carbon::parse($datas->created_at)->format('d/m/Y')    }}</td>
    </tr>
    @endforeach
    @endif
    
</table>
