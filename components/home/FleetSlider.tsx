
import React from 'react';
import FleetSliderClient from './FleetSliderClient';
import { cmsRepository } from '@/data/cms/repository';

export default async function FleetSlider() {
  const vessels = await cmsRepository.getFleetVessels();
  // Ensure exactly 3 slots
  return <FleetSliderClient vessels={vessels.slice(0, 3)} />;
}
