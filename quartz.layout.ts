import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Телеграм": "https://t.me/vidpovidi_nure",
      GitHub: "https://github.com/m-arkusz/vidpovidi-nure",
      "Сховище Obsidian": "https://github.com/m-arkusz/vidpovidi-nure-vault",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
    Component.ShortLinkDisplay(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        {
          Component: Component.Search(),
          grow: true,
        },
        // { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({  
      sortFn: (a, b) => {  
        // Use slugSegment for actual file/folder name from file system  
        return a.slugSegment.localeCompare(b.slugSegment, undefined, {  
          numeric: true,  
          sensitivity: "base",  
        })  
      }  
    })
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer({  
      sortFn: (a, b) => {  
        // Use slugSegment for actual file/folder name from file system  
        return a.slugSegment.localeCompare(b.slugSegment, undefined, {  
          numeric: true,  
          sensitivity: "base",  
        })  
      }  
    })
  ],
  right: [],
}
