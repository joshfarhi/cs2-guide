import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">CS2 Utility Guide</h1>
      <h4 className="text-xl font-bold mb-8 text-foreground">Choose a map below.</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/mirage" legacyBehavior>
          <a className="flex flex-col items-center justify-center w-full py-4 text-center text-xl font-semibold text-foreground bg-transparent rounded-lg transform transition-transform hover:scale-105">
            <Image src="/images/mirage-badge.png" alt="Mirage Badge" width={128} height={128} className="w-32 h-32 mb-2" />
            
          </a>
        </Link>
        <Link href="/dust2" legacyBehavior>
          <a className="flex flex-col items-center justify-center w-full py-4 text-center text-xl font-semibold text-foreground bg-transparent rounded-lg transform transition-transform hover:scale-105">
            <Image src="/images/dust2-badge.png" alt="Dust2 Badge" width={128} height={128} className="w-32 h-32 mb-2" />
             
          </a>
        </Link>
        <Link href="/inferno" legacyBehavior>
          <a className="flex flex-col items-center justify-center w-full py-4 text-center text-xl font-semibold text-foreground bg-transparent rounded-lg transform transition-transform hover:scale-105">
            <Image src="/images/inferno-badge.png" alt="Inferno Badge" width={128} height={128} className="w-32 h-32 mb-2" />
            
          </a>
        </Link>
        <Link href="/vertigo" legacyBehavior>
          <a className="flex flex-col items-center justify-center w-full py-4 text-center text-xl font-semibold text-foreground bg-transparent rounded-lg transform transition-transform hover:scale-105">
            <Image src="/images/vertigo-badge.png" alt="Vertigo Badge" width={128} height={128} className="w-32 h-32 mb-2" />
            
          </a>
        </Link>
      </div>
    </div>
  );
}