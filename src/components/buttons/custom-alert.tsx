import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import React from 'react';

type CustomAlertProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  confirmText?: string;
  calcelText?: string;
  onConfirm: () => void;
};

const CustomAlert: React.FC<CustomAlertProps> = ({
  trigger,
  title,
  description,
  confirmText,
  calcelText,
  onConfirm,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger aria-label="delete">{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{calcelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlert;
