export default function EducationItem({ school, period, degree, description }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          <span className="sr-only">School: </span>{school}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          <span className="sr-only">Degree: </span>
          <span className="italic font-medium text-gray-550">{degree}</span>
        </p>
        <p className="leading-normal text-md text-gray-650">
          <span className="sr-only">Period: </span>
          <span className="italic  text-gray-550">{period}</span>
        </p>
      </header>
      {description && (
        <p className="mt-2.1 text-md text-gray-700 leading-normal">{description}</p>
      )}
    </section>
  )
}
