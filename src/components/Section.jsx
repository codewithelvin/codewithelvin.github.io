export default function Section({ title, icon, children }) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal flex items-center">
          {icon && <span className="mr-2.5 text-gray-400">{icon}</span>}
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
