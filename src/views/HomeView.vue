<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"
import PetsSlider from "../components/PetsSlider.vue"
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
			<div class="layout | fix-width pad | flex equal">
				<div class="stack gap-l just-center pad-m">
					<h2>Животным тоже нужен дом</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
					<div class="mobile-center">
						<RouterLink to="/contacts" class="button-primary"
							>Приютить животное</RouterLink
						>
					</div>
				</div>
				<div>
					<img
						src="/src/assets/images/start-screen-puppy.png"
						alt="пёсик"
					/>
				</div>
			</div>
		</div>
		<div class="about screen | stack just-center">
			<div class="layout fix-width pad | flex equal | pad-xl">
				<div class="flex just-center">
					<img
						src="/src/assets/images/about-pets.png"
						alt="котик и собачка"
					/>
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
		<div class="pets screen | stack just-center">
			<div class="fix-width pad | stack equal | align-center">
				<h3>Малыши, которым нужен дом</h3>
				<PetsSlider />
				<RouterLink to="/pets" class="button-primary"
					>Познакомиться со всеми</RouterLink
				>
			</div>
		</div>
	</main>
</template>

<style scoped>
.first-screen {
	background-image: linear-gradient(
		-45deg,
		var(--start-screen-gradient-background),
		var(--start-screen-gradient-background-2)
	);
	padding-top: 75px;
}

.first-screen p {
	color: var(--color-dark-s);
}

.first-screen h2 {
	color: var(--color-light-xl);
}

.first-screen a {
	color: var(--color-dark-3xl);
}

a {
	color: var(--color-dark-l);
	text-decoration-line: none;
}

.about {
	background-color: var(--color-light-xl);
}

.pets.screen > .stack {
	padding-block: var(--pad-xl);
}

.pets a {
	color: var(--color-dark-3xl);
}

@media screen and (max-width: 800px) {
	.first-screen .layout {
		padding-top: 20px;
		flex-direction: column;
	}
	.about.screen .layout {
		flex-direction: column-reverse;
	}

	.mobile-center {
		display: flex;
		align-self: center;
	}
}
</style>
