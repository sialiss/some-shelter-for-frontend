<script setup lang="ts">
import { computed, effect, onMounted, onUnmounted, ref } from "vue"
import { pets } from "../pets/pets"
import PetCard from "./PetCard.vue"

const perPage = ref(3)

const petsPage = ref(0)
const displayedPets = computed(() =>
	pets.slice(
		petsPage.value * perPage.value,
		petsPage.value * perPage.value + perPage.value
	)
)

function setPage(page: number) {
	const end = Math.ceil((pets.length - perPage.value) / perPage.value);
	const prevButtons = document.querySelectorAll(".prev");
	const nextButtons = document.querySelectorAll(".next");

	petsPage.value = Math.min(
		Math.max(page, 0),
		end
	)
	prevButtons.forEach(btn => btn.toggleAttribute("disabled", petsPage.value === 0));
	nextButtons.forEach(btn => btn.toggleAttribute("disabled", petsPage.value === end));
}

const onResize = ref(() => {
	if (window.innerWidth <= 768) {
		perPage.value = 1
	} else if (window.innerWidth <= 1280) {
		perPage.value = 2
	} else {
		perPage.value = 3
	}
})

onMounted(() => {
	window.addEventListener("resize", onResize.value)
	onResize.value()
})

onUnmounted(() => {
	window.removeEventListener("resize", onResize.value)
})
</script>

<template>
	<div
		class="slider | fix-width | flex align-center just-center gap-xl pad-l"
	>
		<button
			v-if="perPage > 1"
			class="button-arrow prev" disabled
			@click="setPage(petsPage - 1)"
		>
			<img src="../assets/icons/left-arrow.svg" alt="назад" />
		</button>
		<PetCard v-for="pet in displayedPets" :key="pet.id" :pet="pet" />
		<button
			v-if="perPage > 1"
			class="button-arrow next"
			@click="setPage(petsPage + 1)"
		>
			<img
				src="../assets/icons/left-arrow.svg"
				class="right-arrow"
				alt="вперед"
			/>
		</button>
		<div v-if="perPage == 1" class="flex equal">
			<button class="button-arrow prev" @click="setPage(petsPage - 1)" disabled>
				<img src="../assets/icons/left-arrow.svg" alt="назад" />
			</button>
			<button class="button-arrow next" @click="setPage(petsPage + 1)">
				<img
					src="../assets/icons/left-arrow.svg"
					class="right-arrow"
					alt="вперед"
				/>
			</button>
		</div>
	</div>
</template>

<style scoped>
.right-arrow {
	rotate: 180deg;
}

@media screen and (max-width: 768px) {
	.slider {
		flex-direction: column;
		gap: var(--pad-m);
	}
}
</style>
