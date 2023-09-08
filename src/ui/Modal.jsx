import { Dialog } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';

function Modal({ isOpen, onClose, title, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <Dialog.Panel className="relative w-full max-w-xl rounded-md bg-gray-700 px-8 py-6 shadow-lg">
          <button onClick={onClose} className="absolute right-8 top-6">
            <HiXMark className="h-6 w-6" />
          </button>

          {title && (
            <Dialog.Title className="mb-3 text-2xl font-bold tracking-wide">
              {title}
            </Dialog.Title>
          )}
          <div>{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
