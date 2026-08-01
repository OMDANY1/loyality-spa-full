declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'next/image' {
  import React from 'react';
  const Image: React.ComponentType<any>;
  export default Image;
}

declare module 'next/link' {
  import React from 'react';
  const Link: React.ComponentType<any>;
  export default Link;
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function useRouter(): any;
  export function useSearchParams(): any;
  export function redirect(url: string): void;
  export function notFound(): void;
}
