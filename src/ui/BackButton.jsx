import { useMoveBack } from '../hooks/useMoveBack';
import Button from './Button';

function BackButton() {
  const moveBack = useMoveBack();

  return <Button onClick={moveBack}>&larr; Go back</Button>;
}

export default BackButton;
