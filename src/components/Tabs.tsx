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
      <div className="tab">
        {children.map((child) => {
          const isActiveStyle =
            activeTab === child.props.label
              ? 'tab__item is-active'
              : 'tab__item';

          return (
            <div key={child.props.label} className={`sm:w-48 ${isActiveStyle}`}>
              {child.props.label}
            </div>
          );
        })}
      </div>
      <div className="py-4">
        {children.map((child) => {
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
  return <>{children}</>;
};

export { Tabs, Tab };
