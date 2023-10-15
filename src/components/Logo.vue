<template>
    <div class="logo">
        <img src="../assets/img/logo.png" alt="solid club logo" title="solid club logos" :style="{ width: imgWidth }" />
        <span class="nav_logoTitle" :style="{ fontWeight, fontSize, color }">Solid Club</span>
    </div>
</template>
<script>
export default {
    name: "Logo",
    props: {
        imgWidth: { type: String },
        fontSize: { type: String },
        fontWeight: { type: Number },
        color: { type: String, default: "#02234b" }
    }
}
</script>
<style lang="scss">
    .logo {
    }
</style>