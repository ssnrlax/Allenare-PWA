import React from 'react';
import Header from './components/dashboard/Header';
import StatsSection from './components/dashboard/StatsSection';
import RecentWorkouts from './components/dashboard/RecentWorkouts';
import RouteMap from './components/dashboard/RouteMap';
import Sidebar from './components/dashboard/Sidebar';
import './App.css';

export default function App() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Header />
        <div className="stats-grid">
          <StatsSection title="Días de entrenamiento" content="workouts" />
          <StatsSection title="Total de km recorridos" content="distance" />
          <StatsSection title="Metas" content="goals" />
        </div>
        <div className="bottom-sections">
          <RecentWorkouts />
          <RouteMap />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}