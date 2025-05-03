// // // // // import React from 'react';

// // // // const ComparisonPage = ({ processes, fcfsSchedule, sjfSchedule, prioritySchedule, rrSchedule }) => {
// // // //     // Fallback to empty arrays if the schedules are undefined or null
// // // //     const safeFcfsSchedule = fcfsSchedule || [];
// // // //     const safeSjfSchedule = sjfSchedule || [];
// // // //     const safePrioritySchedule = prioritySchedule || [];
// // // //     const safeRrSchedule = rrSchedule || [];
  
// // // //     return (
// // // //       <div className="comparison-page">
// // // //         <h1>Algorithm Comparison</h1>
  
// // // //         {/* Display processes data */}
// // // //         <div className="processes">
// // // //           <h2>Processes</h2>
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Process</th>
// // // //                 <th>Arrival Time</th>
// // // //                 <th>Burst Time</th>
// // // //                 <th>Priority</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {processes && processes.length > 0 ? (
// // // //                 processes.map((process, index) => (
// // // //                   <tr key={index}>
// // // //                     <td>{process.name}</td>
// // // //                     <td>{process.arrivalTime}</td>
// // // //                     <td>{process.burstTime}</td>
// // // //                     <td>{process.priority}</td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="4">No processes available</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
  
// // // //         {/* FCFS Schedule */}
// // // //         <div className="schedule">
// // // //           <h2>FCFS Schedule</h2>
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Process Name</th>
// // // //                 <th>Start Time</th>
// // // //                 <th>End Time</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {safeFcfsSchedule.length > 0 ? (
// // // //                 safeFcfsSchedule.map((item, index) => (
// // // //                   <tr key={index}>
// // // //                     <td>{item.processName}</td>
// // // //                     <td>{item.startTime}</td>
// // // //                     <td>{item.endTime}</td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="3">No FCFS schedule available</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
  
// // // //         {/* SJF Schedule */}
// // // //         <div className="schedule">
// // // //           <h2>SJF Schedule</h2>
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Process Name</th>
// // // //                 <th>Start Time</th>
// // // //                 <th>End Time</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {safeSjfSchedule.length > 0 ? (
// // // //                 safeSjfSchedule.map((item, index) => (
// // // //                   <tr key={index}>
// // // //                     <td>{item.processName}</td>
// // // //                     <td>{item.startTime}</td>
// // // //                     <td>{item.endTime}</td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="3">No SJF schedule available</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
  
// // // //         {/* Priority Schedule */}
// // // //         <div className="schedule">
// // // //           <h2>Priority Schedule</h2>
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Process Name</th>
// // // //                 <th>Start Time</th>
// // // //                 <th>End Time</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {safePrioritySchedule.length > 0 ? (
// // // //                 safePrioritySchedule.map((item, index) => (
// // // //                   <tr key={index}>
// // // //                     <td>{item.processName}</td>
// // // //                     <td>{item.startTime}</td>
// // // //                     <td>{item.endTime}</td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="3">No Priority schedule available</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
  
// // // //         {/* Round Robin Schedule */}
// // // //         <div className="schedule">
// // // //           <h2>Round Robin Schedule</h2>
// // // //           <table>
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Process Name</th>
// // // //                 <th>Start Time</th>
// // // //                 <th>End Time</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {safeRrSchedule.length > 0 ? (
// // // //                 safeRrSchedule.map((item, index) => (
// // // //                   <tr key={index}>
// // // //                     <td>{item.processName}</td>
// // // //                     <td>{item.startTime}</td>
// // // //                     <td>{item.endTime}</td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="3">No Round Robin schedule available</td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };
  
// // // //   export default ComparisonPage;
// // // import React from 'react';

// // // const ComparisonPage = ({ processes, timeQuantum = 2 }) => {
// // //   const simulateFCFS = (procList) => {
// // //     let time = 0, totalWT = 0;
// // //     const sorted = [...procList].sort((a, b) => a.arrivalTime - b.arrivalTime);
// // //     sorted.forEach(p => {
// // //       if (time < p.arrivalTime) time = p.arrivalTime;
// // //       totalWT += time - p.arrivalTime;
// // //       time += p.burstTime;
// // //     });
// // //     return (totalWT / procList.length).toFixed(2);
// // //   };

// // //   const simulateSJF = (procList) => {
// // //     const n = procList.length;
// // //     const done = Array(n).fill(false);
// // //     let time = 0, completed = 0, totalWT = 0;
// // //     while (completed < n) {
// // //       let idx = -1, minBT = Infinity;
// // //       for (let i = 0; i < n; i++) {
// // //         const p = procList[i];
// // //         if (!done[i] && p.arrivalTime <= time && p.burstTime < minBT) {
// // //           idx = i;
// // //           minBT = p.burstTime;
// // //         }
// // //       }
// // //       if (idx !== -1) {
// // //         totalWT += time - procList[idx].arrivalTime;
// // //         time += procList[idx].burstTime;
// // //         done[idx] = true;
// // //         completed++;
// // //       } else time++;
// // //     }
// // //     return (totalWT / n).toFixed(2);
// // //   };

// // //   const simulatePriority = (procList) => {
// // //     const n = procList.length;
// // //     const done = Array(n).fill(false);
// // //     let time = 0, completed = 0, totalWT = 0;
// // //     while (completed < n) {
// // //       let idx = -1, bestPrio = Infinity;
// // //       for (let i = 0; i < n; i++) {
// // //         const p = procList[i];
// // //         if (!done[i] && p.arrivalTime <= time && p.priority < bestPrio) {
// // //           idx = i;
// // //           bestPrio = p.priority;
// // //         }
// // //       }
// // //       if (idx !== -1) {
// // //         totalWT += time - procList[idx].arrivalTime;
// // //         time += procList[idx].burstTime;
// // //         done[idx] = true;
// // //         completed++;
// // //       } else time++;
// // //     }
// // //     return (totalWT / n).toFixed(2);
// // //   };

// // //   const simulateRR = (procList, tq) => {
// // //     const n = procList.length;
// // //     const remBT = procList.map(p => p.burstTime);
// // //     const wt = Array(n).fill(0);
// // //     let time = 0, done;

// // //     do {
// // //       done = true;
// // //       for (let i = 0; i < n; i++) {
// // //         if (remBT[i] > 0 && procList[i].arrivalTime <= time) {
// // //           done = false;
// // //           const exec = Math.min(remBT[i], tq);
// // //           time += exec;
// // //           remBT[i] -= exec;
// // //           if (remBT[i] === 0) {
// // //             wt[i] = time - procList[i].arrivalTime - procList[i].burstTime;
// // //           }
// // //         }
// // //       }
// // //       time++;
// // //     } while (!done);

// // //     const totalWT = wt.reduce((a, b) => a + b, 0);
// // //     return (totalWT / n).toFixed(2);
// // //   };

// // //   // Clone the process list for pure function simulation
// // //   const processesCopy = JSON.parse(JSON.stringify(processes));

// // //   const fcfs = simulateFCFS(processesCopy);
// // //   const sjf = simulateSJF(processesCopy);
// // //   const priority = simulatePriority(processesCopy);
// // //   const rr = simulateRR(processesCopy, timeQuantum);

// // //   const results = [
// // //     { name: "FCFS", awt: parseFloat(fcfs) },
// // //     { name: "SJF", awt: parseFloat(sjf) },
// // //     { name: "Priority", awt: parseFloat(priority) },
// // //     { name: "Round Robin", awt: parseFloat(rr) }
// // //   ];

// // //   const best = results.reduce((min, algo) => algo.awt < min.awt ? algo : min, results[0]);

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-xl font-bold mb-4">📊 Algorithm Comparison</h2>
// // //       <table className="table-auto border-collapse w-full">
// // //         <thead>
// // //           <tr className="bg-gray-100">
// // //             <th className="border p-2">Algorithm</th>
// // //             <th className="border p-2">Average Waiting Time</th>
// // //             <th className="border p-2">Selected?</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {results.map((algo, i) => (
// // //             <tr key={i} className={algo.name === best.name ? "bg-green-100" : ""}>
// // //               <td className="border p-2">{algo.name}</td>
// // //               <td className="border p-2">{algo.awt}</td>
// // //               <td className="border p-2">{algo.name === best.name ? "✅ Best" : "❌ Higher AWT"}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //       <p className="mt-4 text-lg font-semibold text-green-700">
// // //         ✅ Best Algorithm: {best.name} (AWT: {best.awt})
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default ComparisonPage;
// // import React from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';

// // const ComparisonPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Safe fallback values if location.state is undefined
// //   const {
// //     processes = [],
// //     fcfsSchedule = [],
// //     sjfSchedule = [],
// //     prioritySchedule = [],
// //     rrSchedule = []
// //   } = location.state || {};

// //   // Redirect to home if nothing was passed
// //   if (!location.state || processes.length === 0) {
// //     navigate('/');
// //     return null;
// //   }

// //   return (
// //     <div style={{ padding: '2rem' }}>
// //       <h2>Algorithm Comparison</h2>

// //       <p><strong>Number of Processes:</strong> {processes.length}</p>

// //       <div style={{ marginTop: '2rem' }}>
// //         <h3>Processes:</h3>
// //         <pre>{JSON.stringify(processes, null, 2)}</pre>
// //       </div>

// //       <div style={{ marginTop: '2rem' }}>
// //         <h3>FCFS Schedule:</h3>
// //         <pre>{JSON.stringify(fcfsSchedule, null, 2)}</pre>
// //       </div>

// //       <div style={{ marginTop: '2rem' }}>
// //         <h3>SJF Schedule:</h3>
// //         <pre>{JSON.stringify(sjfSchedule, null, 2)}</pre>
// //       </div>

// //       <div style={{ marginTop: '2rem' }}>
// //         <h3>Priority Schedule:</h3>
// //         <pre>{JSON.stringify(prioritySchedule, null, 2)}</pre>
// //       </div>

// //       <div style={{ marginTop: '2rem' }}>
// //         <h3>Round Robin Schedule:</h3>
// //         <pre>{JSON.stringify(rrSchedule, null, 2)}</pre>
// //       </div>

// //       <div style={{ marginTop: '3rem' }}>
// //         <button
// //           onClick={() => navigate(-1)}
// //           style={{
// //             padding: '0.75rem 1.5rem',
// //             backgroundColor: '#e74c3c',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '8px',
// //             cursor: 'pointer',
// //             fontSize: '1rem',
// //             fontWeight: 'bold',
// //           }}
// //         >
// //           ← Back to Gantt Charts
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ComparisonPage;
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const calculateMetrics = (schedule, processes) => {
//   const processMap = {};
//   schedule.forEach(({ processName, startTime, endTime }) => {
//     if (!processMap[processName]) {
//       processMap[processName] = {
//         startTime,
//         endTime,
//         burstTime: 0,
//       };
//     }
//     processMap[processName].endTime = endTime;
//     processMap[processName].burstTime += endTime - startTime;
//   });

//   let totalWaitingTime = 0;
//   let totalTurnaroundTime = 0;

//   for (const process of processes) {
//     const p = processMap[process.name];
//     const tat = p.endTime - process.arrivalTime;
//     const wt = tat - process.burstTime;
//     totalTurnaroundTime += tat;
//     totalWaitingTime += wt;
//   }

//   const n = processes.length;
//   return {
//     averageWaitingTime: (totalWaitingTime / n).toFixed(2),
//     averageTurnaroundTime: (totalTurnaroundTime / n).toFixed(2),
//   };
// };

// const ComparisonPage = () => {
//   const location = useLocation();
//   const {
//     processes,
//     fcfsSchedule,
//     sjfSchedule,
//     prioritySchedule,
//     rrSchedule
//   } = location.state || {};

//   if (!processes) return <p>No process data found.</p>;

//   const fcfsMetrics = calculateMetrics(fcfsSchedule, processes);
//   const sjfMetrics = calculateMetrics(sjfSchedule, processes);
//   const priorityMetrics = calculateMetrics(prioritySchedule, processes);
//   const rrMetrics = calculateMetrics(rrSchedule, processes);

//   const allMetrics = [
//     { name: "FCFS", ...fcfsMetrics },
//     { name: "SJF", ...sjfMetrics },
//     { name: "Priority", ...priorityMetrics },
//     { name: "Round Robin", ...rrMetrics },
//   ];

//   const bestAWTAlgo = allMetrics.reduce((prev, curr) =>
//     parseFloat(curr.averageWaitingTime) < parseFloat(prev.averageWaitingTime)
//       ? curr
//       : prev
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Algorithm Comparison</h2>
//       <p><strong>Number of Processes:</strong> {processes.length}</p>

//       <table border="1" cellPadding="10" style={{ marginTop: '2rem', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr style={{ backgroundColor: '#f0f0f0' }}>
//             <th>Algorithm</th>
//             <th>Average Waiting Time</th>
//             <th>Average Turnaround Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allMetrics.map(({ name, averageWaitingTime, averageTurnaroundTime }) => (
//             <tr key={name}>
//               <td>{name}</td>
//               <td>{averageWaitingTime}</td>
//               <td>{averageTurnaroundTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: '2rem', color: '#2ecc71' }}>
//         ✅ Best Algorithm: {bestAWTAlgo.name} (Lowest Average Waiting Time: {bestAWTAlgo.averageWaitingTime})
//       </h3>
//     </div>
//   );
// };

// export default ComparisonPage;
import React from 'react';
import { useLocation } from 'react-router-dom';

const calculateMetrics = (schedule, processes) => {
  const processMap = {};
  schedule.forEach(({ processName, startTime, endTime }) => {
    if (!processMap[processName]) {
      processMap[processName] = {
        startTime,
        endTime,
        burstTime: 0,
      };
    }
    processMap[processName].endTime = endTime;
    processMap[processName].burstTime += endTime - startTime;
  });

  let totalWaitingTime = 0;
  let totalTurnaroundTime = 0;

  for (const process of processes) {
    const p = processMap[process.name];
    const tat = p.endTime - process.arrivalTime;
    const wt = tat - process.burstTime;
    totalTurnaroundTime += tat;
    totalWaitingTime += wt;
  }

  const n = processes.length;
  return {
    averageWaitingTime: (totalWaitingTime / n).toFixed(2),
    averageTurnaroundTime: (totalTurnaroundTime / n).toFixed(2),
  };
};

const ComparisonPage = () => {
  const location = useLocation();
  const {
    processes,
    fcfsSchedule,
    sjfSchedule,
    prioritySchedule,
    rrSchedule
  } = location.state || {};

  if (!processes) return <p>No process data found.</p>;

  const fcfsMetrics = calculateMetrics(fcfsSchedule, processes);
  const sjfMetrics = calculateMetrics(sjfSchedule, processes);
  const priorityMetrics = calculateMetrics(prioritySchedule, processes);
  const rrMetrics = calculateMetrics(rrSchedule, processes);

  const allMetrics = [
    { name: "FCFS", ...fcfsMetrics },
    { name: "SJF", ...sjfMetrics },
    { name: "Priority", ...priorityMetrics },
    { name: "Round Robin", ...rrMetrics },
  ];

  const bestAWTAlgo = allMetrics.reduce((prev, curr) =>
    parseFloat(curr.averageWaitingTime) < parseFloat(prev.averageWaitingTime)
      ? curr
      : prev
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
    }}>
      <h2>Algorithm Comparison</h2>
      <p><strong>Number of Processes:</strong> {processes.length}</p>

      <table border="1" cellPadding="10" style={{
        marginTop: '2rem',
        borderCollapse: 'collapse',
        width: '60%',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#e0e0e0' }}>
            <th>Algorithm</th>
            <th>Average Waiting Time</th>
            <th>Average Turnaround Time</th>
          </tr>
        </thead>
        <tbody>
          {allMetrics.map(({ name, averageWaitingTime, averageTurnaroundTime }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{averageWaitingTime}</td>
              <td>{averageTurnaroundTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: '2rem', color: '#27ae60' }}>
        ✅ Best Algorithm: {bestAWTAlgo.name} (Lowest Average Waiting Time: {bestAWTAlgo.averageWaitingTime})
      </h3>
    </div>
  );
};

export default ComparisonPage;
