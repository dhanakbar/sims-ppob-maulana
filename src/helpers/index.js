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
