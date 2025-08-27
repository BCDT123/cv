export default function AboutNav() {
  return (
    <nav className="flex justify-center border-b border-gray-neutro">
      <ul className="flex flex-row mt-4 justify-center">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <a href="/about/experience" className="block w-full h-full">
            Experience
          </a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Education
        </li>
      </ul>
    </nav>
  );
}
