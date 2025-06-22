"use client";
import React, { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import BlurText from "@/components/BlurText";
import GradientGlowButton from '@/components/button';
import Navbar from '@/components/navbar1';
import Button2 from '@/components/button2';
import Particles from '@/components/Backgrounds/Particles';
import { User, FileText, UploadCloud, CreditCard } from 'lucide-react';

/*
export default function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Navbar />
      
      <BlurText
        text="Want help with assignments ?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl text-gray-100 font-bold text-shadow-glow"
      />
      <br />
      <GradientGlowButton href="/sign" label="Get Started " />

    </div>
  );
}

*/

const FormPage = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Step 2 state
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');

  // Step 3 state
  const [instructions, setInstructions] = useState('');
  const [mainFile, setMainFile] = useState<File | null>(null);
  const [notesFile, setNotesFile] = useState<File | null>(null);

  const allFilled = firstName && lastName && email && phone;
  const step2AllFilled = subject && course && branch && semester;
  const step3AllFilled = mainFile; // Assuming at least the main file is required

  const handleFileChange =
    (setter: React.Dispatch<React.SetStateAction<File | null>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setter(e.target.files[0]);
      }
    };

  return (
    <div className="min-h-screen w-full relative bg-black text-white md:h-screen md:overflow-hidden overflow-y-auto md:overflow-y-hidden">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-300">
          Order Your Assignment
        </h1>
        <p className="text-sm md:text-base text-gray-300 mt-2 mb-10">
          Fill out the form below to get started with your assignment
        </p>

        {/* Progress Indicator */}
        <div className="flex items-center w-full max-w-2xl">
          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                step >= 1 ? 'bg-blue-600' : 'bg-gray-700'
              } p-3 rounded-full`}
            >
              <User size={20} className="text-white" />
            </div>
          </div>
          <div
            className={`flex-1 h-1 ${
              step >= 2 ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          ></div>

          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                step >= 2 ? 'bg-blue-600' : 'bg-gray-700'
              } p-3 rounded-full`}
            >
              <FileText size={20} className="text-white" />
            </div>
          </div>
          <div
            className={`flex-1 h-1 ${
              step >= 3 ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          ></div>

          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                step >= 3 ? 'bg-blue-600' : 'bg-gray-700'
              } p-3 rounded-full`}
            >
              <UploadCloud size={20} className="text-white" />
            </div>
          </div>
          <div
            className={`flex-1 h-1 ${
              step >= 4 ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          ></div>

          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                step >= 4 ? 'bg-blue-600' : 'bg-gray-700'
              } p-3 rounded-full`}
            >
              <CreditCard size={20} className="text-white" />
            </div>
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl mt-10 p-8 w-full max-w-5xl shadow-xl overflow-y-auto max-h-[calc(100vh-18rem)]">
            <h2 className="text-xl font-semibold mb-1 text-white">
              Personal Information
            </h2>
            <p className="text-sm text-gray-300 mb-4">Step 1 of 4</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  className="block text-gray-200 mb-1"
                  htmlFor="firstName"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full bg-gray-800 p-2 rounded text-white placeholder-gray-400"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-200 mb-1" htmlFor="lastName">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full bg-gray-800 p-2 rounded text-white placeholder-gray-400"
                />
              </div>

              {/* Email (full width) */}
              <div className="md:col-span-2">
                <label className="block text-gray-200 mb-1" htmlFor="email">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-gray-800 p-2 rounded text-white placeholder-gray-400"
                />
              </div>

              {/* Phone (full width, below email) */}
              <div className="md:col-span-2">
                <label className="block text-gray-200 mb-1" htmlFor="phone">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-gray-800 p-2 rounded text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button2 disabled={!allFilled} onClick={() => setStep(2)} />
            </div>
          </div>
        )}

        {/* Step 2: Assignment Details */}
        {step === 2 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl mt-10 p-8 w-full max-w-5xl shadow-xl overflow-y-auto max-h-[calc(100vh-18rem)]">
            <h2 className="text-xl font-semibold mb-1 text-white">
              Assignment Details
            </h2>
            <p className="text-sm text-gray-300 mb-6">Step 2 of 4</p>

            <div className="space-y-8">
              {/* Subject */}
              <div>
                <label className="block text-gray-400 mb-1" htmlFor="subject">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Computer Science"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 p-2 rounded-none text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-gray-400 mb-1" htmlFor="course">
                  Course<span className="text-red-500">*</span>
                </label>
                <input
                  id="course"
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="e.g., Data Structures and Algorithms"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 p-2 rounded-none text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Branch */}
              <div>
                <label className="block text-gray-400 mb-1" htmlFor="branch">
                  Branch<span className="text-red-500">*</span>
                </label>
                <input
                  id="branch"
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder="e.g., Information Technology"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 p-2 rounded-none text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Semester */}
              <div>
                <label className="block text-gray-400 mb-1" htmlFor="semester">
                  Semester<span className="text-red-500">*</span>
                </label>
                <input
                  id="semester"
                  type="text"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  placeholder="e.g., 3rd"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 p-2 rounded-none text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>
              
              <div className="pt-4 text-gray-300">
                <p><span className="font-bold text-white">Project Type:</span> Assignment</p>
                <p><span className="font-bold text-white">Number of Pages:</span> 10</p>
              </div>

            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-white"
              >
                ← Previous
              </button>
              <Button2 disabled={!step2AllFilled} onClick={() => setStep(3)} />
            </div>
          </div>
        )}

        {/* Step 3: Upload Documents */}
        {step === 3 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl mt-10 p-8 w-full max-w-5xl shadow-xl overflow-y-auto max-h-[calc(100vh-18rem)]">
            <h2 className="text-xl font-semibold mb-1 text-white">
              Upload Documents
            </h2>
            <p className="text-sm text-gray-300 mb-6">Step 3 of 4</p>

            <div className="space-y-8">
              {/* Instructions */}
              <div>
                <label
                  className="block text-gray-400 mb-1"
                  htmlFor="instructions"
                >
                  Instructions
                </label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Provide any specific instructions for your assignment..."
                  className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 p-2 rounded-none text-white placeholder-gray-500 outline-none transition-colors h-24 resize-none"
                />
              </div>

              {/* Main File Upload */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Upload Assignment<span className="text-red-500">*</span>
                </label>
                <label
                  htmlFor="mainFile"
                  className="w-full flex items-center justify-center bg-gray-800/50 border-2 border-dashed border-gray-600 hover:border-indigo-400 p-6 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="text-center">
                    <UploadCloud
                      className="mx-auto h-12 w-12 text-gray-500"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm text-gray-400">
                      <span className="font-semibold text-indigo-400">
                        Click to upload
                      </span>{' '}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOCX, PNG, JPG, ZIP, etc.
                    </p>
                    {mainFile && (
                      <p className="text-sm text-green-400 mt-2">
                        {mainFile.name}
                      </p>
                    )}
                  </div>
                  <input
                    id="mainFile"
                    name="mainFile"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange(setMainFile)}
                  />
                </label>
              </div>

              {/* Notes File Upload */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Upload Notes (Optional)
                </label>
                <label
                  htmlFor="notesFile"
                  className="w-full flex items-center justify-center bg-gray-800/50 border-2 border-dashed border-gray-600 hover:border-indigo-400 p-6 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="text-center">
                    <FileText
                      className="mx-auto h-12 w-12 text-gray-500"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm text-gray-400">
                      <span className="font-semibold text-indigo-400">
                        Click to upload
                      </span>{' '}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      Any additional notes or materials
                    </p>
                    {notesFile && (
                      <p className="text-sm text-green-400 mt-2">
                        {notesFile.name}
                      </p>
                    )}
                  </div>
                  <input
                    id="notesFile"
                    name="notesFile"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange(setNotesFile)}
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-white"
              >
                ← Previous
              </button>
              <Button2 disabled={!step3AllFilled} onClick={() => setStep(4)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPage;
