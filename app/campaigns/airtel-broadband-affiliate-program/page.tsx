import type { Metadata } from 'next';
import AirtelBroadbandContent from './_components/AirtelBroadbandContent';

export const metadata: Metadata = {
  title: 'Airtel Broadband Affiliate Program | CloudLinks',
  description: "Join the Airtel Broadband affiliate program and earn ₹200 commission promoting Telecom & Internet Services.",
};

export default function Page() {
  return <AirtelBroadbandContent />;
}
