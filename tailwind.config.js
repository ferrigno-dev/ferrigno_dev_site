/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: 'class',
    theme: {

        fontFamily: {
            sans: ["Poppins"],
            serif: ["Poppins"],
            mono: ["Poppins"],
            display: ["Poppins"],
            body: ["Poppins"]
        },
        extend: {},
    },
    plugins: [],
}