<template>
  <CFormField :field="internalField">
    <CTagGroup
      v-bind="getInputProps(internalField.props)"
      v-model="internalField.raw"
      class="w-full"
      :options="internalField.props.options"
    >
      <template #append>
        <CTag :value="isCustom" color="outline" class="cursor-pointer" @click="onClick">Custom</CTag>
      </template>
    </CTagGroup>

    <div class="grid md:grid-cols-2 gap-4">
      <CTextField v-if="isCustom" :field="customAmountField" class="mt-4" />
    </div>
  </CFormField>
</template>

<script>
import { Field } from '@vue-formily/formily';
import input from '~/mixins/input';

export default {
  name: "GiftCardAmountSelection",
  mixins: [input],
  data() {
    return {
      isCustom: false,
      customAmountField: new Field({
        formId: 'customAmount',
        formType: 'field',
        type: 'number',
        props: {
          inputType: 'number',
          prefix: '$'
        },
        on: {
          changed: () => {
            this.internalField.setRaw(this.customAmountField.raw)
          }
        }
      })
    }
  },
  computed: {
  },
  methods:{
    onClick() {
      this.isCustom = true
      this.internalField.value = ''
    }
  }
}
</script>
