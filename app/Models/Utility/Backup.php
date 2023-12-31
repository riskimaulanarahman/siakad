<?php

namespace App\Models\Utility;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Backup extends Model
{
    use LogsActivity;

    protected $fillable = [
                    'file',
                    'user_id',
                    'options'
                ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'backups';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('backup')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeCreatedAtDateBetween($q, $dates)
    {
        if ((! $dates['start_date'] || ! $dates['end_date']) && $dates['start_date'] <= $dates['end_date']) {
            return $q;
        }

        return $q->where('created_at', '>=', getStartOfDate($dates['start_date']))->where('created_at', '<=', getEndOfDate($dates['end_date']));
    }
}
