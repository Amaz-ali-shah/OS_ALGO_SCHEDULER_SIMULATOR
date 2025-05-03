// // // // // // // import React from 'react';

// // // // // // // const GanttChart = ({ schedule }) => {
// // // // // // //   const totalTime = schedule[schedule.length - 1]?.endTime || 1;

// // // // // // //   return (
// // // // // // //     <div style={styles.chartContainer}>
// // // // // // //       {schedule.map((proc, index) => {
// // // // // // //         const widthPercent = ((proc.endTime - proc.startTime) / totalTime) * 100;

// // // // // // //         return (
// // // // // // //           <div key={index} style={{ ...styles.block, width: `${widthPercent}%` }}>
// // // // // // //             <span>{proc.processName}</span>
// // // // // // //             <div style={styles.time}>
// // // // // // //               {proc.startTime} - {proc.endTime}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       })}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = {
// // // // // // //   chartContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     width: '100%',
// // // // // // //     backgroundColor: '#f2f2f2',
// // // // // // //     border: '1px solid #ccc',
// // // // // // //     marginTop: '1rem',
// // // // // // //     borderRadius: '5px',
// // // // // // //     overflow: 'hidden',
// // // // // // //   },
// // // // // // //   block: {
// // // // // // //     backgroundColor: '#61dafb',
// // // // // // //     color: '#000',
// // // // // // //     padding: '0.5rem',
// // // // // // //     textAlign: 'center',
// // // // // // //     borderRight: '1px solid white',
// // // // // // //     position: 'relative',
// // // // // // //   },
// // // // // // //   time: {
// // // // // // //     fontSize: '0.7rem',
// // // // // // //     marginTop: '0.3rem',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default GanttChart;
// // // // // // import React from 'react';

// // // // // // const GanttChart = ({ schedule }) => {
// // // // // //   const totalTime = schedule[schedule.length - 1]?.endTime || 1;

// // // // // //   // Current time (simulated as a value, could be dynamic or based on a timer)
// // // // // //   const currentTime = Date.now() % totalTime;

// // // // // //   return (
// // // // // //     <div style={styles.chartContainer}>
// // // // // //       {schedule.map((proc, index) => {
// // // // // //         const widthPercent = ((proc.endTime - proc.startTime) / totalTime) * 100;
// // // // // //         const isActive = currentTime >= proc.startTime && currentTime <= proc.endTime; // Check if process is active

// // // // // //         return (
// // // // // //           <div
// // // // // //             key={index}
// // // // // //             style={{
// // // // // //               ...styles.block,
// // // // // //               width: `${widthPercent}%`,
// // // // // //               backgroundColor: isActive ? '#ff6347' : '#61dafb', // Highlight active process
// // // // // //             }}
// // // // // //           >
// // // // // //             <span>{proc.processName}</span>
// // // // // //             <div style={styles.time}>
// // // // // //               {proc.startTime} - {proc.endTime}
// // // // // //             </div>
// // // // // //             {isActive && (
// // // // // //               <div style={styles.currentProcessIndicator}>
// // // // // //                 <span>Currently Executing</span>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         );
// // // // // //       })}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const styles = {
// // // // // //   chartContainer: {
// // // // // //     display: 'flex',
// // // // // //     width: '100%',
// // // // // //     backgroundColor: '#f2f2f2',
// // // // // //     border: '1px solid #ccc',
// // // // // //     marginTop: '1rem',
// // // // // //     borderRadius: '5px',
// // // // // //     overflow: 'hidden',
// // // // // //   },
// // // // // //   block: {
// // // // // //     backgroundColor: '#61dafb',
// // // // // //     color: '#000',
// // // // // //     padding: '0.5rem',
// // // // // //     textAlign: 'center',
// // // // // //     borderRight: '1px solid white',
// // // // // //     position: 'relative',
// // // // // //   },
// // // // // //   time: {
// // // // // //     fontSize: '0.7rem',
// // // // // //     marginTop: '0.3rem',
// // // // // //   },
// // // // // //   currentProcessIndicator: {
// // // // // //     position: 'absolute',
// // // // // //     top: '-15px',
// // // // // //     left: '50%',
// // // // // //     transform: 'translateX(-50%)',
// // // // // //     backgroundColor: '#ff6347',
// // // // // //     color: '#fff',
// // // // // //     padding: '0.2rem',
// // // // // //     fontSize: '0.8rem',
// // // // // //     borderRadius: '3px',
// // // // // //   },
// // // // // // };

// // // // // // export default GanttChart;
// // // // // import React from 'react';

// // // // // const GanttChart = ({ schedule }) => {
// // // // //   const totalTime = schedule[schedule.length - 1]?.endTime || 1;

// // // // //   return (
// // // // //     <div style={styles.chartContainer}>
// // // // //       {schedule.map((proc, index) => {
// // // // //         const widthPercent = ((proc.endTime - proc.startTime) / totalTime) * 100;

// // // // //         return (
// // // // //           <div key={index} style={{ ...styles.block, width: `${widthPercent}%` }}>
// // // // //             <span style={styles.processName}>
// // // // //               {`P${index + 1}`} {/* Display Process P1, P2, P3, etc. */}
// // // // //             </span>
// // // // //             <div style={styles.time}>
// // // // //               {`${proc.startTime} - ${proc.endTime}`} {/* Display time slot */}
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   chartContainer: {
// // // // //     display: 'flex',
// // // // //     width: '100%',
// // // // //     backgroundColor: '#f2f2f2',
// // // // //     border: '1px solid #ccc',
// // // // //     marginTop: '1rem',
// // // // //     borderRadius: '5px',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   block: {
// // // // //     backgroundColor: '#61dafb',
// // // // //     color: '#000',
// // // // //     padding: '0.5rem',
// // // // //     textAlign: 'center',
// // // // //     borderRight: '1px solid white',
// // // // //     position: 'relative',
// // // // //   },
// // // // //   processName: {
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: '1rem',
// // // // //     position: 'absolute',
// // // // //     top: '50%',
// // // // //     left: '50%',
// // // // //     transform: 'translate(-50%, -50%)',
// // // // //   },
// // // // //   time: {
// // // // //     fontSize: '0.7rem',
// // // // //     marginTop: '0.3rem',
// // // // //     position: 'absolute',
// // // // //     bottom: '-20px', // To position it below the block
// // // // //     left: '50%',
// // // // //     transform: 'translateX(-50%)',
// // // // //   },
// // // // // };

// // // // // export default GanttChart;
// // // // import React from 'react';

// // // // const GanttChart = ({ schedule }) => {
// // // //   const totalTime = schedule[schedule.length - 1]?.endTime || 1;

// // // //   return (
// // // //     <div style={styles.chartContainer}>
// // // //       {schedule.map((proc, index) => {
// // // //         const widthPercent = ((proc.endTime - proc.startTime) / totalTime) * 100;

// // // //         return (
// // // //           <div key={index} style={{ ...styles.block, width: `${widthPercent}%` }}>
// // // //             <span style={styles.processName}>
// // // //               {`P${proc.processId}`} {/* Ensure processId is consistent */}
// // // //             </span>
// // // //             <div style={styles.time}>
// // // //               {`${proc.startTime} - ${proc.endTime}`} {/* Display both process name and time slot */}
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   chartContainer: {
// // // //     display: 'flex',
// // // //     width: '100%',
// // // //     backgroundColor: '#f2f2f2',
// // // //     border: '1px solid #ccc',
// // // //     marginTop: '1rem',
// // // //     borderRadius: '5px',
// // // //     overflow: 'hidden',
// // // //   },
// // // //   block: {
// // // //     backgroundColor: '#61dafb',
// // // //     color: '#000',
// // // //     padding: '0.5rem',
// // // //     textAlign: 'center',
// // // //     borderRight: '1px solid white',
// // // //     position: 'relative',
// // // //   },
// // // //   processName: {
// // // //     fontWeight: 'bold',
// // // //     fontSize: '1rem',
// // // //     position: 'absolute',
// // // //     top: '50%',
// // // //     left: '50%',
// // // //     transform: 'translate(-50%, -50%)',
// // // //   },
// // // //   time: {
// // // //     fontSize: '0.7rem',
// // // //     marginTop: '0.3rem',
// // // //     position: 'absolute',
// // // //     bottom: '-20px', // To position it below the block
// // // //     left: '50%',
// // // //     transform: 'translateX(-50%)',
// // // //   },
// // // // };

// // // // export default GanttChart;
// // // import React from 'react';

// // // const GanttChart = ({ schedule }) => {
// // //   if (!schedule || schedule.length === 0) {
// // //     return <div>No process data found.</div>; // Handle the case where there's no schedule
// // //   }

// // //   const totalTime = schedule[schedule.length - 1]?.endTime || 1;

// // //   return (
// // //     <div style={styles.chartContainer}>
// // //       {schedule.map((proc, index) => {
// // //         const widthPercent = ((proc.endTime - proc.startTime) / totalTime) * 100;

// // //         return (
// // //           <div key={index} style={{ ...styles.block, width: `${widthPercent}%` }}>
// // //             <span style={styles.processName}>
// // //               {`P${proc.processId}`} {/* Ensure processId is consistent */}
// // //             </span>
// // //             <div style={styles.time}>
// // //               {`${proc.startTime} - ${proc.endTime}`} {/* Display both process name and time slot */}
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   chartContainer: {
// // //     display: 'flex',
// // //     width: '100%',
// // //     backgroundColor: '#f2f2f2',
// // //     border: '1px solid #ccc',
// // //     marginTop: '1rem',
// // //     borderRadius: '5px',
// // //     overflow: 'hidden',
// // //   },
// // //   block: {
// // //     backgroundColor: '#61dafb',
// // //     color: '#000',
// // //     padding: '0.5rem',
// // //     textAlign: 'center',
// // //     borderRight: '1px solid white',
// // //     position: 'relative',
// // //   },
// // //   processName: {
// // //     fontWeight: 'bold',
// // //     fontSize: '1rem',
// // //     position: 'absolute',
// // //     top: '50%',
// // //     left: '50%',
// // //     transform: 'translate(-50%, -50%)',
// // //   },
// // //   time: {
// // //     fontSize: '0.7rem',
// // //     marginTop: '0.3rem',
// // //     position: 'absolute',
// // //     bottom: '-20px', // To position it below the block
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //   },
// // // };

// // // export default GanttChart;
// // import React from 'react';

// // const GanttChart = ({ schedule }) => {
// //   // Check if schedule is provided and has data
// //   if (!schedule || !Array.isArray(schedule) || schedule.length === 0) {
// //     return <p>No schedule data available</p>;
// //   }

// //   return (
// //     <div style={{ border: '1px solid #000', padding: '1rem', marginTop: '1rem' }}>
// //       <h4>Gantt Chart</h4>
// //       <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
// //         {schedule.map((item, index) => {
// //           // Ensure each item has the necessary properties
// //           const { processName, startTime, endTime } = item;
// //           if (processName && startTime !== undefined && endTime !== undefined) {
// //             const width = (endTime - startTime) * 20; // Example scale, adjust as needed
// //             return (
// //               <div
// //                 key={index}
// //                 style={{
// //                   width: `${width}px`,
// //                   height: '40px',
// //                   backgroundColor: 'lightblue',
// //                   marginLeft: `${startTime * 20}px`,
// //                   position: 'relative',
// //                 }}
// //               >
// //                 <span
// //                   style={{
// //                     position: 'absolute',
// //                     top: '50%',
// //                     left: '50%',
// //                     transform: 'translate(-50%, -50%)',
// //                     color: 'black',
// //                     fontWeight: 'bold',
// //                   }}
// //                 >
// //                   {processName}
// //                 </span>
// //               </div>
// //             );
// //           }
// //           return null; // In case the data is incomplete
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GanttChart;
// import React from 'react';

// // Helper function to generate a random color
// const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const GanttChart = ({ schedule }) => {
//   return (
//     <div style={{ margin: '1rem 0' }}>
//       <h4>Gantt Chart</h4>
//       <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//         <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
//           {/* Display the time labels on top */}
//           {Array.from({ length: schedule[schedule.length - 1]?.endTime || 0 }).map((_, index) => (
//             <div key={index} style={{ width: '30px', textAlign: 'center', position: 'absolute', left: `${index * 30}px` }}>
//               {index}
//             </div>
//           ))}
//         </div>

//         <div style={{ display: 'flex', width: '100%' }}>
//           {/* Create Gantt bars for each process */}
//           {schedule.map((process, index) => (
//             <div
//               key={index}
//               style={{
//                 position: 'relative',
//                 height: '30px',
//                 marginLeft: `${process.startTime * 30}px`,
//                 backgroundColor: getRandomColor(),
//                 width: `${(process.endTime - process.startTime) * 30}px`,
//                 marginRight: '5px',
//               }}
//             >
//               <div style={{ position: 'absolute', top: '0', left: '0', color: '#fff', fontSize: '12px' }}>
//                 {process.processName}
//               </div>
//               <div style={{ position: 'absolute', top: '15px', left: '0', fontSize: '10px', color: '#fff' }}>
//                 {`Start: ${process.startTime}, End: ${process.endTime}`}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default GanttChart;
// import React, { useMemo } from 'react';

// // Helper function to generate a random color once for each process
// const getRandomColor = (processName) => {
//   const colors = {
//     'P1': '#FF5733',
//     'P2': '#33FF57',
//     'P3': '#3357FF',
//     'P4': '#F1C40F',
//     'P5': '#9B59B6',
//     'P6': '#E74C3C',
//   };

//   return colors[processName] || '#3498DB';  // Fallback color if no mapping exists
// };

// const GanttChart = ({ schedule }) => {
//   // Use useMemo to generate the color map once
//   const colorMap = useMemo(() => {
//     const map = {};
//     schedule.forEach(process => {
//       if (!map[process.processName]) {
//         map[process.processName] = getRandomColor(process.processName);
//       }
//     });
//     return map;
//   }, [schedule]);

//   return (
//     <div style={{ margin: '1rem 0' }}>
//       <h4>Gantt Chart</h4>
//       <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
//         {/* Display the time labels at the top */}
//         {Array.from({ length: schedule[schedule.length - 1]?.endTime || 0 }).map((_, index) => (
//           <div key={index} style={{ width: '30px', textAlign: 'center', position: 'absolute', left: `${index * 30}px` }}>
//             {index}
//           </div>
//         ))}
//       </div>

//       <div style={{ display: 'flex', width: '100%' }}>
//         {/* Create Gantt bars for each process */}
//         {schedule.map((process, index) => (
//           <div
//             key={index}
//             style={{
//               position: 'relative',
//               height: '30px',
//               marginLeft: `${process.startTime * 30}px`,
//               backgroundColor: colorMap[process.processName],  // Use the generated color
//               width: `${(process.endTime - process.startTime) * 30}px`,
//               marginRight: '5px',
//             }}
//           >
//             <div style={{ position: 'absolute', top: '0', left: '0', color: '#fff', fontSize: '12px' }}>
//               {process.processName}
//             </div>
//             <div style={{ position: 'absolute', top: '15px', left: '0', fontSize: '10px', color: '#fff' }}>
//               {`Start: ${process.startTime}, End: ${process.endTime}`}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default GanttChart;
// import React, { useMemo } from 'react';

// // Helper function to generate a random color once for each process
// const getRandomColor = (processName) => {
//   const colors = {
//     'P1': '#FF5733',
//     'P2': '#33FF57',
//     'P3': '#3357FF',
//     'P4': '#F1C40F',
//     'P5': '#9B59B6',
//     'P6': '#E74C3C',
//   };

//   return colors[processName] || '#3498DB';  // Fallback color if no mapping exists
// };

// const GanttChart = ({ schedule }) => {
//   // Use useMemo to generate the color map once
//   const colorMap = useMemo(() => {
//     const map = {};
//     schedule.forEach(process => {
//       if (!map[process.processName]) {
//         map[process.processName] = getRandomColor(process.processName);
//       }
//     });
//     return map;
//   }, [schedule]);

//   // Find the maximum endTime to limit the display range of the time labels
//   const maxEndTime = Math.max(...schedule.map(process => process.endTime));

//   return (
//     <div style={{ margin: '1rem 0' }}>
//       <h4>Gantt Chart</h4>
//       <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
//         {/* Display the time labels at the top */}
//         {Array.from({ length: maxEndTime }).map((_, index) => (
//           <div key={index} style={{ width: '30px', textAlign: 'center', position: 'absolute', left: `${index * 30}px` }}>
//             {index}
//           </div>
//         ))}
//       </div>

//       <div style={{ display: 'flex', width: '100%' }}>
//         {/* Create Gantt bars for each process */}
//         {schedule.map((process, index) => (
//           <div
//             key={index}
//             style={{
//               position: 'relative',
//               height: '30px',
//               marginLeft: `${process.startTime * 30}px`,
//               backgroundColor: colorMap[process.processName],  // Use the generated color
//               width: `${(process.endTime - process.startTime) * 30}px`,
//               marginRight: '5px',
//             }}
//           >
//             <div style={{ position: 'absolute', top: '0', left: '0', color: '#fff', fontSize: '12px' }}>
//               {process.processName}
//             </div>
//             <div style={{ position: 'absolute', top: '15px', left: '0', fontSize: '10px', color: '#fff' }}>
//               {`Start: ${process.startTime}, End: ${process.endTime}`}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GanttChart;
// import React, { useMemo } from 'react';

// // Helper function to generate a fixed color per process
// const getRandomColor = (processName) => {
//   const colors = {
//     'P1': '#FF5733',
//     'P2': '#33FF57',
//     'P3': '#3357FF',
//     'P4': '#F1C40F',
//     'P5': '#9B59B6',
//     'P6': '#E74C3C',
//   };

//   return colors[processName] || '#3498DB';  // Default fallback
// };

// const GanttChart = ({ schedule, title = "Gantt Chart" }) => {
//   // Generate a color map for all processes once
//   const colorMap = useMemo(() => {
//     const map = {};
//     schedule.forEach(process => {
//       if (!map[process.processName]) {
//         map[process.processName] = getRandomColor(process.processName);
//         // Removed invalid style property from useMemo block
//       }
//     });
//     return map;
//   }, [schedule]);

//   // Determine the maximum end time to create time labels
//   const maxEndTime = Math.max(...schedule.map(p => p.endTime), 0);

//   return (
//     <div style={{ margin: '2rem 0' }}>
//       <h4>{title}</h4>

//       {/* Time labels */}
//       <div style={{ display: 'flex', position: 'relative', width: '100%', marginBottom: '10px', height: '20px' }}>
//         {Array.from({ length: maxEndTime + 1 }).map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: '30px',
//               textAlign: 'center',
//               position: 'absolute',
//               left: `${index * 30}px`,
//               fontSize: '10px',
//               color: '#555'
//             }}
//           >
//             {index}
//           </div>
//         ))}
//       </div>

//       {/* Gantt bars */}
//       <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
//         {schedule.map((process, index) => (
//           <div
//             key={index}
//             style={{
//               position: 'absolute',
//               left: `${process.startTime * 30}px`,
//               width: `${(process.endTime - process.startTime) * 30}px`,
//               height: '40px',
//               backgroundColor: colorMap[process.processName],
//               borderRadius: '4px',
//               marginRight: '5px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               padding: '2px 4px',
//               boxSizing: 'border-box',
//               color: '#fff',
//               fontSize: '12px',
//             }}
//           >
//             <div><strong>{process.processName}</strong></div>
//             <div style={{ fontSize: '10px' }}>{`${process.startTime} - ${process.endTime}`}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GanttChart;
import React, { useMemo, useEffect, useState } from 'react';

const getRandomColor = (processName) => {
  const colors = {
    'P1': '#FF5733',
    'P2': '#33FF57',
    'P3': '#3357FF',
    'P4': '#F1C40F',
    'P5': '#9B59B6',
    'P6': '#E74C3C',
  };
  return colors[processName] || '#3498DB';
};

const GanttChart = ({ schedule, title = "Gantt Chart" }) => {
  const [visibleBlocks, setVisibleBlocks] = useState([]);

  // Reveal one block every 1 second
  useEffect(() => {
    setVisibleBlocks([]); // reset for new chart
    schedule.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBlocks(prev => [...prev, schedule[index]]);
      }, index * 1000); // 1s interval per block
    });
  }, [schedule]);

  const colorMap = useMemo(() => {
    const map = {};
    schedule.forEach(process => {
      if (!map[process.processName]) {
        map[process.processName] = getRandomColor(process.processName);
      }
    });
    return map;
  }, [schedule]);

  const maxEndTime = Math.max(...schedule.map(p => p.endTime), 0);

  return (
    <div style={{ margin: '2rem 0' }}>
      <h4>{title}</h4>

      {/* Time labels */}
      <div style={{ display: 'flex', position: 'relative', width: '100%', marginBottom: '10px', height: '20px' }}>
        {Array.from({ length: maxEndTime + 1 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              textAlign: 'center',
              position: 'absolute',
              left: `${index * 30}px`,
              fontSize: '10px',
              color: '#555'
            }}
          >
            {index}
          </div>
        ))}
      </div>

      {/* Gantt bars */}
      <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
        {visibleBlocks.map((process, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${process.startTime * 30}px`,
              width: `${(process.endTime - process.startTime) * 30}px`,
              height: '40px',
              backgroundColor: colorMap[process.processName],
              borderRadius: '4px',
              marginRight: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2px 4px',
              boxSizing: 'border-box',
              color: '#fff',
              fontSize: '12px',
              transition: 'opacity 0.5s ease',
              opacity: 1
            }}
          >
            <div><strong>{process.processName}</strong></div>
            <div style={{ fontSize: '10px' }}>{`${process.startTime} - ${process.endTime}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
