export default function ProjectItem({ name, href, period, tech, description, extraDescription }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          <span className="sr-only">Project: </span>
          {href ? (
            <a href={href} className="group" target="_blank" rel="noopener noreferrer">
              {name}
              <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          <span className="sr-only">Technologies: </span>
          <span className="italic font-medium text-gray-550">{tech}</span>
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
      {extraDescription && (
        <p className="mt-2.1 text-md text-gray-700 leading-normal">{extraDescription}</p>
      )}
    </section>
  )
}
