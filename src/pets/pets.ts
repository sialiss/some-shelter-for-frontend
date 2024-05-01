export interface Pet {
	id: number
	image: string
	name: string
	bio: string
}

export const pets: Pet[] = [
	{
		id: 1,
		image: new URL("../assets/images/pets-katrine.png", import.meta.url)
			.href,
		name: "Катенька",
		bio: "a very good girl"
	},
	{
		id: 2,
		image: new URL("../assets/images/pets-jennifer.png", import.meta.url)
			.href,
		name: "Дженни",
		bio: "a very good girl"
	},
	{
		id: 3,
		image: new URL("../assets/images/pets-woody.png", import.meta.url).href,
		name: "Деревце",
		bio: "a very good girl"
	},
	{
		id: 4,
		image: new URL("../assets/images/pets-charly.png", import.meta.url)
			.href,
		name: "Чарли",
		bio: "a very good girl"
	},
	{
		id: 5,
		image: new URL("../assets/images/pets-freddie.png", import.meta.url)
			.href,
		name: "Фредди Фазбер",
		bio: "a very good girl"
	},
	{
		id: 6,
		image: new URL("../assets/images/pets-scarlet.png", import.meta.url)
			.href,
		name: "Скелет",
		bio: "a very good girl"
	},
	{
		id: 7,
		image: new URL("../assets/images/pets-sophia.png", import.meta.url)
			.href,
		name: "Соня",
		bio: "a very good girl"
	},
	{
		id: 8,
		image: new URL("../assets/images/pets-timmy.png", import.meta.url).href,
		name: "Тимоша",
		bio: "a very good girl"
	}
]
