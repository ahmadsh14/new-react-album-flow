import moment from "moment";
import { storageService } from "./storage.service";



export const AuthenticationService = {
    isLoggedIn: () => {
        try {
            const authTokens = storageService.getAuthKey();
            if (!authTokens) return false;
            const { expiry } = authTokens;
            if (moment().isAfter(expiry)) {
                AuthenticationService.logout();
                return false;
            }
            return true;
        } catch (e) {
            return undefined;
        }
    },
    logout: () => storageService.setAuthKey(undefined),
    getAuthToken: () => {
        if (AuthenticationService.isLoggedIn()) {
            const { value } = storageService.getAuthKey();
            return value.token;
        }
        return undefined;
    },
    getCurrentUser: () => {
        if (AuthenticationService.isLoggedIn()) {
            const { value } = storageService.getAuthKey();
            try {
                return value;
            } catch (e) {
                return undefined;
            }
        }
        return undefined;
    },
};