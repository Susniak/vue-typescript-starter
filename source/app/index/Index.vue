<template src="./index.template.html"></template>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({})
    export default class Index extends Vue {
        title = 'Index page';
    }
</script>
<style scoped lang="scss" src="./index.scss"></style>
