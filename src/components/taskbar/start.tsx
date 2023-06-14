import React from 'react'
import { Button } from '../button'
import { useComputerState } from '../../lib/hooks/useComputerState'
import { APP_CONFIG } from '../Desktop/apps/downloads'

function Start() {

    const {
        id,
        history,
        name,
        icon,
        actions,
        extraAction,
        component,
        defaultWidth,
      } = APP_CONFIG;

      const {
        selectedApp,
        activeWindow,
        setSelectedApp,
        updateWindows,
        setActiveWindow,
      } = useComputerState();
    const handleClick = () => {
        updateWindows(APP_CONFIG, 'OPEN');
        setActiveWindow(APP_CONFIG);
    }
    return (
        <Button onClick={handleClick}>
            <img src={'/icons/apps/start.png'} className="w-[20px]" />
            <span className="ml-1 font-po text-sm font-bold tracking-[-1px]">
                Start
            </span>
        </Button>
    )
}

export default Start