<template>
  <div
    v-if="group"
    :id="`form-${group.formId}`"
    class="c-form"
    :class="[
      group.props.class,
      group.props.layout && `l-${group.props.layout}`,
      `c-form--${modifier || group.formId}`
    ]"
  >
    <h4
      v-if="group.props.heading"
      class="w-full mb-6 text-lg font-semibold c-form__heading"
    >
      {{ group.props.heading }}
    </h4>

    <slot>
      <template v-for="field in group.fields">
        <!-- custom slot -->
        <slot
          v-if="$scopedSlots[field.htmlName]"
          :name="field.htmlName"
          v-bind="{ field, modifier }"
        />
        <!-- nested group -->
        <CForm
          v-else-if="field.formType === 'group'"
          :key="field.formId"
          :group="field"
          :modifier="field.formId"
          @touched="onTouched"
        />
        <!-- normal field -->
        <CFormField
          v-else-if="!isHiddenField(field)"
          :key="field.formId"
          :field="field"
          :modifier="field.formId"
          :status="field.props && field.props.status"
          :message="field.props && field.props.message"
        />
      </template>
    </slot>
  </div>
</template>

<script>
import CFormField from "./CFormField.vue"

function isHiddenField(field) {
  return field.props.inputType === "hidden"
}

export default {
  name: "CForm",
  components: { CFormField },
  props: {
    modifier: {
      type: String,
      default: ''
    },
    group: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      isTouched: false
    }
  },
  created() {
    // listen group events
    this.group
      .on("changed", (...args) => {
        this.$emit("changed", ...args)
      })
      .on("fieldChanged", this.onTouched)
  },
  methods: {
    isHiddenField,
    onTouched() {
      if (!this.isTouched) {
        this.isTouched = true

        this.$emit("touched")
      }
    }
  }
}
</script>
