import { useNavigate } from 'react-router-dom';
import Box from '../../ui/Box';
import Button from '../../ui/Button';

function ManageMenu() {
  const navigate = useNavigate();

  return (
    <Box>
      <div className="flex items-center justify-between">
        <Button onClick={() => navigate('/upload')}>Upload Videos</Button>
      </div>
    </Box>
  );
}

export default ManageMenu;
