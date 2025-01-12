import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const spinnerVariants = cva('flex-col items-center justify-center ', {
  variants: {
    variant: {
      page: 'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2',
      component: 'static',
    },
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'page',
    show: true,
  },
});

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Spinner: React.FC<SpinnerContentProps> = ({
  variant,
  size,
  show,
  children,
  className,
}) => {
  return (
    <span className={spinnerVariants({ show, variant })}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
};
