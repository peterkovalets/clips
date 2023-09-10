import { useQuery } from '@tanstack/react-query';
import { getClips } from '../../services/apiClips';

export function useClips() {
  const { data: clips, isLoading } = useQuery({
    queryKey: ['clips'],
    queryFn: getClips,
  });

  return { clips, isLoading };
}
