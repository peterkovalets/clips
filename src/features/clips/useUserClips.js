import { useQuery } from '@tanstack/react-query';
import { useUser } from '../authentication/useUser';
import { getCurrentUserClips } from '../../services/apiClips';

export function useUserClips() {
  const { user } = useUser();

  const { data: clips, isLoading } = useQuery({
    queryKey: ['clips', user?.uid],
    queryFn: getCurrentUserClips,
    enabled: Boolean(user),
  });

  return { clips, isLoading };
}
