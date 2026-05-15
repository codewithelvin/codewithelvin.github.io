export default function EducationItem({ school, period, degree, description }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {school}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          {period} | {degree}
        </p>
      </header>
      {description && (
        <p className="mt-2.1 text-md text-gray-700 leading-normal">{description}</p>
      )}
    </section>
  )
}
