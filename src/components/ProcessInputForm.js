// // // import React, { useState } from 'react';

// // // const ProcessInputForm = () => {
// // //   // State to manage the number of processes and process details
// // //   const [numProcesses, setNumProcesses] = useState('');
// // //   const [processDetails, setProcessDetails] = useState([]);
  
// // //   // Handler to update the number of processes
// // //   const handleNumProcessesChange = (e) => {
// // //     setNumProcesses(e.target.value);
// // //   };

// // //   // Handler to handle input change for each process field
// // //   const handleProcessDetailChange = (index, field, value) => {
// // //     const newProcessDetails = [...processDetails];
// // //     newProcessDetails[index] = {
// // //       ...newProcessDetails[index],
// // //       [field]: value,
// // //     };
// // //     setProcessDetails(newProcessDetails);
// // //   };

// // //   // Handler to generate process fields dynamically based on number of processes
// // //   const generateProcessFields = () => {
// // //     const processFields = [];
// // //     for (let i = 0; i < numProcesses; i++) {
// // //       processFields.push(
// // //         <div key={i} style={styles.processItem}>
// // //           <h4>Process {i + 1}</h4>
// // //           <label>
// // //             Arrival Time:
// // //             <input
// // //               type="number"
// // //               value={processDetails[i]?.arrivalTime || ''}
// // //               onChange={(e) =>
// // //                 handleProcessDetailChange(i, 'arrivalTime', e.target.value)
// // //               }
// // //               style={styles.input}
// // //             />
// // //           </label>
// // //           <label>
// // //             Burst Time:
// // //             <input
// // //               type="number"
// // //               value={processDetails[i]?.burstTime || ''}
// // //               onChange={(e) =>
// // //                 handleProcessDetailChange(i, 'burstTime', e.target.value)
// // //               }
// // //               style={styles.input}
// // //             />
// // //           </label>
// // //           <label>
// // //             Priority:
// // //             <input
// // //               type="number"
// // //               value={processDetails[i]?.priority || ''}
// // //               onChange={(e) =>
// // //                 handleProcessDetailChange(i, 'priority', e.target.value)
// // //               }
// // //               style={styles.input}
// // //             />
// // //           </label>
// // //         </div>
// // //       );
// // //     }
// // //     return processFields;
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2>Enter Number of Processes</h2>
// // //       <input
// // //         type="number"
// // //         value={numProcesses}
// // //         onChange={handleNumProcessesChange}
// // //         style={styles.input}
// // //         placeholder="Enter number of processes"
// // //       />
// // //       {numProcesses > 0 && generateProcessFields()}
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     padding: '2rem',
// // //     backgroundColor: '#f0f0f0',
// // //     borderRadius: '8px',
// // //     width: '400px',
// // //     margin: '0 auto',
// // //   },
// // //   input: {
// // //     padding: '0.5rem',
// // //     margin: '0.5rem 0',
// // //     borderRadius: '5px',
// // //     border: '1px solid #ccc',
// // //     width: '100%',
// // //   },
// // //   processItem: {
// // //     backgroundColor: '#e9f7fd',
// // //     marginBottom: '1rem',
// // //     padding: '1rem',
// // //     borderRadius: '8px',
// // //   },
// // // };

// // // export default ProcessInputForm;
// // import React, { useState } from 'react';

// // const ProcessInputForm = () => {
// //   // State to manage the number of processes and process details
// //   const [numProcesses, setNumProcesses] = useState('');
// //   const [processDetails, setProcessDetails] = useState([]);
  
// //   // Handler to update the number of processes
// //   const handleNumProcessesChange = (e) => {
// //     setNumProcesses(e.target.value);
// //   };

// //   // Handler to handle input change for each process field
// //   const handleProcessDetailChange = (index, field, value) => {
// //     const newProcessDetails = [...processDetails];
// //     newProcessDetails[index] = {
// //       ...newProcessDetails[index],
// //       [field]: value,
// //     };
// //     setProcessDetails(newProcessDetails);
// //   };

// //   // Handler to ensure non-negative values for Arrival Time and Burst Time
// //   const handleNonNegativeChange = (e, index, field) => {
// //     const value = Math.max(0, e.target.value); // Ensure non-negative values
// //     handleProcessDetailChange(index, field, value);
// //   };

// //   // Handler to generate process fields dynamically based on number of processes
// //   const generateProcessFields = () => {
// //     const processFields = [];
// //     for (let i = 0; i < numProcesses; i++) {
// //       processFields.push(
// //         <div key={i} style={styles.processItem}>
// //           <h4>Process {i + 1}</h4>
// //           <label>
// //             Arrival Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.arrivalTime || ''}
// //               onChange={(e) =>
// //                 handleNonNegativeChange(e, i, 'arrivalTime')
// //               }
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Burst Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.burstTime || ''}
// //               onChange={(e) =>
// //                 handleNonNegativeChange(e, i, 'burstTime')
// //               }
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Priority:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.priority || ''}
// //               onChange={(e) =>
// //                 handleProcessDetailChange(i, 'priority', e.target.value)
// //               }
// //               style={styles.input}
// //               placeholder="Press -1 to skip priority"
// //             />
// //           </label>
// //         </div>
// //       );
// //     }
// //     return processFields;
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2>Enter Number of Processes</h2>
// //       <input
// //         type="number"
// //         value={numProcesses}
// //         onChange={handleNumProcessesChange}
// //         style={styles.input}
// //         placeholder="Enter number of processes"
// //       />
// //       {numProcesses > 0 && generateProcessFields()}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     padding: '2rem',
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: '8px',
// //     width: '400px',
// //     margin: '0 auto',
// //   },
// //   input: {
// //     padding: '0.5rem',
// //     margin: '0.5rem 0',
// //     borderRadius: '5px',
// //     border: '1px solid #ccc',
// //     width: '100%',
// //   },
// //   processItem: {
// //     backgroundColor: '#e9f7fd',
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '8px',
// //   },
// // };

// // export default ProcessInputForm;
// // import React, { useState } from 'react';

// // const ProcessInputForm = () => {
// //   // State to manage the number of processes and process details
// //   const [numProcesses, setNumProcesses] = useState('');
// //   const [processDetails, setProcessDetails] = useState([]);
  
// //   // Handler to update the number of processes, ensuring it's at least 1
// //   const handleNumProcessesChange = (e) => {
// //     const value = Math.max(1, e.target.value); // Ensure value is at least 1
// //     setNumProcesses(value);
// //   };

// //   // Handler to handle input change for each process field
// //   const handleProcessDetailChange = (index, field, value) => {
// //     const newProcessDetails = [...processDetails];
// //     newProcessDetails[index] = {
// //       ...newProcessDetails[index],
// //       [field]: value,
// //     };
// //     setProcessDetails(newProcessDetails);
// //   };

// //   // Handler to ensure non-negative values for Arrival Time and Burst Time
// //   const handleNonNegativeChange = (e, index, field) => {
// //     const value = Math.max(0, e.target.value); // Ensure non-negative values
// //     handleProcessDetailChange(index, field, value);
// //   };

// //   // Handler to generate process fields dynamically based on number of processes
// //   const generateProcessFields = () => {
// //     const processFields = [];
// //     for (let i = 0; i < numProcesses; i++) {
// //       processFields.push(
// //         <div key={i} style={styles.processItem}>
// //           <h4>Process {i + 1}</h4>
// //           <label>
// //             Arrival Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.arrivalTime || ''}
// //               onChange={(e) =>
// //                 handleNonNegativeChange(e, i, 'arrivalTime')
// //               }
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Burst Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.burstTime || ''}
// //               onChange={(e) =>
// //                 handleNonNegativeChange(e, i, 'burstTime')
// //               }
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Priority:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.priority || ''}
// //               onChange={(e) =>
// //                 handleProcessDetailChange(i, 'priority', e.target.value)
// //               }
// //               style={styles.input}
// //               placeholder="Press -1 to skip priority"
// //             />
// //           </label>
// //         </div>
// //       );
// //     }
// //     return processFields;
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2>Enter Number of Processes</h2>
// //       <input
// //         type="number"
// //         value={numProcesses}
// //         onChange={handleNumProcessesChange}
// //         style={styles.input}
// //         placeholder="Enter number of processes"
// //         min="1"
// //       />
// //       {numProcesses > 0 && generateProcessFields()}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     padding: '2rem',
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: '8px',
// //     width: '400px',
// //     margin: '0 auto',
// //   },
// //   input: {
// //     padding: '0.5rem',
// //     margin: '0.5rem 0',
// //     borderRadius: '5px',
// //     border: '1px solid #ccc',
// //     width: '100%',
// //   },
// //   processItem: {
// //     backgroundColor: '#e9f7fd',
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '8px',
// //   },
// // };

// // export default ProcessInputForm;
// // import React, { useState } from 'react';
// // import GanttChartsPage from './GanttChartsPage'; // To be implemented next

// // const ProcessInputForm = () => {
// //   const [numProcesses, setNumProcesses] = useState('');
// //   const [processDetails, setProcessDetails] = useState([]);
// //   const [showCharts, setShowCharts] = useState(false);

// //   const handleNumProcessesChange = (e) => {
// //     const value = Math.max(1, e.target.value);
// //     setNumProcesses(value);
// //   };

// //   const handleProcessDetailChange = (index, field, value) => {
// //     const newProcessDetails = [...processDetails];
// //     newProcessDetails[index] = {
// //       ...newProcessDetails[index],
// //       [field]: value,
// //     };
// //     setProcessDetails(newProcessDetails);
// //   };

// //   const handleNonNegativeChange = (e, index, field) => {
// //     const value = Math.max(0, e.target.value);
// //     handleProcessDetailChange(index, field, value);
// //   };

// //   const generateProcessFields = () => {
// //     const processFields = [];
// //     for (let i = 0; i < numProcesses; i++) {
// //       processFields.push(
// //         <div key={i} style={styles.processItem}>
// //           <h4>Process {i + 1}</h4>
// //           <label>
// //             Arrival Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.arrivalTime || ''}
// //               onChange={(e) => handleNonNegativeChange(e, i, 'arrivalTime')}
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Burst Time:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.burstTime || ''}
// //               onChange={(e) => handleNonNegativeChange(e, i, 'burstTime')}
// //               style={styles.input}
// //               min="0"
// //             />
// //           </label>
// //           <label>
// //             Priority:
// //             <input
// //               type="number"
// //               value={processDetails[i]?.priority || ''}
// //               onChange={(e) => handleProcessDetailChange(i, 'priority', e.target.value)}
// //               style={styles.input}
// //               placeholder="Press -1 to skip priority"
// //             />
// //           </label>
// //         </div>
// //       );
// //     }
// //     return processFields;
// //   };

// //   const handleEvaluateClick = () => {
// //     setShowCharts(true);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {!showCharts ? (
// //         <>
// //           <h2>Enter Number of Processes</h2>
// //           <input
// //             type="number"
// //             value={numProcesses}
// //             onChange={handleNumProcessesChange}
// //             style={styles.input}
// //             placeholder="Enter number of processes"
// //             min="1"
// //           />
// //           {numProcesses > 0 && generateProcessFields()}
// //           <button style={styles.button} onClick={handleEvaluateClick}>
// //             Make Gantt Chart and Evaluate
// //           </button>
// //         </>
// //       ) : (
// //         <GanttChartsPage processes={processDetails} />
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     padding: '2rem',
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: '8px',
// //     width: '400px',
// //     margin: '0 auto',
// //   },
// //   input: {
// //     padding: '0.5rem',
// //     margin: '0.5rem 0',
// //     borderRadius: '5px',
// //     border: '1px solid #ccc',
// //     width: '100%',
// //   },
// //   processItem: {
// //     backgroundColor: '#e9f7fd',
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '8px',
// //   },
// //   button: {
// //     padding: '0.75rem 1.5rem',
// //     backgroundColor: '#61dafb',
// //     border: 'none',
// //     borderRadius: '5px',
// //     color: '#000',
// //     cursor: 'pointer',
// //     fontWeight: 'bold',
// //     marginTop: '1rem',
// //   },
// // };

// // export default ProcessInputForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // <-- import useNavigate

// const ProcessInputForm = () => {
//   const [numProcesses, setNumProcesses] = useState('');
//   const [processDetails, setProcessDetails] = useState([]);
//   const navigate = useNavigate(); // <-- initialize navigate

//   const handleNumProcessesChange = (e) => {
//     const value = Math.max(1, e.target.value);
//     setNumProcesses(value);
//   };

//   const handleProcessDetailChange = (index, field, value) => {
//     const newProcessDetails = [...processDetails];
//     newProcessDetails[index] = {
//       ...newProcessDetails[index],
//       [field]: value,
//       processName: `P${index + 1}`, // <-- Add name for GanttChart labeling
//     };
//     setProcessDetails(newProcessDetails);
//   };

//   const handleNonNegativeChange = (e, index, field) => {
//     const value = Math.max(0, e.target.value);
//     handleProcessDetailChange(index, field, value);
//   };

//   const generateProcessFields = () => {
//     const processFields = [];
//     for (let i = 0; i < numProcesses; i++) {
//       processFields.push(
//         <div key={i} style={styles.processItem}>
//           <h4>Process {i + 1}</h4>
//           <label>
//             Arrival Time:
//             <input
//               type="number"
//               value={processDetails[i]?.arrivalTime || ''}
//               onChange={(e) => handleNonNegativeChange(e, i, 'arrivalTime')}
//               style={styles.input}
//               min="0"
//             />
//           </label>
//           <label>
//             Burst Time:
//             <input
//               type="number"
//               value={processDetails[i]?.burstTime || ''}
//               onChange={(e) => handleNonNegativeChange(e, i, 'burstTime')}
//               style={styles.input}
//               min="0"
//             />
//           </label>
//           <label>
//             Priority:
//             <input
//               type="number"
//               value={processDetails[i]?.priority || ''}
//               onChange={(e) =>
//                 handleProcessDetailChange(i, 'priority', e.target.value)
//               }
//               style={styles.input}
//               placeholder="Press -1 to skip priority"
//             />
//           </label>
//         </div>
//       );
//     }
//     return processFields;
//   };

//   const handleEvaluateClick = () => {
//     // Navigate to /gantt with processDetails as state
//     navigate('/gantt', { state: { processes: processDetails } });
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Enter Number of Processes</h2>
//       <input
//         type="number"
//         value={numProcesses}
//         onChange={handleNumProcessesChange}
//         style={styles.input}
//         placeholder="Enter number of processes"
//         min="1"
//       />
//       {numProcesses > 0 && generateProcessFields()}
//       <button style={styles.button} onClick={handleEvaluateClick}>
//         Make Gantt Chart and Evaluate
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     width: '400px',
//     margin: '0 auto',
//   },
//   input: {
//     padding: '0.5rem',
//     margin: '0.5rem 0',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '100%',
//   },
//   processItem: {
//     backgroundColor: '#e9f7fd',
//     marginBottom: '1rem',
//     padding: '1rem',
//     borderRadius: '8px',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#61dafb',
//     border: 'none',
//     borderRadius: '5px',
//     color: '#000',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     marginTop: '1rem',
//   },
// };

// // export default ProcessInputForm;
// import React, { useState } from 'react';
// import GanttChartsPage from './GanttChartsPage'; // GanttChartsPage component should accept the schedule

// const ProcessInputForm = () => {
//   const [numProcesses, setNumProcesses] = useState('');
//   const [processDetails, setProcessDetails] = useState([]);
//   const [showCharts, setShowCharts] = useState(false);
//   const [schedule, setSchedule] = useState([]);

//   const handleNumProcessesChange = (e) => {
//     const value = Math.max(1, e.target.value);
//     setNumProcesses(value);
//   };

//   const handleProcessDetailChange = (index, field, value) => {
//     const newProcessDetails = [...processDetails];
//     newProcessDetails[index] = {
//       ...newProcessDetails[index],
//       [field]: value,
//     };
//     setProcessDetails(newProcessDetails);
//   };

//   const handleNonNegativeChange = (e, index, field) => {
//     const value = Math.max(0, e.target.value);
//     handleProcessDetailChange(index, field, value);
//   };

//   const generateProcessFields = () => {
//     const processFields = [];
//     for (let i = 0; i < numProcesses; i++) {
//       processFields.push(
//         <div key={i} style={styles.processItem}>
//           <h4>Process {i + 1}</h4>
//           <label>
//             Arrival Time:
//             <input
//               type="number"
//               value={processDetails[i]?.arrivalTime || ''}
//               onChange={(e) => handleNonNegativeChange(e, i, 'arrivalTime')}
//               style={styles.input}
//               min="0"
//             />
//           </label>
//           <label>
//             Burst Time:
//             <input
//               type="number"
//               value={processDetails[i]?.burstTime || ''}
//               onChange={(e) => handleNonNegativeChange(e, i, 'burstTime')}
//               style={styles.input}
//               min="0"
//             />
//           </label>
//           <label>
//             Priority:
//             <input
//               type="number"
//               value={processDetails[i]?.priority || ''}
//               onChange={(e) => handleProcessDetailChange(i, 'priority', e.target.value)}
//               style={styles.input}
//               placeholder="Press -1 to skip priority"
//             />
//           </label>
//         </div>
//       );
//     }
//     return processFields;
//   };

//   const roundRobinScheduling = (processes, quantum) => {
//     let time = 0;
//     let schedule = [];
//     let queue = [...processes];

//     // Each process gets an initial id and burst time, etc.
//     while (queue.length > 0) {
//       const process = queue.shift();
//       const executionTime = Math.min(quantum, process.burstTime);
//       process.burstTime -= executionTime;
//       schedule.push({
//         processId: process.id, // Keep the same processId (P1, P2, etc.)
//         startTime: time,
//         endTime: time + executionTime,
//       });
//       time += executionTime;

//       // If the process still has burst time left, add it back to the queue
//       if (process.burstTime > 0) {
//         queue.push(process);
//       }
//     }

//     return schedule;
//   };

//   const handleEvaluateClick = () => {
//     // Run Round Robin and get the schedule
//     const quantum = 4; // You can adjust this quantum time
//     const scheduledProcesses = roundRobinScheduling(processDetails, quantum);
//     setSchedule(scheduledProcesses); // Store the schedule
//     setShowCharts(true); // Show the Gantt chart page
//   };

//   return (
//     <div style={styles.container}>
//       {!showCharts ? (
//         <>
//           <h2>Enter Number of Processes</h2>
//           <input
//             type="number"
//             value={numProcesses}
//             onChange={handleNumProcessesChange}
//             style={styles.input}
//             placeholder="Enter number of processes"
//             min="1"
//           />
//           {numProcesses > 0 && generateProcessFields()}
//           <button style={styles.button} onClick={handleEvaluateClick}>
//             Make Gantt Chart and Evaluate
//           </button>
//         </>
//       ) : (
//         <GanttChartsPage schedule={schedule} /> 
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     width: '400px',
//     margin: '0 auto',
//   },
//   input: {
//     padding: '0.5rem',
//     margin: '0.5rem 0',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '100%',
//   },
//   processItem: {
//     backgroundColor: '#e9f7fd',
//     marginBottom: '1rem',
//     padding: '1rem',
//     borderRadius: '8px',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#61dafb',
//     border: 'none',
//     borderRadius: '5px',
//     color: '#000',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     marginTop: '1rem',
//   },
// };

// // export default ProcessInputForm;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProcessInputForm = () => {
//   const [numProcesses, setNumProcesses] = useState('');
//   const [processDetails, setProcessDetails] = useState([]);
//   const navigate = useNavigate();

//   const handleNumProcessesChange = (e) => {
//     const value = Math.max(1, e.target.value);
//     setNumProcesses(value);
//     setProcessDetails(Array.from({ length: value }, (_, i) => ({
//       id: `P${i + 1}`,
//       name: `P${i + 1}`,
//       arrivalTime: 0,
//       burstTime: 0,
//       priority: -1,
//     })));
//   };

//   const handleProcessDetailChange = (index, field, value) => {
//     const newDetails = [...processDetails];
//     newDetails[index][field] = parseInt(value) || 0;
//     setProcessDetails(newDetails);
//   };

//   const handleNonNegativeChange = (e, index, field) => {
//     const value = Math.max(0, e.target.value);
//     handleProcessDetailChange(index, field, value);
//   };

//   const generateProcessFields = () =>
//     processDetails.map((process, i) => (
//       <div key={i} style={styles.processItem}>
//         <h4>Process {i + 1}</h4>
//         <label>
//           Arrival Time:
//           <input
//             type="number"
//             value={process.arrivalTime}
//             onChange={(e) => handleNonNegativeChange(e, i, 'arrivalTime')}
//             style={styles.input}
//             min="0"
//           />
//         </label>
//         <label>
//           Burst Time:
//           <input
//             type="number"
//             value={process.burstTime}
//             onChange={(e) => handleNonNegativeChange(e, i, 'burstTime')}
//             style={styles.input}
//             min="0"
//           />
//         </label>
//         <label>
//           Priority:
//           <input
//             type="number"
//             value={process.priority}
//             onChange={(e) => handleProcessDetailChange(i, 'priority', e.target.value)}
//             style={styles.input}
//             placeholder="Press -1 to skip priority"
//           />
//         </label>
//       </div>
//     ));

//   const roundRobinScheduling = (processes, quantum) => {
//     let time = 0;
//     let schedule = [];
//     let queue = processes.map(p => ({ ...p }));
    
//     while (queue.length > 0) {
//       const process = queue.shift();
//       const executionTime = Math.min(quantum, process.burstTime);
//       process.burstTime -= executionTime;
//       schedule.push({
//         processName: process.name,
//         startTime: time,
//         endTime: time + executionTime,
//       });
//       time += executionTime;
//       if (process.burstTime > 0) {
//         queue.push(process);
//       }
//     }

//     return schedule;
//   };

//   const handleEvaluateClick = () => {
//     const quantum = 4;
//     const rrSchedule = roundRobinScheduling(processDetails, quantum);

//     navigate('/gantt-charts', {
//       state: {
//         processes: processDetails,
//         rrSchedule: rrSchedule,
//       },
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Enter Number of Processes</h2>
//       <input
//         type="number"
//         value={numProcesses}
//         onChange={handleNumProcessesChange}
//         style={styles.input}
//         placeholder="Enter number of processes"
//         min="1"
//       />
//       {numProcesses > 0 && generateProcessFields()}
//       <button style={styles.button} onClick={handleEvaluateClick}>
//         Make Gantt Chart and Evaluate
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//     backgroundColor: '#f0f0f0',
//     borderRadius: '8px',
//     width: '400px',
//     margin: '0 auto',
//   },
//   input: {
//     padding: '0.5rem',
//     margin: '0.5rem 0',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     width: '100%',
//   },
//   processItem: {
//     backgroundColor: '#e9f7fd',
//     marginBottom: '1rem',
//     padding: '1rem',
//     borderRadius: '8px',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#61dafb',
//     border: 'none',
//     borderRadius: '5px',
//     color: '#000',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     marginTop: '1rem',
//   },
// };

// export default ProcessInputForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessInputForm = () => {
  const [numProcesses, setNumProcesses] = useState('');
  const [quantum, setQuantum] = useState(4);
  const [processDetails, setProcessDetails] = useState([]);
  const navigate = useNavigate();

  const handleNumProcessesChange = (e) => {
    const value = Math.max(1, e.target.value);
    setNumProcesses(value);
    setProcessDetails(Array.from({ length: value }, (_, i) => ({
      id: `P${i + 1}`,
      name: `P${i + 1}`,
      arrivalTime: 0,
      burstTime: 0,
      priority: -1,
    })));
  };

  const handleProcessDetailChange = (index, field, value) => {
    const newDetails = [...processDetails];
    newDetails[index][field] = field === 'priority' ? parseInt(value) : Math.max(0, parseInt(value) || 0);
    setProcessDetails(newDetails);
  };

  const generateProcessFields = () =>
    processDetails.map((process, i) => (
      <div key={i} style={styles.processItem}>
        <h4>Process {i + 1}</h4>
        <label>
          Arrival Time:
          <input
            type="number"
            value={process.arrivalTime}
            onChange={(e) => handleProcessDetailChange(i, 'arrivalTime', e.target.value)}
            style={styles.input}
            min="0"
          />
        </label>
        <label>
          Burst Time:
          <input
            type="number"
            value={process.burstTime}
            onChange={(e) => handleProcessDetailChange(i, 'burstTime', e.target.value)}
            style={styles.input}
            min="1"
          />
        </label>
        <label>
          Priority:
          <input
            type="number"
            value={process.priority}
            onChange={(e) => handleProcessDetailChange(i, 'priority', e.target.value)}
            style={styles.input}
            placeholder="Enter -1 to skip priority"
          />
        </label>
      </div>
    ));

  const roundRobinScheduling = (processes, quantum) => {
    let time = 0;
    let schedule = [];
    let queue = processes.map(p => ({ ...p }));
    queue.sort((a, b) => a.arrivalTime - b.arrivalTime);

    const readyQueue = [];
    let i = 0;

    while (i < queue.length || readyQueue.length > 0) {
      while (i < queue.length && queue[i].arrivalTime <= time) {
        readyQueue.push(queue[i]);
        i++;
      }

      if (readyQueue.length === 0) {
        time = queue[i]?.arrivalTime ?? time;
        continue;
      }

      const process = readyQueue.shift();
      const execTime = Math.min(process.burstTime, quantum);
      schedule.push({
        processName: process.name,
        startTime: time,
        endTime: time + execTime,
      });
      time += execTime;
      process.burstTime -= execTime;

      if (process.burstTime > 0) {
        readyQueue.push(process);
      }
    }

    return schedule;
  };

  const handleEvaluateClick = () => {
    if (processDetails.length === 0 || processDetails.some(p => p.burstTime <= 0)) {
      alert('Please fill all process details properly.');
      return;
    }

    const rrSchedule = roundRobinScheduling(processDetails.map(p => ({ ...p })), quantum);

    navigate('/gantt-charts', {
      state: {
        processes: processDetails,
        rrSchedule,
      },
    });
  };

  return (
    <div style={styles.container}>
      <h2>Enter Number of Processes</h2>
      <input
        type="number"
        value={numProcesses}
        onChange={handleNumProcessesChange}
        style={styles.input}
        placeholder="Enter number of processes"
        min="1"
      />
      <br />
      <label>
        Time Quantum (Round Robin):
        <input
          type="number"
          value={quantum}
          onChange={(e) => setQuantum(Math.max(1, parseInt(e.target.value) || 1))}
          style={styles.input}
          min="1"
        />
      </label>
      {numProcesses > 0 && generateProcessFields()}
      <button style={styles.button} onClick={handleEvaluateClick}>
        Make Gantt Chart and Evaluate
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    width: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  processItem: {
    backgroundColor: '#e9f7fd',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '8px',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: '#000',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
};

export default ProcessInputForm;

