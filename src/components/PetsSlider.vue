<script setup lang="ts">
import { computed, ref } from "vue"
import { pets } from "../pets/pets"
import PetCard from "./PetCard.vue"

const perPage = 3

const petsPage = ref(0)
const displayedPets = computed(() =>
	pets.slice(petsPage.value * perPage, petsPage.value * perPage + perPage)
)

function setPage(page: number) {
	petsPage.value = Math.min(
		Math.max(page, 0),
		Math.ceil((pets.length - perPage) / perPage)
	)
}
</script>

<template>
	<div class="fix-width | flex align-center just-center gap-xl pad-l">
		<button class="button-arrow" @click="setPage(petsPage - 1)">
			<img src="../assets/icons/left-arrow.svg" alt="назад" />
		</button>
		<PetCard v-for="pet in displayedPets" :key="pet.id" :pet="pet" />
		<button class="button-arrow" @click="setPage(petsPage + 1)">
			<img
				src="../assets/icons/left-arrow.svg"
				class="right-arrow"
				alt="назад"
			/>
		</button>
	</div>
</template>

<style scoped>
.right-arrow {
	rotate: 180deg;
}
</style>
