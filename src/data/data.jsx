import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import azzedine from "../assets/AzzeddineCHENINE.jpeg";
import elkindi from "../assets/elkindi.jpeg";
import imane from "../assets/ImaneGuellil.jpg";
import matthias from "../assets/MatthiasTroyer.jpg";
import amine from "../assets/MohamedAmineMerzouk.jpg";
import petruccione from "../assets/Petruccione.png";
import tahaA from "../assets/TahaArbaoui.png";
import tahaR from "../assets/taharouabah.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "speakers",
    title: "Speakers",
  },
  {
    id: "agenda",
    title: "Agenda",
  },
  {
    id: "faq",
    title: "Faq",
  },
];

//list of speakers for the speakers section
export const speakers = [
  {
    id: 1,
    name: "Azzeddine Chenine",
    profession: "Research engineer and ML Google Developer Expert",
    description: "Head First Reinforcement Learning",
    img: azzedine,
  },
  {
    id: 2,
    name: "El Kindi Rezig",
    profession:
      "Research scientist at the Computer Science and AI Laboratory (CSAIL) of MIT",
    description: "Data Science Development: Introduction to Data Preparation",
    img: elkindi,
  },
  {
    id: 3,
    name: "Imane Guellil",
    profession: "Data Science Researcher",
    description:
      "Ara-Women-Hate: An Annotated Corpus Dedicated to Hate Speech Detection against Women in the Arabic Community",
    img: imane,
  },
  {
    id: 4,
    name: "Matthias Troyer",
    profession:
      "Technical Fellow and Corporate Vice President at Microsoft Quantum",
    description: "x",
    img: matthias,
  },
  {
    id: 5,
    name: "Mohamed Amine Merzouk",
    profession: "PhD candidate in Adversarial Machine Learning",
    description: "Adversarial Poisoning in Federated Learning",
    img: amine,
  },
  {
    id: 6,
    name: "Francesco Petruccione",
    profession:
      "Interim Director at National Institute for Theoretical and Computational Science",
    description: "x",
    img: petruccione,
  },
  {
    id: 7,
    name: "Taha Arbaoui",
    profession: "Associate Professor at University of Technology of Troyes",
    description: "Optimisation and Machine Learning",
    img: tahaA,
  },
  {
    id: 8,
    name: "Taha Rouabah",
    profession: "Founder and PI of Constantine Quantum Technologies",
    description: "x",
    img: tahaR,
  },
];

//social media list of components
export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/SchoolofAIAlgiers/",
    icon: <FaFacebook size={24}></FaFacebook>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soai_algiers",
    icon: <FaInstagram size={24}></FaInstagram>,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/school-of-ai-algiers/",
    icon: <FaLinkedin size={24}></FaLinkedin>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/soaialgiers",
    icon: <FaTwitter size={24}></FaTwitter>,
  },
  {
    name: "Youtube",
    link: "https://m.youtube.com/channel/UChFa3XnZYZ94tkjfJ5CnPOA",
    icon: <FaYoutube size={24}></FaYoutube>,
  },
];

export const contactInfos = [
  {
    href: "https://www.google.com/maps/place/Ecole+Nationale+Sup%C3%A9rieure+d'Informatique+(Higher+School+for+Computer+Science)/@36.7050299,3.1739156,15z/data=!4m5!3m4!1s0x0:0x215c157a5406653c!8m2!3d36.7050299!4d3.1739156",
    name: "Place",
    icon: <RiMapPin2Fill size={20}></RiMapPin2Fill>,
    content:
      "Higher National School of Computer Science (ESI - Alger) Oued Smar, Alger",
  },
  {
    href: "mailto:schoolofai.algiers@esi.dz",
    name: "Mail",
    icon: <MdMail size={20}></MdMail>,
    content: "schoolofai.algiers@esi.dz",
  },
  {
    href: "tel:+213666636252",
    name: "Phone",
    icon: <BsFillTelephoneFill size={20}></BsFillTelephoneFill>,
    content: "+213 667 271 665",
  },
];

export const faq = [
  {
    question: "What is artificial intelligence ?",
    answer:
      "School Of AI Algeirs Is A Local Community Of Developers Students And Lovers Of Artificiel Intelligence In Algeria, At The Higher School Of Computer Science ( ESI Algeirs ).",
  },
  {
    question: "What is artificial intelligence ?",
    answer:
      "School Of AI Algeirs Is A Local Community Of Developers Students And Lovers Of Artificiel Intelligence In Algeria, At The Higher School Of Computer Science ( ESI Algeirs ).",
  },
  {
    question: "What is artificial intelligence ?",
    answer:
      "School Of AI Algeirs Is A Local Community Of Developers Students And Lovers Of Artificiel Intelligence In Algeria, At The Higher School Of Computer Science ( ESI Algeirs ).",
  },
  {
    question: "What is artificial intelligence ?",
    answer:
      "School Of AI Algeirs Is A Local Community Of Developers Students And Lovers Of Artificiel Intelligence In Algeria, At The Higher School Of Computer Science ( ESI Algeirs ).",
  },
];

// Agenda times and activity
export const agenda = [
  {
    start: "08:00",
    end: "09:00",
    activity: "Check In",
  },
  {
    start: "08:30",
    end: "09:00",
    activity: "Ice Breaking",
  },
  {
    start: "09:00",
    end: "09:30",
    activity: "Opening Ceremony",
  },
  {
    start: "09:30",
    end: "10:30",
    activity: "First Talk",
  },
  {
    start: "10:30",
    end: "12:00",
    activity: "Second Talk",
  },
  {
    start: "12:00",
    end: "13:00",
    activity: "Pause",
  },
  {
    start: "13:00",
    end: "14:30",
    activity: "Third Talk",
  },
  {
    start: "14:30",
    end: "16:00",
    activity: "Last Talk",
  },
  {
    start: "16:00",
    end: "16:30",
    activity: "Pause Cafe",
  },
  {
    start: "16:30",
    end: "17:00",
    activity: "Closing Ceremony",
  },
];
