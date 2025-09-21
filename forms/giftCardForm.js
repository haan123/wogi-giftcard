import { required, requiredIf } from "@vue-formily/rules"
import { withMessage } from "./helpers"

export const personalDeliverySchema = {
  formId: 'personalDelivery',
  formType: 'group',
  fields: [
    {
      formId: 'recipientEmail',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Recipient email',
        placeholder: 'Enter recipient email',
        inputType: 'email',
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'personal'
      }))],
    },
    {
      formId: 'recipientPhone',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Recipient phone',
        placeholder: 'Enter recipient phone',
        inputType: 'phone',
        prefix: '+65'
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'personal'
      }))],
    },
  ]
}

export const giftDeliverySchema = {
  formId: 'giftDelivery',
  formType: 'group',
  fields: [
    {
      formId: 'senderName',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Sender name',
        placeholder: 'Enter sender name',
        inputType: 'email',
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'gift'
      }))],
    },
    {
      formId: 'recipientName',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Recipient name',
        placeholder: 'Enter recipient name',
        inputType: 'email',
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'gift'
      }))],
    },
    {
      formId: 'recipientEmail',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Recipient email',
        placeholder: 'Enter recipient email',
        inputType: 'email',
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'gift'
      }))],
    },
    {
      formId: 'recipientPhone',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Recipient phone',
        placeholder: 'Enter recipient phone',
        inputType: 'phone',
        prefix: '+65'
      },
      rules: [withMessage(requiredIf((value, props, field) => {
        return field.parent.parent.$deliveryType.raw === 'gift'
      }))],
    },
  ]
}

export const customDeliveryTimeSchema = {
  formId: 'customDeliveryTime',
  formType: 'group',
  fields: [
    {
      formId: 'deliveryDate',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Delivery date',
        placeholder: 'Select delivery date',
        inputType: 'date',
      },
    },
    {
      formId: 'period',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Period',
        inputType: 'tag-group',
        options: [
          {
            label: "Morning",
            value: 'morning',
          },
          {
            label: "Afternoon",
            value: 'afternoon',
          },
          {
            label: "Evening",
            value: 'evening',
          },
        ]
      },
      rules: [
      ]
    },
  ]
}

export const loginFormSchema = {
  formId: 'giftCard',
  fields: [
    {
      formId: 'amount',
      formType: 'field',
      type: 'number',
      props: {
        label: 'Select gift amount',
        inputType: 'tag-group',
        options: [
          {
            label: "$10",
            value: 10,
          },
          {
            label: "$20",
            value: 20,
          },
          {
            label: "$30",
            value: 30,
          },
          {
            label: "$40",
            value: 40,
          },
        ]
      }
    },
    {
      formId: 'deliveryType',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Delivery type',
        inputType: 'radio-group',
        options: [
          {
            label: 'Personal',
            value: 'personal'
          },
          {
            label: 'Send as gift',
            value: 'gift'
          }
        ]
      }
    },
    personalDeliverySchema,
    giftDeliverySchema,
    {
      formId: 'deliveryTime',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Delivery time',
        inputType: 'radio-group',
        options: [
          {
            label: 'Immediately',
            value: 'immediately'
          },
          {
            label: 'Custom',
            value: 'custom'
          }
        ]
      },
    },
    customDeliveryTimeSchema,
    {
      formId: 'giftMessage',
      formType: 'field',
      type: 'string',
      props: {
        label: 'Gift message',
        placeholder: 'Enter gift message',
        inputType: 'textarea',
        rows: 8
      },
      rules: [withMessage(required)],
    },
  ]
}
