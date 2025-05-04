// import { useEffect, useState } from "react";


// export default function PacienteList() {
//     const [pacientes, setPacientes] = useState([]);

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Lista de Pacientes</h2>
//             <ul className="space-y-2">
//                 {pacientes.map((p) => (
//                 <li key={p.id} className="border p-2 rounded shadow">
//                     <div className="font-semibold">{p.nombre_completo}</div>
//                     <div className="text-sm">CURP: {p.curp}</div>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//   );
// }