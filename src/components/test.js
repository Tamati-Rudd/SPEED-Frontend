/**
 * Define the table columns used in the tables
 */
export const TableColumns = [
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
    minWidth: 170,
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
    minWidth: 100,
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
    minWidth: 170,
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
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

/**
 * Moderator page specific settings
 */
export const moderatorTableColumns = [
  ...TableColumns,
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

/**
 * Analyst page specific settings
 */
export const analystTableColumns = [
  ...TableColumns,
  {
    id: "review",
    label: "Review",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];
