import { trackEvent } from "./utils";



export const formSubmission = (formType:string, formName:string, success: boolean) => {
    trackEvent(
        "Form", 
        "Submit", 
        success ? "Success" : "Error",
        success ? 1 : 0,
        { formType, formName }
    );
  };


export const contactFormSubmission = (success: boolean) => {
    formSubmission("Contact Form", "Contact Form", success)
  }



export const contactClick = (type:string, value:string) => {
    trackEvent("Contact", "Click", type, 1, { value });
  }


export default {
    formSubmission,
    contactFormSubmission,
    contactClick
}