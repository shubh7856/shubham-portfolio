import React from 'react';
import './Skills.css';
import skills from '../data/skills';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconMap = {
  FaHtml5: <FaHtml5 className="skill-icon" />,
  FaCss3Alt: <FaCss3Alt className="skill-icon" />,
  IoLogoJavascript: <IoLogoJavascript className="skill-icon" />,
  FaReact: <FaReact className="skill-icon" />,
  FaNodeJs: <FaNodeJs className="skill-icon" />,
  SiTypescript: <SiTypescript className="skill-icon" />,
  FaGithub: <FaGithub className="skill-icon" />,
  SiGraphql: <SiGraphql className="skill-icon" />,
  FaPython: <FaPython className="skill-icon" />,
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{ backgroundColor: skill.color }}
          >
            {iconMap[skill.icon]}
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
