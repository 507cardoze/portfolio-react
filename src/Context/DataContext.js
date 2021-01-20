import { useState, createContext } from "react";
import logo from "../img/telematica.png";
import imgSVG from "../img/intro-img.svg";
import imgBG from "../img/intro-bg.jpg";
import aboutImage from "../img/about-img.jpg";
import aboutImage2 from "../img/about2-img.jpg";
import SISGED from "../img/notas.jpeg";
import ESU from "../img/encuesta-logo.png";
import PMA from "../img/mesa.png";
import DTA from "../img/dirtel.png";
import PNC from "../img/cloud.png";
import EMAIL from "../img/correo.png";
import BSCW from "../img/bswc.png";
import PAG from "../img/valenzuela.png";
import SAGI from "../img/sagi.png";
import POWERPOINT from "../img/logo-power-point.jpg";
import VIDEOPLACEHOLDER from "../img/placeholder.png";
import PPTXPNC from "../files/Plataforma nube colaborativa.pptx";
import PPSXSISGED from "../files/Presentacion Programa nuevo.ppsx";
import VIDEOSISGED from "../files/video_notas_VP8.webm";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const dataSource = {
    header: {
      logo: logo,
      logoTitle: "DINATEL",
      supportEmail: "soporte.tecnico@aeronaval.gob.pa",
      footer: {
        direccion: "DINATEL",
        departamento: "Dept. de Informática",
        seccion: "Sección Desarrollo de Software",
        email: "soporte.tecnico@aeronaval.gob.pa",
      },
    },
    intro: {
      background: imgBG,
      image: imgSVG,
      alt: "imagen-complemento",
      title1: `Dirección Nacional de Telemática a tu`,
      title2: ` servicio!`,
      grayButtonText: "¡Comencemos!",
      blueButtonText: "Nuestro Portafolio",
    },
    about: {
      images: [
        {
          src: aboutImage,
          alt: "imagen-1",
        },
        {
          src: aboutImage2,
          alt: "imagen-2",
        },
      ],
      text: {
        primary: {
          title: "MISIÓN",
          subTitle: "Comunicando a la institución",
          mainParagrah: `Planificar, organizar, dirigir y controlar los sistemas de telecomunicaciones el desarrollo informático institucional en los ámbitos técnicos y de entrenamiento informático.`,
          subParagrah: `Planear, desarrollar, implantar y mantener los servicios de tecnología de información, contribuyendo con la transformación de los procesos administrativos y operacionales de nuestra institución.`,
        },
        secondary: {
          title: "OBJETIVO",
          subTitle: "Comunicando a la institución",
          mainParagrah: `Innovar con nuevas tecnologías en el ámbito de las comunicaciones e informática, a fin de optimizar el uso de los recursos disponibles para la ejecución de tareas administrativas y/o tácticas operativas a través de la red tecnológica del SENAN.`,
          subParagrah: `Gestionar, administrar, evaluar y mantener los recursos tecnológicos que aumenten las capacidades administrativas y operacionales de la institución, así como garantizar el buen funcionamiento y uso de sus componentes tecnológicos.`,
        },
      },
    },
    departments: {
      mainTitle: "Departamentos",
      mainDescription:
        "Estas son las distintas unidades operacionales que conforman nuestra prestigiosa dirección.",
      departmentItems: [
        {
          layout: {
            md: 4,
            lg: 4,
          },
          background: "#fceef3",
          icon: "ion-android-desktop",
          iconColor: "#ff689b",
          title: "Informática",
          description:
            "Emplear los medios tecnológicos de avanzada y el desarrollo de los sistemas de información  para desarrollar, administrar y actualizar la red de comunicaciones de voz, data, e internet, a fin de facilitar las tareas específicas de cada área administrativa u operacional.",
          id: 1,
        },
        {
          layout: {
            md: 4,
            lg: 4,
          },
          background: "#fff0da",
          icon: "ion-android-lock",
          iconColor: "#e98e06",
          title: "Seguridad",
          description:
            "Mantener la Integridad, Disponibilidad, Privacidad, Control y Autenticidad de la información, sistemas, infraestructura de red y comunicación; asegurando y/o protegiendo la información de la institución en cualquier forma en la que se encuentre",
          id: 2,
        },

        {
          layout: {
            md: 4,
            lg: 4,
          },
          background: "#e6fdfc",
          icon: "ion-wifi",
          iconColor: "#3fcdc7",
          title: "Redes e Infraestructura",
          description:
            "Planificar, organizar, coordinar y realizar tareas de suministro, instalación y mantenimiento de los sistemas de redes de datos, imagen y voz en formatos análogos, digital, radioenlace, satelital u otra tecnología innovadora que demande el establecimiento, ampliación de la plataforma de teleinformática que facilite el desarrollo de la misión institucional.",
          id: 3,
        },
        {
          layout: {
            md: 6,
            lg: 6,
          },
          background: "#e6fdfc",
          icon: "ion-android-map",
          iconColor: "#3fcdc7",
          title: "Vigilancia Territorial",
          description:
            "Gestionar, Administrar y mantener los recursos tecnológicos de vigilancia, para fortalecer la protección de los espacios jurisdiccionales de competencia aeronaval a fin de facilitar el proceso de toma de decisiones que contribuyan a garantizar la seguridad pública.",
          id: 4,
        },
        {
          layout: {
            md: 6,
            lg: 6,
          },
          background: "#fff0da",
          icon: "ion-android-call",
          iconColor: "#3fcdc7",
          title: "Comunicaciones",
          description:
            "Estructurar una red de comunicaciones que permita la transmisión de la información aire, mar y tierra,a través de medios tecnológicos modernos, a fin de obtener resultados eficientes y efectivos en las operaciones aeronavales.",
          id: 5,
        },
      ],
    },
    portfolio: {
      sectionTitle: "Portafolio de trabajo",
      porfolioFilterList: ["Todos", "Sistemas", "Herramientas", "Tutoriales"],
      appItems: [
        {
          id: 1,
          image: SISGED,
          name: "SISGED",
          description: "Sistema de Documentación",
          tag: ["Todos", "Sistemas"],
          URL: `http://10.2.11.7/notas`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 12,
          image: SAGI,
          name: "SAGI",
          description: "Sistema Aeronaval para la Gestión de Indicadores",
          tag: ["Todos", "Sistemas"],
          URL: `http://10.2.11.7:5003`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 2,
          image: ESU,
          name: "ESU",
          description: "Satisfacción del Usuario",
          tag: ["Todos", "Sistemas"],
          URL: `http://encuesta.aeronaval.gob.pa/`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 3,
          image: PMA,
          name: "PMA",
          description: "Plataforma de Mesa de Ayuda",
          tag: ["Todos", "Herramientas"],
          URL: `http://10.2.11.5/glpi/`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 4,
          image: DTA,
          name: "DTA",
          description: "Directorio Telefonico Aeronaval",
          tag: ["Todos", "Herramientas"],
          URL: `http://10.2.11.7:3000`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 5,
          image: PNC,
          name: "PNC",
          description: "Plataforma Nube Colaborativa",
          tag: ["Todos", "Herramientas"],
          URL: `http://10.2.11.200/nextcloud`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 6,
          image: EMAIL,
          name: "Correo Electrónico",
          description: "Plataforma de Correo Electrónico Corporativos",
          tag: ["Todos", "Herramientas"],
          URL: `https://mail.aeronaval.gob.pa/`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 7,
          image: BSCW,
          name: "BSCW",
          description: "Shared Workspace Server",
          tag: ["Todos", "Sistemas"],
          URL: `https://senan-bscw.aeronaval.gob.pa/pub/`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 8,
          image: PAG,
          name: "PAG",
          description: "Plataforma de Gestion Aeronaval",
          tag: ["Todos", "Sistemas"],
          URL: `http://10.2.11.7/`,
          media: {
            src: "",
            type: "",
          },
        },
        {
          id: 9,
          image: POWERPOINT,
          name: "SISGED",
          description: "PowerPoint tutorial",
          tag: ["Tutoriales"],
          media: {
            src: PPSXSISGED,
            type: "",
            isDownloable: true,
          },
        },
        {
          id: 10,
          image: VIDEOPLACEHOLDER,
          name: "SISGED",
          description: "Video tutorial",
          tag: ["Tutoriales"],
          media: {
            src: VIDEOSISGED,
            type: "video/webm",
          },
        },
        {
          id: 11,
          image: POWERPOINT,
          name: "PNC",
          description: "Video tutorial ",
          tag: ["Tutoriales"],
          media: {
            src: PPTXPNC,
            type: "",
            isDownloable: true,
          },
        },
      ],
    },
  };
  const [data, setData] = useState(dataSource);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
