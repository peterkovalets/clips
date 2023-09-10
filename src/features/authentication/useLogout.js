import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { logout as logoutApi } from '../../services/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('Successfully logged out');
      queryClient.setQueryData(['user'], null);
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });

  return { logout };
}
