import Button from '@/ui/components/Button';
import { signIn } from '@/lib/auth';

import { LoginForm } from '@/ui/shadcn/login-form';

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <form
          action={async () => {
            'use server';
            await signIn('github', {
              redirectTo: '/'
            });
          }}
          className="w-full"
        >
          <Button submit fullWidth>
            Sign in with GitHub
          </Button>
        </form>
        <form
          action={async () => {
            'use server';
            await signIn('google', {
              redirectTo: '/'
            });
          }}
          className="w-full"
        >
          <Button submit fullWidth>
            Sign in with Google
          </Button>
        </form>
        {/* <LoginForm /> */}
      </div>
    </div>
  );
}
