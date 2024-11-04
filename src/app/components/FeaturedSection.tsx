'use client'

import { HoverEffect } from "../components/ui/card-hover-effect";

function FeaturedSection() {

    return (
        <div
            className='py-12 relative top-40'
        >
            <div>
                <div className="text-center">
                    <h1
                        className='text-base text-teal-600 font-semibold tracking-wide uppercase'
                    >
                        Core Features
                    </h1>
                    <p
                        className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'
                    >
                        Discover What LawAssist Can Do
                    </p>
                </div>
            </div>
            <div
                className='mt-10'
            >


                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>

            </div>


        </div>
    );
}

export const projects = [
    {
        title: "📚 Legal Research",
        description: [
            "Simplify your legal research\n",
            "Judgment Breakdown: Get clear, detailed analyses of judgments.",
            "\nKey Point Extraction: Identify important details quickly."
        ],
        link: "#",
    },
    {
        title: "🧠 Intelligent Q&A",
        description: [
            "Get accurate answers to your legal queries.",
            "Instant Responses: Receive quick, reliable answers.",
            "Detailed Explanations: Understand the reasoning behind answers.",
            "Continuous Learning: Benefit from the system's ongoing updates."
        ],
        link: "#",
    },
    {
        title: "🌐 Multilingual Support",
        description: [
            "Access legal assistance in multiple languages.",
            "Language Options: Choose from various languages.\n",
            "\nAccurate Translations: Get precise legal translations.",
            "\nLocal Adaptations: Understand laws in context."
        ],

        link: "#",
    },
    {
        title: "🔍 Lawyer Matching",
        description:
            "Find a perfect lawyer for you whether it is a pro bono case or not.",
        link: "#",
    },
];

export default FeaturedSection
