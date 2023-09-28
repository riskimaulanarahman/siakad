<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationUpdateStatusRequest extends FormRequest
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
            'status' => 'required|in:rejected,allotted',
        ];

        if ($this->status == 'allotted') {
            $rules['batch_id'] = 'required|integer';
            $rules['date_of_admission'] = 'required|date';
        } else if ($this->status == 'rejected') {
            $rules['rejection_remarks'] = 'required|min:20';
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
            'status'            => trans('student.registration_status'),
            'date_of_admission' => trans('student.date_of_admission'),
            'batch_id'          => trans('academic.batch'),
            'rejection_remarks' => trans('student.rejection_remarks'),
            'admission_remarks' => trans('student.admission_remarks'),
            'admission_number'  => trans('student.admission_number')
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
            'batch_id.required_if'          => trans('validation.required', ['attribute' => trans('academic.batch')]),
            'rejection_remarks.required_if' => trans('validation.required', ['attribute' => trans('student.rejection_remarks')]),
            'admission_remarks.required_if' => trans('validation.required', ['attribute' => trans('student.admission_remarks')]),
            'admission_number.required_if'  => trans('validation.required', ['attribute' => trans('student.admission_number')])
        ];
    }
}
