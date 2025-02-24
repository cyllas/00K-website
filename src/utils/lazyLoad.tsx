import { lazy, Suspense } from 'react';
import Loading from '../components/common/Loading';

export function lazyLoad(importFunc: () => Promise<{ default: React.ComponentType<any> }>) {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
