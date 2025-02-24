import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  fluid = false,
}) => {
  const containerClass = `
    ${fluid ? 'w-full' : 'container'}
    px-4 sm:px-6 lg:px-8
    mx-auto
    ${className}
  `.trim();

  return (
    <Component className={containerClass}>
      {children}
    </Component>
  );
};
