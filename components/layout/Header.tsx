
import React from 'react';
import HeaderClient from './HeaderClient';
import { getCmsRepository } from '@/data/cms/getCmsRepository';

export default async function Header() {
  const cmsRepository = await getCmsRepository();
  const siteSettings = await cmsRepository.getSiteSettings();
  const navigation = await cmsRepository.getNavigation();
  const services = await cmsRepository.getServices();

  return (
    <HeaderClient
      siteSettings={siteSettings}
      navigation={navigation}
      services={services}
    />
  );
}
