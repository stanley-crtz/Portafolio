import React from 'react';

export const Strings = {
    en: {
        libreries:'Libraries',
        menu: [
            {
                title: 'Home',
                rute: '/Portafolio/Home'
            },
            {
                title: 'About Me',
                rute: '/Portafolio/About_Me'
            },
            {
                title: 'Success Stories',
                rute: '/Portafolio/Success_Stories'
            },
            {
                title: 'Interests',
                rute: '/Portafolio/Interests'
            },
            {
                language: 'Language'
            }
        ],
        languages: {
            titlesModal: {
                title: 'Select a language',
                buttonOpenModal: 'Language',
                buttonAccept: 'Change',
                buttonCancel: 'Cancel'
            },
            languages: [
                {
                    value: 'en',
                    label: 'English'
                },
                {
                    value: 'es',
                    label: 'Spanish'
                }
            ]
        },
        Home: {
            title: 'Who I am?',
            greetings: 'Hi!, my name is',
            specialization: 'I am a self-taught programmer and currently I specialize in the field of web development.',
            pleasures: 'I really like to practice sports, especially soccer, my position in this sport is that of a goalkeeper, and I also like to play the guitar. Although most of the time I spend researching new technology that I can learn.',
            dislike: "I'm a bit shy around people I don't know, but if it's teamwork, I'm not afraid to take the lead, whether the situation warrants it or whether I have been entrusted with the position of leader of a team.",
            objective: 'My professional goal would be to support a large company in the development field.'
        },
        AboutMe: {
            certificate: [
                {
                    title: 'Golang/Go',
                    urlImage: 'https://miro.medium.com/max/3152/0*I7qZbim6dIE2Hoss.png',
                    description: 'Golang or Go is a relatively new language since it was created in September 2007 and developed by Google, little by little there was a lot of talk about it, which prompted me to learn this wonderful Back-End oriented language since it has the ease of program interpreted and dynamic languages; and the efficiency and security of a statically compiled and static typing.',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607507/Portafolio/Golang_zaughs.png"
                },
                {
                    title: 'Angular JS',
                    urlImage: 'https://licencias.info/wp-content/uploads/2019/07/angularjs.jpg',
                    description: "It was a course taught by Victor Robles at Udemy, held in 2020, which consisted of how to create an Angular project, create components, and separate component views. Later I would continue with another course in which it is called Master in JavaScript Frameworks: Learn Angular, React, Vue. where I learned more about how Angular works, which was also done in 2020 (I didn't finish the whole course in 2020, just the Angular js and React js part).",
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607503/Portafolio/Angular_8_jojt2v.png"
                },
                {
                    title: 'Python',
                    urlImage: 'https://mundofreelance.online/wp-content/uploads/2021/01/freelance-python.png',
                    description: 'It was a course carried out by the Secretary of Innovation of the Presidency and Asociacion Conexion of El Salvador where the main topic was Introduction to Python, held in 2020, which lasted 36 hours through Google ClassRoom.',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607485/Portafolio/Python_ehh7gn.jpg"
                },
                {
                    title: 'IA GAMING',
                    urlImage: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/119082995_365270581526231_7556729928827498904_n.jpg?_nc_cat=110&ccb=3&_nc_sid=b386c4&_nc_ohc=_vsSQy2VTPYAX94U_-q&_nc_ht=scontent.fsal2-1.fna&oh=5b342ca1b602dbb0dbd67cd22aec6221&oe=605057DC',
                    description: 'It was the first IA Gaming event held by the Microsoft Learn Student Ambassador members in 2020, where it consisted of 3 weeks of introduction on python 3 and artificial intelligence, where after the introduction the main event was a contest in which all participants would create an AI to make pairs and the one with the most points would win',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607504/Portafolio/IAGaming_f0aenu.jpg"
                }
            ],
            skill: 'Skills'
        },
        Footer: {
            text: <p>All content &copy; 2021 Stanley Cortez</p>,
            slogan: <cite>"If you can imagine it, you can program it"</cite>,
            alertTitle: 'Copied to clipboard'
        }
    },
    es: {
        libreries:'Librerias',
        menu: [
            {
                title: 'Inicio',
                rute: '/Portafolio/Home'
            },
            {
                title: 'Sobre Mi',
                rute: '/Portafolio/About_Me'
            },
            {
                title: 'Casos de exito',
                rute: '/Portafolio/Success_Stories'
            },
            {
                title: 'Intereses',
                rute: '/Portafolio/Interests'
            },
            {
                language: 'Lenguaje'
            }
        ],
        languages: {
            titlesModal: {
                title: 'Seleccione un idioma',
                buttonOpenModal: 'Idioma',
                buttonAccept: 'Cambiar',
                buttonCancel: 'Cancelar'
            },
            languages: [
                {
                    value: 'es',
                    label: 'Español'
                },
                {
                    value: 'en',
                    label: 'Ingles'
                }
            ]
        },
        Home: {
            title: '¿Quién soy?',
            greetings: '¡Hola!, mi nombre es',
            specialization: 'Soy un programador autodidacta y actualmente me especializo en el campo del desarrollo web.',
            pleasures: 'Me gusta mucho practicar deportes, sobre todo fútbol, ​​mi puesto en este deporte es el de portero, y también me gusta tocar la guitarra. Aunque la mayor parte del tiempo lo dedico a investigar nuevas tecnologías que puedo aprender.',
            dislike: "Soy un poco tímido con gente que no conozco, pero si se trata de trabajo en equipo, no tengo miedo de tomar la iniciativa, tanto si la situación lo amerita como si me han confiado el puesto de líder de un equipo.",
            objective: 'Mi objetivo profesional sería apoyar a una gran empresa en el campo del desarrollo.'
        },
        AboutMe: {
            certificate: [
                {
                    title: 'Golang/Go',
                    urlImage: 'https://miro.medium.com/max/3152/0*I7qZbim6dIE2Hoss.png',
                    description: 'Golang o Go es un lenguaje relativamente nuevo ya que fue creado en septiembre de 2007 y desarrollado por Google, poco a poco se habló mucho al respecto, lo que me impulsó a aprender este maravilloso lenguaje orientado al Back-End ya que tiene la facilidad de programa interpretado y lenguajes dinámicos; y la eficiencia y seguridad de un lenguaje compilado y de tipado estatico.',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607507/Portafolio/Golang_zaughs.png"
                },
                {
                    title: 'Angular JS',
                    urlImage: 'https://licencias.info/wp-content/uploads/2019/07/angularjs.jpg',
                    description: 'Fue un curso impartido por Victor Robles en Udemy, realizado en 2020, que consistió en cómo crear un proyecto Angular, crear componentes y separar vistas de componentes. Posteriormente continuaría con otro curso en el que se llama Master en Frameworks JavaScript: Aprende Angular, React, Vue. Donde aprendí más sobre cómo funciona Angular, que también se hizo en 2020 (no terminé todo el curso en 2020, solo la parte de Angular js y React js).',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607503/Portafolio/Angular_8_jojt2v.png"
                },
                {
                    title: 'Python',
                    urlImage: 'https://mundofreelance.online/wp-content/uploads/2021/01/freelance-python.png',
                    description: 'Fue un curso realizado por la Secretaria de Innovacion de la Presidencia y Asociacion Conexion de El Salvador en donde el tema principal era el de Introducción a Python realizado en el 2020, cuya duracion fue de 36 horas a travez de Google ClassRoom.',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607485/Portafolio/Python_ehh7gn.jpg"
                },
                {
                    title: 'IA GAMING',
                    urlImage: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/119082995_365270581526231_7556729928827498904_n.jpg?_nc_cat=110&ccb=3&_nc_sid=b386c4&_nc_ohc=_vsSQy2VTPYAX94U_-q&_nc_ht=scontent.fsal2-1.fna&oh=5b342ca1b602dbb0dbd67cd22aec6221&oe=605057DC',
                    description: 'Fue el primer evento de IA Gaming realizado por los miembros de Microsoft Learn Student Ambassador en 2020, donde consistió en 3 semanas de introducción sobre python 3 e inteligencia artificial, donde después de la introducción el evento principal fue un concurso en el que todos los participantes crearían un IA para hacer parejas y el que tenga más puntos ganaría',
                    urlDiploma: "https://res.cloudinary.com/dxmkfwigq/image/upload/v1613607504/Portafolio/IAGaming_f0aenu.jpg"
                }
            ],
            skill: 'Habilidades'
        },
        Footer: {
            text: <p>Todo el contenido &copy; 2021 Stanley Cortez</p>,
            slogan: <cite>"Si puedes imaginarlo, puedes programarlo"</cite>,
            alertTitle: 'Copiado al portapapeles'
        }
    },
    Skills: [
        {
            title: "REACT JS",
            img: 'https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png',
            libreries: [
                {
                    title: 'React Router DOM',
                    progress: 90
                },
                {
                    title: 'Redux',
                    progress: 100
                },
                {
                    title: 'React Material UI',
                    progress: 100
                },
                {
                    title: 'Hooks',
                    progress: 70
                },
                {
                    title: 'Jest',
                    progress: 50
                },
                {
                    title: 'Recharts',
                    progress: 80
                },
                {
                    title: 'Axios',
                    progress: 100
                },
                {
                    title: 'Boostrap',
                    progress: 100
                }
            ]
        },
        {
            title: 'ANGULAR JS',
            img: 'https://codigoonclick.com/wp-content/uploads/2018/03/Conoce-Angular.jpg',
            libreries: [
                {
                    title: 'NGX-Angular',
                    progress: 80
                },
                {
                    title: 'Angular Materia',
                    progress: 80
                },
            ]
        },
        {
            title: 'NODE JS',
            img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg',
            libreries: [
                {
                    title: 'Express',
                    progress: 90
                },
                {
                    title: 'body-parser',
                    progress: 60
                },
                {
                    title: 'cloudinary',
                    progress: 80
                },
                {
                    title: 'handlebars',
                    progress: 90
                },
                {
                    title: 'JWT',
                    progress: 75
                },
                {
                    title: 'mongoose',
                    progress: 95
                },
                {
                    title: 'multer',
                    progress: 85
                },
                {
                    title: 'nodemailer',
                    progress: 70
                },
                {
                    title: 'Validator',
                    progress: 90
                },
                {
                    title: 'Socket IO',
                    progress: 100
                }
            ]
        },
        {
            title: 'GO / GOLANG',
            img: 'https://i.pinimg.com/originals/f9/3b/1b/f93b1b188cc7bd0a687c545e204633eb.jpg',
            libreries: [
                {
                    title: 'Net/http',
                    progress: 70
                },
                {
                    title: "Gorilla/mux",
                    progress: 80
                }, 
                {
                    title: 'Encoding/json',
                    progress: 80
                },
                {
                    title: 'gopkg.in/mgo.v2',
                    progress: 85
                }
            ]
        }
    ]
} 