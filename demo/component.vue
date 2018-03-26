<template>
    <div>
        <!-- <vue-headful v-bind="headful"/> -->
    </div>
</template>

<script>
export default {
    headful: (vm) => ({
        title: vm.title,
        description: "vue-headful description",
        keywords: "example, head, javascript",
        image: "http://example.com/preview.png",
        lang: vm.lang,
        ogLocale: "en-GB",
        url: "http://localhost:4000/",
        html: {
            body: {id: 'aPageId', 'data-remove-me': undefined},
            h1: {'data-foo': 'bar'},
        },
        head: {
            'meta[charset]': {charset: 'utf-8'},
        },
    }),
    data() {
        return {
            title: 'vue-headful title',
            lang: 'en-US',
            description: 'desc'
        };
    },
    mounted() {
        setTimeout(() => {
            // dummy async operation to show watcher on properties
            this.headful.title = 'vue-headful title (updated)';
            this.headful.lang = 'de-DE';
            console.log(this.headful)
        }, 5000);
    },
};
</script>
