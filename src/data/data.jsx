import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import speaker_img from "../assets/cool_speaker.jpg";

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
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 2,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 3,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 4,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 5,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 6,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 7,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
  {
    id: 8,
    name: "Aouinane Moussa",
    profession: "Data Scientist",
    description: "Ecole Nationale D'informatique",
    img: speaker_img,
  },
];

//social media list of components
export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/SchoolofAIAlgiers/",
    icon: <FaFacebook size={30}></FaFacebook>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soai_algiers",
    icon: <FaInstagram size={30}></FaInstagram>,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/school-of-ai-algiers/",
    icon: <FaLinkedin size={30}></FaLinkedin>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/soaialgiers",
    icon: <FaTwitter size={30}></FaTwitter>,
  },
  {
    name: "Youtube",
    link: "https://m.youtube.com/channel/UChFa3XnZYZ94tkjfJ5CnPOA",
    icon: <FaYoutube size={30}></FaYoutube>,
  },
];
