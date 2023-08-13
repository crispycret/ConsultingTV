import ga4 from "analytics/ga4"
import Spacing from "components/layouts/Spacing"
import useMobile from "utils/common/hooks/useMobile"

export const Contact = () => {

  const { mobile } = useMobile()

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
            {mobile && <Spacing size={4} />}

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