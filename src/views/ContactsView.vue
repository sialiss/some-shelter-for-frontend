<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"
import { ref, onBeforeMount, onUnmounted } from "vue"

const isHeaderDark = ref(true)

function scrollHandler() {
	isHeaderDark.value = window.scrollY == 0
}

onBeforeMount(() => document.addEventListener("scroll", scrollHandler))
onUnmounted(() => document.removeEventListener("scroll", scrollHandler))
</script>

<template>
	<TheHeader fixed :transparent="isHeaderDark" :dark="isHeaderDark" />
	<main>
		<div class="contacts screen | stack just-center">
			<div class="fix-width pad | flex equal">
				<div class="stack just-center">
					<h2>Для вопросов и предложений</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
				</div>
				<div>
					<h2>Мы ждём Вашего визита</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style>
.contacts {
	background-image: linear-gradient(-45deg,
			var(--start-screen-gradient-background),
			var(--start-screen-gradient-background-2));
}

.contacts p {
	color: var(--color-dark-s);
}

.contacts h2 {
	color: var(--color-light-xl);
}

a {
	color: var(--color-dark-l);
	text-decoration-line: none;
}
</style>
