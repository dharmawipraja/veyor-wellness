import { render, screen } from '@testing-library/react';
import { Tabs, Tab } from '../components/Tabs';

describe('Tabs Component', () => {
  const renderTabs = (activeTab: string) => {
    render(
      <Tabs activeTab={activeTab}>
        <Tab label="Tab 1">Content for Tab 1</Tab>
        <Tab label="Tab 2">Content for Tab 2</Tab>
        <Tab label="Tab 3">Content for Tab 3</Tab>
      </Tabs>
    );
  };

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Tabs activeTab={'Tab 2'}>
        <Tab label="Tab 1">Content for Tab 1</Tab>
        <Tab label="Tab 2">Content for Tab 2</Tab>
        <Tab label="Tab 3">Content for Tab 3</Tab>
      </Tabs>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all tabs', () => {
    renderTabs('Tab 1');

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('highlights the active tab', () => {
    renderTabs('Tab 2');

    const tab2 = screen.getByText('Tab 2');
    const tab1 = screen.getByText('Tab 1');
    const tab3 = screen.getByText('Tab 3');

    expect(tab1).toHaveClass('tab__item');
    expect(tab2).toHaveClass('tab__item is-active');
    expect(tab3).toHaveClass('tab__item');
  });

  it('displays the content of the active tab', () => {
    renderTabs('Tab 3');

    expect(screen.getByText('Content for Tab 3')).toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
  });

  it('does not display content for inactive tabs', () => {
    renderTabs('Tab 1');

    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 3')).not.toBeInTheDocument();
  });
});
