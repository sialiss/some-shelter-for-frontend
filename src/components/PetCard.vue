<script setup lang="ts">
import { ref } from 'vue';
import type { Pet } from '../pets/pets';

const { pet } = defineProps({
	pet: {
		type: Object,
		default() {
			return {
				id: 0,
				name: 'Unknown animal',
				image: '',
				bio: 'Unknown'
			} as Pet
		}
	}
});

const isModalOpen = ref(false);
const openModal = () => { isModalOpen.value = true; };
const closeModal = () => { isModalOpen.value = false; };
</script>

<template>
	<div class="card">
		<img :src="pet.image" class="card-image" />
		<div class="card-body">
			<p>{{ pet.name }}</p>
			<button class="button-secondary" @click="openModal">Learn more</button>
		</div>
	</div>

	<div v-if="isModalOpen" class="modal-overlay pad-l" @click.self="closeModal">
		<div class="modal-content">
			<div class="flex">
				<img :src="pet.image" class="modal-image" />
				<div class="modal-body">
					<h2>{{ pet.name }}</h2>
					<!-- <p><strong>Breed:</strong> {{ pet.breed }}</p>
					<p><strong>Age:</strong> {{ pet.age }}</p>
					<p><strong>Inoculations:</strong> {{ pet.inoculations }}</p>
					<p><strong>Diseases:</strong> {{ pet.diseases }}</p>
					<p><strong>Parasites:</strong> {{ pet.parasites }}</p> -->
					<p>{{ pet.bio }}</p>
				</div>
				<button class="modal-close button-arrow" @click="closeModal">×</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal-content {
	background: white;
	padding: 20px;
	border-radius: 8px;
	max-width: 500px;
	width: 100%;
	position: relative;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	animation: fadeIn 0.3s ease;
}

.modal-close {
	position: absolute;
	top: 10px;
	right: 10px;
}

.modal-image {
	width: 100%;
	border-radius: 8px;
}

.modal-body {
	width: 100%;
	margin-top: 15px;
	justify-content: center;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(-20px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
