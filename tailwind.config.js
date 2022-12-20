/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "540px",
            // => @media (min-width: 640px) { ... }

            md: "760px",
            // => @media (min-width: 760px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            xxl: "1440px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    plugins: [],
};
