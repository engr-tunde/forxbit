export const fetchUserIPAddress = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    if (!res.ok) {
      return false;
    }
    const response = await res.json();
    console.log("response", response);
    const ipAddress = response.ip;
    return ipAddress;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};
