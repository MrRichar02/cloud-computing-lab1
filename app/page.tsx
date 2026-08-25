import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/logosimbolo-udea-verde.png"
            alt="Logo Universidad de Antioquia"
            width={120}
            height={120}
            priority
          />

          <h1 className="text-4xl font-bold tracking-tight text-emerald-900 dark:text-emerald-400">
            Universidad de Antioquia
          </h1>

          <p className="text-xl font-medium text-emerald-700 dark:text-emerald-500">
            Materia: Cloud Computing
          </p>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Laboratorio 1 Cloud Computing
          </p>

          <div className="mt-8 w-24 h-1 bg-emerald-800 dark:bg-emerald-500 rounded-full" />
        </div>
      </main>
    </div>
  );
}
