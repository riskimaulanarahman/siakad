<?php

namespace App\Http\Requests\Calendar;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'event_type_id'        => 'required',
            'description'          => 'required',
            'start_date'           => 'required|date',
            'end_date'             => 'required|date|after_or_equal:start_date',
            'audience'             => 'required',
            'title'                => 'required',
        ];

        if ($this->audience == 'selected_course') {
            $rules['course_id'] = 'required|array';
        } else if ($this->audience == 'selected_batch') {
            $rules['batch_id'] = 'required|array';
        } else if ($this->audience == 'selected_employee_category') {
            $rules['employee_category_id'] = 'required|array';
        } else if ($this->audience == 'selected_department') {
            $rules['department_id'] = 'required|array';
        }

        return $rules;
    }

    /**
     * Translate fields with user friendly name.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'event_type_id'        => trans('calendar.event_type'),
            'description'          => trans('calendar.event_description'),
            'start_date'           => trans('calendar.event_start_date'),
            'end_date'             => trans('calendar.event_end_date'),
            'audience'             => trans('calendar.event_audience'),
            'title'                => trans('calendar.event_title'),
            'course_id'            => trans('academic.course'),
            'batch_id'             => trans('academic.batch'),
            'employee_category_id' => trans('employee.category'),
            'department_id'        => trans('employee.department')
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'course_id.required_if'            => trans('validation.required', ['attribute' => trans('academic.course') ]),
            'batch_id.required_if'             => trans('validation.required', ['attribute' => trans('academic.batch') ]),
            'employee_category_id.required_if' => trans('validation.required', ['attribute' => trans('employee.category') ]),
            'department_id.required_if'        => trans('validation.required', ['attribute' => trans('employee.department') ])
        ];
    }
}
