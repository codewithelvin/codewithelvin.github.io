import Statistics from "./Statistics";

export default function Header({ name, avatarUrl, positions, contacts }) {
  return (
    <header className="flex items-start sm:items-center mb-6 md:mb-8">
      {/* Avatar */}
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          width="96"
          height="96"
          className="w-24 h-24 rounded-full object-cover mr-5 shrink-0 print:border print:border-gray-300"
        />
      )}

      {/* Content wrapper */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full">
        {/* Name and Positions */}
        <div className="text-left leading-[1]">
          <h1 className="text-2xl font-semibold text-gray-750 pb-px">{name}</h1>
          {positions && <p className="text-lg text-gray-650">{positions}</p>}
          <Statistics />
        </div>

        {/* Contact Info */}
        {contacts && (
          <div className="text-left sm:text-right text-sm text-gray-650 mt-3 sm:mt-0 sm:ml-auto space-y-1">
            {contacts.map((contact, i) => {
              let href = "";
              if (contact.includes("@")) {
                href = `mailto:${contact}`;
              } else if (contact.match(/^\+?[0-9\s-()]+$/)) {
                href = `tel:${contact.replace(/[\s-()]/g, "")}`;
              } else if (contact.includes(".") || contact.includes("/")) {
                href = contact.startsWith("http")
                  ? contact
                  : `https://${contact}`;
              }

              return (
                <div key={i} className="leading-normal py-0.5">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-0.3 hover:text-gray-800 transition-colors"
                    >
                      {contact}
                    </a>
                  ) : (
                    <span className="inline-block py-0.3">{contact}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
