import Head from 'next/head';
import buylop from '@iso/containers/buylop';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Buy LOP</title>
    </Head>
    <DashboardLayout>
      <buylop />
    </DashboardLayout>
  </>
));
