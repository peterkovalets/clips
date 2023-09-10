import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { register as registerApi } from '../../services/apiAuth';

export function useRegister() {
  const queryClient = useQueryClient();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: registerApi,
    onSuccess: (user) => {
      toast.success('Account successfully created');
      queryClient.setQueryData(['user'], user);
    },
    onError: () => {
      toast.error('Account could not be created');
    },
  });

  return { register, isLoading };
}
