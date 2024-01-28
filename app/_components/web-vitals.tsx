'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { id, name, value, rating, delta, navigationType } = metric;
    console.log(id, name, value, rating, delta, navigationType);
  });
  return <></>;
}
