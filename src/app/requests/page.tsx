'use client';
import React from 'react';
import { RequestsPageComponent } from '@/components/requests-page';

function Page() { // Consider changing `page` to `Page` to follow convention
  return (
    <div className='p-36'>
      <RequestsPageComponent />
    </div>
  );
}

export default Page; // Also ensure it's exported correctly
