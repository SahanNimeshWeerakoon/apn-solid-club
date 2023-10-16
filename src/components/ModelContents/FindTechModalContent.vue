<template>
    <div class="modal-content">
        <Job v-for="job in jobList" :job="job" :key="job.id" @click="handleJobClick" />
    </div>
</template>
<script>
import Job from "./Job";

export default {
    name: "FindTechModalContent",
    props: { type: String },
    data: function() {
        return {
            jobList: [
                { id: 1, name: "Job 1", description: "Job 1 description" },
                { id: 2, name: "Job 2", description: "Job 2 description" },
                { id: 3, name: "Job 3", description: "Job 3 description" },
                { id: 4, name: "Job 4", description: "Job 4 description" }
            ]
        }
    },
    components: {
        Job
    },
    methods: {
        handleJobClick: function(e) {
            this.$emit('modalClose', e);
        }
    }
}
</script>
<style lang="scss">
</style>