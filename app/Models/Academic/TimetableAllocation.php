<?php

namespace App\Models\Academic;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class TimetableAllocation extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'timetable_id',
                            'day',
                            'class_timing_id',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'timetable_allocations';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('timetable_allocation')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function timetable()
    {
        return $this->belongsTo('App\Models\Academic\Timetable');
    }

    public function classTiming()
    {
        return $this->belongsTo('App\Models\Academic\ClassTiming');
    }

    public function timetableAllocationDetails()
    {
        return $this->hasMany('App\Models\Academic\TimetableAllocationDetail');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterByTimetableId($q, $timetable_id)
    {
        if (! $timetable_id) {
            return $q;
        }

        return $q->where('timetable_id', '=', $timetable_id);
    }
}
