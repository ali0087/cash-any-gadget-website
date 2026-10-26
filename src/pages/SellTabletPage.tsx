import DevicePage from '@/components/DevicePageTemplate';
import { TABLET_PAGE } from '@/lib/devicePages';
import { TABLET_FAQS } from '@/lib/content';

export default function SellTabletPage() {
  return <DevicePage content={{ ...TABLET_PAGE, faqs: TABLET_FAQS }} />;
}
