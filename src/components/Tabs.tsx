import React, { ReactNode } from 'react';

type TabProps = {
  label: string;
  children: ReactNode;
};

type TabsProps = {
  activeTab: string;
  children: React.ReactElement<TabProps>[];
};

const Tabs: React.FC<TabsProps> = ({ children, activeTab }) => {
  return (
    <div className="mx-auto max-w-prose">
      <div className="flex border-b border-gray-300">
        {children.map(child => (
          <div
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 border-b-black text-black' : 'border-b-0 bg-gray-100 text-gray-700'
            } flex-1 border-y-[1px] border-gray-300 font-medium py-2 first:border-l-[1px] last:border-r-[1px]`}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export { Tabs, Tab };
