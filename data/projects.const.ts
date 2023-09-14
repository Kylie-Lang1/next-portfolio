import KickItImg from '../assets/projects/KickIt.png'
import FitMeImg from '../assets/projects/FitMe.png'

export const projects = [
    {
        id: 1,
        title: 'Kick.It',
        image: KickItImg,
        description: 'A five-week capstone project that allows users to create an account, search for other users, chat with friends, browse hosted events by category and host their own events.',
        technologies: [
            'React', 'Tailwind Css', 'Google Maps API', 'Firebase', 'Socket.io'
        ],
        github: ['https://github.com/Kylie-Lang1/kick-it-frontend', 'https://github.com/Kylie-Lang1/kick-it-backend' ],
    },
    {
        id: 2,
        title: 'FitMe',
        image: FitMeImg,
        description: 'An individual project that creates a virtual closet for users to add articles of clothing and compose different outfits',
        technologies: [
            'React', 'Express', 'PostgreSQL', 'Node.js'
        ],
        github: ['https://github.com/Kylie-Lang1/FitMe-front-end-react', 'https://github.com/Kylie-Lang1/FitMe-back-end-express-sql' ],
    }
]