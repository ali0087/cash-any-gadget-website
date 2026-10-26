export type ContactMethod = 'phone' | 'text';

export type DeviceCondition =
  | 'New / Sealed'
  | 'Like New'
  | 'Good'
  | 'Fair'
  | 'Broken / Damaged'
  | 'Not Working'
  | 'Other / Unsure';

export type TriState = 'Yes' | 'No' | 'Unsure' | 'Not Applicable';

export interface DeviceEntry {
  category: string;
  brand: string;
  model: string;
  modelYear: string;
  storage: string;
  condition: DeviceCondition | '';
  powersOn: TriState | '';
  unlocked: TriState | '';
  signedOut: TriState | '';
  details: string;
}

export interface QuoteRequestInput {
  full_name: string;
  phone: string;
  email: string | null;
  contact_method: ContactMethod;
  zip_code: string | null;
  devices: DeviceEntry[];
  photo_paths: string[];
  consent: boolean;
}

export type QuoteStatus =
  | 'new'
  | 'contacted'
  | 'offer_discussed'
  | 'accepted'
  | 'declined'
  | 'completed';

export interface QuoteRequestRecord {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  contact_method: ContactMethod;
  zip_code: string | null;
  devices: DeviceEntry[];
  photo_paths: string[];
  consent: boolean;
  notes: string | null;
  status: QuoteStatus;
  submitted_at: string;
}
