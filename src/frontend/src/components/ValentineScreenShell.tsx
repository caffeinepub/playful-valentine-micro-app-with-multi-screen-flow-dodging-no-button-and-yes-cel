import { type ReactNode } from 'react';

interface ValentineScreenShellProps {
  children: ReactNode;
}

export default function ValentineScreenShell({ children }: ValentineScreenShellProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 valentine-bg">
      <div className="max-w-3xl w-full">
        {children}
      </div>
    </div>
  );
}
