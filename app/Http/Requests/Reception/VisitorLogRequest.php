<?php

namespace App\Http\Requests\Reception;

use Illuminate\Foundation\Http\FormRequest;

class VisitorLogRequest extends FormRequest
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
            'visiting_purpose_id'   => 'required',
            'name'                  => 'required',
            'type'                  => 'required|in:parent,other',
            'visitor_count'         => 'required|numeric|min:1',
            'date_of_visit'         => 'required'
        ];

        if ($this->type == 'parent') {
            $rules['relation_with_student'] = 'required';
            $rules['student_id'] = 'required';
        } else if ($this->type == 'other') {
            $rules['contact_number'] = 'required';
            $rules['address'] = 'required';
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
            'visiting_purpose_id'   => trans('reception.visiting_purpose'),
            'type'                  => trans('reception.visitor_type'),
            'name'                  => trans('reception.visitor_name'),
            'relation_with_student' => trans('reception.relation_with_student'),
            'contact_number'        => trans('reception.visitor_contact_number'),
            'address'               => trans('reception.visitor_address'),
            'visitor_count'         => trans('reception.visitor_count'),
            'student_id'            => trans('student.student'),
            'date_of_visit'         => trans('reception.date_of_visit'),
            'entry_time'            => trans('reception.entry_time')
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
            'name.required_if'           => trans('validation.required', ['attribute' => trans('reception.visitor_name')]),
            'contact_number.required_if' => trans('validation.required', ['attribute' => trans('reception.visitor_contact_number')]),
            'address.required_if'        => trans('validation.required', ['attribute' => trans('reception.visitor_address')]),
            'student_id.required_if'     => trans('validation.required', ['attribute' => trans('student.student')]),
            'relation_with_student.required_if' => trans('validation.required', ['attribute' => trans('reception.relation_with_student')])
        ];
    }
}
