export default function CertificateItem({ name, issuer, period, description }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
          {name}
        </h3>
        <p className="leading-normal text-md text-gray-650">
          <span className="italic font-medium text-gray-550">{period}</span> | {issuer}
        </p>
      </header>

      {description && (
        <p className="mt-2.1 text-md text-gray-700 leading-normal">{description}</p>
      )}
    </section>
  )
}
