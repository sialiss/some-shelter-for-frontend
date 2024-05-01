<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"

import { computed, ref } from "vue"
import { pets } from "../pets/pets"
import PetCard from "../components/PetCard.vue"

const perPage = 8

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
	<TheHeader />
	<main class="fix-width | stack align-center">
		<h2 class="pad-l">Познакомьтесь с нашими котопёсиками</h2>
		<div class="grid">
			<PetCard v-for="pet in displayedPets" :key="pet.id" :pet="pet" />
		</div>
		<div class="pagination | flex gap-l just-center align-center">
			<button class="button-arrow" @click="setPage(petsPage - 1)">
				<img src="../assets/icons/left-arrow.svg" alt="назад" />
			</button>
			{{ petsPage + 1 }}
			<button class="button-arrow" @click="setPage(petsPage + 1)">
				<img
					src="../assets/icons/left-arrow.svg"
					class="right-arrow"
					alt="назад"
				/>
			</button>
		</div>
	</main>
</template>

<style scoped>
main {
	padding-bottom: var(--pad-xl);
}

.grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: var(--pad-l);
}

.right-arrow {
	rotate: 180deg;
}

.pagination {
	margin-top: var(--pad-l);
}
</style>
