/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-green": "#4caf4f",
                "custom-silver": "#F5F7FA",
                "custom-blue": "#2194F3"
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "hero-pattern": "url('../src/assets/globe.png')",
                "asida-pattern": "url('../src/assets/asidaimages10.png')",
                "main-pattern": "url('../src/assets/mainimages.png')",
                "cam-pattern": "url('../src/assets/cameramodule.png')",
                "wrapper-pattern": "url('../src/assets/ar1.jpg')",
                "wrapper1-pattern": "url('../src/assets/ar2.jpg')",
                "wrapper2-pattern": "url('../src/assets/ar3.jpg')",
            },
            lineHeight: {
                "custom-76": "76px",
            },
        },
    },
    plugins: [],
};
