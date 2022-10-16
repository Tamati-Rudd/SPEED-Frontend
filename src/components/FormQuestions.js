/**
 * The below JSON data is used to build the form questions used for article information input
 */

export const FormQuestions = [
    {
        field: "title",
        label: "Title: ",
        type: "text",
        placeholder: "Enter article title",
        analystOnly: false,
        disabled: false,
        required: true,
        input: ""  
    }, 
    {
        field: "author",
        label: "Author(s): ",
        type: "text",
        placeholder: "Enter article author(s)",
        analystOnly: false,
        disabled: false,
        required: true,
        input: ""
    }, 
    {
        field: "source",
        label: "Article Source: ",
        type: "text",
        placeholder: "Enter article source",
        analystOnly: false,
        disabled: false,
        required: true,
        input: ""
    },
    {
        field: "publication_year",
        label: "Publication Year: ",
        type: "number",
        placeholder: "Enter publication year",
        analystOnly: false,
        disabled: false,
        required: true,
        input: ""
    },
    {
        field: "volume_number",
        label: "Volume Number: ",
        type: "number",
        placeholder: "Enter volume number",
        analystOnly: false,
        disabled: false,
        required: false,
        input: ""
    },
    {
        field: "issue_number",
        label: "Issue Number: ",
        type: "number",
        placeholder: "Enter issue number",
        analystOnly: false,
        disabled: false,
        required: false,
        input: ""
    },
    {
        field: "doi",
        label: "Digital Object Identifer (DOI): ",
        type: "text",
        placeholder: "Enter DOI",
        analystOnly: false,
        disabled: false,
        required: false,
        input: ""
    }, 
    {
        field: "se_practice",
        label: "Software Engineering (SE) Practice: ",
        type: "text",
        placeholder: "Enter SE practice",
        analystOnly: true,
        disabled: false,
        required: false,
        input: ""
    },
    {
        field: "claimed_benefit",
        label: "Benefit Claim: ",
        type: "text",
        placeholder: "Enter benefit claim",
        analystOnly: true,
        disabled: false,
        required: false,
        input: ""
    },
    {
        field: "level_of_evidence",
        label: "Level of Evidence: ",
        type: "text",
        placeholder: "Enter evidence level",
        analystOnly: true,
        disabled: false,
        required: false,
        input: ""
    }
]