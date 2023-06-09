import { SunIcon } from '@heroicons/react/solid';

const Loading = () => {
  return (
    <div className="bg-zinc-300 min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Information
      </h1>
    </div>
  );
};

export default Loading;
