import Pill from "@/app/components/Pill";

export default function PillContainer({ items }: { items: string[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
      {items.map((i, idx) => (
        <Pill key={idx} text={i} />
      ))}
    </div>
  );
}
