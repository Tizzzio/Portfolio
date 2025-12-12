"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollSpy } from "../lib/useScrollSpy";
import { SKILLS, PROJECTS, TAGS, PERSONAL_INFO, CSS_CLASSES } from "../lib/constants";
import { SkillBar, Tag, GradientButton, ProjectCard, SectionHeader } from "../components/UI";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection } = useScrollSpy();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Sezione Hero */}
      <section
        id="hero"
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Enhanced animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          <div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full animate-float-up opacity-60"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-drift opacity-60"
            style={{ animationDelay: "2s", animationDuration: "12s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-300 rounded-full animate-float-up opacity-60"
            style={{ animationDelay: "4s", animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-drift opacity-60"
            style={{ animationDelay: "1s", animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-1/3 left-2/3 w-4 h-4 bg-pink-300 rounded-full animate-float-up opacity-60"
            style={{ animationDelay: "3s", animationDuration: "7s" }}
          ></div>
          <div
            className="absolute top-16 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-drift opacity-50"
            style={{ animationDelay: "5s", animationDuration: "14s" }}
          ></div>
          <div
            className="absolute bottom-40 left-16 w-3 h-3 bg-green-300 rounded-full animate-float-up opacity-50"
            style={{ animationDelay: "2.5s", animationDuration: "9s" }}
          ></div>

          {/* Enhanced floating blobs */}
          <div
            className="absolute -top-10 -right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"
            style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"
            style={{ animationDelay: "2.5s", animationDuration: "4s" }}
          ></div>

          {/* Dynamic geometric shapes */}
          <div className="absolute bottom-0 right-0 w-72 h-72 opacity-40">
            <div
              className="w-full h-full bg-gradient-to-tl from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-40 h-40 opacity-35">
            <div
              className="w-full h-full bg-gradient-to-br from-cyan-300 to-indigo-400 transform rotate-45 animate-spin"
              style={{ animationDuration: "12s" }}
            ></div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-56 h-56 opacity-30">
            <div
              className="w-full h-full bg-gradient-to-tr from-purple-300 to-pink-400 rounded-full animate-bounce"
              style={{ animationDuration: "5s" }}
            ></div>
          </div>
          <div className="absolute top-10 left-10 w-24 h-24 opacity-45">
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 animate-drift" style={{ animationDuration: "8s" }}></div>
          </div>
          <div className="absolute top-1/3 right-10 w-28 h-28 opacity-40">
            <div
              className="w-full h-full bg-gradient-to-tl from-green-300 to-teal-400 rounded-full animate-float-up"
              style={{ animationDuration: "6s" }}
            ></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* Backdrop for better text visibility */}
          <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>
          <div
            className={`relative z-10 py-8 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg">
              Ciao, sono{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse font-black drop-shadow-sm">
                Andrea Zito
              </span>
            </h1>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <p className="text-2xl text-gray-700 mb-4 font-semibold drop-shadow-md">Front-End Developer</p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-medium drop-shadow-sm">
                Creo esperienze web moderne e intuitive con passione per il codice pulito e il design elegante!
              </p>
            </div>
            <div
              className={`relative z-10 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => scrollToSection("progetti")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-bold drop-shadow-lg"
                >
                  Vedi i miei progetti
                </button>
                <button
                  onClick={() => scrollToSection("contatti")}
                  className="border-2 border-blue-600 text-blue-600 bg-white bg-opacity-90 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Contattami
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione About */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chi Sono</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed">
                  Sono uno sviluppatore web appassionato con esperienza in tecnologie moderne. Mi specializzo nella creazione di applicazioni web
                  performanti e user-friendly.
                </p>
                <p className="leading-relaxed">
                  La mia missione è trasformare idee creative in realtà digitali, combinando design elegante con codice pulito e funzionalità
                  innovative.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Le Mie Competenze</h3>
                <div className="grid grid-cols-2 gap-3">
                  {SKILLS.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {TAGS.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 overflow-hidden mx-auto">
                  <Image
                    src="/images/profile.jpg"
                    alt={`${PERSONAL_INFO.name} - Profile Picture`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h3>
                <p className="text-blue-100 mb-4">{PERSONAL_INFO.role}</p>
                <div className="space-y-2 text-sm text-blue-50">
                  <p>📍 {PERSONAL_INFO.location}</p>
                  <p>💼 Freelancer</p>
                  <p>🎯 Progetti Realizzati: {PERSONAL_INFO.projectsCompleted}</p>
                </div>

                {/* ⭐ PERSONALIZZA: Sostituisci con il percorso del tuo CV quando sarà pronto */}
                <div className="mt-6 pt-4 border-t border-blue-300 border-opacity-30">
                  <div className="inline-flex flex-col items-center space-y-2 bg-yellow-400 bg-opacity-90 text-gray-900 px-6 py-4 rounded-lg font-bold backdrop-blur-sm border-2 border-yellow-300 cursor-not-allowed shadow-lg">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-lg">CV in preparazione</span>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Disponibile a breve</span>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl transform -rotate-3 scale-110 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Progetti */}
      <section id="progetti" className="py-20 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeader title="I Miei Progetti" subtitle="Una selezione dei miei lavori più recenti, dove creatività e tecnologia si incontrano" />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Tizzzio?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-medium border border-gray-300 hover:shadow-lg"
            >
              🔍 Vedi tutti i progetti
            </a>
          </div>
        </div>
      </section>

      {/* Sezione Contatti */}
      <section id="contatti" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <SectionHeader
            title="Lavoriamo Insieme"
            subtitle="Hai un progetto in mente? Sono sempre aperto a nuove opportunità e collaborazioni interessanti!"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💬 Come Contattarmi</h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Email Principale</h4>
                      <p className="text-blue-700 font-medium">La via più veloce per contattarmi</p>
                    </div>
                  </div>
                  <a
                    href="mailto:andryzito01@gmail.com"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>📧 andryzito01@gmail.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">GitHub</h4>
                      <p className="text-green-700 font-medium">Esplora i miei progetti</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Tizzzio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>💻 Vedi i miei codici</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">LinkedIn</h4>
                      <p className="text-purple-700 font-medium">Connettiti professionalmente</p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/andrea-zito-34785928a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>🤝 Collegati con me</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 I Miei Numeri</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h.01M7 3h.01"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4+</div>
                  <div className="text-sm text-gray-600">Progetti Completati</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Soddisfazione Cliente</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24h</div>
                  <div className="text-sm text-gray-600">Tempo di Risposta</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">⚡</div>
                  <div className="text-sm text-gray-600">Consegna Veloce</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    📍 <strong>Disponibile in tutta Italia</strong>
                  </p>
                  <div className="flex justify-center space-x-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Remote Work</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Freelance</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Full-time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
