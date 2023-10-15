<template>
    <div class="modal-content">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="register.formData.fullName" id="floatingFullName" placeholder="Your Name">
            <label for="floatingFullName">Full Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="register.formData.mobile" id="floatingMobileNumber" placeholder="+94711234567">
            <label for="floatingMobileNumber">Mobile No.</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="register.formData.address" id="floatingAddress" placeholder="Your Address">
            <label for="floatingAddress">Address</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-control" v-model="register.formData.district" id="floatingDistrict" placeholder="1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label for="floatingDistrict">District</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="register.formData.city" id="floatingCity" placeholder="1">
            <label for="floatingCity">City</label>
        </div>
        
        <Button :btnClasses="{'button--full': true }" @click="handleSubmit">Register</Button>
    </div>
</template>
<script>
import Button from "../Button";

export default {
    name: "FindTechModalContent",
    props: { type: String },
    data: function() {
        return {
            register: {
                showPassword: false,
                passwordInputType: "password",
                formData: {
                    fullName: "full name",
                    mobile: "mobile",
                    address: "address",
                    district: 1,
                    city: 1
                }
            }
        }
    },
    components: {
        Button
    },
    methods: {
        handleSubmit: function(type) {
            this.$emit('modalClose', { formData: this.register.formData });
        }
    }
}
</script>
<style lang="scss">
</style>