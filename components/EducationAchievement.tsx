'use client';

import React, { useState } from 'react';
import { GraduationCap, Trophy, Award, Code, Star, Users, Shield } from 'lucide-react';

export default function EducationAchievement() {
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>(
    'education'
  );

  /* ================= EDUCATION DATA ================= */

const educationData = [
  {
    id: 1,
    year: "2023 – 2027",
    title: "B.Tech in Electronics and Communication Engineering",
    subtitle: "Indian Institute of Information Technology, Ranchi",
    logo: "/assets/iiitr.png",
    score: "CGPA: 7.29*/ 10",   // 
    color: "cyan",
  },
  {
    id: 2,
    year: "",
    title: "Higher Secondary (12th)",
    subtitle: "Vivekanand Sr. Sec. School, Rewari, Haryana",
    logo: "/assets/12th.jpeg",
    score: "Percentage: 89%",   //
    color: "emerald",
  },
  {
    id: 3,
    year: "",
    title: "Secondary (10th)",
    subtitle: "Shaheed Amar Singh Public School, Gurugram, Haryana",
    logo: "/assets/10th.jpeg",
    score: "Percentage: 82%",   // 
    color: "rose",
  },
];

  /* ================= ACHIEVEMENTS DATA ================= */

//  import { Trophy, Code, Star, Users, Shield } from "lucide-react";

const achievementsData = [
  {
    id: 1,
   
    title: "Top 5% in JEE Main",
    subtitle: "Ranked among 1M+ candidates nationwide (NTA)",
    icon: Trophy,
    color: "amber",
  },
  {
    id: 2,
  
    title: "Solved 250+ DSA Problems",
    subtitle: "Across LeetCode & GeeksforGeeks",
    icon: Code,
    color: "violet",
  },
  {
    id: 3,
   
    title: "Appeared for SSB Interview (Twice)",
    subtitle: "Services Selection Board – Indian Armed Forces",
    icon: Shield,
    color: "red",
  },
  {
    id: 4,
  
    title: "Organized Faculty Development Program",
    subtitle: "Managed 50+ participants successfully",
    icon: Users,
    color: "emerald",
  },
];
  const currentData =
    activeTab === 'education' ? educationData : achievementsData;

  const colorMap: { [key: string]: string } = {
    cyan: 'text-cyan-600 from-cyan-500 to-blue-500',
    emerald: 'text-emerald-600 from-emerald-500 to-teal-500',
    rose: 'text-rose-600 from-rose-500 to-pink-500',
    amber: 'text-amber-600 from-amber-500 to-orange-500',
    violet: 'text-violet-600 from-violet-500 to-purple-500',
    orange: 'text-orange-600 from-orange-500 to-red-500',
  };

  return (
    <div className="w-full max-w-3xl">

      {/* ================= TOGGLE ================= */}
      <div className="flex items-center gap-8 mb-12">

        <button
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-3 pb-2 border-b-2 transition-all ${
            activeTab === 'education'
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          <h2 className="text-xl font-bold">Education</h2>
        </button>

        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-3 pb-2 border-b-2 transition-all ${
            activeTab === 'achievements'
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <Trophy className="w-5 h-5" />
          <h2 className="text-xl font-bold">Achievements</h2>
        </button>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      </div>

      {/* ================= DIAGONAL CARDS ================= */}
      <div className="space-y-12">
        {currentData.map((item: any, index: number) => {
          const isLeft = index % 2 === 0;
          const colors = colorMap[item.color] || colorMap.cyan;
          const Icon = item.icon;

          return (
            <div key={item.id} className="grid grid-cols-2 gap-8 items-center">

              {isLeft ? (
                <>
                  <Card
                    item={item}
                    activeTab={activeTab}
                    colors={colors}
                    Icon={Icon}
                  />
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <Card
                    item={item}
                    activeTab={activeTab}
                    colors={colors}
                    Icon={Icon}
                  />
                </>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function Card({ item, activeTab, colors, Icon }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-300 p-6 shadow-md hover:shadow-lg transition-all">

      <div className="flex gap-4">

        <div className="w-14 h-14 rounded-lg border border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
          {activeTab === "education" ? (
            <img
              src={item.logo}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <Icon className="w-6 h-6 text-gray-700" />
          )}
        </div>

        <div className="flex-1">

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {item.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-600">
            {item.subtitle}
          </p>

          {/* ✅ Score Field Added */}
          {item.score && (
            <p className="text-sm font-semibold text-gray-800 mt-2">
              {item.score}
            </p>
          )}

          {/* Gradient Line */}
          <div
            className={`mt-3 h-1.5 bg-gradient-to-r ${colors
              .split(" ")
              .slice(1)
              .join(" ")} rounded-full w-32`}
          ></div>

        </div>
      </div>
    </div>
  );
}