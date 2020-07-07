<template>
  <div>
    <v-btn icon color="cyan"
      @click="windowOpen(twitterShareLink)"
    >
      <v-icon>mdi-twitter</v-icon>
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
      twitter: process.env.VUE_APP_TWITTER_ACCOUNT,
      hashtag: process.env.VUE_APP_SITE_NAME,
      twitterLink: 'https://twitter.com/intent/tweet?url={0}&text={1}&hashtags={2}&lang=ja'
    };
  },
  computed: {
    twitterShareLink() {
      // link, url{0}, text{1}, hashtags{2}
      return this.formatByArr(this.twitterLink, this.url, this.twitterText, this.hashtag);
    },
    twitterText() {
      return "【みんなに聞いてみよう！】" + this.pageTitle;
    }
  },
  methods: {
    formatByArr(msg) {
      let args = [];
      for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, (m, k) => {
        return args[k];
      });
    },
    windowOpen(link) {
      return window.open(link, '_blank', 'top=100,left=100,width=600,height=500');
    }
  }
};
</script>