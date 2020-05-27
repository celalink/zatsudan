<template>
  <div>
    <v-btn icon color="blue"
        @click="windowOpen(facebookShareLink)"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: process.env.VUE_APP_SITE_NAME
    }
  },
  data() {
    return {
      url: (process.env.VUE_APP_BASE_URL),
      hashtag: process.env.VUE_APP_SITE_NAME,
      facebookLink: 'https://www.facebook.com/sharer.php?u={0}&t={1}'
    }
  },
  computed: {
    facebookShareLink() {
      return this.formatByArr(this.facebookLink, this.url, this.facebookText )
    },
    facebookText() {
        return "【みんなに聞いてみよう！】" + this.pageTitle
    }
  },
  methods: {
    formatByArr(msg) {
      let args = []
      for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      args = args.map(x => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, (m, k) => {
        return args[k]
      })
    },
    windowOpen(link) {
      return window.open(link, '_blank', 'top=100,left=100,width=600,height=500')
    }
  }
}
</script>