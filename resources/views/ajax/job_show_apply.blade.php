<table>             
    <tr>
        <th>cv</th>
        <th>Ngày giờ nộp</th>
     
    </tr>
    @if(!empty($job))
    @foreach($job as $datas)
    <tr>

        
        <td><a href="{{ route('viewCvadmin', (App\User::find($datas->user_id))->id) }}">{{ App\User::find($datas->user_id))->name }}</a></td>
        <td>{{ ($datas->created_at)->format('d/m/Y, H:i:s') }}</td>
    </tr>
    @endforeach
    @endif
    
</table>
