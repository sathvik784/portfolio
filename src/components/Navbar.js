import React, { useState, useEffect } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex justify-center gap-8 py-5">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`font-medium transition-all duration-300 relative group ${
                                    activeSection === item.id
                                        ? 'text-black'
                                        : 'text-gray-500 hover:text-black'
                                }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
