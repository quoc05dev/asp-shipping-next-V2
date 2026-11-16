
import React from 'react';
import FleetSliderClient from './FleetSliderClient';
import { getCmsRepository } from '@/data/cms/getCmsRepository';

export default async function FleetSlider() {
  const cmsRepository = await getCmsRepository();
  const vessels = await cmsRepository.getFleetVessels();
  // Ensure exactly 3 slots
  return <FleetSliderClient vessels={vessels.slice(0, 3)} />;
}
