import Spinner from '../../ui/Spinner';
import UserClipItem from './UserClipItem';
import { useUserClips } from './useUserClips';

function UserClipsList() {
  const { clips, isLoading } = useUserClips();

  if (isLoading) return <Spinner />;

  return (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
      {clips.map((clip) => (
        <UserClipItem clip={clip} key={clip.id} />
      ))}
    </ul>
  );
}

export default UserClipsList;
