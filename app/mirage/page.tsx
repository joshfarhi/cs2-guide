"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Mirage() {
  const [team, setTeam] = useState<'Terrorist' | 'Counter-Terrorist'>('Terrorist');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Mirage Guide</h1>
      <div className="mb-8">
        <button
          className={`px-4 py-2 mr-2 font-semibold rounded-lg ${team === 'Terrorist' ? 'bg-transparent text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setTeam('Terrorist')}
        >
        <Image src="/images/terrorist-badge.png" alt="Counter-Terrorist Badge" width={44} height={44} className="mr-2" />
        </button>
        <button
          className={`px-4 py-2 mr-2 font-semibold rounded-lg ${team === 'Counter-Terrorist' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}
          onClick={() => setTeam('Counter-Terrorist')}
        >
          <Image src="/images/counterterrorist-badge.png" alt="Counter-Terrorist Badge" width={44} height={44} className="mr-2" />
        </button>
      </div>
      {team === 'Terrorist' ? (
        <div>
          {/* Terrorist content goes here */}
            <button
            className="px-4 py-2 font-semibold rounded-lg bg-transparent text-white"
            onClick={() => alert('Flashbang tips and strategies')}
            >
            <Image src="/images/flashbang-icon.png" alt="Flashbang Icon" width={204} height={204} className="mr-2" />
            </button>
            <button
            className="px-4 py-2 font-semibold rounded-lg bg-transparent text-white"
            onClick={() => alert('Flashbang tips and strategies')}
            >
            <Image src="/images/smoke-icon.png" alt="Flashbang Icon" width={204} height={204} className="mr-2" />
            </button>
            <button
            className="px-4 py-2 font-semibold rounded-lg bg-transparent text-white"
            onClick={() => alert('Flashbang tips and strategies')}
            >
            <Image src="/images/nade-icon.png" alt="Flashbang Icon" width={204} height={204} className="mr-2" />
            </button>
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