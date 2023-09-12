import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getClip } from '../../services/apiClips';

export function useClip() {
  const { clipId } = useParams();

  const {
    data: clip,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['clip', clipId],
    queryFn: () => getClip(clipId),
    retry: false,
  });

  return { clip, isLoading, error };
}
