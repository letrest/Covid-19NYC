### Answers to questions
#### Question 1:
Hi George,

I'll go through your questions one by one

> Records

A record is an object that you want to be able to search for. A record will have a unique objectID (which can be generated automatically for you or you can add one yourself) and any other number of attributes

> Indexing

An index is where the data (the collection of records in which you want to perform the search) is stored
Indexing is the action of creating that index in a way that it can be searched on

> Understanding what types of metrics would be useful to include in the "Custom Ranking."

What may be useful to your specific use case will depend on the type of data you have available and the relevance of that data to your search ranking.
Some examples are 
* if you have a popularity attribute for each record, you may want to show the more popular items first
* show items with high numbers of complaints last
* you may want to show a more recent entry in a blog ahead of one from 5 years ago.

By default, Algolia will use an algorithm that uses the following criteria, in order: 
* Number of typos
* Geolocation
* Number of words in the query matching in the result
* Filters
* Distance between words
* Best matching attribute in the record
* Number of words matching exactly (without typo)
* Custom ranking
What that means is that only with the same Number of typos will Geolocation be considered. So your custom ranking being at the bottom of that list means that it will only be considered if all other criteria are the same.
However, you can use your own custom ranking and move it up on the list to improve it's relevance to your results. For more information on Algolia's ranking strategy and custom ranking please see https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#algolias-ranking-strategy 

In general, I'd recommend you going to the faq search at the top right of this page and typing in your question. In most cases, your questions are going to be ones that other people had before you: https://www.algolia.com/doc/faq/basics/what-is-a-record/

Best!

#### Question 2:

> Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Hi Matt,
First off, I apologize for any inconvenience the new dashboard design is causing you.
Secondly, we appreciate the feedback as knowing about the issues you face will help us improve our product over time. Please keep the feedback coming if you have any more.

About your particular issue, In your index screen, you should be able to do them both from Manage Index > Clear or Delete. You need to type CLEAR or DELETE and hit enter or click the Delete button. These additional steps are to avoid someone mistakenly taking these actions since there is no way back from them. If you find you're taking these actions frequently and the UI is slowing you down, I'd suggest you try doing them via the API as described here: https://www.algolia.com/doc/api-reference/api-methods/clear-objects/ and here: https://www.algolia.com/doc/api-reference/api-methods/delete-index/

If you have any questions or any more feedback please let us know.
Best!

#### Question 3:

> I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
Regards, Leo

Hi Leo,

Setting up Algolia should be pretty straightforward and you have me and my team to support you through the journey if you hit a snag on the road. 

The high level process is as follows 
* Create an Algolia account
* Create indices of your data in Algolia 
* Integrate Algolia on your site

Depending on the platform on which your website is on, we may have an integration already built out for it or if you're starting from scratch, the documentation, community and the Algolia team is here to help.

If you wouldn't mind sharing what site you've got in mind, we can take you through the options that make sense for you.

Additionally, here are some resources if you want to get started on your own:

* Here's a good starting point: https://www.algolia.com/doc/ from there, I'd look into Integrations in the header and take it from there.
* You can also create an account and get your hands dirty with a free trial here: https://www.algolia.com/users/sign_up

Please let me know how we can help.
Best!