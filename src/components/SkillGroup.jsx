export default function SkillGroup({ skill, level, description, tags }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {skill}
        </h3>
        {level && (
          <p className="leading-normal text-md text-gray-650">{level}</p>
        )}
      </header>

      {description && (
        <p className="mt-2.1 text-md text-gray-700 leading-normal">{description}</p>
      )}

      {tags && tags.length > 0 && (
        <div className="my-3.2 last:pb-1.5">
          <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
            {tags.map((tag) => (
              <li
                key={tag}
                className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 leading-relaxed print:bg-white print:border-inset bg-gray-250"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
