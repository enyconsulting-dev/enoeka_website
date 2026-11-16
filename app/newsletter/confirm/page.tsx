import { NewsletterConfirmation } from "@/components/NewsletterConfirmation";

export default function NewsletterConfirmationPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-char">
        Confirm your newsletter subscription
      </h1>
      <p className="mt-4 text-mid">
        Select the button below to confirm that you want to receive email updates.
      </p>
      <NewsletterConfirmation />
    </main>
  );
}
