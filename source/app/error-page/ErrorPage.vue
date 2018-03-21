<template src="./error-page.template.html"></template>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({})
    export default class ErrorPage extends Vue {
        title = 'Error during loading page.';

    }
</script>
<style scoped lang="scss" src="./error-page.scss"></style>
