import { Suspense } from 'react';
import DetailPageContent from './DetailPageContent';

export default function DetailPage() {
  return (
    <Suspense fallback={<div>Loading detail page...</div>}>
      <DetailPageContent />
    </Suspense>
  );
}
