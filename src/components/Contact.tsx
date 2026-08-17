import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import "../assets/styles/About.scss";

interface AboutDetail {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const aboutDetails: AboutDetail[] = [
  {
    icon: <PlaceIcon />,
    title: "Provenienza",
    value: "Sapri (SA)"
  },
  {
    icon: <SchoolIcon />,
    title: "Formazione",
    value: "Laureando magistrale in Informatica"
  },
  {
    icon: <CodeIcon />,
    title: "Passione",
    value: "Informatica e cybersecurity"
  },
  {
    icon: <WorkIcon />,
    title: "Obiettivo",
    value: "Crescere e lavorare nel settore IT"
  }
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="items-container">
        <div className="about-wrapper">
          <div className="about-heading">
            <span className="about-label">QUALCOSA SU DI ME</span>

            <h1>About Me</h1>

            <p className="about-introduction">
              Il percorso che mi ha portato a scoprire la mia passione per
              l'informatica.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-story">
              <div className="about-paragraph">
                <span className="paragraph-number">01</span>

                <p>
                  Sono un ragazzo di 24 anni originario di Sapri e nutro una
                  profonda passione per l'informatica, scoperta durante il mio
                  percorso universitario. La mia storia, tuttavia, è iniziata
                  in modo molto diverso.
                </p>
              </div>

              <div className="about-paragraph">
                <span className="paragraph-number">02</span>

                <p>
                  Da bambino non ho avuto un rapporto semplice con lo studio e,
                  durante il primo anno di liceo scientifico, ho affrontato una
                  bocciatura. Ho scelto però di non arrendermi, proseguendo il
                  percorso fino al conseguimento del diploma. Parallelamente
                  agli studi liceali ho lavorato come pizzaiolo, esperienza che
                  ho portato avanti fino all'età di 19 anni e che mi ha
                  insegnato responsabilità, sacrificio e capacità di lavorare
                  sotto pressione.
                </p>
              </div>

              <div className="about-paragraph">
                <span className="paragraph-number">03</span>

                <p>
                  Quando ho iniziato l'università non avevo ancora ben chiaro
                  quale sarebbe stato il mio futuro. L'incontro con
                  l'informatica ha cambiato completamente la mia prospettiva,
                  permettendomi di scoprire ciò che mi appassiona davvero. Non
                  mi sono innamorato soltanto della programmazione e degli
                  algoritmi, ma anche della teoria della computazione, della
                  sicurezza informatica e delle sfide logiche e tecniche che
                  questa disciplina pone continuamente.
                </p>
              </div>

              <div className="about-paragraph">
                <span className="paragraph-number">04</span>

                <p>
                  Oggi considero il percorso compiuto, comprese le difficoltà
                  iniziali, una parte fondamentale della persona che sono
                  diventato. In futuro desidero portare nel mondo del lavoro la
                  stessa determinazione e lo stesso entusiasmo che hanno
                  caratterizzato la mia crescita, condividendo la passione per
                  l'informatica con le persone che lavoreranno al mio fianco e
                  contribuendo alla costruzione di un team competente,
                  collaborativo e motivato.
                </p>
              </div>
            </div>

            <aside className="about-sidebar">
              <div className="about-quote">
                <span className="quote-mark">“</span>

                <p>
                  Le difficoltà iniziali non hanno definito il mio futuro, ma
                  hanno contribuito a costruire la mia determinazione.
                </p>
              </div>

              <div className="about-details">
                {aboutDetails.map((detail) => (
                  <div className="about-detail" key={detail.title}>
                    <div className="detail-icon">
                      {detail.icon}
                    </div>

                    <div className="detail-content">
                      <span>{detail.title}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;