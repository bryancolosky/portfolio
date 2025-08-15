'use client';

import Link, {
  LinkComponentProps,
  LinkComponent,
  LinkContext,
  LinkProps,
  useLink
} from '@/ui/components/Link/Link';
import UnstyledLink, { UnstyledLinkProps } from '@/ui/components/Link/elements';

export type { LinkComponentProps, LinkComponent, LinkProps, UnstyledLinkProps };
export { LinkContext, UnstyledLink, useLink };
export default Link;
