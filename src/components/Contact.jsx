export default function Contact({ items }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <ul className="list-inside pr-7">
        {items.map((item, i) => (
          <li key={i} className="mt-1.5 leading-normal text-gray-700 text-md">
            {item.href ? (
              <a href={item.href} className="group">
                {item.label}
                <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  ↗
                </span>
              </a>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
