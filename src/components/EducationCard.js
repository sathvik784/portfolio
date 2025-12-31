import React from "react";
import { motion } from "framer-motion";

const EducationCard = ({educationData, index}) => {
    const isEven = index % 2 === 0;

    return(
        <motion.div
            className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8 mb-16`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Content card */}
            <div className={`md:w-5/12 w-full`}>
                <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg overflow-hidden">
                    {/* Timeframe badge */}
                    {educationData?.timeframe && (
                        <div className="bg-gray-900 px-4 py-2 text-center">
                            <span className="text-white text-sm font-semibold tracking-wide">
                                {educationData.timeframe}
                            </span>
                        </div>
                    )}

                    {/* Card content */}
                    <div className={`p-6 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                        {/* Title and Role Section */}
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {educationData?.Activity_Name}
                            </h3>
                            {educationData?.role && (
                                <p className="text-gray-600 font-medium">
                                    {educationData.role}
                                </p>
                            )}
                        </div>

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
                            <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
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
                </div>
            </div>

            {/* Timeline dot */}
            <div className="hidden md:flex md:w-2/12 justify-center items-center">
                <div className="relative">
                    <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow-sm z-10 relative"></div>
                    {/* Vertical line */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-300"></div>
                </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-5/12"></div>
        </motion.div>
    );
}

export default EducationCard;
