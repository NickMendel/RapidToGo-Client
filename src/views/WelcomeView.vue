<template>
    <div class='pt-5 flex flex-column align-items-center'>
        <div class='mb-4'>
            <h1>{{ title }}</h1>
        </div>
        <div class=''>
            <ButtonGroup class=''>
                <PrimeButton class='mx-3' type='button' label='Anmelden' icon='pi pi-user' severity='primary'
                    size='large' variant='text' raised />
                <PrimeButton type='button' label='Neu hier? Registrieren!' icon='pi pi-user-plus' severity='secondary'
                    size='large' variant='text' raised />
            </ButtonGroup>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';


const title = ref<string>('Willkommen bei RapidToGo!');

</script>

<style scoped></style>