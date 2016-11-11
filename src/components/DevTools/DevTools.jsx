import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';
import DiffMonitor from 'redux-devtools-diff-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'>
        <Inspector theme='harmonic'/>
        <LogMonitor theme='apathy'/>
        <DiffMonitor theme='apathy'/>
        <ChartMonitor theme='apathy'/>
    </DockMonitor>
);
