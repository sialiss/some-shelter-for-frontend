<script setup lang="ts">
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
</script>

<template>
	<header :class="{ fixed, transparent, dark }">
		<div class="flex just-between align-center | pad | fix-width">
			<h1 class="stack gap-xs">
				<span class="title">Котопёсики</span>
				<span class="subtitle">Чудные зверушки</span>
			</h1>
			<nav class="flex align-center">
				<RouterLink to="/">О приюте</RouterLink>
				<RouterLink to="/pets">Наши зверушки</RouterLink>
				<RouterLink to="/help">Помочь приюту</RouterLink>
				<RouterLink to="/contacts">Контакты</RouterLink>
			</nav>
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

header.fixed {
	position: fixed;
	width: 100%;
}
header.transparent {
	background-color: transparent;
}
</style>
