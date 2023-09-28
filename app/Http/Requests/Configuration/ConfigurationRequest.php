<?php

namespace App\Http\Requests\Configuration;

use Illuminate\Foundation\Http\FormRequest;

class ConfigurationRequest extends FormRequest
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
        $rule = [
            'institute_name'                 => 'sometimes|required',
            'address_line_1'                 => 'sometimes|required',
            'country'                        => 'sometimes|required',
            'email'                          => 'sometimes|required',
            'driver'                         => 'sometimes|required',
            'from_name'                      => 'sometimes|required',
            'from_address'                   => 'sometimes|required',
            'smtp_host'                      => 'nullable|required_if:driver,smtp',
            'smtp_port'                      => 'nullable|required_if:driver,smtp',
            'smtp_username'                  => 'nullable|required_if:driver,smtp',
            'smtp_password'                  => 'nullable|required_if:driver,smtp',
            'mailgun_host'                   => 'nullable|required_if:driver,mailgun',
            'mailgun_port'                   => 'nullable|required_if:driver,mailgun',
            'mailgun_username'               => 'nullable|required_if:driver,mailgun',
            'mailgun_password'               => 'nullable|required_if:driver,mailgun',
            'mailgun_domain'                 => 'nullable|required_if:driver,mailgun',
            'mailgun_secret'                 => 'nullable|required_if:driver,mailgun',
            'mandrill_secret'                => 'nullable|required_if:driver,mandrill',
            'smtp_encryption'                => 'nullable|in:ssl,tls,'.config('system.hidden_field'),
            'mailgun_encryption'             => 'nullable|in:ssl,tls,'.config('system.hidden_field'),
            'config_type'                    => 'required',
            'token_lifetime'                 => 'sometimes|integer|min:10',
            'sms_gateway'                    => 'sometimes|required|in:nexmo,twilio,custom',
            'nexmo_api_key'                  => 'sometimes|nullable|required_if:sms_gateway,nexmo',
            'nexmo_api_secret'               => 'sometimes|nullable|required_if:sms_gateway,nexmo',
            'nexmo_sender_mobile'            => 'sometimes|nullable|required_if:sms_gateway,nexmo',
            'nexmo_receiver_mobile'          => 'sometimes|nullable|required_if:sms_gateway,nexmo',
            'twilio_sid'                     => 'sometimes|nullable|required_if:sms_gateway,twilio',
            'twilio_token'                   => 'sometimes|nullable|required_if:sms_gateway,twilio',
            'twilio_sender_mobile'           => 'sometimes|nullable|required_if:sms_gateway,twilio',
            'twilio_receiver_mobile'         => 'sometimes|nullable|required_if:sms_gateway,twilio',
            'custom_sms_api_get_url'         => 'sometimes|nullable|required_if:sms_gateway,custom|url',
            'custom_sms_api_sender_id_param' => 'sometimes|nullable|required_if:sms_gateway,custom',
            'custom_sms_api_sender_id'       => 'sometimes|nullable|required_if:sms_gateway,custom',
            'custom_sms_api_receiver_param'  => 'sometimes|nullable|required_if:sms_gateway,custom',
            'custom_sms_api_message_param'   => 'sometimes|nullable|required_if:sms_gateway,custom',
            'reset_password_token_lifetime'  => 'sometimes|integer|min:5|max:300',
            'library_max_book_issue_to_student'   => 'sometimes|integer|min:0',
            'library_max_book_issue_to_employee'  => 'sometimes|integer|min:0',
            'library_return_due_day_for_student'  => 'sometimes|integer|min:0',
            'library_return_due_day_for_employee' => 'sometimes|integer|min:0',
            'library_late_fee_charge_student'     => 'sometimes|integer|min:0',
            'library_late_fee_charge_employee'    => 'sometimes|integer|min:0',
            'employee_code_prefix'                => 'sometimes|max:5',
            'employee_code_digit'                 => 'sometimes|integer|min:1',
            'student_late_attendance_time' => 'sometimes|integer|min:1',
            'facebook_link'    => 'sometimes|url',
            'twitter_link'     => 'sometimes|url',
            'linkedin_link'    => 'sometimes|url',
            'google_plus_link' => 'sometimes|url',
            'youtube_link'     => 'sometimes|url',
            'user_defined_per_day_salary_calculation_basis' => 'nullable|required_if:per_day_salary_calculation_basis,user_defined|min:1|numeric'
        ];

        if ($this->lock_screen) {
            $rule['lock_screen_timeout'] = 'required|integer|min:1|max:120';
        }

        if ($this->login_throttle) {
            $rule['login_throttle_attempt'] = 'required|integer|min:1|max:10';
            $rule['login_throttle_timeout'] = 'required|integer|min:1|max:300';
        }

        if ($this->allow_to_modify_student_attendance) {
            $rule['days_allowed_to_modify_student_attendance'] = 'required|integer|min:1';
        }

        if ($this->allow_to_mark_student_advance_attendance) {
            $rule['days_allowed_to_mark_student_advance_attendance'] = 'required|integer|min:1';
        }

        if ($this->paypal) {
            $rule['paypal_client_id'] = 'required';
            $rule['paypal_client_secret'] = 'required';

            if ($this->paypal_charge_handling_fee) {
                $rule['paypal_handling_fee'] = 'required|numeric|min:0';
            }
        }

        if ($this->stripe) {
            $rule['stripe_publishable_key'] = 'required';
            $rule['stripe_private_key'] = 'required';

            if ($this->stripe_charge_handling_fee) {
                $rule['stripe_handling_fee'] = 'required|numeric|min:0';
            }
        }

        if ($this->razorpay) {
            $rule['razorpay_key'] = 'required';
            $rule['razorpay_secret'] = 'required';

            if ($this->stripe_charge_handling_fee) {
                $rule['razorpay_charge_handling_fee'] = 'required|numeric|min:0';
            }
        }

        if ($this->payumoney) {
            $rule['payumoney_key'] = 'required';
            $rule['payumoney_salt'] = 'required';

            if ($this->payumoney_charge_handling_fee) {
                $rule['payumoney_handling_fee'] = 'required|numeric|min:0';
            }
        }

        return $rule;
    }

    /**
     * Translate fields with user friendly name.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'institute_name'                 => trans('configuration.institute_name'),
            'address_line_1'                 => trans('configuration.address_line_1'),
            'city'                           => trans('configuration.city'),
            'state'                          => trans('configuration.state'),
            'email'                          => trans('configuration.email'),
            'driver'                         => trans('configuration.mail_driver'),
            'from_name'                      => trans('configuration.mail_from_name'),
            'from_address'                   => trans('configuration.mail_from_address'),
            'smtp_host'                      => trans('configuration.smtp_host'),
            'smtp_port'                      => trans('configuration.smtp_port'),
            'smtp_username'                  => trans('configuration.smtp_username'),
            'smtp_password'                  => trans('configuration.smtp_password'),
            'mailgun_host'                   => trans('configuration.mailgun_host'),
            'mailgun_port'                   => trans('configuration.mailgun_port'),
            'mailgun_username'               => trans('configuration.mailgun_username'),
            'mailgun_password'               => trans('configuration.mailgun_password'),
            'mailgun_domain'                 => trans('configuration.mailgun_domain'),
            'mailgun_secret'                 => trans('configuration.mailgun_secret'),
            'mandrill_secret'                => trans('configuration.mandrill_secret'),
            'smtp_encryption'                => trans('configuration.smtp_encryption'),
            'mailgun_encryption'             => trans('configuration.mailgun_encryption'),
            'token_lifetime'                 => trans('auth.token_lifetime'),
            'sms_gateway'                    => trans('configuration.sms_gateway'),
            'nexmo_api_key'                  => trans('configuration.nexmo_api_key'),
            'nexmo_api_secret'               => trans('configuration.nexmo_api_secret'),
            'nexmo_sender_mobile'            => trans('configuration.sender_mobile'),
            'nexmo_receiver_mobile'          => trans('configuration.receiver_mobile'),
            'twilio_sid'                     => trans('configuration.twilio_sid'),
            'twilio_token'                   => trans('configuration.twilio_token'),
            'twilio_sender_mobile'           => trans('configuration.sender_mobile'),
            'twilio_receiver_mobile'         => trans('configuration.receiver_mobile'),
            'custom_sms_api_get_url'         => trans('configuration.custom_sms_api_get_url'),
            'custom_sms_api_sender_id_param' => trans('configuration.custom_sms_api_sender_id_param'),
            'custom_sms_api_sender_id'       => trans('configuration.custom_sms_api_sender_id'),
            'custom_sms_api_receiver_param'  => trans('configuration.custom_sms_api_receiver_param'),
            'custom_sms_api_message_param'   => trans('configuration.custom_sms_api_message_param'),
            'lock_screen_timeout'           => trans('auth.lock_screen_timeout'),
            'login_throttle_attempt'        => trans('auth.login_throttle_attempt'),
            'login_throttle_timeout'        => trans('auth.login_throttle_timeout'),
            'reset_password_token_lifetime' => trans('auth.reset_password_token_lifetime'),
            'library_max_book_issue_to_student'   => trans('library.library_max_book_issue_to_student'),
            'library_max_book_issue_to_employee'  => trans('library.library_max_book_issue_to_employee'),
            'library_return_due_day_for_student'  => trans('library.library_return_due_day_for_student'),
            'library_return_due_day_for_employee' => trans('library.library_return_due_day_for_employee'),
            'library_late_fee_charge_student'     => trans('library.library_late_fee_charge_student'),
            'library_late_fee_charge_employee'    => trans('library.library_late_fee_charge_employee'),
            'employee_code_prefix'                => trans('employee.employee_code_prefix'),
            'employee_code_digit'                 => trans('employee.employee_code_digit'),
            'days_allowed_to_modify_student_attendance'       => trans('student.days_allowed_to_modify_student_attendance'),
            'days_allowed_to_mark_student_advance_attendance' => trans('student.days_allowed_to_mark_student_advance_attendance'),
            'facebook_link'    => trans('configuration.social_network_link', ["name" => "Facebook"]),
            'twitter_link'     => trans('configuration.social_network_link', ["name" => "Twitter"]),
            'linkedin_link'    => trans('configuration.social_network_link', ["name" => "LinkedIn"]),
            'google_plus_link' => trans('configuration.social_network_link', ["name" => "Google Plus"]),
            'youtube_link'     => trans('configuration.social_network_link', ["name" => "Youtube"]),
            'user_defined_per_day_salary_calculation_basis' => trans('employee.user_defined_per_day_salary_calculation_basis')
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
            'smtp_host.required_if'              => trans('validation.required', ['attribute' => trans('configuration.smtp_host')]),
            'smtp_port.required_if'              => trans('validation.required', ['attribute' => trans('configuration.smtp_port')]),
            'smtp_username.required_if'          => trans('validation.required', ['attribute' => trans('configuration.smtp_username')]),
            'smtp_password.required_if'          => trans('validation.required', ['attribute' => trans('configuration.smtp_password')]),
            'mailgun_host.required_if'           => trans('validation.required', ['attribute' => trans('configuration.mailgun_host')]),
            'mailgun_port.required_if'           => trans('validation.required', ['attribute' => trans('configuration.mailgun_port')]),
            'mailgun_username.required_if'       => trans('validation.required', ['attribute' => trans('configuration.mailgun_username')]),
            'mailgun_password.required_if'       => trans('validation.required', ['attribute' => trans('configuration.mailgun_password')]),
            'mailgun_domain.required_if'         => trans('validation.required', ['attribute' => trans('configuration.mailgun_domain')]),
            'mailgun_secret.required_if'         => trans('validation.required', ['attribute' => trans('configuration.mailgun_secret')]),
            'mandrill_secret.required_if'        => trans('validation.required', ['attribute' => trans('configuration.mandrill_secret')]),
            'lock_screen_timeout.required_if'    => trans('validation.required', ['attribute' => trans('auth.lock_screen_timeout')]),
            'login_throttle_timeout.required_if' => trans('validation.required', ['attribute' => trans('auth.login_throttle_timeout')]),
            'days_allowed_to_modify_student_attendance.required_if' => trans('validation.required', ['attribute' => trans('student.days_allowed_to_modify_student_attendance')]),
            'days_allowed_to_mark_student_advance_attendance.required_if' => trans('validation.required', ['attribute' => trans('student.days_allowed_to_mark_student_advance_attendance')]),
            'nexmo_api_key.required_if'                  => trans('validation.required', ['attribute' => trans('configuration.nexmo_api_key')]),
            'nexmo_api_secret.required_if'               => trans('validation.required', ['attribute' => trans('configuration.nexmo_api_secret')]),
            'nexmo_sender_mobile.required_if'            => trans('validation.required', ['attribute' => trans('configuration.nexmo_sender_mobile')]),
            'nexmo_receiver_mobile.required_if'          => trans('validation.required', ['attribute' => trans('configuration.nexmo_receiver_mobile')]),
            'twilio_sid.required_if'                     => trans('validation.required', ['attribute' => trans('configuration.twilio_sid')]),
            'twilio_token.required_if'                   => trans('validation.required', ['attribute' => trans('configuration.twilio_token')]),
            'twilio_sender_mobile.required_if'           => trans('validation.required', ['attribute' => trans('configuration.twilio_sender_mobile')]),
            'twilio_receiver_mobile.required_if'         => trans('validation.required', ['attribute' => trans('configuration.twilio_receiver_mobile')]),
            'custom_sms_api_get_url.required_if'         => trans('validation.required', ['attribute' => trans('configuration.custom_sms_api_get_url')]),
            'custom_sms_api_sender_id_param.required_if' => trans('validation.required', ['attribute' => trans('configuration.custom_sms_api_sender_id_param')]),
            'custom_sms_api_sender_id.required_if'       => trans('validation.required', ['attribute' => trans('configuration.custom_sms_api_sender_id')]),
            'custom_sms_api_receiver_param.required_if'  => trans('validation.required', ['attribute' => trans('configuration.custom_sms_api_receiver_param')]),
            'custom_sms_api_message_param.required_if'   => trans('validation.required', ['attribute' => trans('configuration.custom_sms_api_message_param')]),
            'user_defined_per_day_salary_calculation_basis' => trans('validation.required', ['attribute' => trans('employee.user_defined_per_day_salary_calculation_basis')])
        ];
    }
}
