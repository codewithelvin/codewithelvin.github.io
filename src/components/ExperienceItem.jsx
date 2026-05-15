export default function ExperienceItem({ company, period, role, description, bullets }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {company}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          {period} | {role}
        </p>
      </header>

      {description && (
        <p
          className="mt-2.1 text-md text-gray-700 leading-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {bullets && bullets.length > 0 && (
        <ul>
          {bullets.map((bullet, i) => (
            <li key={i} className="mt-2.1 text-md text-gray-700 leading-normal">
              <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
                ›
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
