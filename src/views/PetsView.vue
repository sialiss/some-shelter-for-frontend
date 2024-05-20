<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"

import { computed, ref, onMounted, onUnmounted } from "vue"
import { pets } from "../pets/pets"
import PetCard from "../components/PetCard.vue"

const perPage = ref(8)

const onResize = ref(() => {
	if (window.innerWidth <= 768) {
		perPage.value = 3
	} else if (window.innerWidth <= 1280) {
		perPage.value = 6
	} else {
		perPage.value = 8
	}
})

const petsPage = ref(0)
const displayedPets = computed(() =>
	pets.slice(petsPage.value * perPage.value, petsPage.value * perPage.value + perPage.value)
)

function setPage(page: number) {
	petsPage.value = Math.min(
		Math.max(page, 0),
		Math.ceil((pets.length - perPage.value) / perPage.value)
	)
}

onMounted(() => {
	window.addEventListener("resize", onResize.value)
	onResize.value()
})

onUnmounted(() => {
	window.removeEventListener("resize", onResize.value)
})
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
			<div class="circle">
				{{ petsPage + 1 }}
			</div>
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

.circle {
	line-height: 2;
	min-width: 40px;
	height: 40px;
	text-align: center;
	background-color: var(--color-primary-light);
	border-radius: 50%;
}

@media screen and (max-width: 1280px) {
	.grid {
	grid-template-columns: 1fr 1fr;
	}
}

@media screen and (max-width: 768px) {
	.grid {
		grid-template-columns: 1fr;
	}
}
</style>
