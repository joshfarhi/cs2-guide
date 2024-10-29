"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Mirage() {
  const [team, setTeam] = useState<'Terrorist' | 'Counter-Terrorist'>('Terrorist');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-5xl font-extrabold mb-10 text-foreground">Mirage Guide</h1>
      <div className="mb-12 flex">
        <button
          className={`px-6 py-3 font-semibold rounded-lg transition-colors duration-200 ${team === 'Terrorist' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}
          onClick={() => setTeam('Terrorist')}
        >
          <Image src="/images/terrorist-badge.png" alt="Terrorist Badge" width={44} height={44} className="mr-2" />
          
        </button>
        <button
          className={`px-6 py-3 ml-4 font-semibold rounded-lg transition-colors duration-200 ${team === 'Counter-Terrorist' ? 'bg-transparent text-white' : 'bg-transparent text-black'}`}
          onClick={() => setTeam('Counter-Terrorist')}
        >
          <Image src="/images/counterterrorist-badge.png" alt="Counter-Terrorist Badge" width={44} height={44} className="mr-2" />
          
        </button>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        {team === 'Terrorist' ? 'Terrorist Strategies' : 'Counter-Terrorist Strategies'}
      </h2>

      {team === 'Terrorist' ? (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Flashbang tips and strategies')}
            title="Flashbang Tips"
          >
            <Image src="/images/flashbang-icon.png" alt="Flashbang Icon" width={64} height={64} />
          </button>
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Smoke grenade tips and strategies')}
            title="Smoke Grenade Tips"
          >
            <Image src="/images/smoke-icon.png" alt="Smoke Icon" width={64} height={64} />
          </button>
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Grenade tips and strategies')}
            title="Grenade Tips"
          >
            <Image src="/images/nade-icon.png" alt="Grenade Icon" width={64} height={64} />
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Flashbang tips and strategies')}
            title="Flashbang Tips"
          >
            <Image src="/images/flashbang-icon.png" alt="Flashbang Icon" width={64} height={64} />
          </button>
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Smoke grenade tips and strategies')}
            title="Smoke Grenade Tips"
          >
            <Image src="/images/smoke-icon.png" alt="Smoke Icon" width={64} height={64} />
          </button>
          <button
            className="px-4 py-2 font-semibold rounded-lg bg-gray-700 hover:bg-gray-800 text-white"
            onClick={() => alert('Grenade tips and strategies')}
            title="Grenade Tips"
          >
            <Image src="/images/nade-icon.png" alt="Grenade Icon" width={64} height={64} />
          </button>
        </div>
      )}
    </div>
  );
}
