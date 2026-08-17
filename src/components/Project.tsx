import React from "react";
import "../assets/styles/Project.scss";

interface ProjectData {
  title: string;
  description: string;
  images: string[];
  videos: string[];
  repository?: string;
}

interface ProjectMediaProps {
  project: ProjectData;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const projects: ProjectData[] = [
  {
    title: "Penetration Testing - OWASP Juice Shop",
    description:
      "Ho svolto un attività strutturata di penetration testing sull applicazione OWASP Juice Shop, seguendo la metodologia OWASP WSTG. Ho utilizzato Kali Linux e Burp Suite per analizzare l applicazione, intercettare le richieste HTTP e verificare vulnerabilità relative ad autenticazione, autorizzazione, validazione degli input e sicurezza delle API. Ho documentato metodologia, risultati e possibili contromisure.",
    images: [
      "https://res.cloudinary.com/dif1ebwyb/image/upload/v1786983271/juice-shop-security-questions-hq_hdvcll.png"
    ],
    videos: []
  },
  {
    title: "Amethyst",
    description:
      "Ho progettato e sviluppato autonomamente un social network decentralizzato full-stack per gli esami di Sicurezza dei Dati e Database II. Realizzata con lo stack MERN, l’applicazione integra MongoDB con una blockchain Ethereum locale configurata tramite Hardhat e utilizza MetaMask per la gestione del portafoglio digitale. Gli utenti ricevono Purple Coin attraverso le interazioni con la piattaforma e possono utilizzarli al suo interno oppure convertirli in valuta reale.",
    images: [],
    videos: [
      "https://res.cloudinary.com/dif1ebwyb/video/upload/v1786980740/WhatsApp_Video_2026-08-17_at_17.30.04_ix9bpc.mp4"
    ]
  },
  {
    title: "Autopilot PiCar-X",
    description:
      "Sviluppo di un prototipo di guida intelligente per PiCar-X, con object detection per il riconoscimento degli ostacoli e il controllo autonomo del veicolo.",
    images: [],
    videos: [
      "https://res.cloudinary.com/dif1ebwyb/video/upload/v1786981448/WhatsApp_Video_2026-08-17_at_17.40.58_xxql98.mp4",
      "https://res.cloudinary.com/dif1ebwyb/video/upload/v1786981450/WhatsApp_Video_2026-08-17_at_17.40.41_bqjdbu.mp4"
    ]
  },
  {
    title: "Hellishstorm",
    description:
      "Ho progettato e sviluppato autonomamente un sito web per Hellishstorm, un brand emergente, occupandomi della progettazione dell’interfaccia e dell’implementazione delle funzionalità. Il progetto è stato completato, ma non è attualmente disponibile online.",
    images: [
      "https://res.cloudinary.com/dif1ebwyb/image/upload/v1786981789/hellishstorm-home-hq_f78cp8.png",
      "https://res.cloudinary.com/dif1ebwyb/image/upload/v1786981586/hellishstorm-catalogo-hq_1_kskdww.png"
    ],
    videos: []
  },
  {
    title: "UniRentHub",
    description:
      "Progetto per l'esame di Ingegneria del Software: consiste nella creazione di un software e nella produzione di una documentazione di qualità che illustri le caratteristiche e le tecnologie utilizzate durante la creazione del software; progetto svolto in un team composto da 6 membri.",
    repository: "https://github.com/sudo-poweroff/UniRentHub",
    images: [
      "https://res.cloudinary.com/dif1ebwyb/image/upload/v1786981710/unirenthub-home-hq_r6v2st.png",
      "https://res.cloudinary.com/dif1ebwyb/image/upload/v1786981719/unirenthub-dettaglio-alloggio-hq_gob11l.png"
    ],
    videos: []
  }
];

function ProjectMedia({ project }: ProjectMediaProps) {
  const mediaCount = project.images.length + project.videos.length;

  if (mediaCount === 0) {
    return null;
  }

  return (
    <div
      className={`project-gallery ${
        mediaCount === 1 ? "single-media" : ""
      }`}
    >
      {project.images.map((image: string, index: number) => (
        <div
          key={`${project.title}-image-${index}`}
          className="project-media-wrapper"
        >
          <img
            src={image}
            className="project-media"
            alt={`${project.title} - schermata ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}

      {project.videos.map((video: string, index: number) => (
        <div
          key={`${project.title}-video-${index}`}
          className="project-media-wrapper"
        >
          <video
            className="project-media"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label={`${project.title} - video ${index + 1}`}
          >
            Il browser non supporta la riproduzione video.
          </video>
        </div>
      ))}
    </div>
  );
}

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Progetti</h1>

      <div className="projects-grid">
        {projects.map((project: ProjectData) => (
          <article
            className={`project project-${slugify(project.title)}`}
            key={project.title}
          >
            <ProjectMedia project={project} />

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Project;
