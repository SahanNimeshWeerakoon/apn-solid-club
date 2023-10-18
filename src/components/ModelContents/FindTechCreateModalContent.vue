<template>
    <div class="modal-content">
        <div class="createJob">
            <div class="createJob_form">
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" v-model="findTech.formData.startingDate" id="floatingStartingDate" placeholder="Starting Date">
                    <label for="floatingStartingDate">Starting Date</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="findTech.formData.expectedBudget" id="floatingExpectedBudget" placeholder="Expected Budget">
                    <label for="floatingExpectedBudget">Expected Budget</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="findTech.formData.notes" id="floatingNotes" placeholder="Notes">
                    <label for="floatingNotes">Notes</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="findTech.formData.address" id="floatingAddress" placeholder="Address">
                    <label for="floatingAddress">Address</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-control" v-model="findTech.formData.district" id="floatingDistrict" placeholder="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label for="floatingDistrict">District</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-control" v-model="findTech.formData.city" id="floatingCity" placeholder="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <label for="floatingCity">City</label>
                </div>
            </div>
            <div class="createJob_map">
                <LeafMap />
            </div>
        </div>
        <Button :btnClasses="{ 'button--tinyRadius': true }" @click="handleNextClick">Next</Button>
    </div>
</template>
<script>
import Button from "../Button.vue";
import LeafMap from "../LeafMap.vue";

export default {
    name: "FindTechCreateModalContent",
    props: { type: String },
    components: {
        Button,
        LeafMap
    },
    data: function() {
        return {
            findTech: {
                formData: {
                    startingDate: new Date(),
                    expectedBudget: "",
                    notes: "",
                    address: "",
                    district: 1,
                    city: 1
                }
            }
        }
    },
    methods: {
        handleNextClick: function(e) {
            this.$emit('modalClose', e);
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal-content {
        .createJob {
            @include flex(space-between);
            >div {
                width: 50%;
            }
        }
        button {
            margin-right: 0;
            margin-left: auto;
            color: $secondary-color;
        }
    }
</style>