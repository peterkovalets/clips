import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineWrench } from 'react-icons/hi2';
import Heading from '../../ui/Heading';
import IconButton from '../../ui/IconButton';

function UserClipItem({ clip }) {
  const navigate = useNavigate();
  const { id, name, thumbnailUrl } = clip;

  function handleEditRedirect() {
    navigate(`/clip/${id}/edit`);
  }

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete ${name}?`))
      console.log(id);
  }

  return (
    <li>
      <article className="grid h-full grid-rows-[1fr_auto] overflow-hidden rounded-br-lg rounded-tl-lg bg-gray-700 shadow-md">
        <img src={thumbnailUrl} alt={name} className="w-full object-cover" />
        <div className="flex flex-col gap-2 p-6">
          <Heading tag="h3" className="mb-1">
            <Link to={`/clip/${id}`}>{name}</Link>
          </Heading>
          <footer className="mt-4 grid grid-cols-2 border-t pt-4">
            <IconButton onClick={handleEditRedirect}>
              <HiOutlineWrench />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <HiOutlineTrash />
            </IconButton>
          </footer>
        </div>
      </article>
    </li>
  );
}

export default UserClipItem;
