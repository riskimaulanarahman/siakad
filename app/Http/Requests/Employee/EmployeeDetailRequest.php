<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeDetailRequest extends FormRequest
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
        $rules = [];

        if ($this->type == 'basic') {
            $rules['first_name'] = 'required|min:2';
            $rules['last_name'] = 'required|min:2';
            $rules['date_of_birth'] = 'required|date';
            $rules['gender'] = 'required';
            $rules['father_name'] = 'required|min:5';
            $rules['mother_name'] = 'required|min:5';
        } else if ($this->type == 'contact') {
            $rules['contact_number'] = 'required';
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
            'first_name'      => trans('employee.first_name'),
            'last_name'       => trans('employee.last_name'),
            'date_of_birth'   => trans('employee.date_of_birth'),
            'contact_number'  => trans('employee.contact_number'),
            'gender'          => trans('employee.gender'),
            'father_name'     => trans('employee.father_name'),
            'mother_name'     => trans('employee.mother_name')
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
            'first_name.required_if'     => trans('validation.required', ['attribute' => trans('employee.first_name')]),
            'last_name.required_if'      => trans('validation.required', ['attribute' => trans('employee.last_name')]),
            'date_of_birth.required_if'  => trans('validation.required', ['attribute' => trans('employee.date_of_birth')]),
            'contact_number.required_if' => trans('validation.required', ['attribute' => trans('employee.contact_number')]),
            'gender.required_if'         => trans('validation.required', ['attribute' => trans('employee.gender')]),
            'father_name.required_if'    => trans('validation.required', ['attribute' => trans('employee.father_name')]),
            'mother_name.required_if'    => trans('validation.required', ['attribute' => trans('employee.mother_name')])
        ];
    }
}
