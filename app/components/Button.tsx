export default function Button({ text }: { text: string }) {
  return (
    <button className="rounded-lg hover:text-white bg-green-wash/30 tracking-widest uppercase shadow-xl px-4 py-3 hover:bg-yellow-mustard/50 hover:text-rose-sligth">
      {" "}
      Download CV
    </button>
  );
}
