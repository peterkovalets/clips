import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import VideoSnapshot from 'video-snapshot';
import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useCreateClip } from './useCreateClip';

function UploadClipForm() {
  const { createClip, isCreating } = useCreateClip();
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    mode: 'onTouched',
  });
  const { errors, isValid } = formState;

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];

    if (file.name.slice(-4) !== '.mp4')
      return toast.error('The file should only be in the mp4 format!');

    setFile(file);
  }

  async function onSubmit(data) {
    const clip = { ...data, file };
    const snapshoter = new VideoSnapshot(file);
    const thumbnail = await snapshoter.takeSnapshot();

    createClip({ clip, thumbnail });
  }

  return (
    <Box>
      <Heading tag="h3" className="mb-5">
        Upload video
      </Heading>
      {file ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Title" error={errors?.name?.message}>
            <Input
              id="name"
              defaultValue={file.name}
              disabled={isCreating}
              {...register('name', {
                required: 'This field is required',
              })}
            />
          </FormRow>
          <div className="flex justify-end">
            <Button disabled={!isValid || isCreating}>Publish</Button>
          </div>
        </Form>
      ) : (
        <div
          className={`flex h-96 flex-col items-center justify-center rounded-md p-5 transition-colors duration-300 ${
            isDragOver
              ? 'bg-indigo-400'
              : 'border border-dashed border-gray-500 bg-transparent'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-xl">Drop your file here (mp4 only!)</p>
        </div>
      )}
    </Box>
  );
}

export default UploadClipForm;
