import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // colors: {
            //     primary: "#3da35d",
            //     secondary: "#57cc99",
            //     background: "#f0fff1",
            //     backgroundDark: "#e8f1f2",
            //     accent: "#80ed99",

            //     textPrimary: "#263238",
            //     textSecondary: "#adb5bd",
            // },

            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        // themes: [
        //     {
        //         light: {
        //             primary: "#3da35d",
        //             secondary: "#57cc99",
        //             background: "#fff",
        //             accent: "#80ed99",
        //             textPrimary: "#263238",
        //             textSecondary: "#adb5bd",
        //             neutral: "#f5f5f5",
        //             "base-100": "#ffffff",
        //         },
        //     },
        //     {
        //         dark: {
        //             primary: "#3da35d",
        //             secondary: "#57cc99",
        //             background: "#1f2937",
        //             backgroundDark: "#2a2e37",
        //             accent: "#80ed99",
        //             textPrimary: "#f0fff1",
        //             textSecondary: "#f0fff1",
        //             neutral: "#2a2e37",
        //             "base-100": "#1f2937",
        //         },
        //     },
        // ],

        themes: [
            {
                light: {
                    primary: "#1c5a1c", // Forest Green
                    secondary: "#77380a", // Earthy Brown
                    accent: "#FFD700", // Sun Yellow
                    background: "#FAF3E0", // Soft Beige
                    textPrimary: "#333D29", // Dark Olive
                    textSecondary: "#adb5bd",
                    neutral: "#f5f5f5",
                    "base-100": "#ffffff",
                },
            },
            {
                dark: {
                    primary: "#228B22", // Forest Green
                    secondary: "#8B4513", // Earthy Brown
                    accent: "#FFD700", // Sun Yellow
                    background: "#1f2937", // Dark background for dark theme
                    textPrimary: "#f0fff1", // Light text for dark theme
                    textSecondary: "#adb5bd",
                    neutral: "#2a2e37",
                    "base-100": "#1f2937",
                },
            },
        ],
    },
};
