export default function ExperienceItem({ company, period, role, description, bullets }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          <span className="sr-only">Company: </span>{company}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          <span className="sr-only">Role: </span>
          <span className="italic font-medium text-gray-550">{role}</span>
        </p>
        <p className="leading-normal text-md text-gray-650">
          <span className="sr-only">Period: </span>
          <span className="italic  text-gray-550">{period}</span>
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
              <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px" aria-hidden="true">
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
