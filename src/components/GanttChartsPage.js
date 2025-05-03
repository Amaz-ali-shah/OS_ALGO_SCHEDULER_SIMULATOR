// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const GanttChartsPage = () => {
// //   const navigate = useNavigate();

// //   const chartBox = (title) => (
// //     <div style={styles.chartBox}>
// //       <h3>{title}</h3>
// //       <div style={styles.ganttPlaceholder}>
// //         {/* Placeholder for chart */}
// //         <p style={styles.placeholderText}>[ Gantt Chart will appear here ]</p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.heading}>🕒 Gantt Chart Visualization</h2>

// //       {chartBox('First-Come-First-Serve (FCFS)')}
// //       {chartBox('Shortest Job First (SJF)')}
// //       {chartBox('Round Robin (RR)')}
// //       {chartBox('Priority Scheduling')}

// //       <div style={styles.buttonContainer}>
// //         <button style={styles.navButton} onClick={() => navigate('/')}>
// //           ← Back to Process Input
// //         </button>
// //         <button style={styles.navButton} onClick={() => navigate('/comparison')}>
// //           Next: Algorithm Comparison →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     padding: '2rem',
// //     maxWidth: '800px',
// //     margin: '0 auto',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '10px',
// //   },
// //   heading: {
// //     textAlign: 'center',
// //     marginBottom: '2rem',
// //   },
// //   chartBox: {
// //     marginBottom: '2rem',
// //     padding: '1rem',
// //     backgroundColor: '#e1f5fe',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //   },
// //   ganttPlaceholder: {
// //     height: '100px',
// //     backgroundColor: '#ffffff',
// //     border: '2px dashed #90caf9',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: '5px',
// //   },
// //   placeholderText: {
// //     color: '#aaa',
// //     fontStyle: 'italic',
// //   },
// //   buttonContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     marginTop: '2rem',
// //   },
// //   navButton: {
// //     padding: '0.8rem 1.5rem',
// //     fontSize: '1rem',
// //     backgroundColor: '#1976d2',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s',
// //   },
// // };

// // export default GanttChartsPage;
// // // GanttChartsPage.js
// // import React from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const processes = location.state?.processes || [];

// //   // Safety check
// //   if (!processes.length) {
// //     return (
// //       <div>
// //         <h2>No process data found. Please enter processes first.</h2>
// //         <button onClick={() => navigate("/")}>Go Back</button>
// //       </div>
// //     );
// //   }

// //   // --- Scheduling Algorithms ---
// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({ ...p }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.burstTime, quantum);
// //       const endTime = startTime + executionTime;
// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.burstTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.burstTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   // --- Schedules ---
// //   const fcfsSchedule = runFCFS();
// //   const sjfSchedule = runSJF();
// //   const prioritySchedule = runPriority();
// //   const rrSchedule = runRoundRobin(2); // you can make quantum dynamic

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default GanttChartsPage;
// // import React, { useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const processes = location.state?.processes || [];

// //   useEffect(() => {
// //     console.log("Received processes:", processes);
// //   }, [processes]);

// //   // --- If no process data, show warning and return ---
// //   if (!processes.length) {
// //     return (
// //       <div style={{ padding: '1rem' }}>
// //         <h2>No process data found. Please enter processes first.</h2>
// //         <button onClick={() => navigate("/")}>← Go Back</button>
// //       </div>
// //     );
// //   }

// //   // --- Scheduling Algorithms ---
// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({ ...p }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.burstTime, quantum);
// //       const endTime = startTime + executionTime;
// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.burstTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.burstTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   // --- Generate Schedules ---
// //   const fcfsSchedule = runFCFS();
// //   const sjfSchedule = runSJF();
// //   const prioritySchedule = runPriority();
// //   const rrSchedule = runRoundRobin(2); // Optional: make this dynamic

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GanttChartsPage;
// // import React, { useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const processes = location.state?.processes || [];

// //   useEffect(() => {
// //     console.log("Received processes:", processes);
// //   }, [processes]);

// //   // --- If no process data, show warning and return ---
// //   if (!processes.length) {
// //     return (
// //       <div style={{ padding: '1rem' }}>
// //         <h2>No process data found. Please enter processes first.</h2>
// //         <button onClick={() => navigate("/")}>← Go Back</button>
// //       </div>
// //     );
// //   }

// //   // --- Scheduling Algorithms ---
// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({ ...p }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.burstTime, quantum);
// //       const endTime = startTime + executionTime;
// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.burstTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.burstTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   // --- Generate Schedules ---
// //   const fcfsSchedule = runFCFS();
// //   const sjfSchedule = runSJF();
// //   const prioritySchedule = runPriority();
// //   const rrSchedule = runRoundRobin(2); // Optional: make this dynamic

// //   // Calculate Number of Processes and Time Frame for Display
// //   const numProcesses = processes.length;
// //   const maxEndTime = Math.max(
// //     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
// //   );

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>
      
// //       <div style={{ marginBottom: '1rem' }}>
// //         <p><strong>Number of Processes:</strong> {numProcesses}</p>
// //         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
// //       </div>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GanttChartsPage;
// // import React, { useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Sample process data for testing
// //   const processes = location.state?.processes || [
// //     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
// //     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
// //     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
// //     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
// //   ];

// //   useEffect(() => {
// //     console.log("Received processes:", processes);
// //   }, [processes]);

// //   // --- If no process data, show warning and return ---
// //   if (!processes.length) {
// //     return (
// //       <div style={{ padding: '1rem' }}>
// //         <h2>No process data found. Please enter processes first.</h2>
// //         <button onClick={() => navigate("/")}>← Go Back</button>
// //       </div>
// //     );
// //   }

// //   // --- Scheduling Algorithms ---
// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({ ...p }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.burstTime, quantum);
// //       const endTime = startTime + executionTime;
// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.burstTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.burstTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   // --- Generate Schedules ---
// //   const fcfsSchedule = runFCFS();
// //   const sjfSchedule = runSJF();
// //   const prioritySchedule = runPriority();
// //   const rrSchedule = runRoundRobin(2); // Optional: make this dynamic

// //   // Calculate Number of Processes and Time Frame for Display
// //   const numProcesses = processes.length;
// //   const maxEndTime = Math.max(
// //     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
// //   );

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>
      
// //       <div style={{ marginBottom: '1rem' }}>
// //         <p><strong>Number of Processes:</strong> {numProcesses}</p>
// //         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
// //       </div>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default GanttChartsPage;
// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Sample process data for testing
// //   const processes = location.state?.processes || [
// //     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
// //     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
// //     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
// //     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
// //   ];

// //   const [fcfsSchedule, setFcfsSchedule] = useState([]);
// //   const [sjfSchedule, setSjfSchedule] = useState([]);
// //   const [prioritySchedule, setPrioritySchedule] = useState([]);
// //   const [rrSchedule, setRrSchedule] = useState([]);

// //   useEffect(() => {
// //     console.log("Received processes:", processes);
// //   }, [processes]);

// //   useEffect(() => {
// //     // Calculate schedules on process data change
// //     const calculateSchedules = () => {
// //       setFcfsSchedule(runFCFS());
// //       setSjfSchedule(runSJF());
// //       setPrioritySchedule(runPriority());
// //       setRrSchedule(runRoundRobin(2)); // Optional: make this dynamic
// //     };
    
// //     calculateSchedules();
// //   }, [processes]); // This will run every time `processes` changes

// //   // --- Scheduling Algorithms ---
// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };
// // /*
// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({ ...p }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.burstTime, quantum);
// //       const endTime = startTime + executionTime;
// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.burstTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.burstTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };
// // */

// // const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({
// //       ...p,
// //       remainingTime: p.burstTime, // use this instead of modifying burstTime
// //     }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;
  
// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);
  
// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }
  
// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
  
// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.remainingTime, quantum);
// //       const endTime = startTime + executionTime;
  
// //       result.push({ processName: process.name, startTime, endTime });
  
// //       currentTime = endTime;
// //       process.remainingTime -= executionTime;
  
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }
  
// //       if (process.remainingTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }
  
// //     return result;
// //   };
  
// //   // Calculate Number of Processes and Time Frame for Display
// //   const numProcesses = processes.length;
// //   const maxEndTime = Math.max(
// //     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
// //   );

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>
      
// //       <div style={{ marginBottom: '1rem' }}>
// //         <p><strong>Number of Processes:</strong> {numProcesses}</p>
// //         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
// //       </div>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GanttChartsPage;
// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   // Sample process data for testing
// //   const processes = location.state?.processes || [
// //     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
// //     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
// //     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
// //     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
// //   ];

// //   const [fcfsSchedule, setFcfsSchedule] = useState([]);
// //   const [sjfSchedule, setSjfSchedule] = useState([]);
// //   const [prioritySchedule, setPrioritySchedule] = useState([]);
// //   const [rrSchedule, setRrSchedule] = useState([]);

// //   useEffect(() => {
// //     console.log("Received processes:", processes);
// //   }, [processes]);

// //   useEffect(() => {
// //     // Calculate schedules on process data change
// //     const calculateSchedules = () => {
// //       const fcfs = runFCFS();
// //       const sjf = runSJF();
// //       const priority = runPriority();
// //       const rr = runRoundRobin(2);

// //       console.log("FCFS Schedule:", fcfs);
// //       console.log("SJF Schedule:", sjf);
// //       console.log("Priority Schedule:", priority);
// //       console.log("Round Robin Schedule:", rr);

// //       setFcfsSchedule(fcfs);
// //       setSjfSchedule(sjf);
// //       setPrioritySchedule(priority);
// //       setRrSchedule(rr);
// //     };

// //     calculateSchedules();
// //   }, [processes]);

// //   // --- Scheduling Algorithms ---

// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({
// //       ...p,
// //       remainingTime: p.burstTime,
// //     }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.remainingTime, quantum);
// //       const endTime = startTime + executionTime;

// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.remainingTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.remainingTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   const numProcesses = processes.length;
// //   const maxEndTime = Math.max(
// //     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
// //   );

// //   return (
// //     <div style={{ padding: '1rem' }}>
// //       <h2>Gantt Charts</h2>

// //       <div style={{ marginBottom: '1rem' }}>
// //         <p><strong>Number of Processes:</strong> {numProcesses}</p>
// //         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
// //       </div>

// //       <h3>FCFS</h3>
// //       <GanttChart schedule={fcfsSchedule} />

// //       <h3>SJF</h3>
// //       <GanttChart schedule={sjfSchedule} />

// //       <h3>Priority</h3>
// //       <GanttChart schedule={prioritySchedule} />

// //       <h3>Round Robin (Q=2)</h3>
// //       <GanttChart schedule={rrSchedule} />

// //       <div style={{ marginTop: '2rem' }}>
// //         <button onClick={() => navigate("/")}>← Back to Input</button>
// //         <button onClick={() => navigate("/comparison")}>Go to Algorithm Comparison →</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default GanttChartsPage;
// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import GanttChart from './GanttChart';

// // const GanttChartsPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const processes = location.state?.processes || [
// //     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
// //     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
// //     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
// //     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
// //   ];

// //   const [fcfsSchedule, setFcfsSchedule] = useState([]);
// //   const [sjfSchedule, setSjfSchedule] = useState([]);
// //   const [prioritySchedule, setPrioritySchedule] = useState([]);
// //   const [rrSchedule, setRrSchedule] = useState([]);

// //   useEffect(() => {
// //     const calculateSchedules = () => {
// //       setFcfsSchedule(runFCFS());
// //       setSjfSchedule(runSJF());
// //       setPrioritySchedule(runPriority());
// //       setRrSchedule(runRoundRobin(2));
// //     };

// //     calculateSchedules();
// //   }, [processes]);

// //   const runFCFS = () => {
// //     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     let currentTime = 0;
// //     return sorted.map(p => {
// //       const startTime = Math.max(currentTime, p.arrivalTime);
// //       const endTime = startTime + p.burstTime;
// //       currentTime = endTime;
// //       return { processName: p.name, startTime, endTime };
// //     });
// //   };

// //   const runSJF = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.burstTime - b.burstTime);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runPriority = () => {
// //     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
// //     const result = [];
// //     let currentTime = 0;

// //     while (queue.length) {
// //       const available = queue.filter(p => p.arrivalTime <= currentTime);
// //       let next;
// //       if (available.length > 0) {
// //         available.sort((a, b) => a.priority - b.priority);
// //         next = available[0];
// //       } else {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }
// //       queue.splice(queue.indexOf(next), 1);
// //       const startTime = Math.max(currentTime, next.arrivalTime);
// //       const endTime = startTime + next.burstTime;
// //       currentTime = endTime;
// //       result.push({ processName: next.name, startTime, endTime });
// //     }

// //     return result;
// //   };

// //   const runRoundRobin = (quantum = 2) => {
// //     const queue = processes.map(p => ({
// //       ...p,
// //       remainingTime: p.burstTime,
// //     }));
// //     const result = [];
// //     const readyQueue = [];
// //     let currentTime = 0;

// //     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

// //     while (queue.length > 0 || readyQueue.length > 0) {
// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (readyQueue.length === 0) {
// //         currentTime = queue[0].arrivalTime;
// //         continue;
// //       }

// //       const process = readyQueue.shift();
// //       const startTime = currentTime;
// //       const executionTime = Math.min(process.remainingTime, quantum);
// //       const endTime = startTime + executionTime;

// //       result.push({ processName: process.name, startTime, endTime });

// //       currentTime = endTime;
// //       process.remainingTime -= executionTime;

// //       while (queue.length && queue[0].arrivalTime <= currentTime) {
// //         readyQueue.push(queue.shift());
// //       }

// //       if (process.remainingTime > 0) {
// //         readyQueue.push(process);
// //       }
// //     }

// //     return result;
// //   };

// //   const numProcesses = processes.length;
// //   const maxEndTime = Math.max(
// //     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
// //   );

// //   return (
// //     <div style={{ padding: '2rem' }}>
// //       <h2>Gantt Charts</h2>

// //       <div style={{ marginBottom: '1rem' }}>
// //         <p><strong>Number of Processes:</strong> {numProcesses}</p>
// //         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
// //       </div>

// //       <div style={{ marginBottom: '2.5rem' }}>
// //         <h3>FCFS</h3>
// //         <GanttChart schedule={fcfsSchedule} />
// //       </div>

// //       <div style={{ marginBottom: '2.5rem' }}>
// //         <h3>SJF</h3>
// //         <GanttChart schedule={sjfSchedule} />
// //       </div>

// //       <div style={{ marginBottom: '2.5rem' }}>
// //         <h3>Priority</h3>
// //         <GanttChart schedule={prioritySchedule} />
// //       </div>

// //       <div style={{ marginBottom: '2.5rem' }}>
// //         <h3>Round Robin (Q=2)</h3>
// //         <GanttChart schedule={rrSchedule} />
// //       </div>

// //       <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
// //         <button
// //           style={{
// //             padding: '0.6rem 1.2rem',
// //             backgroundColor: '#3498db',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '5px',
// //             cursor: 'pointer'
// //           }}
// //           onClick={() => navigate("/")}
// //         >
// //           ← Back to Input
// //         </button>

// //         <button
// //           style={{
// //             padding: '0.6rem 1.2rem',
// //             backgroundColor: '#2ecc71',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '5px',
// //             cursor: 'pointer'
// //           }}
// //           onClick={() =>
// //             navigate("/comparison", {
// //               state: {
// //                 processes,
// //                 fcfsSchedule,
// //                 sjfSchedule,
// //                 prioritySchedule,
// //                 rrSchedule,
// //               }
// //             })
// //           }
// //         >
// //           Go to Algorithm Comparison →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// export default GanttChartsPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import GanttChart from './GanttChart';

// const GanttChartsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const processes = location.state?.processes || [
//     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
//     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
//     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
//     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
//   ];

//   const [fcfsSchedule, setFcfsSchedule] = useState([]);
//   const [sjfSchedule, setSjfSchedule] = useState([]);
//   const [prioritySchedule, setPrioritySchedule] = useState([]);
//   const [rrSchedule, setRrSchedule] = useState([]);

//   useEffect(() => {
//     const calculateSchedules = () => {
//       setFcfsSchedule(runFCFS());
//       setSjfSchedule(runSJF());
//       setPrioritySchedule(runPriority());
//       setRrSchedule(runRoundRobin(2));
//     };

//     calculateSchedules();
//   }, [processes]);

//   const runFCFS = () => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map(p => {
//       const startTime = Math.max(currentTime, p.arrivalTime);
//       const endTime = startTime + p.burstTime;
//       currentTime = endTime;
//       return { processName: p.name, startTime, endTime };
//     });
//   };

//   const runSJF = () => {
//     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       let next;
//       if (available.length > 0) {
//         available.sort((a, b) => a.burstTime - b.burstTime);
//         next = available[0];
//       } else {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runPriority = () => {
//     const queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       let next;
//       if (available.length > 0) {
//         available.sort((a, b) => a.priority - b.priority);
//         next = available[0];
//       } else {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runRoundRobin = (quantum = 2) => {
//     const queue = processes.map(p => ({
//       ...p,
//       remainingTime: p.burstTime,
//     }));
//     const result = [];
//     const readyQueue = [];
//     let currentTime = 0;

//     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

//     while (queue.length > 0 || readyQueue.length > 0) {
//       while (queue.length && queue[0].arrivalTime <= currentTime) {
//         readyQueue.push(queue.shift());
//       }

//       if (readyQueue.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }

//       const process = readyQueue.shift();
//       const startTime = currentTime;
//       const executionTime = Math.min(process.remainingTime, quantum);
//       const endTime = startTime + executionTime;

//       result.push({ processName: process.name, startTime, endTime });

//       currentTime = endTime;
//       process.remainingTime -= executionTime;

//       while (queue.length && queue[0].arrivalTime <= currentTime) {
//         readyQueue.push(queue.shift());
//       }

//       if (process.remainingTime > 0) {
//         readyQueue.push(process);
//       }
//     }

//     return result;
//   };

//   const numProcesses = processes.length;
//   const maxEndTime = Math.max(
//     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(item => item.endTime)
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Gantt Charts</h2>

//       <div style={{ marginBottom: '1rem' }}>
//         <p><strong>Number of Processes:</strong> {numProcesses}</p>
//         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>FCFS</h3>
//         <GanttChart schedule={fcfsSchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>SJF</h3>
//         <GanttChart schedule={sjfSchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>Priority</h3>
//         <GanttChart schedule={prioritySchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>Round Robin (Q=2)</h3>
//         <GanttChart schedule={rrSchedule} />
//       </div>

//       <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
//         <button
//           style={{
//             padding: '0.6rem 1.2rem',
//             backgroundColor: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//           onClick={() => navigate("/")}>
//           ← Back to Input
//         </button>

//         <button
//           style={{
//             padding: '0.6rem 1.2rem',
//             backgroundColor: '#2ecc71',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//           onClick={() =>
//             navigate("/comparison", {
//               state: {
//                 processes,
//                 fcfsSchedule,
//                 sjfSchedule,
//                 prioritySchedule,
//                 rrSchedule,
//               }
//             })
//           }
//         >
//           Go to Algorithm Comparison →
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default GanttChartsPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import GanttChart from './GanttChart';

// const GanttChartsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const processes = location.state?.processes || [
//     { name: 'P1', arrivalTime: 0, burstTime: 4, priority: 3 },
//     { name: 'P2', arrivalTime: 1, burstTime: 3, priority: 2 },
//     { name: 'P3', arrivalTime: 2, burstTime: 1, priority: 1 },
//     { name: 'P4', arrivalTime: 3, burstTime: 2, priority: 4 },
//   ];

//   const [fcfsSchedule, setFcfsSchedule] = useState([]);
//   const [sjfSchedule, setSjfSchedule] = useState([]);
//   const [prioritySchedule, setPrioritySchedule] = useState([]);
//   const [rrSchedule, setRrSchedule] = useState([]);

//   // Calculate schedules
//   useEffect(() => {
//     setFcfsSchedule(runFCFS());
//     setSjfSchedule(runSJF());
//     setPrioritySchedule(runPriority());
//     setRrSchedule(runRoundRobin(2)); // Assuming quantum = 2
//   }, [processes]);

//   // Scheduling Algorithms

//   const runFCFS = () => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map(p => {
//       const startTime = Math.max(currentTime, p.arrivalTime);
//       const endTime = startTime + p.burstTime;
//       currentTime = endTime;
//       return { processName: p.name, startTime, endTime };
//     });
//   };

//   const runSJF = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       if (available.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.burstTime - b.burstTime);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runPriority = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       if (available.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.priority - b.priority);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runRoundRobin = (quantum) => {
//     const queue = processes.map(p => ({ ...p, remainingTime: p.burstTime }));
//     const result = [];
//     const readyQueue = [];
//     let currentTime = 0;

//     queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

//     while (queue.length > 0 || readyQueue.length > 0) {
//       while (queue.length && queue[0].arrivalTime <= currentTime) {
//         readyQueue.push(queue.shift());
//       }

//       if (readyQueue.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }

//       const process = readyQueue.shift();
//       const startTime = currentTime;
//       const executionTime = Math.min(process.remainingTime, quantum);
//       const endTime = startTime + executionTime;

//       result.push({ processName: process.name, startTime, endTime });

//       currentTime = endTime;
//       process.remainingTime -= executionTime;

//       while (queue.length && queue[0].arrivalTime <= currentTime) {
//         readyQueue.push(queue.shift());
//       }

//       if (process.remainingTime > 0) {
//         readyQueue.push(process);
//       }
//     }

//     return result;
//   };

//   const numProcesses = processes.length;
//   const maxEndTime = Math.max(
//     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...rrSchedule].map(p => p.endTime)
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Gantt Charts</h2>

//       <div style={{ marginBottom: '1rem' }}>
//         <p><strong>Number of Processes:</strong> {numProcesses}</p>
//         <p><strong>Total Time Frame:</strong> {maxEndTime}</p>
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>FCFS</h3>
//         <GanttChart schedule={fcfsSchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>SJF</h3>
//         <GanttChart schedule={sjfSchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>Priority</h3>
//         <GanttChart schedule={prioritySchedule} />
//       </div>

//       <div style={{ marginBottom: '2.5rem' }}>
//         <h3>Round Robin (Q=2)</h3>
//         <GanttChart schedule={rrSchedule} />
//       </div>

//       <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
//         <button
//           style={{
//             padding: '0.6rem 1.2rem',
//             backgroundColor: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//           onClick={() => navigate("/")}
//         >
//           ← Back to Input
//         </button>

//         <button
//           style={{
//             padding: '0.6rem 1.2rem',
//             backgroundColor: '#2ecc71',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//           onClick={() =>
//             navigate("/comparison", {
//               state: {
//                 processes,
//                 fcfsSchedule,
//                 sjfSchedule,
//                 prioritySchedule,
//                 rrSchedule,
//               }
//             })
//           }
//         >
//           Go to Algorithm Comparison →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GanttChartsPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import GanttChart from './GanttChart';

// const GanttChartsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const processes = location.state?.processes || [];
//   const precomputedRRSchedule = location.state?.rrSchedule || [];

//   const [fcfsSchedule, setFcfsSchedule] = useState([]);
//   const [sjfSchedule, setSjfSchedule] = useState([]);
//   const [prioritySchedule, setPrioritySchedule] = useState([]);

//   useEffect(() => {
//     if (!processes.length) {
//       navigate('/'); // Redirect back if no valid data
//       return;
//     }
//     setFcfsSchedule(runFCFS());
//     setSjfSchedule(runSJF());
//     setPrioritySchedule(runPriority());
//   }, [processes]);

//   const runFCFS = () => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map(p => {
//       const startTime = Math.max(currentTime, p.arrivalTime);
//       const endTime = startTime + p.burstTime;
//       currentTime = endTime;
//       return { processName: p.name, startTime, endTime };
//     });
//   };

//   const runSJF = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       if (available.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.burstTime - b.burstTime);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runPriority = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime && p.priority >= 0);
//       if (available.length === 0) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.priority - b.priority);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const maxEndTime = Math.max(
//     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...precomputedRRSchedule].map(p => p.endTime)
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Gantt Charts</h2>
//       <p><strong>Number of Processes:</strong> {processes.length}</p>
//       <p><strong>Total Time Frame:</strong> {maxEndTime}</p>

//       <h3>FCFS</h3>
//       <GanttChart schedule={fcfsSchedule} />

//       <h3>SJF</h3>
//       <GanttChart schedule={sjfSchedule} />

//       <h3>Priority</h3>
//       <GanttChart schedule={prioritySchedule} />

//       <h3>Round Robin</h3>
//       <GanttChart schedule={precomputedRRSchedule} />
//     </div>
//   );
// };

// export default GanttChartsPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import GanttChart from './GanttChart';

// const GanttChartsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const processes = location.state?.processes || [];
//   const precomputedRRSchedule = location.state?.rrSchedule || [];

//   const [fcfsSchedule, setFcfsSchedule] = useState([]);
//   const [sjfSchedule, setSjfSchedule] = useState([]);
//   const [prioritySchedule, setPrioritySchedule] = useState([]);

//   useEffect(() => {
//     if (!processes.length) {
//       navigate('/'); // Redirect if accessed directly
//       return;
//     }
//     setFcfsSchedule(runFCFS());
//     setSjfSchedule(runSJF());
//     setPrioritySchedule(runPriority());
//   }, [processes]);

//   const runFCFS = () => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map(p => {
//       const startTime = Math.max(currentTime, p.arrivalTime);
//       const endTime = startTime + p.burstTime;
//       currentTime = endTime;
//       return { processName: p.name, startTime, endTime };
//     });
//   };

//   const runSJF = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime);
//       if (!available.length) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.burstTime - b.burstTime);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const runPriority = () => {
//     const queue = [...processes];
//     const result = [];
//     let currentTime = 0;

//     while (queue.length) {
//       const available = queue.filter(p => p.arrivalTime <= currentTime && p.priority >= 0);
//       if (!available.length) {
//         currentTime = queue[0].arrivalTime;
//         continue;
//       }
//       available.sort((a, b) => a.priority - b.priority);
//       const next = available[0];
//       queue.splice(queue.indexOf(next), 1);
//       const startTime = Math.max(currentTime, next.arrivalTime);
//       const endTime = startTime + next.burstTime;
//       currentTime = endTime;
//       result.push({ processName: next.name, startTime, endTime });
//     }

//     return result;
//   };

//   const maxEndTime = Math.max(
//     ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...precomputedRRSchedule].map(p => p.endTime || 0)
//   );

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Gantt Charts</h2>
//       <p><strong>Number of Processes:</strong> {processes.length}</p>
//       <p><strong>Total Time Frame:</strong> {maxEndTime}</p>

//       <h3>FCFS</h3>
//       <GanttChart schedule={fcfsSchedule} />

//       <h3>SJF</h3>
//       <GanttChart schedule={sjfSchedule} />

//       <h3>Priority</h3>
//       <GanttChart schedule={prioritySchedule} />

//       <h3>Round Robin</h3>
//       <GanttChart schedule={precomputedRRSchedule} />
//     </div>
//   );
// };

// export default GanttChartsPage;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GanttChart from './GanttChart';

const GanttChartsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const processes = location.state?.processes || [];
  const precomputedRRSchedule = location.state?.rrSchedule || [];

  const [fcfsSchedule, setFcfsSchedule] = useState([]);
  const [sjfSchedule, setSjfSchedule] = useState([]);
  const [prioritySchedule, setPrioritySchedule] = useState([]);

  useEffect(() => {
    if (!processes.length) {
      navigate('/'); // Redirect if accessed directly
      return;
    }
    setFcfsSchedule(runFCFS());
    setSjfSchedule(runSJF());
    setPrioritySchedule(runPriority());
  }, [processes]);

  const runFCFS = () => {
    const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
    let currentTime = 0;
    return sorted.map(p => {
      const startTime = Math.max(currentTime, p.arrivalTime);
      const endTime = startTime + p.burstTime;
      currentTime = endTime;
      return { processName: p.name, startTime, endTime };
    });
  };

  const runSJF = () => {
    const queue = [...processes];
    const result = [];
    let currentTime = 0;

    while (queue.length) {
      const available = queue.filter(p => p.arrivalTime <= currentTime);
      if (!available.length) {
        currentTime = queue[0].arrivalTime;
        continue;
      }
      available.sort((a, b) => a.burstTime - b.burstTime);
      const next = available[0];
      queue.splice(queue.indexOf(next), 1);
      const startTime = Math.max(currentTime, next.arrivalTime);
      const endTime = startTime + next.burstTime;
      currentTime = endTime;
      result.push({ processName: next.name, startTime, endTime });
    }

    return result;
  };

  const runPriority = () => {
    const queue = [...processes];
    const result = [];
    let currentTime = 0;

    while (queue.length) {
      const available = queue.filter(p => p.arrivalTime <= currentTime && p.priority >= 0);
      if (!available.length) {
        currentTime = queue[0].arrivalTime;
        continue;
      }
      available.sort((a, b) => a.priority - b.priority);
      const next = available[0];
      queue.splice(queue.indexOf(next), 1);
      const startTime = Math.max(currentTime, next.arrivalTime);
      const endTime = startTime + next.burstTime;
      currentTime = endTime;
      result.push({ processName: next.name, startTime, endTime });
    }

    return result;
  };

  const maxEndTime = Math.max(
    ...[...fcfsSchedule, ...sjfSchedule, ...prioritySchedule, ...precomputedRRSchedule].map(p => p.endTime || 0)
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Gantt Charts</h2>
      <p><strong>Number of Processes:</strong> {processes.length}</p>
      <p><strong>Total Time Frame:</strong> {maxEndTime}</p>

      <h3>FCFS</h3>
      <GanttChart schedule={fcfsSchedule} />

      <h3>SJF</h3>
      <GanttChart schedule={sjfSchedule} />

      <h3>Priority</h3>
      <GanttChart schedule={prioritySchedule} />

      <h3>Round Robin</h3>
      <GanttChart schedule={precomputedRRSchedule} />

      {/* Buttons */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <button
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => navigate("/")}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          ← Back to Input
        </button>

        <button
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() =>
            navigate("/comparison", {
              state: {
                processes,
                fcfsSchedule,
                sjfSchedule,
                prioritySchedule,
                rrSchedule: precomputedRRSchedule,
              }
            })
          }
          onMouseOver={(e) => e.target.style.backgroundColor = '#27ae60'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2ecc71'}
        >
          Go to Algorithm Comparison →
        </button>
      </div>
    </div>
  );
};

export default GanttChartsPage;
