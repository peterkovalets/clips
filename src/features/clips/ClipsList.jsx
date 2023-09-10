import Spinner from '../../ui/Spinner';
import ClipItem from './ClipItem';
import { useClips } from './useClips';

function ClipsList() {
  const { clips, isLoading } = useClips();

  if (isLoading) return <Spinner />;

  return (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
      {clips.map((clip) => (
        <ClipItem clip={clip} key={clip.id} />
      ))}
    </ul>
  );
}

export default ClipsList;
