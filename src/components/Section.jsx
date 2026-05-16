export default function Section({ title, icon, children }) {
  return (
    <section className="mt-4 first:mt-0">
      <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal flex items-center break-after-avoid">
        {icon && <span className="mr-2.5 text-gray-400" aria-hidden="true">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  )
}
