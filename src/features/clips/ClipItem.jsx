import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import { formatDate } from '../../utils/helpers';

function ClipItem({ clip }) {
  const createdAtDate = new Date(clip.createdAt.seconds * 1000);

  return (
    <li>
      <Link to={`/clip/${clip.id}`}>
        <article className="overflow-hidden rounded-br-lg rounded-tl-lg bg-gray-700 shadow-md transition-transform duration-300 hover:-translate-y-2">
          <img
            src={clip.thumbnailUrl}
            alt={clip.name}
            className="w-full object-cover"
          />
          <div className="p-6">
            <Heading tag="h3" className="mb-1">
              {clip.name}
            </Heading>
            <div className="flex gap-2">
              <span>{clip.userName}</span>
              <time
                dateTime={createdAtDate.toISOString()}
                className="text-gray-400"
              >
                {formatDate(createdAtDate)}
              </time>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default ClipItem;
