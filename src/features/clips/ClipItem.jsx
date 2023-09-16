import { Link } from 'react-router-dom';
import Heading from '../../ui/Heading';
import { formatDate } from '../../utils/helpers';

function ClipItem({ clip }) {
  const { id, name, thumbnailUrl, userName } = clip;
  const createdAtDate = new Date(clip.createdAt.seconds * 1000);

  return (
    <li>
      <Link to={`/clip/${id}`}>
        <article className="grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-br-lg rounded-tl-lg bg-gray-700 shadow-md transition-transform duration-300 hover:-translate-y-2">
          <img src={thumbnailUrl} alt={name} className="w-full object-cover" />
          <div className="flex flex-col gap-2 p-6">
            <Heading tag="h3" className="mb-1">
              {name}
            </Heading>
            <footer className="flex gap-2">
              <span>{userName}</span>
              <time
                dateTime={createdAtDate.toISOString()}
                className="text-gray-400"
              >
                {formatDate(createdAtDate)}
              </time>
            </footer>
          </div>
        </article>
      </Link>
    </li>
  );
}

export default ClipItem;
