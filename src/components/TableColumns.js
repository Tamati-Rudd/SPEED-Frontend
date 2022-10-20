/**
 * Columns for the React Tables used on the moderator and search pages
 */
export const tableColumns = [
  {
    id: "title",
    label: "Title",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "author",
    label: "Authors",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "source",
    label: "Source",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "publication_year",
    label: "Publication Year",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "volume_number",
    label: "Volume Number",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "issue_number",
    label: "Issue Number",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "doi",
    label: "DOI",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "se_practice",
    label: "SE Practice",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "claimed_benefit",
    label: "Claimed Benefit",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export const moderatorTableColumns = [
  ...tableColumns,
  {
    id: "action",
    label: "Action",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export const analystTableColumns = [
  ...tableColumns,
  {
    id: "review",
    label: "Review",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
