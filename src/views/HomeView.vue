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
			<div class="fix-width pad | flex equal gap-xl">
				<div class="stack gap-l">
					<h2>Животным тоже нужен дом</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolorum consequatur, corporis ratione natus facere
						hic? Dolorum nisi quis, harum sint placeat praesentium
						veritatis esse, nobis soluta voluptatibus, aspernatur
						laboriosam suscipit.
					</p>
					<div>
						<button class="button">Приютить животное</button>
					</div>
				</div>
				<img src="" alt="котик" />
			</div>
		</div>
		<div class="screen">
			<h2>Что такое "Котопёсики"</h2>
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
</style>
