<template>
    <div @click="$emit('click', job)" class="job mb-2">
        <small :id="`popover-${job.id}`">
            !
        </small>
        <b-popover
          :target="`popover-${job.id}`"
          placement="right"
          title=""
          triggers="hover focus"
          :content="job.description"
        ></b-popover>
        {{ job.name }}
    </div>
</template>
<script>
export default {
    name: "Job",
    props: {
        job: { type: Object }
    }
}
</script>
<style lang="scss">
    .job {
        background: $primary-color;
        color: $secondary-color;
        position: relative;
        font-size: 1.25rem;
        border-radius: 0.375rem;
        width: 75%;
        height: 5rem;
        margin: auto;
        @include flex();
        &:hover {
            cursor: pointer;
        }
        small {
            color: $primary-color;
            position: absolute;
            font-size: 1rem;
            font-weight: 900;
            background: $secondary-color;
            top: 0.25rem;
            right: 0.25rem;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            @include flex();
        }
    }
</style>