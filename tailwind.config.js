import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3da35d",
                secondary: "#57cc99",
                background: "#f0fff1",
                backgroundDark: "#e8f1f2",
                accent: "#80ed99",

                textPrimary: "#263238",
                textSecondary: "#adb5bd",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
