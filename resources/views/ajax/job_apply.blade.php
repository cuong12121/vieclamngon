<table>             
    <tr>
        <th>Cv nộp</th>
        <th>Ngày giờ nộp</th>
     
    </tr>

 
    @foreach($data as $datas)
    <tr>
        
        <td><a href="{{ route('viewCvadmin', $datas->user_id) }}">Xem cv</a></td>
        <td>{{ ($datas->created_at)->format('d/m/Y, H:i:s') }}</td>
    </tr>
    @endforeach
    
</table>
