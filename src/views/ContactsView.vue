<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"
import { ref, onBeforeMount, onUnmounted } from "vue"

const isHeaderDark = ref(true)
const alert = ref({
	title: 'Unknown error',
	text: 'Unknown error'
});

function scrollHandler() {
	isHeaderDark.value = window.scrollY == 0
}

onBeforeMount(() => document.addEventListener("scroll", scrollHandler))
onUnmounted(() => document.removeEventListener("scroll", scrollHandler))

const name = ref("");
const email = ref("");
const feedback = ref("");

const isModalOpen = ref(false);
const openModal = () => { isModalOpen.value = true; };
const closeModal = () => { isModalOpen.value = false; };

function submitForm() {
	const re = /^[\w.]+@[\w.]+\.\w+$/
	if (!name.value || !email.value) {
		showModal("Ошибка", "Пожалуйста, заполните все обязательные поля.");
		return;
	} else if (!re.test(email.value)) {
		showModal("Ошибка", "Пожалуйста, проверьте правильность заполнения почтового адреса.");
		return;
	}
	showModal("Успех", "Форма успешно отправлена!");
}

function showModal(title: string, text: string) {
	alert.value = { title, text };
	openModal();
}

</script>

<template>
	<TheHeader fixed :transparent="isHeaderDark" :dark="isHeaderDark" />
	<main>
		<div class="contacts screen | stack just-center">
			<div class="fix-width pad | flex equal">
				<div class="fix-width pad | stack equal links">
					<div class="stack just-center">
						<h2>Для вопросов и предложений</h2>
						<div class="contact-icons stack pad gap-l">
							<a href="mailto:your@example.com">
								<img src="/src/assets/icons/icon-email.svg" alt="" class="icon pad-s" />
								meow@example.com
							</a>
							<a href="tel:+1234567890">
								<img src="/src/assets/icons/icon-phone.svg" alt="" class="icon pad-s" />
								+1 (234) 567-890
							</a>
						</div>
					</div>
					<div>
						<h2>Мы ждём Вашего визита</h2>
						<div class="contact-icons stack pad gap-l">
							<a href="https://maps.app.goo.gl/ELsDd15BvfyhQ66EA">
								<img src="/src/assets/icons/icon-marker.svg" alt="" class="icon pad-s" />
								Санкт-Петербург, Большая Морская ул., 67
							</a>
						</div>
					</div>
				</div>
				<div class="fix-width pad stack just-center">
					<form @submit.prevent="submitForm">
						<div class="form-group">
							<label for="name">Имя:</label>
							<input type="text" id="name" v-model="name" required>
						</div>
						<div class="form-group">
							<label for="email">Email:</label>
							<input type="text" id="email" v-model="email" required>
						</div>
						<div class="form-group">
							<label for="feedback">Отзыв:</label>
							<textarea id="feedback" v-model="feedback"></textarea>
						</div>
						<button type="submit">Отправить</button>
					</form>
					<div v-if="isModalOpen" class="modal-overlay pad-l" @click.self="closeModal">
						<div class="modal-content">
							<div class="modal-body">
								<h2>{{ alert.title }}</h2>
								<p>{{ alert.text }}</p>
							</div>
							<button class="modal-close button-arrow" @click="closeModal">×</button>
						</div>
					</div>
				</div>
			</div>
			<div class="fix-width puppy">
				<img class="puppy" src=" /src/assets/images/footer-puppy.png">
			</div>
		</div>
	</main>
</template>

<style>
.contacts {
	background-image: linear-gradient(-45deg,
		var(--start-screen-gradient-background),
		var(--start-screen-gradient-background-2)
	);
	padding-top: 75px;
}

.contacts p {
	color: var(--color-dark-s);
}

.contacts h2 {
	color: var(--color-light-xl);
}

.contacts a {
	color: var(--color-light-l);
	text-decoration-line: none;
}

.form-container {
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
	background-color: #f5f5f5;
	border-radius: 8px;
}

img {
	vertical-align: middle;
}

.form-group {
	margin-bottom: 20px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
	color: var(--color-light-xl);
}

.form-group input,
.form-group textarea {
	width: 100%;
	padding: 10px;
	border: 1px solid #795548;
	border-radius: 4px;
}

button[type="submit"] {
	display: block;
	width: 100%;
	padding: 10px;
	background-color: #795548;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button[type="submit"]:hover {
	background-color: #6d4c41;
}

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

.modal-body p, .modal-body h2 {
	color: var(--color-dark-4xl);
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 768px) {

	.contacts .fix-width {
		display: block;
		flex-direction: column-reverse;
	}
}

@media screen and (max-width: 320px) {
	.contacts .fix-width {
		display: block;
		flex-direction: column-reverse;
		font-size: 0.7rem;
	}
}
</style>
