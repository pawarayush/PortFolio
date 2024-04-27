import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Contact Manager App',
        description: "Introducing a robust Contact Manager app developed using Android Studio, Kotlin, Firebase Database, and XML. This dynamic application seamlessly organizes and stores contacts securely in real-time on Firebase. Users can effortlessly add, edit, and delete contacts with a user-friendly interface designed in XML. The app harnesses the power of Kotlin for efficient backend functionality, ensuring a smooth and responsive experience. Experience streamlined contact management like never before with this innovative, technology-driven solution.",
        tools: ['Android Studio','Kotlin','FireBase'],
        role: 'Android App Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Login Authanticater App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Android Studio','Kotlin','FireBase'],
        role: 'Android App Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Promt Response App',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['Android Studio','Kotlin','JetPackCompose','Gemini_Ultra_Model','XML'],
        code: '',
        role: 'Android App Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'News App',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['Android Studio','Kotlin','XML'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Android App Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },