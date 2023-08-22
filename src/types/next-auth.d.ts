// eslint-disable-next-line no-unused-vars
import type { Session, User } from 'next-auth';
// eslint-disable-next-line no-unused-vars
import type { JWT } from 'next-auth/jwt';

type UserId = string;

declare module 'next-auth/jwt' {
  // eslint-disable-next-line no-unused-vars
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    id: UserId;
    username?: string | null;
  }
}
