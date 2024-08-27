import React, {useEffect, useState} from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {TfiWorld} from 'react-icons/tfi';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {FreeMode, Pagination} from "swiper/modules";
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CVPath from '../../../assets/pdf/Maheeshi Jayarathna - CV.pdf';
import {
    Project1,
    Project11,
    Project2,
    Project21,
    Project3,
    Project4,
    Project41,
    Project5,
    Project51,
    Project6,
    Project61,
    Project62,
    Project7,
    Project71,
    Project72
  } from "../../../assets/project"
import "./style.css"

// Sample data
const projectData = [{
    image: Project1,
    title: 'Cool Planat Management System',
    description: 'Cool Planat Management System is a HTML , CSS , JS base application designed for ice cream shop management.',
    images: [Project1, Project11],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Ice-Cream-Website',
    liveLink: 'https://example.com/project1',
},{
    image: Project3,
    title: 'Web Calculator',
    description: 'Web Calculator for create HTML, CSS, and JavaScript for a responsive, user-friendly frontend.',
    images: [Project3],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Web-Calculator',
    liveLink: 'https://example.com/project1',
}, {
    image: Project4,
    title: 'Web POs Management System',
    description: 'Web POS management system designed for a manage point of sales. Using by HTML , CSS , JS',
    images: [Project4, Project41],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Web-POS',
    liveLink: 'https://example.com/project1',
}, {
    image: Project5,
    title: 'Nike Shoes Shop Management System',
    description: 'Nike Shoes Shop Management System is a HTML , CSS , JS base application designed for shoes shop management. ',
    images: [Project5, Project51],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Shoes-Websit',
    liveLink: 'https://example.com/project1',
},{
    image: Project7,
    title: 'Travel Package Management System',
    description: 'A robust solution implemented using microservices and Spring Boot, designed to efficiently manage travel packages, bookings, and customer details, ensuring a seamless travel planning experience.',
    images: [Project7, Project71, Project72],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Travel-Planning-System',
    liveLink: 'https://example.com/project1',
}, {
    image: Project2,
    title: 'Hostel Management System',
    description: 'Hostel management system application designed for a hostel to handle customer , user , students and rooms.',
    images: [Project2, Project21],
    githubLink: 'https://github.com/maheeshi-n-jayarathna/Hostel-Management-System',
    liveLink: 'https://dream-home-hgdz.onrender.com',
}, {
    image: Project6,
    title: 'Fabric Zone Management System',
    description: 'Fabric Zone management system designed for a tailor shop to handle customer and item details and allows the seller to manage the daily tasks more conveniently and effectively with order details.',
    images: [Project6, Project61, Project62],
    githubLink: '',
    liveLink: 'https://example.com/project1',
},];


// ProjectCard Component
const ProjectCard = ({project, onClick}) => (

    <div
        onClick={() => onClick(project)}
        className="project-card"
    >
        <img src={project.image} alt={project.title} className="image"/>
        <div className="title">
            <div>
                <h3 className="">{project.title}</h3>
            </div>
        </div>
    </div>);

// ProjectModal Component
const ProjectModal = ({isOpen, onClose, project}) => {

    useEffect(() => {
        AOS.init({
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (project) {
            setMainImage(project.image);
        }
    }, [project]);

    useEffect(() => {
        if (project) {
            const images = project.images;
            let currentIndex = images.indexOf(project.image);
            const intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                setMainImage(images[currentIndex]);
            }, 2000);
            return () => clearInterval(intervalId);
        }
    }, [project]);

    if (!isOpen || !project) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10 ">
            <div
                data-aos={"zoom-in"}
                data-aos-duration="500"
                className="bg-white hadow-md max-w-lg w-full rounded-xl project">
                <img src={mainImage} alt="project" className=""/>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <hr className={'mb-2'}/>
                <p className="text-xs">{project.description}</p>
                <div className="flex space-x-2 text-secondary justify-end">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub className="text-xl"/>
                    </a>
                </div>
            </div>
        </div>);
};

// ProjectSection Component
const ProjectSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    return (<section className="py-14 xl:py-14 xs:py-4 ">
        <div className="container mx-auto px-4 xs:px-0 xl:px-8">
            <Swiper
                data-aos="zoom-in"
                data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                modules={[FreeMode, Pagination]}
                className="pb-14"
                breakpoints={{
                    640: {
                        slidesPerView: 1, spaceBetween: 20,
                    }, 768: {
                        slidesPerView: 2, spaceBetween: 40,
                    }, 1024: {
                        slidesPerView: 3, spaceBetween: 40,
                    },
                }}
            >
                {Array.from({length: Math.ceil(projectData.length / 2)}, (_, i) => (
                    <SwiperSlide
                        key={i}>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 ">
                            {projectData.slice(i * 2, i * 2 + 2).map((project, index) => (
                                <ProjectCard key={index} project={project} onClick={setSelectedProject}/>))}
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}
                      project={selectedProject}/>
    </section>);
};

// Section Component
const Section = () => {
    const downloadCV = () => {
        // Replace with the actual URL to your CV file
        const cvUrl = CVPath;
        window.open(cvUrl, '_blank');
    };

    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (<section
        className="mt-10 relative bg-site bg-cover bg-no-repeat text-white flex justify-center items-center xl:h-[50vh] xs:h-[40vh] xs:px-6">
        <div className="absolute inset-0 bg-accent bg-opacity-40"></div>
        <div
            data-aos={'fade-up'}
            className="relative text-center max-w-2xl leading-[20px]">
            <h1 className="xs:text-3xl text-black text-4xl font-bold mb-4 ">Have any project on mind?</h1>
            <p className="mb-8 text-xl text-black xs:text-xs">
                    <span className={'leading-[20px]'}>
                    Download my CV for a detailed look at my skills and experience.
                        Interested in collaboration? Contact me to explore how we can work together.
                    </span>
            </p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={downloadCV}
                    className="bg-white text-accent px-4 py-1 text-xl xs:text-xs rounded-full hover:scale-105 transform transition-transform duration-200 ease-in-out">
                    Download CV
                </button>
                {/* <ScrollLink
                    to="contact_id"
                    smooth={true}
                    duration={500}
                    className="border-2 text-black border-white px-6 py-1 text-xl xs:text-xs rounded-full hover:bg-accent hover:scale-105 transform transition-transform duration-200 ease-in-out cursor-pointer">
                    Hire Me
                </ScrollLink> */}
            </div>
        </div>
    </section>);
};

// Main Project Component
const Project = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (<>
        <div id={'project_id'} className="">

            <div
                data-aos="fade-up"
                className="text-center">
                <h1 className="section_title text-center">
                    <span className="text-primary">Projects</span> 
                </h1>
                {/* <p className="text-secondary/50 text-xl xs:text-xs xs:px-8 mb-4">
                    Explore my completed software development projects.
                </p> */}
            </div>
            <ProjectSection/>
        </div>
        <Section/>
    </>);
};

export default Project;