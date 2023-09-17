import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { useUser } from '../authentication/useUser';
import { getCurrentUserClips } from '../../services/apiClips';

export function useUserClips() {
  const { user } = useUser();
  const [searchParams] = useSearchParams();

  const sortByRaw = searchParams.get('sortBy') || 'createdAt-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const { data: clips, isLoading } = useQuery({
    queryKey: ['clips', user?.uid, sortBy],
    queryFn: () => getCurrentUserClips({ sortBy }),
    enabled: Boolean(user),
  });

  return { clips, isLoading };
}
