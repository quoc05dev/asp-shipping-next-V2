
import React from 'react';
import HeaderClient from './HeaderClient';
import { cmsRepository } from '@/data/cms/repository';

export default async function Header() {
  const siteSettings = await cmsRepository.getSiteSettings();
  const navigation = await cmsRepository.getNavigation();
  const services = await cmsRepository.getServices();
  const fleetVessels = await cmsRepository.getFleetVessels();
  const latestNews = await cmsRepository.getLatestNews();

  return (
    <HeaderClient 
      siteSettings={siteSettings}
      navigation={navigation}
      services={services}
      fleetVessels={fleetVessels}
      latestNews={latestNews}
    />
  );
}
