import React, {useEffect} from "react";
import LanguageSelector from "./language_selector.jsx";
import GreetingText from "./greeting_text.jsx";
function Language() {
    const [language, setLanguage] = React.useState(["vi", "en"]);
    const [greeting, setGreeting] = React.useState("");
    const [newLanguageCode, setNewLanguageCode] = React.useState(null);
    useEffect(() => {
        const call_greeting = setTimeout(() => {
            if (newLanguageCode === "vi") {
                setGreeting("Xin chào");
            } else if (newLanguageCode === "en") {
                setGreeting("Hello");
            }
        }, 100);
        return () => {
            clearTimeout(call_greeting)
        }
    });
    return (
        <>
            <LanguageSelector language={language} setNewLanguageCode={setNewLanguageCode} />
            <GreetingText greeting={greeting} />
        </>
    )
}
export default Language;