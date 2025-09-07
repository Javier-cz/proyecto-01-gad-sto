export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold">Bienvenido a REDNI</h1>
      <p className="mt-4 text-lg text-gray-600">
        Juntos luchamos contra la desnutrición crónica infantil.
      </p>

      <a
        href="/donar"
        className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Haz tu donación
      </a>
    </section>
  );
}
