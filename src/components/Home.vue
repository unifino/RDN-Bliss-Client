<template>
    <div id="flexBox_Home">
        <Header />
        <Main style="flex: 1" />
    </div>
</template>

// -- =====================================================================================

<script lang="ts">

// -- =====================================================================================

import { Options, Vue }                 from 'vue-class-component';
import Header                           from '@/components/Header.vue';
import Main                             from '@/components/Main.vue';

// -- =====================================================================================

@Options( {
    components: {
        Header, Main
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
