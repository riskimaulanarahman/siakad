<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
        $relations = implode(',', gv(getVar('list'), 'relations', []));

        $rules = [
            'type'                          => 'required|in:basic,parent,contact',
            'first_guardian_email'          => 'sometimes|email',
            'second_guardian_email'         => 'sometimes|email',
            'first_guardian_date_of_birth'  => 'sometimes|date',
            'second_guardian_date_of_birth' => 'sometimes|date',
            'contact_number'                => 'sometimes|required',
            'email'                         => 'sometimes|email',
            'emergency_contact_number'      => 'sometimes|required',
            'present_address_line_1'        => 'sometimes|required',
            'present_city'                  => 'sometimes|required',
            'present_state'                 => 'sometimes|required',
            'present_zipcode'               => 'sometimes|required'
        ];

        if ($this->type == 'basic') {
            $rules['first_name'] = 'required|min:2';
            $rules['date_of_birth'] = 'required|date';
            $rules['gender'] = 'required';
        } else if ($this->type == 'parent') {
            $rules['first_guardian_name'] = 'required|min:3';
            $rules['first_guardian_relation'] = 'required|different:second_guardian_relation|in:'.$relations;

            if ($this->second_guardian_name) {
                $rules['second_guardian_relation'] = 'required|different:first_guardian_relation|in:'.$relations;
            }
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
            'first_name'                    => trans('student.first_name'),
            'last_name'                     => trans('student.last_name'),
            'date_of_birth'                 => trans('student.date_of_birth'),
            'gender'                        => trans('student.gender'),
            'first_guardian_name'           => trans('student.first_guardian_name'),
            'second_guardian_name'          => trans('student.second_guardian_name'),
            'first_guardian_email'          => trans('student.first_guardian_email'),
            'second_guardian_email'         => trans('student.second_guardian_email'),
            'first_guardian_date_of_birth'  => trans('student.first_guardian_date_of_birth'),
            'second_guardian_date_of_birth' => trans('student.second_guardian_date_of_birth'),
            'contact_number'                => trans('student.contact_number'),
            'email'                         => trans('student.email'),
            'emergency_contact_number'      => trans('student.emergency_contact_number'),
            'present_address_line_1'        => trans('student.address_line_1'),
            'present_city'                  => trans('student.city'),
            'present_state'                 => trans('student.state'),
            'present_zipcode'               => trans('student.zipcode')
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
            'first_name.required_if'                 => trans('validation.required', ['attribute' => trans('student.first_name')]),
            'last_name.required_if'                  => trans('validation.required', ['attribute' => trans('student.last_name')]),
            'date_of_birth.required_if'              => trans('validation.required', ['attribute' => trans('student.date_of_birth')]),
            'gender.required_if'                     => trans('validation.required', ['attribute' => trans('student.gender')]),
            'first_guardian_name.required_if'        => trans('validation.required', ['attribute' => trans('student.first_guardian_name')]),
            'first_guardian_relation.different'      => trans('general.different_custom', ['attribute' => trans('general.relation')]),
            'second_guardian_relation.different'     => trans('general.different_custom', ['attribute' => trans('general.relation')]),
            'second_guardian_relation.required_with' => trans('validation.required', ['attribute' => trans('general.relation')])
        ];
    }
}
