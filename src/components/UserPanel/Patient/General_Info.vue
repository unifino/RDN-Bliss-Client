<template>  
    <div id="part_x" class="ppp" ref="part_x">
        
        <div 
            v-for="(x,i) in Genders"
            :key="i" 
            @click="setGender(x.type)"
            :class="x.type.toLowerCase() + ' gender ' + ( x.selected ? '' : 'grayscale')" 
        />

        <div id="infoWrapper">

            <input ref="firstname" type="text" placeholder="First Name" required @focusout="setName" />
            <input ref="lastname" type="text" placeholder="Last Name" required @focusout="setName" />
            
            <div id="birthday">
                <select v-model="selectedYear" @change="updateDays" :class="'date' + (selectedYear === 'Year' ? '' : ' set')" >
                    <option 
                        v-for="year in years" :key="year"
                        :value="year"
                        :selected="year === 'Year' ? true : false"
                        :disabled="year === 'Year' ? true : false"
                    >
                        {{ year }}
                    </option>
                </select>
                <select v-model="selectedMonth" @change="updateDays" :class="'date' + (selectedMonth === 'Month' ? '' : ' set')" >
                    <option 
                        v-for="month in months" :key="month.value" 
                        :value="month.value"
                        :selected="month.name === 'Month' ? true : false"
                        :disabled="month.name === 'Month' ? true : false"
                    >
                        {{ month.name }}
                    </option>
                </select>
                <select v-model="selectedDay" @change="setDateString" :class="'date' + (selectedDay === 'Day' ? '' : ' set')" >
                    <option 
                        v-for="day in days" :key="day" :value="day"
                        :selected="day === 'Day' ? true : false"
                        :disabled="day === 'Day' ? true : false"
                    >
                        {{ day }}
                    </option>
                </select>
            </div>
            
            <select 
                v-model="selectedMS" 
                :class="'field' + (selectedMS === CTS.MS.Title ? '' : ' set')" 
                @change="setMS" 
            >
                <option 
                    v-for="(s) in CTS.MS" :key="s"
                    :value="s"
                    :selected="s === CTS.MS.Title ? true : false"
                    :disabled="s === CTS.MS.Title ? true : false"
                >
                    {{ s }}
                </option>
            </select>

            <select 
                v-model="selectedEducation" 
                :class="'field' + (selectedEducation === CTS.Education.Title ? '' : ' set')" 
                @change="setEducation" 
            >
                <option 
                    v-for="(s) in CTS.Education" :key="s"
                    :value="s"
                    :selected="s === CTS.Education.Title ? true : false"
                    :disabled="s === CTS.Education.Title ? true : false"
                >
                    {{ s }}
                </option>
            </select>

            <select 
                v-model="selectedOccupation" 
                :class="'field' + (selectedOccupation === CTS.Occupation.Title ? '' : ' set')" 
                @change="setOccupation" 
            >
                <option 
                    v-for="(s) in CTS.Occupation" :key="s"
                    :value="s"
                    :selected="s === CTS.Occupation.Title ? true : false"
                    :disabled="s === CTS.Occupation.Title ? true : false"
                >
                    {{ s }}
                </option>
            </select>

        </div>

    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref,onMounted }                    from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as CTS                             from "@/types/common";
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const i = 0
    const part_x = ref<HTMLElement>( {} as HTMLElement )

    const Genders = ref ( [
        { type: CTS.Gender.male, selected: false },
        { type: CTS.Gender.female, selected: false }
    ] )

    let selectedGender = Genders.value.find( x => x.selected )
    const firstname = ref<HTMLInputElement>( {} as HTMLInputElement )
    const lastname = ref<HTMLInputElement>( {} as HTMLInputElement )
    const selectedMS = ref<CTS.MS>("Martial Status" as CTS.MS)
    const selectedEducation = ref<CTS.Education>("Educational Level" as CTS.Education)
    const selectedOccupation = ref<CTS.Occupation>("Occupation" as CTS.Occupation)

// -- =====================================================================================

    onMounted( () => {
        populateYears()
        updateDays()
    } )

// -- =====================================================================================

    const setGender = ( gender?: CTS.Gender ) => {

        if ( gender ) Genders.value.filter( x => x.type === gender )[0].selected = true

        const picked = Genders.value.filter( x => x.selected )
        if ( picked.length ) {
            selectedGender = picked[0]
            store.commit( TS.Mutates._np_Gender, selectedGender.type )
        }
    
    }

    const setName = () => {
        store.commit( TS.Mutates._np_FirstName, firstname.value.value )
        store.commit( TS.Mutates._np_LastName, lastname.value.value )
    }

    const setDateString = () => {
        if ( 
            selectedDay.value && selectedMonth.value && selectedYear.value && 
            selectedDay.value !== "Day" && selectedMonth.value !== "Month" && selectedYear.value !== "Year"
        ) {
            const date = new Date(
                Number( selectedYear.value ),
                Number( selectedMonth.value ) -1,
                Number( selectedDay.value ) +1
            )
            // Format as YYYY-MM-DD
            store.commit( TS.Mutates._np_BirthDay, date.toISOString().split('T')[0] )
        }
    }

    const setMS = () => {
        if ( selectedMS.value && selectedMS.value !== CTS.MS.Title )
            store.commit( TS.Mutates._np_MS, selectedMS.value )
    }

    const setEducation = () => {
        if ( selectedEducation.value && selectedEducation.value !== CTS.Education.Title )
            store.commit( TS.Mutates._np_Education, selectedEducation.value )
    }

    const setOccupation = () => {
        if ( selectedOccupation.value && selectedOccupation.value !== CTS.Occupation.Title )
            store.commit( TS.Mutates._np_Occupation, selectedOccupation.value )
    }

// -- =====================================================================================

    const selectedYear = ref("Year")
    const selectedMonth = ref("Month")
    const selectedDay = ref("Day")

    const months = [
        { name: "Month", value: "Month" },
        { name: "January", value: "1" },
        { name: "February", value: "2" },
        { name: "March", value: "3" },
        { name: "April", value: "4" },
        { name: "May", value: "5" },
        { name: "June", value: "6" },
        { name: "July", value: "7" },
        { name: "August", value: "8" },
        { name: "September", value: "9" },
        { name: "October", value: "10" },
        { name: "November", value: "11" },
        { name: "December", value: "12" }
    ]
    const days = ref<string[]>(["Day"])
    const years = ref<string[]>(["Year"])

    const populateYears = () => {
        const currentYear = new Date().getFullYear()
        for ( let y = currentYear; y >= currentYear - 100; y-- ) years.value.push( y+"" )
        setDateString()
    }

    const updateDays = () => {
        
        days.value = [ "Day" ]
        const month = selectedMonth.value
        const year = selectedYear.value

        if ( month && year ) {
            let daysInMonth = 31
            if ( month === "2" )
                daysInMonth = (Number(year) % 4 === 0 && (Number(year) % 100 !== 0 || Number(year) % 400 === 0)) ? 29 : 28
            else if ( ["4", "6", "9", "11"].includes(month) )
                daysInMonth = 30

            for ( let day = 1; day <= daysInMonth; day++) days.value.push(day+"")

            if ( selectedDay.value && Number(selectedDay.value) > daysInMonth ) selectedDay.value = ""

        }

        setDateString()
    
    }

// -- =====================================================================================

    const myData = () => {

        // ! alert???
        
        setGender()
        setName()
        setDateString()
        setMS()
        setEducation()
        setOccupation()
    }

    const myReset = () => {
        
        Genders.value.forEach( x => x.selected = false )
        firstname.value.value = ""
        lastname.value.value = ""
        selectedYear.value = "Year"
        selectedMonth.value = "Month"
        selectedDay.value = "Day"
        selectedMS.value = "Martial Status" as CTS.MS
        selectedEducation.value = "Educational Level" as CTS.Education
        selectedOccupation.value = "Occupation" as CTS.Occupation

        // .. apply reset data in store
        store.commit( TS.Mutates._np_Gender, undefined )
        store.commit( TS.Mutates._np_FirstName, undefined )
        store.commit( TS.Mutates._np_LastName, undefined )
        store.commit( TS.Mutates._np_BirthDay, undefined )
        store.commit( TS.Mutates._np_MS, undefined )
        store.commit( TS.Mutates._np_Education, undefined )
        store.commit( TS.Mutates._np_Occupation, undefined )

    }

// -- =====================================================================================
    
    store.watch(
        getters => getters.ppp,
        ( nV, oV ) => Tools.pppAnime( oV, nV, i, part_x )
    )

    store.watch(
        getters => getters.Flag_resetForm,
        () => myReset()
    )

    store.watch(
        getters => getters.Flag_savePatient,
        () => myData()
    )

// -- =====================================================================================

</script>


// -- =====================================================================================

<style scoped>

    .gender{
        width: 120px;
        height: 120px;
        background-size: 94% auto;
        background-repeat: no-repeat;
        background-position-x: right;
        float: left;
        margin: 80px 0 0 35px;
        cursor: pointer;
        border-bottom-width: 3px;
        border-bottom-style: solid;

    }
    .male{ background-image: url('@/assets/Pics/Avatars/ai-generated-1.png') }
    .female{ background-image: url('@/assets/Pics/Avatars/ai-generated-2.png') }
    .male { border-bottom-color: #67c3dcd5 }
    .female { border-bottom-color: #e77fc1d5 }
    .grayscale{
        border-bottom-width: 0;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
    .gender:hover{
        -webkit-filter: none;
        filter: none;
    }

    #birthday{
        display: flex;
        justify-content: space-between;
        width: calc( 100% + 2px);
        margin: 10px 0;
    }
    .date, .field{
        background-color: #F0F0F0;
        font-family: Oswald;
        font-size: 17px;
        font-weight: bold;
        color: #62717c;
        height: 45px;
        width: auto;
        border-radius: 7px;
        border: solid gray 1px;
        box-shadow: 0 0 1px 0px #58585b;
        padding: 0 10px;
        margin: 0;
    }
    .field{
        width: 100%;        
        padding: 0 20px;
        margin: 10px 0;
    }
    .set, input:valid{
        background-color: #a8d976;
        color: #35393c;
    }


    #infoWrapper{
        height: auto;
        width: 250px;
        margin-top: 90px;
        margin-right: 90px;
        position: relative;
        float: right;
    }

</style>

// -- =====================================================================================
