import DevicePage from '@/components/DevicePageTemplate';
import { MACBOOK_PAGE } from '@/lib/devicePages';
import { MACBOOK_FAQS } from '@/lib/content';

export default function SellMacbookPage() {
  return <DevicePage content={{ ...MACBOOK_PAGE, faqs: MACBOOK_FAQS }} />;
}
