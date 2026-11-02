/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BismillahHeader } from './components/BismillahHeader';
import { Navbar } from './components/Navbar';
import { SchoolNewsTicker } from './components/SchoolNewsTicker';
import { SchoolNewsModal } from './components/SchoolNewsModal';
import { HeroSection } from './components/HeroSection';
import { AboutSchool } from './components/AboutSchool';
import { AshrafTribute } from './components/AshrafTribute';
import { VisionMission } from './components/VisionMission';
import { StagesAndCurriculum } from './components/StagesAndCurriculum';
import { FacilitiesAndActivities } from './components/FacilitiesAndActivities';
import { StudentMotivation } from './components/StudentMotivation';
import { StudentDevelopersCredit } from './components/StudentDevelopersCredit';
import { Footer } from './components/Footer';
import { FloatingBlessing } from './components/FloatingBlessing';
import { FloatingAssistantButton } from './components/FloatingAssistantButton';
import { SmartAssistantModal } from './components/SmartAssistantModal';
import { NubianDivider } from './components/NubianDivider';

// Panoramic Aswan & Nubian Nile Sunset Backdrop
import aswanBackdrop from './assets/images/aswan_nubian_backdrop_1793356721605.jpg';

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060e1d] text-slate-100 flex flex-col font-['Cairo',sans-serif] relative selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* Immersive Fixed Aswan & Nubia Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Full scenic view of the Nile, feluccas, Nubian village, and Aswan golden sunset */}
        <img
          src={aswanBackdrop}
          alt="أسوان والنوبة"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 contrast-105"
        />

        {/* Deep Royal Navy, Nile Twilight, and Gold Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e1d]/85 via-[#08172d]/75 to-[#050b14]/90" />
        <div className="absolute inset-0 bg-[#071120]/60 backdrop-blur-[1.5px]" />

        {/* Subtle Nubian geometric patterns */}
        <div className="absolute inset-0 nubian-pattern opacity-25" />
      </div>

      {/* Main Content (relative z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* 1. Beginning of site: Bismillah in elegant typography */}
        <BismillahHeader />

        {/* 2. Sticky Navbar with school logo, links, and news & chat triggers */}
        <Navbar 
          onOpenAssistant={() => setIsAssistantOpen(true)}
          onOpenNews={() => setIsNewsOpen(true)}
        />

        {/* 3. Live School News Ticker from Facebook Page */}
        <SchoolNewsTicker onOpenNewsModal={() => setIsNewsOpen(true)} />

        {/* Main Content Flow */}
        <main className="flex-1 flex flex-col">
          {/* 4. Hero Section with Nile/Aswan atmosphere & motivational banners */}
          <HeroSection 
            onOpenAssistant={() => setIsAssistantOpen(true)} 
            onOpenNews={() => setIsNewsOpen(true)}
          />

          <NubianDivider />

          {/* 5. About the School, Armana Village & Haya Karima Expansion */}
          <AboutSchool />

          <NubianDivider />

          {/* 6. Tribute & Gratitude: Mr. Ashraf Abdel Baqi */}
          <AshrafTribute />

          <NubianDivider />

          {/* 7. Vision, Mission, and Core Values */}
          <VisionMission />

          <NubianDivider />

          {/* 7. Educational Stages & Digital Tablet Curriculum */}
          <StagesAndCurriculum />

          <NubianDivider />

          {/* 8. Facilities, Science Labs & School Activities */}
          <FacilitiesAndActivities />

          <NubianDivider />

          {/* 9. Motivational Oasis & Study Guidance */}
          <StudentMotivation />

          <NubianDivider />

          {/* 10. Student Developers Tribute Card */}
          <StudentDevelopersCredit />
        </main>

        {/* 11. Footer with the required verbatim student acknowledgment */}
        <Footer />

      </div>

      {/* 12. Floating Widget in Corner: «صلِّ على النبي ﷺ» */}
      <FloatingBlessing />

      {/* 13. Floating Smart Assistant in Corner + Chat Modal */}
      <FloatingAssistantButton
        isOpen={isAssistantOpen}
        onClick={() => setIsAssistantOpen(true)}
      />
      <SmartAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* 14. Interactive Window: Latest News from School Facebook Page */}
      <SchoolNewsModal
        isOpen={isNewsOpen}
        onClose={() => setIsNewsOpen(false)}
      />

    </div>
  );
}
