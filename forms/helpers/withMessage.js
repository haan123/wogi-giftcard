export function withMessage(rule, props = {}) {
  return {
    ...rule,
    message(field) {
      return `* Please enter ${field.props.label || field.formId}`
    },
  }
}
