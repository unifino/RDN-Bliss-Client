<template>
    <div id="N_100_Box" class="init" ref="n_100">
        <div class="column" v-for="(x,y) of [0,1,2]" :key="y">
            <div 
                v-for="(n,i) of data.filter( (t,i) => i%3 === x )"
                :key="i" 
                :class="'newsBox ' + n.boxClass"
            >
                <div><img :src="n.img" :class="'img ' + n.imgClass.o" /></div>
                <div class="title" >{{ n.title }}</div>
            </div>
        </div>
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import { ref }                              from 'vue'
import * as Tools                           from '@/mixins/Tools'

const store: TS.Store = useStore()

// -- =====================================================================================

    const n_100 = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.MainAnimation( n_100, "X010", "Out" );
    const _in = () => Tools.MainAnimation( n_100, "X010", "In", Tools.speed() );

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => {
            if( oV === TS.Orts.News ) _out()
            if( nV === TS.Orts.News ) _in()
        }
    )

    store.watch(
        getters => getters.Flag_logged_in,
        // .. Bye Bye
        ( nV: boolean, oV: boolean ) => { 
            if( oV && store.getters.ort === TS.Orts.News ) { _out(); _in() } 
        }
    )

// -- =====================================================================================

    const data = ref<{ 
        title: string, 
        img: string, 
        boxClass: "large"|"medium"|"small",
        imgClass: { 
            o: "H"|"W", 
        },
    }[]>( [] )

    data.value = [
    { 
            title: "Juicy burgers, foolproof potato salad, easy brownies and more recipes for a festive Independence Day",
            img: "https://static01.nyt.com/images/2024/06/27/multimedia/Lemon-Potato-Salad-With-Mintrex-qtvk/Lemon-Potato-Salad-With-Mintrex-qtvk-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp",
            boxClass: "large",
            imgClass: { o: "H" }
        },
        { 
            title: "Lemon Potato Salad With Mint",
            img: "https://static01.nyt.com/images/2024/06/25/multimedia/ya-berry-cakerex-bmkp/ya-berry-cakerex-bmkp-threeByTwoMediumAt2X-v6.jpg?width=1280&quality=75&auto=webp",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Getting rid of poison ivy is a serious matter. What you should and shouldn’t do",
            img: "https://dims.apnews.com/dims4/default/d5fd010/2147483647/strip/true/crop/4020x2676+3+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F52%2F36%2Fae1db6157ed27969cd16b9d420c3%2F41c95176b4694872948a51e25daa4ffe",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Shirley Temple",
            img: "https://static01.nyt.com/images/2022/05/11/dining/05shirleyrex2/merlin_206153163_cbceb4e8-7148-4dc4-8e4a-36ac946afac3-master768.jpg?width=1280&quality=75&auto=webp",
            boxClass: "small",
            imgClass: { o: "W" }
        },
        { 
            title: "Lettuces With Fresh Herbs and Cheese",
            img: "https://static01.nyt.com/images/2024/05/28/dining/02EATrex-green-salad-pctv/02EATrex-green-salad-pctv-articleLarge.jpg?width=1280&quality=75&auto=webp",
            boxClass: "small",
            imgClass: { o: "W" }
        },
        { 
            title: "Who will have the 2024 song of the summer? We offer some predictions",
            img: "https://dims.apnews.com/dims4/default/e6d8880/2147483647/strip/true/crop/1917x1278+2+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2F89%2F3999c7cdbf4f78f5273a4f972b9e%2Fec64bd0b526a4cad8b2e30231ceb8ca9",
            boxClass: "large",
            imgClass: { o: "H" }
        },
        { 
            title: "Looking for love online isn’t easy. Many daters say the apps have them feeling burnt out",
            img: "https://dims.apnews.com/dims4/default/021776d/2147483647/strip/true/crop/900x600+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fed%2F07%2F28fa66154bc09d464ba920b932ed%2Fonemustread-template.png",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Philippine villagers smear mud on their bodies to show devotion to St. John the Baptist",
            img: "https://dims.apnews.com/dims4/default/7672b91/2147483647/strip/true/crop/3872x2580+0+1/resize/800x533!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F78%2F75a25868d316ecee52152be1f30c%2Fdf0f548bcea24c8db0689e58a6d1044b",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Juicy burgers, foolproof potato salad, easy brownies and more recipes for a festive Independence Day",
            img: "https://static01.nyt.com/images/2024/06/27/multimedia/Lemon-Potato-Salad-With-Mintrex-qtvk/Lemon-Potato-Salad-With-Mintrex-qtvk-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp",
            boxClass: "large",
            imgClass: { o: "H" }
        },
        { 
            title: "Lemon Potato Salad With Mint",
            img: "https://static01.nyt.com/images/2024/06/25/multimedia/ya-berry-cakerex-bmkp/ya-berry-cakerex-bmkp-threeByTwoMediumAt2X-v6.jpg?width=1280&quality=75&auto=webp",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Getting rid of poison ivy is a serious matter. What you should and shouldn’t do",
            img: "https://dims.apnews.com/dims4/default/d5fd010/2147483647/strip/true/crop/4020x2676+3+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F52%2F36%2Fae1db6157ed27969cd16b9d420c3%2F41c95176b4694872948a51e25daa4ffe",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Shirley Temple",
            img: "https://static01.nyt.com/images/2022/05/11/dining/05shirleyrex2/merlin_206153163_cbceb4e8-7148-4dc4-8e4a-36ac946afac3-master768.jpg?width=1280&quality=75&auto=webp",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
        { 
            title: "Lettuces With Fresh Herbs and Cheese",
            img: "https://static01.nyt.com/images/2024/05/28/dining/02EATrex-green-salad-pctv/02EATrex-green-salad-pctv-articleLarge.jpg?width=1280&quality=75&auto=webp",
            boxClass: "large",
            imgClass: { o: "H" }
        },
        { 
            title: "Who will have the 2024 song of the summer? We offer some predictions",
            img: "https://dims.apnews.com/dims4/default/e6d8880/2147483647/strip/true/crop/1917x1278+2+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2F89%2F3999c7cdbf4f78f5273a4f972b9e%2Fec64bd0b526a4cad8b2e30231ceb8ca9",
            boxClass: "small",
            imgClass: { o: "W" }
        },
        { 
            title: "Looking for love online isn’t easy. Many daters say the apps have them feeling burnt out",
            img: "https://dims.apnews.com/dims4/default/021776d/2147483647/strip/true/crop/900x600+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fed%2F07%2F28fa66154bc09d464ba920b932ed%2Fonemustread-template.png",
            boxClass: "small",
            imgClass: { o: "W" }
        },
        { 
            title: "Philippine villagers smear mud on their bodies to show devotion to St. John the Baptist",
            img: "https://dims.apnews.com/dims4/default/7672b91/2147483647/strip/true/crop/3872x2580+0+1/resize/800x533!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F78%2F75a25868d316ecee52152be1f30c%2Fdf0f548bcea24c8db0689e58a6d1044b",
            boxClass: "medium",
            imgClass: { o: "W" }
        },
    ]

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #N_100_Box.init{
        transform: translate(0px, 1000px) scale(0.2);
        opacity: 1;
    }

    .column {
        width: 20vw;
        height: auto;
        position: relative;
        margin: .5vw;
        padding-bottom: 120px;
        float: left;
    }

    .newsBox{
        background-color: #074f1a;
        width: 20vw;
        position: relative;
        margin-bottom: .9vw;
        border-radius: 16px;
        overflow: hidden;
    }

    .small { height: 12vw }
    .medium{ height: 16vw }
    .large { height: 30vw }

    .title{
        bottom: 0;
        background-color: #074f1a;
        color: #d0ddeb;
        width: 90%;
        padding: 5% 5% 8% 5%;
        position: absolute;
        font-size: 23px;
        font-weight: bold;
        font-family: Thasadith;
    }

    .img{
        position: absolute
    }

    .H{ height: 80%; width: auto }
    .W{ height: auto; width: 100% }


</style>

// -- =====================================================================================
