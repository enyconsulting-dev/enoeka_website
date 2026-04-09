import type { Metadata } from "next";
import { ContentHubClient } from "@/components/ContentHubClient";
import { Eyebrow, PinkRule, SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Content by Eno Eka | YouTube, Podcast, Masterclasses & Blog | enoeka.com",
  description:
    "All of Eno Eka's content in one place — YouTube videos, Fireside Chat podcast episodes, masterclasses, blog articles, and media features. Filter by topic.",
};

export default function ContentHubPage() {
  return (
    <main className="px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-content">
        <Eyebrow>Content Hub</Eyebrow>
        <SectionHeading>
          Everything Eno <em className="text-pink-deep not-italic">Creates.</em>
        </SectionHeading>
        <PinkRule />
        <p className="mt-4 max-w-2xl text-mid">
          Videos, podcasts, articles, masterclasses — all in one place. Filter by type and topic
          (sample data below; connect Sanity CMS or APIs for production).
        </p>
        <div className="mt-12">
          <ContentHubClient />
        </div>
      </div>
    </main>
  );
}
