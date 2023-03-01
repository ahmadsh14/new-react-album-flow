import axios from "axios"
import { storageService } from "../../../services/storage.service"

export const AuthService = {
    login: async email => {
        const result = await axios.get('users');
        const verifiedUser = result.data.find(el => el.email === email);

        if (verifiedUser) {
            storageService.setAuthKey(verifiedUser)
            return verifiedUser;
        }
        return false;
    }


}