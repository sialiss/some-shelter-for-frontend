<script setup lang="ts">
import type { Pet } from "../pets/pets"

const { pet } = defineProps({
	pet: {
		type: Object,
		default() {
			return {
				id: 0,
				name: "Unknown animal",
				image: "",
				bio: "Unknown"
			} as Pet
		}
	}
})
</script>

<template>
	<div class="card">
		<img :src="pet.image" class="card-image" />
		<div class="card-body">
			<p>{{ pet.name }}</p>
			<button class="button-secondary">Learn more</button>
		</div>
	</div>
</template>
