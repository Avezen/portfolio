import html from "../assets/img/logo/html.png";
import css from "../assets/img/logo/css.png";
import php from "../assets/img/logo/php.png";
import symfony from "../assets/img/logo/symfony.png";
import react from "../assets/img/logo/react.png";
import ts from "../assets/img/logo/ts.png";

export const fetchStack = () => {
    const stackItems = [
        {
            name: 'HTML',
            image: html,
            experience: '20 months'
        },
        {
            name: 'CSS',
            image: css,
            experience: '20 months'
        },
        {
            name: 'PHP',
            image: php,
            experience: '18 months'
        },
        {
            name: 'Symfony',
            image: symfony,
            experience: '18 months'
        },
        {
            name: 'ReactJS',
            image: react,
            experience: '18 months'
        },
        {
            name: 'TypeScript',
            image: ts,
            experience: '18 months'
        }
    ];


    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(stackItems);
            reject('Wrong')
        }, 1)
    });
};