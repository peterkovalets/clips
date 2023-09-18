import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteClip as deleteClipApi } from '../../services/apiClips';

export function useDeleteClip() {
  const queryClient = useQueryClient();

  const { mutate: deleteClip, isLoading: isDeleting } = useMutation({
    mutationFn: deleteClipApi,
    onSuccess: () => {
      toast.success('Clip successfully deleted');
      queryClient.invalidateQueries(['clips']);
    },
    onError: () => {
      toast.error('Could not delete clip');
    },
  });

  return { deleteClip, isDeleting };
}
