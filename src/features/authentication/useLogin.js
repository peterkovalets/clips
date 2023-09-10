import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success('Successfully logged in');
      queryClient.setQueryData(['user'], user);
    },
    onError: () => {
      toast.error('Email or password is incorrect');
    },
  });

  return { login, isLoading };
}
