<template src="./app.template.html"></template>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {router} from "../router";
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);

    @Component({router: router})
    export default class App extends Vue {
        mixins = [VueRouter];
        title: string;

        constructor() {
            super(router);
            this.title = 'Vue.2 Application with Typescript';
        }
    }
</script>
<style lang="scss" src="./app.scss"></style>
