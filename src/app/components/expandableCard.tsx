"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";

export function LawyerExpandableCardDemo() {
  const [active, setActive] = useState<Lawyer | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-red-600 rounded-full h-8 w-8 shadow-md"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`lawyer-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit flex flex-col bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row p-4">
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="flex-shrink-0"
                >
                  <Image
                    width={120}
                    height={120}
                    src={active.image || "https://placehold.co/600x400"}
                    alt={active.name}
                    className="h-32 w-32 rounded-lg object-cover object-top shadow-md"
                  />
                </motion.div>
                <div className="flex-grow mt-4 md:mt-0 md:ml-4">
                  <motion.h3
                    layoutId={`name-${active.name}-${id}`}
                    className="font-bold text-neutral-800 dark:text-neutral-200 text-lg"
                  >
                    {active.name}
                  </motion.h3>
                  <motion.p className="text-neutral-600 dark:text-neutral-400">
                    <strong>Practice Area:</strong> {active.practiceArea}
                  </motion.p>
                  <motion.p className="text-neutral-600 dark:text-neutral-400">
                    <strong>City:</strong> {active.city}
                  </motion.p>
                </div>
              </div>
              <motion.div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-b-lg">
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Practicing Since:</strong> {active.practicingSince}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Cases Won:</strong> {active.casesWon}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Language:</strong> {active.language}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Experience:</strong> {active.experience}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Urgency:</strong> {active.urgency}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Budget:</strong> {active.budget}
                </motion.p>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  <strong>Special Considerations:</strong>{" "}
                  {active.special.join(", ")}
                </motion.p>
                <Link href="/requests">
                  <motion.button className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-green-500 hover:bg-green-600 text-white">
                    Make Request
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {allLawyers.map((lawyer) => (
          <motion.div
            layoutId={`lawyer-${lawyer.name}-${id}`}
            key={`lawyer-${lawyer.name}-${id}`}
            onClick={() => setActive(lawyer)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer shadow-md transition-all"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div
                layoutId={`image-${lawyer.name}-${id}`}
                className="flex-shrink-0"
              >
                <Image
                  width={100}
                  height={100}
                  src={lawyer.image || "https://placehold.co/600x400"}
                  alt={lawyer.name}
                  className="h-20 w-20 md:h-14 md:w-14 rounded-lg object-cover object-top shadow-md"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`name-${lawyer.name}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-lg"
                >
                  {lawyer.name}
                </motion.h3>
                <motion.p
                  layoutId={`practiceArea-${lawyer.practiceArea}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {lawyer.practiceArea}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

interface Lawyer {
  image: string;
  name: string;
  practiceArea: string;
  city: string;
  practicingSince: number;
  casesWon: number;
  language: string;
  experience: string;
  urgency: string;
  budget: string;
  special: string[];
}

const allLawyers: Lawyer[] = [
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gavin Wood",
    practiceArea: "Immigration",
    city: "Hyderabad",
    practicingSince: 2006,
    casesWon: 123,
    language: "Punjabi",
    experience: "1-6 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Multilingual", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Colton Gray",
    practiceArea: "Personal Injury",
    city: "Lucknow",
    practicingSince: 2013,
    casesWon: 54,
    language: "Hindi",
    experience: "4-11 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Retainer agreements", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Henry Sanchez",
    practiceArea: "Personal Injury",
    city: "Lucknow",
    practicingSince: 2008,
    casesWon: 166,
    language: "Hindi",
    experience: "3-9 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["In-person consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Cameron Cox",
    practiceArea: "Tax Law",
    city: "Patna",
    practicingSince: 2017,
    casesWon: 185,
    language: "Marathi",
    experience: "2-6 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Flexible hours", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Mia Roberts",
    practiceArea: "Real Estate",
    city: "Patna",
    practicingSince: 2016,
    casesWon: 189,
    language: "Hindi",
    experience: "4-8 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Virtual consultation", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Patricia Young",
    practiceArea: "Health Care Law",
    city: "Kochi",
    practicingSince: 2005,
    casesWon: 34,
    language: "Gujarati",
    experience: "2-11 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["In-person consultation", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Jacob Butler",
    practiceArea: "Contract Law",
    city: "Nagpur",
    practicingSince: 2001,
    casesWon: 57,
    language: "Hindi",
    experience: "3-12 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Virtual consultation", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gianna Barnes",
    practiceArea: "Immigration",
    city: "Surat",
    practicingSince: 2011,
    casesWon: 63,
    language: "Telugu",
    experience: "3-8 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Multilingual", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "James Garcia",
    practiceArea: "Family Dispute",
    city: "Patna",
    practicingSince: 2020,
    casesWon: 2,
    language: "Marathi",
    experience: "3-5 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Flexible hours", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Robert Rodriguez",
    practiceArea: "Family Dispute",
    city: "Ahmedabad",
    practicingSince: 2015,
    casesWon: 176,
    language: "English",
    experience: "2-6 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Payment plans available", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gabriel Reed",
    practiceArea: "Family Dispute",
    city: "Kanpur",
    practicingSince: 2019,
    casesWon: 60,
    language: "Punjabi",
    experience: "2-5 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Experienced in mediation", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Maddison Phillips",
    practiceArea: "Social Security",
    city: "Mumbai",
    practicingSince: 2016,
    casesWon: 194,
    language: "Tamil",
    experience: "3-5 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Male lawyer", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Sarah Miller",
    practiceArea: "Civil Rights",
    city: "Jaipur",
    practicingSince: 2018,
    casesWon: 150,
    language: "Marathi",
    experience: "5-8 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Retainer agreements", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Jane Smith",
    practiceArea: "Social Security",
    city: "Lucknow",
    practicingSince: 2005,
    casesWon: 45,
    language: "Telugu",
    experience: "2-13 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Flexible hours", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Sophie Diaz",
    practiceArea: "Tax Law",
    city: "Delhi",
    practicingSince: 2006,
    casesWon: 31,
    language: "Telugu",
    experience: "5-11 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["In-person consultation", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Ella Cox",
    practiceArea: "Civil Rights",
    city: "Bhopal",
    practicingSince: 2009,
    casesWon: 159,
    language: "Marathi",
    experience: "4-10 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Experienced in mediation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Sarah Miller",
    practiceArea: "Family Dispute",
    city: "Nagpur",
    practicingSince: 2018,
    casesWon: 17,
    language: "Spanish",
    experience: "1-14 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Free initial consultation", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Natalie Rivera",
    practiceArea: "Corporate Law",
    city: "Kochi",
    practicingSince: 2013,
    casesWon: 151,
    language: "Marathi",
    experience: "2-13 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Female lawyer", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Vivian Sanders",
    practiceArea: "Criminal Case",
    city: "Ahmedabad",
    practicingSince: 2011,
    casesWon: 78,
    language: "Punjabi",
    experience: "6-14 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Payment plans available", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Charles King",
    practiceArea: "Real Estate",
    city: "Lucknow",
    practicingSince: 2002,
    casesWon: 78,
    language: "Hindi",
    experience: "3-9 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Experienced in mediation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Ella Cox",
    practiceArea: "Personal Injury",
    city: "Kanpur",
    practicingSince: 2019,
    casesWon: 138,
    language: "Malayalam",
    experience: "6-5 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Female lawyer", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Lucy Hill",
    practiceArea: "Tax Law",
    city: "Bengaluru",
    practicingSince: 2013,
    casesWon: 34,
    language: "Hindi",
    experience: "3-7 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Retainer agreements", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gianna Barnes",
    practiceArea: "Criminal Case",
    city: "Bengaluru",
    practicingSince: 2009,
    casesWon: 35,
    language: "Gujarati",
    experience: "3-9 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Free initial consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Alyssa Powell",
    practiceArea: "Real Estate",
    city: "Surat",
    practicingSince: 2016,
    casesWon: 52,
    language: "Malayalam",
    experience: "6-8 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Free initial consultation", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Sarah Cooper",
    practiceArea: "Family Dispute",
    city: "Lucknow",
    practicingSince: 2007,
    casesWon: 130,
    language: "English",
    experience: "6-14 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Virtual consultation", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "David Wilson",
    practiceArea: "Social Security",
    city: "Kolkata",
    practicingSince: 2020,
    casesWon: 2,
    language: "Punjabi",
    experience: "3-5 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Multilingual", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Chloe Bell",
    practiceArea: "Contract Law",
    city: "Kochi",
    practicingSince: 2013,
    casesWon: 150,
    language: "Hindi",
    experience: "4-9 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Harper Lee",
    practiceArea: "Corporate Law",
    city: "Jaipur",
    practicingSince: 2002,
    casesWon: 91,
    language: "Bengali",
    experience: "2-8 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Male lawyer", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Maya James",
    practiceArea: "Family Law",
    city: "Visakhapatnam",
    practicingSince: 2003,
    casesWon: 95,
    language: "Gujarati",
    experience: "6-10 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "William Harris",
    practiceArea: "Tax Law",
    city: "Hyderabad",
    practicingSince: 2001,
    casesWon: 114,
    language: "Hindi",
    experience: "3-5 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Virtual consultation", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Audrey Price",
    practiceArea: "Real Estate",
    city: "Chennai",
    practicingSince: 2007,
    casesWon: 108,
    language: "Punjabi",
    experience: "6-12 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Multilingual", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Jessica Martinez",
    practiceArea: "Intellectual Property",
    city: "Patna",
    practicingSince: 2004,
    casesWon: 24,
    language: "Punjabi",
    experience: "3-9 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["In-person consultation", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Landon Hayes",
    practiceArea: "Environmental Law",
    city: "Kanpur",
    practicingSince: 2015,
    casesWon: 103,
    language: "Spanish",
    experience: "6-5 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["In-person consultation", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Victoria Sanchez",
    practiceArea: "Civil Rights",
    city: "Vadodara",
    practicingSince: 2011,
    casesWon: 143,
    language: "Spanish",
    experience: "6-9 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Payment plans available", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Xavier Sanchez",
    practiceArea: "Tax Law",
    city: "Kolkata",
    practicingSince: 2017,
    casesWon: 157,
    language: "Malayalam",
    experience: "2-6 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["In-person consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Asher Walker",
    practiceArea: "Real Estate",
    city: "Hyderabad",
    practicingSince: 2005,
    casesWon: 172,
    language: "Spanish",
    experience: "1-11 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Experienced in mediation", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Andrew Torres",
    practiceArea: "Real Estate",
    city: "Nagpur",
    practicingSince: 2006,
    casesWon: 189,
    language: "Bengali",
    experience: "1-13 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["In-person consultation", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Nina Sanders",
    practiceArea: "Family Law",
    city: "Pune",
    practicingSince: 2011,
    casesWon: 28,
    language: "Punjabi",
    experience: "6-12 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Payment plans available", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Sarah Cooper",
    practiceArea: "Health Care Law",
    city: "Kochi",
    practicingSince: 2020,
    casesWon: 145,
    language: "Bengali",
    experience: "6-13 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Female lawyer", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Paige Foster",
    practiceArea: "Immigration",
    city: "Patna",
    practicingSince: 2009,
    casesWon: 193,
    language: "Gujarati",
    experience: "1-9 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Female lawyer", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Joshua Reed",
    practiceArea: "Family Law",
    city: "Patna",
    practicingSince: 2003,
    casesWon: 78,
    language: "Bengali",
    experience: "4-12 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Female lawyer", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "John Doe",
    practiceArea: "Intellectual Property",
    city: "Kolkata",
    practicingSince: 2016,
    casesWon: 5,
    language: "Punjabi",
    experience: "6-7 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Female lawyer", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Daniel Lewis",
    practiceArea: "Corporate Law",
    city: "Nagpur",
    practicingSince: 2018,
    casesWon: 54,
    language: "Marathi",
    experience: "5-8 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Virtual consultation", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Colton Gray",
    practiceArea: "Corporate Law",
    city: "Visakhapatnam",
    practicingSince: 2017,
    casesWon: 161,
    language: "Malayalam",
    experience: "1-7 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Virtual consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Aubrey Hughes",
    practiceArea: "Personal Injury",
    city: "Kolkata",
    practicingSince: 2003,
    casesWon: 74,
    language: "Bengali",
    experience: "5-10 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["In-person consultation", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Aubrey Hughes",
    practiceArea: "Family Law",
    city: "Bengaluru",
    practicingSince: 2018,
    casesWon: 116,
    language: "English",
    experience: "6-5 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Natalie Rivera",
    practiceArea: "Environmental Law",
    city: "Kochi",
    practicingSince: 2000,
    casesWon: 36,
    language: "Spanish",
    experience: "2-6 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Payment plans available", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Isaiah Evans",
    practiceArea: "Real Estate",
    city: "Bengaluru",
    practicingSince: 2004,
    casesWon: 87,
    language: "Tamil",
    experience: "4-11 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Virtual consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Nora Lewis",
    practiceArea: "Labor Law",
    city: "Kolkata",
    practicingSince: 2020,
    casesWon: 128,
    language: "Bengali",
    experience: "2-9 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Male lawyer", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Jessica Martinez",
    practiceArea: "Environmental Law",
    city: "Patna",
    practicingSince: 2001,
    casesWon: 127,
    language: "Marathi",
    experience: "5-7 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Female lawyer", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Alice Johnson",
    practiceArea: "Corporate Law",
    city: "Delhi",
    practicingSince: 2003,
    casesWon: 174,
    language: "Bengali",
    experience: "5-5 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Daniel Lewis",
    practiceArea: "Contract Law",
    city: "Surat",
    practicingSince: 2007,
    casesWon: 152,
    language: "Gujarati",
    experience: "1-12 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Retainer agreements", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Ella Cox",
    practiceArea: "Personal Injury",
    city: "Pune",
    practicingSince: 2019,
    casesWon: 45,
    language: "Gujarati",
    experience: "1-9 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Free initial consultation", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Alyssa Powell",
    practiceArea: "Corporate Law",
    city: "Hyderabad",
    practicingSince: 2015,
    casesWon: 103,
    language: "Telugu",
    experience: "5-5 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["In-person consultation", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Samantha Kelly",
    practiceArea: "Tax Law",
    city: "Kanpur",
    practicingSince: 2008,
    casesWon: 193,
    language: "Hindi",
    experience: "6-14 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Payment plans available", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Carter Gray",
    practiceArea: "Family Law",
    city: "Kanpur",
    practicingSince: 2013,
    casesWon: 112,
    language: "Punjabi",
    experience: "2-13 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Experienced in mediation", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Nora Lewis",
    practiceArea: "Environmental Law",
    city: "Kochi",
    practicingSince: 2004,
    casesWon: 149,
    language: "English",
    experience: "4-12 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Natalie Rivera",
    practiceArea: "Health Care Law",
    city: "Chennai",
    practicingSince: 2007,
    casesWon: 143,
    language: "Gujarati",
    experience: "5-6 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Payment plans available", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Alice Johnson",
    practiceArea: "Social Security",
    city: "Coimbatore",
    practicingSince: 2004,
    casesWon: 125,
    language: "Spanish",
    experience: "6-6 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Daniel Lewis",
    practiceArea: "Personal Injury",
    city: "Chennai",
    practicingSince: 2020,
    casesWon: 52,
    language: "Telugu",
    experience: "5-7 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Oliver Ward",
    practiceArea: "Personal Injury",
    city: "Patna",
    practicingSince: 2005,
    casesWon: 10,
    language: "Telugu",
    experience: "6-12 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Female lawyer", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Mia Roberts",
    practiceArea: "Immigration",
    city: "Bengaluru",
    practicingSince: 2012,
    casesWon: 57,
    language: "English",
    experience: "1-13 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Retainer agreements", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Alice Johnson",
    practiceArea: "Real Estate",
    city: "Mumbai",
    practicingSince: 2004,
    casesWon: 133,
    language: "Punjabi",
    experience: "3-14 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Experienced in mediation", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Asher Walker",
    practiceArea: "Intellectual Property",
    city: "Kanpur",
    practicingSince: 2006,
    casesWon: 25,
    language: "Telugu",
    experience: "2-6 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Maddison Phillips",
    practiceArea: "Labor Law",
    city: "Bengaluru",
    practicingSince: 2014,
    casesWon: 98,
    language: "Gujarati",
    experience: "4-10 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Experienced in mediation", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Landon Hayes",
    practiceArea: "Real Estate",
    city: "Mumbai",
    practicingSince: 2019,
    casesWon: 125,
    language: "Spanish",
    experience: "1-13 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Female lawyer", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Jackson Ward",
    practiceArea: "Criminal Case",
    city: "Delhi",
    practicingSince: 2015,
    casesWon: 194,
    language: "Punjabi",
    experience: "2-7 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Experienced in mediation", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "David Wilson",
    practiceArea: "Family Dispute",
    city: "Kolkata",
    practicingSince: 2000,
    casesWon: 59,
    language: "Spanish",
    experience: "4-12 years",
    urgency: "Immediate",
    budget: "$1000 - $2000",
    special: ["Free initial consultation", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Addison Hall",
    practiceArea: "Civil Rights",
    city: "Kolkata",
    practicingSince: 2015,
    casesWon: 100,
    language: "Punjabi",
    experience: "4-10 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Male lawyer", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Mia Roberts",
    practiceArea: "Real Estate",
    city: "Chennai",
    practicingSince: 2017,
    casesWon: 81,
    language: "Malayalam",
    experience: "1-12 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Multilingual", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Maya James",
    practiceArea: "Real Estate",
    city: "Kanpur",
    practicingSince: 2019,
    casesWon: 174,
    language: "English",
    experience: "4-7 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Male lawyer", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Maria Clark",
    practiceArea: "Family Dispute",
    city: "Mumbai",
    practicingSince: 2015,
    casesWon: 168,
    language: "Tamil",
    experience: "6-10 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Female lawyer", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Hannah Gonzalez",
    practiceArea: "Personal Injury",
    city: "Kochi",
    practicingSince: 2000,
    casesWon: 190,
    language: "Malayalam",
    experience: "3-13 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Virtual consultation", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Zoe Sanchez",
    practiceArea: "Labor Law",
    city: "Delhi",
    practicingSince: 2000,
    casesWon: 11,
    language: "Gujarati",
    experience: "1-14 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Female lawyer", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Vivian Sanders",
    practiceArea: "Contract Law",
    city: "Mumbai",
    practicingSince: 2011,
    casesWon: 6,
    language: "Malayalam",
    experience: "5-12 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Experienced in mediation", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Harper Lee",
    practiceArea: "Immigration",
    city: "Surat",
    practicingSince: 2005,
    casesWon: 134,
    language: "Hindi",
    experience: "2-7 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Female lawyer", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Joseph Scott",
    practiceArea: "Civil Rights",
    city: "Kochi",
    practicingSince: 2020,
    casesWon: 98,
    language: "Tamil",
    experience: "3-8 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gavin Wood",
    practiceArea: "Immigration",
    city: "Kanpur",
    practicingSince: 2016,
    casesWon: 184,
    language: "Tamil",
    experience: "2-13 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Male lawyer", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Victoria Sanchez",
    practiceArea: "Contract Law",
    city: "Visakhapatnam",
    practicingSince: 2008,
    casesWon: 135,
    language: "Tamil",
    experience: "4-9 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Lucas Adams",
    practiceArea: "Family Law",
    city: "Bengaluru",
    practicingSince: 2012,
    casesWon: 104,
    language: "English",
    experience: "6-10 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Male lawyer", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Emily Davis",
    practiceArea: "Social Security",
    city: "Vadodara",
    practicingSince: 2010,
    casesWon: 127,
    language: "Gujarati",
    experience: "3-7 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Free initial consultation", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gabriel Carter",
    practiceArea: "Personal Injury",
    city: "Bengaluru",
    practicingSince: 2019,
    casesWon: 73,
    language: "Telugu",
    experience: "4-5 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Experienced in mediation", "Payment plans available"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Gianna Barnes",
    practiceArea: "Immigration",
    city: "Patna",
    practicingSince: 2009,
    casesWon: 71,
    language: "Malayalam",
    experience: "6-5 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Male lawyer", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Hannah Gonzalez",
    practiceArea: "Health Care Law",
    city: "Surat",
    practicingSince: 2013,
    casesWon: 108,
    language: "Gujarati",
    experience: "6-6 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Flexible hours", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Chloe Bell",
    practiceArea: "Labor Law",
    city: "Jaipur",
    practicingSince: 2010,
    casesWon: 163,
    language: "Hindi",
    experience: "2-7 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Multilingual", "In-person consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Nina Sanders",
    practiceArea: "Health Care Law",
    city: "Mumbai",
    practicingSince: 2020,
    casesWon: 157,
    language: "Bengali",
    experience: "6-8 years",
    urgency: "Within a month",
    budget: "$500 - $1000",
    special: ["Retainer agreements", "Male lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Evelyn Young",
    practiceArea: "Family Dispute",
    city: "Kolkata",
    practicingSince: 2005,
    casesWon: 63,
    language: "Malayalam",
    experience: "3-12 years",
    urgency: "Within a month",
    budget: "Less than $500",
    special: ["Female lawyer", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Emily Davis",
    practiceArea: "Real Estate",
    city: "Surat",
    practicingSince: 2020,
    casesWon: 21,
    language: "Hindi",
    experience: "6-12 years",
    urgency: "Within a week",
    budget: "Less than $500",
    special: ["Retainer agreements", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Joseph Scott",
    practiceArea: "Intellectual Property",
    city: "Kochi",
    practicingSince: 2003,
    casesWon: 141,
    language: "Marathi",
    experience: "1-7 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Payment plans available", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Luke Reed",
    practiceArea: "Health Care Law",
    city: "Kochi",
    practicingSince: 2012,
    casesWon: 111,
    language: "Spanish",
    experience: "6-7 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Experienced in mediation", "Female lawyer"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Landon Hayes",
    practiceArea: "Family Dispute",
    city: "Coimbatore",
    practicingSince: 2008,
    casesWon: 40,
    language: "Malayalam",
    experience: "3-11 years",
    urgency: "Within a month",
    budget: "$1000 - $2000",
    special: ["Multilingual", "Multilingual"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Joshua Reed",
    practiceArea: "Social Security",
    city: "Bhopal",
    practicingSince: 2014,
    casesWon: 0,
    language: "Punjabi",
    experience: "1-10 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Male lawyer", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Daniel Rivera",
    practiceArea: "Personal Injury",
    city: "Hyderabad",
    practicingSince: 2008,
    casesWon: 21,
    language: "Telugu",
    experience: "6-13 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Nora Lewis",
    practiceArea: "Personal Injury",
    city: "Chennai",
    practicingSince: 2005,
    casesWon: 0,
    language: "Marathi",
    experience: "1-7 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Retainer agreements", "Free initial consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Isaiah Evans",
    practiceArea: "Family Dispute",
    city: "Nagpur",
    practicingSince: 2019,
    casesWon: 54,
    language: "Hindi",
    experience: "1-9 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Free initial consultation", "Virtual consultation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Luke Reed",
    practiceArea: "Personal Injury",
    city: "Visakhapatnam",
    practicingSince: 2014,
    casesWon: 87,
    language: "Punjabi",
    experience: "6-6 years",
    urgency: "Immediate",
    budget: "Less than $500",
    special: ["Virtual consultation", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Vivian Sanders",
    practiceArea: "Social Security",
    city: "Kanpur",
    practicingSince: 2005,
    casesWon: 29,
    language: "Bengali",
    experience: "4-7 years",
    urgency: "Within a week",
    budget: "$500 - $1000",
    special: ["Virtual consultation", "Flexible hours"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Oliver Ward",
    practiceArea: "Corporate Law",
    city: "Hyderabad",
    practicingSince: 2009,
    casesWon: 3,
    language: "Telugu",
    experience: "3-9 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Female lawyer", "Experienced in mediation"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Patricia Young",
    practiceArea: "Civil Rights",
    city: "Coimbatore",
    practicingSince: 2012,
    casesWon: 187,
    language: "Malayalam",
    experience: "5-13 years",
    urgency: "Immediate",
    budget: "$500 - $1000",
    special: ["Male lawyer", "Retainer agreements"],
  },
  {
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/50/27/lawyer-icon-male-user-person-profile-avatar-vector-20905027.jpg",
    name: "Daniel Lewis",
    practiceArea: "Tax Law",
    city: "Delhi",
    practicingSince: 2009,
    casesWon: 80,
    language: "Marathi",
    experience: "1-6 years",
    urgency: "Within a week",
    budget: "$1000 - $2000",
    special: ["Flexible hours", "Male lawyer"],
  },
];
