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
import yousra from "../assets/yousrabouakba.jpg";
import younes from "../assets/YounesBouhdjar.jpg";
import hadjer from "../assets/Hadjer.jpg";
import noha from "../assets/noha.jpg";

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
    profession: "Research engineer and Google Developer Expert in ML",
    description: "Head First Reinforcement Learning",
    img: azzedine,
  },
  {
    id: 2,
    name: "El Kindi Rezig",
    profession: "Research Scientist at Massachusetts Institute of Technology",
    description: "Data Science Development: Introduction to Data Preparation",
    img: elkindi,
  },
  {
    id: 3,
    name: "Imane Guellil",
    profession:
      "Data Science Researcher at Massachusetts Institute of Technology",
    description: "Hate speech detection against women in the Arabic community",
    img: imane,
  },
  {
    id: 4,
    name: "Matthias Troyer",
    profession:
      "Technical Fellow and Corporate Vice President at Microsoft Quantum",
    description: "Toward Practical Quantum Advantages",
    img: matthias,
  },
  {
    id: 5,
    name: "Mohamed Amine Merzouk",
    profession:
      "PhD candidate in Adversarial Machine Learning in Polytechnique Montréal",
    description: "Adversarial Poisoning in Federated Learning",
    img: amine,
  },
  {
    id: 6,
    name: "Francesco Petruccione",
    profession:
      "Interim Director at National Institute for Theoretical and Computational Science",
    description:
      "Introduction to Quantum Computing and Quantum Machine Learning",
    img: petruccione,
  },
  {
    id: 7,
    name: "Taha Arbaoui",
    profession: "Associate Professor at University of Technology of Troyes",
    description: "Learning-based parameter tuning for scheduling problems",
    img: tahaA,
  },
  {
    id: 8,
    name: "Yousra Bouakba",
    profession: "Scientist in Natural Language Processing",
    description: "QNLP: A New and Promising Way to Solve NLP Problems",
    img: yousra,
  },
  {
    id: 9,
    name: "Noha Nekamiche",
    profession:
      "Graduate student from ESI,Ex-Vice present of School of AI Algiers",
    description: "Data augmentation using generative models",
    img: noha,
  },
  {
    id: 10,
    name: "Hadjer Benmeziane",
    profession: "PhD Student at UPHF and IBM Research Intern",
    description: "A tale of foundation models and tiny hardware",
    img: hadjer,
  },
  {
    id: 11,
    name: "Taha Rouabah",
    profession: "Founder and PI of Constantine Quantum Technologies",
    description:
      "Quantum Machine Learning with Francesco Petruccione and Matthias Troyer",
    img: tahaR,
  },
  {
    id: 12,
    name: "Younes Bouhdjar",
    profession: "Doctoral Researcher at Jülich research center, Germany",
    description:
      "The neuronal mechanisms of sequence processing in biological networks",
    img: younes,
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
      "Higher National School of Computer Science (ESI) Oued Smar, Algiers",
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
    question: "When will AI Summit be ?",
    answer:
      "On Friday 16th December online and Saturday 17th December in-person.",
  },
  {
    question: "Where will it take place ?",
    answer:
      "The in-person side of the event will take place at the Higher National School for Artificial Intelligence (ENSIA).",
  },
  {
    question: "Who can participate ?",
    answer:
      "Everyone is welcome to attend the AI Summit talks either on Friday or Saturday or both.",
  },
  {
    question: "How can I register ?",
    answer:
      "Click on the register button on the top right corner of the website and fill the form.",
  },
];

// Agenda times and activity
export const agendaSatP = [
  {
    start: "08:00",
    end: "09:00",
    activity: "Check In",
  },
  {
    start: "09:00",
    end: "09:30",
    activity: "Opening Ceremony",
  },
  {
    start: "09:30",
    end: "09:45",
    activity: "Launching talks",
  },
  {
    start: "09:45",
    end: "10:45",
    activity: "Talk with Noha Nekamiche",
  },
  {
    start: "11:00",
    end: "12:00",
    activity: "Talk with Taha Arbaoui",
  },
  {
    start: "12:00",
    end: "13:15",
    activity: "Break",
  },
  {
    start: "13:15",
    end: "14:15",
    activity: "Talk with Yousra Bouakba",
  },
  {
    start: "14:30",
    end: "15:30",
    activity: "Talk with El Kindi Rezig",
  },
  {
    start: "15:30",
    end: "16:20",
    activity: "Coffee Break",
  },
  {
    start: "16:20",
    end: "16:45",
    activity: "Closing Ceremony",
  },
];

export const agendaSatO = [
  {
    start: "10:00",
    end: "11:00",
    activity: "Talk with Francesco Petruccione and Taha Rouabah",
  },
  {
    start: "13:00",
    end: "14:00",
    activity: "Talk with Matthias Troyer and Taha Rouabah",
  },
];

export const agendaFri = [
  {
    start: "15:30",
    end: "16:30",
    activity: "Talk with Mohamed Amine Merzouk",
  },
  {
    start: "16:45",
    end: "17:45",
    activity: "Talk with Hadjer Benmeziane",
  },
  {
    start: "18:15",
    end: "19:15",
    activity: "Talk with Azzeddine Chenine",
  },
  {
    start: "19:30",
    end: "20:30",
    activity: "Talk with Imane Guellil",
  },
  {
    start: "20:30",
    end: "21:30",
    activity: "Talk with Younes Bouhdjar",
  },
];
