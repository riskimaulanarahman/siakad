<?php

namespace App\Http\Requests\Library;

use Illuminate\Foundation\Http\FormRequest;

class BarcodeRequest extends FormRequest
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
            'type'           => 'required|in:range,csv',
            'width'          => 'required|numeric',
            'height'         => 'required|numeric',
            'per_page_limit' => 'required|integer'
        ];

        if ($this->type == 'range') {
            $rules['start'] = 'required';
            $rules['end'] = 'required|gte:start';
        } else if ($this->type == 'csv') {
            $rules['csv'] = 'required';
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
            'type'           => trans('library.barcode_print_type'),
            'start'          => trans('library.barcode_range_start'),
            'end'            => trans('library.barcode_range_end'),
            'csv'            => trans('library.barcode_csv'),
            'width'          => trans('library.barcode_width'),
            'height'         => trans('library.barcode_height'),
            'per_page_limit' => trans('library.barcode_per_page_limit')
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
        ];
    }
}