<template>
  <div class="c-gift-card px-2 pb-10">
    <h1 class="mt-10 mb-16">Issue gift card</h1>

    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-5/12 bg-white rounded-lg shadow">
        <div class="c-gift-card__img">
          <img
            v-if="gift.img && gift.img.src"
            :src="gift.img.src"
            :alt="gift.img.alt"
          />
        </div>

        <GiftCardMeta :item="gift" />

        <div class="px-6 pb-4 border-t border-gray-200">
          <div v-for="prop in metaProps" :key="prop.value" class="mt-4">
            <span class="text-gray-500">{{ prop.label }}</span>

            <p class="mt-1">{{ gift[prop.value] }}</p>
          </div>
        </div>

        <div class="p-6 border-t border-gray-200">
          <h5 class="text-lg text-gray-500">Keywords</h5>

          <div class="flex flex-wrap gap-2 mt-4">
            <CTag v-for="i in visibleKeywordsCount" :key="i" size="sm">{{ gift.keywords[i - 1] }}</CTag>
            <CTag
              v-if="visibleKeywordsCount !== gift.keywords.length"
              class="cursor-pointer inline-flex items-center gap-1"
              color="soft-primary"
              size="sm"
              @click="onShowMoreKeywords"
            >
              {{ `+ ${gift.keywords.length - visibleKeywordsCount}` }}

              <CIcon name="ArrowDown" class="w-5" />
            </CTag>
          </div>
        </div>

        <div class="p-6 border-t border-gray-200 flex justify-between">
          <NuxtLink v-for="(link, i) in gift.links" :key="i" :to="link.url" target="_blank">
            <CIcon
              :name="getLinkIcon(link.type)" class="w-8 text-gray-500"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="w-full bg-white rounded-lg shadow p-6">
        <h2>Gift information</h2>

        <CFormGroup :group="form" class="mt-10">
          <template #[`${form.$amount.htmlName}`]="{ field }">
            <GiftCardAmountSelection :field="field" />
          </template>
          <template #[`${form.$personalDelivery.htmlName}`]="{ field }">
            <CFormGroup v-if="form.$deliveryType.value === 'personal'" :group="field" class="grid grid-cols-2 gap-4" />
          </template>
          <template #[`${form.$giftDelivery.htmlName}`]="{ field }">
            <CFormGroup v-if="form.$deliveryType.value === 'gift'" :group="field" class="grid grid-cols-2 gap-4" />
          </template>
          <template #[`${form.$customDeliveryTime.htmlName}`]="{ field }">
            <CFormGroup v-if="form.$deliveryTime.value === 'custom'" :group="field" class="grid grid-cols-2 gap-4" />
          </template>
        </CFormGroup>

        <div class="flex justify-end">
          <button class="bg-blue-500 rounded text-white px-4 py-3 text-lg" @click="onSend">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginFormSchema } from '@/forms/giftCardForm';
import data from '~/db/data';

const LINK_ICONS = {
  web: 'IosGlobe',
  facebook: 'LogoFacebook',
  instagram: 'LogoInstagram',
  twitter: 'LogoTwitter',
}

export default {
  name: 'GiftCardPage',
  layout: 'MainLayout',
  data() {
    return {
      form: {},
      gift: {},
      visibleKeywordsCount: 4,
      metaProps: [
        { label: 'Id', value: 'id' },
        { label: 'Company', value: 'company' },
        { label: 'Category', value: 'category' },
        { label: 'Phone', value: 'phone' }
      ]
    }
  },
  created() {
    this.form = this.$formily.addForm(loginFormSchema);

    this.gift = data.find(({ id }) => String(id) === this.$route.params.id)
  },
  methods: {
    onShowMoreKeywords() {
      this.visibleKeywordsCount = this.gift.keywords.length;
    },
    getLinkIcon(type) {
      return LINK_ICONS[type]
    },
    async onSend() {
      await this.form.validate()

      this.form.shake()

      console.log('Form valid: ', this.form.valid)
      console.log('Amount: ', this.form.$amount.value)
      console.log('Delivery type: ', this.form.$deliveryType.value)
      console.log('Personal Delivery: ', this.form.$personalDelivery.value)
      console.log('Gift Delivery: ', this.form.$giftDelivery.value)
      console.log('Delivery time: ', this.form.$deliveryTime.value)
      console.log('Custom Delivery Time: ', this.form.$customDeliveryTime.value)
      console.log('Gift message: ', this.form.$giftMessage.value)
    }
  }
}
</script>

<style lang="scss">
.c-form-field {
  margin-top: 16px;
}
// .c-form--personalDelivery,
// .c-form--giftDelivery {
//    display: flex;
// }
</style>
