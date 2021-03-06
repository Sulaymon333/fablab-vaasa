module.exports = {
    mode: 'jit',
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
