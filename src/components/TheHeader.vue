<script setup lang="ts">
import { ref } from "vue"

const { fixed } = defineProps({
	fixed: {
		type: Boolean,
		default() {
			return false
		}
	},
	transparent: {
		type: Boolean,
		default() {
			return false
		}
	},
	dark: {
		type: Boolean,
		default() {
			return false
		}
	}
})

const isNavOpen = ref(false)

function toggleNav() {
	isNavOpen.value = !isNavOpen.value
}
</script>

<template>
	<header :class="{ fixed, transparent, dark }">
		<div class="flex just-between align-center | pad | fix-width">
			<h1 class="stack gap-xs">
				<span class="title">Котопёсики</span>
				<span class="subtitle">Чудные зверушки</span>
			</h1>
			<button @click="toggleNav" class="nav-btn">☰</button>
			<nav :class="{ open: isNavOpen } " class="flex align-center">
				<button @click="toggleNav" class="nav-btn nav-btn-open rotate">☰</button>
				<RouterLink to="/">О приюте</RouterLink>
				<RouterLink to="/pets">Наши зверушки</RouterLink>
				<RouterLink to="/help">Помочь приюту</RouterLink>
				<RouterLink to="/contacts">Контакты</RouterLink>
			</nav>
			<!-- <button class="open-nav">☰</button> -->
		</div>
	</header>
</template>

<style scoped>
header {
	position: sticky;
	top: 0;
	background-color: var(--color-light-xl);
	transition: background-color 0.2s;
}

.title {
	font-size: large;
	font-family: "Times New Roman", Times, serif;
	letter-spacing: 0.1em;
	color: var(--color-dark-l);
}
.subtitle {
	font-size: small;
	color: var(--color-dark-3xl);
}

a {
	min-width: max-content;
	color: var(--color-dark-l);
	text-decoration-line: none;
}
a.router-link-active {
	color: var(--color-dark-3xl);
	text-decoration-line: underline;
	text-underline-offset: var(--pad-s);
	text-decoration-color: var(--color-primary);
	text-decoration-thickness: 2px;
}

.nav-btn {
	background-color: transparent;
	color: var(--color-dark-l);
	border: none;
}
.rotate {
	transform: rotate(-90deg);
}
.nav-btn-open {
	color: var(--color-primary);
}

/* Props */

header.dark .title {
	color: var(--color-primary);
}
header.dark .subtitle {
	color: var(--color-light-l);
}
header.dark a {
	color: var(--color-dark-s);
}
header.dark a.router-link-active {
	color: var(--color-light-l);
}
header.dark .nav-btn {
	color: var(--color-primary);
}

header.fixed {
	position: fixed;
	width: 100%;
}
header.transparent {
	background-color: transparent;
}


header button {
	display: none;
}

@media screen and (max-width: 768px) {
	header button {
		display: initial;
	}

	nav {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;

		display: flex;
		flex-direction: column;
		padding: var(--pad-m);

		background: var(--start-screen-gradient-background-2);
		translate: 100%;
		transition: translate 0.2s;
	}
	nav.open {
		translate: 0;
	}

	header a {
		color: var(--color-dark-s);
	}
	header a.router-link-active {
		color: var(--color-light-l);
	}
}
</style>
