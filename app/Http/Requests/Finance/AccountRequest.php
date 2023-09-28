<?php

namespace App\Http\Requests\Finance;

use Illuminate\Foundation\Http\FormRequest;

class AccountRequest extends FormRequest
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
            'type'            => 'required|in:cash,bank',
            'opening_balance' => 'required|min:0|numeric'
        ];

        if ($this->type == 'bank') {
            $rules['account_number'] = 'required';
            $rules['bank_name'] = 'required';
            $rules['branch_name'] = 'required';
            $rules['bank_identification_code'] = 'required';
        }

        $id = $this->route('id');

        if ($this->method() === 'POST') {
            $rules['name']   = 'required|unique:accounts';
            $rules['prefix'] = 'required|unique:accounts';
        } elseif ($this->method() === 'PATCH') {
            $rules['name']   = 'required|unique:accounts,name,'.$id.',id';
            $rules['prefix'] = 'required|unique:accounts,prefix,'.$id.',id';
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
            'name'                     => trans('finance.account_name'),
            'prefix'                   => trans('finance.account_prefix'),
            'type'                     => trans('finance.account_type'),
            'account_number'           => trans('finance.account_number'),
            'bank_name'                => trans('finance.bank_name'),
            'branch_name'              => trans('finance.branch_name'),
            'bank_identification_code' => trans('finance.bank_identification_code'),
            'opening_balance'          => trans('finance.account_opening_balance')
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
            'account_number.required_if'           => trans('validation.required', ['attribute' => trans('finance.account_number')]),
            'bank_name.required_if'                => trans('validation.required', ['attribute' => trans('finance.bank_name')]),
            'branch_name.required_if'              => trans('validation.required', ['attribute' => trans('finance.branch_name')]),
            'bank_identification_code.required_if' => trans('validation.required', ['attribute' => trans('finance.bank_identification_code')])
        ];
    }
}
