import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#47026c",
                secondary: "#c86bfa",
                background: "#f2ebfb",
                textPrimary: "#1F2937",
                textSecondary: "#adb5bd",
                textAccent: "#eec7fc",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
};
