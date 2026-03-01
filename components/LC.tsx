// // 'use client';

// // import { useEffect, useState } from 'react';
// // import {
// //   RadialBarChart,
// //   RadialBar,
// //   ResponsiveContainer,
// // } from 'recharts';

// // interface LeetCodeData {
// //   totalSolved: number;
// //   easySolved: number;
// //   mediumSolved: number;
// //   hardSolved: number;
// //   ranking: number;
// // }

// // export default function LC() {
// //   const username = 'ritik-7032';
// //   const [data, setData] = useState<LeetCodeData | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
// //       .then((res) => res.json())
// //       .then((res) => {
// //         setData(res);
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   }, []);

// //   if (loading || !data) {
// //     return (
// //       <div className="w-full flex justify-center">
// //         <div className="w-full max-w-3xl  bg-[#111] rounded-2xl p-10 text-center text-gray-400">
// //           Loading LeetCode Stats...
// //         </div>
// //       </div>
// //     );
// //   }

// //   const totalQuestions = 3000; // approximate total LC questions
// //   const progressPercent = (data.totalSolved / totalQuestions) * 100;

// //   const radialData = [
// //     {
// //       name: 'Solved',
// //       value: progressPercent,
// //       fill: 'url(#gradient)',
// //     },
// //   ];

// //   return (
// //     <div className="w-full flex justify-center mb-20">
// //       <div className="w-full max-w-3xl -gradient-to-br from-[#111] via-[#1a1a1a] to-[#111] rounded-3xl p-10 border border-gray-700 shadow-2xl">

// //         {/* Header */}
// //         <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
// //           LeetCode
// //         </h2>

// //         <div className="grid md:grid-cols-2 gap-12 items-center">

// //           {/* Circular Progress */}
// //           <div className="h-52">
// //             <ResponsiveContainer>
// //               <RadialBarChart
// //                 innerRadius="7%"
// //                 outerRadius="100%"
// //                 data={radialData}
// //                 startAngle={90}
// //                 endAngle={-270}
// //               >
// //                 <defs>
// //                   <linearGradient id="gradient">
// //                     <stop offset="0%" stopColor="#22d3ee" />
// //                     <stop offset="100%" stopColor="#8b5cf6" />
// //                   </linearGradient>
// //                 </defs>

// //                 <RadialBar
// //                   minAngle={15}
// //                   clockWise
// //                   dataKey="value"
// //                   cornerRadius={20}
// //                 />
// //               </RadialBarChart>
// //             </ResponsiveContainer>

// //             <div className="relative -mt-40 text-center">
// //               <h3 className="text-4xl font-bold text-white">
// //                 {data.totalSolved}
// //               </h3>
// //               <p className="text-gray-400 text-sm">
// //                 / {totalQuestions} Solved
// //               </p>
// //             </div>
// //           </div>

// //           {/* Stats Right Side */}
// //           <div className="space-y-6">

// //             <StatBox label="Rank" value={data.ranking} />
// //             <StatBox label="Easy" value={data.easySolved} />
// //             <StatBox label="Medium" value={data.mediumSolved} />
// //             <StatBox label="Hard" value={data.hardSolved} />

// //           </div>

// //         </div>

// //         {/* Difficulty Bars */}
// //         <div className="mt-12 space-y-6">

// //           <Progress
// //             label="Easy"
// //             value={data.easySolved}
// //             color="from-cyan-400 to-cyan-600"
// //           />
// //           <Progress
// //             label="Medium"
// //             value={data.mediumSolved}
// //             color="from-emerald-400 to-emerald-600"
// //           />
// //           <Progress
// //             label="Hard"
// //             value={data.hardSolved}
// //             color="from-rose-400 to-rose-600"
// //           />

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // function StatBox({ label, value }: { label: string; value: number }) {
// //   return (
// //     <div className="bg-white/5 border border-gray-700 rounded-xl p-6 backdrop-blur-md">
// //       <div className="text-2xl font-bold text-white">{value}</div>
// //       <div className="text-gray-400 text-sm">{label}</div>
// //     </div>
// //   );
// // }

// // function Progress({
// //   label,
// //   value,
// //   color,
// // }: {
// //   label: string;
// //   value: number;
// //   color: string;
// // }) {
// //   return (
// //     <div>
// //       <div className="flex justify-between text-sm mb-2 text-gray-300">
// //         <span>{label}</span>
// //         <span>{value}</span>
// //       </div>
// //       <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
// //         <div
// //           className={`h-3 rounded-full bg-gradient-to-r ${color}`}
// //           style={{ width: `${Math.min(value / 10, 100)}%` }}
// //         ></div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';

// export default function LC() {
//   const username = 'ritik-7032';
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
//       .then(res => res.json())
//       .then(res => setData(res));
//   }, []);

//   if (!data) return null;

//   return (
//     <div className="w-[500px] bg-white rounded-xl border border-gray-200 p-5 shadow-md">

//       <h2 className="text-sm font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
//         LeetCode
//       </h2>

//       {/* Compact Circular */}
//       <div className="flex justify-center mb-4">
//         <div className="relative w-20 h-20">

//           <div className="absolute inset-0 rounded-full 
//             bg-[conic-gradient(#06b6d4,#8b5cf6,#06b6d4)] 
//             animate-spin">
//           </div>

//           <div className="absolute inset-2 bg-white rounded-full 
//             flex flex-col items-center justify-center">

//             <p className="text-sm font-bold">
//               {data.totalSolved}
//             </p>
//             <p className="text-[10px] text-gray-500">
//               {data.totalSolved}/{data.totalQuestions}
//             </p>

//           </div>

//         </div>
//       </div>

//       {/* Difficulty */}
//       <div className="space-y-1 text-xs">

//         <div className="flex justify-between">
//           <span className="text-green-600">Easy</span>
//           <span>{data.easySolved}/{data.totalEasy}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-yellow-600">Medium</span>
//           <span>{data.mediumSolved}/{data.totalMedium}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-red-600">Hard</span>
//           <span>{data.hardSolved}/{data.totalHard}</span>
//         </div>

//       </div>

//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function LC() {
  const username = "ritik-7032";

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${username}`
        );

        if (!res.ok) {
          throw new Error("API Error");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("LeetCode API Error:", err);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="w-[500px] bg-white rounded-xl border border-gray-200 p-5 shadow-md text-center text-sm text-gray-500">
        Unable to fetch LeetCode stats.
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="w-[500px] bg-white rounded-xl border border-gray-200 p-5 shadow-md">

      <h2 className="text-sm font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
        LeetCode
      </h2>

      <div className="flex justify-center mb-4">
        <div className="relative w-20 h-20">

          <div className="absolute inset-0 rounded-full 
            bg-[conic-gradient(#06b6d4,#8b5cf6,#06b6d4)] 
            animate-spin">
          </div>

          <div className="absolute inset-2 bg-white rounded-full 
            flex flex-col items-center justify-center">

            <p className="text-sm font-bold">
              {data.totalSolved}
            </p>
            <p className="text-[10px] text-gray-500">
              {data.totalSolved}/{data.totalQuestions}
            </p>

          </div>
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-green-600">Easy</span>
          <span>{data.easySolved}/{data.totalEasy}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-yellow-600">Medium</span>
          <span>{data.mediumSolved}/{data.totalMedium}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-red-600">Hard</span>
          <span>{data.hardSolved}/{data.totalHard}</span>
        </div>
      </div>
    </div>
  );
}