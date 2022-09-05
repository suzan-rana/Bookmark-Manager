const switchIcon = document.getElementById('switch');




// theme var 
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// console.log(userTheme)
// console.log(systemTheme)

// initial theme check

// to see if the user has dark mode in their system or had they visited our site with the theme of dark mode
const themeCheck = () => {
    if( userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        return;

    }
}

// the main logic is to switch the theme here and it works by checking if root element has dark class 

const themeSwitch = () => {
    if( document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        console.log(document.documentElement.classList)
        return;

    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
        return;
    }

}

switchIcon.addEventListener('click', () => {
    console.log("hello world.")
    themeSwitch();
})

themeCheck();   