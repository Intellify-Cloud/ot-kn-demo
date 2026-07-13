import { watch } from "vue";
import { useRoute } from "vue-router";
import { siteText } from "../content/siteText";

const pageMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: siteText.meta.title,
    description: siteText.meta.description,
  },
  portfolio: {
    title: `${siteText.pages.portfolio.title} | Kerriska Naidu`,
    description: siteText.pages.portfolio.body,
  },
  contact: {
    title: `${siteText.pages.contact.title} | Kerriska Naidu`,
    description: siteText.pages.contact.body,
  },
  privacy: {
    title: `${siteText.pages.privacy.title} | Kerriska Naidu`,
    description: siteText.pages.privacy.body,
  },
};

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function useSeoHead() {
  const route = useRoute();

  watch(
    () => route.name,
    (name) => {
      const meta = pageMeta[String(name)] ?? pageMeta.home;
      document.title = meta.title;
      setMetaDescription(meta.description);
    },
    { immediate: true }
  );
}
