<template>
  <div class="chrome-tabs">
    <div class="chrome-tabs-content">
      <div class="chrome-tab chrome-tab-current">
        <div class="chrome-tab-background">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="topleft" viewBox="0 0 214 29" ><path d="M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z"/></symbol><symbol id="topright" viewBox="0 0 214 29"><use xlink:href="#topleft"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="50%" height="100%" transfrom="scale(-1, 1)"><use xlink:href="#topleft" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#topleft" width="214" height="29" class="chrome-tab-shadow"/></svg><g transform="scale(-1, 1)"><svg width="50%" height="100%" x="-100%" y="0"><use xlink:href="#topright" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#topright" width="214" height="29" class="chrome-tab-shadow"/></svg></g></svg>
        </div>
        <div class="chrome-tab-favicon" style="background-image: url('https://avatars2.githubusercontent.com/u/19854420?s=40&v=4')"></div>


        <!-- HEADFUL title on a pretend-to-be example browser tab -->
        <div class="chrome-tab-title">
          {{ headful.title }}
        </div>
        <!-- It will reflect changes to your browser's own tab title -->


        <div class="chrome-tab-close" @click="reload"></div>
      </div>
      <div class="chrome-tab" v-if="showGithub">
        <div class="chrome-tab-background">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="topleft" viewBox="0 0 214 29" ><path d="M14.3 0.1L214 0.1 214 29 0 29C0 29 12.2 2.6 13.2 1.1 14.3-0.4 14.3 0.1 14.3 0.1Z"/></symbol><symbol id="topright" viewBox="0 0 214 29"><use xlink:href="#topleft"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="50%" height="100%" transfrom="scale(-1, 1)"><use xlink:href="#topleft" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#topleft" width="214" height="29" class="chrome-tab-shadow"/></svg><g transform="scale(-1, 1)"><svg width="50%" height="100%" x="-100%" y="0"><use xlink:href="#topright" width="214" height="29" class="chrome-tab-background"/><use xlink:href="#topright" width="214" height="29" class="chrome-tab-shadow"/></svg></g></svg>
        </div>
        <div class="chrome-tab-favicon" style="background-image: url('https://assets-cdn.github.com/favicon.ico')"></div>
        <div class="chrome-tab-title">Raiondesu/vue-simple-headful: A simpler vue-headful alternative</div>
        <div class="chrome-tab-close" @click="showGithub = false"></div>
        <a class="github" href="https://github.com/Raiondesu/vue-simple-headful" target="_blank"></a>
      </div>
    </div>
    <div class="chrome-content" v-once v-pre>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  headful: {
    title: 'vue-headful title demo',
    description: "vue-headful description",
    keywords: "example, head, javascript",
    lang: 'en-US',
    ogLocale: "en-GB",
    url: "http://localhost:5000/",
    html: {
      '#favicon': { href: 'https://avatars2.githubusercontent.com/u/19854420?s=40&v=4' },
      '#stylesheet-chrome': { href: 'assets/chrome.css' },
      '#stylesheet-md': { href: 'assets/md.css' },
      body: { id: 'aPageId', 'data-remove-me': undefined },
      h1: { 'data-foo': 'bar' },
    },
    head: {
      'meta[charset]': { charset: 'utf-8' },
    },
  },
  mounted() {
    const changeTitle = (title) => {
      this.headful.title = title || 'vue-headful (updated)';
      this.headful.lang = 'de-DE';
    }
    window.changeTitle = changeTitle;

    // dummy async operation to show watcher on properties
    setTimeout(changeTitle, 5000);
  },
  data() {
    return { showGithub: true }
  },
  methods: {
    reload() {
      location.reload()
    }
  }
};
</script>

<style>
.github {
  position: absolute;
	display: block;
	top: 0;
	height: 100%;
	width: 100%;
	cursor: pointer !important;
}

.chrome-tabs .chrome-tab {
  width: 243px
}
/* .chrome-tabs .chrome-tab:nth-child(1) {
  transform: translate3d(0px, 0, 0)
} */
.chrome-tabs .chrome-tab:nth-child(2) {
  transform: translate3d(229px, 0, 0)
}
</style>
