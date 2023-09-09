import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

function Tabs({ tabs }) {
  return (
    <Tab.Group>
      <Tab.List className={`grid grid-cols-${tabs.length} justify-between`}>
        {tabs.map((tab) => (
          <Tab as={Fragment} key={tab.label}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? 'cursor-not-allowed bg-indigo-400'
                    : 'bg-transparent transition-colors duration-300 hover:text-indigo-400'
                } rounded-sm px-3 py-2`}
              >
                {tab.label}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-3">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.label}>{tab.element}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
