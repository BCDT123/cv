export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="rounded-lg cursor-pointer hover:text-white bg-rose-sand tracking-widest 
    uppercase px-4 py-3 hover:bg-yellow-mustard/50 hover:text-rose-sligth"
    >
      {children}
    </button>
  );
}
