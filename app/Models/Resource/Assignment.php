<?php

namespace App\Models\Resource;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Assignment extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'title',
                            'date_of_assigment',
                            'due_date',
                            'description',
                            'subject_id',
                            'employee_id',
                            'upload_token',
                            'options'
                        ];
    protected $casts = ['options' => 'array', 'date_of_assigment' => 'date', 'due_date' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'assignments';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('assignment')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function subject()
    {
        return $this->belongsTo('App\Models\Academic\Subject');
    }

    public function employee()
    {
        return $this->belongsTo('App\Models\Employee\Employee');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function scopeInfo($q)
    {
        return $q->with('subject:id,name,code,batch_id', 'subject.batch:id,name,course_id', 'subject.batch.course:id,name', 'employee', 'employee.employeeDesignations', 'employee.employeeDesignations.designation', 'employee.employeeDesignations.designation.employeeCategory');
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterByUuid($q, $uuid)
    {
        if (! $uuid) {
            return $q;
        }

        return $q->where('uuid', '=', $uuid);
    }

    public function scopeFilterByTitle($q, $title, $s = 0)
    {
        if (! $title) {
            return $q;
        }

        return ($s) ? $q->where('title', '=', $title) : $q->where('title', 'like', '%'.$title.'%');
    }

    public function scopeFilterBySession($q)
    {
        return $q->whereHas('subject',function($q1) {
            $q1->whereHas('batch',function($q2) {
                $q2->whereHas('course',function($q3){
                    $q3->where('academic_session_id', config('config.default_academic_session.id'));
                });
            });
        });
    }

    public function scopeDateOfAssignmentBetween($q, $dates)
    {
        if ((! $dates['start_date'] || ! $dates['end_date']) && $dates['start_date'] <= $dates['end_date']) {
            return $q;
        }

        return $q->where('date_of_assignment', '>=', getStartOfDate($dates['start_date']))->where('date_of_assignment', '<=', getEndOfDate($dates['end_date']));
    }

    public function scopeDueDateBetween($q, $dates)
    {
        if ((! $dates['start_date'] || ! $dates['end_date']) && $dates['start_date'] <= $dates['end_date']) {
            return $q;
        }

        return $q->where('due_date', '>=', getStartOfDate($dates['start_date']))->where('due_date', '<=', getEndOfDate($dates['end_date']));
    }
}
