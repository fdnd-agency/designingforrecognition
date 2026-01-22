# Data Model

This document describes the data model used in the project. The model is visualized using a Mermaid diagram to clearly show the structure of the data and the relationships between entities.

[![](https://mermaid.ink/img/pako:eNqNUsFqwzAM_RWjc1qSukkT30YXGIOxke00AsHUWpptsYvqwLa0_744TdsUNqgOwnrv6UlgtbAyCkEA0m0lS5J1rlkXWfqc3mTLuzRju91kYlr2lD3ep8uXYsQIVhzUA3eNdIS1B8RFpS2rFDsDW0uVLhnhFiWt1kiFljUOgv3l1Ct8NmTecWXHJi6UtHjiXPGXf_H_ysfWi5GOGO1dqcEUPCipUiAsNehBjVRLV0JvmoNdY405iO6pJH3kkGvXs5H61Zj62EamKdcg3uTntquajdt6-LkTSqgV0tI02oIIot4DRAtfIDj3p3Ew8_0kCbrEFx37DSKMpjyex7PADxMexxEP9x789GM7_TwJ5wseJFESz3iw8ABVZQ09HC6nP6D9L0Ewq6A?type=png)](https://mermaid.live/edit#pako:eNqNUsFqwzAM_RWjc1qSukkT30YXGIOxke00AsHUWpptsYvqwLa0_744TdsUNqgOwnrv6UlgtbAyCkEA0m0lS5J1rlkXWfqc3mTLuzRju91kYlr2lD3ep8uXYsQIVhzUA3eNdIS1B8RFpS2rFDsDW0uVLhnhFiWt1kiFljUOgv3l1Ct8NmTecWXHJi6UtHjiXPGXf_H_ysfWi5GOGO1dqcEUPCipUiAsNehBjVRLV0JvmoNdY405iO6pJH3kkGvXs5H61Zj62EamKdcg3uTntquajdt6-LkTSqgV0tI02oIIot4DRAtfIDj3p3Ew8_0kCbrEFx37DSKMpjyex7PADxMexxEP9x789GM7_TwJ5wseJFESz3iw8ABVZQ09HC6nP6D9L0Ewq6A)

### Directus CMS Collections

The project uses Directus as the content management system (CMS). The following collections are part of the data model:

- **dfr_projects**  
  Stores all project-related data that is rendered on the homepage and on individual project detail pages.

- **dfr_researchers**  
  This collection exists in the CMS but is currently not in use. The client decided not to display researcher-related data on the website.

- **dfr_sponsors**  
  Contains sponsor data such as the sponsor name and logo, which are displayed in the website footer.
