import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EducationCard = ({educationData, index}) => {
    const isEven = index % 2 === 0;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        if (window.innerWidth < 768) {
            setIsModalOpen(true);
        }
    };

    return(
        <>
            <motion.div
                className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-3 sm:gap-8 mb-12 md:mb-16 w-full`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Content card */}
                <div className={`w-5/12 max-w-full`}>
                    <div
                        className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer md:cursor-default"
                        onClick={handleCardClick}
                    >
                    {/* Timeframe badge */}
                    {educationData?.timeframe && (
                        <div className="bg-gray-900 px-4 py-2 text-center">
                            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                                {educationData.timeframe}
                            </span>
                        </div>
                    )}

                    {/* Card content */}
                    <div className={`p-4 sm:p-6 ${isEven ? 'text-right' : 'text-left'}`}>
                        {/* Title and Role Section */}
                        <div className="mb-2 md:mb-4">
                            <h3 className="text-sm sm:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                                {educationData?.Activity_Name}
                            </h3>
                            {educationData?.role && (
                                <p className="text-xs sm:text-base text-gray-600 font-medium">
                                    {educationData.role}
                                </p>
                            )}
                        </div>

                        {/* Full content - visible on desktop only */}
                        <div className="hidden md:block">
                            {/* GPA Badge */}
                            {educationData?.GPA && (
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                                        GPA: {educationData.GPA}
                                    </span>
                                </div>
                            )}

                            {/* Description Section */}
                            {educationData?.Description && (
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    {educationData.Description}
                                </p>
                            )}

                            {/* Skills/Technologies Section */}
                            {educationData?.skills && educationData.skills.length > 0 && (
                                <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                    {educationData.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Activities Section */}
                            {educationData?.Activities && (
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {educationData.Activities}
                                </p>
                            )}
                        </div>

                        {/* Tap to view indicator for mobile */}
                        <div className="md:hidden text-center mt-2">
                            <span className="text-xs text-gray-400">Tap to view details</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline logo/dot */}
            <div className="w-2/12 flex justify-center items-center">
                <div className="relative">
                    {educationData?.logo ? (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full border-4 border-gray-200 shadow-lg z-10 relative flex items-center justify-center p-3">
                            <img
                                src={educationData.logo}
                                alt={`${educationData.Activity_Name} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ) : (
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full border-2 sm:border-4 border-white shadow-sm z-10 relative"></div>
                    )}
                    {/* Vertical line */}
                    <div className={`absolute ${educationData?.logo ? 'top-16 sm:top-20' : 'top-3 sm:top-4'} left-1/2 transform -translate-x-1/2 w-px h-16 sm:h-24 bg-gray-300`}></div>
                </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="w-5/12"></div>
        </motion.div>

        {/* Modal for mobile */}
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        className="bg-white rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Timeframe badge */}
                        {educationData?.timeframe && (
                            <div className="bg-gray-900 px-4 py-3 text-center sticky top-0">
                                <span className="text-white text-sm font-semibold tracking-wide">
                                    {educationData.timeframe}
                                </span>
                            </div>
                        )}

                        <div className="p-6">
                            {/* Title and Role */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {educationData?.Activity_Name}
                                </h3>
                                {educationData?.role && (
                                    <p className="text-gray-600 font-medium">
                                        {educationData.role}
                                    </p>
                                )}
                            </div>

                            {/* GPA */}
                            {educationData?.GPA && (
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                                        GPA: {educationData.GPA}
                                    </span>
                                </div>
                            )}

                            {/* Description */}
                            {educationData?.Description && (
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    {educationData.Description}
                                </p>
                            )}

                            {/* Skills */}
                            {educationData?.skills && educationData.skills.length > 0 && (
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {educationData.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Activities */}
                            {educationData?.Activities && (
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    {educationData.Activities}
                                </p>
                            )}

                            {/* Close button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default EducationCard;
