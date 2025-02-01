export const formatDate = (dateString: string, longFormat: boolean = false): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    year: "numeric", 
    month: longFormat ? "long" : "short",
  };

  return date.toLocaleDateString("id-ID", options);
};
