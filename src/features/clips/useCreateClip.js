import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createClip as createClipApi } from '../../services/apiClips';

export function useCreateClip() {
  const navigate = useNavigate();

  const { mutate: createClip, isLoading: isCreating } = useMutation({
    mutationFn: createClipApi,
    onSuccess: (clipId) => {
      toast.success('Clip successfully created');
      navigate(`/clip/${clipId}`, { replace: true });
    },
    onError: () => {
      toast.error('Clip could not be created');
    },
  });

  return { createClip, isCreating };
}
