// Цей файл не є обов'язковим
// Його завдання полегшити отримання значень з .env файлу


// назву об'єкту можна давати яку завгодно
export const env = {
    moviesKey: import.meta.env.VITE_MOVIES_KEY,
    newsKey: import.meta.env.VITE_NEWS_KEY,
    weatherKey: import.meta.env.VITE_WEATHER_KEY,
    googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
};