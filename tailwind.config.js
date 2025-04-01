import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                    // primary: "#3da35d",
                //     secondary: "#57cc99",
                // primary: "#1c5a1c",
                // secondary: "#77380a",
                // accent: "#80ed99",
                background: "#f0fff1",
                // backgroundDark: "#e8f1f2",
                //     accent: "#80ed99",

                // textPrimary: "#263238",
                textSecondary: "#adb5bd",
            },

            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#1c5a1c",
                    secondary: "#77380a",
                    accent: "#80ed99",
                    // background: "#FAF3E0",
                    // background: "#f0fff1",
                    backgroundDark: "#e8f1f2",
                    textPrimary: "#333D29",
                    textSecondary: "#adb5bd",
                    neutral: "#f5f5f5",
                    "base-100": "#ffffff",
                },
            },
            {
                dark: {
                    primary: "#228B22",
                    secondary: "#8B4513",
                    accent: "#80ed99",
                    // background: "#1f2937",
                    backgroundDark: "#333D29",
                    textPrimary: "#f0fff1",
                    textSecondary: "#adb5bd",
                    neutral: "#2a2e37",
                    "base-100": "#1f2937",
                },
            },
        ],
    },
};
