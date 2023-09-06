export function isActivePathName(pathname) {
  return window.location.pathname === pathname;
}

export function getCookie(cookieName) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.substring(cookieName.length + 1);
    }
  }

  return null;
}

export const formatRupiah = (amount) => {
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

  const lastThreeDigits = formattedAmount.substr(-6, 3);
  const formattedLastThreeDigits = lastThreeDigits.replace(/\./g, "");

  return formattedAmount.replace(lastThreeDigits, formattedLastThreeDigits);
};

export const toDateTime = (dateTime) => {
  const dateObject = new Date(dateTime);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const hours = dateObject.getUTCHours() + 7;
  const minutes = dateObject.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} WIB`;

  return {
    formattedDate,
    formattedTime,
  };
};

export const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace("_", "-")
    .replace(/\s+/g, "-")
    .replace(/_/g, "");
};
