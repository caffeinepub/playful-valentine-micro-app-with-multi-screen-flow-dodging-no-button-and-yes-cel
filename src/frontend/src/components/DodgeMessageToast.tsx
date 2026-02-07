interface DodgeMessageToastProps {
  message: string;
  show: boolean;
}

export default function DodgeMessageToast({ message, show }: DodgeMessageToastProps) {
  if (!show) return null;

  return (
    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 animate-fade-in-out">
      <div className="bg-valentine-accent text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium whitespace-nowrap">
        {message}
      </div>
    </div>
  );
}
