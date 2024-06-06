<template>
    <div id="header_icons_box">
        <div v-for="(opt,i) of options" :key=i class="optionBox">
            <div class="icon">{{opt.icon}}</div>
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

    name: "Header_Icons",

// -- =====================================================================================

    components: {},

// -- =====================================================================================

    setup() {

        const panel = ref<HTMLElement>();
        const options =  ref ( [{ title: "", icon: "" }] );

        options.value = [
            { title: "Home", icon: "", },
            { title: "Our Goals", icon: "", },
            { title: "News" , icon: "", },
            { title: "FAQs" , icon: "?", },
            { title: "About Us", icon: "", },
            // { title: "Language" , icon: "", },
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
        width: 550px;
        margin-top: 35px;
        margin-left: 44px;
        border-right: dashed 2px gray;

    }

    .optionBox{
        text-align: center;
        color: #29363a;
        height: 80px;
        width: 100px;
        position: relative;
        float: left;
    }

    .icon{
        font-family: "fas-6";
        font-size: 45px;
        margin: 14px;
    }

    .title{
        font-family: Manrope;
        opacity: 0.2;
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
