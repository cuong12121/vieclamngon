<table>             
    <tr>
        <th>cv nộp </th>
        <th>Ngày giờ nộp</th>
     
    </tr>
    @if(!empty($apply_job))
    @foreach($apply_job as $datas)
    <tr>

        
        <td><a href="{{ route('viewCvadmin', $datas->id) }}">{{ (App\User::find($datas->user_id))->name }}</a></td>
        <td>{{ ($datas->created_at)->format('d/m/Y, H:i:s') }}</td>
    </tr>
    @endforeach
    @endif
    
</table>
