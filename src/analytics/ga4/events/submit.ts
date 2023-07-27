import track from "../track"


export const submit = (category:string, label:string, success:boolean, custom?: any) =>
    track.event(`${category}.submit`, 'submit', label, success ? 1 : 0, custom)


const forms = (formName:string, formType:string, success: boolean,  custom?: any) => 
submit('form', formName, success, {formType, ...custom})

forms.contact = (success: boolean, custom?: any) => forms('Contact Form', 'contact', success, custom)


const hubspot = (formName: string, formType: string, formId:string, success: boolean, custom?: any) => 
forms(formName, formType, success, { vendor:'hubspot', vendorFormId:formId, ...custom})

hubspot.contact = (formName: string, formId:string, success: boolean, custom?: any) =>
hubspot(formName, 'contact', formId, success, custom)

forms.hubspot = hubspot

submit.forms = forms



export default submit