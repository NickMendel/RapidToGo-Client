<template>
    <h1>{{ title }}</h1>
    <div v-if="city == ''" class='pt-5 flex flex-column align-items-center gap-3'>
        <InputText type='text' v-model='citySearch' placeholder='Wo möchtest du essen?' />
        <PrimeButton v-if="citySearch != ''" @click='searchCity' type='button' label='Suchen' icon='pi pi-search'
            severity='primary' size='large' variant='text' raised />
    </div>

    <div v-else>

        <div class="grid">
            <div class="col-6 col-offset-3">
                <div class="text-center p-3 border-round-sm bg-primary font-bold">
                    <div class='flex align-items-center justify-content-center gap-2'>
                        <div class='flex align-items-center justify-content-center'>
                            <h1>Hier sind die Locations in </h1>
                        </div>
                        <div class='flex align-items-center justify-content-center'>
                            <h1>{{ city }}</h1>
                        </div>
                        <div class='flex align-items-center justify-content-center'>
                            <PrimeButton @click='changeCity' type='button' icon='pi pi-pencil'
                                v-tooltip.right="{ value: 'Location änern' }" severity='primary' size='small'
                                variant='outlined' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid">
            <div class="col-4">
                <div class="text-center p-3 border-round-sm bg-primary font-bold">
                    <div v-for="category in categories" :key="category.key" class="flex items-center gap-2">
                        <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic"
                            :value="category.name" />
                        <label :for="category.key">{{ category.name }}</label>
                    </div>
                </div>
            </div>

            <div class="col-4 col-offset-1">

                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const citySearch = ref<string>('');
const city = ref<string>('Berlin');
const title = ref<string>('RapidToGo - Schnell und Lecker!');
const categories = ref<Array<{ key: string, name: string }>>([
    { key: '1', name: 'Pizza' },
    { key: '2', name: 'Burger' },
    { key: '3', name: 'Sushi' },
    { key: '4', name: 'Fisch' },
    { key: '5', name: 'Nudeln' },
]);
const selectedCategory = ref<string>('Pizza');

const products = ref([
    {
        name: 'Pizza Margherita',
        image: 'pizzamargherita.png',
        category: 'Pizza',
        inventoryStatus: 'INSTOCK',
        price: 12.99
    },
    {
        name: 'Pizza Salami',
        image: 'pizzasalami.png',
        category: 'Pizza',
        inventoryStatus: 'INSTOCK',
        price: 12.99
    },
    {
        name: 'Pizza Pepperoni',
        image: 'pizzapepperoni.png',
        category: 'Pizza',
        inventoryStatus: 'INSTOCK',
        price: 12.99
    },
    {
        name: 'Pizza Hamburger',
        image: 'pizzahamburger.png',
        category: 'Pizza',
        inventoryStatus: 'INSTOCK',
        price: 12.99
    }]);

const sortOptions = ref([
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' }
]);

const sortKey = ref<string>('');
const sortOrder = ref<string>('');
const sortField = ref<string>('');

const onSortChange = (event: any) => {
    const value = event.value;
    if (value.indexOf('!') === 0) {
        sortOrder.value = 'asc';
        sortField.value = value.substring(1, value.length);
    } else {
        sortOrder.value = 'desc';
        sortField.value = value;
    }
}

const isLoading = ref<boolean>(false);
const error = ref<boolean>(false);
const errorMessage = ref<string>('');

const searchCity = () => {
    city.value = citySearch.value;
    citySearch.value = '';
}

const changeCity = () => {
    city.value = '';
}



</script>

<style scoped></style>