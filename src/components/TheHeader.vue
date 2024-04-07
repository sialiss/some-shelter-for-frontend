<template>
	<header class="">
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
}

.title {
	font-size: large;
	font-family: 'Times New Roman', Times, serif;
	letter-spacing: .1em;
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
</style>