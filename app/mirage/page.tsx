"use client";
import { useState } from 'react';

export default function Mirage() {
  const [team, setTeam] = useState<'Terrorist' | 'Counter-Terrorist'>('Terrorist');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Mirage Guide</h1>
      <div className="mb-8">
        <button
          className={`px-4 py-2 mr-2 font-semibold rounded-lg ${team === 'Terrorist' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setTeam('Terrorist')}
        >
          Terrorist
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-lg ${team === 'Counter-Terrorist' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setTeam('Counter-Terrorist')}
        >
          Counter-Terrorist
        </button>
      </div>
      {team === 'Terrorist' ? (
        <div>
          {/* Terrorist content goes here */}
          <p className="text-foreground">Terrorist strategies and tips...</p>
        </div>
      ) : (
        <div>
          {/* Counter-Terrorist content goes here */}
          <p className="text-foreground">Counter-Terrorist strategies and tips...</p>
        </div>
      )}
    </div>
  );
}