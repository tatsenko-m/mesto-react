# <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tatsenko-m/mesto-react/main/docs/project-logo-dark.png"><img src="https://raw.githubusercontent.com/tatsenko-m/mesto-react/main/docs/project-logo-light.png" width="200" alt="Лого проекта"></picture> <picture><img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTQ4MmVlZDhlYmRmMDM5ZTJlMTNiMWFjY2FmNTY0ZWMwZjhiZjY5OCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/eNAsjO55tPbgaor7ma/giphy.gif" width="50" alt="React animated logo"></picture> React App ![GitHub repo size](https://img.shields.io/github/repo-size/tatsenko-m/mesto-react) ![GitHub top language](https://img.shields.io/github/languages/top/tatsenko-m/mesto-react)

Версия приложения [Mesto](https://github.com/tatsenko-m/mesto), портированная на React.

Сервис Mesto - интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.

Открыть демо:

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)](https://tatsenko-m.github.io/mesto-react/)

> В этом репозитории ведется портирование проекта Mesto на React. 
Реализация проекта на Vanilla JavaScript: [github.com/tatsenko-m/mesto](https://github.com/tatsenko-m/mesto)

## Функциональность
- Добавление/удаление карточки с фотографией и подписью
- Просмотр карточек, добавленных другими пользователями
- Постановка/снятие лайка у каждой карточки
- Счетчик количества лайков
- Просмотр полноразмерного фото карточки в отдельном модальном окне
- Редактирование имени профиля и информации о себе
- Обновление аватара
- Подгрузка информации с сервера

## Технологии
📄 **Верстка**
* Flexbox
* Grid Layout
* Адаптивная верстка, медиазапросы `@media`
* Относительное и абсолютное позиционирование элементов
* `hover`-эффекты с плавным переходом `transition`

⚙️ **JavaScript**
* Работа с DOM-моделью
* Разбиение кода на модули
* Асинхронный код
* Работа с API, `fetch` запросы.

⚛️ **React**
* CRA
* Синтаксис JSX
* Декларативный подход
* Функциональные компоненты
* Хуки `useState` и `useEffect`

**а также методологии:**

- БЭМ. Файловая структура Nested
- ООП

## Инструкция по установке

Клонируем репозиторий:
```bash
git clone https://github.com/tatsenko-m/mesto-react.git
```
Устанавливаем зависимости:
```bash
cd mesto-react

npm install
```
Для запуска используем команды:
```bash
npm start
# Запуск проекта в режиме разработки.
# Для просмотра результатов в браузере откройте http://localhost:3000.
# После внесения изменений страница перезагрузится автоматически.

npm run build
# Создает в папке build оптимизированную версию приложения,
# готовую к развертыванию.
```

