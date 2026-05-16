export default function Header({ name, avatarUrl, positions, contacts }) {
  return (
    <header className="flex items-start sm:items-center mb-6 md:mb-8">

      {/* Avatar */}
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mr-5 shrink-0 print:border print:border-gray-300"
        />
      )}

      {/* Content wrapper */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full">
        {/* Name and Positions */}
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-gray-750 pb-px">{name}</h1>
          {positions && <p className="text-md text-gray-650">{positions}</p>}
        </div>

        {/* Contact Info */}
        {contacts && (
          <div className="text-left sm:text-right text-sm3 text-gray-650 mt-2 sm:mt-0 sm:ml-auto">
            {contacts.map((contact, i) => (
              <div key={i} className="leading-normal">{contact}</div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
