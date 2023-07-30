import ga4 from "analytics/ga4"

export const Contact = () => {

    const handleContactClick = (e: any) => {
        try {
          const [protocol, value] = e.currentTarget.href.split(':')
          ga4.events.click.contact(protocol, value)
        } catch (error) {
          // Do nothing
        }
      }

    return (
        <>
            <a href="tel:(774) 454-1621" onClick={(e) => handleContactClick(e)}
              className='text-light ' style={{textDecoration:'none'}}>
              <h4>(774)454-1621</h4>
            </a>
            <a href="mailto:donny@cordcuthelp.com" 
              className='text-light' style={{textDecoration:'none'}}>
              <h4>donny@cordcuthelp.com</h4>
            </a>
        </>
    )
}