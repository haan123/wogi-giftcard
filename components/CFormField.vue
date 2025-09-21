<template>
  <div
    class="c-form-field"
    :class="[
      internalField.props.class,
      modifier && `c-form-field--${modifier}`,
      computedStatus && `c-form-field--${computedStatus}`,
    ]"
  >
    <div class="mb-2 inline-block w-full">
      <div>
        <label
          v-if="internalField.props.label"
          :for="computedId"
          class="font-semibold"
        >
          {{ internalField.props.label }}
        </label>
      </div>
    </div>

    <div class="c-form-field__input mb-1">
      <!-- slot override -->
      <slot v-if="$slots.default" />
      <!-- radio group -->
      <div
        v-else-if="internalField.props.inputType === 'radio-group'"
        class="c-radio-group w-full flex gap-3"
        :class="[internalField.props.inputClass]"
      >
        <CRadio
          v-for="option in internalField.props.options"
          :id="`${computedId}-${option.value}`"
          :key="option.value"
          v-model="internalField.raw"
          :class="[option.class]"
          :label="option.label"
          :name="internalField.htmlName"
          :checked-value="option.value"
          v-bind="getInputProps(internalField.props, ['options'])"
        />
      </div>

      <!-- tag group -->
      <CTagGroup
        v-else-if="internalField.props.inputType === 'tag-group'"
        v-model="internalField.raw"
        class="w-full"
        :class="[internalField.props.inputClass]"
        :options="internalField.props.options"
        v-bind="getInputProps(internalField.props)"
      />

      <!-- textarea -->
      <div
        v-else-if="internalField.props.inputType === 'textarea'"
        class="c-textarea-field"
        :class="[internalField.props.inputClass]"
      >
        <textarea
          v-bind="getInputProps(internalField.props)"
          :id="id"
          v-model="internalField.raw"
          :rows="internalField.props.rows"
          class="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <!-- default text -->
      <CTextField v-else :field="internalField" />
    </div>

    <!-- validation message -->
    <div :type="computedStatus" style="min-height: 16px">
      <slot v-if="$slots.message" name="message" />
      <template v-else-if="computedMessage">
        {{ computedMessage }}
      </template>
    </div>
  </div>
</template>

<script>
import input from '~/mixins/input'

function getValidationMessage(field, translate) {
  if (isInvalidatedField(field)) {
    if (field.error && field.validation.valid) {
      return field.error
    }
    const rules = field.validation.rules || []
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i]
      if (!rule.valid) {
        return rule.error || translate(`validation.${rule.name}`, field.props)
      }
    }
  }
  return ""
}

function isInvalidatedField(field) {
  return field.shaked && !field.valid
}

const STATUSES = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
}
let _uid = 0

export default {
  name: "CFormField",
  mixins: [input],
  props: {
    status: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    idPrefix: {
      type: String,
      default: "field-",
    },
    id: {
      type: String,
      default: ''
    },
    modifier: {
      type: String,
      default: ''
    },
  },
  computed: {
    computedId() {
      return this.id || this.internalField.props.id || `${this.idPrefix}-${_uid++}`
    },
    computedMessage() {
      return this.message || getValidationMessage(this.internalField, this.$t)
    },
    computedStatus() {
      if (this.status) return this.status
      return isInvalidatedField(this.internalField) ? STATUSES.error : ""
    },
  },
}
</script>

<style>
.c-form-field--error {
  .c-date-field, .c-text-field {
    input {
      @apply border-2 border-cError;
    }
  }
  .c-select-field {
    select {
      @apply border-2 border-cError;
    }
  }
}
</style>
