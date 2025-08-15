'use client';

// 🔌 Vendors
import { MDXProvider } from '@mdx-js/react';

// 🔩 Components
import { typeSettings } from '@/ui/components/Typography';

export function Template({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={typeSettings}>{children}</MDXProvider>;
}

export default Template;
