"use client";
import React, { useState } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { LawyerExpandableCardDemo } from "../components/expandableCard";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Sample lawyer data
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

function Page() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>([]);
  const [formData, setFormData] = useState({
    legalissue: "",
    city: "",
    language: "",
    experience: "",
    urgency: "",
    budget: "",
    special: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filtered = allLawyers.filter((lawyer) => {
      const issueMatch = formData.legalissue
        ? lawyer.practiceArea.toLowerCase() ===
          formData.legalissue.toLowerCase()
        : true;
      const cityMatch = formData.city
        ? lawyer.city.toLowerCase().includes(formData.city.toLowerCase())
        : true;
      const languageMatch = formData.language
        ? lawyer.language.toLowerCase() === formData.language.toLowerCase()
        : true;
      const experienceMatch = formData.experience
        ? lawyer.experience === formData.experience
        : true;
      const urgencyMatch = formData.urgency
        ? lawyer.urgency === formData.urgency
        : true;
      const budgetMatch = formData.budget
        ? lawyer.budget === formData.budget
        : true;
      const specialConsiderationsMatch = formData.special
        ? lawyer.special.some((consideration) =>
            consideration.toLowerCase().includes(formData.special.toLowerCase())
          )
        : true;

      return (
        issueMatch &&
        cityMatch &&
        languageMatch &&
        experienceMatch &&
        urgencyMatch &&
        budgetMatch &&
        specialConsiderationsMatch
      );
    });

    setFilteredLawyers(filtered);
    setShowFormModal(false);
    setShowTableModal(true);
  };

  const handleOpenFormModal = () => {
    setShowFormModal(true);
  };

  const handleCloseFormModal = () => {
    setShowFormModal(false);
  };

  const handleCloseTableModal = () => {
    setShowTableModal(false);
  };

  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden p-4">
      <Spotlight
        className="absolute top-0 left-0 md:left-60 md:top-0"
        fill="white"
      />
      <div className="relative z-10 w-full max-w-7xl text-center pt-32">
        <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          CONSULT <br /> WITH THE BEST LAWYERS
        </h1>
        <p className="mt-4 text-base text-neutral-300 max-w-6xl mx-auto">
          We help you to consult and hire the best Supreme Court & High Court
          lawyers in India. Use filters to narrow your search and find the best
          advocate in India, whether it&apos;s a family dispute or divorce
          lawyer, property lawyer, employment or labor court lawyer, criminal
          lawyer, recovery or cheque bounce lawyer, taxation or corporate
          lawyer, or a lawyer expert in any other field of law.
        </p>
      </div>

      <button
        onClick={handleOpenFormModal}
        className="mt-10 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 to-neutral-600 block w-full max-w-xs text-white rounded-md h-10 font-medium shadow-lg"
      >
        Find Me A Lawyer
      </button>

      {/* Form Modal */}
      <Modal
        open={showFormModal}
        onClose={handleCloseFormModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#27272A",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <h2 className="font-bold text-2xl text-center text-white mb-6">
            Find Your Lawyer
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="legalissue" className="text-white mb-1">
                  Legal Issue
                </Label>
                <select
                  id="legalissue"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.legalissue}
                  onChange={handleChange}
                >
                  <option value="">Select an issue</option>
                  <option value="Family Dispute">Family Dispute</option>
                  <option value="Property Dispute">Property Dispute</option>
                  <option value="Criminal Case">Criminal Case</option>
                  <option value="Corporate Matter">Corporate Matter</option>
                  <option value="Taxation Issue">Taxation Issue</option>
                  <option value="Civil Rights">Civil Rights</option>
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Divorce">Divorce or Custody</option>
                  <option value="Employment Issues">Employment Issues</option>
                  <option value="Immigration Law">Immigration Law</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="city" className="text-white mb-1">
                  City
                </Label>
                <Input
                  id="city"
                  placeholder="e.g. Delhi"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="h-9 w-full p-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </LabelInputContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="language" className="text-white mb-1">
                  Preferred Language
                </Label>
                <select
                  id="language"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="">Select a language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Other">Other</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="experience" className="text-white mb-1">
                  Experience Level
                </Label>
                <select
                  id="experience"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience level</option>
                  <option value="1-5 years">1-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </LabelInputContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="urgency" className="text-white mb-1">
                  Case Urgency
                </Label>
                <select
                  id="urgency"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select urgency</option>
                  <option value="Immediate">
                    Immediate attention required
                  </option>
                  <option value="Within a week">Within a week</option>
                  <option value="Not urgent">Not urgent</option>
                </select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="budget" className="text-white mb-1">
                  Budget or Fee Range
                </Label>
                <select
                  id="budget"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select a budget range</option>
                  <option value="Less than $500">Less than $500</option>
                  <option value="$500 - $1000">$500 - $1000</option>
                  <option value="$1000 - $5000">$1000 - $5000</option>
                  <option value="Above $5000">Above $5000</option>
                </select>
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="special" className="text-white mb-1">
                Special Considerations (Optional)
              </Label>
              <textarea
                id="special"
                placeholder="e.g. Prefer female lawyer, virtual consultation"
                value={formData.special}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                rows={3}
              />
            </LabelInputContainer>

            <button
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              type="submit"
            >
              Find Lawyers
            </button>
          </form>
        </Box>
      </Modal>

      {/* Table Modal */}
      <Modal open={showTableModal} onClose={handleCloseTableModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 500,
            width: 500,
            bgcolor: "#27272A",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <LawyerExpandableCardDemo />
        </Box>
      </Modal>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-col space-y-1 ${className}`}>{children}</div>
);

export default Page;
