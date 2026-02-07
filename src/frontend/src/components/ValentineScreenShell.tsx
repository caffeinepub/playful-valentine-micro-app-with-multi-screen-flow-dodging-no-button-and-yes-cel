import { type ReactNode } from 'react';

interface ValentineScreenShellProps {
  children: ReactNode;
  withBottomCta?: boolean;
  gameBackground?: boolean;
}

export default function ValentineScreenShell({ 
  children, 
  withBottomCta = false,
  gameBackground = false 
}: ValentineScreenShellProps) {
  const bgClass = gameBackground ? 'game-bg' : 'valentine-bg';
  
  if (withBottomCta) {
    return (
      <div className={`h-mobile-screen flex flex-col ${bgClass} safe-area-padding`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`h-mobile-screen flex items-center justify-center p-6 ${bgClass}`}>
      <div className="max-w-3xl w-full">
        {children}
      </div>
    </div>
  );
}
