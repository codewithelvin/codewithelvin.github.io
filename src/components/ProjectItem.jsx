export default function ProjectItem({ name, href, period, tech, description, extraDescription }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {href ? (
            <a href={href} className="group">
              {name}
              <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                ↗
              </span>
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          <span className="italic font-medium text-gray-550">{period}</span> | {tech}
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
