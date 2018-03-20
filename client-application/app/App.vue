<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {router} from "./router";

    @Component({router: router})
    export default class App extends Vue {
        title = 'Test';
    }
</script>
<template src="./app.template.html"></template>
<style lang="scss" src="./app.scss"></style>
