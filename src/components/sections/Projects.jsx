import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true });

    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.images) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.images) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <section id="projects" className="py-24 bg-base-200/50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16" data-aos="fade-up">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-base-content">{t('projects.title')}</h3>
                    <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <ImageWithSkeleton
                                    src={project.image}
                                    alt={`${project.title} - Aldan Prayogi Project`}
                                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                                {project.year && (
                                    <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm z-10">
                                        <span className="text-xs font-bold text-primary">{project.year}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => handleOpenModal(project)}
                                            className="btn btn-primary btn-sm rounded-full"
                                        >
                                            {t('projects.view_project')}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-base-content">{project.title}</h4>
                                <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div
                                    onClick={() => handleOpenModal(project)}
                                    className="flex items-center text-primary font-bold text-sm cursor-pointer hover:gap-3 transition-all"
                                >
                                    <span>{t('projects.view_project')}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-outline btn-primary rounded-full px-10"
                        >
                            {showAll ? "Show Less" : "View All Projects"}
                        </button>
                    </div>
                )}

                {/* Modal for Project Details */}
                {selectedProject && (
                    <dialog className="modal modal-open">
                        <div className="modal-box max-w-4xl p-0 bg-base-100 rounded-[2.5rem] overflow-hidden border border-base-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
                            <div className="relative h-48 md:h-96">
                                {selectedProject.images && selectedProject.images.length > 0 ? (
                                    <>
                                        <ImageWithSkeleton
                                            key={currentImageIndex}
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                                            className="w-full h-full transition-opacity duration-500"
                                        />
                                        {selectedProject.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                    className="btn btn-circle btn-sm absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white"
                                                >
                                                    ❮
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                    className="btn btn-circle btn-sm absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 border-none text-white"
                                                >
                                                    ❯
                                                </button>
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                    {selectedProject.images.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <ImageWithSkeleton src={selectedProject.image} alt={selectedProject.title} className="w-full h-full" />
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="btn btn-circle btn-sm absolute right-4 top-4 bg-base-100/20 backdrop-blur-md border-none text-white hover:bg-base-100/40"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-8 md:p-12">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-base-content">{selectedProject.title}</h3>
                                <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                                    {selectedProject.details || selectedProject.description}
                                </p>
                                <div className="flex gap-4">
                                    {selectedProject.link_visitsite && (
                                        <a
                                            href={selectedProject.link_visitsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary rounded-2xl px-8 shadow-lg shadow-primary/20"
                                        >
                                            Visit Site
                                        </a>
                                    )}
                                    {selectedProject.link_sourcecode && (
                                        <a
                                            href={selectedProject.link_sourcecode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline rounded-2xl px-8"
                                        >
                                            {t('projects.source_code')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button onClick={() => setSelectedProject(null)}>close</button>
                        </form>
                    </dialog>
                )}
            </div>
        </section>
    );
};

export default Projects;
