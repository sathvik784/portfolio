import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideProjectCard from "./SideProjectsCard";

const SideProjectsMap = ({projects}) => {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        let newIndex = currentIndex + newDirection;

        // Wrap around for infinite loop
        if (newIndex >= projects.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = projects.length - 1;
        }

        setCurrentIndex([newIndex, newDirection]);
    };

    const getPrevIndex = () => {
        return currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 400 : -400,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 400 : -400,
            opacity: 0,
            scale: 0.8,
        }),
    };

    return(
        <div className="relative max-w-6xl mx-auto px-4">
            <div className="relative h-[600px] flex items-center justify-center gap-4 md:gap-8">
                {/* Left arrow button */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-0 md:left-4 z-20 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Previous project"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Left card (previous) - desktop only */}
                <motion.div
                    key={`prev-${getPrevIndex()}`}
                    className="hidden md:flex w-80 h-[600px] items-center opacity-40 scale-90 pointer-events-none flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                >
                    <SideProjectCard
                        id={projects[getPrevIndex()].id}
                        projectData={projects[getPrevIndex()]}
                    />
                </motion.div>

                {/* Center card (current) with AnimatePresence for slide animation */}
                <div className="w-full md:w-96 z-10 relative flex-shrink-0 h-[600px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 250, damping: 25 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.5}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full flex items-center justify-center"
                        >
                            <SideProjectCard
                                id={projects[currentIndex].id}
                                projectData={projects[currentIndex]}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right card (next) - desktop only */}
                <motion.div
                    key={`next-${getNextIndex()}`}
                    className="hidden md:flex w-80 h-[600px] items-center opacity-40 scale-90 pointer-events-none flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                >
                    <SideProjectCard
                        id={projects[getNextIndex()].id}
                        projectData={projects[getNextIndex()]}
                    />
                </motion.div>

                {/* Right arrow button */}
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-0 md:right-4 z-20 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Next project"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SideProjectsMap;
