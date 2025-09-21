<template>
  <div
    class="c-text-field border border-gray-300 rounded flex"
    :class="[
      internalField.props.inputClass,
      internalField.props.prefix && 'pl-'
    ]"
  >
    <span v-if="internalField.props.prefix" class="px-3 border-r border-gray-300 flex items-center">{{ internalField.props.prefix }}</span>

    <input
      v-bind="getInputProps(internalField.props)"
      v-model="internalField.raw"
      :name="internalField.htmlName"
      :type="internalField.props.inputType"
      class="px-3 py-2 w-full"
    />
  </div>
</template>

<script>
import input from '~/mixins/input';

export default {
  name: "CTextField",
  mixins: [input],
}
</script>
