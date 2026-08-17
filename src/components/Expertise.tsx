import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShieldHalved,
    faCode
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const cybersecuritySkills = [
    "Kali Linux",
    "Burp Suite",
    "OWASP WSTG",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Hashcat",
    "CTF"
];

const developmentSkills = [
    "Java",
    "Python",
    "C/C++",
    "JavaScript",
    "React",
    "Express",
    "Flask",
    "Tailwind CSS"
];

const blockchainSkills = [
    "Solidity",
    "Ethereum",
    "MongoDB",
    "MySQL",
    "Oracle",
    "MERN Stack"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Competenze</h1>

                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faShieldHalved}
                            size="3x"
                        />

                        <h3>Cybersecurity</h3>

                        <p>
                            Competenze pratiche maturate attraverso attività
                            accademiche di penetration testing e security
                            assessment. Esperienza nell’analisi di vulnerabilità
                            di applicazioni web mediante Kali Linux, Burp Suite
                            e metodologia OWASP WSTG.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tecnologie e strumenti:
                            </span>

                            {cybersecuritySkills.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faCode}
                            size="3x"
                        />

                        <h3>Software & Web Development</h3>

                        <p>
                            Sviluppo di applicazioni web frontend e backend,
                            sia autonomamente sia in team. Esperienza con Flask
                            e stack MERN, documentazione software e realizzazione
                            di un prototipo PiCar-X con object detection.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Linguaggi e framework:
                            </span>

                            {developmentSkills.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon
                            icon={faEthereum}
                            size="3x"
                        />

                        <h3>Blockchain & Database</h3>

                        <p>
                            Progettazione e sviluppo di Amethyst, un social
                            network decentralizzato basato su blockchain, con
                            smart contract in Solidity e integrazione tra
                            MongoDB e la rete Ethereum.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tecnologie:
                            </span>

                            {blockchainSkills.map((label) => (
                                <Chip
                                    key={label}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;