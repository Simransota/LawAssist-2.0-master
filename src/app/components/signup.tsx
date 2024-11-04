"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";

export function AuthFormDemo() {
  const [isSignup, setIsSignup] = useState(true);
  const [role, setRole] = useState("user");
  const [proBono, setProBono] = useState(false);
  const [eligibility, setEligibility] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [proofDescription, setProofDescription] = useState("");
  const [bciCode, setBciCode] = useState("");
  const [lawyerId, setLawyerId] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [verificationDoc, setVerificationDoc] = useState<File | null>(null);
  const [verificationDocDescription, setVerificationDocDescription] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [dateOfEnrollment, setDateOfEnrollment] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleProBonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProBono(e.target.checked);
  };

  const handleEligibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEligibility(e.target.value);
  };

  const handleProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProof(file);
  };

  const handleProofDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProofDescription(e.target.value);
  };

  const handleBciCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBciCode(e.target.value);
  };

  const handleLawyerIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLawyerId(e.target.value);
  };

  const handleSpecializationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecialization(e.target.value);
  };

  const handleVerificationDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setVerificationDoc(file);
  };

  const handleVerificationDocDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationDocDescription(e.target.value);
  };

  const handleEnrollmentNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnrollmentNumber(e.target.value);
  };

  const handleDateOfEnrollmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfEnrollment(e.target.value);
  };

  const handleCurrentStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${isSignup ? "Signup" : "Login"} form submitted`);

    if (isSignup && role === "lawyer") {
      console.log(`going to dashboard...`);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const eligibilityOptions = [
    { value: "none", label: "None" },
    { value: "sc", label: "Member of a Scheduled Caste" },
    { value: "st", label: "Member of a Scheduled Tribe" },
    { value: "trafficking", label: "Victim of trafficking in human beings or begar" },
    { value: "woman_or_child", label: "Woman or a Child" },
    { value: "disability", label: "Person with disability" },
    { value: "custody", label: "Person in custody" },
    { value: "workman", label: "An industrial workman" },
    { value: "disaster", label: "Victim of a mass disaster, ethnic violence, caste atrocity, flood, drought, earthquake or industrial disaster" },
    { value: "income", label: "Person with annual income less than as specified under law" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="relative top-20 max-w-5xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="text-center font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to LawAssist
      </h2>

      <div className="flex justify-center space-x-4 my-4">
        <button
          className={cn(
            "px-4 py-2 font-medium",
            isSignup ? "text-blue-200 border-b-2 border-blue-200" : "text-gray-600"
          )}
          onClick={() => setIsSignup(true)}
        >
          Signup
        </button>
        <button
          className={cn(
            "px-4 py-2 font-medium",
            !isSignup ? "text-blue-200 border-b-2 border-blue-200" : "text-gray-600"
          )}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>
        {isSignup ? (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="role">Select Your Role</Label>
              <select
                id="role"
                value={role}
                onChange={handleRoleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-black"
              >
                <option value="user">User</option>
                <option value="lawyer">Lawyer</option>
                <option value="arbitrators">Arbitrators</option>
                <option value="mediators">Mediators</option>
                <option value="notaries">Notaries</option>
                <option value="writers">Document Writers</option>
              </select>
            </LabelInputContainer>

            {/* Common Fields */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            {/* Conditional Fields Based on Role */}
            {role === "lawyer" && (
              <>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="bciCode">Bar Council of India (BCI) Code</Label>
                  <Input
                    id="bciCode"
                    value={bciCode}
                    onChange={handleBciCodeChange}
                    placeholder="Enter your BCI code"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="lawyerId">Lawyer ID</Label>
                  <Input
                    id="lawyerId"
                    value={lawyerId}
                    onChange={handleLawyerIdChange}
                    placeholder="Enter your Lawyer ID"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input
                    id="specialization"
                    value={specialization}
                    onChange={handleSpecializationChange}
                    placeholder="e.g. Criminal Law"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                  <Input
                    id="enrollmentNumber"
                    value={enrollmentNumber}
                    onChange={handleEnrollmentNumberChange}
                    placeholder="Enter your Enrollment Number"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="dateOfEnrollment">Date of Enrollment</Label>
                  <Input
                    id="dateOfEnrollment"
                    value={dateOfEnrollment}
                    onChange={handleDateOfEnrollmentChange}
                    placeholder="Enter your Date of Enrollment"
                    type="date"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="currentStatus">Current Status</Label>
                  <Input
                    id="currentStatus"
                    value={currentStatus}
                    onChange={handleCurrentStatusChange}
                    placeholder="Enter your Current Status"
                    type="text"
                  />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="verificationDoc">
                    Upload Verification Document
                  </Label>
                  <div className="relative w-full h-32 border border-dashed border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
                    <input
                      id="verificationDoc"
                      type="file"
                      onChange={handleVerificationDocChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      {verificationDoc ? (
                        <>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{verificationDoc.name}</div>
                          <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {Math.round(verificationDoc.size / 1024)} KB
                          </div>
                        </>
                      ) : (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Drag & Drop your document here or click to upload
                        </div>
                      )}
                    </div>
                  </div>
                  <LabelInputContainer className="mt-2">
                    <Label htmlFor="verificationDocDescription">
                      Description of Verification Document
                    </Label>
                    <Input
                      id="verificationDocDescription"
                      value={verificationDocDescription}
                      onChange={handleVerificationDocDescriptionChange}
                      placeholder="Provide a description of the document"
                      type="text"
                    />
                  </LabelInputContainer>
                </LabelInputContainer>
              </>
            )}

            {role === "user" && (
              <>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" placeholder="Enter your age" type="number" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. New York, USA" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="criteria">Eligibility Criteria</Label>
                  <select
                    id="criteria"
                    value={eligibility}
                    onChange={handleEligibilityChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-black"
                  >
                    {eligibilityOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </LabelInputContainer>
                {eligibility !== "none" && (
                  <>
                    <LabelInputContainer className="mt-4">
                      <Label htmlFor="proof">Upload Proof of Eligibility</Label>
                      <div className="relative w-full h-32 border border-dashed border-gray-300 rounded-md bg-gray-50 dark:bg-gray-800 p-4">
                        <input
                          id="proof"
                          type="file"
                          onChange={handleProofChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          {proof ? (
                            <>
                              <div className="text-sm text-gray-600 dark:text-gray-300">{proof.name}</div>
                              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                {Math.round(proof.size / 1024)} KB
                              </div>
                            </>
                          ) : (
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Drag & Drop your document here or click to upload
                            </div>
                          )}
                        </div>
                      </div>
                      <LabelInputContainer className="mt-2">
                        <Label htmlFor="proofDescription">Description of Proof Document</Label>
                        <Input
                          id="proofDescription"
                          value={proofDescription}
                          onChange={handleProofDescriptionChange}
                          placeholder="Provide a description of the document"
                          type="text"
                        />
                      </LabelInputContainer>
                    </LabelInputContainer>
                  </>
                )}
              </>
            )}

            <button
              className="top-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </>
        ) : (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login &rarr;
              <BottomGradient />
            </button>
          </>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
