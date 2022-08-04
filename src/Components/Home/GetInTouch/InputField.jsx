import React, { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form';
import { RULES } from '../../../utils/RULES';

const InputField = props => {
    const {
        register,
        formState: { errors },
        clearErrors,
      } = useFormContext();

    const {className, label, id} = props
    return (
        <div className={className}>
            <label className={`${errors?.[`${id}`] && 'warrning'}`}>{label}</label>
            <input
            required
            {...register(`${id}`, {
                ...RULES[`${id}`],
                onChange: () => clearErrors("SubmitError"),
            })}
            />
        </div>
    )
}

export default InputField;