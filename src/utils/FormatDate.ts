import { format } from "@formkit/tempo";

export function CalPeriod(startDate: string, endDate: string | null) {
  const locale = "es";
  const formatToken = "MMMM YYYY";
  const initial = format(startDate, formatToken, locale);
  if (endDate) {
    const final = format(endDate, formatToken, locale);
    return `${initial} - ${final} `;
  } else return `${initial} - Presente `;
}
