import React from 'react'
import { ErrorMessage, useField } from 'formik'

function TextField({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
            />
            <ErrorMessage name={field.name} component="div" className="error"/>
        </div>
    )
}

export default TextField
