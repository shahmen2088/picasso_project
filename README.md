# List of posts

- Проект представляет собой список постов
- Использованное API: [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

---

## Реализация требований

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [x] Главная страница - список постов (бесконечный скролл + виртуализация)
- [x] Каждый пост в списке - это строка: номер + заголовок + описание
- [x] При нажатии на "пост" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/app/providers/store/store.ts)
- [x] Используется RTK Query: [{JSON} Placeholder](src/shared/api/postsApi.ts)

### Дополнительная информация

- [x] Используется TypeScript
- [x] Проект собран при помощи [Vite](https://vitejs.dev)
- [x] Кодовая база организована по методологи [Feature-Sliced Design](https://feature-sliced.design/ru/)
- [x] Виртуализация реализована с помощью библиотеки [react-window](https://github.com/bvaughn/react-window)
