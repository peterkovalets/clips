import ManageMenu from '../features/clips/ManageMenu';
import UserClipsList from '../features/clips/UserClipsList';
import Container from '../ui/Container';

function Manage() {
  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col gap-12">
          <ManageMenu />
          <UserClipsList />
        </div>
      </Container>
    </div>
  );
}

export default Manage;
