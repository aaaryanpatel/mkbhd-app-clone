
export interface Wallpaper {
    url: string;
    name: string;

}
export function useWallpapers(): Wallpaper[] { // : Wallpaper[] is just functions return type
    // "This function will return an array ([]) of Wallpaper objects."
    return [{
        url: "https://ideogram.ai/assets/image/lossless/response/gO803CSxQfuxQsXIvauIKQ",
        "name": "heritage"

    }, {
            url: "https://ideogram.ai/assets/progressive-image/balanced/response/yp0mwZKYTcydHmi-Vjz2ZQ",
            "name": "joker"
            
    },{
        url: "https://ideogram.ai/assets/image/lossless/response/IlQA9wtKTva-oEliDnb9KQ",
        "name": "motivation"

    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/MDQz7hRYRbWdNPpFHyputg",
        "name": "watch"

    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/6QedRlQZQDyVQzNwyAPByQ",
        "name": "tiger"

    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/6QedRlQZQDyVQzNwyAPByQ",
        "name": "tiger"

    },  


   

]
        

}
// notes 
// export makes this interface to other files. with out it you cannot import it elsewhere

// interface wallpaper {...}
// interface is a typescript feautre. it defunes the shape or structure of an object
// "A Wallpaper object must always have two properties: url and name." 
/*
url: string;
→ url must be a string (like "https://...").
name: string;
→ name must also be a string (like "heritage").
*/


//