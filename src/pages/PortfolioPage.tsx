import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  CardMedia,
  Button,
  Modal,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Close,
  ArrowBack,
  ArrowForward,
  Business,
  Home,
  FlashOn,
  ElectricalServices,
  Construction,
  CellTower,
} from "@mui/icons-material";

// Portfolio categories and items
const portfolioData = {
  residential: {
    title: "Instalații Rezidențiale",
    icon: <Home />,
    description:
      "Lucrări complete de instalații electrice pentru locuințe și apartamente",
    items: [
      {
        id: "rez-1",
        title: "Instalare corpuri de iluminat casa Mosnita Noua",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-1/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/8.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/9.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-1/10.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-2",
        title: "Panou electric separare coloane casa - IZVIN",
        description: "",
        images: ["/portofoliu/instalatiiRezidentiale/rez-2/1.jpg"],
        client: "",
        location: "",
      },
      {
        id: "rez-3",
        title:
          "Realizare impamantare artificiala + refacere panou electric casa Remetea Mare",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-3/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-3/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-3/3.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-4",
        title:
          "Realizare impamantare artificiala+iluminat parcare bloc locuinte",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-4/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-4/7.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-5",
        title:
          "Realizare inlocuire apartament cu 3 camere panou electric si adaugare circuite noi Circumvalatiunii",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-5/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-5/2.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-6",
        title:
          "Realizare instalatie electrica apartament 2 camere structura caramida",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-6/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/8.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/9.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/10.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-6/11.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-7",
        title: "Realizare instalatie electrica birou- Ferendia jud Timis",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-7/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-7/8.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-8",
        title: "Realizare instalatie electrica casa Dr.Tr.Severin",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-8/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-8/8.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-9",
        title: "Realizare instalatie electrica casa Giarmata Vii",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-9/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/8.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/9.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/10.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/11.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-9/12.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-10",
        title: "Realizare instalatie electrica casa noua DUMBRAVITA",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-10/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/8.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/9.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/10.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/11.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/12.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/13.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/14.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/15.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/16.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/17.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/18.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-10/19.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-11",
        title: "Realizare instalatie electrica casa Remetea Mare",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-11/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-11/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-11/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-11/4.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-12",
        title:
          "Realizare instalatie electrica pe tavan cu cablu  NYM-J apartament 3 camere - zona olimpia",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-12/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-12/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-12/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-12/4.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-13",
        title:
          "Realizare instalatie electrica si realizare panou electrci casa veche+realizare impamantare in adancime- sat Cralovat",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-13/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-13/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-13/3.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-14",
        title:
          "Realizare refacere panou electric apartament bloc caramida an 1910- Zona N,Titulescu",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-14/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-14/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-14/3.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-15",
        title: "Realizare sistem paratraznet casa Giarmata Vii",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-15/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-15/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-15/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-15/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-15/5.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-16",
        title:
          "Realizare traseu jgheab metalic coloane alimentare apartamente bloc 110 Ap Dumbravita",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-16/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-16/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-16/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-16/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-16/5.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-17",
        title:
          "Refacere instalatie electrica apartament 3 camere structura beton zona DACIA",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-17/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-17/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-17/3.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-18",
        title:
          "Refacere instalatie electrica garsoniera Zona Nicolae Titulescu",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-18/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/4.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/5.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/6.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/7.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/8.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/9.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/10.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/11.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/12.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/13.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/14.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/15.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/16.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/17.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-18/18.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-19",
        title:
          "Refacere panou electric neconform apartament 2 camere -Zona Dambovita",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-19/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-19/2.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-20",
        title:
          "Refacere panou electric neconform apartament 2 camere -Zona Dambovita",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-20/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-20/2.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-21",
        title: "Refacere panou electric vechi apartament",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-21/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-21/2.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "rez-22",
        title:
          "Verificare instalatie electrica si punere in functiune la finalizarea instalatiei electrice",
        description: "",
        images: [
          "/portofoliu/instalatiiRezidentiale/rez-22/1.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-22/2.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-22/3.jpg",
          "/portofoliu/instalatiiRezidentiale/rez-22/4.jpg",
        ],
        client: "",
        location: "",
      },
    ],
  },
  commercial: {
    title: "Instalații Comerciale",
    icon: <Business />,
    description:
      "Soluții electrice complete pentru spații comerciale și birouri",
    items: [
      {
        id: "com-1",
        title:
          "Realizare circuite electrice pe structura de lemn spatiu comercial",
        description: "",
        images: [
          "/portofoliu/InterventiiComerciale/com-1/1.jpg",
          "/portofoliu/InterventiiComerciale/com-1/2.jpg",
          "/portofoliu/InterventiiComerciale/com-1/3.jpg",
          "/portofoliu/InterventiiComerciale/com-1/4.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "com-2",
        title: "Realizare instalatie electrica hala industriala",
        description: "",
        images: [
          "/portofoliu/InterventiiComerciale/com-2/1.jpg",
          "/portofoliu/InterventiiComerciale/com-2/2.jpg",
          "/portofoliu/InterventiiComerciale/com-2/3.jpg",
          "/portofoliu/InterventiiComerciale/com-2/4.jpg",
          "/portofoliu/InterventiiComerciale/com-2/5.jpg",
          "/portofoliu/InterventiiComerciale/com-2/6.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "com-3",
        title:
          "Realizare instalatie electrica si impamantare artificiala spatiu comercial",
        description: "",
        images: [
          "/portofoliu/InterventiiComerciale/com-3/1.jpg",
          "/portofoliu/InterventiiComerciale/com-3/2.jpg",
          "/portofoliu/InterventiiComerciale/com-3/3.jpg",
          "/portofoliu/InterventiiComerciale/com-3/4.jpg",
          "/portofoliu/InterventiiComerciale/com-3/5.jpg",
          "/portofoliu/InterventiiComerciale/com-3/6.jpg",
          "/portofoliu/InterventiiComerciale/com-3/7.jpg",
          "/portofoliu/InterventiiComerciale/com-3/8.jpg",
          "/portofoliu/InterventiiComerciale/com-3/9.jpg",
          "/portofoliu/InterventiiComerciale/com-3/10.jpg",
          "/portofoliu/InterventiiComerciale/com-3/11.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "com-4",
        title: "Realizare panou electric spatiu Comercial Brutarie",
        description: "",
        images: ["/portofoliu/InterventiiComerciale/com-4/1.jpg"],
        client: "",
        location: "",
      },
      {
        id: "com-5",
        title:
          "Realizare traseu jgheab metalic+circuite electrice alimentare utilaje+panou electric distributie Giarmata",
        description: "",
        images: [
          "/portofoliu/InterventiiComerciale/com-5/1.jpg",
          "/portofoliu/InterventiiComerciale/com-5/2.jpg",
          "/portofoliu/InterventiiComerciale/com-5/3.jpg",
          "/portofoliu/InterventiiComerciale/com-5/4.jpg",
          "/portofoliu/InterventiiComerciale/com-5/5.jpg",
          "/portofoliu/InterventiiComerciale/com-5/6.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "com-6",
        title: "Verificari anuale si emitere buletin masura statie PECO-A1",
        description: "",
        images: [
          "/portofoliu/InterventiiComerciale/com-6/1.jpg",
          "/portofoliu/InterventiiComerciale/com-6/2.jpg",
          "/portofoliu/InterventiiComerciale/com-6/3.jpg",
          "/portofoliu/InterventiiComerciale/com-6/4.jpg",
        ],
        client: "",
        location: "",
      },
    ],
  },
  emergency: {
    title: "Intervenții de Urgență",
    icon: <FlashOn />,
    description: "Reparații rapide și sigure pentru situații de urgență",
    items: [
      {
        id: "urg-1",
        title: "Înlocuire Priză Carbonizată",
        description:
          "Înlocuirea de urgență a unei prize carbonizate care a provocat un scurtcircuit într-un complex rezidențial.",
        images: [
          "/portofoliu/interventiiRapide/urg-1/1.jpg",
          "/portofoliu/interventiiRapide/urg-1/2.jpg",
          "/portofoliu/interventiiRapide/urg-1/3.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Aradului",
      },
      {
        id: "urg-2",
        title: "Intervenție circuit cu probleme în șapă",
        description:
          "Identificarea și remedierea unui circuit electric defect care a provocat întreruperi frecvente în alimentarea cu energie electrică.",
        images: ["/portofoliu/interventiiRapide/urg-2/1.jpg"],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Circumvalatiunii",
      },
      {
        id: "urg-3",
        title:
          "Intervenție declanșare disjunctor general depășire putere instalată",
        description:
          "Localizarea și remedierea unei probleme de suprasarcină care declanșa disjunctorul general.",
        images: [
          "/portofoliu/interventiiRapide/urg-3/1.jpg",
          "/portofoliu/interventiiRapide/urg-3/2.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara",
      },
      {
        id: "urg-4",
        title: "Intervenție declanșare RCCBO GENERAL",
        description:
          "Repararea unei defecțiuni care declanșa dispozitivul de protecție RCCBO.",
        images: [
          "/portofoliu/interventiiRapide/urg-4/1.jpg",
          "/portofoliu/interventiiRapide/urg-4/2.jpg",
        ],
        client: "Complex rezidențial",
        location: "Timișoara, Zona Mosnita Veche",
      },
      {
        id: "urg-5",
        title: "Intervenție în regim de urgență",
        description:
          "Repararea unor circuite electrice afectate de un scurtcircuit ",
        images: [
          "/portofoliu/interventiiRapide/urg-5/1.jpg",
          "/portofoliu/interventiiRapide/urg-5/2.jpg",
        ],
        client: "Apartament 3 camere",
        location: "Timișoara, Centrala",
      },
      {
        id: "urg-6",
        title: "Intervenție la un panou electric vechi realizat neconform",
        description:
          "Remedierea unor defecte la un panou electric vechi, realizat neconform cu normele în vigoare",
        images: [
          "/portofoliu/interventiiRapide/urg-6/1.jpg",
          "/portofoliu/interventiiRapide/urg-6/2.jpg",
          "/portofoliu/interventiiRapide/urg-6/3.jpg",
          "/portofoliu/interventiiRapide/urg-6/4.jpg",
        ],
        client: "Apartament ",
        location: "Timișoara, Centrala",
      },
      {
        id: "urg-7",
        title: "Intervenție înlocuire priză clasică",
        description: "Înlocuire priză clasică cu priză în regim de urgență",
        images: [
          "/portofoliu/interventiiRapide/urg-7/1.jpg",
          "/portofoliu/interventiiRapide/urg-7/2.jpg",
          "/portofoliu/interventiiRapide/urg-7/3.jpg",
          "/portofoliu/interventiiRapide/urg-7/4.jpg",
        ],
        client: "Apartament",
        location: "Timișoara, Zona Lipovei",
      },
      {
        id: "urg-8",
        title: "Intervenție la un circuit de hotă străpuns",
        description:
          "Repararea unui circuit electric defect care alimenta o hotă de bucătărie",
        images: ["/portofoliu/interventiiRapide/urg-8/1.jpg"],
        client: "Apartament",
        location: "Timișoara, Zona Lipovei",
      },
      {
        id: "urg-9",
        title: "Identificare încărcări pe fază-zonă",
        description:
          "Identificarea și remedierea unor probleme de încărcare pe fază într-un spațiu de producție",
        images: ["/portofoliu/interventiiRapide/urg-9/1.jpg"],
        client: "Brutărie",
        location: "Timișoara, Zona Freidorf",
      },
      {
        id: "urg-10",
        title: "Refacere panou electric vechi",
        description:
          "Refacerea unui panou electric vechi, realizat neconform cu normele în vigoare",
        images: [
          "/portofoliu/interventiiRapide/urg-10/1.jpg",
          "/portofoliu/interventiiRapide/urg-10/2.jpg",
        ],
        client: "Apartament",
        location: "Timișoara, Zona Bucovinei",
      },
    ],
  },
  telecomProjects: {
    title: "Proiecte în Telecomunicații",
    icon: <CellTower />,
    description:
      "Implementare infrastructură și sisteme de telecomunicații performante",
    items: [
      {
        id: "tel-1",
        title:
          "Interventie inlocuire RRU Statie telefonie Mobila -Iarna Semenic",
        description: "",
        images: [
          "/portofoliu/interventiiTelecomunicatii/tel-1/1.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-1/2.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-1/3.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-1/4.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "tel-2",
        title: "Interventie refacere circuit fibra optica Semenic",
        description: "",
        images: [
          "/portofoliu/interventiiTelecomunicatii/tel-2/1.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-2/2.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-2/3.jpg",
        ],
        client: "",
        location: "",
      },
      {
        id: "tel-3",
        title: "Realizare retea structurata birouri",
        description: "",
        images: [
          "/portofoliu/interventiiTelecomunicatii/tel-3/1.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-3/2.jpg",
          "/portofoliu/interventiiTelecomunicatii/tel-3/3.jpg",
        ],
        client: "",
        location: "",
      },
    ],
  },
};

// Combine all portfolio items for the "All" category
const allPortfolioItems = [
  ...portfolioData.residential.items,
  ...portfolioData.commercial.items,
  ...portfolioData.emergency.items,
  ...portfolioData.telecomProjects.items,
];

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // State for modal
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle category change
  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setActiveCategory(newValue);
  };

  // Handle opening modal for a portfolio item
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setOpenModal(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Navigate to next image in modal
  const handleNextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Navigate to previous image in modal
  const handlePrevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Get current portfolio items based on active category
  const getCurrentItems = () => {
    if (activeCategory === "all") {
      return allPortfolioItems;
    }
    return (
      portfolioData[activeCategory as keyof typeof portfolioData]?.items || []
    );
  };

  return (
    <Box sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Card
          elevation={3}
          sx={{
            p: isMobile ? 0 : 3,
            mb: 4,
            borderRadius: 2,
            background: `linear-gradient(to right, ${theme.palette.colors.cream}, white)`,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                mb: 1,
                p: isMobile ? 3 : 0,
                color: theme.palette.colors.darkBlue,
                fontWeight: 600,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: `linear-gradient(to right, ${theme.palette.colors.darkBlue}, ${theme.palette.colors.dielectricRed})`,
                  borderRadius: "2px",
                },
              }}
            >
              Portofoliu Lucrări
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                mb: 5,
                p: isMobile ? 3 : 0,
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mt: 3,
              }}
            >
              Explorați galeria noastră de proiecte finalizate pentru a vedea
              calitatea și diversitatea lucrărilor realizate de echipa
              DIELECTRIC CUBE.
            </Typography>

            {/* Category Tabs */}
            <Paper
              elevation={2}
              sx={{
                borderRadius: 2,
                mb: 4,
                overflow: "hidden",
                border: `1px solid ${theme.palette.colors.darkBlue}`,
              }}
            >
              <Tabs
                value={activeCategory}
                onChange={handleCategoryChange}
                variant="fullWidth"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: theme.palette.colors.dielectricRed,
                    height: 3,
                  },
                  "& .MuiTab-root": {
                    fontWeight: 600,
                    py: 2,

                    minHeight: isSmall ? "auto" : 70,
                    minWidth: isMobile ? 0 : undefined,
                  },
                  "& .Mui-selected": {
                    color: `${theme.palette.colors.darkBlue} !important`,
                  },
                }}
              >
                <Tab
                  icon={<Construction />}
                  label="Toate"
                  value="all"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<Home />}
                  label="Rezidențiale"
                  value="residential"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<Business />}
                  label="Comerciale"
                  value="commercial"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<FlashOn />}
                  label="Urgențe"
                  value="emergency"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
                <Tab
                  icon={<CellTower />}
                  label="Telecom"
                  value="telecomProjects"
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{ fontSize: isSmall ? "0.6rem" : "0.9rem" }}
                />
              </Tabs>
            </Paper>

            {/* Category Description */}
            {activeCategory !== "all" && (
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  mb: 4,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.colors.lightBlue}`,
                  backgroundColor: "rgba(245, 245, 245, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    bgcolor: theme.palette.colors.darkBlue,
                    p: 1,
                    borderRadius: "50%",
                    display: "flex",
                  }}
                >
                  {
                    portfolioData[activeCategory as keyof typeof portfolioData]
                      ?.icon
                  }
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.colors.darkBlue,
                      fontWeight: 600,
                    }}
                  >
                    {
                      portfolioData[
                        activeCategory as keyof typeof portfolioData
                      ]?.title
                    }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {
                      portfolioData[
                        activeCategory as keyof typeof portfolioData
                      ]?.description
                    }
                  </Typography>
                </Box>
              </Paper>
            )}

            {/* Portfolio Items Grid */}
            <Grid container spacing={3}>
              {getCurrentItems().map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    elevation={2}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                      border: `1px solid ${
                        index % 2 === 0
                          ? theme.palette.colors.darkBlue
                          : theme.palette.colors.dielectricRed
                      }`,
                      overflow: "hidden",
                    }}
                  >
                    {/* Thumbnail Image */}
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.images[0]}
                      alt={item.title}
                      sx={{
                        objectFit: "cover",
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleOpenModal(item)}
                        startIcon={<ElectricalServices />}
                        fullWidth
                        sx={{
                          mt: "auto",
                          borderColor:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          color:
                            index % 2 === 0
                              ? theme.palette.colors.darkBlue
                              : theme.palette.colors.dielectricRed,
                          "&:hover": {
                            borderColor:
                              index % 2 === 0
                                ? theme.palette.colors.darkBlue
                                : theme.palette.colors.dielectricRed,
                            backgroundColor:
                              index % 2 === 0
                                ? "rgba(19, 49, 92, 0.05)"
                                : "rgba(196, 30, 58, 0.05)",
                          },
                        }}
                      >
                        Vezi detalii
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Empty state when no items */}
            {getCurrentItems().length === 0 && (
              <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h6" color="text.secondary">
                  Nu există proiecte în această categorie momentan.
                </Typography>
              </Box>
            )}

            {/* Detail View Modal */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="portfolio-modal-title"
              aria-describedby="portfolio-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: isMobile ? "95%" : "80%",
                  maxWidth: "900px",
                  maxHeight: "90vh",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  overflow: "auto",
                  p: 0,
                }}
              >
                {selectedItem && (
                  <>
                    {/* Modal Header */}
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: theme.palette.colors.darkBlue,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h2"
                        id="portfolio-modal-title"
                      >
                        {selectedItem.title}
                      </Typography>
                      <IconButton
                        onClick={handleCloseModal}
                        size="small"
                        sx={{ color: "white" }}
                      >
                        <Close />
                      </IconButton>
                    </Box>

                    {/* Image Gallery */}
                    <Box sx={{ position: "relative" }}>
                      <Box
                        component="img"
                        src={selectedItem.images[currentImageIndex]}
                        alt={`${selectedItem.title} - imagine ${
                          currentImageIndex + 1
                        }`}
                        sx={{
                          width: "100%",
                          height: isMobile ? "250px" : "400px",
                          objectFit: "cover",
                        }}
                      />

                      {/* Image Navigation */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          px: 2,
                        }}
                      >
                        <IconButton
                          onClick={handlePrevImage}
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                          }}
                        >
                          <ArrowBack />
                        </IconButton>
                        <IconButton
                          onClick={handleNextImage}
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
                          }}
                        >
                          <ArrowForward />
                        </IconButton>
                      </Box>

                      {/* Image Pagination */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: 1,
                          bgcolor: "rgba(0,0,0,0.5)",
                          borderRadius: 5,
                          p: 0.5,
                        }}
                      >
                        {selectedItem.images.map((_: string, i: number) => (
                          <Box
                            key={i}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor:
                                i === currentImageIndex
                                  ? "white"
                                  : "rgba(255,255,255,0.5)",
                              cursor: "pointer",
                            }}
                            onClick={() => setCurrentImageIndex(i)}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        id="portfolio-modal-description"
                        paragraph
                      >
                        {selectedItem.description}
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      {/* Details */}
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Client:
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {selectedItem.client}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Locație:
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {selectedItem.location}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                )}
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PortfolioPage;
