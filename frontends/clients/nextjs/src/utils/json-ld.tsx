

/**
 * Loads a JSON-LD file from the assets/data/seo folder.
 * @param path - The path to the JSON-LD file, relative to the assets/data/seo folder.
 * @returns The JSON-LD data.
 */
export const load = (path: string) => {
    
    let jsonLd;

    try {
        jsonLd = require('@/assets/data/seo/' + path);
    } catch (error) {
        console.warn('Error loading JSON-LD file used for SEO: @/assets/data/seo/' + path + '. Falling back to the example JSON-LD data.', error);
        jsonLd = examples.global; // Use the example JSON-LD data as a fallback
    }
    return jsonLd
}


export const loadGlobalJsonLd = () => load('global/json-ld.json')




export const examples = {
    global: {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "My Organization",
        "description": "We provide solutions for your needs.",
        "url": "https://www.example.com",
        "logo": "https://www.example.com/logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "contactType": "customer support"
          }
        ],
        "author": {
          "@type": "Person",
          "name": "Your Name",
        },
    },
    review: (seoScore: number) => { 
        return {
            "@context": "https://schema.org/",
            "@type": "Review",
            "itemReviewed": {
            "@type": "Thing",
            "name": "Your Website or Page Name",
            },
            "reviewRating": {
            "@type": "Rating",
            "ratingValue": seoScore,
            },
            "author": {
            "@type": "Person",
            "name": "Your Name",
            },
        }
    }
}


export default {
    load,
    global: loadGlobalJsonLd(),
    examples
}