import React, { useState } from 'react'

export const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return [values, handleChange]
}