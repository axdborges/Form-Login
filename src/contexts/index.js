import { LoginProvider } from "./loginContext";
import { BotaoAddProvider } from "./addTechContext";

const Providers = ({children}) => {
    return (
        <LoginProvider>
            <BotaoAddProvider>
              {children}
            </BotaoAddProvider>
        </LoginProvider>
    )
}

export default Providers;