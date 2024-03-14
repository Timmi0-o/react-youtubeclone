const account = [
	{ img: '/public/svg/googleAcc.svg', title: 'Аккаунт Google', arrow: 'false' },
	{ img: '/public/svg/changeAcc.svg', title: 'Сменить аккаунт', arrow: 'true' },
	{ img: '/public/svg/existAcc.svg', title: 'Выйти', arrow: 'false' },
]

const creativeStudioAndPaidSubs = [
	{
		img: '/public/svg/creativeStudioOnModal.svg',
		title: 'Творческая студия YouTube',
	},
	{
		img: '/public/svg/shopsAndPaidSubs.svg',
		title: 'Покупки и платные подписки',
	},
]

const basicSetting = [
	{
		img: '/public/svg/yourDareOnyYouTube.svg',
		title: 'Ваши данные на YouTube',
		arrow: 'false',
	},
	{
		img: '/public/svg/theme.svg',
		title: 'Тема: ',
		arrow: 'true',
		onclick: 'theme',
	},
	{
		img: '/public/svg/language.svg',
		title: 'Язык: Русский',
		arrow: 'true',
	},
	{
		img: '/public/svg/sucurityMode.svg',
		title: 'Безопасный режим: откл.',
		arrow: 'true',
	},
	{
		img: '/public/svg/country.svg',
		title: 'Страна: Россия',
		arrow: 'true',
	},
	{
		img: '/public/svg/fastKets.svg',
		title: 'Быстрые клавиши',
	},
]

const setting = [
	{
		img: '/public/svg/setting.svg',
		title: 'Настройки',
	},
]

const about = [
	{
		img: '/public/svg/reference.svg',
		title: 'Справка',
	},
	{
		img: '/public/svg/sendDeetBack.svg',
		title: 'Отправить отзыв',
	},
]

export { about, account, basicSetting, creativeStudioAndPaidSubs, setting }
