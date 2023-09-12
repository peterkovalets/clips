import ReactPlayer from 'react-player';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Spinner from '../../ui/Spinner';
import Box from '../../ui/Box';
import { useClip } from './useClip';
import { formatDate } from '../../utils/helpers';

function ClipDetails() {
  const { clip, isLoading } = useClip();

  if (isLoading) return <Spinner />;

  const { name, userName, createdAt, clipUrl } = clip;
  const createdAtDate = new Date(createdAt.seconds * 1000);

  return (
    <section>
      <Container>
        <Box>
          <div className="flex flex-col gap-6">
            <div>
              <Heading tag="h2" className="mb-1">
                {name}
              </Heading>
              <span className="text-gray-400">
                Uploaded by {userName} on{' '}
                <time dateTime={createdAtDate.toISOString()}>
                  {formatDate(createdAtDate)}
                </time>
              </span>
            </div>
            <ReactPlayer url={clipUrl} width="100%" height="auto" controls />
          </div>
        </Box>
      </Container>
    </section>
  );
}

export default ClipDetails;
