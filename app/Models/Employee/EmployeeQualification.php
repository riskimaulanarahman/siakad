<?php

namespace App\Models\Employee;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class EmployeeQualification extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'employee_id',
                            'standard',
                            'institute_name',
                            'board_name',
                            'start_period',
                            'end_period',
                            'result',
                            'description',
                            'options'
                        ];
    protected $casts = ['options' => 'array'];
    protected $primaryKey = 'id';
    protected $table = 'employee_qualifications';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('employee_qualification')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function employee()
    {
        return $this->belongsTo('App\Models\Employee\Employee');
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

    public function scopeFilterByEmployeeId($q, $employee_id)
    {
        if (! $employee_id) {
            return $q;
        }

        return $q->where('employee_id', '=', $employee_id);
    }

    public function scopeFilterByStandard($q, $standard)
    {
        if (! $standard) {
            return $q;
        }

        return $q->where('standard', '=', $standard);
    }
}
