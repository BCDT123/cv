export default function Pill({ text }: { text: string }) {
  return (
    <span key={text} className="rounded-lg bg-yellow-baby/50 shadow-xl p-2">
      {text}
    </span>
  );
}
