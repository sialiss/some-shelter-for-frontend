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
				<div class="flex just-center">
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
		<div class="pets screen">
			<div class="fix-width pad | stack equal | pad-xl align-center">
				<h3>Малыши, которым нужен дом</h3>
				<div class="flex align-center just-center gap-xl pad-l">
					<button class="button-arrow">←</button>
					<div class="stack card">
						<img src="../assets/images/pets-katrine.png">
						<p>Katrine</p>
						<button class="button-secondary">Learn more</button>
					</div>
					<div class="stack card">
						<img src="../assets/images/pets-jennifer.png">
						<p>Jennifer</p>
						<button class="button-secondary">Learn more</button>
					</div>
					<div class="stack card">
						<img src="../assets/images/pets-woody.png">
						<p>Woody</p>
						<button class="button-secondary">Learn more</button>
					</div>
					<button class="button-arrow">→</button>
				</div>
				<RouterLink to="/pets" class="button-primary">Познакомиться со всеми</RouterLink>
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

a {
	color: var(--color-dark-l);
	text-decoration-line: none;
}

.about {
	background-color: var(--color-light-xl);
}

.card {
	background-color: var(--color-light-l);
	padding: var(--pad-l);
	align-items: center;
}

.card p {
	color: var(--color-dark-l);
}
</style>
