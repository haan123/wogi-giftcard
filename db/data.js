import AmazonLogo from '@/assets/images/Amazon-Logo.png'
import EspritLogo from '@/assets/images/Esprit_logo_PNG3.png'
import GrabLogo from '@/assets/images/Grab_Logo_PNG2.png'
import KasperskyLogo from '@/assets/images/Kaspersky_logo_PNG1.png'
import LazadaLogo from '@/assets/images/Lazada-Logo-PNG-2.png'
import SubwayLogo from '@/assets/images/Subway_logo_PNG1.png'

import { GIFT_CARD_STATUS } from '~/constants'

export default Array.from({ length: 10 }).reduce((acc) => {
  return acc.concat([
    {
      img: {
        src: AmazonLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: EspritLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.INACTIVE,
      country: 'Singapore',
      products: 300,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: GrabLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: KasperskyLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet',
      status: GIFT_CARD_STATUS.INACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: LazadaLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: SubwayLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: AmazonLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.INACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: EspritLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: GrabLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: KasperskyLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: LazadaLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
    {
      img: {
        src: SubwayLogo,
        alt: 'Lorem ipsum dolor',
      },
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et, voluptatem placeat a id iste autem est labore maiores ea perferendis molestias harum, aperiam eveniet suscipit animi minus perspiciatis itaque.',
      status: GIFT_CARD_STATUS.ACTIVE,
      country: 'Singapore',
      products: 250,
      company: 'XYZ Limited',
      category: 'Other Gifts',
      phone: '+123 4455 6677 8899',
      keywords: ['grab', 'grab gift', 'grab voucher', 'promo code', 'grab', 'grab gift', 'grab voucher', 'promo code'],
      links: [
        { type: 'web', url: 'http://abc.com' },
        { type: 'facebook', url: 'http://abc.com' },
        { type: 'instagram', url: 'http://abc.com' },
        { type: 'twitter', url: 'http://abc.com' },
      ]
    },
  ])
}, []).map((item, i) => {
  return {
    ...item,
    id: i
  }
})
