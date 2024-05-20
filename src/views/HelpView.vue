<script setup lang="ts">
import TheHeader from "../components/TheHeader.vue"
</script>

<template>
	<TheHeader />
	<main>
		<div class="first-screen | stack just-center">
			<div class="fix-width pad | flex equal">
				<div class="stack gap-xl just-center pad-m">
					<h2>Как вы можете помочь<br />нашему приюту</h2>
					<div class="help-items">
						<div class="help-item">
							<img src="/src/assets/icons/icon-pet-food.svg" alt="" class="icon" />
							<div class="name">Корм</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-transportation.svg" alt="" class="icon" />
							<div class="name">Транспорт</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-toys.svg" alt="" class="icon" />
							<div class="name">Игрушки</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-bowls-and-cups.svg" alt="" class="icon" />
							<div class="name">Миски</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-shampoos.svg" alt="" class="icon" />
							<div class="name">Шампунь</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-vitamins.svg" alt="" class="icon" />
							<div class="name">Витаминки</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-medicines.svg" alt="" class="icon" />
							<div class="name">Лекартсва</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-collars-leashes.svg" alt="" class="icon" />
							<div class="name">Ошейники</div>
						</div>
						<div class="help-item">
							<img src="/src/assets/icons/icon-sleeping-area.svg" alt="" class="icon" />
							<div class="name">Кроваточки</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="second-screen">
			<div class="fix-width pad-xl | flex wrap align-center just-center donats">
				<img src="/src/assets/images/donation-dog.png" alt="грустная собачка хочет кушать ваши деньги" />
				<div class="stack">
					<h2>А ещё мы принимаем донатики</h2>
					<div class="flex wrap align-center just-center">
						<p>СуперБанк&reg;</p>
						<div class="card-number | flex">
							<img src="/src/assets/icons/credit-card.svg" alt="банковская карточка" />
							<span>8496&nbsp;4739&nbsp;4342&nbsp;8679&nbsp;7861</span>
						</div>
					</div>
					<div class="small-text">
						Легальные штуки - это важная часть нашей повседневной
						жизни. Они обеспечивают нам безопасность, защиту прав и
						справедливость. Будь то законы, контракты или лицензии,
						легальные штуки помогают нам поддерживать порядок и
						стабильность в обществе. Без них было бы сложно
						обеспечить права и интересы каждого человека. Поэтому
						важно быть в курсе всех легальных штук и соблюдать их,
						чтобы жить в гармонии и безопасности.
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style>
.first-screen {
	background-color: var(--color-light-xl);
	padding-block: 5rem;
}

h2 {
	text-align: center;
}

.help-items {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 7rem;
	row-gap: var(--pad-xl);
	justify-content: center;
}

.help-item {
	width: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
}


.card-number {
	padding: var(--pad-m);
	background: var(--color-primary);
	border-radius: 30px;
}

.small-text {
	max-width: 500px;
	font-size: small;
	color: var(--color-dark-m);
}

@media screen and (max-width: 1280px) {
	.donats {
		flex-direction: column-reverse;
	}
}

@media screen and (max-width: 768px) {
	.donats {
		padding: var(--pad-m);
	}

	.help-item {
		width: 20%;
	}
} 

@media screen and (max-width: 320px) {
	.help-item {
		width: 30%;
	}
}
</style>
