<template>
    <div id="header_icons_box">
        <div v-for="(opt,i) of options" :key=i class="optionBox">
            <div class="button">{{opt.icon}}</div>
            <div class="title">{{opt.title}}</div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { defineComponent, ref }             from 'vue';

// -- =====================================================================================

export default defineComponent ( {

// -- =====================================================================================

    name: "Header_Buttons",

// -- =====================================================================================

    components: {},

// -- =====================================================================================

    setup() {

        const panel = ref<HTMLElement>();
        const options =  ref ( [{ title: "", icon: "" }] );

        options.value = [
            { title: "Language" , icon: "", },
            // { title: "Theme", icon: "", },
        ]

        return { panel, options }

    }

// -- =====================================================================================

} )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #header_icons_box{
        height: 100px;
        width: 500px;
        margin-top: 35px;
    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 100px;
        position: relative;
        float: left;
    }

    .button{
        font-family: "fas-6";
        font-size: 35px;
        margin: 25px 20px 10px 20px;
        opacity: .7;
    }

    .title{
        font-family: Manrope;
        font-weight: bold;
        font-size: 12px;
        opacity: 0.4;
    }

    .optionBox:hover{
        color: #42152f;
        cursor: pointer;
    }

    .optionBox:hover> .title{
        font-weight: bold;
        opacity: 1;
    }

</style>

// -- =====================================================================================
