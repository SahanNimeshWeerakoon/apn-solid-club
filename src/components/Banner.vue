<template>
<div class="container mt-5 mb-3">
    <div class="banner">
        <h1 class="banner_title">Fixing, Building, and More.</h1>
        <h3 class="banner_subtitle mt-2 mb-5">All in One Place.</h3>
        <div class="banner_btn">
            <Button :btnClasses="{'button--lg': true}">Register as Technician</Button>
            <Button :btnClasses="{'button--lg': true}">Find a Technician</Button>
        </div>
    </div>
</div>
</template>
<script>
import Button from "./Button";

export default {
    name: "banner",
    components: {
        Button
    }
}
</script>
<style lang="scss">
.banner {
    width: 50%;
    h1 {
        font-weight: 900;
        font-size: 3.25rem;
    }
    &_btn {
        width: 90%;
        @include flex(space-between);
    }
}
</style>