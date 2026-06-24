import type { Metadata } from "next";
import { DonationReceived } from "@/components/donation-received";

export const metadata: Metadata = {
  title: "Donation Process Received",
  description:
    "Thank you for supporting H.E.R Global Circle. Payment confirmation is processed by the donation platform.",
  robots: { index: false, follow: false },
};

export default function GeneralDonationReceivedPage() {
  return <DonationReceived />;
}
