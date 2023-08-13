import track from "../track"



export const click = (category:string,  type: string, value: string) => 
    track.event(`${category}.click`, 'click', type, 1, { clickType:type, clickValue: value })


const contact = (type:string, value: string) => click('contact', type, value)
contact.email = (value: string) => click('contact', 'email', value)
contact.phone = (value: string) => click('contact', 'phone', value)

click.contact = contact


const navigation = (type:string, value: string) => click('navigation', type, value)
navigation.menu = (value: string) => click('navigation', 'menu', value)
navigation.footer = (value: string) => click('navigation', 'footer', value)

click.navigation = navigation



export default click