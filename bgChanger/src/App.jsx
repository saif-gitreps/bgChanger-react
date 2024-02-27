import { useState } from "react";
import Button from "./components/button";

function App() {
   const [color, setColor] = useState("olive");

   return (
      <div className="w-full h-screen duration-1000" style={{ background: color }}>
         <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-20 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl text-slate-200">
               <Button color="red" setColor={setColor} />
               <Button color="green" setColor={setColor} />
               <Button color="blue" setColor={setColor} />
               <Button color="purple" setColor={setColor} />
               <Button color="yellow" setColor={setColor} />
               <Button color="brown" setColor={setColor} />
            </div>
         </div>
      </div>
   );
}

export default App;
