import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"  
import { i18n } from "../i18n"  
  
const ShortLinkDisplay: QuartzComponent = ({ cfg, fileData }: QuartzComponentProps) => {  
  const permalink = fileData.frontmatter?.permalink  
  const aliases = fileData.frontmatter?.aliases  
  const baseUrl = cfg.baseUrl  
    
  // Use permalink if available, otherwise use first alias  
  const shortPath = permalink || (aliases && aliases.length > 0 ? aliases[0] : null)  
    
  if (!shortPath || !baseUrl) {  
    return null  
  }  
    
  const shortLink = `https://${baseUrl}/${shortPath}`  
    
  return (  
    <div class="short-link-display">  
      <span class="short-link-label">{i18n(cfg.locale).components.shortLink.label}: </span>  
      <a href={`/${shortPath}`} class="internal">  
        {shortLink}  
      </a>  
    </div>  
  )  
}  
  
export default (() => ShortLinkDisplay) satisfies QuartzComponentConstructor
