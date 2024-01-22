import KickItImg from '../assets/projects/KickIt.png'
import FitMeImg from '../assets/projects/FitMe.png'
import CarbonFutPrintResults from '../assets/projects/CarbonFutprintResults.png'
import TriviaImg from '../assets/projects/Trivia.png'
import WeatherImg from '../assets/projects/WeatherApp.png'
import BudgetImg from '../assets/projects/BudgetHome.png'
import iSnackImg from '../assets/projects/iSnackHome.png'
import { StaticImageData } from 'next/image';

export interface IProjects {
        id: number;
        title: string;
        image: StaticImageData | any;
        description: string;
        uses: string[];
        technologies: string[];
        github: {
            frontend: string | undefined;
            backend?: string | undefined;
        } 
    }

export const projects: IProjects[] = [
    {
        id: 1,
        title: 'Kick.It',
        image: KickItImg,
        description: 'A five-week capstone project that helps users find others with similar interests and allows users to create an account, search for other users, chat with friends, browse hosted events and host their own events.',
        uses: [ 'Sign up/login with Firebase', 'Edit profile page information', 'Create events and/or show as interest/RSVP for events', 'Filter through events by category, sort by date, or search by name, location or host', 'See location details via Google Maps API', 'Send other users friend requests', 'Chat in real time using Socket.io', 'Interact with others in the event comments section' ],
        technologies: [
            'React', 'Google Maps API', 'Firebase', 'Socket.io', 'Express', 'PostgreSQL', 'Node.js', 'TailwindCSS', 'React-Icons'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/kick-it-frontend',
            backend: 'https://github.com/Kylie-Lang1/kick-it-backend'
        },
    },
    {
        id: 2,
        title: 'FitMe',
        image: FitMeImg,
        description: 'An individual project that creates a virtual closet for users to add articles of clothing and compose different outfits',
        uses: ['Add individual pieces of clothing and view on an index page', 'Create outfits by selecting up to 6 pieces of clothing and saving with a title', 'Search through their virtual closet with the search bar and/or filtering by category', 'Edit/delete outfits and items of clothing', 'Store information such as favorited pieces and links to purchase'],
        technologies: [
            'React', 'Express', 'PostgreSQL', 'Node.js', 'React-icons'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/FitMe-front-end-react',
            backend: 'https://github.com/Kylie-Lang1/FitMe-back-end-express-sql' 
        },
    },
    {
        id: 3,
        title: 'Carbon Fütprint',
        image: CarbonFutPrintResults,
        description: "A pair-programmed project completed in a 24 hour hackathon designed to calculate an individual's carbon footprint and provide solutions to reduce it.",
        uses: ['Calculate their carbon footprint based on carbon emission research', 'Easily navigate through the quiz with simple multiple choice questions', 'Recieve a personalized report with slider scores to indicate negative, neutral or positive impacts', 'Review solutions for reducing carbon emissions'],
        technologies: [
            'React', 'Node.js', 'TailwindCSS'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/ClimateHack'
        },
    },
    {
        id: 4,
        title: 'iSnack',
        image: iSnackImg,
        description: "A team project that stores user-input snack information with a simple algorithm that determines if a snack is healthy or unhealthy.",
        uses: ['Input new snacks into the database with an image and nutritional values',  'Easily identify healthy/unhealthy snacks with a heart icon indicator','Bookmark snacks as Favorites in a section pinned to the top of the index', 'View and edit snack details', 'Filter snacks as either healthy or unhealthy'],
        technologies: [
            'React', 'Express', 'PostgreSQL', 'Node.js', 'TailwindCSS', 'React-icons'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/project-snack-a-log-frontend',
            backend: 'https://github.com/TonyH98/project-snack-a-log-backend'
        },
    },
    {
        id: 5,
        title: 'Budget App',
        image: BudgetImg,
        description: "This budget app allows users to track their savings and spending based on user-entries.",
        uses: ['Add transactions with a simple form that stores details about each transaction', 'Utilize create, read, update and delete functions for transactions', 'Maintain a history of deposits and withdrawals', 'View their current balance with colored indicators to show low or negative balances'],
        technologies: [
            'React', 'Express', 'Node.js', 'CSS', 'React Date Picker'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/budget-app-react',
            backend: 'https://github.com/Kylie-Lang1/budget-app-express'
        },
    },
    {
        id: 6,
        title: 'Trivia Challenge',
        image: TriviaImg,
        description: "An early project that implements the jService API in a simple trivia game.",
        uses: ['Select a category and difficulty level with varying points', 'Answer with case insensitivity', 'See color-coded answers revealed to indicate correct/incorrect guesses', 'View their score with a personalized message at the end of the game'],
        technologies: [
            'HTML', 'Javascript', 'CSS', 'jService API'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/9-1-front-end-portfolio-project'
        },
    },
    {
        id: 7,
        title: 'Weather App',
        image: WeatherImg,
        description: "A weather app clone project made using the wttr.in API and tested for frontend similarity with the Cypress testing library",
        uses: ['Search for the weather in an area and view a 3-day forecast from the previous to next day', 'Display the average, high and low temperature as well as the current reel feel', 'Keep track of their previous searches', 'Convert between fahrenheit and celsius'],
        technologies: [
           'Javascript', 'HTML', 'CSS', 'wtter.in API'
        ],
        github: {
            frontend: 'https://github.com/Kylie-Lang1/9-1-weather-app-project-1'
        },
    }
]