import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@vxtraders/backend';

export const trpc = createTRPCReact<AppRouter>();