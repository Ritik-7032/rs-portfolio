// // 'use client';

// // import { useEffect, useState } from 'react';

// // interface LeetCodeData {
// //   totalSolved: number;
// //   totalQuestions: number;
// //   easySolved: number;
// //   totalEasy: number;
// //   mediumSolved: number;
// //   totalMedium: number;
// //   hardSolved: number;
// //   totalHard: number;
// //   ranking: number;
// // }

// // export default function LC() {
// //   const username = 'ritik-7032';
// //   const [data, setData] = useState<LeetCodeData | null>(null);
// //   const [activeTab, setActiveTab] = useState<'education' | 'achievement'>(
// //     'achievement'
// //   );

// //   useEffect(() => {
// //     fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
// //       .then((res) => res.json())
// //       .then((res) =>
// //         setData({
// //           totalSolved: res.totalSolved,
// //           totalQuestions: res.totalQuestions,
// //           easySolved: res.easySolved,
// //           totalEasy: res.totalEasy,
// //           mediumSolved: res.mediumSolved,
// //           totalMedium: res.totalMedium,
// //           hardSolved: res.hardSolved,
// //           totalHard: res.totalHard,
// //           ranking: res.ranking,
// //         })
// //       );
// //   }, []);

// //   if (!data) return null;

// //   return (
// //     <div className="flex justify-center mt-10">
// //       <div className="w-[420px] bg-white rounded-2xl border border-gray-200 p-6 shadow-md">
// //           <>
// //             <div className="flex justify-center mb-6">
// //               <div className="relative w-28 h-28">
// //                 <div className="absolute inset-0 rounded-full 
// //                   bg-[conic-gradient(#06b6d4,_#8b5cf6,_#06b6d4)] 
// //                   animate-spin">
// //                 </div>

// //                 <div className="absolute inset-2 bg-white rounded-full 
// //                   flex flex-col items-center justify-center">

// //                   <p className="text-gray-900 font-bold text-lg">
// //                     {data.totalSolved}
// //                   </p>
// //                   <p className="text-gray-500 text-xs">
// //                     {data.totalSolved} / {data.totalQuestions}
// //                   </p>

// //                 </div>

// //               </div>
// //             </div>

// //             {/* Difficulty Stats */}
// //             <div className="space-y-3 text-sm">

// //               <div className="flex justify-between">
// //                 <span className="text-green-600 font-medium">
// //                   Easy
// //                 </span>
// //                 <span>
// //                   {data.easySolved} / {data.totalEasy}
// //                 </span>
// //               </div>

// //               <div className="flex justify-between">
// //                 <span className="text-yellow-600 font-medium">
// //                   Medium
// //                 </span>
// //                 <span>
// //                   {data.mediumSolved} / {data.totalMedium}
// //                 </span>
// //               </div>

// //               <div className="flex justify-between">
// //                 <span className="text-red-600 font-medium">
// //                   Hard
// //                 </span>
// //                 <span>
// //                   {data.hardSolved} / {data.totalHard}
// //                 </span>
// //               </div>

// //               <div className="flex justify-between pt-3 border-t text-gray-600">
// //                 <span>Ranking</span>
// //                 <span>{data.ranking}</span>
// //               </div>

// //             </div>
// //           </>
        
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import React, { useState } from 'react';
// import { GraduationCap, Trophy, Award, Code } from 'lucide-react';
// import LC from './LC';

// export default function ProfileSection() {
//   const [activeTab, setActiveTab] = useState<'education' | 'achievements'>(
//     'education'
//   );

//   const educationData = [
//     {
//       id: 1,
//       year: '2023 – 2027',
//       title: 'B.Tech in Electronics and Communication Engineering',
//       subtitle:
//         'Indian Institute of Information Technology, Ranchi',
//       logo: '/assets/iiitr.png',
//       color: 'cyan',
//     },
//     {
//       id: 2,
//       year: '',
//       title: 'Higher Secondary (12th)',
//       subtitle:
//         'Vivekanand Sr. Sec. School, Rewari, Haryana',
//       logo: '/assets/12th.jpeg',
//       color: 'emerald',
//     },
//     {
//       id: 3,
//       year: '',
//       title: 'Secondary (10th)',
//       subtitle:
//         'Shaheed Amar Singh Public School, Gurugram, Haryana',
//       logo: '/assets/10th.jpeg',
//       color: 'rose',
//     },
//   ];

//   const achievementsData = [
//     {
//       id: 1,
//       year: '2024',
//       title: 'Winner - National Hackathon',
//       subtitle: 'AI Based Smart Monitoring System',
//       icon: Trophy,
//       color: 'amber',
//     },
//     {
//       id: 2,
//       year: '2023',
//       title: 'Open Source Contributor',
//       subtitle: 'Contributed to 10+ GitHub Projects',
//       icon: Code,
//       color: 'violet',
//     },
//     {
//       id: 3,
//       year: '2022',
//       title: 'Coding Competition Finalist',
//       subtitle: 'Inter College Technical Fest',
//       icon: Award,
//       color: 'orange',
//     },
//   ];

//   const currentData =
//     activeTab === 'education' ? educationData : achievementsData;

//   const colorMap: { [key: string]: string } = {
//     cyan: 'text-cyan-600 from-cyan-500 to-blue-500',
//     emerald: 'text-emerald-600 from-emerald-500 to-teal-500',
//     rose: 'text-rose-600 from-rose-500 to-pink-500',
//     amber: 'text-amber-600 from-amber-500 to-orange-500',
//     violet: 'text-violet-600 from-violet-500 to-purple-500',
//     orange: 'text-orange-600 from-orange-500 to-red-500',
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 py-16 px-6 md:px-12">

//       {/* MAIN GRID (LEFT = EDU/ACH , RIGHT = LC) */}
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

//         {/* ================= LEFT SIDE ================= */}
//         <div>

//           {/* Toggle */}
//           <div className="flex items-center gap-8 mb-12">
//             <button
//               onClick={() => setActiveTab('education')}
//               className={`flex items-center gap-3 pb-3 border-b-2 transition-all ${
//                 activeTab === 'education'
//                   ? 'border-gray-900 text-gray-900'
//                   : 'border-transparent text-gray-500 hover:text-gray-800'
//               }`}
//             >
//               <GraduationCap className="w-6 h-6" />
//               <h2 className="text-2xl font-bold">Education</h2>
//             </button>

//             <button
//               onClick={() => setActiveTab('achievements')}
//               className={`flex items-center gap-3 pb-3 border-b-2 transition-all ${
//                 activeTab === 'achievements'
//                   ? 'border-gray-900 text-gray-900'
//                   : 'border-transparent text-gray-500 hover:text-gray-800'
//               }`}
//             >
//               <Trophy className="w-6 h-6" />
//               <h2 className="text-2xl font-bold">Achievements</h2>
//             </button>

//             <div className="flex-1 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
//           </div>

//           {/* Diagonal Cards */}
//           <div className="space-y-12">
//             {currentData.map((item: any, index: number) => {
//               const isLeft = index % 2 === 0;
//               const colors = colorMap[item.color] || colorMap.cyan;
//               const Icon = item.icon;

//               return (
//                 <div key={item.id} className="grid grid-cols-2 gap-8 items-center">

//                   {isLeft ? (
//                     <>
//                       <Card item={item} activeTab={activeTab} colors={colors} Icon={Icon} />
//                       <div></div>
//                     </>
//                   ) : (
//                     <>
//                       <div></div>
//                       <Card item={item} activeTab={activeTab} colors={colors} Icon={Icon} />
//                     </>
//                   )}

//                 </div>
//               );
//             })}
//           </div>

//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="flex justify-end">
//           <LC />
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ---------- Card Component ---------- */

// function Card({ item, activeTab, colors, Icon }: any) {
//   return (
//     <div className="bg-white rounded-xl border border-gray-300 p-6 shadow-md hover:shadow-lg transition-all">
//       <div className="flex gap-4">
//         <div className="w-14 h-14 rounded-lg border border-gray-300 flex items-center justify-center bg-gray-50 overflow-hidden">
//           {activeTab === 'education' ? (
//             <img
//               src={item.logo}
//               alt={item.title}
//               className="w-full h-full object-cover rounded-md"
//             />
//           ) : (
//             <Icon className="w-7 h-7 text-gray-700" />
//           )}
//         </div>

//         <div className="flex-1">
//           {item.year && (
//             <div className={`text-sm font-semibold ${colors.split(' ')[0]} mb-1`}>
//               {item.year}
//             </div>
//           )}

//           <h3 className="text-lg font-bold text-gray-900 mb-1">
//             {item.title}
//           </h3>

//           <p className="text-sm text-gray-600">
//             {item.subtitle}
//           </p>

//           <div
//             className={`mt-3 h-1.5 bg-gradient-to-r ${colors
//               .split(' ')
//               .slice(1)
//               .join(' ')} rounded-full w-32`}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import LC from './LC';
import EducationAchievement from './EducationAchievement';

export default function Education() {
  return (
    <div 
    id="education"
    className="min-h-screen bg-secondary/20 px-8 py-16">

   
      <div className="flex justify-end">
        <LC />
      </div>

    
      <div className="mt-16 flex justify-start">
        <EducationAchievement />
      </div>

    </div>
  );
}