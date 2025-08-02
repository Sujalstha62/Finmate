import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const Sidebar = ({ children, ...props }) => <aside {...props}>{children}</aside>;
export const SidebarContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const SidebarGroup = ({ children, ...props }) => <div {...props}>{children}</div>;
export const SidebarGroupContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const SidebarMenu = ({ children, ...props }) => <ul {...props}>{children}</ul>;
export const SidebarMenuButton = ({ children, asChild, ...props }) => {
  if (asChild) {
    return React.cloneElement(children, props);
  }
  return <button {...props}>{children}</button>;
};
export const SidebarMenuItem = ({ children, ...props }) => <li {...props}>{children}</li>;
export const SidebarHeader = ({ children, ...props }) => <header {...props}>{children}</header>;
export const SidebarTrigger = (props) => {
  const { setIsOpen } = useSidebar();
  return <button onClick={() => setIsOpen(o => !o)} {...props}>Trigger</button>;
};
