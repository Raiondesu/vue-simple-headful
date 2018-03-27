<template>
  <tabs>
    <div>
      <div class="markdown-body">
        <h1>Example</h1>
        <p>This example demostrates the reactive changes of a page's title.</p>
        <p>The imitation of a browser title above shows how your current headful title is reactively bound to a browser's title by being updated at the same time.</p>
        <p>The update is fired 5 seconds from the page load (refresh if needed).</p>
        <br>
        <p>Also, you can open the console and update the title with <code>changeTitle</code> function.</p>
        <br>
        <hr>
        <br>
      </div>
      <div class="markdown-body" v-html="md" v-once></div>
    </div>
  </tabs>
</template>

<script>
  import Tabs from 'components/tabs'

  export default {
    components: {
      Tabs
    },
    created() {
      this.md = require('html-loader!markdown-loader!../../../README.md')
    }
  }
</script>
