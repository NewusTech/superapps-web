import Cookies from "js-cookie";

export default function useToken() {
    return Cookies.get("Authorization")
}