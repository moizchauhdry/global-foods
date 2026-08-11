import { GlobalPresence } from "@/src/components/home/GlobalPresence";
import { PageHero } from "@/src/components/shared/PageHero";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Global Presence",
  description:
    "Explore editable international market regions for Umme Yusra Global Foods export conversations.",
  path: "/global-presence",
});

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title="From Pakistan to the World"
        description="Market markers and country lists are editable placeholders and should not be treated as confirmed export destinations until verified."
        image={images.port}
      />
      <GlobalPresence showIntro={false} />
    </>
  );
}
