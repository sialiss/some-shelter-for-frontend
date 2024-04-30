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
		<div class="first-screen screen | stack just-center">
			<div class="fix-width pad | flex equal">
				<div class="stack gap-l just-center pad-m">
					<h2>Животным тоже нужен дом</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
					<div>
						<button class="button button-primary">Приютить животное</button>
					</div>
				</div>
				<div>
					<img src="/src/assets/images/start-screen-puppy.png" alt="пёсик" />
				</div>
			</div>
		</div>
		<div class="about screen">
			<div class="fix-width pad | flex equal | pad-xl">
				<div class="flex just-center align-center">
					<img src="/src/assets/images/about-pets.png" alt="котик и собачка" />
				</div>
				<div class="stack gap-l just-center pad-m">
					<h3>Что такое "Котопёсики"</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
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
.first-screen {
	background-image: linear-gradient(
		-45deg,
		var(--start-screen-gradient-background),
		var(--start-screen-gradient-background-2)
	);
}

.first-screen p {
	color: var(--color-dark-s);
}

.first-screen h2 {
	color: var(--color-light-xl);
}

.about h3 {
	color: var(--color-dark-l);
}
</style>
