import React from 'react';
import classes from './PostContent.module.scss'

function PostContent({ post }) {
  // console.log(post)
  return (
    <div className={classes.post}>
    <img className={classes['post-image']} src={post[0]?.image} alt={post[0]?.title } />
    <p className={classes['post-title']}>{post[0]?.title}</p>
      <p className={classes['post-catergory']}>
        <span>{ post[0]?.category}</span> - 
        <span>{ post[0]?.date}</span>
      </p>
    
      <div className={classes['post-content']}>
        <div>

    Organic farming is a method of agriculture that avoids the use of synthetic fertilizers, pesticides, and other harmful chemicals. Instead, it relies on natural methods of pest control and soil management, such as crop rotation, cover crops, and composting. Organic farming has gained popularity in recent years due to concerns about the impact of conventional agriculture on the environment, human health, and animal welfare. In this blog post, we'll explore how organic farming can help save the planet and why it's important to support this sustainable method of agriculture.
        </div>

        <h3>

Reducing Environmental Impact
        </h3>
        <div>

One of the main benefits of organic farming is its reduced environmental impact. Conventional agriculture relies heavily on synthetic fertilizers, pesticides, and herbicides, which can have harmful effects on soil health, water quality, and biodiversity. Organic farming, on the other hand, focuses on building healthy soil ecosystems that can support diverse plant and animal life. By avoiding synthetic chemicals and prioritizing soil health, organic farming can reduce greenhouse gas emissions, promote biodiversity, and protect natural resources such as water and air.
        </div>

        <h3>

Supporting Local Economies
        </h3>
        <div>

In addition to its environmental benefits, organic farming can also support local economies by promoting sustainable agriculture practices and creating jobs in rural communities. Organic farms tend to be smaller and more diverse than conventional farms, which can provide opportunities for local farmers to grow a wide range of crops and sell them directly to consumers. This can help to build a more resilient and sustainable food system, reduce food waste, and support local economies.
        </div>
        <h3>
          
Promoting Health and Wellness
        </h3>
        <div>

Organic farming also promotes health and wellness by providing consumers with access to fresh, healthy food that's free of harmful chemicals and synthetic additives. Research has shown that organic produce may contain higher levels of certain nutrients, such as antioxidants and vitamin C, than conventionally grown produce. Additionally, by avoiding the use of synthetic pesticides and herbicides, organic farming can reduce exposure to harmful chemicals that have been linked to a range of health problems, including cancer, neurotoxicity, and reproductive disorders.
        </div>
        <h3>
          
Challenges and Opportunities
        </h3>
        
        <div>

While organic farming has many benefits, it also faces a number of challenges and opportunities. One of the biggest challenges is the higher cost of organic produce compared to conventionally grown produce. This can make it difficult for some consumers to afford organic food, especially in areas where access to healthy food is limited. Additionally, organic farming requires more labor and management than conventional farming, which can make it challenging for farmers to transition to this method.
        </div>
        <div>
          
Despite these challenges, organic farming presents many opportunities for farmers, consumers, and the planet. By supporting organic agriculture through our food choices and advocacy efforts, we can help to build a more sustainable and equitable food system that promotes health, wellness, and environmental stewardship.
</div>
    </div>
  </div>
  );
}

export default PostContent;
