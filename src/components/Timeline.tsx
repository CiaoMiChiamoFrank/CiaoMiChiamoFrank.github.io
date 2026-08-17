import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Formazione</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)"
            }}
            contentArrowStyle={{
              borderRight: "7px solid white"
            }}
            date="Ottobre 2024 - In corso"
            iconStyle={{
              background: "#5000ca",
              color: "white"
            }}
            icon={
              <FontAwesomeIcon icon={faGraduationCap} />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Laurea Magistrale in Informatica
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Curriculum Sicurezza – LM-18
            </h4>

            <p>
              Università degli Studi di Salerno.
              Percorso attualmente in corso con una media di 29,5/30.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)"
            }}
            contentArrowStyle={{
              borderRight: "7px solid white"
            }}
            date="Ottobre 2021 - Ottobre 2024"
            iconStyle={{
              background: "#5000ca",
              color: "white"
            }}
            icon={
              <FontAwesomeIcon icon={faGraduationCap} />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Laurea Triennale in Informatica
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Classe L-31
            </h4>

            <p>
              Università degli Studi di Salerno.
              Titolo conseguito con votazione finale di 103/110.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;