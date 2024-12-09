<template>
    <div class='pt-5 flex flex-column align-items-center'>
        <div class='mb-4'>
            <h1>{{ title }}</h1>
        </div>
        <div class=''>
            <ButtonGroup class=''>
                <PrimeButton @click='kc.login()' class='mx-3' type='button' label='Anmelden' icon='pi pi-user'
                    severity='primary' size='large' variant='text' raised />
                <PrimeButton type='button' label='Neu hier? Registrieren!' icon='pi pi-user-plus' severity='secondary'
                    size='large' variant='text' raised />
            </ButtonGroup>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import kc from '@/composables/auth/kc';
import axios from 'axios';

const title = ref<string>('Willkommen bei RapidToGo!');
const token = ref<string | undefined>('');

token.value = kc.getToken();

if (token.value == undefined) {
    kc.login();
}

console.log(token.value);

const getRestaurants = async (token: string | undefined) => {
    console.log(token);
    try {
        const response = await axios.get('http://localhost:5000/api/v1/partners/restaurants', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error('Failed to get restaurants:', error);
    }
};

const restaurantDto = {
    "name": "My Burger Location",
    "openingHours": {
        "MONDAY": "09:00-23:00",
        "TUESDAY": "09:00-23:00",
        "WEDNESDAY": "09:00-23:00",
        "THURSDAY": "09:00-23:00",
        "FRIDAY": "09:00-23:00",
        "SATURDAY": "09:00-23:00",
        "SUNDAY": "09:00-23:00"
    },
    "pickUp": true,
    "delivery": false,
    "category": ["AMERICAN", "MEXICAN"],
    "minimalOrder": 9.99,
    "address": {
        "street": "Neue Straße",
        "houseNumber": "11",
        "city": "Berlin",
        "zipCode": "12345",
        "countryISOCode": "DE"
    },
    "description": "Please visit our new location in Berlin."
};

const createRestaurant = async (token: string | undefined) => {
    if (!token) {
        console.error('Token is missing');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/v1/partners/restaurants', restaurantDto, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
        console.log(response.data);
        getRestaurants(token);
    } catch (error) {
        console.error('Failed to create restaurant:', error);
    }
};

createRestaurant(token.value);

</script>

<style scoped></style>