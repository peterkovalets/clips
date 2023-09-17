import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import SortBy from '../../ui/SortBy';

function ManageMenu() {
  const navigate = useNavigate();

  return (
    <Box>
      <div className="flex items-center justify-between">
        <Button onClick={() => navigate('/upload')}>Upload Videos</Button>
        <SortBy
          options={[
            { value: 'createdAt-desc', label: 'Recent Uploads' },
            { value: 'createdAt-asc', label: 'Oldest Uploads' },
          ]}
        />
      </div>
    </Box>
  );
}

export default ManageMenu;
