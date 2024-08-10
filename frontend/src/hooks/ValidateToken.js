export const validateToken = async () =>  {
    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
    try {
        const response = await fetch(`${VITE_API_BASE_URL}/api/auth/validate-token`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            console.log(response.message);
            return true;
        } else {
            console.log(response.message);
            return false;
        }
    }
    catch (error) {
        console.log("Network error. Please try again later.");
        return false;
    }
}