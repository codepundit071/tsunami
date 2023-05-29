import { createContext, useContext, useEffect, useState } from 'react';

interface GameStateContext {
  openWindows: IWindow[];
  updateWindows: (
    window: IWindow,
    action: 'OPEN' | 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE' | 'TASK_CLICK'
  ) => void;
  selectedApp: IWindow | undefined;
  setSelectedApp: (window: IWindow) => void;
  activeWindow: IWindow | undefined;
  setOpenWindows: (windows: IWindow[]) => void;
  setActiveWindow: (window: IWindow) => void;
  taskbarApps: IWindow[];
}

const ComputerStateContext = createContext<any>({});

export const useComputerState = () => {
  const {
    openWindows,
    updateWindows,
    selectedApp,
    setSelectedApp,
    activeWindow,
    setOpenWindows,
    setActiveWindow,
    taskbarApps,
  } = useContext<GameStateContext>(ComputerStateContext);

  return {
    openWindows,
    updateWindows,
    selectedApp,
    setSelectedApp,
    activeWindow,
    setActiveWindow,
    setOpenWindows,
    taskbarApps,
  };
};

export interface IAction {
  id: string;
  name: string;
  action: any;
}

export interface IWindow {
  id: string;
  history: [];
  name: string;
  icon: string;
  actions: 'ALL' | 'MIN' | 'EXIT';
  extraAction: IAction[];
  component: any;
  top?: any;
  defaultWidth: string;
  defaultHeight: string;
  state: 'DEFAULT' | 'MIN' | 'MAX' | 'HIDDEN';
  allowResize: any;
}

export const ComputerStateProvider = ({ children }: any) => {
  const [selectedApp, setSelectedApp] = useState<IWindow>();
  const [openWindows, setOpenWindows] = useState<IWindow[]>([]);
  const [activeWindow, setActiveWindow] = useState<IWindow>();
  const [taskbarApps, setTaskbarApps] = useState<IWindow[]>([]);

  const setNextActiveOrNone = (notThisWindow: IWindow) => {
    setActiveWindow(
      openWindows.filter(
        (w: IWindow) =>
          (w.state === 'DEFAULT' || w.state === 'MAX') &&
          w.id !== notThisWindow.id
      )?.[0]
    );
  };

  const taskbarHandle = (window: IWindow, removing: boolean) => {
    const existing = taskbarApps?.filter(
      (_w: IWindow) => _w.id === window.id
    )?.[0];
    if (removing) {
      setTaskbarApps(taskbarApps?.filter((_w: IWindow) => _w.id !== window.id));
    } else {
      if (!existing) {
        setTaskbarApps([...(taskbarApps || []), window]);
      }
    }
  };

  const updateWindows = (
    window: IWindow,
    action: 'OPEN' | 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE' | 'TASK_CLICK'
  ) => {
    if (action === 'OPEN') {
      const existing = openWindows.filter(
        (_w: IWindow) => _w.id === window.id
      )?.[0];
      if (existing) {
        const newWindow: IWindow = {
          ...existing,
          state: 'DEFAULT',
        };
        setActiveWindow(newWindow);
        taskbarHandle(newWindow, false);
        setOpenWindows(
          openWindows.map((_w: IWindow) => {
            if (_w?.id === window?.id) return newWindow;
            else {
              return _w;
            }
          })
        );
      } else {
        setOpenWindows([...openWindows, { ...window, state: 'DEFAULT' }]);
      }
    }

    if (action === 'MAXIMIZE') {
      const existing = openWindows.filter(
        (_w: IWindow) => _w.id === window.id
      )?.[0];
      if (existing?.state === 'MAX') {
        setOpenWindows(
          openWindows.map((_w: IWindow) => {
            if (_w?.id === window?.id)
              return {
                ...window,
                state: 'DEFAULT',
              };
            else {
              return _w;
            }
          })
        );
      } else {
        setOpenWindows(
          openWindows.map((_w: IWindow) => {
            if (_w?.id === window?.id)
              return {
                ...window,
                state: 'MAX',
              };
            else {
              return _w;
            }
          })
        );
      }
    }

    if (action === 'MINIMIZE') {
      const existing = openWindows.filter(
        (_w: IWindow) => _w.id === window.id
      )?.[0];

      setOpenWindows(
        openWindows.map((_w: IWindow) => {
          if (_w?.id === window?.id)
            return {
              ...window,
              state: 'MIN',
            };
          else {
            return _w;
          }
        })
      );
      setNextActiveOrNone(existing);
    }

    if (action === 'TASK_CLICK') {
      const existing = openWindows.filter(
        (_w: IWindow) => _w.id === window.id
      )?.[0];

      if (existing?.state === 'MIN') {
        setOpenWindows(
          openWindows.map((_w: IWindow) => {
            if (_w?.id === window?.id)
              return {
                ...window,
                state: 'DEFAULT',
              };
            else {
              return _w;
            }
          })
        );
        setActiveWindow(existing);
      } else {
        setOpenWindows(
          openWindows.map((_w: IWindow) => {
            if (_w?.id === window?.id)
              return {
                ...window,
                state: 'MIN',
              };
            else {
              return _w;
            }
          })
        );
        setNextActiveOrNone(existing);
      }
    }

    if (action === 'CLOSE') {
      setOpenWindows(
        openWindows.map((_w: IWindow) => {
          if (_w?.id === window?.id)
            return {
              ...window,
              state: 'HIDDEN',
            };
          else {
            return _w;
          }
        })
      );
      taskbarHandle(window, true);

      setNextActiveOrNone(window);
    }
  };

  return (
    <ComputerStateContext.Provider
      value={{
        selectedApp,
        updateWindows,
        openWindows,
        setOpenWindows,
        setSelectedApp,
        activeWindow,
        setActiveWindow,
        taskbarApps,
      }}
    >
      {children}
    </ComputerStateContext.Provider>
  );
};
