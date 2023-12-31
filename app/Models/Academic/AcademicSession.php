<?php

namespace App\Models\Academic;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class AcademicSession extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'name',
                            'description',
                            'start_date',
                            'end_date',
                            'is_default',
                            'options'
                        ];
    protected $casts = ['options' => 'array','start_date' => 'date', 'end_date' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'academic_sessions';
    protected $appends = ['exam_report_analysis', 'exam_report_analysis_staff_token','exam_report_analysis_student_token'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('academic_session')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function courses()
    {
        return $this->hasMany('App\Models\Academic\Course');
    }

    public function courseGroups()
    {
        return $this->hasMany('App\Models\Configuration\Academic\CourseGroup');
    }

    public function feeGroups()
    {
        return $this->hasMany('App\Models\Finance\Fee\FeeGroup');
    }

    public function transportCircles()
    {
        return $this->hasMany('App\Models\Transport\TransportCircle');
    }

    public function studentRecords()
    {
        return $this->hasMany('App\Models\Student\StudentRecord');
    }

    public function transportFees()
    {
        return $this->hasMany('App\Models\Transport\TransportFee');
    }

    public function feeConcessions()
    {
        return $this->hasMany('App\Models\Finance\Fee\FeeConcession');
    }

    public function classTimings()
    {
        return $this->hasMany('App\Models\Academic\ClassTiming');
    }

    public function getOption(string $option)
    {
        return array_get($this->options, $option);
    }

    public function getExamReportAnalysisAttribute()
    {
        return $this->getOption('exam_report_analysis') ? true : false;
    }

    public function getExamReportAnalysisStaffTokenAttribute()
    {
        return $this->getOption('exam_report_analysis') ? (string) $this->getOption('exam_report_analysis_staff_token') : null;
    }

    public function getExamReportAnalysisStudentTokenAttribute()
    {
        return $this->getOption('exam_report_analysis') ? (string) $this->getOption('exam_report_analysis_student_token') : null;
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterByIsDefault($q, $is_default)
    {
        return $q->where('is_default', '=', $is_default);
    }

    public function scopeFilterByName($q, $name)
    {
        if (! $name) {
            return $q;
        }

        return $q->where('name', 'like', '%'.$name.'%');
    }
}
