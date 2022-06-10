import React from "react";

function Card(){
    return (

        <div className="bg-white p-6 mt-10 rounded-lg shadow-2xl">
          <div className="text-center">
            <span className="block text-xl font-bold text-slate-700">São Vicente</span>
            <spanm className="text-slate-500 text-sm font-medium">São Paulo, Brasíl</spanm>
          </div> 

            <div className="font-bold text-slate-700 flex mt-4 mb-2">
            <span className="text-8xl">27</span>
            <span className="text-2xl mt-3">°C</span>
          </div> 

          <div className="text-center">
            <span className="block">icone</span>
                <span className="text-slate-700 font-medium">nublado</span>
          </div>
        </div>

    );
}

export default Card;