<template>
    <div class="tab-details">
        <div>
            <div class="msg" v-if="!vitals">
                <small>No Recent Vitals</small>
            </div>
            <div class="vital-info" v-else>
                <div>Last Checked</div>
                <div class="vital">
                    <div class="icon pointer">
                        <i class="pi pi-ellipsis-v"></i>
                    </div>

                    <div class="d-flex justify-content-start align-items-center mb-2 gap-10">
                        <div class="item">Date:</div>
                        <div class="value">{{ new Date(vitals?.createdAt).toDateString() }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">Temperature</div>
                        <div class="value">{{ vitals?.temperature  }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">Height</div>
                        <div class="value">{{ vitals?.height }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">Weight</div>
                        <div class="value">{{ vitals?.weight  }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">Blood Pressure</div>
                        <div class="value">{{ vitals?.bloodPressure  }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">Pulse rate</div>
                        <div class="value">{{ vitals?.pulseRate  }}</div>
                    </div>
                    <div class="d-flex justify-content-start align-items-center mb-2">
                        <div class="item">BMI</div>
                        <div class="value">{{ vitals?.bmi  }}</div>
                    </div>
                </div>
            </div>
            <div>
                <button class="btn colored-text" @click="$emit('showModal')">Add New Vitals +</button>
            </div>

            <div class="center-element" v-if="!vitals">
                <i class="pi pi-search mb-4" style="font-size: 7rem; color: #ccc"></i>
                <h4 class="text-secondary">No Recent Vitals</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['vitals'],
    data(){
        return {
            vital: {

            }
        }
    }
}
</script>

<style scoped>
    .tab-details {
        background-color: #f0f0f0;
        min-height: 400px;
        border-radius: 10px;
        padding: 2rem;
    }

    .btn {
        padding: 0;
    }

    .btn:hover {
        text-decoration: underline;
    }

    .msg {
        margin-bottom: 20px;
        font-weight: 500;
    }

    .vital-info > div:first-child {
        margin-bottom: 15px;
        font-weight: 500;
        font-size: 14px;
        font-weight: 600;
    }

    .vital {
        width: 250px;
        min-height: 200px;
        background-color: #fff;
        margin-bottom: 25px;
        border-radius: 5px;
        position: relative;
        padding: 20px 10px;
        font-size: 14px
    }

    .vital .item {
        font-weight: 700;
        margin-right: 10px;
    }

    .vital .value {
        font-weight: 500;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: 10px;
    }
</style>