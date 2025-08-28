export default function Pill({ text }: { text: string }) {
  return (
    <span key={text} className="rounded-lg bg-yellow-baby/50 p-2">
      {text}
    </span>
  );
}
