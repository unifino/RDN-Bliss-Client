<template>
    <div id="flexBox_Home">
        <Header />
        <WelcomePanel style="flex: 1" />
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue }                 from 'vue-class-component';
import Header                           from '@/components/Header.vue';
import WelcomePanel                     from '@/components/wps/WelcomePanel.vue';

// -- =====================================================================================

@Options( {
    components: {
        Header, WelcomePanel
    }
} )

export default class Home extends Vue {
}

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #flexBox_Home {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

</style>

// -- =====================================================================================
