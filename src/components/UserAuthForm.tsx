import { cn } from '@/lib/utils';
import { Button } from './ui/Button';
import { FC } from 'react';

interface UserAuthFormProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button>Google</Button>
    </div>
  );
};

export default UserAuthForm;
