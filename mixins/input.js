import { omit } from "lodash"

function pick(obj, paths) {
	const found = Object.create(null)
	const rest = Object.create(null)

	for (const key in obj) {
		if (paths.some((path) => (path instanceof RegExp ? path.test(key) : path === key))) {
			found[key] = obj[key]
		} else {
			rest[key] = obj[key]
		}
	}

	return [found, rest]
}

export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    internalField() {
      return this.field
    },
  },
  methods: {
    getInputProps(props, omits = []) {
      const [, inputProps] = pick(props, ["class", "style", "id", "label", "inputType"])
      return omits.length ? omit(inputProps, omits) : inputProps
    }
  }
}
