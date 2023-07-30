import Detail from "components/Content/Detail"


export const WhyChooseUs = () => {
    return (
        <Detail 
            title='Why Choose Us?'
            descriptions={[
                ['Customized Solutions: ', 'Our consultation is tailored to your unique viewing habits, ensuring you only pay for what you use.'],
                ['Expert Guidance: ', 'Our team of internet experts is here to assist you in setting up your new plan hassle-free.'],
                ['Save Time & Effort: ', 'No more researching and comparing endless internet plans; we do the work for you!'],
                ['Money-Back Guarantee: ', "If you're not satisfied with our recommendations, we offer a 100% money-back guarantee."]
            ]}
        />
    )
}
export const HowItWorks = () => {
    return (
        <Detail 
            title='How it Works:' 
            descriptions={[
                ['Tell Us What You Watch:', 'Share your favorite streaming services, TV shows, movies, and online activities.'],
                ['Receive Personalized Recommendations:', 'Our advanced algorithm matches your preferences with the most suitable internet providers in your area.'],
                ['Save Money and Enjoy Seamless Streaming:', 'Get a cost-effective plan that enhances your viewing experience without breaking the bank.']
            ]}
        /> 
    )
}

