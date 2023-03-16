<table>             
    <tr>
        <th>Job nộp</th>
        <th>Ngày giờ nộp</th>
     
    </tr>

    @foreach($data as $datas)
    <tr>
        
        <td>{{ $datas->job_id }}</td>
        <td>{{ ($datas->created_at)->format('d/m/Y, H:i:s') }}</td>
    </tr>
    @endforeach
    
</table>
