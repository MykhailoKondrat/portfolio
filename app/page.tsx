import { Card } from '@/app/components/Card';
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <main className="flex flex-col gap-8 items-center sm:items-start">
      <h1 className="text-4xl font-bold text-center sm:text-left">
        Hey, I&apos;m Mykhailo
      </h1>
      <p className="text-lg text-center sm:text-left">
        I&apos;m a software engineer, currently working at{" "}
        <a href="https://www.ericsson.com" className="text-blue-400">Ericsson</a>.
      </p>
      <p className="text-lg text-center sm:text-left">
        Check out my projects on{" "}
        <a href="https://github.com/MykhailoKondrat" className="text-blue-400">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="inline-block w-6 h-6 mr-2 invert" />
        </a>
      </p>
      <p className="text-lg text-center sm:text-left">
        This website is still under construction.
      </p>
      <p className="text-lg text-center sm:text-left">
        Feel free to reach out via email at{" "}
        <a href="mailto:mykhailo.kondrat@gmail.com" className="text-blue-400">
          mykhailo.kondrat@gmail.com
        </a>.
      </p>
      <a
        href="/Mykhailo Kondrat resume.pdf"
        download
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
      <div className="relative group w-32 h-32 bg-blue-500">
        <div className="absolute inset-0 bg-blue-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 w-full">
        <Card  >test</Card>
        <Card  >test</Card>
      </div>
      </main>
      

      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
