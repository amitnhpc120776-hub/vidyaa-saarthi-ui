export const explanations = {
  passageId: "Accounting Ratios",

  explanationsByProfile: {
    student_1: {
      "adapted*explanation": [
        "The **current ratio** shows the link between **current assets** and **current liabilities**. It helps us know if a business can pay its **short-term dues**. Think: **money available vs money to pay**. Why is this comparison needed?",
        "The **formula** is easy to remember. **Current Ratio = Current Assets ÷ Current Liabilities**. We **divide assets by liabilities**. Repeat this idea again: assets divided by liabilities. Like checking how much cash you have for bills.",
        "**Current assets** are things that become **cash soon**. These include **inventories**, **trade receivables**, **cash**, **advance tax**, and similar items. Assets mean **what the business has**. Like items kept in a wallet. Why are they short-term?",
        "**Current liabilities** are amounts to be **paid soon**. These include **trade payables** and **short-term borrowings**. Liabilities mean **what the business owes**. Like borrowed money. Why must they be paid quickly?",
        "To use the ratio, first **list current assets**. Next, **list current liabilities**. Then apply the **same formula**. Step-by-step makes it simple. Like sorting coins before counting. Why does grouping help?",
      ],
      rich_content: {
        equations: [
          {
            label: "Current Ratio",
            latex:
              "$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$",
          },
        ],
        tables: [
          {
            title: "Given Items for Current Ratio",
            headers: ["Particulars", "Amount (Rs.)"],
            rows: [
              ["Inventories", "50,000"],
              ["Trade receivables", "50,000"],
              ["Advance tax", "4,000"],
              ["Cash and cash equivalents", "30,000"],
              ["Trade payables", "1,00,000"],
              ["Short-term borrowings", "4,000"],
            ],
          },
        ],
      },
      key_points: [
        "Current ratio shows short-term strength",
        "Assets mean what business has",
        "Liabilities mean what business owes",
        "Formula uses division",
      ],
      quick_check: [
        {
          question: "What does the current ratio measure?",
          answer: "It measures ability to pay short-term liabilities.",
        },
        {
          question: "Which formula is used for current ratio?",
          answer: "Current Assets divided by Current Liabilities.",
        },
      ],
    },

    student_2: {
      "adapted*explanation": [
        "The current ratio shows the relationship between current assets and current liabilities. It tells us how well a business can meet its short-term obligations using its short-term resources.",
        "The formula of current ratio is: Current Ratio = Current Assets divided by Current Liabilities. In symbols, it is written as $\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$.",
        "Current assets are items that are expected to be used or converted into cash within a short period. These include inventories, trade receivables such as debtors and bills receivable, cash and cash equivalents, current investments, short-term loans and advances, prepaid expenses, advance tax, and accrued income.",
        "Current liabilities are obligations that must be paid in the near future. These include trade payables like creditors and bills payable, short-term borrowings, other current liabilities, and short-term provisions.",
      ],
      rich_content: {
        equations: [
          {
            label: "Current Ratio",
            latex:
              "$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$",
          },
        ],
        tables: [
          {
            title: "Items for Calculating Current Ratio",
            headers: ["Particulars", "Amount (Rs.)"],
            rows: [
              ["Inventories", "50,000"],
              ["Trade receivables", "50,000"],
              ["Advance tax", "4,000"],
              ["Cash and cash equivalents", "30,000"],
              ["Trade payables", "1,00,000"],
              ["Short-term borrowings", "4,000"],
            ],
          },
        ],
      },
      key_points: [
        "Current ratio compares current assets with current liabilities.",
        "It helps in understanding the short-term financial position of a business.",
        "Current assets are short-term resources, while current liabilities are short-term obligations.",
      ],
      quick_check: [
        {
          question: "What does the current ratio compare?",
          answer: "It compares current assets with current liabilities.",
        },
      ],
    },
  },
};
