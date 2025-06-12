import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail, Linkedin, Monitor, Award, Github, User, Calendar, Settings, Code, Star, } from "lucide-react";

import Logo from "../../public/Logo NR roxo.png";
import Perfil from "../../public/foto-perfil-celular.png";
import Me from "../../public/photo-nathalia.jpg";
import AWS from "../../public/AWS-Certified.PNG";

const Index = () => {
  const experiences = [
    {
      company: "MODBLUE",
      position: "Junior Developer",
      period: "May 2025 - Present",
      icon: Monitor,
    },
    {
      company: "Compass UOL",
      position: "Trainee Frontend Developer",
      period: "May 2024 - Nov 2024",
      icon: Monitor,
    },
    {
      company: "Compass UOL",
      position: "Intern in Front-end Development (React)",
      period: "Nov 2023 - Apr 2024",
      icon: Monitor,
    },
  ];

  const academics = [
    {
      degree: "MBA in Project Management",
      institution: "Gran University",
      year: "2025",
    },
    {
      degree: "Analysis and System Development",
      institution: "SENAC DF University of Technology",
      year: "2024",
    },
    {
      degree: "Architecture and Urbanism",
      institution: "Unieuro University",
      year: "2019",
    },
  ];

  const skills = [
    "HTML",
    "TypeScript",
    "Figma",
    "Others",
    "CSS",
    "JavaScript",
    "React Native",
    "English",
    "JavaScript",
    "React",
    "Kotlin",
    "Spanish",
  ];

  const testimonials = [
    {
      name: "Tech Lead - Senior Software Engineer",
      text: "I had the pleasure of working with Nathalia for over two years. As a principal engineer, I mentored her on various technical challenges, and I was consistently impressed by her proactive approach and dedication to delivering high-quality solutions. Nathalia demonstrates strong problem-solving skills, excellent communication, and a genuine passion for continuous learning. She consistently takes initiative, collaborates effectively with cross-functional teams, and delivers exceptional results. Her technical expertise, combined with her positive attitude and strong work ethic, makes her a valuable asset to any development team.",
    },
    {
      name: "Technical Lead at Software Development",
      text: "I worked with Nathalia for over a year and can recommend her capabilities as a web developer. Her work shows deep technical knowledge and attention to detail, consistently delivering high-quality code and user-friendly interfaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Portfolio Logo NR"
              className="h-8 w-auto sm:h-10 md:h-12 object-contain"
            />
            {/* <span className="text-2xl font-bold">Nathália Portfolio</span> */}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-purple-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <img src={Perfil} alt="Photo perfil Nathalia" />
                {/* <User className="w-10 h-10" /> */}
              </div>
              <div>
                <h1 className="text-2xl font-bold">Nathalia Rodrigues</h1>
                <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full inline-block mt-2">
                  Frontend Web Developer
                </div>
                <p className="text-gray-400 mt-2">
                  Web developer specialized in modern web technologies and user
                  experience.
                </p>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2">
              View Github
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Hello, I'm Nathalia.</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creative problem solver passionate about building elegant solutions
            that combine functionality with outstanding user experience.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            Contact Me
          </Button>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <img src={Me} alt="Photo Nathalia" />
                {/* <User className="w-32 h-32 text-gray-600" /> */}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">About Me</h3>
              <p className="text-gray-400 mb-8">
                Passionate developer with expertise in modern technologies
              </p>

              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">
                    Personal Description
                  </h4>
                  <p className="text-gray-300">
                    I'm a dedicated web developer with a passion for crafting
                    beautiful and functional web applications. My journey in
                    tech has been driven by curiosity and a love for solving
                    complex problems.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">
                    Professional Objective
                  </h4>
                  <p className="text-gray-300">
                    To leverage my technical skills and creative mindset to
                    build innovative solutions that make a positive impact on
                    users' lives while continuously growing as a developer and
                    team player.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-4xl font-bold mb-4">Professional Experience</h3>
            <p className="text-gray-400">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <exp.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                <p className="text-gray-400 mb-2">{exp.position}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-4xl font-bold mb-4">Academic Background</h3>
            <p className="text-gray-400">Continuous learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {academics.map((academic, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {academic.degree}
                </h4>
                <p className="text-gray-400 mb-2">{academic.institution}</p>
                <p className="text-sm text-gray-500">{academic.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Certifications</h3>
          <p className="text-gray-400 mb-12">Industry recognition</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={AWS} alt="AWS Certified Cloud Practitioner" />
                <Award className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                AWS Certified Cloud Practitioner
              </h4>
              <p className="text-gray-400">Amazon Web Services Certified</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Scrum Foundation</h4>
              <p className="text-gray-400">CertiProf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Skills</h3>
          <p className="text-gray-400 mb-12">Technical & Soft Skills</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 px-4 py-3 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Testimonials</h3>
          <p className="text-gray-400 mb-12">What clients say about me</p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                  {testimonial.name}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Contact Me</h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Nathalia Rodrigues Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
