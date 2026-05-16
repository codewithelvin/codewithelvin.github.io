export default function Divider() {
  return (
    <div className="flex items-center justify-center my-4 opacity-70 print:my-4 break-inside-avoid break-after-avoid">
      <hr className="flex-1 border-t border-gray-300" />
      <span className="mx-4 text-gray-400" aria-hidden="true">✦</span>
      <hr className="flex-1 border-t border-gray-300" />
    </div>
  )
}
