interface ValidationRule {
  required?: boolean
  min?: number
  max?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
}

interface ValidationRules {
  [key: string]: ValidationRule
}

export const useFormValidation = (rules: ValidationRules) => {
  const errors = ref<{ [key: string]: string }>({})

  const validate = (data: { [key: string]: any }) => {
    const newErrors: { [key: string]: string } = {}

    Object.entries(rules).forEach(([field, rule]) => {
      const value = data[field]

      if (rule.required && !value) {
        newErrors[field] = 'Trường này là bắt buộc'
      }

      if (rule.min !== undefined && value < rule.min) {
        newErrors[field] = `Giá trị tối thiểu là ${rule.min}`
      }

      if (rule.max !== undefined && value > rule.max) {
        newErrors[field] = `Giá trị tối đa là ${rule.max}`
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[field] = 'Giá trị không hợp lệ'
      }

      if (rule.custom) {
        const customResult = rule.custom(value)
        if (typeof customResult === 'string') {
          newErrors[field] = customResult
        } else if (!customResult) {
          newErrors[field] = 'Giá trị không hợp lệ'
        }
      }
    })

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  const clearErrors = () => {
    errors.value = {}
  }

  return {
    errors,
    validate,
    clearErrors
  }
} 